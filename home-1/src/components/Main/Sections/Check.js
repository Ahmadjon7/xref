import './Check.css';
import check from "../../images/check.png"

function Check(){
    return(
        <>
            <section className="section-check">
                <div className="container">
                    <div className="check-box">
                        <ul className="check-list">
                            <li className="check-item--left">
                                <span className="check-span">Additional checks</span>
                                <h3 className="check-title">Connecting you to the world of digital trust</h3>
                                <p className="check-text">As a growing community of global checking vendors, Trust Marketplace is an aggregator for enhanced due diligence in the online trust environment.</p>
                                <span className="check-link">Visit website</span>
                            </li>
                            <li className="check-item--right">
                                <img src={check} alt="check-img" className="check-image"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <ul className="check-sublist">
                        <li className="check-subitem">
                            <span className="check-subtitle">Security and compliance</span>
                            <p className="check-subtext">We lead with a security-first mindset, a robust infrastructure, and a compliant operating environment.</p>
                            <span className="check-sublink">Learn more</span>
                        </li>
                        <li className="check-subitem">
                            <span className="check-subtitle">Integrations</span>
                            <p className="check-subtext">Integrate Xref with your everyday tools for simplified people management within a single platform.</p>
                            <span className="check-sublink">Learn more</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Check;