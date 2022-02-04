import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Content from "../components/main/grid/Content";
import SectionWrapper from "../components/main/grid/SectionWrapper";
import SaleIllustration from "../components/main/sections/SaleIllustration";
import SectionText from "../components/main/sections/SectionText";
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
					<SaleIllustration />
					<SectionText />
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
