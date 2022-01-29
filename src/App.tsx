import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";

type Props = {};

const App = (props: Props) => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="offers" element={<Offers />}></Route>
			</Routes>
		</>
	);
};

export default App;
