import React from 'react';
import './styles.css'; 


const Services = () => {
  return (
    <div className="services-page">
      <h2>Publicação e Livraria</h2>
      <div className="service-section">
        <div className="service-item">
          <h3>Publicação de Livros</h3>
          <p>Publique seu livro com nossas editoras. Publicamos sua obra nos formatos impresso e e-books.</p>
          <img src="https://editoraitacaiunas.com.br/images/projeto_design_site.png" width="800px"></img> 
          <br/>
          <a href="/contato">Entrar em contato!</a>
        </div>
        <div className="service-item">
          <h3>Livraria</h3>
          <p> Na nossa base em Ananindeua você pode entrar em contato os nossos produtos impressos e conversar sobre sua demanda. 
            Nosso endereço: Conj. Abelardo Condurú, Quadra Dezoito, 7A CEP: 67015-170 - Ananindeua - Pará. </p>
        
          <br/>
          <a href="/contato">Contato</a>
        </div>
      </div>

      <h2>Serviços Gráficos e Web</h2>
      <div className="service-section">
        <div className="service-item">
          <h3>Soluções Gráficas</h3>
          <p>Podemos imprimir sua obra e outros materiais necessários para divulgação do seu produtos, eventos e serviços.</p>
           <img src="https://editoraitacaiunas.com.br/images/solucoes_graficas_ananindeua.png" width="700px"></img> 
           
          <br/>   <br/>
          <a href="/contato">Entrar em contato</a>
        </div>

        <div className="service-item">
          <h3>Soluções Web</h3>
          <p>Criação de sites e lojas virtuais com hospedagem e domínio.</p>
          
          <br/>
          <a href="/contato">Entrar em contato</a>
        </div>

        <div className="service-item">
          <h3>Mapas Temáticos</h3>
          <p>Elaboração de Mapas Temáticos e Mapas Interativos.</p>
          <a href="/contato">Entrar em contato</a>
        </div>

        </div>
    </div>
  );
};

export default Services;
