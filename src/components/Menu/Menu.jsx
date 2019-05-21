import React from 'react';
import styled from 'styled-components';

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
    }
    li:hover {
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.08);
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

export const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>Home</li>
        <li>Announcements</li>
        <li>Ideas</li>
        <li>My Voice</li>
      </ul>
    </Nav>
  );
}
