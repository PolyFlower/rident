import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const SubNavSection = (props: Props) => {
	return (
		<div className="subnav-content">
			<Link className="subnav-label" to="/">
				Home
			</Link>
			<span className="subnav-divider">{">"}</span>
			<Link className="subnav-label-active" to="/offers">
				Offers
			</Link>
		</div>
	);
};

export default SubNavSection;
