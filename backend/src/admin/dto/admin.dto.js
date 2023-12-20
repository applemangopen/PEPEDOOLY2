const BaseDTO = require("../../lib/base.dto");
const { BadRequest } = require("../../lib/customException");

class AdminLoginRequestDTO extends BaseDTO {
  adminId;
  adminPassword;

  constructor(body) {
    super();
    this.adminId = body.adminId;
    this.adminPassword = body.adminPassword;

    this.validate(this, BadRequest);
  }
}

class AdminInfoRequestDTO extends BaseDTO {
  adminUid;

  constructor(admin) {
    super();
    this.adminUid = admin.Admin_uid;

    this.validate(this, BadRequest);
  }
}

class AdminUpdateRequestDTO extends BaseDTO {
  adminId;
  adminName;
  adminNickname;
  adminEmail;
  adminProfile;

  constructor(admin) {
    super();
    this.adminId = admin.Admin_id;
    this.adminName = admin.Admin_name;
    this.adminNickname = admin.Admin_nickname;
    this.adminEmail = admin.Admin_email;
    this.adminProfile = admin.Admin_profile;

    this.validate(this, BadRequest);
  }
}

module.exports = {
  AdminLoginRequestDTO,
  AdminInfoRequestDTO,
  AdminUpdateRequestDTO,
};
