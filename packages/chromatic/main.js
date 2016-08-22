// use conditional exports for these as they are debug-only packages
export const { Chromatic } = Package['mdg:chromatic-api'] || {};
export const { ChromaticExplorer } = Package['mdg:chromatic-explorer'] || {};
