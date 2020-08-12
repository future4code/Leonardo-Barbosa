import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu25-1.fna.fbcdn.net/v/t31.0-8/13731954_1080393595374694_7276423849004212506_o.jpg?_nc_cat=110&_nc_sid=a9b1d2&_nc_eui2=AeHo_nhLNfotKmMuFDbkLLeMG5M6eUKGdcEbkzp5QoZ1wfGY-bxqUml3081JrIGj7SLNN-_RX62kxXuX_51i-Cc4&_nc_ohc=qxXMbZj5zUQAX8dCHyO&_nc_ht=scontent.fsdu25-1.fna&oh=f9b49c8bd3fffe01ebb03c2032504b37&oe=5F59C4EF" 
          nome="Leonardo Oliveira Barbosa" 
          descricao="Olá, Me chamo Leonardo, tenho 28 anos formado em Análise e Deselvolvimento de sistemas recentemente, antes de mudar de área, eu trabalhei como técnico em eletrônica."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="data:image/png;base64,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"
          descricao="E-mail:"
          texto="meuemailpessoal@esqueci.com"
        />

        <CardPequeno
          imagem="https://img2.gratispng.com/20180509/are/kisspng-computer-icons-icon-design-address-download-5af2cad5efb989.7471396715258610779819.jpg"
          descricao="Endereço:"
          texto="Rua ninguem sabe onde é."
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://lounge.obviousmag.org/ideias_de_guerrilha/assets_c/2016/07/samsung_16-thumb-953x714-151828.jpg" 
          nome="Samsung" 
          descricao="Técnico em Eletrônica com Foco em Análise e Reparo de Smartphones, Tablets etc..." 
        />
        
        <CardGrande 
           imagem="http://lounge.obviousmag.org/ideias_de_guerrilha/assets_c/2016/07/samsung_16-thumb-953x714-151828.jpg" 
           nome="Samsung" 
           descricao="Técnico em Eletrônica com Foco em Análise e Reparo de Smartphones, Tablets etc..." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
