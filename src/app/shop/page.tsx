import Breadcrumb from "../components/breadcrumbs";
import Filter from "../components/filter";
import { Proof } from "./proof";

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
