# Assignment - 2

## Parallel Coordinates Plot

The visualization is live! 
[https://pixel-prophets-dv.web.app/](https://pixel-prophets-dv.web.app/)

#### Running locally

If you want to run the same on your local system, follow the given steps:
1. All the files relevant to the web app are in the `PCP/public` folder.
2. To run the web app, one needs `serve`, which can be installed globally using `npm install -g serve`.
3. Once installed, serve the public folder using `serve -s public`.

#### Other files

Outside the `public` folder are the files required for hosting and the notebook used to prepare the views - `datacreator.ipynb`.

## Contour Plot

#### Files
The `data` folder contains NetCDF files with the data, while the `images` folder contains the already generated visualizations.
All the code is in the `contourplot` notebook. 

#### Running locally

All the python libraries in the `requirements.txt` need to be installed for one to be able to run the notebook. It is recommended to use a conda environment for the same, especially since some libraries like `basemap` require specific versions of other libraries to run. The python version should be `<= 3.10`


## Tree Map

The visualization is live! 
[https://treemap.rohitshah1706.tech/](https://treemap.rohitshah1706.tech/)

#### Running locally

If you want to run the same on your local system, follow the given steps:
1. All the files relevant to the React app are in the `TreeMap` folder.
2. To run the web app, one needs `node v16+`.
3. Once installed, run `npm install` to install all the dependencies.
4. Once installed, run `npm run dev` to start the development server on port 5173.

#### Other files
The `main.ipynb` in the `TreeMap` folder contains the data cleaning and generation part of the project. It uses `pandas` for data manipulation, `numpy` for numerical operations, `json` for handling JSON data, and `os` for interacting with the operating system.


## Color Map

#### Files
The `data` folder contains NetCDF files with the data, while the `images` & `gifs` folder contains the already generated visualizations.
All the code is in the `main.ipynb` notebook inside `ColorMap` folder.. 
