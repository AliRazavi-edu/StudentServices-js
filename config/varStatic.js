// direction
// path
let path = {
	// customer
	customer: "",
	Customer: function () {
		return this.customer;
	},
	cAuth: "/auth",
	CAuth: function () {
		return this.Customer() + this.cAuth;
	},
	cDashboard: "/dashboard",
	CDashboard: function () {
		return this.Customer() + this.cDashboard;
	},
	cEmployer: "/employer",
	CEmployer: function () {
		return this.CDashboard() + this.cEmployer;
	},
	cFrelanser: "/frelanser",
	CFrelanser: function () {
		return this.CDashboard() + this.cFrelanser;
	},

	// admin
	admin: "admin",
	Admin: function () {
		return this.admin;
	},
	aAuth: "/auth",
	AAuth: function () {
		return this.Admin() + this.aAuth;
	},
	aDashboard: "/dashboard",
	ADashboard: function () {
		return this.Admin() + this.aDashboard;
	},
};

// template
let template = {
	// customer
	customer: "customer",
	Customer: function () {
		return this.customer;
	},
	cAuth: "auth",
	CAuth: function () {
		return this.cAuth;
	},
	cDashboard: "/dashboard",
	CDashboard: function () {
		return this.Customer() + this.cDashboard;
	},
	cEmployer: "/employer",
	CEmployer: function () {
		return this.CDashboard() + this.cEmployer;
	},
	cFrelanser: "/frelanser",
	CFrelanser: function () {
		return this.CDashboard() + this.cFrelanser;
	},

	// admin
	admin: "admin",
	Admin: function () {
		return this.admin;
	},
	aAuth: "auth",
	AAuth: function () {
		return this.aAuth;
	},
	aDashboard: "/dashboard",
	ADashboard: function () {
		return this.Admin() + this.aDashboard;
	},
};

let menuNavUP = {
	Home: "/",
	Contact: "/Contact-us",
	Frelanser: path.CFrelanser(),
	Employer: path.CEmployer(),
};

let EMenuSidbarRight = {
	Project: {
		name: "project",
		sub: {
			List: path.CEmployer() + "/project",
			Add: path.CEmployer() + "/project/Add",
		},
	},
	Invoice: {
		name: "invoice",
		sub: {
			List: path.CEmployer() + "/invoice",
		},
	},
};

let FMenuSidbarRight = {
	Project: {
		name: "project",
		sub: {
			List: path.CEmployer() + "/project",
			Add: path.CEmployer() + "/project/Add",
		},
	},
	Invoice: {
		name: "invoice",
		sub: {
			List: path.CEmployer() + "/invoice",
		},
	},
};
module.exports = {
	template,
	path,
	menuNavUP,
	EMenuSidbarRight,
	FMenuSidbarRight,
};
