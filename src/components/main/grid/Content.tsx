import React, { useEffect, useState } from "react";
import { Car } from "interfaces/Car";
import GridSlot from "./GridSlot";
import SectionWrapper from "./SectionWrapper";

type Props = {};

const Content = (props: Props) => {
	const [Cars, fetchCars] = useState([]);

	useEffect(() => {
		const requestOptions: RequestInit = {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		};
		const getCarObjects = async (options: RequestInit) => {
			await fetch("https://rident.herokuapp.com/car", options)
				.then((res) => res.json())
				.then((res) => {
					fetchCars(res);
				});
		};
		getCarObjects(requestOptions);
	});

	return (
		<SectionWrapper style={{}}>
			<div className="grid-wrapper">
				{Cars.map((car: Car, idx: number) => {
					return (
						<GridSlot
							img={car.img!}
							description={car.description!}
							label={car.label!}
							price={car.price!}
							expert_rating={car.expert_rating!}
							user_rating={car.user_rating!}
							type={car.type!}
						/>
					);
				})}
			</div>
		</SectionWrapper>
	);
};

export default Content;
