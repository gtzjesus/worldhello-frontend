import Form from '../../ui/form/Form';
import Footer from '../../components/footer/Footer';
import styled from 'styled-components';
const ContactContainer = styled.div`
  max-height: 100vh;
`;

const FormContainter = styled.div`
  height: 80vh;
  padding: var(--padding-small);
`;

const FooterContainer = styled.div`
  height: 20vh;
`;
function Contact() {
  return (
    <ContactContainer>
      <FormContainter>
        <Form />
      </FormContainter>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </ContactContainer>
  );
}

export default Contact;
