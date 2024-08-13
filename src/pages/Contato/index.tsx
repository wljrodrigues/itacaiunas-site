import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Contato = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row >
              <Col>
              <h2>Contato</h2>             
              
                <p>Sinta-se à vontade para entrar em contato conosco através de nossos canais de atendimento.</p>
              
              <a href="https://api.whatsapp.com/send?phone=5591982161196&text=Ol%C3%A1!%20Solicito%20atendimento%20para%20o%20site%20Itacai%C3%BAnas%20-%20itacaiunas.com.br" target="_blak">
                <Chat>{t(`Falar no WhatsApp!`)}</Chat>
              </a>
              <p>Ou envie um e-mail: editoraitacaiunas@gmail.com</p>
            </Col>     
            
                  
          </Row>

          <Row >
            <Col>
              <Empty />
              <h2>Nossa Loja</h2>
              <p>Conj. Abelardo Condurú, Quadra Dezoito, 7A, CEP: 67015-170 - Ananindeua - Pará</p>
              <p>De Seg. a Sex. das 9:00 as 16:30.</p>
           <p><u><a href="https://maps.app.goo.gl/CPuaAC6232u3mx2o8" target="_blak">  
               ver no maps🗺️ </a></u> </p>
            

<p>
  
</p>
            </Col>        
            </Row>

        </Container>
      </FooterSection>

     
    </>
  );
};

export default withTranslation()(Contato);
