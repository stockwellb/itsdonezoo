import { generatePushID } from "../modules/lib";

function HomeModel(initialState) {
  this._state = initialState || {};
  this._onChangeHandler = null;
  this._onLoadHandler = null;
}

HomeModel.prototype = {
  load: function (state) {
    this._state = state;
    this._onLoadHandler && this._onLoadHandler(this._state);
  },
  setField: function (field, value) {
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
    this._onChangeHandler && this._onChangeHandler(this._state);
  },
  onChange: function (handler) {
    this._onChangeHandler = handler;
  },
  onLoad: function (handler) {
    this._onLoadHandler = handler;
  },

  addSection: function (value) {
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

  removeSection: function (section) {
    const oldSection = this._state.sections.find((x) => x.id === section.id);

    const sections = [
      ...this._state.sections.filter((x) => x.id !== oldSection.id),
    ];

    this._saveSections(sections);
  },

  editSection: function (section, value) {
    const oldSection = this._state.sections.find((x) => x.id === section.id);
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
    const newState = { ...this._state };
    newState.edited = Math.floor(Date.now());
    newState.sections = sections;
    this._state = newState;
    this._onChangeHandler && this._onChangeHandler(this._state);
  },
};

export default HomeModel;
