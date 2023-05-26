import { useCallback, useEffect, useState } from "react";

export default function useScreenSize() {
  const getDimensions = useCallback(() => {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }, []);

  const [dimensions, setDimensions] = useState(getDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getDimensions]);

  return [dimensions];
}
