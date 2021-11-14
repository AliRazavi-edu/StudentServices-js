import React from "react";
import HtmlLayout from "../customer/layouts/html";

function register(props) {
	return (
		<HtmlLayout class="hold-transition register-page">
			<div className="register-box">
				<div className="card card-outline card-primary">
					<div className="card-header text-center">
						<a href="/" className="h1">
							<b>Admin</b>LTE
						</a>
					</div>
					<div className="card-body">
						<p className="login-box-msg">Register a new membership</p>

						<form action="register" method="post">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="First name"
									name="firstName"
								/>
								<input
									type="text"
									className="form-control"
									placeholder="Last name"
									name="lastName"
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-user"></span>
									</div>
								</div>
							</div>
							<div className="input-group mb-3">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									name="email"
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-envelope"></span>
									</div>
								</div>
							</div>
							<div className="input-group mb-3">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									name="password"
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-lock"></span>
									</div>
								</div>
							</div>
							<div className="input-group mb-3">
								<input
									type="password"
									className="form-control"
									placeholder="Retype password"
									name="retypePassword"
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-lock"></span>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-8">
									<div className="icheck-primary">
										<input
											type="checkbox"
											id="agreeTerms"
											value="agree"
											name="terms"
										/>
										<label htmlFor="agreeTerms">
											I agree to the <a href="#">terms</a>
										</label>
									</div>
								</div>
								{/* /.col */}
								<div className="col-4">
									<button type="submit" className="btn btn-primary btn-block">
										Register
									</button>
								</div>
								{/* /.col */}
							</div>
						</form>

						<div className="social-auth-links text-center">
							<a href="#" className="btn btn-block btn-primary">
								<i className="fab fa-facebook mr-2"></i>
								Sign up using Facebook
							</a>
							<a href="#" className="btn btn-block btn-danger">
								<i className="fab fa-google-plus mr-2"></i>
								Sign up using Google+
							</a>
						</div>

						<a href="login" className="text-center">
							I already have a membership
						</a>
					</div>
					{/* /.form-box */}
				</div>
				{/* /.card */}
			</div>
			{/* /.register-box */}
		</HtmlLayout>
	);
}

export default register;
