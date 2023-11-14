import { Suspense, lazy, useEffect, useState } from "react";

import TreeMapContainer from "./components/TreeMapContainer";
import KeySelector from "./components/KeySelector";
import YearSelector from "./components/YearSelector"

import "./App.css";
import TreeMapChartFusionCharts from "./components/TreeMapChartFusionCharts";
import AlgorithmSelector from "./components/AlgorithmSelector";

const possibleKeys = [
	"solar_ej",
	"oilcons_ej",
	"nuclear_ej",
];

const possibleYears = [1992, 2002, 2012, 2022];

function App() {

	const [myKey, setMyKey] = useState("solar_ej");
	const [algorithm, setAlgorithm] = useState("squarified")
	const [sliceAndDiceMode, setSlideAndDiceMode] = useState("horizontal")
	const [year, setYear] = useState(2022);
	const [data, setData] = useState(null);

	const dataImport = (filePath) => {
		console.log(filePath);
		import(filePath).then((module) => {
			setData(module.default);
		});
	};

	const dataImportUrl = (url) => {
		fetch(url).then(data => data.json())
		.then((data) => setData(data))
	}

	useEffect(() => {
		let isCancelled = false;
		if (isCancelled) {
			return;
		}

		dataImportUrl(`CountryWise_${myKey}_${year}.json`);

		return () => {
			isCancelled = true;
		};
	}, [year, myKey]);

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<TreeMapContainer>
					<TreeMapChartFusionCharts 
						myKey={myKey}
						year={year}
						data={data} 
						algorithm={algorithm}
						sliceAndDiceMode={sliceAndDiceMode}
					/>
				</TreeMapContainer>
				<div className="flex justify-around p-3">
					<KeySelector
						possibleKeys={possibleKeys}
						setMyKey={setMyKey}
					/>
					<YearSelector
						possibleYears={possibleYears}
						setMyYear={setYear}
					/>
					<AlgorithmSelector 
						setSlideAndDiceMode={setSlideAndDiceMode}
						setAlgorithm={setAlgorithm}
					/>
				</div>
			</Suspense>
		</>
	);
}

export default App;
