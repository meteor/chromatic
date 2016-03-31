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
msg:animations
msg:buttons
msg:callout
msg:code-block
msg:color-grid
msg:date-components
msg:form-components
msg:list
msg:loading-spinner
msg:overlays
msg:sortable
msg:tooltips
msg:outlines
```
