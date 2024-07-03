import BovineQuotes from "../BovineQuotes";
import { ContainerSidebar } from "./style";

const Sidebar = () => {
    return (
       <ContainerSidebar>
        <h2>Cotações</h2>
        <BovineQuotes />
        <h2>Arquivos</h2>
        <h2>Publicidade</h2>
        <img src="https://d12ceyx7nhfnql.cloudfront.net/auctions/banners/000/002/023/medium/BANNER_PERFIL.png?1720020236" alt="evento liquidação Nelore Celo" />
       </ContainerSidebar>
    )
}

export default Sidebar;