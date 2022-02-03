import React from "react";
import { Link, useLocation } from "react-router-dom";

const SubNavSection = (props: any) => {
	const currentPath = useLocation();

	return (
		<div className="subnav-content">
			<Link className={currentPath.pathname === "/" ? "subnav-label-active" : "subnav-label"} to="/">
				Home
			</Link>
			<span className="subnav-divider">{">"}</span>
			<Link className={currentPath.pathname === "/offers" ? "subnav-label-active" : "subnav-label"} to="/">
				Offers
			</Link>
		</div>
	);
};

export default SubNavSection;
