# TODO -- explain usage

## How it works

See the `<FormStyleguide>` for an example use.

The `<Form>` component contains the current state of the form as it's state.

Each input/field component is "dumb" and uses the `value/errors/onChange` props to read it's current value (and set new values on change) via the outer `<Form>` component.

This is achieved via the use of `context` and a wrapping "smart" component with the `makeField` function. This uses context and some magic to make it work. It seems like an idiomatic approach but I'm not totally sure (I *strongly* prefer a wrapping component here because it means the dumb "view" component can be styleguided in a simple way, plus is easy to inspect in the react inspector, plus other good stuff). 

The component that actually defines the form (the "form instance" perhaps), in this case `<FormStyleguide>` can use the state of the form to drive it's own state via the `onChange` prop to the form. The idea is to make the minimum possible change to the outer state based on the changes to the inner state. 

So in our example, we just update `state.canSubmit`, rather than doing anything like setting the complete state on the `<FormStyleguide>`.

Additionally the instance should set an `onSubmit` prop that does whatever and throws a `ValidationError` if it wants to invalidate.

## Issues?

- Feels wrong to not be setting value on inputs via props but it's difficult without a lot of boilerplate (actually this is less bad with a wrapper component)

- Needing to pass state changes up the chain via `componentWillUpdate` in Form is potentially the wrong pattern (?)

- Potential performance problems w/ both of the above. Ultimately does every form element re-draw when I type a char? This seems bad if so. Can it be avoided without changing the pattern? [I think maybe it's ok now the inputs are super dumb]

- How to do checked/unchecked for radios and checkboxes? -- is <Radio value="one" ourValue="two" /> a good pattern or is it better to stick to spec and override the wrapper component (I suspect we'll want the second for checkboxes where it maps to a boolean or list rather than a string).