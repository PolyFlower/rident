import React from "react";

type Props = {
	label: string;
	href: string;
};

const NavButton = (props: Props) => {
	return (
		<div className="nav-button">
			<a href={props.href}>{props.label}</a>
		</div>
	);
};

export default NavButton;
