import styled from 'styled-components';

const SearchInput = ({ onChange, ...props }) => {
	return <StyledInput onChange={onChange} {...props} />;
};

const StyledInput = styled.input`
  background-color: #202224;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 30px;
  width: 250px;
  outline: 2px solid #0f0f0f;
  transition: outline 0.3s ease;
  height: 100%;

  ::placeholder {
    color: #808080;
  }

  &:focus {
    outline: 1px solid #3d8bff;
  }
`;

export default SearchInput;
