import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {


  /* Responsive Designs */
    $bp-large: 78.15em; // 1250px
    --responsive-medium: 61.25em; // 980px
    $bp-small: 40em; // 600px
    $bp-smallest: 31.25em; // 500px

  /* Width && Height */
    --width-full-window: 100vh;
    --width-description: 80%;
    --width-half-window: 45vw;
    --width-filled-window: 100vw;
    --width-full-window: 100vw;

    --height-full-window: 100vh;
    --height-percentage-window: 100%;
    --height-row: 10rem;
    --height-navigation: 3.5rem;

    /* Extra Heights */
    --height-navigation-padding: 5rem;
    --height-navigation-padding-40-em: 10rem;

        /* Line Height */
    --line-height-xsmall: 1.5rem;
    --line-height-small: 2.5rem;
    --line-height-medium: 3.5rem;
    --line-height-large: 6rem;

    --logo-height: 2.5rem;


    /* Backrounds */
    --background-primary: #131212;
    --background-secondary: #F5F5F5;
    --background-third: #e7e167;


    /* Colors */
    --color-red: #991b1b;
    --color-black: #121212;
    --color-yellow: #e7e167;
    --color-white: #F5F5F5;
    --color-super-white: #FFFF
    --color-blue: #455e71;
    --color-link: #006ED4;
    --color-green: #6A7744;
    --color-tan: #FAF0E6;
    --color-purple: #6B4C8A;

    /* Text Size */
    --font-xxxsmall: 0.95rem;
    --font-xxsmall: 1.25rem;
    --font-xsmall: 1.35rem;
    --font-small: 1.25rem;
    --font-medium: 2.25rem;
    --font-large: 3rem;
    --font-xlarge: 4rem;
    --font-xxlarge: 7rem;
    --font-xxxlarge: 10rem;
    --font-form: 0.75rem;
    --font-links: 1.75rem;
    --font-smmd: 1.95rem;




      /* Margin */
    --margin-xsmall: 0.75rem;
    --margin-small: 1rem;
    --margin-medium: 2rem;
    --margin-large: 3rem;
    --margin-xlarge: 4.5rem;


    --margin-nav-height: 8rem;
    --margin-form: 0.5rem;


    /* Padding */
    --padding-xxxsmall: 0.15rem;
    --padding-xxsmall: 0.30rem;
    --padding-xsmall: 0.95rem;
    --padding-small: 1.25rem;
    --padding-medium: 2rem;
    --padding-large: 3rem;
    --padding-slarge: 5rem;
    --padding-xlarge: 7rem;
    --padding-xxlarge: 10rem;
    --padding-xxxlarge: 20rem;
    --padding-giant: 30rem;

    --padding-app: 1rem;
    --padding-modal-nav: 0.75rem;

    /* Letter Spacing */
    --spacing-subtitle: -0.05rem;
    --spacing-title: -0.3rem;


    --padding-header:0.5rem 1rem;

    /* Gap */
    --gap-small: .30rem;
    --gap-medium: 1rem;
    --gap-large: 2rem;
    --gap-xlarge: 5rem;
    --gap-xxlarge: 8rem;
    --gap-giant: 12rem;
    --gap-xgiant: 16rem;
    --gap-form: 3.5rem;

    /* Shadows */
    --text-shadow-font: 4px 3px 5px rgba(0, 0, 0, 0.5);




    /* Image Sizes */
    --image-small: 8rem;
    --image-medium: 12.5rem;
    --image-large: 30rem;

    /* Z-Indexes */
    --z-toppest: 9999;
    --z-top: 9998;
    --z-second: 9997;
    --z-third: 9996;

    body.modal-open {
    overflow: hidden;
  }

}
`;

export default GlobalStyles;
