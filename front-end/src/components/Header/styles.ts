import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0;

  @media(max-width: 500px) {
    padding: 48px 0;
  }
`;

export const Title = styled.div`
  text-align: center;
  font: Bold 80px/80px Merriweather;
  letter-spacing: -2.08px;
  color: var(--black);
  opacity: 1;

  @media(max-width: 500px) {
    font: Bold 40px/40px Merriweather;
  }
`