import React from "react";
import RidentLogo from "svg/RidentLogo";
import Nav from "./header/Nav";

type Props = {};

const Header = (props: Props) => {
	return (
		<header>
			<div className="header-cnt">
				<RidentLogo />
				<Nav />
			</div>
		</header>
	);
};

export default Header;
