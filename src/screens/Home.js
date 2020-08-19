import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { Content, Section, H2, H3, P } from "../components";
import { getHomePage, getCurrentUser } from "../modules/api";

const Home = () => {
  let state = {};

  const setState = (newState) => {
    state = { ...state, ...newState };
  };

  const next = (doc) => {
    const vnode = document.getElementById("content");
    console.log("document", doc.exists);
    if (!doc.exists) {
      return;
    }
    const data = doc.data();
    console.log("data", data);
    setState(data);
    patch(vnode, view(state));
  };

  const error = (error) => {
    console.log("error", error);
  };

  getCurrentUser().then((user) => {
    const subscription = getHomePage(user.uid, next, error);
  });

  const view = (doc) => (
    <Content style={{ margin: "16px" }}>
      <H2>{doc.title}</H2>
      <P>{doc.caption}</P>
      <div>
        {doc.sections.map((section) => {
          return <H3>{section.title}</H3>;
        })}
      </div>
    </Content>
  );
};

export default Home;
