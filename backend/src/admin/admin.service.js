const db = require("../lib/db");
const { AdminLoginRequestDTO } = require("./dto/admin.dto");

class AdminService {
  constructor(Admin) {
    this.admin = Admin;
  }
  async createAdmin() {}

  async getAdminById() {}

  async updateAdmin() {}

  async deleteAdmin() {}
}

module.exports = AdminService;
