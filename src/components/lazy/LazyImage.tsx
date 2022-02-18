import React from "react";

const LazySpinner = (props: any) => {
	return (
		<div className="lazy-placeholder">
			<svg viewBox="0 0 100 100">
				<defs>
					<filter id="shadow">
						<feDropShadow
							dx="0"
							dy="0"
							stdDeviation="1.5"
							flood-color="#fc6767"
						/>
					</filter>
				</defs>
				<circle
					id="spinner"
					fill="transparent"
					stroke="#dd2476"
					strokeWidth="3px"
					strokeLinecap="round"
					filter="url(#shadow)"
					cx="50"
					cy="50"
					r="45"
				/>
			</svg>
		</div>
	);
};

export default LazySpinner;
