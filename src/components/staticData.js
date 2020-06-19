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

function isValidDate(value){
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
      icon : "thumbnails"
    },
    textField: {
      label: { default: "Text field" },
      path: "textField",
      icon: "quote-right"
    },
    selectField: {
      label: { default: "List" },
      path: "selectField",
      icon: "triangle-down"
    },
    dateTimeField: {
      label: { default: "Date/Time field" },
      path: "dateTimeField",
      icon: "calendar"
    },
    richTextField: {
      label: { default: "Richtext field" },
      path: "richTextField",
      icon: "file-edit"
    },
  },

  formValidators: {
    required: {
      build: function () {
        return required;
      },
    },
    minLength: {
      build: function (data) {
        return minLength(data.minLength);
      },
    },
    maxLength: {
      build: function (data) {
        return maxLength(data.maxLength);
      },
    },
    number: {
      build: function () {
        return number;
      },
    },
    email: {
      build: function () {
        return email;
      },
    },
    dateTime: {
      build: function () {
        return dateTimeValidator;
      },
    },
  },
  variableTypes: {
    text: {
      text: "String or Text",
      optionalValidations: ["required", "minLength", "maxLength", "email"],
    },
    number: {
      text: "Numeric value",
      implicitValidations: ["number"],
      optionalValidations: ["required"],
    },
    richtext: {
      text: "Rich content",
      optionalValidations: ["required"],
    },
    datetime: {
      text: "Date and time",
      implicitValidations: ["dateTime"],
      optionalValidations: ["required"],
    },
    datetimerange: {
      text: "Date and time range",
      optionalValidations: ["required"],
    },
    listitemarray: {
      text: "Multiple selection items",
      optionalValidations: ["required"],
    },
    listitem: {
      text: "Selection item",
      optionalValidations: ["required"],
    },
  },
};
