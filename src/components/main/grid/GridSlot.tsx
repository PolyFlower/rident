import React from "react";

interface Props {
	type: string;
	img: string;
	label: string;
	description: string;
	price: string;
	user_rating: string;
	expert_rating: string;
}

const GridSlot = (props: Props) => {
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
						User rating:
						<span className="excellent">{props.user_rating} ✦</span>
					</div>
					<div className="rating__wrapper">
						Expert rating: <span className="good">{props.expert_rating} ✦</span>
					</div>
				</div>
				<div className="car__reviews">
					<a href="/">See reviews.</a>
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