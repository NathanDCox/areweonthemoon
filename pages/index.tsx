import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

import ElapsedTime from '../components/ElapsedTime';

interface Props {
	heading: string;
	description: string;
}

const Home: React.FC<Props> = ({heading, description}) => {
	return (
		<div className="container">
			<Head>
				<title id="title">{heading}</title>
				<meta name="description" content={description} />
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
			<h1>{heading}</h1>
			<p className="declarative">NO</p>
			<ElapsedTime date={new Date(Date.UTC(1972, 11, 14, 22, 54, 37))} />
		</div>
	)
}

export default Home;

export async function getStaticProps() {
	return {
		props: {
			heading: 'Are we on the Moon?',
			description: 'Are we on the Moon?',
		},
	};
}
