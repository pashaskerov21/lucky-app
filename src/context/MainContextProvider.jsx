import React, { createContext } from 'react'
import { categoryArray } from '../data/CategoryData';
import { subcategoryArray } from '../data/SubcategoryData';
import { productArray } from '../data/ProductData';
import { orangeSectionData, greenSectionData } from '../data/CategorySectionData';
import { searchValues } from '../data/SearchValues';

export const MainContext = createContext();

function MainContextProvider({children}) {
  return (
    <MainContext.Provider value={{categoryArray, subcategoryArray, productArray, orangeSectionData, greenSectionData, searchValues}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
