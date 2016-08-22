/* global Form FormInput FormTextarea FormRadio FormSelect FormCheckbox FormStepper
  ValidationError FormMaskedInput */

import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

let FormStyleguide = React.createClass({
  getInitialState() {
    return {
      canSubmit: false
    };
  },
  onChange(name, value, values) {
    this.setState({
      canSubmit: !!(values.name && values.password)
    });
  },
  onSubmit(values) {
    if (values.name !== 'tom') {
      throw new ValidationError({name: 'must be tom!'});
    } else {
      console.log('The form worked!', values); // eslint-disable-line no-console
    }
  },
  render() {
    return (
      <Form onSubmit={this.onSubmit} onChange={this.onChange} className="fieldset">
        <FormInput type="text" name="name" placeholder="Enter your Name" icon="user-alt"/>
        <FormInput type="text" name="password" placeholder="Enter your Password" icon="lock"/>
        <FormTextarea type="text" name="bio" placeholder="Tell us your lifestory" icon="lock"
          limit={140}/>

        <legend>Where are you from?</legend>
        <FormRadio name="country" ourValue="US" label="USA"/>
        <FormRadio name="country" ourValue="AU" label="AU"/>

        <FormSelect name="state">
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
        </FormSelect>

        <FormCheckbox name="gender" ourValue="Female" label="Female"/>
        <FormCheckbox name="gender" ourValue="Male" label="Male"/>

        <FormStepper name="componentCount" min={1} max={10} ready={true} />

        <FormFormattedInput mask="9999 9999 9999 9999" name="card" label="Credit Card" icon="credit"
          placeholder="xxxx-xxxx-xxxx-xxxx" size={20} maskChar=' '/>
        <FormFormattedInput mask="99/9999" name="expiry" label="Expiration" placeholder="mm/yyyy"
          maskChar=' '/>

        <button className="btn primary" type="submit" disabled={!this.state.canSubmit}>
          Submit Form
        </button>
      </Form>
    );
  }
});

if (Chromatic) {
  Chromatic.add(FormStyleguide);
}
