import Joi from 'joi';
import errorParse from './base';

let schema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required()
});

export default function (login) {
  return errorParse(Joi.validate(login, schema, {
    abortEarly: false
  }).error);
}
