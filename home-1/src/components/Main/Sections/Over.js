import './Over.css'

function Over(){
    return(
        <>
            <section className="over-section">
                <div className="container">
                    <div className="over-box">
                        <p className="over-box__text">What our customers say</p>
                        <h3 className="over-box__title">Trusted by the companies you trust</h3>
                        <ul className="over-list">
                            <li className="over-item--top">
                                <div className="over-boxs">
                                    <h5 className="over-item--title">How Westpac benefit from Xref’s tailored service</h5>
                                    <span className="over-link">Learn more</span>
                                </div>
                                <div className="over-boxs">
                                    <h5 className="over-item--title">Getting to know candidates with Xref</h5>
                                    <span className="over-link">Learn more</span>
                                </div>
                                <div className="over-boxs">
                                    <h5 className="over-item--title">Enjoying Fast, Effective and Accurate Results</h5>
                                    <span className="over-link">Learn more</span>
                                </div>
                            </li>
                            <li className="over-item--bottom">
                                <div className="over-item-left">
                                    <div className="over-tabs__left">
                                        <h3 className="over-tabs__title">Over <span>200</span></h3>
                                        <p className="over-tabs__text">User reviews have proven to outperform any other assessments in the consumer world. That’s why we’re proud of what our reviewers have to say.</p>
                                        <span className="over-tabs__link">Why users love us</span>
                                    </div>
                                    <hr />
                                    <div className="over-tabs__right">
                                        <h2 className="over-tabs--right__title">4.7<sub>out of <b>5</b></sub></h2>
                                        <div className="over-text--box">
                                            <p className="over-tabs--right__text"><span>9.4</span>Ease of use</p>
                                            <p className="over-tabs--right__text"><span>9.3</span>Quality of support</p>
                                            <p className="over-tabs--right__text"><span>9.3</span>Ease of setup</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="over-item-right">
                                    <h2 className="over-item-right--title">Leading the pack</h2>
                                    <p> <span>Capterra</span><span>Google</span></p>
                                    <span className="over-item-right--data">
                                        <small>reviews as of 7/10/2022</small>
                                        <sub>744 reviews as of 7/10/2022</sub>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Over;