import './Fits.css'
import right from '../../images/Right-image.png' 
import left from '../../images/Left-image.png' 


function Fits(){
    return(
        <>
            <section className="section-fits">
                <div className="container">
                    <div className="fits-box">
                        <ul className="fits-list">
                            <li className="fits-item">
                                <ul className="fitst-item__list">
                                    <li className="fitst-item__subitem">
                                        <span className="fitst-span">For teams</span>
                                        <h3 className="fitst-title">Fits seamlessly into your ecosystem</h3>
                                        <span className="fits-tele">Talent acquisition</span>
                                        <hr className="first-hr" />
                                        <p className="fits-text">In a fast-paced market, efficiency and trust are essential for Talent Acquisition. Data-driven insights can help confident hiring.</p>
                                        <span className="fits-link">Learn more</span>
                                        <h5 className="fits-subtitle">People and culture</h5>
                                        <hr className="first-hr" />
                                        <p className="fits-text">In a fast-paced, people-driven market, recruiting and retaining talent is a challenge. Data-driven feedback is vital to recruit, retain and remember top talent.</p>
                                        <span className="fits-link">Learn more</span>
                                        <p className="fits-text">Unbiased, efficient hiring is imperative for staffing and recruitment firms. Fast, data-driven candidate insights can help.</p>
                                        <span className="fits-link">Learn more</span>
                                    </li>
                                    <li className="fitst-item__subitem">
                                        <img src={right} alt="right-img" />
                                    </li>
                                </ul>
                            </li>
                            <li className="fits-item">
                                <ul className="fitst-item__list reverse">
                                        <li className="fitst-item__subitem">
                                            <span className="fitst-span">For industries</span>
                                            <h3 className="fitst-order__title">Tailored to the unique needs of your industry</h3>
                                            <p className="first-order__text">At Xref, we're people-focused, so no matter what industry you're in, we cater to your unique needs to provide you with one source of talent truth.</p>
                                            <ol className="first-order">
                                                <li className="first-order--item">
                                                    <div className="first-order--box">
                                                        <span>Not-For-Profit</span>
                                                        <i class="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                    <div className="first-order--box">
                                                        <span>Health and Aged Care</span>
                                                        <i class="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                    <div className="first-order--box">
                                                        <span>Government</span>
                                                        <i class="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                </li>
                                                <li className="first-order--item">
                                                    <div className="first-order--box">
                                                        <span>Retail</span>
                                                        <i class="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                    <div className="first-order--box">
                                                        <span>Hospitality</span>
                                                        <i class="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                    <div className="first-order--box">
                                                        <span>Construction</span>
                                                        <i class="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                        <li className="fitst-item__subitem">
                                            <img src={left} alt="left-img" />
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fits;