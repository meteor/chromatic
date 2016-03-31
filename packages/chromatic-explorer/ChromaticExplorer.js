/* global ChromaticExplorer:true */
/* global FlowRouter ComponentSpec */

const {Chromatic} = Package['chromatic-api'] || {};

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
      basePath: String
    });

    // add routes for any app-defined pages
    const pages = Chromatic.allPages();
    pages.forEach(page => {
      FlowRouter.route(`${options.basePath}/${page.name}/:entryName?`, {
        name: `chromatic-${page.name}-styleguide`,
        component: page.component
      });
    });
    //  add iframe routes for each component
    FlowRouter.route(`${options.basePath}/_component/:entryName?/:specName?`, {
      name: 'chromatic-component-iframe',
      component: ComponentSpec
    });
    //  add iframe routes for 'all' spec option for each component
    FlowRouter.route(`${options.basePath}/_component/:entryName?/all`, {
      name: 'chromatic-component-iframe',
      component: ComponentSpec
    });

    FlowRouter.route(options.basePath, {
      action: () => {
        FlowRouter.go(`chromatic-${pages[0].name}-styleguide`);
      }
    });
  }
};
