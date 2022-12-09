import React from 'react';
import Head from 'next/head';

import ElapsedTime from '../components/ElapsedTime';

interface Props {

}

const Home: React.FC<Props> = () => {
	return (
		<div className="container">
			<Head>
				<title>Are we on the Moon?</title>
				<meta name="description" content="Are we on the Moon?" />
			</Head>
			<h1>Are we on the Moon?</h1>
			<p className="declarative">NO</p>
			<ElapsedTime date={new Date(Date.UTC(1972, 11, 14, 22, 54, 37))} />
		</div>
	)
}

export default Home;
