import { customerPath } from "../../routes/routes.js";

const linkNavUp = {
	Contact: "/Contact-us",
	Frelanser: customerPath.Frelanser(),
	Employer: customerPath.Employer(),
};

const breadCrumb = {
	Dashboard: customerPath.Dashboard(),
};
export { linkNavUp, breadCrumb };
