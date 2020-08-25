import { generatePushID } from "../modules/lib";
const actions = {
  EDIT_TITLE: "EDIT_TITLE",
  EDIT_CAPTION: "EDIT_CAPTION",
  ADD_SECTION: "ADD_SECTION",
  EDIT_SECTION: "EDIT_SECTION",
  REMOVE_SECTION: "REMOVE_SECTION",
};

function HomeModel(initialState) {
  this._state = initialState || {};
  this._onDispatchedHandler = null;
  this._onLoadHandler = null;
}

HomeModel.prototype = {
  actions: actions,
  load: function (state) {
    this._state = state;
    this._onLoadHandler && this._onLoadHandler(this._state);
  },

  onDispatched: function (handler) {
    this._onDispatchedHandler = handler;
  },

  onLoad: function (handler) {
    this._onLoadHandler = handler;
  },

  dispatch: function (command) {
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
    }
    this._onDispatchedHandler && this._onDispatchedHandler(this._state);
  },

  _setField: function (field, value) {
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
    this._state = newState;
  },

  _addSection: function (value) {
    if (!value) {
      return;
    }

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
  },

  _removeSection: function (section) {
    const sections = [
      ...this._state.sections.filter((x) => x.id !== section.id),
    ];

    this._saveSections(sections);
  },

  _editSection: function ({ oldSection, value }) {
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
  },

  _saveSections: function (sections) {
    const newState = {
      ...this._state,
      edited: Math.floor(Date.now()),
      sections: sections,
    };
    this._state = newState;
  },
};

export default HomeModel;
