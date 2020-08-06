import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Solve real challenges',
        description: 'in an interactive session'
    },
    {
        icon: '02',
        title: 'Creative collaboration',
        description: 'receive feasable output'
    },
    {
        icon: '03',
        title: 'Broaden your network',
        description: 'connect with experts'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;