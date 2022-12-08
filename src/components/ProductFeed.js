import React from "react";
import Product from "./Product";
function ProductFeed({ products }) {
  return (
    <div>
      <h1>
        {products.map(
          ({ id, title, price, description, category, image }, index) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}
      </h1>
    </div>
  );
}

export default ProductFeed;
