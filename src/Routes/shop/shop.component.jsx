import SHOP_DATA from '../../shop-data.json'
import { CategoriesContext } from '../../contexts/category.context'
import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import  './shop.styles.scss'
import { Fragment } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
const Shop=()=>{


    return(
     <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category />} />
     </Routes>
          );
              };
  export default Shop;
