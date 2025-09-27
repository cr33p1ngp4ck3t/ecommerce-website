import Link from "next/link";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
export default function Hero() {
	return (
		<div className="s-hero">
			<Image src="/images/hero.png" alt="" width={1280} height={638} />
			<div id="container">
				<div style={{ margin: "5%" }}>
					<div id="content">
						<p id="rec">New Arrivals!</p>
						<h1>Discover Our New Collection</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
							luctus nec ullamcorper mattis.
						</p>
					</div>
					<div style={{ alignSelf: "start", background: "#FFF3E3" }}>
						<Link href="/shop" style={{ flex: "1" }}>
							<button id="content-button">Buy Now</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
