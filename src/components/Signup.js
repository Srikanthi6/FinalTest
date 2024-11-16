import React, { useContext, useState, useEffect } from 'react'; 
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
  const { registerUser, message, clearMessage } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = registerUser(username, password);
    if (success) {
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  return (
    <SignupContainer>
      <SignupCard>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username</Label>
          <InputField
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            aria-label="Enter your username"
            required
          />
          <Label htmlFor="password">Password</Label>
          <InputField
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            aria-label="Enter your password"
            required
          />
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>
        {message && <Message role="alert">{message}</Message>}
      </SignupCard>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const SignupCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #004085;
  color: white;
  border: none;
  border-radius: 4px;
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

const Message = styled.p`
  color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  text-align: center;
  margin-top: 1rem;
`;
