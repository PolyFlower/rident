import React from "react";
import NavButton from "./NavButton";

type Props = {};

const Nav = (props: Props) => {
	return (
		<nav>
			<NavButton label="Home" />
			<NavButton label="Cars for Sale" />
			<NavButton label="Reviews" />
		</nav>
	);
};

export default Nav;
