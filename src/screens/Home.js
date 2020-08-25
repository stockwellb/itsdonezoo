import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { patch } from "../modules/vdom";
import HomeModel from "../models/HomeModel";
import { Content, H2, H3, P, SectionAddNew } from "../components";
import { getHomePage, saveHomePage, getCurrentUser } from "../modules/api";

const themeComponent = (theme) => ({}, children) => {
  let subscription;
  const model = new HomeModel();

  // Model events
  model.onDispatched((state) => {
    getCurrentUser().then((user) => {
      saveHomePage(user.uid, state);
    });
  });

  model.onLoad((state) => {
    if (!state) {
      return;
    }
    const vnode = document.getElementById("content");
    patch(vnode, view(state));
  });

  // Activate the Subscription
  const activateSubscription = (user) => {
    subscription = getHomePage(
      user.uid,
      (snapshot) => model.load(snapshot.data()),
      (error) => console.log("error", error)
    );
  };

  getCurrentUser().then(activateSubscription);

  // UI Handlers
  const editOrRemoveSection = (section) => (e) => {
    console.log("edit section");
    const value = e.target.textContent;
    let command;
    if (!value) {
      command = { action: model.actions.REMOVE_SECTION, data: section };
    } else {
      command = {
        action: model.actions.EDIT_SECTION,
        data: { oldSection: section, value },
      };
    }
    model.dispatch(command);
  };

  const addSection = (value) => {
    console.log("add section");
    model.dispatch({ action: model.actions.ADD_SECTION, data: value });
  };

  const editField = (action) => (e) => {
    console.log("edit field");
    let value = e.target.textContent;
    model.dispatch({ action, data: value });
  };

  // View
  const view = (doc) => (
    <Content style={{ margin: theme.spacing(4) }}>
      <H2 on-blur={editField(model.actions.EDIT_TITLE)} contentEditable="true">
        {doc.title}
      </H2>
      <P on-blur={editField(model.actions.EDIT_CAPTION)} contentEditable="true">
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
