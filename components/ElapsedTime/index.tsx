import React, { useState, useEffect } from 'react';

import {Timer, Number} from './styles';

type Props = {
	date: Date;
};

const ElapsedTime: React.FC<Props> = ({ date }) => {
	// State to store the current date and time
	const [currentDate, setCurrentDate] = useState(new Date());

	// Use the useEffect hook to update the current date and time every second
	useEffect(() => {
		const interval = setInterval(() => setCurrentDate(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	// Calculate the difference in time between the current date and the specified date
	const timeDifference = currentDate.getTime() - date.getTime();

	// Convert the time difference from milliseconds to years, months, days, hours, minutes, and seconds
	const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
	const months = Math.floor(
		(timeDifference / (1000 * 60 * 60 * 24 * 30)) % 12
	);
	const days = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 30);
	const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
	const seconds = Math.floor((timeDifference / 1000) % 60);

	// Return the elapsed time as a string
	return currentDate ? (
		<Timer>
			<h2>Time since humans were on the Moon</h2>
			<Number>
				<p className="digits">{years}</p>
				<p className="label">years</p>
			</Number>
			<Number>
				<p className="digits">{months}</p>
				<p className="label">months</p>
			</Number>
			<Number>
				<p className="digits">{days}</p>
				<p className="label">days</p>
			</Number>
			<Number>
				<p className="digits">{hours}</p>
				<p className="label">hours</p>
			</Number>
			<Number>
				<p className="digits">{minutes}</p>
				<p className="label">minutes</p>
			</Number>
			<Number>
				<p className="digits" suppressHydrationWarning={true}>{seconds}</p>
				<p className="label">seconds</p>
			</Number>
		</Timer>
	) : null;
};

export default ElapsedTime;
