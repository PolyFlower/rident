import React from "react";
import RidentLogo from "../../../static/sale.png";

type Props = {};

const SaleIllustration = (props: Props) => {
	return (
		<div className="section-illustration">
			<img src={RidentLogo} alt="Rident" />
		</div>
	);
};

export default SaleIllustration;
