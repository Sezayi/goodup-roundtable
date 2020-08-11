import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'About the series',
        description = 'During the roundtable series, GoodUp brings together small groups of purpose enthusiasts and experts to engage in a (free) two hour work session. We work together creatively on pressing themes around realising positive impact within large companies. Our goal is to always start with a problem, and end with solutions. This way, we connect, inspire and help to move forward purpose driven individuals, fuelling our mission to accelerate the purpose economy.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div>
{/* 
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.jpg" alt="About Images"/>
                                </div>
                            </div> */}

                            <div className="col-md-12 align-items-center justify-content-center">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;