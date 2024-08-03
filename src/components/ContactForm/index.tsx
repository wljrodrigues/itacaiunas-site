import React from 'react';
import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { ContactProps } from './types';
import Block from '../Block';
import { ContactContainer } from './styles';

const Contact = ({ title, content, id, t }: ContactProps & { t: TFunction }) => {
  const openChatbotPopup = () => {
    window.open(
      'https://typebot.co/gera-o-de-leads-walter-pmii2lw',
      'Chatbot',
      'width=700,height=800'
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={openChatbotPopup}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#1890ff',
                  color: '#fff',
                  borderRadius: '50px',
                  border: 'none',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                {t('Iniciar Chatbot')}
              </button>
            </div>
          </Slide>

            <Slide direction="right" triggerOnce>
            <div style={{ textAlign: 'center' }}>
              <a
                href="https://api.whatsapp.com/send?phone=5591982161196&text=Ol%C3%A1!%20Solicito%20atendimento%20para%20o%20site%20Itacai%C3%BAnas%20-%20itacaiunas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#1890ff',
                  color: '#fff',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  margin: '10px',
                  fontWeight: 'bold',
                }}
              >
                {t('Conversar via WhatsApp')}
              </a>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce>
            <div style={{ textAlign: 'center' }}>
              <a
                href="/contato"
                
                  style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#1890ff',
                  color: '#fff',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  margin: '10px',
                  fontWeight: 'bold',
                }}
              >
                {t('Outras Opções')}
              </a>
            </div>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
