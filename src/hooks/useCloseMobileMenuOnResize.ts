import { useEffect } from "react";

const useCloseMobileMenuOnResize = (onClose: () => void) => {
  useEffect(() => {
    const handleResize = () => {
      onClose();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);
};

export default useCloseMobileMenuOnResize;
