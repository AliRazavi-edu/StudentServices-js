import React from "react";

import * as dataFrelanser from "../../../data/frelanser.js";
import BreadCrumbComponet from "../../component/breadCrumb";
import FooterLayout from "../../layouts/footer";
import BodyLayout from "../../layouts/body";
import MainSidebarLayout from "../../layouts/mainSidebar";
import NavbarLayout from "../../layouts/navbar";

import User1Img from "../../../data/img/user1-128x128.jpg";
import User4Img from "../../../data/img/user4-128x128.jpg";
import User6Img from "../../../data/img/user6-128x128.jpg";
import User7Img from "../../../data/img/user7-128x128.jpg";
import Photo1Img from "../../../data/img/photo1.png";
import Photo2Img from "../../../data/img/photo2.png";
import Photo3Img from "../../../data/img/photo3.jpg";
import Photo4Img from "../../../data/img/photo4.jpg";
import AvatarImg from "../../../data/img/avatar.png";
import Avatar2Img from "../../../data/img/avatar2.png";
import Avatar3Img from "../../../data/img/avatar3.png";
import Avatar4Img from "../../../data/img/avatar4.png";

export default(props) =>{
	return (
		<BodyLayout className="hold-transition sidebar-mini layout-fixed">
			<NavbarLayout NavbarLinks={dataFrelanser.linkNavUp}></NavbarLayout>
			<MainSidebarLayout
				Data={dataFrelanser.menuSidbarRight}
			></MainSidebarLayout>

			{/* Content Wrapper. Contains page content */}
			<div className="content-wrapper">
				{/* Content Header (Page header) */}
				<BreadCrumbComponet
					Data={dataFrelanser.breadCrumb}
					Name={"Frelanser"}
					Active={"Frelanser"}
				></BreadCrumbComponet>
				{/* /.content-header */}

				{/* Main content */}
				<section className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3">
								{/* Profile Image */}
								<div className="card card-primary card-outline">
									<div className="card-body box-profile">
										<div className="text-center">
											<img
												className="profile-user-img img-fluid img-circle"
												src={User4Img}
												alt="User profile picture"
											/>
										</div>

										<h3 className="profile-username text-center">
											Nina Mcintire
										</h3>

										<p className="text-muted text-center">Software Engineer</p>

										<ul className="list-group list-group-unbordered mb-3">
											<li className="list-group-item">
												<b>Followers</b> <a className="float-right">1,322</a>
											</li>
											<li className="list-group-item">
												<b>Following</b> <a className="float-right">543</a>
											</li>
											<li className="list-group-item">
												<b>Friends</b> <a className="float-right">13,287</a>
											</li>
										</ul>

										<a href="#" className="btn btn-primary btn-block">
											<b>Follow</b>
										</a>
									</div>
									{/* /.card-body */}
								</div>
								{/* /.card */}

								{/* About Me Box */}
								<div className="card card-primary">
									<div className="card-header">
										<h3 className="card-title">About Me</h3>
									</div>
									{/* /.card-header */}
									<div className="card-body">
										<strong>
											<i className="fas fa-book mr-1"></i> Education
										</strong>

										<p className="text-muted">
											B.S. in Computer Science from the University of Tennessee
											at Knoxville
										</p>

										<hr />

										<strong>
											<i className="fas fa-map-marker-alt mr-1"></i> Location
										</strong>

										<p className="text-muted">Malibu, California</p>

										<hr />

										<strong>
											<i className="fas fa-pencil-alt mr-1"></i> Skills
										</strong>

										<p className="text-muted">
											<span className="tag tag-danger">UI Design</span>
											<span className="tag tag-success">Coding</span>
											<span className="tag tag-info">Javascript</span>
											<span className="tag tag-warning">PHP</span>
											<span className="tag tag-primary">Node.js</span>
										</p>

										<hr />

										<strong>
											<i className="far fa-file-alt mr-1"></i> Notes
										</strong>

										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Etiam fermentum enim neque.
										</p>
									</div>
									{/* /.card-body */}
								</div>
								{/* /.card */}
							</div>
							{/* /.col */}
							<div className="col-md-9">
								<div className="card">
									<div className="card-header p-2">
										<ul className="nav nav-pills">
											<li className="nav-item">
												<a
													className="nav-link active"
													href="#activity"
													data-toggle="tab"
												>
													Activity
												</a>
											</li>
											<li className="nav-item">
												<a
													className="nav-link"
													href="#timeline"
													data-toggle="tab"
												>
													Timeline
												</a>
											</li>
											<li className="nav-item">
												<a
													className="nav-link"
													href="#settings"
													data-toggle="tab"
												>
													Settings
												</a>
											</li>
										</ul>
									</div>
									{/* /.card-header */}
									<div className="card-body">
										<div className="tab-content">
											<div className="active tab-pane" id="activity">
												{/* Post */}
												<div className="post">
													<div className="user-block">
														<img
															className="img-circle img-bordered-sm"
															src={User1Img}
															alt="user image"
														/>
														<span className="username">
															<a href="#">Jonathan Burke Jr.</a>
															<a href="#" className="float-right btn-tool">
																<i className="fas fa-times"></i>
															</a>
														</span>
														<span className="description">
															Shared publicly - 7:30 PM today
														</span>
													</div>
													{/* /.user-block */}
													<p>
														Lorem ipsum represents a long-held tradition for
														designers, typographers and the like. Some people
														hate it and argue for its demise, but others ignore
														the hate as they create awesome tools to help create
														filler text for everyone from bacon lovers to
														Charlie Sheen fans.
													</p>

													<p>
														<a href="#" className="link-black text-sm mr-2">
															<i className="fas fa-share mr-1"></i> Share
														</a>
														<a href="#" className="link-black text-sm">
															<i className="far fa-thumbs-up mr-1"></i> Like
														</a>
														<span className="float-right">
															<a href="#" className="link-black text-sm">
																<i className="far fa-comments mr-1"></i>{" "}
																Comments (5)
															</a>
														</span>
													</p>

													<input
														className="form-control form-control-sm"
														type="text"
														placeholder="Type a comment"
													/>
												</div>
												{/* /.post */}

												{/* Post */}
												<div className="post clearfix">
													<div className="user-block">
														<img
															className="img-circle img-bordered-sm"
															src={User7Img}
															alt="User Image"
														/>
														<span className="username">
															<a href="#">Sarah Ross</a>
															<a href="#" className="float-right btn-tool">
																<i className="fas fa-times"></i>
															</a>
														</span>
														<span className="description">
															Sent you a message - 3 days ago
														</span>
													</div>
													{/* /.user-block */}
													<p>
														Lorem ipsum represents a long-held tradition for
														designers, typographers and the like. Some people
														hate it and argue for its demise, but others ignore
														the hate as they create awesome tools to help create
														filler text for everyone from bacon lovers to
														Charlie Sheen fans.
													</p>

													<form className="form-horizontal">
														<div className="input-group input-group-sm mb-0">
															<input
																className="form-control form-control-sm"
																placeholder="Response"
															/>
															<div className="input-group-append">
																<button
																	type="submit"
																	className="btn btn-danger"
																>
																	Send
																</button>
															</div>
														</div>
													</form>
												</div>
												{/* /.post */}

												{/* Post */}
												<div className="post">
													<div className="user-block">
														<img
															className="img-circle img-bordered-sm"
															src={User6Img}
															alt="User Image"
														/>
														<span className="username">
															<a href="#">Adam Jones</a>
															<a href="#" className="float-right btn-tool">
																<i className="fas fa-times"></i>
															</a>
														</span>
														<span className="description">
															Posted 5 photos - 5 days ago
														</span>
													</div>
													{/* /.user-block */}
													<div className="row mb-3">
														<div className="col-sm-6">
															<img
																className="img-fluid"
																src={Photo1Img}
																alt="Photo"
															/>
														</div>
														{/* /.col */}
														<div className="col-sm-6">
															<div className="row">
																<div className="col-sm-6">
																	<img
																		className="img-fluid mb-3"
																		src={Photo2Img}
																		alt="Photo"
																	/>
																	<img
																		className="img-fluid"
																		src={Photo3Img}
																		alt="Photo"
																	/>
																</div>
																{/* /.col */}
																<div className="col-sm-6">
																	<img
																		className="img-fluid mb-3"
																		src={Photo4Img}
																		alt="Photo"
																	/>
																	<img
																		className="img-fluid"
																		src={Photo1Img}
																		alt="Photo"
																	/>
																</div>
																{/* /.col */}
															</div>
															{/* /.row */}
														</div>
														{/* /.col */}
													</div>
													{/* /.row */}

													<p>
														<a href="#" className="link-black text-sm mr-2">
															<i className="fas fa-share mr-1"></i> Share
														</a>
														<a href="#" className="link-black text-sm">
															<i className="far fa-thumbs-up mr-1"></i> Like
														</a>
														<span className="float-right">
															<a href="#" className="link-black text-sm">
																<i className="far fa-comments mr-1"></i>{" "}
																Comments (5)
															</a>
														</span>
													</p>

													<input
														className="form-control form-control-sm"
														type="text"
														placeholder="Type a comment"
													/>
												</div>
												{/* /.post */}
											</div>
											{/* /.tab-pane */}
											<div className="tab-pane" id="timeline">
												{/* The timeline */}
												<div className="timeline timeline-inverse">
													{/* timeline time label */}
													<div className="time-label">
														<span className="bg-danger">10 Feb. 2014</span>
													</div>
													{/* /.timeline-label */}
													{/* timeline item */}
													<div>
														<i className="fas fa-envelope bg-primary"></i>

														<div className="timeline-item">
															<span className="time">
																<i className="far fa-clock"></i> 12:05
															</span>

															<h3 className="timeline-header">
																<a href="#">Support Team</a> sent you an email
															</h3>

															<div className="timeline-body">
																Etsy doostang zoodles disqus groupon greplin
																oooj voxy zoodles, weebly ning heekya handango
																imeem plugg dopplr jibjab, movity jajah plickers
																sifteo edmodo ifttt zimbra. Babblely odeo
																kaboodle quora plaxo ideeli hulu weebly
																balihoo...
															</div>
															<div className="timeline-footer">
																<a href="#" className="btn btn-primary btn-sm">
																	Read more
																</a>
																<a href="#" className="btn btn-danger btn-sm">
																	Delete
																</a>
															</div>
														</div>
													</div>
													{/* END timeline item */}
													{/* timeline item */}
													<div>
														<i className="fas fa-user bg-info"></i>

														<div className="timeline-item">
															<span className="time">
																<i className="far fa-clock"></i> 5 mins ago
															</span>

															<h3 className="timeline-header border-0">
																<a href="#">Sarah Young</a> accepted your friend
																request
															</h3>
														</div>
													</div>
													{/* END timeline item */}
													{/* timeline item */}
													<div>
														<i className="fas fa-comments bg-warning"></i>

														<div className="timeline-item">
															<span className="time">
																<i className="far fa-clock"></i> 27 mins ago
															</span>

															<h3 className="timeline-header">
																<a href="#">Jay White</a> commented on your post
															</h3>

															<div className="timeline-body">
																Take me to your leader! Switzerland is small and
																neutral! We are more like Germany, ambitious and
																misunderstood!
															</div>
															<div className="timeline-footer">
																<a
																	href="#"
																	className="btn btn-warning btn-flat btn-sm"
																>
																	View comment
																</a>
															</div>
														</div>
													</div>
													{/* END timeline item */}
													{/* timeline time label */}
													<div className="time-label">
														<span className="bg-success">3 Jan. 2014</span>
													</div>
													{/* /.timeline-label */}
													{/* timeline item */}
													<div>
														<i className="fas fa-camera bg-purple"></i>

														<div className="timeline-item">
															<span className="time">
																<i className="far fa-clock"></i> 2 days ago
															</span>

															<h3 className="timeline-header">
																<a href="#">Mina Lee</a> uploaded new photos
															</h3>

															<div className="timeline-body">
																<img
																	src="https://placehold.it/150x100"
																	alt="..."
																/>
																<img
																	src="https://placehold.it/150x100"
																	alt="..."
																/>
																<img
																	src="https://placehold.it/150x100"
																	alt="..."
																/>
																<img
																	src="https://placehold.it/150x100"
																	alt="..."
																/>
															</div>
														</div>
													</div>
													{/* END timeline item */}
													<div>
														<i className="far fa-clock bg-gray"></i>
													</div>
												</div>
											</div>
											{/* /.tab-pane */}

											<div className="tab-pane" id="settings">
												<form className="form-horizontal">
													<div className="form-group row">
														<label
															for="inputName"
															className="col-sm-2 col-form-label"
														>
															Name
														</label>
														<div className="col-sm-10">
															<input
																type="email"
																className="form-control"
																id="inputName"
																placeholder="Name"
															/>
														</div>
													</div>
													<div className="form-group row">
														<label
															for="inputEmail"
															className="col-sm-2 col-form-label"
														>
															Email
														</label>
														<div className="col-sm-10">
															<input
																type="email"
																className="form-control"
																id="inputEmail"
																placeholder="Email"
															/>
														</div>
													</div>
													<div className="form-group row">
														<label
															for="inputName2"
															className="col-sm-2 col-form-label"
														>
															Name
														</label>
														<div className="col-sm-10">
															<input
																type="text"
																className="form-control"
																id="inputName2"
																placeholder="Name"
															/>
														</div>
													</div>
													<div className="form-group row">
														<label
															for="inputExperience"
															className="col-sm-2 col-form-label"
														>
															Experience
														</label>
														<div className="col-sm-10">
															<textarea
																className="form-control"
																id="inputExperience"
																placeholder="Experience"
																defaultValue=""
															></textarea>
														</div>
													</div>
													<div className="form-group row">
														<label
															for="inputSkills"
															className="col-sm-2 col-form-label"
														>
															Skills
														</label>
														<div className="col-sm-10">
															<input
																type="text"
																className="form-control"
																id="inputSkills"
																placeholder="Skills"
															/>
														</div>
													</div>
													<div className="form-group row">
														<div className="offset-sm-2 col-sm-10">
															<div className="checkbox">
																<label>
																	<input type="checkbox" /> I agree to the{" "}
																	<a href="#">terms and conditions</a>
																</label>
															</div>
														</div>
													</div>
													<div className="form-group row">
														<div className="offset-sm-2 col-sm-10">
															<button type="submit" className="btn btn-danger">
																Submit
															</button>
														</div>
													</div>
												</form>
											</div>
											{/* /.tab-pane */}
										</div>
										{/* /.tab-content */}
									</div>
									{/* /.card-body */}
								</div>
								{/* /.card */}
							</div>
							{/* /.col */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container-fluid */}
				</section>
				{/* /.content */}
			</div>
			{/* /.content-wrapper */}
			<FooterLayout></FooterLayout>

			{/* Control Sidebar */}
			<aside classNameNameName="control-sidebar control-sidebar-dark">
				{/* Control sidebar content goes here */}
			</aside>
			{/* /.control-sidebar */}
			{/* ./wrapper */}
		</BodyLayout>
	);
}
function ProjectsItem(props) {
	let item;
	item = props.items.map((key, value) => {
		let str = (
			<tr>
				<td>#{value + 1}</td>
				<td>
					<a>{key.name}</a>
					<br />
					<small>Created {new Date(key.createdAt).toDateString()}</small>
				</td>
				<td>
					<ul classNameNameName="list-inline">
						<li classNameNameName="list-inline-item">
							<a href="">
								{key.request}
								<img
									alt="Avatar"
									classNameNameName="table-avatar"
									src={AvatarImg}
								/>
							</a>
						</li>
						<li classNameNameName="list-inline-item">
							<img
								alt="Avatar"
								classNameNameName="table-avatar"
								src={Avatar2Img}
							/>
						</li>
						<li classNameNameName="list-inline-item">
							<img
								alt="Avatar"
								classNameNameName="table-avatar"
								src={Avatar3Img}
							/>
						</li>
						<li classNameNameName="list-inline-item">
							<img
								alt="Avatar"
								classNameNameName="table-avatar"
								src={Avatar4Img}
							/>
						</li>
					</ul>
				</td>
				<td classNameNameName="project_progress">
					<div classNameNameName="progress progress-sm">
						<div
							classNameNameName="progress-bar bg-green"
							role="progressbar"
							aria-valuenow="57"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ width: "57%" }}
						></div>
					</div>
					<small>57% Complete</small>
				</td>
				<td classNameNameName="project-state">
					<span classNameNameName="badge badge-success">Success</span>
				</td>
				<td classNameNameName="project-actions text-right">
					<a
						classNameNameName="btn btn-primary btn-sm"
						href={"./project/detail/" + key.id}
					>
						<i classNameNameName="fas fa-folder"></i>
						View
					</a>
					<a
						classNameNameName="btn btn-info btn-sm"
						href={"./project/edit/" + key.id}
					>
						<i classNameNameName="fas fa-pencil-alt"></i>
						Edit
					</a>
					<a
						classNameNameName="btn btn-danger btn-sm"
						href={"./project/del/" + key.id}
					>
						<i classNameNameName="fas fa-trash"></i>
						Delete
					</a>
				</td>
			</tr>
		);
		return str;
	});
	return item;
}
