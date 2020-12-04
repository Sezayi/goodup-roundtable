import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


class Accordion01 extends Component {
    render(){
        return(
            <Accordion className="accodion-style--1" allowMultipleExpanded={false}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is Purpose Roundtable Series?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>The Purpose Roundtable Series is an initiative by social venture GoodUp, in which we bring together small groups of business leaders and experts to engage in a (free) two hour work session on a specific topic surrounding purpose activation. Our goal is to always start with a problem, and end with solutions. This way, we connect, inspire and help to move forward purpose driven individuals, fuelling our mission to accelerate the purpose economy. </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What does it mean when I participate?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Participation means that you will be committing to a two and a half hour session of insightful conversation and action, with business leaders that share your passion for purpose. You will be joining a community of purpose driven individuals that are transforming purpose into action. The purpose roundtables are invitation only.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            When do the Purpose Roundtables take place?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        We will always communicate the date of the next purpose roundtable session on this landing page. The next Purpose Roundtable will take place at Januari 14th from 14:00am - 16:30pm.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        )
    }
}

export default Accordion01;





