import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoutButton = () => {
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login'); // Redirect the user to the login page
  };

  return (
    <Button onClick={handleLogout} aria-label="Log out of your account">
      Log Out
    </Button>
  );
};

export default LogoutButton;

// Styled component with WCAG-compliant contrast and focus styles
const Button = styled.button`
  background-color: #004085;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #002a5e;
  }

  &:focus {
    outline: 2px solid #ffcc00;
    outline-offset: 4px;
  }
`;
