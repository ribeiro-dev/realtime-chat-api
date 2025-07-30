import { createGlobalStyle } from "styled-components";

import ArchivoRegularTtf from "../assets/fonts/Archivo-Regular.ttf";
import ArchivoMediumTtf from "../assets/fonts/Archivo-Medium.ttf";
import ArchivoSemiBoldTtf from "../assets/fonts/Archivo-SemiBold.ttf";
import ArchivoBoldTtf from "../assets/fonts/Archivo-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Archivo';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ArchivoRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Archivo';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ArchivoMediumTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Archivo';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ArchivoSemiBoldTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Archivo';
    font-weight: 700;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ArchivoBoldTtf}') format('truetype');
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Archivo, sans-serif;
  }

  body {
    background: #212229;
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #2e333d;
    border-radius: 6px;
  }
`;
