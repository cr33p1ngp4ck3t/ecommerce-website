import Image from "next/image"
import '../styles/style.css'

export function Navbar() {
    return (
        <nav style={{position:'sticky'}}>
            <div>
                <div className="s-display ">
                    <div id="logo">
                        <Image 
                        src={'https://i.postimg.cc/prr9Rk38/logo.png'}
                        alt=""
                        width={50}
                        height={32}
                        />
                        <h2>Furniro</h2>
                    </div>
                    <div id="pages">
                        <a href="/"><span>Home</span></a>
                        <a href="/shop"><span>Shop</span></a>
                        <a href="/about"><span>About</span></a>
                        <a href="/contact"><span>Contact</span></a>
                    </div>
                    <div id="items">
                        <Image width={23.33} height={18.67} src={"https://i.postimg.cc/rFddHn12/user.png"} alt="" />
                        <Image width={22.17} height={22.17} src={"https://i.postimg.cc/DfpJBkbc/search.png"} alt=""/>
                        <Image width={23.33} height={20.81} src={"https://i.postimg.cc/NFnKMmwn/heart.png"} alt=""/>
                        <Image width={24.53} height={22.06} src={"https://i.postimg.cc/JnPyfSYM/shopcart.png"} alt=""/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export function Footer() {
    return (
        <div>
            <div>
                <div className="footer">
                    <div className="container">
                        <div id="container-1">
                            <div id="footer-heading"><a href="/">Funiro<span style={{color:"#B88E2F"}}>.</span></a></div>
                            <div className="a">Links</div>
                            <div className="a">Help</div>
                            <div className="a">Newsletter</div>
                            <div className="a"></div>
                        </div>
                        <div id="container-2">
                            <div id="footer-text">
                                <div style={{width:'60%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                            </div>
                            <div className="x">
                                <a href="/"><div>Home</div></a>
                                <a href="/shop"><div>Shop</div></a>
                                <a href="/about"><div>About</div></a>
                                <a href="/contact"><div>Contact</div></a>
                            </div>
                            <div className="x">
                                <div>Payment Options</div>
                                <div>Return</div>
                                <div>Privacy Policy</div>
                            </div>
                            <div className="x">
                                <input type="search" name="search" id="searchbar" placeholder="Enter Your Email Address"/>
                            </div>
                            <div className="x">
                                <button id="button-type">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}