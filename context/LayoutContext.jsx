import { createContext, useContext, useState, useEffect } from 'react';

const LayoutContext = createContext();

export const LayoutGenerator = ({ children }) => {
  const variants = ['variant1', 'variant2', 'variant3'];

  const [variant, setVariant] = useState('variant1');

  useEffect(() => {
    setVariant(variants[Math.floor(Math.random() * variants.length)]);

    const interval = setInterval(() => {
      const newRandomVariant = variants[Math.floor(Math.random() * variants.length)];
      setVariant(newRandomVariant);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutContext.Provider value={{ variant }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  return useContext(LayoutContext);
};
