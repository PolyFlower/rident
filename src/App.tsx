import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/main/grid/Content";
import Home from "./pages/Home";

const App = (props: any) => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/browse" element={<Content />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
