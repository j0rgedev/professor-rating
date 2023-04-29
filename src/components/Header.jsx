import {TbGridDots} from "react-icons/tb";
import {Button} from "./Button.jsx";
import styled from "styled-components";
export const Header = () => {
    return (
        <CustomHeader>
            <TbGridDots fontSize={'40px'} cursor={'pointer'}/>
            <Button text={'Mi cuenta'} width={'120px'} height={'40px'} fontSize={'16px'}/>
        </CustomHeader>
    )
}

const CustomHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    box-sizing: border-box;
    max-width: 100%;
`