import { useState } from "react";

const KeySelector = ({ setPossibleAlgo }) => {
	const [selectedKey, setSelectedKey] = useState("squarified");

	const handleKeyClick = (key) => {
		setSelectedKey(key);
		setMyKey(key);
	};

	return (
		<div className="">
			<h2 className="text-lg font-bold mb-2">Select Energy Source:</h2>
			<div className="flex flex-col justify-center">
				{possibleKeys.map((key) => (
					<button
						key={key}
						className={`m-1 p-2 border rounded-lg ${ 
							selectedKey === key
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						}`}
						onClick={() => handleKeyClick(key)}
					>
						{key}
					</button>
				))}
			</div>
		</div>
	);
};

export default KeySelector;
