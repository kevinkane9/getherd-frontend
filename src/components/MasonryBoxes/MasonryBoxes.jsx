import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MasonryBoxes = ({ items, columns }) => {
  console.log(columns)
  const columnItems = {};
  if (columns === 3) {
    columnItems.first = items.filter((item, index) => index%3 === 1);
    columnItems.second = items.filter((item, index) => index%3 === 2);
    columnItems.third = items.filter((item, index) => index%3 === 0);
    console.log(columnItems);
    return (
      <Container>
        <Column>
          { columnItems.third.map(item => item) }
        </Column>
        <Column>
          { columnItems.first.map(item => item) }
        </Column>
        <Column>
          { columnItems.second.map(item => item) }
        </Column>
      </Container>
    )
  }
}

MasonryBoxes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  columns: PropTypes.number.isRequired,
}


