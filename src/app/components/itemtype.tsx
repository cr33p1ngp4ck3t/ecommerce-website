/* eslint-disable @next/next/no-img-element */
import '../styles/style.css'

export default function Itemtype() {
    return (
        <>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="itemtype">
                    <div id="text">
                        <div id="itemtype-heading">Browse The Range</div>
                        <div id="itemtype-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div className="items-container">
                        <div id="items">
                            <img src="https://i.postimg.cc/JhN2Kbsv/Mask-Group.png" alt=""/>
                            <div>
                                <div id="items-desc">Dining</div>
                            </div>
                        </div>
                        <div id="items">
                            <img src={"https://i.postimg.cc/rmqYHKWm/Image-living-room.png"} alt=""/>
                            <div>
                                <div id="items-desc">Living</div>
                            </div>
                        </div>
                        <div id="items">
                            <img src={"https://i.postimg.cc/ydnrCsXT/Mask-Group-1.png"} alt=""/>
                            <div>
                                <div id="items-desc">Bedroom</div>
                            </div>
                        </div>
                    </div>
                    {/* <div id="items-desc">
                        <span>Dining</span>
                        <span>Living</span>
                        <span>Bedroom</span>
                    </div> */}
                </div>
            </div>
        </>
    )
}