const {
  AdminLoginRequestDTO,
  AdminInfoRequestDTO,
  AdminUpdateRequestDTO,
  AdminDeleteRequestDTO,
} = require("./dto/admin.dto");

class AdminController {
  constructor(service) {
    this.service = service;
  }
  async login(req, res, next) {
    try {
      const adminLoginRequestDTO = new AdminLoginRequestDTO(req.body);
      const token = await this.service.login(adminLoginRequestDTO);
      res.cookie("authorization", token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        path: "/",
      });
      return res.send("");
    } catch (e) {
      console.log("login Error", e);
      next(e);
    }
  }

  async getAdmin(req, res) {
    const adminInfoRequestDTO = new AdminInfoRequestDTO(req.admin);
    const admin = await this.service.getAdminById(adminInfoRequestDTO);
    res.json(admin);
  }

  async putAdmin(req, res) {
    const adminData = req.admin;
    const updatedAdmin = await this.adminService.updateAdmin(adminData);
    res.json(updatedAdmin);
  }

  async deleteAdmin(req, res) {
    const adminDeleteRequestDTO = new AdminDeleteRequestDTO(req.admin);
    await this.adminService.deleteAdmin(adminDeleteRequestDTO);
    res.status(204).send();
  }
}

module.exports = AdminController;
