import ContentLoader from "react-content-loader";

export const PostLoader = () => (
  <ContentLoader
    backgroundColor="#e5e6e7"
    foregroundColor="#bbb"
    speed={3}
    viewBox="0 0 800 500"
  >
    {/* Header */}
    <circle cx="2.5rem" cy="2.5rem" r="2rem" />
    <rect
      x="5.5rem"
      y="2.1rem"
      rx="0.4rem"
      ry="0.4rem"
      height="0.8rem"
      width="4rem"
    />
    <rect
      x="10rem"
      y="2.2rem"
      rx="0.3rem"
      ry="0.3rem"
      height="0.6rem"
      width="5rem"
    />
    <rect
      x="47.5rem"
      y="1rem"
      rx="0.3rem"
      ry="0.3rem"
      width="2rem"
      height="0.6rem"
    />

    {/* Body */}
    <rect
      x="21rem"
      y="5rem"
      rx="0.45rem"
      ry="0.45rem"
      width="8rem"
      height="0.9rem"
    />
    {new Array(5).fill(" ").map((_, i) => (
      <rect
        x="5rem"
        y={`${7 + i * 1.5}rem`}
        rx="0.35rem"
        ry="0.35rem"
        width="40rem"
        height="0.7rem"
        key={i}
      />
    ))}

    {/* Footer */}

    <rect
      x="15.5rem"
      y="14.5rem"
      rx="0.75rem"
      ry="0.75rem"
      width="3rem"
      height="1.5rem"
    />
    <rect
      x="31rem"
      y="14.5rem"
      rx="0.75rem"
      ry="0.75rem"
      width="3rem"
      height="1.5rem"
    />

    {/* Comments */}
    {new Array(3).fill(" ").map((_, i) => (
      <rect
        x="5.5rem"
        y={`${18 + i * 4.5}rem`}
        rx="1.5rem"
        ry="1.5rem"
        width="3rem"
        height="3rem"
        key={i}
      />
    ))}
    {new Array(3).fill(" ").map((_, i) => (
      <rect
        x="9rem"
        y={`${18.1 + i * 4.5}rem`}
        rx="0.35rem"
        ry="0.35rem"
        width="4rem"
        height="0.7rem"
        key={i}
      />
    ))}
    {new Array(3).fill(" ").map((_, i) => (
      <rect
        x="10.5rem"
        y={`${19.1 + i * 4.5}rem`}
        rx="0.25rem"
        ry="0.25rem"
        width="32rem"
        height="0.5rem"
        key={i}
      />
    ))}
    {new Array(3).fill(" ").map((_, i) => (
      <rect
        x="10.5rem"
        y={`${19.9 + i * 4.5}rem`}
        rx="0.25rem"
        ry="0.25rem"
        width="31rem"
        height="0.5rem"
        key={i}
      />
    ))}
  </ContentLoader>
);
