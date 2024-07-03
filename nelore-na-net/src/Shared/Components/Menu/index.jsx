import { Link } from "react-router-dom";
import NeloreNaNet from "../../../assets/imgs/logo-nelore-na-net.png";
import {
  ButtonContainer,
  ContainerLinks,
  ContainerMenu,
  ContentMenu,
  ListMenu,
  LogoNeloreNaNet,
} from "./style";

const Menu = () => {
  return (
    <ContainerMenu>
      <ContentMenu>
        <Link to="/">
          <LogoNeloreNaNet src={NeloreNaNet} alt="Logo da Nelore na Net" />
        </Link>
        <ButtonContainer>
          <button>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </ButtonContainer>
        <ContainerLinks>
          <ListMenu>
            <li>
              <Link to="/">Destaques da semana</Link>
            </li>
            <li>
              <Link to="/galeria">Mercado Nelore</Link>
            </li>
            <li>
              <Link to="/historia">Conheça a raça</Link>
            </li>
            <li>
              <Link to="/cuidados">Cuidados</Link>
            </li>
            <li>
              <Link to="/alimentacao">Alimentação</Link>
            </li>
            <li>
              <Link to="/reproducao">Reprodução</Link>
            </li>
            <li>
              <Link to="/galeria">Galeria</Link>
            </li>
            <li>
              <Link to="/galeria">Agenda de Eventos</Link>
            </li>
          </ListMenu>
        </ContainerLinks>
      </ContentMenu>
      <iframe
        src="https://www.agron.com.br/widgets/cotacao_interna_horizontalv2.php"
        width="1650px;"
        height="100px;"
        scrolling="no"
        frameborder="0"
        style="border-color:#F7F7F7; border:dotted 1px; border-color:#CCC"
      ></iframe>
    </ContainerMenu>
  );
};

export default Menu;
