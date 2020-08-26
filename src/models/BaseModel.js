function BaseModel(initialState) {
  this.state = initialState || {};
  this.onDispatchedHandler = null;
  this.onLoadHandler = null;
  this.subscription = null;
  this.history = [];
}

BaseModel.prototype = {
  subscribe: function (subscriber) {
    this._subscription = subscriber(
      (snapshot) => this.load(snapshot.data()),
      (error) => console.log("error", error)
    );
  },

  load: function (state) {
    this.state = state;
    if (this.history.length === 0) {
      this.history.push(state);
    }
    this.onLoadHandler && this.onLoadHandler(this.state);
  },

  getState: function () {
    return { ...this.state };
  },

  onDispatched: function (handler) {
    this.onDispatchedHandler = handler;
  },

  onLoad: function (handler) {
    this.onLoadHandler = handler;
  },
  undo: function () {
    const previous = this.history.slice(-2).reverse().pop();
    this.setState(previous);
  },

  setState: function (state) {
    this.state = state;
    this.history.push(state);
    if (this.history.length > 25) {
      this.history = this.history.slice(-25);
    }
    console.log(this.history);
  },
};

export default BaseModel;
