import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory =({categories}) =>{

    return(
    <div className="directory-container">

  {categories.map((category) =>{

   return(
  <div key={category.id} className="category-container">
        <CategoryItem category1={category}/>

    </div>


    )
   }
    )}

</div>
    )
}
export default Directory;