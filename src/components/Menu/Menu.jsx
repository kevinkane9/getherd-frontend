import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Nav = styled.nav`
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    li {
      cursor: pointer;
      padding: 0.5vw 0.8vw;
      font-size: 1vw;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0.6;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
    li:hover {
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.08);
    }
    li.active {
      opacity: 1;
    }
  }
  @media (min-width: 1400px) {
    ul li {
      font-size: 16px;
    }
  }
  @media (max-width: 1000px) {
    ul li {
      font-size: 12px;
    }
  }
`;


const menuItems = [
  { title: 'Home', pathname: '/' },
  { title: 'Announcements', pathname: '/announcements' },
  { title: 'Ideas', pathname: '/ideas' },
  { title: 'Voice', pathname: '/my-voice' },
]

export const Component = ({ location }) => {
  return (
    <Nav>
      <ul>
        {
          menuItems.map(item => {
            const className = item.pathname === location.pathname ? 'active' : '';
            return (
              <li key={item.pathname} className={className}>
                <Link to={item.pathname}>
                  {item.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </Nav>
  );
}

export const Menu = withRouter(Component);
