import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div>
                                        <h4>"It was a rare opportunity to hear the struggles that other organisations have, and gave valuable insight into this."</h4>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Julie Owst </span> - Head of Sustainability and Change at Bidfood UK</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            {/* <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>John Doe </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel> */}

                            {/* <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Amar Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Fatima Ma </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel> */}
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    {/* <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/paul-polman.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div> */}
                                </Tab>
                                {/* <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/elon-musk.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5a90afa0a7ea434a0c2723f4%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D3633%26cropY1%3D218%26cropY2%3D3851" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab> */}
                                {/* <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab> */}
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;