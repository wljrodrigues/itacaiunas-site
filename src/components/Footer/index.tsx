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

const Footer = ({ t }: { t: TFunction }) => {
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
          <Row justify="space-between">
              <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contato")}</Language>
              
              <Para>
                {t(`Você tem alguma pergunta? Sinta-se à vontade para entrar em contato.`)}
              </Para>
              <a href="https://api.whatsapp.com/send?phone=5591982161196&text=Ol%C3%A1!%20Solicito%20atendimento%20para%20o%20site%20Itacai%C3%BAnas%20-%20itacaiunas.com.br" target="_blak">
                <Chat>{t(`Falar no WhatsApp!`)}</Chat>
              </a>
            </Col>

            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Políticas do site")}</Title>
              <Large to="/privacidade">{t("Privacidade")}</Large>
              <Large to="/">{t("Termos de uso")}</Large>
            </Col>
            
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Itacaiúnas IA")}</Large>
              <Large to="/">{t("E-books grátis")}</Large>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Onde estamos")}</Language>
           <a href="https://maps.app.goo.gl/CPuaAC6232u3mx2o8" target="_blak">  
               <Para>Conj. Abelardo Condurú, </Para>
              <Para>Quadra Dezoito, 7A</Para>
              <Para>CEP: 67015-170</Para>
              <Para>Ananindeua - Pará</Para>
              </a> 
            </Col>
          
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("A Itacaiúnas")}</Title>
              <Large to="/sobre">{t("Sobre")}</Large>
              <Large to="/">{t("Serviços")}</Large>
              <Large to="/">{t("Política de privacidade")}</Large>
              <Large to="/">{t("Termos de uso")}</Large>
            </Col>
          
            <Col lg={6} md={6} sm={12} xs={12}>
            <Label htmlFor="select-lang">{t("Parceiros")}</Label>
            {/*
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="230px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              
              <SocialLink
                href="https://www.youtube.com/@itacaiunas"
                src="youtube.svg"
              />
              
              <SocialLink
                href="https://facebook.com/editoraitacaiunas/"
                src="facebook.svg"
              />

              <SocialLink
                href="https://www.instagram.com/editoraitacaiunas/"
                src="instagram.svg"
              />
             
              {/*
              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
              */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
