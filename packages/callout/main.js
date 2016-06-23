import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '^15.0.0'
}, 'mdg:callout');

export { Callout } from './Callout.js';
