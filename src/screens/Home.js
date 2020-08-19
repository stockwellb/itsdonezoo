import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { Content, Section, H2, H3, P } from "../components";
import {
  getHomePage,
  saveHomePage,
  getCurrentUser,
  getCurrentTimestamp,
} from "../modules/api";

const Home = () => {
  let state = { subscription: null, data: null };

  const setState = (newState) => {
    state = { ...state, ...newState };
  };

  const next = (snapshot) => {
    const vnode = document.getElementById("content");
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

  const handleBlur = (section, field) => (e) => {
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
    state.data.sections = sections;

    getCurrentUser().then((user) => {
      saveHomePage(user.uid, state.data);
    });
  };

  const view = (doc) => (
    <Content style={{ margin: "16px" }}>
      <H2>{doc.title}</H2>
      <P>{doc.caption}</P>
      <div>
        {doc.sections
          .sort((a, b) => (a.created > b.created ? 1 : -1))
          .map((section) => {
            return (
              <H3 on-blur={handleBlur(section, "title")} contentEditable="true">
                {section.title}
              </H3>
            );
          })}
      </div>
    </Content>
  );
};

export default Home;
