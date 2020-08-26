import { generatePushID } from "../modules/lib";
import BaseModel from "./BaseModel";

export const initialData = {
  title: "Home",
  caption: "You can keep track of all your lists right here!",
  sections: [
    {
      id: generatePushID(),
      title: "due today",
      created: 0,
      edited: 0,
    },
    {
      id: generatePushID(),
      title: "due this week",
      created: 1,
      edited: 1,
    },
  ],
};

const actions = {
  EDIT_TITLE: "EDIT_TITLE",
  EDIT_CAPTION: "EDIT_CAPTION",
  ADD_SECTION: "ADD_SECTION",
  EDIT_SECTION: "EDIT_SECTION",
  REMOVE_SECTION: "REMOVE_SECTION",
  UNDO: "UNDO",
};

function HomeModel(initialState) {
  BaseModel.call(this, initialState || initialData);
}

HomeModel.prototype = Object.create(BaseModel.prototype);

HomeModel.prototype.actions = actions;

HomeModel.prototype.dispatch = function (command) {
  console.log("command", command);
  switch (command.action) {
    case actions.EDIT_TITLE: {
      this._setField("title", command.data);
      break;
    }
    case actions.EDIT_CAPTION: {
      this._setField("caption", command.data);
      break;
    }
    case actions.ADD_SECTION: {
      this._addSection(command.data);
      break;
    }
    case actions.REMOVE_SECTION: {
      this._removeSection(command.data);
      break;
    }
    case actions.EDIT_SECTION: {
      this._editSection(command.data);
      break;
    }
    case actions.UNDO: {
      this._undo();
      break;
    }
  }
  this._onDispatchedHandler &&
    this._onDispatchedHandler(this._state, command || {});
};

HomeModel.prototype._setField = function (field, value) {
  if (!value) {
    if (field === "title") {
      value = "Home";
    }
    if (field === "caption") {
      value = "Add some lists here!";
    }
  }

  const newState = {
    ...this._state,
    [field]: value,
    edited: Math.floor(Date.now()),
  };
  this._setState(newState);
};

HomeModel.prototype._addSection = function (value) {
  if (!this._state.sections) {
    this._state.sections = [];
  }

  const newSection = {
    id: generatePushID(),
    title: value,
    edited: Math.floor(Date.now()),
    created: Math.floor(Date.now()),
  };

  const sections = [...this._state.sections, newSection];

  this._saveSections(sections);
};

HomeModel.prototype._removeSection = function (section) {
  const sections = [...this._state.sections.filter((x) => x.id !== section.id)];

  this._saveSections(sections);
};

HomeModel.prototype._editSection = function ({ oldSection, value }) {
  oldSection = this._state.sections.find((x) => x.id === oldSection.id);
  const updatedSection = {
    ...oldSection,
    title: value,
    edited: Math.floor(Date.now()),
  };

  const sections = [
    ...this._state.sections.filter((x) => x.id !== oldSection.id),
    updatedSection,
  ];
  this._saveSections(sections);
};

HomeModel.prototype._saveSections = function (sections) {
  const newState = {
    ...this._state,
    edited: Math.floor(Date.now()),
    sections: sections,
  };
  this._setState(newState);
};

HomeModel.prototype.constructor = HomeModel;

export default HomeModel;
