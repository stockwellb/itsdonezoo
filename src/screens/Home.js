import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { patch } from "../modules/vdom";
import { Content, H2, H3, P, SectionAddNew, IconButton } from "../components";
import { getHomePage, saveHomePage, getCurrentUser } from "../modules/api";
import { bars } from "../modules/icons";

const themeComponent = (theme) => () => {
  let state = { subscription: null, data: null };
  let vnode;

  const setState = (newState) => {
    state = { ...state, ...newState };
  };

  const next = (snapshot) => {
    vnode = document.getElementById("content");
    if (!snapshot.exists) {
      return;
    }
    setState({ data: snapshot.data() });
    patch(vnode, view(state.data));
  };

  const error = (error) => {
    console.log("error", error);
  };

  getCurrentUser().then((user) => {
    const subscription = getHomePage(user.uid, next, error);
    setState({ subscription });
  });

  const handleBlur = (section) => (e) => {
    if (!e.target.textContent) {
      remove(section);
    } else {
      edit(section, e);
    }
  };

  const handleAdd = (value) => {
    if (!value) {
      return;
    }

    if (!state.data.sections) {
      state.data.sections = [];
    }

    const newSection = {
      title: value,
      edited: Math.floor(Date.now()),
      created: Math.floor(Date.now()),
    };

    const sections = [...state.data.sections, newSection];

    save(sections);
  };

  const edit = (section, e) => {
    const oldSection = state.data.sections.find(
      (x) => x.title === section.title
    );
    const newSection = {
      ...oldSection,
      title: e.target.textContent,
      edited: Math.floor(Date.now()),
    };

    const sections = [
      ...state.data.sections.filter((x) => x.title !== oldSection.title),
      newSection,
    ];

    save(sections);
  };

  const remove = (section) => {
    const oldSection = state.data.sections.find(
      (x) => x.title === section.title
    );

    const sections = [
      ...state.data.sections.filter((x) => x.title !== oldSection.title),
    ];

    save(sections);
  };

  const save = (sections) => {
    state.data.sections = sections;
    state.data.edited = Math.floor(Date.now());

    getCurrentUser().then((user) => {
      saveHomePage(user.uid, state.data);
    });
  };

  const handleRootBlur = (field) => (e) => {
    let value = e.target.textContent;

    if (!value) {
      if (field === "title") {
        value = "Home";
      }
      if (field === "caption") {
        value = "Add some lists here!";
      }
    }

    state.data[field] = value;

    getCurrentUser().then((user) => {
      saveHomePage(user.uid, state.data);
    });
  };

  const view = (doc) => (
    <Content style={{ margin: theme.spacing(4) }}>
      <H2 on-blur={handleRootBlur("title")} contentEditable="true">
        {doc.title}
      </H2>
      <P on-blur={handleRootBlur("caption")} contentEditable="true">
        {doc.caption}
      </P>
      <div>
        {doc.sections &&
          doc.sections
            .sort((a, b) => (a.created > b.created ? 1 : -1))
            .map((section) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <H3 on-blur={handleBlur(section)} contentEditable="true">
                    {section.title}
                  </H3>
                </div>
              );
            })}
        <SectionAddNew onAdd={handleAdd} />
      </div>
    </Content>
  );
};

export default (() => themeComponent(theme))();
