const BaseDTO = require("../../lib/base.dto");

class AdminLoginRequestDTO extends BaseDTO {
  adminId;
  adminPassword;

  constructor(body) {
    super();
    this.adminid = Admin_id;
    this.adminpw = Admin_password;
  }
}

module.exports = {
  AdminLoginRequestDTO,
};
