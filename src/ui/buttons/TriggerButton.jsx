// TriggerButton.jsx
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 15px; /* Adjust the distance from the bottom as needed */
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  background-color: #007bff; /* Blue color, you can change it to match your theme */
  color: white;
  font-size: 16px;
  z-index: 999; /* Ensure the button appears on top of other content */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker shade of blue on hover */
  }
`;

const TriggerButton = ({ openModal, text }) => {
  console.log(text); // Add this line to check the value of the text prop
  return <Button onClick={openModal}>{text}</Button>;
};

export default TriggerButton;
