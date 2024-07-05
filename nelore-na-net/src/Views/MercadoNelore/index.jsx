import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  Banner,
  Overlay,
  Subtitle,
  Content,
  Card,
  CardTitle,
  CardDescription,
  AdvantageList,
  AdvantageItem,
  CheckIcon
} from './style';
import CarouselSection from './CarouselSection'; // Importe o componente do carousel aqui

const MercadoNelore = () => {
  const [mercadoNeloreCards, setMercadoNeloreCards] = React.useState([]);
  const [carouselData, setCarouselData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/jsons-informations/informations.json').then(response => response.json());
        setMercadoNeloreCards(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    const fetchCarouselData = async () => {
      try {
        const carouselData = await fetch('/vendas/vendas.json').then(response => response.json());
        setCarouselData(carouselData);
      } catch (error) {
        console.error('Erro ao buscar dados do carousel:', error);
      }
    };

    fetchData();
    fetchCarouselData();
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Venda e Compre Gado Nelore - Nelore Na Net</title>
        <meta
          name="description"
          content="Descubra as vantagens de comprar e vender gado Nelore com confiabilidade e facilidade no Nelore Na Net."
        />
        <meta name="keywords" content="gado nelore, compra e venda de gado, nelore na net" />
        <meta name="author" content="André Laurentino Rodrigues" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://nelorenanet.com.br/mercado-nelore" />
        <meta property="og:title" content="Venda e Compre Gado Nelore - Nelore Na Net" />
        <meta property="og:description" content="Descubra as vantagens de comprar e vender gado Nelore com confiabilidade e facilidade no Nelore Na Net." />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/og-image.jpg`} />
        <meta property="og:url" content="https://nelorenanet.com.br/mercado-nelore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Venda e Compre Gado Nelore - Nelore Na Net" />
        <meta name="twitter:description" content="Descubra as vantagens de comprar e vender gado Nelore com confiabilidade e facilidade no Nelore Na Net." />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/og-image.jpg`} />
      </Helmet>
      <Banner>
        <Overlay />
        <span>Venda e compre animais com confiabilidade e facilidade na Nelore Na Net</span>
        <Subtitle>Descubra as Vantagens!</Subtitle>
      </Banner>
      <Content>
        {mercadoNeloreCards.map((card, index) => (
          <Card key={index}>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <AdvantageList>
              {card.advantages.map((advantage, idx) => (
                <AdvantageItem key={idx}>
                  <CheckIcon />
                  {advantage}
                </AdvantageItem>
              ))}
            </AdvantageList>
          </Card>
        ))}
        {carouselData.map((item, index) => (
          item && item.status_venda === "Disponível" && (
            <CarouselSection key={index} data={item} />
          )
        ))}
      </Content>
    </Container>
  );
};

export default MercadoNelore;
