import footerImg from '../../components/images/Footer.png';
// import footImg from "../../components/images/footerLeft.png";

import './Footer.css';

function Footer(){
    return(
        <>
            <footer className="footer-image">
                <div className="container">
                    <div className="footer-box">
                        <div className="footer-texts">
                            <h2 className="footer-title"><span>Recruit</span>,<span>retain</span> <small>and</small> <span>remember</span><span>talent with Xref</span></h2>
                            <p className="footer-text">Uncover data-driven, actionable insights with automated reference and exit surveys.</p>
                            <span className="footer-get">Get started</span>
                        </div>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <h6 className="footer-item-title">Solutions</h6>
                                <p>Reference</p>
                                <p><small>Pulse</small> <span className="comming">Coming soon</span></p>
                                <p>Exits</p>
                                <p>Not-For-Profit</p>
                                <p>Health and aged care</p>
                                <p>Government</p>
                                <p>Construction</p>
                                <p>Retail</p>
                                <p>Hospitapty</p>
                                <p>Talent acquisition</p>
                                <p>Recruitment Process Outsourcing (RPO)</p>
                                <p>Staffing and recruitment firms</p>
                                <p>People and culture</p>
                            </li>
                            <li className="footer-item">
                                <h6 className="footer-item-title">Platform</h6>
                                <p>Survey builder</p>
                                <p>Automated requests</p>
                                <p>People records</p>
                                <p>Insights</p>
                                <p>Additional checks</p>
                                <p>Integrations</p>
                                <p>Security and compliance</p>
                                <p>Pricing</p>
                                <p>Request a demo</p>
                            </li>
                            <li className="footer-item">
                                <h6 className="footer-item--title">Resources</h6>
                                <p>About us</p>
                                <p>Careers</p>
                                <p>Why Xref</p>
                                <p>Resource hub</p>
                                <p>Blog</p>
                                <p>Case studies</p>
                                <p>Template Builder</p>
                            </li>
                            <li className="footer-item">
                                <h6 className="footer-item--title">More</h6>
                                <p>Support</p>
                                <p>Contact</p>
                                <p>Investor hub</p>
                                <p>Xref Trust</p>
                                <p>System status</p>
                                <p>Glossary</p>
                                <p>Sub Processors</p>
                            </li>
                        </ul>
                        <ul className="footer-sublist">
                            <li className="footer-subitem">©2022 Xref</li>
                            <li className="footer-subitem">Terms of Service</li>
                            <li className="footer-subitem">Privacy Policy</li>
                            <li className="footer-subitem">13/13 Hickson Road, Dawes Point, Sydney, NSW 2000, Australia</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;