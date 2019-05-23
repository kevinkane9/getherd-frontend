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
  const columnItems = {};
  if (columns === 3) {
    columnItems.first = items.filter((item, index) => index%3 === 1);
    columnItems.second = items.filter((item, index) => index%3 === 2);
    columnItems.third = items.filter((item, index) => index%3 === 0);
    columnItems.first.push(columnItems.third[columnItems.third.length - 1]);
    columnItems.third.splice(-1,1);
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
  if (columns === 2) {
    columnItems.first = items.filter((item, index) => index%2 === 0);
    columnItems.second = items.filter((item, index) => index%2 === 1);
    columnItems.second.push(columnItems.first[columnItems.first.length - 1]);
    columnItems.first.splice(-1,1);
    return (
      <Container>
        <Column>
          { columnItems.first.map(item => item) }
        </Column>
        <Column>
          { columnItems.second.map(item => item) }
        </Column>
      </Container>
    )
  }
  if (columns === 1) {
    return (
      <Container>
        <Column>
          { items.map(item => item) }
        </Column>
      </Container>
    )
  }
}

MasonryBoxes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  columns: PropTypes.number.isRequired,
}


