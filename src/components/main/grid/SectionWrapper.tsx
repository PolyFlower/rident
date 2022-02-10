import React from "react";

interface ISection {
	style: Object;
	children: JSX.Element;
}

const SectionWrapper = (props: ISection) => {
	return (
		<div className="section-wrapper">
			<div className="section-content">
				<div className="section" style={props.style}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper;
