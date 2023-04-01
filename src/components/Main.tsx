import React from "react";

const Main = (props: any): JSX.Element => {
	return (
		<main id="content">
			<div className="content-wrapper">{props.children}</div>
		</main>
	);
};

export default Main;
