import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Conspiracy of love',
        title: 'Afdhel Aziz'
    },
    {
        image: 'image-2',
        category: 'Unilever',
        title: 'Anniek Mauser'
    },
    {
        image: 'image-3',
        category: 'Transavia',
        title: 'Kasia'
    },
    {
        image: 'image-4',
        category: 'GoodUp',
        title: 'Wouter Bakker'

    },
    {
        image: 'image-5',
        category: 'MARS',
        title: 'Romi Mackiewicz'
    },
    {
        image: 'image-6',
        category: 'Lidl',
        title: 'Sanne'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Join the table',
        description = 'Each session, we invite a select, but diverse group of experts around one core theme. Our goal is to bring together people with complementary skill sets and expertise. Take a look at some of the people that have already joined our sessions!';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div >
                            <div >
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <h5>{value.category}</h5>
                                            {/* <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;