import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = (props: any) => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
