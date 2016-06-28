/* global CodeBlock:true */
/* global React hljs classnames */
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

CodeBlock = React.createClass({
  propTypes: {
    code: React.PropTypes.string,
    className: React.PropTypes.string
  },
  render() {
    const {code, className, ...other} = this.props;
    const formattedCode = hljs.highlightAuto(code);
    return (
      <pre {...other} className={classnames('code-block', className)}
        dangerouslySetInnerHTML={{__html: formattedCode.value}} />
    );
  }
});


if (Chromatic) {
  Chromatic.add(CodeBlock, {
    specs: [
      new Chromatic.Spec('default', {props: {
        code: `{ "json": "value" };
        const square = function(x) { return Math.pow(x, 2); }
        // comment`
      }}),
      new Chromatic.Spec('one-line', {props: {
        code: `const clamp = (v, min, max) => v < min ? min : v > max ? max : v;`
      }}),
    ]
  });

  Chromatic.addClass('code', ['code-block'])
}
