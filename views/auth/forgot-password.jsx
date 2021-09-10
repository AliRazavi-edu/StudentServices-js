var React = require("react");
const HtmlLayout = require("../customer/layouts/html");

function forgotPassword(props) {
	return (
		<HtmlLayout class="hold-transition login-page">
			<div className="login-box">
				<div className="card card-outline card-primary">
					<div className="card-header text-center">
						<a href="/" className="h1">
							<b>Admin</b>LTE
						</a>
					</div>
					<div className="card-body">
						<p className="login-box-msg">
							You forgot your password? Here you can easily retrieve a new
							password.
						</p>
						<form action="/recover-password" method="post">
							<div className="input-group mb-3">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-envelope"></span>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<button type="submit" className="btn btn-primary btn-block">
										Request new password
									</button>
								</div>
								{/* /.col */}
							</div>
						</form>
						<p className="mt-3 mb-1">
							<a href="login">Login</a>
						</p>
					</div>
					{/* /.login-card-body */}
				</div>
			</div>
			{/* /.login-box */}
		</HtmlLayout>
	);
}

module.exports = forgotPassword;
