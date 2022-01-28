import React from "react";
import NavButton from "./NavButton";

type Props = {};

const Nav = (props: Props) => {
	return (
		<nav>
			<NavButton label="Offers" />
			<NavButton label="Locations" />
			<NavButton label="Reviews" />
		</nav>
	);
};

export default Nav;
