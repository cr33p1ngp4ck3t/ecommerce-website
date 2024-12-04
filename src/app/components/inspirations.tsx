import Carousel from "./carousel"


export default function Insp() {
    return( 
        <>
            <div>
                <div className="insp">
                    <div style={{display:"flex", flex:1}}>
                        <div id="insp-container">
                            <div id="insp-heading">50+ Beautiful rooms inspiration</div>
                            <div id="insp-subtitle">Our designer already made a lot of beautiful prototype of rooms that inspire you</div>
                            <button id="insp-button">Explore More</button>
                        </div>
                    </div>
                    <div style={{display:"flex", flex:1}}>
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    )
}