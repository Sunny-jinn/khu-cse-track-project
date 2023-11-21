import { Container, Name, Part, Title, Developers, Wrapper } from "./styled";
import { Github } from "@emotion-icons/bootstrap/Github";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Developers</Title>
        <Developers>
          <Part>
            <div>AI / ML</div>
            <div>Backend</div>
            <div>Frontend</div>
          </Part>
          <Name>
            <div>권구현 신지혜 이혁승</div>
            <div>김지애 박나래</div>
            <div>김진우</div>
          </Name>
        </Developers>
        <Github width={30} height={30} />
      </Wrapper>
    </Container>
  );
};

export default Footer;
