import Plot from "react-plotly.js";
import { useLayoutEffect, useRef, useState } from "react";

// import data from "../Energy-Data-Edited.json";

const TreeMapChart = ({ data, myKey, myLabel, year }) => {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const ref = useRef(null);

	useLayoutEffect(() => {
		if (ref.current) {
			setDimensions({
				width: ref.current.offsetWidth,
				height: ref.current.offsetHeight,
			});
		}
	}, []);

	if (!data) {  
		return (
			<div className="w-full text-center">
				<h1 className="text-2xl font-bold">Please select an energy source.</h1>
			</div>
		);
	}

	return (
		<div ref={ref} style={{ width: "100%", height: "100%" }}>
			<Plot
				data={[
					{
						type: "treemap",
						labels: data.map((item) => item["Label"]),
						parents: data.map((item) => item["Parent"]),
						values: data.map((item) => item[myKey]),
						// marker: {
						// 	colors: data.map(
						// 		(item) =>
						// 			`rgba(0, 0, 255, ${
						// 				item["solar_ej"] / 10
						// 			})`
						// 	), // Replace maxValue with the maximum value in your data
						// },
					},
				]}
				layout={{
					title:`World Energy Consumption of ${myKey} by ${myLabel} for the year ${year}`,
					autosize: true,
					width: dimensions.width,
					height: dimensions.height,
				}}
				config={{ responsive: true }}
				useResizeHandler
				style={{ width: "100%", height: "100%" }}
			/>
		</div>
	);
};

export default TreeMapChart;
