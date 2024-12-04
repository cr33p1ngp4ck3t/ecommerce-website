"use client"
import Breadcrumb from "../components/breadcrumbs";

export default function Contact() {
    return (
        <>
            <div className="shop-hero">
                <div id="heading">Contact</div>
                <div id="breadcrumb"><Breadcrumb /></div>
            </div>
            <div className="contact-page">
                    <div className="contact-header">
                        <div id="heading">Get in Touch With Us</div>
                        <div id="text">For More Information About Our Product & Services. 
                            Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. 
                            Do Not Hesitate!
                        </div>
                    </div>
                <div className="contact-container">
                    <div className="contact-details">
                        <div style={{flex:'2', display:"flex", flexDirection:"column", gap:"20px", height:"60%",justifyContent:'space-evenly'}}>    
                            <div style={{flex:"1"}}><img src="/images/location.png" alt="" /></div>
                            <div style={{flex:"1"}}><img src="/images/bxs_phone.png" alt="" /></div>
                            <div style={{flex:"1"}}><img src="/images/bi_clock-fill.png" alt="" /></div>
                        </div> 
                        <div id="form-container">
                            <div id="h">Address: <div id="t">236 5th SE Avenue, New York NY10000, United States</div></div>
                            <div id="h">Phone: <div id="t">555-555-5555</div></div>
                            <div id="h">Working Time: <div id="t">Monday-Friday: 9:00 - 22:00</div><div id="t">Saturday-Sunday: 9:00 - 21:00</div></div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form id="form">
                            <label>
                                <div>Name:</div>
                                <input type="text" name="name"  id="inp"/>
                            </label>
                            <label>
                                <div>Email:</div>
                                <input type="email" name="email"  id="inp"/>
                            </label>
                            <label>
                                <div>Message:</div>
                                <textarea name="message" id="inp" />
                            </label>
                            <div>
                                <input type="submit" value="Submit"  id="button"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}