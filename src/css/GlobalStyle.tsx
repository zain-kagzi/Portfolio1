import { useEffect } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=JetBrains+Mono:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');
  
  :root {
    --bg: #0b0d10;
    --surface: #12151b;
    --surface-elevated: #181d26;
    --border: #242b38;
    --border-subtle: rgba(255, 255, 255, 0.07);
    --text-primary: #ffffff;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --accent: #c8f135;
    --accent-glow: rgba(200, 241, 53, 0.25);

    --font-display: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

    --radius-control: 10px;
    --radius-card: 16px;
    --radius-pill: 9999px;
  }
`;

const GlobalStyle = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return null;
};

export default GlobalStyle;