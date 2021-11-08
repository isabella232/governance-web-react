import styled from "styled-components";
import Divider from "./Divider";

export const NarrowColumn = styled.div`
  max-width: 494px;
  width: 100%;
  margin: 0 auto;
`;

export const ContentBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  padding: 30px;
  ${(p) =>
    p.padding === "none" &&
    `
    padding: 0;
  `}
  border: 1px solid rgba(0, 0, 0, 0.09);
`;

export const InnerContentBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 14px;
  padding: 20px 20px 16px 20px;
  flex: 1;
`;

const ContentBoxWithHeaderContainer = styled.div``;

const ContentBoxHeader = styled.div`
  border-radius: 16px 16px 0px 0px;
  background: white;
  padding: 30px;
`;

const ContentBoxBody = styled.div`
  border-radius: 0px 0px 16px 16px;
  background: white;
  padding: 30px;
`;

export const ContentBoxWithHeader = ({ HeaderComponent, children }) => {
  return (
    <ContentBoxWithHeaderContainer>
      <ContentBoxHeader>{HeaderComponent}</ContentBoxHeader>
      <Divider />
      <ContentBoxBody>{children}</ContentBoxBody>
    </ContentBoxWithHeaderContainer>
  );
};
