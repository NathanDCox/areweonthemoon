import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

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
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-8NEYTLTCPL"></Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-8NEYTLTCPL');
				`}
			</Script>
			<h1>Are we on the Moon?</h1>
			<p className="declarative">NO</p>
			<ElapsedTime date={new Date(Date.UTC(1972, 11, 14, 22, 54, 37))} />
		</div>
	)
}

export default Home;
