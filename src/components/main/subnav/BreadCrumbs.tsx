import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = (props: any) => {
	return (
		<nav className="bread-crumb">
			<Link to="/" className="bread-crumb__item">
				<span className="bread-crumb__cnt">Home</span>
			</Link>
			<Link to="/browse" className="bread-crumb__item active">
				<span className="bread-crumb__cnt">Browse</span>
			</Link>
		</nav>
	);
};

export default BreadCrumbs;
