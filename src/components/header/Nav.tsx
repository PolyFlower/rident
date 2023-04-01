import React from "react";
import NavButton from "./NavButton";

type Props = {};

const Nav = (props: Props) => {
	return (
		<nav>
			<NavButton href="/" label="Home" />
			<NavButton href="/browse" label="Browse" />
		</nav>
	);
};

export default Nav;
