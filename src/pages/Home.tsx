import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import SectionWrapper from "../components/main/SectionWrapper";
import SubNavSection from "../components/main/subnav-section/SubNavSection";

type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<Header />
			<Main>
				<SectionWrapper>
					<SubNavSection />
				</SectionWrapper>
			</Main>
		</>
	);
};

export default Home;
