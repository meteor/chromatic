import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '^15.0.0'
}, 'mdg:buttons');

export { ProgressButton } from './ProgressButton.js';
export { LoadingButton } from './LoadingButton.js';
