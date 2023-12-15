const db = require("../lib/db");
// const { AdminLoginRequestDTO } = require("./dto/admin.login.request.dto");

class AdminController {
    constructor(service) {
        this.service = service;
    }
    async login(req, res) {
        const adminData = req.body;
        console.log(adminData);
    }

    async getAdmin(req, res) {
        const adminData = req.body;
        console.log(adminData);
    }

    async putAdmin(req, res) {
        const adminData = req.body;
        console.log(adminData);
    }

    async deleteAdmin(req, res) {
        const adminData = req.body;
        console.log(adminData);
    }
}
