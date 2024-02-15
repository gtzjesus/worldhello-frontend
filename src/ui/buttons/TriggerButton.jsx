import Button from './Button';

function TriggerButton({ openModal, text }) {
  const handleClick = () => {
    openModal();
  };

  return <Button onClick={handleClick}>{text}</Button>;
}

export default TriggerButton;
