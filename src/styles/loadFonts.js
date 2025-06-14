import LaCerchia from '../assets/fonts/La_Cerchia.otf';

const fontFace = `
  @font-face {
    font-family: 'La Cerchia';
    src: url(${LaCerchia}) format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(fontFace));
document.head.appendChild(style);
