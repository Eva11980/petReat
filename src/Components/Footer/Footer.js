import React from 'react';
import FooterLeft from './compenent/FooterLeft';
import FooterRight from './compenent/FooterRight';
import styled from 'styled-components';

const FOOTER = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const FOOTERBOX = styled.div`
  width: 1400px;
  ${'' /* width: 100%; */}
  display: flex;
  justify-content: space-between;
`;

function Footer() {
  return (
    <>
      <FOOTER>
        <FOOTERBOX>
          <FooterLeft />
          <FooterRight />
        </FOOTERBOX>
      </FOOTER>
    </>
  );
}

export default Footer;
