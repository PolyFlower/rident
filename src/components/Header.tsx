import React from "react";
import "../_index.scss";
import RidentLogo from "../components/svg/RidentLogo";
import Nav from "./Nav";
import User from "./User";

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
