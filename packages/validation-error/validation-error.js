/* global ValidationError:true SchemaValidationError:true */
/* global SimpleSchema */

ValidationError = class extends Meteor.Error {
  // errors take the form {fieldName1: "message1", fieldName2: "message2", ...}
  constructor(errors, reason = 'Validation Error') {
    super('validation-error', reason, errors);
    this.error = 'validation-error';
    this.reason = reason;
    this.details = errors;
    if (errors) {
      this.message += '\n' + _.map(errors, (error, field) => `  ${field}: ${error}`).join('\n');
    }
  }
};

SchemaValidationError = class extends ValidationError {
  // to be used with a SimpleSchemaValidationContext
  constructor(ssContext, reason = 'Validation Error') {
    const errors = {};
    ssContext.getErrorObject().invalidKeys.forEach((err) => {
      // remove .N from field names (SimpleSchema adds indexes for array errors)
      const fieldName = err.name.replace(/\..*/g, '');
      errors[fieldName] = err.message || err.type;
    });
    super(errors, reason);
  }
};
