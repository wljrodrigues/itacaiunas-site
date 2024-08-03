import React from 'react';
import './styles.css'; 

const Services = () => {
  return (
    <div className="services-page">
      <h2>Publicação e Livraria</h2>
      <div className="service-section">
        <div className="service-item">
          <h3>Publicação de Livro</h3>
          <p>Publique seu livro com nossas editoras. Publicamos sua obra nos formatos impresso e e-books.</p>


          <a href="/contato">Entrar em contato!</a>
        </div>
        <div className="service-item">
          <h3>Livraria</h3>
          <p>Conheça nossa livraria e conheça nossos produtos.</p>
          <a href="/contato">Entrar em contato!</a>
        </div>
      </div>

      <h2>Serviços Gráficos e Web</h2>
      <div className="service-section">
        <div className="service-item">
          <h3>Soluções Gráficas</h3>
          <p>Personalizamos e imprimimos trabalhos diversos.</p>
          <a href="/contato">Entrar em contato</a>
        </div>
        <div className="service-item">
          <h3>Soluções Web</h3>
          <p>Criação de sites e lojas virtuais com hospedagem e domínio.</p>
          <a href="/contato">Entrar em contato</a>
        </div>
        <div className="service-item">
          <h3>Mapas Temáticos</h3>
          <p>Elaboração de Mapas Temáticos e Mapas Interativos.</p>
          <a href="/contato">Entrar em contato</a>
        </div>
        <div className="service-item">
          <h3>InstaPage</h3>
          <p>Modelos editáveis para posts e páginas no Instagram.</p>
          <a href="/contato">Entrar em contato</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
