import styled from "styled-components";
import MapChart from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left_Top = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 1440px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 1440px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right_Top = styled.div`
  flex: 1;
  @media only screen and (max-width: 1440px) {
    display: none;
  }
`;

const handleSubmit = (e: any) => {
  e.preventDefault();
};

export default function Contact() {
  return (
    <Section>
      <Container>
        <Left_Top>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write your message" rows={10} />
            <Button type="submit">Send</Button>
          </Form>
        </Left_Top>
        <Right_Top>
          <MapChart />
        </Right_Top>
      </Container>
    </Section>
  );
}
