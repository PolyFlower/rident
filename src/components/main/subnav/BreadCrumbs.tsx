import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = (props: any) => {
	const currentPath = useLocation();

	return (
		<nav className="bread-crumb">
			<Link to={currentPath.pathname} className="bread-crumb__item">
				<span className="bread-crumb__cnt">Home</span>
			</Link>
			<Link to={currentPath.pathname} className="bread-crumb__item active">
				<span className="bread-crumb__cnt">Browse</span>
			</Link>
		</nav>
	);
};

export default BreadCrumbs;
