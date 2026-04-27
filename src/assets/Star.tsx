const Star = ({ size = 40, style: s = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ ...s, display: "inline-block" }}>
    <path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#c6f135" />
  </svg>
);

export default Star