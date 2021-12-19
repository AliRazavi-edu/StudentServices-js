import React from "react";
import { renderToString } from "react-dom/server";
import bcrypt from "bcryptjs";
import { User as UserModel } from "../models/user.js";
import {
	homeTemplate as Template,
	homePath as Path,
	customerPath,
} from "../routes/routes.js";
import Middleware from "./middleware.js";
import RegisterReact from "../views/auth/register";
import LoginReact from "../views/auth/login";
import LockScreenReact from "../views/auth/lock-screen";
import ForgotPasswordReact from "../views/auth/forgot-password";
import RecoverPasswordReact from "../views/auth/recover-password";

export default function (infoApp) {
	// middleware function
	return {
		Root_Get: function (req, res) {
			res.redirect(Path.Auth() + "/login");
		},

		Register_Get: [
			Middleware(infoApp).LogInChecker,
			function (req, res) {
				const RenderReact = renderToString(<RegisterReact name="register" />);
				res.render(Template.Auth() + "/register", {
					reactApp: RenderReact,
					data: JSON.stringify({ name: "register" }),
				});
			},
		],
		Register_Post: function (req, res) {
			// check('fullname', "نام اجباری است")
			// check('email', "ایمیل اجباری است", 'ایمیل وجود دارد');
			// check('password', " رمز عبوراجباری است", 'پسوردها یکسان نیستند');
			// check("email", "ایمیل نامعتبر است").isEmail()
			const { firstname, lastname, email, password, retypePassword, terms } =
				req.body;
			if (!req.body.email || !req.body.password) {
				res.render(Template.Auth() + "/register", {
					message: "Invalid credentials!",
				});
			} else {
				UserModel.findOne({ "email.now": email })
					.then((user) => {
						if (user.email.now === email) {
							res.render(Template.Auth() + "/register", {
								message: "User Already Exists! Login or choose another user id",
							});
						}
					})
					.catch((err) => {
						res.render(Template.Auth() + "/register", {
							message: "not error",
						});
					});

				let newUser = new UserModel({
					name: { first: firstname, last: lastname },
					email: { now: email },
					password: { now: password },
				});
				newUser
					.save(newUser)
					.then((user) => {
						// REDIRECT TO THE dashboard
						infoApp.user = user;
						infoApp.user.login = true;
						res.redirect(customerPath.Dashboard());
					})
					.catch((err) => {
						res.render(Template.Auth() + "/register", {
							message: "failed set to db",
						});
					});
			}
		},

		LogIn_Get: [
			Middleware(infoApp).LogInChecker,
			function (req, res) {
				const RenderReact = renderToString(
					<LoginReact redirect={req.query.redirect} />
				);
				res.render(Template.Auth() + "/login", {
					reactApp: RenderReact,
					data: JSON.stringify({ redirect: req.query.redirect }),
				});
			},
		],
		LogIn_Post: function (req, res) {
			const { email, password } = req.body;
			const redirect = req.query.redirect;
			//if (!email || !password) {
			//	res.redirect(Path.Auth());
			// res.render(Template.Auth() + "/login", {
			// 	message: "Please enter both email and password",
			// });

			UserModel.findOne({ "email.now": email })
				.then((user) => {
					if (user.password.now === password) {
						// REDIRECT TO THE dashboard
						infoApp.user = user;
						infoApp.user.login = true;
						if (redirect) res.redirect(redirect);
						res.redirect(customerPath.Dashboard());
					}
				})
				.catch((err) => {
					console.error(err);
					//res.redirect(Path.Auth());
					// res.render(Template.Auth() + "/login", {
					// 	message: "login err",
					// });
				});
		},

		// reset password
		Recover_Get: [
			// Middleware(infoApp).tokenChecker,
			function (req, res) {
				const RenderReact = renderToString(
					<RecoverPasswordReact name={"recover password"} />
				);
				res.render(Template.Auth() + "/recover-password", {
					reactApp: RenderReact,
					data: JSON.stringify({ name: "recover password" }),
				});
			},
		],
		Recover_Post: function (req, res) {
			const { email, password } = req.body;
		},

		Forgot_Get: [
			Middleware(infoApp).LogInChecker,
			function (req, res) {
				const RenderReact = renderToString(
					<ForgotPasswordReact name={"forgot password"} />
				);
				res.render(Template.Auth() + "/forgot-password", {
					reactApp: RenderReact,
					data: JSON.stringify({ name: "forgot password" }),
				});
			},
		],
		Forgot_Post: function (req, res) {
			const { email, password } = req.body;
		},

		LogOut_Get: function (req, res) {
			console.log("user logged out.");
			infoApp.user = {};
			infoApp.user.login = false;
			res.redirect("/");
		},
	};
}
