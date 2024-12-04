import Breadcrumb from "../components/breadcrumbs";
import Filter from "../components/filter";


export const Proof = () => {
    return (
        <div className="proof">
            <div id="proof-container">
                <div className="details">
                    <img src="/images/Group.png" alt="" />
                    <div>
                        <div id="heading">High Quality</div>    
                        <div id="desc">Crafted from top materials</div>    
                    </div>
                </div>
                <div className="details">
                    <img src="/images/guarantee.png" alt="" />
                    <div>
                        <div id="heading">Warranty Protection</div>
                        <div id="desc">Over 2 years</div>
                    </div>
                </div>
                <div className="details">
                    <img src="/images/shipping.png" alt="" />
                    <div>
                        <div id="heading">Free Shipping</div>
                        <div id="desc">Order over 150$</div>
                    </div>
                </div>
                <div className="details">
                    <img src="/images/customer-support.png" alt="" />
                    <div>
                        <div id="heading">24 / 7 Support</div>
                        <div id="desc">Dedicated Support</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ShopPage() {
    return (
        <>
            <div>
                <div className="shop-hero">
                    <div id="heading">Shop</div>
                    <div id="breadcrumb"><Breadcrumb /></div>
                </div>
                <div>
                    <Filter />
                </div>
                <Proof />
            </div>
        </>
    )
}