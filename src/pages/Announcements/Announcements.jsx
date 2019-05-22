import React from 'react';
import styled from 'styled-components';

import { AnnouncementsBox } from './AnnouncementsBox';
import { MasonryBoxes } from '../../components/MasonryBoxes';

const defaultData = [
  {
    isActive: true,
    authorName: 'Jessica',
    time: '02:44 pm',
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliq trt enim minim empor incididunt. dolor sit amet, cons ectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliq trt enim.',
  },
  {
    authorName: 'Mike',
    time: '02:44 pm',
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.',
  },
  {
    authorName: 'Sara',
    time: '02:44 pm',
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim. Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.',
  },
  {
    authorName: 'Kate',
    time: '02:44 pm',
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim. Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.',
  },
  {
    authorName: 'Emma',
    time: '02:44 pm',
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim. Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.',
  },
  {
    authorName: 'Sophie',
    time: '02:44 pm',
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.',
  },
  {
    authorName: 'John',
    time: '02:44 pm',
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim. Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm tempor incididunt ut lab ore et dolor magna aliq trt enim minim.',
  },
];

const Container = styled.div`
    display: flex;
    grid-gap: 30px;
    margin: 0 100px;
`;

export const Announcements = () => {
  const items = defaultData.map(box => <AnnouncementsBox key={box.authorName} data={box} />)
  return (
    <Container>
      <MasonryBoxes items={items} columns={3} />
    </Container>
  );
};



