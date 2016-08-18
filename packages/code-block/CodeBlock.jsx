/* global CodeBlock:true */
/* global hljs */

import classnames from 'classnames';
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
        code: `{
          "galaxy.meteor.com": {
            "env": {
              "ROOT_URL": "https://atmospherejs.com",
              "MONGO_URL": "mongodb://atmosphere:asdf-asdf@candidate.6.mongolayer.com:10396,candidate.5.mongolayer.com:10513/atmosphere?replicaSet=set-55b0177a159f072bc8001267",
              "MONGO_OPLOG_URL": "mongodb://atmosphere:asdf-asdf@candidate.6.mongolayer.com:10396,candidate.5.mongolayer.com:10513/local?authSource=atmosphere"
            }
          },
          "public": {
            "environment": "production"
          },
          "meteor-developer": {
            "appId": "4NFnBrv555Sc62PyD",
            "appSecret": "asdf-asdf"
          },
          "github": {
            "clientId": "235670725ea126e1b2fa",
            "clientSecret": "asdf-asdf"
          },
          "elastic": {
            "hosts": [
              "https://atmosphere:asdf-asdf@aws-us-east-1-portal2.dblayer.com:10484/",
              "https://atmosphere:asdf-asdf@aws-us-east-1-portal1.dblayer.com:10788/"
            ],
            "log": ["error", "warning"],
            "apiVersion": "1.5"
          }
        }`
      }}),
      new Chromatic.Spec('one-line', {props: {
        code: `{
          {"galaxy.meteor.com":{"env":{"MONGO_URL": "mongodb://zol:zoltestpassword@candidate.0.mongolayer.com:10211/zoltestdb?replicaSet=set-532b87433667c51a3c00195a"}},"longline":"foobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbazfoobarbaz"}
        }`
      }}),
    ]
  });
}
