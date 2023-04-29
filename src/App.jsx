import GlobalStyles from "./styles/globalStyles.js";
import styled from "styled-components";
import {Landing} from "./pages/Landing.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {useState} from "react";
import {FeaturesModal} from "./components/FeaturesModal.jsx";

function App() {

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div id={'App'}>
            <GlobalStyles/>
            <Wrapper>
                <Header onModalToggle={handleModalToggle}/>
                <Landing />
                <Footer />
                <FeaturesModal isOpen={modalOpen} onClose={handleModalToggle}/>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    height: 100%;
    min-height: 100vh;
`

export default App
