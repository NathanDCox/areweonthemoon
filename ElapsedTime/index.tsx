import React, { useState, useEffect } from 'react';

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
	return (
		<>
			{years} years, {months} months, {days} days, {hours} hours,{' '}
			{minutes} minutes, {seconds} seconds
		</>
	);
};

export default ElapsedTime;
