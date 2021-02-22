import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color1, setColor1] = useState("");
	const [list1, setList1] = useState(new Values("#33F0FF").all(10));
	const [color2, setColor2] = useState("");
	const [list2, setList2] = useState(new Values("#33ff77").all(10));
	const [color3, setColor3] = useState("");
	const [list3, setList3] = useState(new Values("#ff5533").all(10));
	const [error, setError] = useState(false);

	const handleSubmit1 = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color1).all(10);
			setList1(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	const handleSubmit2 = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color2).all(10);
			setList2(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	const handleSubmit3 = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color3).all(10);
			setList3(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<h3 className="title">color generator</h3>
			<div className="color-sets">
				<div>
					<section className="container">
						<form onSubmit={handleSubmit1}>
							<input
								type="text"
								value={color1}
								onChange={(e) => setColor1(e.target.value)}
								placeholder="#33F0FF"
								className={`${error ? "error" : null}`}
							/>
							<button className="btn" type="submit">
								submit
							</button>
						</form>
					</section>
					<section className="colors">
						{list1.map((color, index) => {
							return (
								<SingleColor
									key={index}
									{...color}
									index={index}
									hexColor={color.hex}
								/>
							);
						})}
					</section>
				</div>
				<div>
					<section className="container">
						<form onSubmit={handleSubmit2}>
							<input
								type="text"
								value={color2}
								onChange={(e) => setColor2(e.target.value)}
								placeholder="#33F0FF"
								className={`${error ? "error" : null}`}
							/>
							<button className="btn" type="submit">
								submit
							</button>
						</form>
					</section>
					<section className="colors">
						{list2.map((color, index) => {
							return (
								<SingleColor
									key={index}
									{...color}
									index={index}
									hexColor={color.hex}
								/>
							);
						})}
					</section>
				</div>
				<div>
					<section className="container">
						<form onSubmit={handleSubmit3}>
							<input
								type="text"
								value={color3}
								onChange={(e) => setColor3(e.target.value)}
								placeholder="#33F0FF"
								className={`${error ? "error" : null}`}
							/>
							<button className="btn" type="submit">
								submit
							</button>
						</form>
					</section>
					<section className="colors">
						{list3.map((color, index) => {
							return (
								<SingleColor
									key={index}
									{...color}
									index={index}
									hexColor={color.hex}
								/>
							);
						})}
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
