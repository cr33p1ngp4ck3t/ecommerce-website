import Breadcrumb from "../components/breadcrumbs"
import { Proof } from "../shop/page"
import Image from "next/image"

export default function Card() {
    return (
        <>
            <div>
                <div className="shop-hero">
                    <div id="heading">Cart</div>
                    <div id="breadcrumb"><Breadcrumb /></div>
                </div>
                <div className="cart">
                    <div className="cart-container-1">
                        <div id="cart-nav">
                            <div id="a"></div>
                            <div id="a">Product</div>
                            <div id="a">Price</div>
                            <div id="a" style={{display:"flex",justifyContent:"center"}}>Quantity</div>
                            <div id="a">SubTotal</div>
                            <div id="a"></div>
                        </div>
                        <div>
                            <div id="cart-desc">
                                <div id="a">
                                    <Image 
                                    src="https://via.placeholder.com/108x105"
                                    alt=""
                                    width={108}
                                    height={105}
                                    style={{borderRadius:"10pxs"}}
                                    />
                                </div>
                                <div id="a">Grifo</div>
                                <div id="a">Rs. 250,000.000</div>
                                <div id="a" style={{justifyContent:"center"}}>2</div>
                                <div id="a">Rs. 250,000.000</div>
                                <div id="a" style={{justifyContent:"center"}}><Image src={'/images/dustbin.png'} alt="" width={28} height={28}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-container-2">
                        <div className="cart-format">
                            <div id="total-heading">Cart Totals</div>
                            <div style={{display:"flex", flexDirection:"column", width:"100%", gap:"30px" }}>
                                <div id="sub-heading">Subtotal<span style={{color:"#9F9F9F", fontSize:"16px"}}>Rs. 250,000.00</span></div>
                                <div id="sub-heading">Total<span style={{color: "#B88E2F", fontSize:"20px"}}>Rs. 250,000.00</span></div>
                            </div>    
                            <button id="checkout-button">Check Out</button>
                        </div>
                    </div>
                </div>
                <Proof />
            </div>
        </>
    )
}