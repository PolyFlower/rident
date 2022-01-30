import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import SaleIllustration from "../components/main/section-one/SaleIllustration";
import SectionText from "../components/main/section-one/SectionText";
import SectionWrapper from "../components/main/SectionWrapper";
import SubNavSection from "../components/main/subnav-section/SubNavSection";

type Props = {};

const Offers = (props: Props) => {
	const currentPath = useLocation();

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
