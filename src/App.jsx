import GlobalStyles from "./styles/globalStyles.js";
import styled from "styled-components";
import {Landing} from "./pages/Landing.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
    return (
        <div id={'App'}>
            <GlobalStyles/>
            <Wrapper>
                <Header/>
                <Landing/>
                <Footer/>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    height: 100%;
    min-height: 100vh;
`

export default App
