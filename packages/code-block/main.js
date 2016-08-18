import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '^15.0.0',
  'classnames': '^2.2.5'
}, 'mdg:callout');

export { Codeblock } from './CodeBlock.jsx';
