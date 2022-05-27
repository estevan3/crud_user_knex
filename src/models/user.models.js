const yup = require("yup");

const userModel = yup.object().shape({
  email: yup.string().email("Invalid email address").strict().required(),
  password: yup.string().strict().required(),
});

module.exports = userModel;
