import { Car } from "interfaces/Car";
import React from "react";

interface IProps extends Car {}

const GridSlot = (props: IProps) => {
	const between = (x: number, min: number, max: number) => {
		return x >= min && x <= max;
	};

	const ratingStyle = (rating: string) => {
		const floatRating: number = parseFloat(rating);
		switch (true) {
			case between(floatRating, 4.5, 5.0):
				return "excellent";
			case between(floatRating, 3.5, 4.5):
				return "good";
			case between(floatRating, 0, 3.5):
				return "bad";
		}
	};

	return (
		<div className="grid-slot">
			<span className="car__type">{props.type}</span>
			<span className="car__name">{props.label}</span>
			<div className="car__photo">
				<img src={props.img} alt={props.label} />
			</div>
			<div className="car__description">
				<div className="car__pricing">
					Starting at:<span>{props.price}</span>
				</div>
				<div className="car__rating">
					<div className="rating__wrapper">
						{props.user_rating !== "" ? (
							<>
								User rating:
								<span className={ratingStyle(props.user_rating)}>
									{props.user_rating} ✦
								</span>
							</>
						) : (
							<>
								User rating:
								<span>No data</span>
							</>
						)}
					</div>
					<div className="rating__wrapper">
						{props.expert_rating !== "" ? (
							<>
								Expert rating:
								<span className={ratingStyle(props.expert_rating)}>
									{props.expert_rating} ✦
								</span>
							</>
						) : (
							<>
								Expert rating:
								<span>No data</span>
							</>
						)}
					</div>
				</div>
				<div className="car__reviews">
					{props.expert_rating === "" && props.user_rating === "" ? (
						<></>
					) : (
						<>
							<a href="/">See reviews.</a>
						</>
					)}
				</div>
				<div className="car__info">{props.description}</div>
			</div>
			<div className="car__offers">
				<button>Show Offers</button>
			</div>
		</div>
	);
};

export default GridSlot;
