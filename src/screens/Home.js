import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { patch } from "../modules/vdom";
import { Content, H2, H3, P } from "../components";
import { getHomePage, saveHomePage, getCurrentUser } from "../modules/api";
import { Icon, ellipsisVertical, plusSquare, bars } from "../modules/icons";

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

  const handleSectionBlur = (section, field) => (e) => {
    if (!section && !e.target.value) {
      return;
    }

    if (!state.data.sections) {
      state.data.sections = [];
    }
    const oldSection =
      section && state.data.sections.find((x) => x.title === section.title);
    const newSection = section
      ? {
          ...oldSection,
          [field]: e.target.textContent,
          edited: Math.floor(Date.now()),
        }
      : {
          [field]: e.target.value,
          edited: Math.floor(Date.now()),
          created: Math.floor(Date.now()),
        };
    const sections = section
      ? [
          ...state.data.sections.filter((x) => x.title !== oldSection.title),
          newSection,
        ]
      : [...state.data.sections, newSection];

    state.data.sections = sections;
    state.data.edited = Math.floor(Date.now());
    console.log(state.data.sections);

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
                    style={{ fill: theme.palette.default.contrastText }}
                    icon={bars}
                  />
                  <H3
                    on-blur={handleSectionBlur(section, "title")}
                    contentEditable="true"
                  >
                    {section.title}
                  </H3>
                </div>
              );
            })}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            style={{ fill: theme.palette.default.contrastText }}
            icon={plusSquare}
          />
          <input
            type="text"
            placeholder="add new section"
            style={{
              background: "transparent",
              border: `1px solid ${theme.palette.default.border}`,
              color: theme.palette.default.contrastText,
              width: "175px",
              fontSize: "18px",
              padding: "8px",
              marginLeft: "4px",
            }}
            on-blur={handleSectionBlur(null, "title")}
          ></input>
        </div>
      </div>
    </Content>
  );
};

export default (() => themeComponent(theme))();
