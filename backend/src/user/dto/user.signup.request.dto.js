const baseDTO = require("../../lib/base.dto");
const { BadRequest } = require("../../lib/customException");

class UserSignupRequestDTO extends baseDTO {
  userEmail;
  userPassword;
  userName;
  userNickname;

  constructor(body) {
    super();

    this.userEmail = body.email;
    console.log(this.userEmail);
    this.userPassword = body.password;
    console.log(this.userPassword);
    this.userName = body.name;
    console.log(this.userName);
    this.userNickname = body.nickname;
    console.log(this.userNickname);

    this.validate(this, BadRequest);
  }
}

module.exports = {
  UserSignupRequestDTO,
};
