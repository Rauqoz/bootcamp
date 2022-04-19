import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="App-header">
			<code>Rauqoz</code>
			<Link to={'/masket'}>Masket</Link>
			<Link to={'/json'}>Json To Csv</Link>
			<Link to={'/short'}>Url Shortener</Link>
		</div>
	);
};

export default Home;
