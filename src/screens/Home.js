import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { patch } from "../modules/vdom";
import { Content, H2, H3, P, SectionAddNew } from "../components";
import { getHomePage, saveHomePage, getCurrentUser } from "../modules/api";
import { Icon, bars } from "../modules/icons";

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

  const handleAdd = (value) => {
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

  const handleEdit = (section, field) => (e) => {
    const oldSection = state.data.sections.find(
      (x) => x.title === section.title
    );
    const newSection = {
      ...oldSection,
      [field]: e.target.textContent,
      edited: Math.floor(Date.now()),
    };

    const sections = [
      ...state.data.sections.filter((x) => x.title !== oldSection.title),
      newSection,
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
    state.data[field] = e.target.textContent;

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
                  <Icon
                    style={{
                      fill: theme.palette.default.contrastText,
                      background: theme.palette.default.main,
                    }}
                    icon={bars}
                    height={theme.spacing(8)}
                    width={theme.spacing(8)}
                  />
                  <H3
                    on-blur={handleEdit(section, "title")}
                    contentEditable="true"
                  >
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
