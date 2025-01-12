import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">OUR PEOPLE</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Building a Purpose-Driven Team"
                text="Building a valuable and purpose-driven team is an ongoing journey that begins with hiring motivated and passionate people."
                tag="company"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Support and Development"
                text="We support our valued members through training according to the assigned position, ensuring their growth and development."
                tag="company"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Communication and Success"
                text="Through open and honest communication, we strive to offer the perfect match for our clients. Our commitment to consistency, personalized assistance, and professionalism reflects our genuine care for both our clients and team members, leading to success in everything we undertake."
                tag="company"
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">WHAT WE OFFER</h1>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;