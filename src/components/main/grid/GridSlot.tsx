import LazySpinner from "components/lazy/LazyImage";
import { Car } from "interfaces/Car";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { useState } from "react";

interface IProps extends Car {}

const GridSlot = (props: IProps) => {
	const [loaded, setLoaded] = useState(false);

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
				{loaded ? null : <LazySpinner />}
				<LazyLoadImage
					style={loaded ? { width: "100%" } : { height: "0" }}
					alt={props.label}
					src={props.img}
					effect="blur"
					afterLoad={() => setLoaded(true)}
				/>
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
				{props.expert_rating === "" && props.user_rating === "" ? null : (
					<div className="car__reviews">
						<a href="/">See reviews.</a>
					</div>
				)}
				<div className="car__info">{props.description}</div>
			</div>
			<div className="car__offers">
				<button>Show Offers</button>
			</div>
		</div>
	);
};

export default GridSlot;
