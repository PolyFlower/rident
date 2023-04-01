import React, { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
	const [waving, setWaving] = useState(false);
	const handleWaveToggle = () => setWaving(!waving);

	return (
		<footer>
			<span>2022 ©</span>
			Developed by
			<a
				href="https://github.com/PolyFlower"
				onMouseLeave={handleWaveToggle}
				onMouseEnter={handleWaveToggle}
			>
				<span>PolyFlower </span>
				<span className={waving ? "wave" : ""}>🖐</span>
			</a>
		</footer>
	);
};

export default Footer;
