import Snabbdom from "snabbdom-pragma";

const handleClick = (e) => alert(process.env.GREETING);
export default () => (
  <div>
    <div>this is home</div>
    <button type="button" on-click={handleClick}>
      Hey
    </button>
  </div>
);
