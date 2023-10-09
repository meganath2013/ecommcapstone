import { createContext, useState,useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { getCollectionData } from "../utils/firebase/firebase.utils";

export const CategoriesContext =createContext({
    categoryMap:{},
});
export const CategoriesProvider=({children})=>{
    const [categoryMap,setCategoryMap]=useState({});
    

//     useEffect(()=>{
// addCollection('categories',SHOP_DATA);
//     },[])

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const collValue=  await getCollectionData();
            setCategoryMap(collValue);
        };
        getCategoriesMap();
    },[]);

    const value={categoryMap};
    console.log("context map title "+Object.keys(categoryMap))
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}