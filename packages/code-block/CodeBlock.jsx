/* global CodeBlock:true */
/* global hljs */

import classnames from 'classnames';
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

// propTypes: {
//   code: React.PropTypes.string,
//     className: React.PropTypes.string
// },

export const CodeBlock = ({code, className, ...other}) => {
  const formattedCode = hljs.highlightAuto(code);
  return (
    <pre {...other} className={classnames('code-block', className)}
      dangerouslySetInnerHTML={{__html: formattedCode.value}} />
  );
};


if (Chromatic) {
  Chromatic.add(CodeBlock, {
    specs: [
      new Chromatic.Spec('default', {props: {
        code: `{
          "public": {
            "environment": "production"
          },
          "logSettings": {
            "level": "debug",
            "options": {
              "treatWarningsAsErrors": true
            }
          }
        }`
      }}),
      new Chromatic.Spec('one-line', {props: {
        code: `items.find().fetch().map(i => i.name);`
      }}),
    ]
  });
}
