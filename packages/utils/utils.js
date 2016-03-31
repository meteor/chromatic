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
  get: function(obj, p) {
    var path = p;

    if (typeof path === 'string') {
      path = path.split('.');
    }
    if (!path || !path.length) {
      return obj;
    }

    if (path[0] in obj) {
      return Utils.get(obj[path[0]], path.slice(1));
    }

    return void 0;
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
  }
});
