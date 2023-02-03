import "./Wrapper.css";
import image1 from "../../images/IMAGE.svg";
import image2 from "../../images/IMAGE-2.svg";
import image3 from "../../images/IMAGE-3.svg";

function Wrapper(){
    return (
        <>
            <section className="wrappersub-section">
                <div className="container">
                    <ul className="wrappersub-list">
                        <li className="wrappersub-item--left">
                            <p className="wrappersub-item-title">Introducing Xref</p>
                            <h3 className="wrappersub-item-text">Get feedback across the entire talent journey</h3>
                        </li>
                        <li className="wrappersub-item-right">
                            <div className="wrappersub-box--all">
                                <span>Simple</span>
                                <p>Save time: Create and send a survey in as little as 30 seconds. Feedback is compiled in easy to understand graphs for actionable insights.</p>
                            </div>
                            <div className="wrappersub-box--all">
                                <span>Convenient</span>
                                <p>Reduce admin: Surveys can be created and completed anywhere, any time, on any device. Let automation do the rest.</p>
                            </div>
                            <div className="wrappersub-box--all">
                                <span>Simple</span>
                                <p>Ensure peace of mind: Xref is ISO27001 certified and GDPR compliant so your data is kept safe and secure.</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="wrappersub-listsub">
                        <li className="wrappersub-itemsub">
                            <img src={image1} alt="First"/>
                            <span className="wrappersub-exit">Reference</span>
                            <p className="wrappersub-itemsub-text">
                                <span className="wrappersub-warning">Recruit</span>
                                <span className="wrappersub-itemsub-title">only the best validated talent.</span>
                                
                            </p>
                            <p className="wrappersub-text">
                                Reduce time to hire and secure top talent fast. Make informed, compliant hiring decisions with Xref’s automated reference checking software.
                            </p>
                        </li>
                        <li className="wrappersub-itemsub">
                            <img src={image2} alt="Two"/>
                            <p className="wrappersub-exit">Pulse<span className="wrappersub-comming">Coming soon</span></p>
                            <p className="wrappersub-itemsub-text">
                                <span className="wrappersub-warning">Retain</span>
                                <span className="wrappersub-itemsub-title">your people and make meaningful</span>
                            </p>
                            <p className="wrappersub-text">
                                Want the secret to reduce attrition and understand what metrics your organisation performs well at or can improve upon? Conduct a Pulse Survey.
                            </p>
                        </li>
                        <li className="wrappersub-itemsub">
                            <img src={image3} alt="Three"/>
                            <p className="wrapper-exitnew">
                                <span className="wrappersub-exit">Exits</span>
                                <span className="wrappersub-new">New</span>
                            </p>
                            <p className="wrappersub-itemsub-text">
                                <span className="wrappersub-warning">Remember</span>
                            </p>
                            <p className="wrappersub-text">
                                Collect, analyse and measure feedback from departing employees. Reduce attrition and improve retention over time by collecting consistent data to improve organisational performance.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Wrapper;