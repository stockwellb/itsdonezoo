import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { IconButton } from ".";
import { plusSquare } from "../modules/icons";

const themeComponent = (theme) => ({ style, onAdd, ...rest }, children) => {
  let state = "";
  const handleOnClick = () => {
    onAdd && onAdd(state);
  };
  const handleInput = (e) => {
    state = e.target.value;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="add new section ..."
        style={{
          background: "transparent",
          border: `1px solid ${theme.palette.default.border}`,
          color: theme.palette.default.contrastText,
          width: "175px",
          fontSize: theme.typography.fontSize,
          padding: theme.spacing(2),
        }}
        on-input={handleInput}
      />

      <IconButton
        style={{ padding: "0px", margin: theme.spacing(1) }}
        on-click={handleOnClick}
        icon={plusSquare}
      />
    </div>
  );
};

export default (() => themeComponent(theme))();
