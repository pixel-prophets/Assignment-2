import { useState } from "react";

const YearSelector = ({ possibleYears, setMyYear }) => {
	const [selectedYear, setSelectedYear] = useState(2022);

	const handleYearClick = (year) => {
		setSelectedYear(year);
		setMyYear(year);
	};

	return (
		<div>
			<h2 className="text-lg font-bold mb-2">Select Year:</h2>
			<div className="flex flex-col justify-center">
				{possibleYears.map((year, i) => (
					<button
						key={i}
						className={`m-1 p-2 border rounded-lg ${ 
							selectedYear === year
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						}`}
						onClick={() => handleYearClick(year)}
					>
						{year}
					</button>
				))}
			</div>
		</div>
	);
};

export default YearSelector;
