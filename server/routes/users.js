import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

let router = express.Router();

const validateInput = (data) => {
  let errors = {};

  if (validator.isEmpty(data.userName)) {
    errors.userName = "The field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "The field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "The field is required";
  }

  if (validator.isEmpty(data.PasswordConfirmation)) {
    errors.PasswordConfirmation = "The field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  console.log(req.body)
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    res.json({});
  }else{
    res.status(400).json(errors);
  }
});

export default router;