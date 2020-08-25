import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { patch } from "../modules/vdom";
import { showErrorMessage, showMessage } from "../modules/error";
import HomeModel from "../models/HomeModel";
import { Content, H2, H3, P, SectionAddNew } from "../components";
import { homePageSubscription, saveHomePage } from "../modules/api";

const themeComponent = (theme) => () => {
  let vnode;
  const model = new HomeModel();
  console.log(HomeModel.test);

  // Model events
  model.onDispatched((state, command) => {
    const title = command ? command.meta || "Saved!" : "Saved!";
    saveHomePage(state)
      .then(() =>
        showMessage(title, {
          clear: true,
          action: { f: () => model.undo(), title: "Undo" },
        })
      )
      .catch((error) => {
        showMessage(error.message, {
          clear: true,
        });
      });
  });

  model.onLoad((state) => {
    vnode = document.getElementById("content");
    // vnode = vnode || document.getElementById("content"); //why doesn't the vdom update on section add or delete?
    patch(vnode, view(state));
  });

  model.subscribe(homePageSubscription);

  // UI Handlers
  const editOrRemoveSection = (section) => (e) => {
    const currentValue = e.target.textContent;
    const previousValue = e.target.getAttribute("data-init");

    if (previousValue === currentValue) {
      return;
    }

    let command;
    if (!currentValue) {
      command = {
        action: model.actions.REMOVE_SECTION,
        data: section,
        meta: "Section Removed!",
      };
    } else {
      command = {
        action: model.actions.EDIT_SECTION,
        data: {
          oldSection: section,
          value: currentValue,
        },
        meta: "Section Saved!",
      };
    }
    model.dispatch(command);
  };

  const addSection = (value) => {
    model.dispatch({
      action: model.actions.ADD_SECTION,
      data: value,
      meta: "Section Added!",
    });
  };

  const editField = (action) => (e) => {
    const previousValue = e.target.getAttribute("data-init");
    const currentValue = e.target.textContent;
    if (previousValue === currentValue) {
      return;
    }
    model.dispatch({ action, data: currentValue, meta: "Saved!" });
  };

  // View
  const view = (doc) => (
    <Content style={{ margin: theme.spacing(4) }}>
      <H2
        data-init={doc.title}
        on-blur={editField(model.actions.EDIT_TITLE)}
        contentEditable="true"
      >
        {doc.title}
      </H2>
      <P
        data-init={doc.caption}
        on-blur={editField(model.actions.EDIT_CAPTION)}
        contentEditable="true"
      >
        {doc.caption}
      </P>
      <div>
        {doc.sections &&
          doc.sections
            .sort((a, b) => (a.created > b.created ? 1 : -1))
            .map((section) => {
              return (
                <div
                  id={section.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <H3
                    data-init={section.title}
                    on-blur={editOrRemoveSection(section)}
                    contentEditable="true"
                  >
                    {section.title}
                  </H3>
                </div>
              );
            })}
        <SectionAddNew onAdd={addSection} />
      </div>
    </Content>
  );
  return <Content style={{ margin: theme.spacing(4) }}></Content>;
};

export default (() => themeComponent(theme))();
