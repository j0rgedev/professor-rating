import styled from "styled-components";
export const SearchInput = () => {
    return (
        <Form>
            <Input type="text" placeholder={'Empieza a escribir para buscar'}/>
        </Form>
    )
}

const Form = styled.form`
    width: 100%;
`

const Input = styled.input`
    border-radius: 24px;
    background-color: #3C3C3E;
    border: none;
    padding: .5rem 1.5rem;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    font-size: 18px;
    color: white;
    outline: none;
    transition: all .2s ease-in-out;
    
    &:focus-within {
        box-shadow: rgba(255, 90, 8) 0 0 4px, rgba(88, 0, 0) 0 4px 31px;
        border: 1px solid rgb(255, 8, 45);
    }

    @media (min-width: 724px) {
        font-size: 24px;
      height: 60px;
    }
`