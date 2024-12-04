import Link from "next/link";
import Product from "./productcard";

export default function Products() {

    return( 
        <div>
            <div className="products">
                <div>
                    <div id="products-heading">Products</div>
                </div>
                <div>
                    <Product />
                </div>
                <div>
                    <Link href="./shop"><button id="product-button">Show More</button></Link>
                </div>
            </div>
        </div>
    )
}