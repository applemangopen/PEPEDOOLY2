const Crypto = require("crypto");
require("dotenv").config;

class JWT {
  salt;
  constructor() {
    this.salt = process.env["JWT_SECRET_KEY"];
  }
  sign(data) {
    const header = this.encode({ typ: "JWT", alg: "HS256" });
    const payload = this.encode(data);
    const base64url = [header, payload].join(".");
    const signature = this.createSignature(base64url, this.salt);
    const jwt = [base64url, signature].join(".");
    return jwt;
  }
  verify(token) {
    try {
      const [header, payload, signature] = token.split(".");
      const base64url = [header, payload].join(".");
      const newSignature = this.createSignature(base64url, this.salt);

      if (signature !== newSignature) return null;

      const decodedHeader = this.decode(header);
      const decodedPayload = this.decode(payload);

      return { header: decodedHeader, payload: decodedPayload };
    } catch (e) {
      throw e;
    }
  }

  encode(obj) {
    return Buffer.from(JSON.stringify(obj)).toString("base64url");
  }
  decode(base64) {
<<<<<<< HEAD
    return JSON.parse(Buffer.from(base64, "base64url"));
=======
<<<<<<< Updated upstream
    return JSON.parse(Buffer.from(base64, "base64url")).toString("utf-8");
=======
<<<<<<< HEAD
    return JSON.parse(Buffer.from(base64, "base64url"));
=======
    return JSON.parse(Buffer.from(base64, "base64").toString("utf-8"));
>>>>>>> e8861c1adfc7a18cbc409960944a0659fc0d0f12
>>>>>>> Stashed changes
>>>>>>> LoginBackend
  }

  createSignature(base64url) {
    return Crypto.createHmac("sha256", this.salt)
      .update(base64url)
      .digest("base64url");
  }
}
module.exports = JWT;
