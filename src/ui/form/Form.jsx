// ------------------------------
// File: Form.js
// ------------------------------
// Description: React component the form to Contact WorldHello.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import { useState } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
import Spinner from '../spinners/Spinner';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const ModalNav = styled.div`
  // Logic for arranging children
  display: flex;
  // Code logic for aligning vertically
  align-items: center;
  // Code logic for aligning horizontally
  justify-content: space-between;

  // UI
  // Code logic for title element
  font-size: var(--font-small);
  letter-spacing: var(--spacing-subtitle);
  // Code logic shadow beneath text (more visibility)
  /* text-shadow: var(--text-shadow-font); */
  text-transform: uppercase;

  // Code logic for margin from form in modal
  margin-bottom: var(--margin-form);
  padding: var(--padding-modal-nav);
`;

const Close = styled.img`
  cursor: pointer;
`;

const ModalTitle = styled.span`
  font-size: var(--font-xxsmall);
`;

const StyledForm = styled.form`
  padding: 0 var(--padding-small);
  font-size: var(--font-form);
  color: var(--color-black);

  // Minimum height for each modal content

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  /* @media (min-width: 40.5em) {
    min-height: 45vh;
  } */
`;

const FormGroup = styled.div`
  margin-bottom: var(--margin-form);
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HorizontalGroup = styled.div`
  gap: var(--gap-form);
`;

const Label = styled.label`
  float: left;
`;

const Input = styled.input`
  max-width: fit-content;
  padding: var(--padding-small);
  border: none;
  border: 1px solid #ccc;
  float: left;
`;

const Select = styled.select`
  max-width: 100%;
  padding: var(--padding-small);
  border: none;
  border: 1px solid #ccc;
  float: left;
  // IOS feature UI for select
  -webkit-appearance: none;
`;

const Option = styled.option``;

const Asterik = styled.span`
  color: var(--color-purple);
  font-size: var(--font-form);
`;

const FormButton = styled.div`
  float: right;
  margin: var(--margin-small) 0 var(--margin-small) 0;
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
  padding: var(--padding-large) 0;
`;

const Img = styled.img`
  max-height: 64px;
  max-width: 64px;
  margin: 0 auto;
`;

const Delivered = styled.span`
  font-size: var(--font-xsmall);
`;

const DeliveredSmall = styled.span`
  font-size: var(--font-form);
  padding: var(--padding-small);
`;

const ErrorMessage = styled.div`
  padding: var(--padding-xxsmall);
  color: red;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Form({ closeModal }) {
  // ------------------------------
  // const variables
  // ------------------------------
  // This section sets all variables needed to implement form submission
  // Create variable to keep track of form submission satus
  const [isSubmittionComplete, setSubmissionComplete] = useState(false);
  // Create variable to keep track of the loading state while submitting form
  const [isLoading, setLoading] = useState(false);

  // Variables used for error handling
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formErrors, setFormErrors] = useState('');

  // Code logic for creating a state for our input data, an object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
    howCanWeHelp: '',
    howDidYouHear: 'default',
  });

  // Function to close all modals
  const closeAllModals = () => {
    // Add any other modals you have and set them to false
    setSubmissionComplete(false);
    setLoading(false);
  };

  // Function to close modal after 10 seconds
  const autoCloseModal = () => {
    setTimeout(() => {
      closeModal();
      closeAllModals();
    }, 12000); // 10000 milliseconds = 10 seconds
  };

  // ------------------------------
  // Validation of the FORM
  // ------------------------------
  // This section includes functions used to perform different tasks

  // Inside validateForm function, set the errors state correctly
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
      isValid = false;
    }

    // Update the formErrors state
    setFormErrors(errors);
    return isValid;
  };

  // ------------------------------
  // Handler functions
  // ------------------------------
  // This section includes functions used to perform different tasks

  // Handle the input changes in the form
  // Inside handleInputChange function, update the state correctly
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding state variable based on the input name
    if (name === 'name') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhoneNumber(value);
    }
    // Update the form data object
    setFormData({ ...formData, [name]: value });
  };

  // Handle the form submittion
  // Inside handleSubmit function, update the form state properly
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (validateForm()) {
      try {
        const response = await fetch('https://worldhello.us/api/sendEmail', {
          method: 'POST',
          body: JSON.stringify({ fullName, email, phoneNumber }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          setSubmissionComplete(true);
        } else {
          console.error('Submission failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setLoading(false); // Ensure loading state is always updated
      }
    } else {
      setLoading(false); // Ensure loading state is updated when form validation fails
      console.log('Form validation failed');
    }
  };

  return (
    <>
      {!isSubmittionComplete && !isLoading ? (
        <ModalNav>
          <ModalTitle>Send a message</ModalTitle>
          <Close onClick={closeModal} src="/icons/close.png" />
        </ModalNav>
      ) : (
        ''
      )}

      {isLoading ? (
        <StyledForm>
          <Spinner />
        </StyledForm>
      ) : isSubmittionComplete ? (
        <>
          <StyledForm>
            <DeliveryContainer>
              <Img src="/icons/email-sent.png"></Img>
              <Delivered>
                Email sent successfully! <br />
                We will reach out to you shortly.
              </Delivered>
              <DeliveredSmall>
                We look forward to create a successful partnership.
              </DeliveredSmall>
            </DeliveryContainer>
          </StyledForm>
          {autoCloseModal()}
        </>
      ) : (
        <StyledForm action="https://worldhello.us/api/sendEmail" method="post">
          <FormGroup>
            <FormRow>
              <Label htmlFor="name">
                First and Last Name<Asterik>*</Asterik>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormRow>
            {formErrors.fullName && (
              <ErrorMessage>{formErrors.fullName}</ErrorMessage>
            )}
          </FormGroup>
          <HorizontalGroup>
            <FormGroup>
              <FormRow>
                <Label htmlFor="email">
                  Email Address<Asterik>*</Asterik>
                </Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormRow>
              {formErrors.email && (
                <ErrorMessage>{formErrors.email}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <FormRow>
                <Label htmlFor="phone">
                  Phone Number<Asterik>*</Asterik>
                </Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormRow>
              {formErrors.phoneNumber && (
                <ErrorMessage>{formErrors.phoneNumber}</ErrorMessage>
              )}
            </FormGroup>
          </HorizontalGroup>
          <HorizontalGroup>
            <FormGroup>
              <FormRow>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </FormRow>
            </FormGroup>
            <FormGroup>
              <FormRow>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="Enter Website URL (Link)"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </FormRow>
            </FormGroup>
          </HorizontalGroup>
          <FormGroup>
            <FormRow>
              <Label htmlFor="howCanWeHelp">How can we help you?</Label>
              <Input
                type="text"
                id="howCanWeHelp"
                name="howCanWeHelp"
                placeholder="Need a New Website?"
                value={formData.howCanWeHelp}
                onChange={handleInputChange}
              />
            </FormRow>
          </FormGroup>

          <FormGroup>
            <FormRow>
              <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
              <Select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
              >
                <Option value="googleSearch">Google Search</Option>
                <Option value="socialMedia">Social Media</Option>
                <Option value="friend">Friend</Option>
                <Option value="ad">Ad</Option>
                <Option value="other">Other</Option>
              </Select>
            </FormRow>
          </FormGroup>
          <FormButton>
            <FormRow>
              <Button type="submit" onClick={handleSubmit}>
                Submit Message
              </Button>
            </FormRow>
          </FormButton>
        </StyledForm>
      )}
    </>
  );
}

// Export reusable form component
export default Form;
