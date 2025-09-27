import Breadcrumb from "../components/breadcrumbs";
import Filter from "../components/filter";
import Image from "next/image";
export const Proof = () => {
	return (
		<div className="proof">
			<div id="proof-container">
				<div className="details">
					<Image src="/images/Group.png" alt="" width={54} height={60} />
					<div>
						<div id="heading">High Quality</div>
						<div id="desc">Crafted from top materials</div>
					</div>
				</div>
				<div className="details">
					<Image src="/images/guarantee.png" alt="" width={61} height={60} />
					<div>
						<div id="heading">Warranty Protection</div>
						<div id="desc">Over 2 years</div>
					</div>
				</div>
				<div className="details">
					<Image src="/images/shipping.png" alt="" width={61} height={60} />
					<div>
						<div id="heading">Free Shipping</div>
						<div id="desc">Order over 150$</div>
					</div>
				</div>
				<div className="details">
					<Image src="/images/customer-support.png" alt="" width={60} height={60} />
					<div>
						<div id="heading">24 / 7 Support</div>
						<div id="desc">Dedicated Support</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function ShopPage() {
	return (
		<>
			<div>
				<div className="shop-hero">
					<div id="heading">Shop</div>
					<div id="breadcrumb">
						<Breadcrumb />
					</div>
				</div>
				<div>
					<Filter />
				</div>
				<Proof />
			</div>
		</>
	);
}
