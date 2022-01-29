import React from "react";
import SectionWrapper from "./main/SectionWrapper";
import SaleIllustration from "./main/section-one/SaleIllustration";
import SectionText from "./main/section-one/SectionText";
import SubNavSection from "./main/subnav-section/SubNavSection";

const Main = (props: any): JSX.Element => {
	return (
		<main id="content">
			<div className="content-wrapper">
				<SectionWrapper>
					<SubNavSection />
				</SectionWrapper>
				<SectionWrapper>
					<SaleIllustration />
					<SectionText />
				</SectionWrapper>
			</div>
		</main>
	);
};

export default Main;
