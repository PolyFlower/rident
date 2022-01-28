import React from "react";

type Props = {
	label: string;
};

const NavButton = (props: Props) => {
	return (
		<div className="nav-button">
			<a href="/">{props.label}</a>
		</div>
	);
};

export default NavButton;
