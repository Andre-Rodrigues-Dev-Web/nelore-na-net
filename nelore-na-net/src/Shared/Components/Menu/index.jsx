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
              <Link to="/galeria">Fotos</Link>
            </li>
            <li>
              <Link to="/galeria">Agenda de Eventos</Link>
            </li>
            <li>
              <Link to="/">Anuncie com a gente</Link>
            </li>
            <li>
              <Link to="/">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
          </ListMenu>
        </ContainerLinks>
      </ContentMenu>
    </ContainerMenu>
  );
};

export default Menu;
