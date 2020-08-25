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

  const handleKeyup = (e) => {
    if (e.keyCode == 13) {
      state = e.target.value;
      onAdd && onAdd(state);
    }
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
          borderRight: "none",
          color: theme.palette.default.contrastText,
          width: "175px",
          fontSize: theme.typography.fontSize,
          padding: theme.spacing(2),
        }}
        on-keyup={handleKeyup}
        on-input={handleInput}
      />

      <IconButton
        color={theme.palette.default.main}
        background={theme.palette.primary.main}
        style={{
          border: `1px solid ${theme.palette.default.border}`,
          padding: "4px",
          borderLeft: "none",
        }}
        on-click={handleOnClick}
        icon={plusSquare}
      />
    </div>
  );
};

export default (() => themeComponent(theme))();
