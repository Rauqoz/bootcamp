import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import JsonToCsv from './Components/Json_To_CSV/JsonToCsv';
import MasketForm from './Components/Masket_Input/MasketForm';
import UrlShortener from './Components/URL_Shortener/UrlShortener';

const RoutesPath = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path={'/'} element={<Home />} />
				<Route exact path={'/masket'} element={<MasketForm />} />
				<Route exact path={'/json'} element={<JsonToCsv />} />
				<Route exact path={'/short'} element={<UrlShortener />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesPath;
