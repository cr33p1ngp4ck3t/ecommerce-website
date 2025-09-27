import { Navbar, Footer } from "./components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Furniro | Modern Furniture Ecommerce",
	description: "Furniro – stylish furniture ecommerce template showcasing modern design.",
	openGraph: {
		title: "Furniro | Modern Furniture Ecommerce",
		description: "Explore Furniro’s clean and modern furniture web design template.",
		url: "https://ecommerce-website-phi-six.vercel.app",
		siteName: "Furniro",
		images: [
			{
				url: "https://ecommerce-website-phi-six.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "Furniro homepage preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Furniro | Modern Furniture Ecommerce",
		description: "Explore Furniro’s clean and modern furniture web design template.",
		images: ["https://ecommerce-website-phi-six.vercel.app/og-image.png"],
	},
};

export default function Homepage({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
