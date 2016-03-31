/* global DateVar:true */

DateVar = class extends Tracker.Dependency {
  constructor(delay) {
    super();
    this.delay = delay;
  }
  get() {
    this.depend();
    if (!this._timeout) {
      Meteor.setTimeout(() => {
        this.changed();
      }, this.delay);
    }
    return new Date();
  }
};
