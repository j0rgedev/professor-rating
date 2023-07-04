import {useEffect, useRef, useState} from "react";
import styled from "styled-components";

export const SearchInput = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const toggleDropdown = () => setShowDropdown(!showDropdown);

	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<Form ref={dropdownRef}>
			<Input type="text" placeholder={'Busca a tu docente ...'} onClick={toggleDropdown}/>
			{showDropdown && (
				<Dropdown>
					<ul>
						<li>Profesor 1</li>
						<li>Profesor 2</li>
						<li>Profesor 3</li>
						<li>Profesor 4</li>
						<li>Profesor 5</li>
						<li>Profesor 6</li>
					</ul>
				</Dropdown>
			)}
		</Form>
	);
};

const Form = styled.form`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  border-radius: 24px;
  background-color: #3c3c3e;
  border: none;
  padding: 0.5rem 1.5rem;
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.31) 0px -0.5px 0px, rgba(0, 0, 0, 0.31) 0px 0px 18px;
  box-sizing: border-box;
  font-size: 18px;
  color: white;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    box-shadow: rgba(255, 90, 8) 0 0 4px, rgba(88, 0, 0) 0 4px 31px;
    border: 1px solid rgb(255, 8, 45);
    border-radius: 24px 24px 0 0;
  }

  @media (min-width: 724px) {
    font-size: 24px;
    height: 60px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  max-height: 270px;
  overflow-y: auto;
  background-color: #3c3c3e;
  border-radius: 0 0 24px 24px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
  z-index: 1;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 1rem 2rem;
    cursor: pointer;

    &:hover {
      background-color: #0A0A0F;
    }
  }
`;
