import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Main from "components/Main";
import BreadCrumbs from "components/main/subnav/BreadCrumbs";

type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<Header />
			<Main>
				<div className="section-wrapper">
					<div className="section-content">
						<div className="section" style={{ justifyContent: "flex-start" }}>
							<BreadCrumbs />
						</div>
					</div>
				</div>
				<Outlet />
			</Main>
		</>
	);
};

export default Home;
