import React from "react";
import * as dataEmployer from "../../../dataTemp/employer.cjs";
import HtmlLayout from "../../layouts/html";

function InvoicePrint(props) {
	return (
		<HtmlLayout className="hold-transition sidebar-mini layout-fixed">
			<div className="wrapper">
				{/* Main content */}
				<section className="invoice">
					{/* title row */}
					<div className="row">
						<div className="col-12">
							<h2 className="page-header">
								<i className="fas fa-globe"></i> AdminLTE, Inc.
								<small className="float-right">Date: 2/10/2014</small>
							</h2>
						</div>
						{/* /.col */}
					</div>
					{/* info row */}
					<div className="row invoice-info">
						<div className="col-sm-4 invoice-col">
							From
							<address>
								<strong>Admin, Inc.</strong>
								<br />
								795 Folsom Ave, Suite 600
								<br />
								San Francisco, CA 94107
								<br />
								Phone: (804) 123-5432
								<br />
								Email: info@almasaeedstudio.com
							</address>
						</div>
						{/* /.col */}
						<div className="col-sm-4 invoice-col">
							To
							<address>
								<strong>John Doe</strong>
								<br />
								795 Folsom Ave, Suite 600
								<br />
								San Francisco, CA 94107
								<br />
								Phone: (555) 539-1037
								<br />
								Email: john.doe@example.com
							</address>
						</div>
						{/* /.col */}
						<div className="col-sm-4 invoice-col">
							<b>Invoice #007612</b>
							<br />
							<br />
							<b>Order ID:</b> 4F3S8J
							<br />
							<b>Payment Due:</b> 2/22/2014
							<br />
							<b>Account:</b> 968-34567
						</div>
						{/* /.col */}
					</div>
					{/* /.row */}

					{/* Table row */}
					<div className="row">
						<div className="col-12 table-responsive">
							<table className="table table-striped">
								<thead>
									<tr>
										<th>Qty</th>
										<th>Product</th>
										<th>Serial #</th>
										<th>Description</th>
										<th>Subtotal</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Call of Duty</td>
										<td>455-981-221</td>
										<td>
											El snort testosterone trophy driving gloves handsome
										</td>
										<td>$64.50</td>
									</tr>
									<tr>
										<td>1</td>
										<td>Need for Speed IV</td>
										<td>247-925-726</td>
										<td>Wes Anderson umami biodiesel</td>
										<td>$50.00</td>
									</tr>
									<tr>
										<td>1</td>
										<td>Monsters DVD</td>
										<td>735-845-642</td>
										<td>
											Terry Richardson helvetica tousled street art master
										</td>
										<td>$10.70</td>
									</tr>
									<tr>
										<td>1</td>
										<td>Grown Ups Blue Ray</td>
										<td>422-568-642</td>
										<td>Tousled lomo letterpress</td>
										<td>$25.99</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/* /.col */}
					</div>
					{/* /.row */}

					<div className="row">
						{/* accepted payments column */}
						<div className="col-6">
							<p className="lead">Payment Methods:</p>
							<img src="../../dist/img/credit/visa.png" alt="Visa" />
							<img
								src="../../dist/img/credit/mastercard.png"
								alt="Mastercard"
							/>
							<img
								src="../../dist/img/credit/american-express.png"
								alt="American Express"
							/>
							<img src="../../dist/img/credit/paypal2.png" alt="Paypal" />

							<p
								className="text-muted well well-sm shadow-none"
								style="margin-top: 10px;"
							>
								Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
								weebly ning heekya handango imeem plugg dopplr jibjab, movity
								jajah plickers sifteo edmodo ifttt zimbra.
							</p>
						</div>
						{/* /.col */}
						<div className="col-6">
							<p className="lead">Amount Due 2/22/2014</p>

							<div className="table-responsive">
								<table className="table">
									<tr>
										<th style="width:50%">Subtotal:</th>
										<td>$250.30</td>
									</tr>
									<tr>
										<th>Tax (9.3%)</th>
										<td>$10.34</td>
									</tr>
									<tr>
										<th>Shipping:</th>
										<td>$5.80</td>
									</tr>
									<tr>
										<th>Total:</th>
										<td>$265.24</td>
									</tr>
								</table>
							</div>
						</div>
						{/* /.col */}
					</div>
					{/* /.row */}
				</section>
				{/* /.content */}
			</div>
			{/* ./wrapper */}
			{/* Page specific script */}
			<script>window.addEventListener("load", window.print());</script>
		</HtmlLayout>
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
					<ul classNameName="list-inline">
						<li classNameName="list-inline-item">
							<a href="">
								{key.request}
								<img
									alt="Avatar"
									classNameName="table-avatar"
									src="/img/avatar.png"
								/>
							</a>
						</li>
						<li classNameName="list-inline-item">
							<img
								alt="Avatar"
								classNameName="table-avatar"
								src="/img/avatar2.png"
							/>
						</li>
						<li classNameName="list-inline-item">
							<img
								alt="Avatar"
								classNameName="table-avatar"
								src="/img/avatar3.png"
							/>
						</li>
						<li classNameName="list-inline-item">
							<img
								alt="Avatar"
								classNameName="table-avatar"
								src="/img/avatar4.png"
							/>
						</li>
					</ul>
				</td>
				<td classNameName="project_progress">
					<div classNameName="progress progress-sm">
						<div
							classNameName="progress-bar bg-green"
							role="progressbar"
							aria-valuenow="57"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ width: "57%" }}
						></div>
					</div>
					<small>57% Complete</small>
				</td>
				<td classNameName="project-state">
					<span classNameName="badge badge-success">Success</span>
				</td>
				<td classNameName="project-actions text-right">
					<a
						classNameName="btn btn-primary btn-sm"
						href={"./project/detail/" + key.id}
					>
						<i classNameName="fas fa-folder"></i>
						View
					</a>
					<a
						classNameName="btn btn-info btn-sm"
						href={"./project/edit/" + key.id}
					>
						<i classNameName="fas fa-pencil-alt"></i>
						Edit
					</a>
					<a
						classNameName="btn btn-danger btn-sm"
						href={"./project/del/" + key.id}
					>
						<i classNameName="fas fa-trash"></i>
						Delete
					</a>
				</td>
			</tr>
		);
		return str;
	});
	return item;
}
export default InvoicePrint;
