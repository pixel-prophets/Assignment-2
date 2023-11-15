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