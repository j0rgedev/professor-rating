import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSection>
                <FooterList>
                    <li className={'list-title'}>General</li>
                    <li><a href="#">UTP</a></li>
                    <li><a href="#">Aprende a calificar</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Centro de ayuda</a></li>
                </FooterList>
                <FooterList>
                    <li className={'list-title'}>Contacto</li>
                    <li><a href="#">Formulario</a></li>
                    <li><a href="#">contacto@gmail.com</a></li>
                    <li><a href="#">TyC</a></li>
                    <li><a href="#">Privacidad</a></li>
                </FooterList>
            </FooterSection>
            <FooterSection>
                <FooterParagraph>Este sitio web es una iniciativa grupal de estudiantes de la UTP y no tiene afiliación alguna con la universidad</FooterParagraph>
            </FooterSection>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    max-width: 100%;
    height: 100%;
    padding: 1rem;
    border-top: 1px solid rgb(46, 47, 48);
`;

const FooterSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
`;

const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 100%;
    max-width: 150px;
    margin: 30px 0;
    padding: 0;
    min-height: 200px;
  
    .list-title{
        color: rgb(174, 174, 178);
    }
    
    li {
        text-align: center;
    }
  
    a {
        text-decoration: none;
    }
`;

const FooterParagraph = styled.p`
    color: rgb(174, 174, 178);
    text-align: center;
    width: 100%;
    margin: 0;
    padding-top: 30px;
    border-top: 1px solid rgb(46, 47, 48);
`
