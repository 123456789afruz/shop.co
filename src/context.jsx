import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {

//Header
    const [active, setActive] = useState(false)


  const toggleBurger = () => {
    setActive(!active)
  }


  const closeMenu = () => {
    setActive(false)
  }
//Header///



//category
const [visibleProducts, setVisibleProducts ] = useState(4);


   
const loadMoreProducts = () => {
   setVisibleProducts(prev => prev + 4)
}

//category///
    

    const value = {
        active,
        toggleBurger,
        closeMenu,
        visibleProducts,
        loadMoreProducts,

    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};