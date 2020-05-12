import React from 'react';

import chevRight from '../../../../../assets/chevron-right.svg';
import chevRightD from '../../../../../assets/chevron-right-d.svg';
import chevLeft from '../../../../../assets/chevron-left.svg';
import chevLeftD from '../../../../../assets/chevron-left-d.svg';

import { Container, Pages } from './styles';

function Navbar({ page, pages, handleNextClick, handlePrevClick, setPage }) {
  return (
    <Container>
      <button type="button" onClick={handlePrevClick}>
        <img src={chevLeft} alt="back" />
      </button>
      <button type="button" onClick={() => setPage(1)}>
        <img src={chevLeftD} alt="back" />
      </button>
      <Pages>
        {page} / {pages}
      </Pages>
      <button type="button" onClick={() => setPage(pages)}>
        <img src={chevRightD} alt="back" />
      </button>
      <button type="button" onClick={handleNextClick}>
        <img src={chevRight} alt="back" />
      </button>
    </Container>
  );
}

export default Navbar;
