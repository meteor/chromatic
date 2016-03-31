# Chromatic
Explore, visualize, and prototype your UI components.

## Usage

``` bash
meteor add mdg:chromatic
```

Chromatic is available at `/styleguide` in your app in development mode.

``` js
const {Chromatic} = Package['mdg:chromatic-api'] || {};

ComponentName = React.createClass({
  // code
});

if (Chromatic) {
  Chromatic.add(ComponentName, {
    specs: [
      new Chromatic.Spec('specName1', {props:
        {
          // props used by your component
        }
      }),
      new Chromatic.Spec('specName2', {props:
        {
          // props used by your component
        }
      })
    ]
  });
}
```

## Package list
The following packages have been added to the root of the project
```
react
kadira:flow-router
mdg:react-meteor-app
mdg:chromatic  # this is all you need to use chromatic in your react app

# below are packages with extra components you can use in your projects
mdg:animations
mdg:buttons
mdg:callout
mdg:code-block
mdg:color-grid
mdg:date-components
mdg:form-components
mdg:list
mdg:loading-spinner
mdg:overlays
mdg:sortable
mdg:tooltips
mdg:outlines
```
