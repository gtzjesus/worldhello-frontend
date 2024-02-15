import { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import NavigationWBackground from '../../components/navigation/NavigationWBackground';
import Footer from '../../components/footer/Footer';
import Form from '../../ui/form/Form';

function Contact() {
  // GRAB STATE for navigation scroll
  const [header, setHeader] = useState(false);
  // FUNCTION TO change state on scroll
  const changeHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  // CHECK for scroll with event listener
  window.addEventListener('scroll', changeHeader);
  return (
    <>
      {!header ? <Navigation /> : <NavigationWBackground />}
      <Form />
      <Footer />
    </>
  );
}

export default Contact;
