import React from "react";
import GridSlot from "./GridSlot";

type Props = {};

const Content = (props: Props) => {
	return (
		<div className="grid-wrapper">
			<GridSlot
				type="SUV"
				label="2022 Genesis GV80"
				img="https://res.cloudinary.com/btchead/image/upload/v1643793748/2022-Genesis-GV80-front_15037_032_1844x850_HT7_cropped_bht5pl.png"
				description="The Genesis GV80 is a mid-size luxury crossover SUV manufactured by Korean luxury automaker Genesis, a luxury
					vehicle division of Hyundai."
				price="$50,745.00"
				user_rating="5.0"
				expert_rating="4.8"
			/>
			<GridSlot
				type="Sedan"
				label="2022 Lexus ES"
				img="https://res.cloudinary.com/btchead/image/upload/v1643815755/2022-Lexus-ES-front_14707_032_1820x723_085_cropped_x7mw2e.png"
				description="The 2022 Lexus ES premium midsize sedan is a winner on many levels. Undeniably luxurious, yet the most affordable car in its class."
				price="$41,875.00"
				user_rating="4.9"
				expert_rating="4.6"
			/>
			<GridSlot
				type="SUV"
				label="2022 Kia Telluride"
				img="https://res.cloudinary.com/btchead/image/upload/v1643782005/2022-Kia-Seltos-front_14318_032_1839x909_KLG_oyq6fu.png"
				description="The 2022 Kia Telluride 3-row midsize SUV/crossover is indisputably a top choice in its class. It’s spacious, affordable, and well-equipped."
				price="$34,015.00"
				user_rating="4.9"
				expert_rating="4.6"
			/>
			<GridSlot
				type="Coupe"
				label="2022 Porsche 718 Cayman"
				img="https://res.cloudinary.com/btchead/image/upload/v1643879735/2022-Porsche-718-Cayman-front_14402_032_1807x707_G1_cropped_xwsekt.png"
				description="For a driving experience that’s pure fun plus a luxurious interior and a stylish look, the Porsche 718 Cayman is a hard sports car to beat."
				price="$63,200.00"
				user_rating="4.9"
				expert_rating="4.6"
			/>
		</div>
	);
};

export default Content;
