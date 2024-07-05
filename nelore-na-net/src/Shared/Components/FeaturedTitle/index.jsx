import { ContainerTitle } from "./styled";

const FeaturedTitle = ({ titleName }) => {
  return (
    <ContainerTitle>
      <h1>{titleName}</h1>
    </ContainerTitle>
  );
};

export default FeaturedTitle;