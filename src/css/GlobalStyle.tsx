import { useEffect } from "react";
const style = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Caveat:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');
  :root {
    --font-display: 'Syne', sans-serif;
    --font-script: 'Caveat', cursive;
    --font-body: 'DM Sans', sans-serif;
  }
`;


const GlobalStyle = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag); // cleanup
    };
  }, []);

  return null;
};

export default GlobalStyle;