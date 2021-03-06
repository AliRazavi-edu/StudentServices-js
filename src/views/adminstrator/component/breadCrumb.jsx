import React from "react";

function BreadCrumbComponet(props) {
	return (
		<div className="content-header">
			{/* Content Header (Page header) */}
			<div className="container-fluid">
				<div className="row mb-2">
					<div className="col-sm-6">
						<h1 className="m-0">Dashboard</h1>
					</div>
					{/* /.col */}
					<div className="col-sm-6">
						<ol className="breadcrumb float-sm-right">
							<li className="breadcrumb-item">
								<a href="#">Home</a>
							</li>
							<li className="breadcrumb-item active">Dashboard v1</li>
						</ol>
					</div>
					{/* /.col */}
				</div>
				{/* /.row */}
			</div>
			{/* /.container-fluid */}
			{/* /.content-header */}
		</div>
	);
}

export default BreadCrumbComponet;
