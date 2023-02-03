import './People.css';

import imaage from '../../images/people.png'

function People(){
    return(
        <>
            <section className="section-people">
                <div className="container">
                    <p className="people-title">Platform</p>
                    <h4 className="people-text">Automating your people journey</h4>
                    <img src={imaage} alt="imagefour" className="people-image" />
                </div>
                <div className="container">
                    <div className="peope-list">
                        <li className="people-item">
                            <h6>Survey builder</h6>
                            <p className="people-item-text">Create compliant, non-bias surveys in seconds. Choose a Reference or Exit Survey template or build your own from a selection of HR-approved, compliant, non-bias questions.</p>
                            <span>Learn more</span>
                        </li>
                        <li className="people-item">
                            <h6>Automated requests</h6>
                            <p className="people-item-text">Receive feedback faster with automated requests. Save time and reduce manual, repetitive tasks with automated survey requests, easily accessible all in one place.</p>
                            <span>Learn more</span>
                        </li>
                        <li className="people-item">
                            <h6>People records</h6>
                            <p className="people-item-text">Build strong talent relationships with centralised people records. Person-specific feedback is stored in one place to easily recruit, retain and remember talent.</p>
                            <span>Learn more</span>
                        </li>
                        <li className="people-item">
                            <h6>Insights</h6>
                            <p className="people-item-text">Know your next move with people and organisational insights. From an aggregated overview of data to detailed feedback, find the insights you need to make confident business decisions.</p>
                            <span>Learn more</span>
                        </li>
                    </div>
                </div>
            </section>
        </>

    )
}

export default People;


