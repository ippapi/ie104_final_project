import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for routing

const LayoutContext = createContext();

export const LayoutGenerator = ({ children }) => {
  const variants = ['variant1', 'variant2', 'variant3'];
  const [variant, setVariant] = useState('variant1');
  const router = useRouter();

  useEffect(() => {
    const pageVariant = router.pathname.split('/')[1];

    if (variants.includes(pageVariant)) {
      setVariant(pageVariant);
    } else {
      setVariant(variants[Math.floor(Math.random() * variants.length)]);
    }

    const interval = setInterval(() => {
      if (!variants.includes(pageVariant)) {
        setVariant(variants[Math.floor(Math.random() * variants.length)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [router.pathname]);

  return (
    <LayoutContext.Provider value={{ variant }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  return useContext(LayoutContext);
};
