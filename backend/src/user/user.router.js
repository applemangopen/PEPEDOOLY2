const express = require("express");
const userRouter = express.Router();
const upload = require("../lib/upload");

const { userController } = require("./user.module");
const login = userController.login.bind(userController);
const postSignup = userController.postSignup.bind(userController);
const postProfile = userController.postProfile.bind(userController);
const putProfile = userController.putProfile.bind(userController);
// const getProfile = userController.getProfile.bind(userController);

// 회원가입 ,
userRouter.post("/", postSignup);
// 로그인
userRouter.post("/:provider", login);
// userRouter.post("/login", login);

userRouter.post("profile", upload.single("profile"), postProfile);

// 유저 정보 수정
userRouter.post("profile", upload.single("profile"), putProfile);

// 유저 대시보드
// userRouter.get("/user", getProfile);

module.exports = userRouter;
