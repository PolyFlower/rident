import React from "react";
import NavButton from "./NavButton";

type Props = {};

const Nav = (props: Props) => {
	return (
		<nav>
			<NavButton href="/" label="Home" />
			<NavButton href="/offers" label="Offers" />
			<NavButton href="/" label="Locations" />
			<NavButton href="/" label="Reviews" />
		</nav>
	);
};

export default Nav;
