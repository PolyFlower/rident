import React from "react";

const SectionWrapper = (props: any) => {
	return (
		<div className="section-wrapper">
			<div className="section-content">
				<div className="section">{props.children}</div>
			</div>
		</div>
	);
};

export default SectionWrapper;
