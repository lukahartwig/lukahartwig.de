import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Luka Hartwig",
	description:
		"Hi, I'm Luka Hartwig. I'm a software developer with a passion for cloud based web applications.",
};

interface Props {
	children: ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className="text-white">
				<div className="h-screen bg-black">
					<div className="container mx-auto h-full">{children}</div>
				</div>
			</body>
		</html>
	);
}
