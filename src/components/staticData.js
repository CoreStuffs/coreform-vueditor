import {
  required,
  minLength,
  maxLength,
  number,
  email,
} from "vuelidate/lib/validators";

import moment from "moment";

moment.locale("fr");
moment.defaultFormat = "L LT"; //"D/M/YYYY HH:mm";

function isValidDate(value) {
  console.log(value + " is valid?");
  var m = moment(value, moment.defaultFormatUtc, true);
  return m.isValid();
}

const dateTimeValidator = (value) => isValidDate(value);

export default {
  formControls: {
    columns: {
      label: { default: "Columns" },
      path: "grid",
      icon: "thumbnails",
    },
    textField: {
      label: { default: "Text field" },
      path: "textField",
      icon: "quote-right",
    },
    selectField: {
      label: { default: "List" },
      path: "selectField",
      icon: "triangle-down",
    },
    dateTimeField: {
      label: { default: "Date/Time field" },
      path: "dateTimeField",
      icon: "calendar",
    },
    richTextField: {
      label: { default: "Richtext field" },
      path: "richTextField",
      icon: "file-edit",
    },
  },

  formValidators: {
    required: {
      label: { default: "Required" },
      build: function () {
        return required;
      },
    },
    minLength: {
      label: { default: "Minimum length" },
      editorPath: "minlength",
      build: function (data) {
        return minLength(data.minLength);
      },
    },
    maxLength: {
      label: { default: "Maximum length" },
      build: function (data) {
        return maxLength(data.maxLength);
      },
    },
    number: {
      label: { default: "Is a valid number" },
      build: function () {
        return number;
      },
    },
    email: {
      label: { default: "Is a valid Email" },
      build: function () {
        return email;
      },
    },
    dateTime: {
      label: { default: "Is a valid date/time" },
      build: function () {
        return dateTimeValidator;
      },
    },
  },
  variableTypes: {
    text: {
      text: "String or Text",
      optionalValidators: ["required", "minLength", "maxLength", "email"],
    },
    number: {
      text: "Numeric value",
      implicitValidations: ["number"],
      optionalValidators: ["required"],
    },
    richtext: {
      text: "Rich content",
      optionalValidators: ["required"],
    },
    datetime: {
      text: "Date and time",
      implicitValidations: ["dateTime"],
      optionalValidators: ["required"],
    },
    datetimerange: {
      text: "Date and time range",
      optionalValidators: ["required"],
    },
    listitemarray: {
      text: "Multiple selection items",
      optionalValidators: ["required"],
    },
    listitem: {
      text: "Selection item",
      optionalValidators: ["required"],
    },
  },
};
