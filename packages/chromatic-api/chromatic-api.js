/* global Chromatic:true */
import React from 'react';
import {ReactiveDict} from 'meteor/reactive-dict';

/**
 * Chromatic API
 */
export const Chromatic = {
  // Note: both Entry and Spec must be function-valued properties, and
  // cannot be defined with method shorthand syntax, because they will be
  // invoked as constructors, and methods do not have a .prototype.

  /**
   * Constructs a styleguided component entry
   * @param {React.Component} component
   * @param {Object} [options]
   *    specs: {Optional Array} - a list of specs supported
   *    isPage: {Optional Boolean} - should it be displayed on it's own
   *      (rather than inside the component styleguide)? (NOTE cannot have specs)
   *    name: {Optional String} - change the entry's name (from it's displayName)
   * @returns {Object} the constructed component object
   */
  Entry: function Entry(component, options) {
    check(component, Function);

    // how to check this?
    check(component, React.Component.constructor);
    check(options, Match.Optional({
      specs: Match.Optional(Array),
      isPage: Match.Optional(Boolean),
      name: Match.Optional(String)
    }));

    if (options && options.specs && options.isPage) {
      throw new Meteor.Error('argument-error', 'Cannot have specs for a styleguide page entry');
    }

    this.name = (options && options.name) || component.displayName || component.name;
    if (!this.name) {
      throw new Meteor.Error('argument-error', 'Cannot determine name from component');
    }
    this.component = component;
    this.specs = (options && options.specs) || [Chromatic.defaultSpec()];
    this.isPage = (options && options.isPage) || false;
  },

  /**
   * Constructs a component spec for the styleguide
   * @param {String} name - the name of the spec
   * @param {Object} [options]
   *    setup: {Optional Function} - a function to run before the spec
   *    teardown: {Optional Function} - a function to run after the spec
   *    props: {Optional Object|Function} - the props of the spec
   * @returns {Object} the constructed spec object
   */
  Spec: function Spec(name, options) {
    check(name, String);
    check(options, {
      setup: Match.Optional(Function),
      teardown: Match.Optional(Function),
      props: Match.OneOf(Object, Function)
    });

    this.name = name;
    this.setup = options.setup;
    this.teardown = options.teardown;
    this.props = options.props;
  },

  defaultSpec() {
    return new Chromatic.Spec('default', {
      props: {}
    });
  },

  /**
   * Adds a react component to the styleguide
   * @param {Object} component - a React Component
   * @returns {void}
   */
  add(component, options) {
    this.addEntry(new Chromatic.Entry(component, options));
  },

  /**
   * Adds a styleguided entry to the styleguide
   * @param {Object} entry - an instance of Chromatic.Entry
   * @returns {void}
   */
  addEntry(entry) {
    check(entry, Chromatic.Entry);
    Chromatic._entries[entry.name] = entry;
    this._entriesDict.set(entry.name, true);
  },

  /**
   * Gets a styleguide entry (reactive)
   * @param {String} name - the name of the entry
   * @returns {Object} entry - an instance of Chromatic.Entry
   */
  entry(name) {
    check(name, String);
    return this._entriesDict.get(name) ? Chromatic._entries[name] : null;
  },

  /**
   * Returns the list of non-page styleguide entries (reactive)
   * @returns {[Chromatic.Entry]}
   */
  allEntries: function() {
    this._entriesDict.allDeps.depend();
    const entries = _.values(Chromatic._entries);
    return _.filter(entries, (entry) => !entry.isPage);
  },

  /**
   * Returns the list of page styleguide entries
   * @returns {[Chromatic.Entry]}
   */
  allPages: function() {
    const entries = _.values(Chromatic._entries);
    return _.filter(entries, (entry) => entry.isPage);
  },

   /**
   * A dict that contains the list of styleguide entries
   */
  _entries: {},
  _entriesDict: new ReactiveDict()
};
