import './category-item.styles.scss';

const CategoryItem=({category1})=>{

    return (

        <div className="background-image" style={{backgroundImage:`url(${category1.imageUrl})`}}>
      <div className="category-body-container">
      <h2>
        {category1.title}
      </h2>
      <p>
Shop Now
      </p>
      </div>
      </div>
    )


}

export default CategoryItem