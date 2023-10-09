import SHOP_DATA from '../../shop-data.json'
import { CategoriesContext } from '../../contexts/category.context'
import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { Fragment } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
const CategoriesPreview=()=>{

    const {categoryMap} =useContext(CategoriesContext);
    return(
      <Fragment>
        {
          Object.keys(categoryMap).map((key)=>{

            const products=categoryMap[key];
            return (<CategoryPreview key={key} title={key} products={products}/>)
          })
        }
            
            </Fragment>
          );
              };
  export default CategoriesPreview;
