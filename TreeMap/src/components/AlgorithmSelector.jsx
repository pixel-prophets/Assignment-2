const AlgorithmSelector = ({
	setSlideAndDiceMode,
	setAlgorithm,
}) => {
	const changeAlgorithm = (algorithm) => {
		setAlgorithm(algorithm)
	};

	const changeSliceAndDiceMode = (slideAndDiceMode) => {
		setSlideAndDiceMode(slideAndDiceMode)
		setAlgorithm("sliceanddice")
	}

	return (
		<>
			<div class="group inline-block">
				<button
					aria-haspopup="true"
					aria-controls="menu"
					class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
				>
					<span class="pr-1 font-semibold flex-1">
						Select Algorithm
					</span>
					<span>
						<svg
							class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</span>
				</button>
				<ul
					id="menu"
					aria-hidden="true"
					class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
				>
					<li class="rounded-sm px-3 py-1 hover:bg-gray-100"
						onClick={() => changeAlgorithm("squarified")}
					>
						Squarified
					</li>
					<li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
						<button
							aria-haspopup="true"
							aria-controls="menu-lang"
							class="w-full text-left flex items-center outline-none focus:outline-none"
						>
							<span class="pr-1 flex-1">Slice and Dice</span>
							<span class="mr-auto">
								<svg
									class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</span>
						</button>
						<ul
							id="menu-lang"
							aria-hidden="true"
							class="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
						>
							<li class="px-3 py-1 hover:bg-gray-100"
								onClick={(e) => changeSliceAndDiceMode("horizontal")}
							>
								Horizontal
							</li>
							<li class="px-3 py-1 hover:bg-gray-100"
								onClick={(e) => changeSliceAndDiceMode("vertical")}
							>
								Vertical
							</li>
							<li class="px-3 py-1 hover:bg-gray-100"
								onClick={(e) => changeSliceAndDiceMode("alternate")}
							>
								Alternate
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default AlgorithmSelector;
