import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import SectionWrapper from "../components/main/grid/SectionWrapper";
import SaleIllustration from "../components/main/sections/SaleIllustration";
import SectionText from "../components/main/sections/SectionText";
import SubNavSection from "../components/main/subnav/SubNavSection";

type Props = {};

const Offers = (props: Props) => {
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
			</Main>
		</>
	);
};

export default Offers;
