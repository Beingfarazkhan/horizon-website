import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import faqImage from "../../assets/faqImage.png?react";
import "./Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

let displayIcon = true;
if (window.innerWidth <= 400) {
  displayIcon = false;
}

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={faqImage} alt="FAQ" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Need any Help? We got you Covered.</span>

          <span className="primaryText">Frequently Asked Questions</span>

          <span className="secondaryText">
            Unveiling Answers, Bridging Curiosity.
            <br />
            Here are some commonly asked questions that might help you.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            allowZeroExpanded={true}
            preExpanded={[0]}
            style={{ width: "100%" }}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                      {/* just for getting state of item */}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="accordion-heading primaryText">
                        {item.heading}
                      </span>
                      {displayIcon && (
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown
                            className="arrow-icon"
                            size={20}
                          />
                        </div>
                      )}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
