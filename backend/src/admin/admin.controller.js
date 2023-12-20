const {
  AdminLoginRequestDTO,
  AdminInfoRequestDTO,
  AdminUpdateRequestDTO,
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
      return res.send({ token: token });
    } catch (e) {
      console.log("login Error", e);
      next(e);
    }
  }
  logout(req, res, next) {
    try {
      res.clearCookie("authorization", { path: "/", domain: "localhost" });
      res.status(200).json({ message: "Logout successful" });
    } catch (e) {
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
    const updatedAdmin = await this.service.updateAdmin(adminData);
    res.json(updatedAdmin);
  }
}

module.exports = AdminController;
