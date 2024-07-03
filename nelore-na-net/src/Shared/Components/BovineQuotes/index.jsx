import styled from "styled-components";

const Container = styled.div`
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;
const BovineQuotes = () => {
  return (
    <Container>
      <iframe
        src="https://www.agron.com.br/widget/cotacao.php"
        width="100%;"
        height="280px;"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </Container>
  );
};

export default BovineQuotes;
