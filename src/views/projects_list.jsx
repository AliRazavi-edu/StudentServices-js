import React from "react";

import FooterLayout from "./layouts/footer";
import BodyLayout from "./layouts/body";

import AvatarImg from "./data/img/avatar.png";
import Avatar2Img from "./data/img/avatar2.png";
import Avatar3Img from "./data/img/avatar3.png";
import Avatar4Img from "./data/img/avatar4.png";

export default(props) =>{
	const { list = null } = props;
	return (
		<BodyLayout class="hold-transition layout-fixed">
			{/* Content Wrapper. Contains page content */}
			<div className="content-wrapper">
				{/* Content Header (Page header) */}

				{/* /.content-header */}

				{/* Main content */}
				<section className="content">
					<div className="container-fluid">
						{/* Default box */}
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Projects</h3>

								<div className="card-tools">
									<button
										type="button"
										className="btn btn-tool"
										data-card-widget="collapse"
										title="Collapse"
									>
										<i className="fas fa-minus"></i>
									</button>
									<button
										type="button"
										className="btn btn-tool"
										data-card-widget="remove"
										title="Remove"
									>
										<i className="fas fa-times"></i>
									</button>
								</div>
							</div>
							<div className="card-body p-0">
								<table className="table table-striped projects">
									<thead>
										<tr>
											<th style={{ width: "1%" }}>#</th>
											<th style={{ width: "20%" }}>Project Name</th>
											<th style={{ width: "30%" }}>Team Members</th>
											<th>Project Progress</th>
											<th style={{ width: "8%" }} className="text-center">
												Status
											</th>
											<th style={{ width: "20%" }}></th>
										</tr>
									</thead>
									<tbody>
										<ProjectsItem items={list}></ProjectsItem>
									</tbody>
								</table>
							</div>
							{/* /.card-body */}
						</div>
						{/* /.card */}
					</div>
					{/* /.container-fluid */}
				</section>
				{/* /.content */}
			</div>
			{/* /.content-wrapper */}
			<FooterLayout></FooterLayout>

			{/* Control Sidebar */}
			<aside className="control-sidebar control-sidebar-dark">
				{/* Control sidebar content goes here */}
			</aside>
			{/* /.control-sidebar */}
			{/* ./wrapper */}
		</BodyLayout>
	);
}
function ProjectsItem(props) {
	const { items = null } = props;
	return items.map((value, index) => {
		const { name = null, createdAt = null, request = null, _id = null } = value;
		return (
			<tr>
				<td>#{index + 1}</td>
				<td>
					<a>{name}</a>
					<br />
					<small>Created {new Date(createdAt).toDateString()}</small>
				</td>
				<td>
					<ul className="list-inline">
						<li className="list-inline-item">
							<a href="">
								{request}
								<img alt="Avatar" className="table-avatar" src={AvatarImg} />
							</a>
						</li>
						<li className="list-inline-item">
							<img alt="Avatar" className="table-avatar" src={Avatar2Img} />
						</li>
						<li className="list-inline-item">
							<img alt="Avatar" className="table-avatar" src={Avatar3Img} />
						</li>
						<li className="list-inline-item">
							<img alt="Avatar" className="table-avatar" src={Avatar4Img} />
						</li>
					</ul>
				</td>
				<td className="project_progress">
					<div className="progress progress-sm">
						<div
							className="progress-bar bg-green"
							role="progressbar"
							aria-valuenow="57"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ width: "57%" }}
						></div>
					</div>
					<small>57% Complete</small>
				</td>
				<td className="project-state">
					<span className="badge badge-success">Success</span>
				</td>
				<td className="project-actions text-right">
					<a className="btn btn-primary btn-sm" href={"./project/" + _id}>
						<i className="fas fa-folder"></i>
						View
					</a>
					<a
						className="btn btn-info btn-sm"
						href={"./dashboard/employer/project/" + _id + "/edit"}
					>
						<i className="fas fa-pencil-alt"></i>
						Edit
					</a>
					<a
						className="btn btn-danger btn-sm"
						href={"./dashboard/employer/project/" + _id + "/del"}
					>
						<i className="fas fa-trash"></i>
						Delete
					</a>
					<a
						className="btn btn-primary btn-sm"
						href={"./dashboard/frelanser/project/" + _id + "/request/add"}
					>
						<i className="fas fa-pencil-alt"></i>
						request
					</a>
				</td>
			</tr>
		);
	});
}
