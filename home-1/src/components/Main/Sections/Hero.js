import bgImage from "../../images/IMAGE.png"

import './Hero.css'


function Hero(){
    return(
        <>
            <section className='hero-section' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="container">
                    <div className="hero-box">
                        <h1 className="hero-title">
                            Recruit, retain and remember your people
                        </h1>
                        <p className="hero-text">
                            Recruit, retain and remember your people
                        </p>
                        <div className="hero-links">
                            <div className="hero-free">Get started for free</div>
                            <div className="hero-demo">Request a demo</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;