const baseDTO = require("../../lib/base.dto");
const { BadRequest } = require("../../lib/customException");

class UserLoginRequestDTO extends baseDTO {
  userEmail;
  userPassword;
  constructor(body) {
    super();
    this.userEmail = body.email;
    this.userPassword = body.password;

    this.validate(this, BadRequest);
  }
}
module.exports = {
  UserLoginRequestDTO,
};
