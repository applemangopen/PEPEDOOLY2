const BaseDTO = require("../../lib/base.dto");

class AdminLoginRequestDTO extends BaseDTO {
  adminId;
  adminPassword;

  constructor(body) {
    super();
    this.adminId = body.adminId;
    this.adminPassword = body.adminPassword;
  }
}

class AdminInfoRequestDTO extends BaseDTO {
  adminId;

  constructor(body) {
    super();
    this.adminId = body.Admin_id;
  }
}

class AdminUpdateRequestDTO extends BaseDTO {
  adminId;
  adminName;
  adminNickname;
  adminEmail;
  adminProfile;

  constructor(body) {
    super();
    this.adminId = body.Admin_id;
    this.adminName = body.Admin_name;
    this.adminNickname = body.Admin_nickname;
    this.adminEmail = body.Admin_email;
    this.adminProfile = body.Admin_profile;
  }
}

class AdminDeleteRequestDTO extends BaseDTO {
  adminId;

  constructor(body) {
    super();
    this.adminId = body.Admin_id;
  }
}

module.exports = {
  AdminLoginRequestDTO,
  AdminInfoRequestDTO,
  AdminUpdateRequestDTO,
  AdminDeleteRequestDTO,
};
