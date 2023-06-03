import styled from 'styled-components';

const Button = ({ onClick, ...props }) => {
	return <StyledButton onClick={onClick} {...props} />;
};

const StyledButton = styled.button`
  background-color: #143ff6;
  height: 100%;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color .2s ease-in-out;
  font-size: 16px;

  &:hover {
    background-color: #0e2de2;
  }
`;

export default Button;
