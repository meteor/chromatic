/* global Utils:true */

Utils = _.extend(Utils || {}, {
  key_value: function(object) {
    return _.map(object, function(val, key) {
      return {
        key: key,
        value: val,
        context: object
      };
    });
  },
  log: function() {
    var args = [].slice.call(arguments, 0);
    console.log.apply(console, args);
    var last = args.pop();
    return last;
  },
  capitalize: function(text) {
    return text && text.length ? text[0].toUpperCase() + text.slice(1) : text;
  },
  uncapitalize: function(text) {
    return text && text.length ? text[0].toLowerCase() + text.slice(1) : text;
  },
  singular: function(text) {
    if (/ies$/.test(text)) { // Xies -> Xy
      return text.substring(0, text.length - 3) + 'y';
    }
    if (/es$/.test(text)) { // Xes -> X
      return text.substring(0, text.length - 2);
    }
    if (/s$/.test(text)) { // Xs -> X
      return text.substring(0, text.length - 1);
    }
    return text;
  },
  plural: function(text) {
    if (text[text.length - 1].toLowerCase() === 's') {
      return text;
    }
    return text + 's';
  },
  pluralize: function(text, count) {
    return count === 1 ? Utils.singular(text) : Utils.plural(text);
  },
  pluralizeCount: function(count, text) {
    return count + ' ' + Utils.pluralize(text, count);
  },
  session: function(a) {
    return Session.get(a);
  },
  get: function(obj, path) {
    path = path.split('.');
    let val = obj;
    while (path.length && (val = val[path.shift()]));
    return val;
  },
  join: function(array, delimiter) {
    return array.join(delimiter);
  },
  classify: function(className, toggle) {
    return toggle ? className : void 0;
  },
  // NOTE: we could use lodash for this..?
  toKebabCase(string) {
    return string
      .replace(/\./g, '/')
      .replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`)
      // Clean up words that started with upper.
      .replace(/^-/, '')
      .replace(/\/-/g, '/');
  },
  toSplitWords(string) {
    return this.capitalize(string.replace(/([A-Z])/g, (c) => ` ${c}`));
  },
  // User-visible form of versionId
  formatVersionId(versionId) {
    // if the version id is "old" (i.e doesn't contain a version number, this is the best we can do)
    return versionId.split('-')[1] || '-';
  },
  formatContainerId(containerId) {
    // If the container id is in the old format, all we can do is return it right back to the
    // user. However, we don't expect this to actually happen
    return containerId.split('-')[1] || containerId;
  },
  clamp(v, min, max) {
    return v < min ? min : v > max ? max : v; // eslint-disable-line
  },
  extent(array, iterator) {
    const result = [null, null];
    const resultVal = [Infinity, -Infinity];
    if (typeof iterator !== 'function') iterator = (i) => i;
    _.each(array, (i) => {
      const v = iterator(i);
      if (typeof v !== 'number') return true;
      if (v < resultVal[0]) {
        result[0] = i;
        resultVal[0] = v;
      }
      if (v > resultVal[1]) {
        result[1] = i;
        resultVal[1] = v;
      }
    });
    return result;
  },
  formatKVP(obj) {
    const f = (v) => v instanceof Date ? v.toISOString() : // eslint-disable-line
                    typeof v === 'string' ? `'${v}'` :
                    v;
    return _.map(obj, (v, k) => [k, f(v)].join(': ')).join(' ');
  },
  throttledIncrement(collection, selector, d, extraModifier) {
    let acc = {};
    let timeout = null;
    const fun = () => {
      if (acc && _.keys(acc).length) {
        collection.update(selector, _.extend({$inc: acc}, extraModifier && extraModifier()));
        acc = {};
      }
    };
    return (modifier) => {
      _.each(modifier, (v, k) => {
        acc[k] = acc[k] || 0;
        acc[k] += v;
      });
      if (timeout) Meteor.clearTimeout(timeout);
      timeout = Meteor.setTimeout(() => {
        timeout = null;
        fun();
      }, d);
    };
  },
  cache(collection, selector = {}, options = {}, key = '_id') {
    const c = {};
    collection.find(selector, options).map((o) => { c[o[key]] = o; });
    return c;
  },
  liveCache(collection, selector = {}, options = {}, key = '_id') {
    const result = {
      cache: {},
      observer: null
    };
    const keyMap = {};
    const cursor = collection.find(selector, options);
    result.observer = cursor.observeChanges({
      added: (id, fields) => {
        const o = _.extend(fields, {_id: id});
        if (key in o) {
          keyMap[id] = o[key];
          result.cache[o[key]] = fields;
        }
      },
      changed: (id, fields) => {
        if (id in keyMap) {
          _.extend(result.cache[keyMap[id]], fields);
        }
      },
      removed: (id) => {
        if (id in keyMap) {
          delete result.cache[keyMap[id]];
        }
      }
    });
    return result;
  },
  prefixer(prefix) {
    return function(msg) {
      return [prefix, msg].join(': ');
    };
  }
});
