import { useParams } from 'react-router-dom'
import './category.styles.scss'
import { Fragment, useContext, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/category.context';
import ProductCard from '../../components/product-card/product-card.component';
import { useState } from 'react';

const Category =() =>{
    const {category}=useParams();
    const {categoryMap}=useContext(CategoriesContext);
    const [products,setProducts] = useState(categoryMap[category]);

    useEffect(()=>{
        setProducts(categoryMap[category]);
    },[category,categoryMap])

    return(
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container1'>
          {products &&
            products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
      </Fragment>
    )
}

export default Category;