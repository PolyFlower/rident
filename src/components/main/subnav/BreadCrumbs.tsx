import { Pathname } from "history";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface ICrumb {
	to: string;
	name: string;
}

const BreadCrumbs = (props: any) => {
	const urlPath: Pathname = useLocation().pathname;
	const breadcrumbs: ICrumb[] = [];

	var paths = urlPath.split("/");

	paths = paths[1] === "" ? paths.slice(1) : paths;

	paths.forEach((path, idx) => {
		return idx === 0
			? breadcrumbs.push({ to: "/", name: "Home" })
			: breadcrumbs.push({ to: path, name: "".concat(path.charAt(0).toUpperCase(), path.slice(1)) });
	});

	return (
		<nav className="bread-crumb">
			{breadcrumbs.map((breadcrumb, idx) => {
				return (
					<Link
						to={breadcrumb.to}
						className={idx === breadcrumbs.length - 1 ? "bread-crumb__item active" : "bread-crumb__item"}
					>
						<span className="bread-crumb__cnt">{breadcrumb.name}</span>
					</Link>
				);
			})}
		</nav>
	);
};

export default BreadCrumbs;
