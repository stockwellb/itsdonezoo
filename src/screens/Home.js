import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { patch } from "../modules/vdom";
import HomeModel from "../models/HomeModel";
import { Content, H2, H3, P, SectionAddNew } from "../components";
import { getHomePage, saveHomePage, getCurrentUser } from "../modules/api";

const themeComponent = (theme) => ({}, children) => {
  let subscription;
  const model = new HomeModel();

  model.onChange((state) => {
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

  const activateSubscription = (user) => {
    subscription = getHomePage(
      user.uid,
      (snapshot) => model.load(snapshot.data()),
      (error) => console.log("error", error)
    );
  };

  const editOrRemoveSection = (section) => (e) => {
    const value = e.target.textContent;
    if (!value) {
      model.removeSection(section);
    } else {
      model.editSection(section, value);
    }
  };

  const addSection = (value) => {
    model.addSection(value);
  };

  const editField = (field) => (e) => {
    let value = e.target.textContent;
    model.setField(field, value);
  };

  const view = (doc) => (
    <Content style={{ margin: theme.spacing(4) }}>
      <H2 on-blur={editField("title")} contentEditable="true">
        {doc.title}
      </H2>
      <P on-blur={editField("caption")} contentEditable="true">
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

  getCurrentUser().then(activateSubscription);
  return <Content style={{ margin: theme.spacing(4) }}></Content>;
};

export default (() => themeComponent(theme))();
