import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Main from "components/Main";
import BreadCrumbs from "components/main/subnav/BreadCrumbs";
import SectionWrapper from "components/main/grid/SectionWrapper";
import Footer from "components/main/footer/Footer";

type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<Header />
			<Main>
				<SectionWrapper style={{ justifyContent: "flex-start" }}>
					<BreadCrumbs />
				</SectionWrapper>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default Home;
