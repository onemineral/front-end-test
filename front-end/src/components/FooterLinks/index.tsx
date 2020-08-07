import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom'

import { Container, Wrapper, Anchor, Text } from './styles';


const Footerlinks: React.FC = () => {
  return (
    <Container>
      <Router>
        <Wrapper>  
          <div></div>
          <>
            <Link to="/about" style={{ textDecoration: 'none' }}><Anchor>About</Anchor></Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}><Anchor>Contact</Anchor></Link>
            <Link to="/legal"style={{ textDecoration: 'none' }}><Anchor>Legal</Anchor></Link>
          </> 

          <Text>Copyright © 2019 Site.com. All rights reserved. </Text>
        </Wrapper>

      </Router>

    </Container>
  );
};

export default Footerlinks;
