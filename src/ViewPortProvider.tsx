import React, { createContext, useState, useEffect, useContext } from "react";

// Define the type for the viewport context
interface ViewportContextType {
  width: number;
  height: number;
}

// Create the context with an undefined initial value
const viewportContext = createContext<ViewportContextType | undefined>(undefined);

interface ViewportProviderProps {
  children: React.ReactNode;
}

const ViewportProvider: React.FC<ViewportProviderProps> = ({ children }) => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

// Custom hook to use viewport context
export const useViewport = () => {
  const context = useContext(viewportContext);
  if (!context) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }
  return context;
};

export default ViewportProvider;
