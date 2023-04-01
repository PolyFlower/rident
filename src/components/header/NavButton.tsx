import React from "react";
import { Link } from "react-router-dom";

type Props = {
	label: string;
	href: string;
};

const NavButton = (props: Props) => {
	return (
		<div className="nav-button">
			<Link to={props.href}>{props.label}</Link>
		</div>
	);
};

export default NavButton;
