/* global ChromaticExplorer:true */
/* global FlowRouter ComponentSpec */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

ChromaticExplorer = {
  /**
   * Configures the styleguide.  Currently only supports basePath option for
   * adding routes via Iron:Router.
   * @param {Object} options
   *    basePath: Object - the routable path to add for styleguide
   * @returns {void}
  //  */

  configure: function(options) {
    check(options, {
      basePath: String,
      onRouteEnter: Match.Optional(Function)
    });

    const chromaticRoutes = FlowRouter.group({
      prefix: options.basePath,
      triggersEnter: [(context, redirect) => {
        if (options.onRouteEnter) {
          options.onRouteEnter(context, redirect);
        }
      }]
    });

    // add routes for any app-defined pages
    const pages = Chromatic.allPages();
    pages.forEach(page => {
      chromaticRoutes.route(`/${page.name}/:entryName?`, {
        name: `chromatic-${page.name}-styleguide`,
        component: page.component
      });
    });
    //  add iframe routes for each component
    chromaticRoutes.route('/_component/:entryName?/:specName?', {
      name: 'chromatic-component-iframe',
      component: ComponentSpec
    });
    //  add iframe routes for 'all' spec option for each component
    chromaticRoutes.route('/_component/:entryName?/all', {
      name: 'chromatic-component-iframe',
      component: ComponentSpec
    });

    chromaticRoutes.route('/', {
      action: () => {
        FlowRouter.go(`chromatic-${pages[0].name}-styleguide`);
      }
    });
  }
};
