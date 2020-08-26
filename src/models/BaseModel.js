function BaseModel(initialState) {
  this._state = initialState || {};
  this._onDispatchedHandler = null;
  this._onLoadHandler = null;
  this._subscription = null;
  this._history = [];
}

BaseModel.prototype = {
  subscribe: function (subscriber) {
    this._subscription = subscriber(
      (snapshot) => this.load(snapshot.data()),
      (error) => console.log("error", error)
    );
  },

  load: function (state) {
    this._state = state;
    if (this._history.length === 0) {
      this._history.push(state);
    }
    this._onLoadHandler && this._onLoadHandler(this._state);
  },

  getState: function () {
    return { ...this._state };
  },

  onDispatched: function (handler) {
    this._onDispatchedHandler = handler;
  },

  onLoad: function (handler) {
    this._onLoadHandler = handler;
  },
  _undo: function () {
    const previous = this._history.slice(-2).reverse().pop();
    this._setState(previous);
  },

  _setState: function (state) {
    this._state = state;
    this._history.push(state);
    if (this._history.length > 25) {
      this._history = this._history.slice(-25);
    }
  },
};

export default BaseModel;
