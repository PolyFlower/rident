import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Content from "../components/main/Content";
import SectionWrapper from "../components/main/SectionWrapper";
import SubNavSection from "../components/main/subnav/SubNavSection";

type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<Header />
			<Main>
				<SectionWrapper>
					<SubNavSection />
				</SectionWrapper>
				<SectionWrapper>
					<aside></aside>
					<Content />
				</SectionWrapper>
			</Main>
		</>
	);
};

export default Home;
