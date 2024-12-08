import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/siteConfig";
import AuthProvider from "@/context/AuthProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Travel More",
	description: siteConfig.description,
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className={`${poppins.variable} antialiased`}>
					{children}
					<Toaster />
				</body>
			</AuthProvider>
		</html>
	);
}
