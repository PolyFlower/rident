import React from "react";

type Props = {};

const SubNavSection = (props: Props) => {
	return (
		<div className="subnav-content">
			<a className="subnav-label" href="/">
				Home
			</a>
			<a className="subnav-divider" href="/">
				{">"}
			</a>
			<a className="subnav-label-active" href="offers">
				Offers
			</a>
		</div>
	);
};

export default SubNavSection;
