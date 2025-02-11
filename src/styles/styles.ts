import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background:rgb(255, 255, 255); /* Light lavender for background */
        color:rgb(110, 9, 95); /* Deep contrast purple for main text */
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #8e44ad; /* Bright purple for anchor links */

        :hover {
            color: #6c3483; /* Darker purple on hover */
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #8e44ad; /* Bright purple for headings */
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #6c3483; /* Medium purple for paragraphs */
        font-size: 21px;
        line-height: 1.41;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: #f5ebff; /* Softer input background */
        padding: 1rem 1.25rem;
        transition: all 0.3s ease-in-out;

        :focus-within {
            box-shadow: #8e44ad 0px 0px 0px 2px; /* Purple focus shadow */
        }
    }

    button {
        background: #8e44ad; /* Bright purple for buttons */
        color: #ffffff;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease-in-out;

        :hover {
            background: #6c3483; /* Darker hover button color */
        }
    }

    a:hover,
    button:hover {
        filter: brightness(1.1);
    }

    *:focus {
        outline: none;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
