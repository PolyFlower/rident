import React from "react";
import RidentLogo from "../components/svg/RidentLogo";
import Nav from "./header/Nav";
import User from "./header/User";

type Props = {};

const Header = (props: Props) => {
	return (
		<header>
			<div className="header-cnt">
				<RidentLogo />
				<Nav />
				<User />
			</div>
		</header>
	);
};

export default Header;
