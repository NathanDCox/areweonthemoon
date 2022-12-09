import React from 'react';

import { Inter } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="en" className={inter.className}>
			<body>{children}</body>
		</html>
	);
}

export default Layout;