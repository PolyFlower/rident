import React, { useEffect, useState } from "react";
import { Car } from "./Car";
import GridSlot from "./GridSlot";
import SectionWrapper from "./SectionWrapper";

type Props = {};

const Content = (props: Props) => {
	const [Cars, fetchCars] = useState([]);

	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};

	async function getData() {
		await fetch("https://rident.herokuapp.com/car", requestOptions)
			.then((res) => res.json())
			.then((res) => {
				fetchCars(res);
			});
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<SectionWrapper>
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
