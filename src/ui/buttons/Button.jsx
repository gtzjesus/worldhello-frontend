// ------------------------------
// File: Button.js
// ------------------------------
// Description: Reusable Button Component (throughout the whole application)
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled, { css } from 'styled-components';

// ------------------------------
// Constant
// ------------------------------
// This section is used to modify the different sizes we can have in a button (we can add more sizes)
const sizes = {
  small: css`
    background-color: var(--color-tan);
    color: var(--color-black);
    font-size: var(--font-xxxsmall);
    padding: 0.8rem 1.2rem;

    // @MEDIAQUERY logic for small devices 600px
    @media (min-width: 40em) {
      font-size: var(--font-xxsmall);
    }
  `,
};

// ------------------------------
// Constant
// ------------------------------
// This section is used to modify the different variations we can have in a button (we can add more variations)
const variations = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-link);
  `,
};

// ------------------------------
// Styled Componenet
// ------------------------------
// This section has all CSS styles configured for this HTML element.
const Button = styled.button`
  border: none;
  width: fit-content;
  cursor: pointer;
  border-radius: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

// Code logic for default specifications of button element
Button.defaultProps = {
  variation: 'primary',
  size: 'small',
};

// Export the Button (reusable)
export default Button;
