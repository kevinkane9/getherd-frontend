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
      padding: 8px 20px;
      font-size: 20px;
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
  @media (max-width: 1100px) {
    ul > li {
      font-size: 16px;
      padding: 6px 8px;
    }
  }
  @media (max-width: 800px) {
    ul > li {
      padding: 6px 6px;
      font-size: 13px;
    }
  }
  @media (max-width: 660px) {
      padding: 6px 4px;
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
