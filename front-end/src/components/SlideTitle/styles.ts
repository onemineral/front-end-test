import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  font: 32px/44px trajan-pro-3;
  font-weight: 400;
  font-style: regular;
  letter-spacing: -0.83px;
  height: 80px;
  color: var(--black);
  text-align: center;
  margin-top: 32px;
  margin-bottom: 30px;

  @media(max-width: 768px) {
    font: 20px/26px trajan-pro-3;
    margin-bottom: 0px;
  }
`;

export const VerticalArrow = styled.div`
  height: 109px;
  margin-bottom: 30px;
  border: 1px solid var(--black);
`;
