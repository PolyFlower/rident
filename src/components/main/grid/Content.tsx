import React, { useEffect, useState } from "react";
import { Car } from "interfaces/Car";
import GridSlot from "./GridSlot";
import SectionWrapper from "./SectionWrapper";
import axios, { AxiosError, AxiosResponse } from "axios";

type Props = {};

const Content = (props: Props) => {
	const [Cars, fetchCars] = useState([]);

	useEffect(() => {
		const getCarObjects = async () => {
			await axios
				.get("https://rident.herokuapp.com/car")
				.then((response: AxiosResponse) => fetchCars(response.data))
				.catch((error: AxiosError) =>
					error.response
						? console.log(error.response.data)
						: console.log(error.request)
				);
		};
		getCarObjects();
	}, []);

	return (
		<SectionWrapper style={{}}>
			<div className="grid-wrapper">
				{Cars.map((car: Car, idx: number) => {
					return (
						<GridSlot
							img={car.img}
							description={car.description}
							label={car.label}
							price={car.price}
							expert_rating={car.expert_rating}
							user_rating={car.user_rating}
							type={car.type}
						/>
					);
				})}
			</div>
		</SectionWrapper>
	);
};

export default Content;
