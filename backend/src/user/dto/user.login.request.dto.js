const baseDTO = require("../../lib/base.dto");
const { BadRequest } = require("../../lib/customException");

class UserLoginRequestDTO extends baseDTO {
  userEmail;
  userPassword;
  constructor(body) {
    super();
    console.log("디티오오오오오오ㅗㅇ", body);
    this.userEmail = body.email;
    this.userPassword = body.password;
    console.log(this);
    this.validate(this, BadRequest);
  }
}
module.exports = {
  UserLoginRequestDTO,
};
