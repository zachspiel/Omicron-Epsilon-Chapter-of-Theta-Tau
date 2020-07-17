import React, { Component } from 'react';
import ContactForm from './contactForm.js';

export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-home">
                    <h1 className="display-4">Omicron Epsilon Chapter of Theta Tau</h1>
                    <p className="lead">NAU's only professional engineering fraternity</p>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center about-section">
                        <div className="col-md-12 col-sm-12">
                            <h1 className="heading">Who We Are</h1>
                        </div>
                        <div className="col-md-6  col-sm-12 ">
                            <p id="about-content">Theta Tau is the oldest, largest, and foremost Fraternity for Engineers. Since its founding at the University of Minnesota in 1904, over 40,000 have been initiated over the years. With emphasis on quality and a strong fraternal bond, the Fraternity has chapters only at ABET accredited schools and limits the number of student members in any one of its chapters across the nation.
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="jumbotron jumbotron-med jumbotron-values">
                    <h1 className="display-4">OUR VALUES</h1>
 
                    </div>
                    <div className="container-fluid">
                    <div className="row space">
                        <div className="col-lg-4 col-md-12 col-sm-12 col_med">
                            <h1>Brotherhood</h1>
                            <p>We forge lifelong bonds of fraternal friendship, a journey that develops and delivers a network of lasting personal and professional relationships. We foster an inviting, safe, and social environment in which our members become lifelong friends.</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col_med">
                            <h1>Professionalism</h1>
                            <p>We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col_med">
                            <h1>Service</h1>
                            <p>We are known for our service to our college, university and the larger community. Our service projects create a unifying environment for learning and personal growth for our members.</p>
                        </div>
                    </div>
                        <ContactForm />
                </div>
            </div>
        )
    }
}