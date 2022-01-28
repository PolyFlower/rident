import React from "react";
import "../index.scss";
import RidentLogo from "../components/svg/RidentLogo";
import Nav from "./Nav";

type Props = {};

const Header = (props: Props) => {
	return (
		<header>
			<RidentLogo />
			<Nav />
		</header>
	);
};

export default Header;
