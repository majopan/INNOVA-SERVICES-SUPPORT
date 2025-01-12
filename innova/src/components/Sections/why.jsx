import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">WHY INNOVA</h1>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                title="Customer Satisfaction and Results"
                text="We provide real satisfaction guarantees to our customers. We always get results—tangible and intangible—in the provision of our services."/>
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                title="Strategic Planning and Training"
                text="We plan each and every activity to achieve what was agreed in the short, medium, and long term. Constant training of our employees ensures that the personnel involved acquire adequate operational practices."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                title="Regional Solutions for the USA"
                text="We can provide you with solutions anywhere in the region when you are located in the USA."
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




