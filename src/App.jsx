import GlobalStyles from "./styles/globalStyles.js";
import styled from "styled-components";
import {Landing} from "./pages/Landing.jsx";

function App() {
    return (
        <div id={'App'}>
            <GlobalStyles/>
                <Wrapper>
                    <Landing/>
                </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    padding: 1rem;
`

export default App
