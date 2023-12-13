const express = require("express");
const userRouter = express.Router();

const { userController } = require("./user.module");
const postSignup = userController.postRegister.bind(userController);
const login = userController.login.bind(userController);
const postProfile = userController.postProfile.bind(userController);
const putProfile = userController.putProfile.bind(userController);

// 로그인
userRouter.post("/", postSignup);
userRouter.get("/:provider", login);
userRouter.post("/:provider", login);

// 회원가입 ,
userRouter.post("profile", upload.single("profile"), postProfile);

// 유저 대시보드
userRouter.get("/user");

// 유저 정보 수정
userRouter.post("/profile", upload.single("profile"), postProfile);

module.exports = userRouter;
