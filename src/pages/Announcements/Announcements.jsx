import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';

import { AnnouncementsBox } from './AnnouncementsBox';
import { MasonryBoxes } from '../../components/MasonryBoxes';
import { BottomNavigation } from '../../components/BottomNavigation';

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
  padding : 0 100px;
  overflow: auto;
  height: calc(100vh - 100px);

  @media (max-width: 1000px) {
    padding : 0 40px;
  }
`;

const MobileContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 3;
  top: 0px;
  right: 0px;
  background-color: #f8f8f8;
  .main-content {
    height: calc(100vh - 70px - 50px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 10px 20px;
  }
`;

const MobileHeader = styled.div`
  background-color: #fd7313;
  height: 70px;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    .close {
      color: white;
      width: 30px;
      height: 30px;
      position: absolute;
      left: 20px;
      top: 18px;
      bottom: 0;
    }
    .title {
      color: white;
      font-size: 18px;
    }
  }
`;

export const Announcements = () => {
  const items = defaultData.map(box => <AnnouncementsBox key={box.authorName} data={box} />)
  return (
    <Container>
      <Hidden smDown>
        <MasonryBoxes items={items} columns={3} />
      </Hidden>
      <Hidden only={['xs', 'md', 'lg', 'xl']}>
        <MasonryBoxes items={items} columns={2} />
      </Hidden>
      <Hidden smUp>
        <MobileContent>
          <MobileHeader>
            <div className="content">
              <Link to="/"><CloseIcon className="close" /></Link>
              <div className="title">
                Announcement
              </div>
            </div>
          </MobileHeader>
          <div className="main-content">
            <MasonryBoxes items={items} columns={1} />
          </div>
          <BottomNavigation active="Announcements" />
        </MobileContent>
      </Hidden>
      
    </Container>
  );
};



