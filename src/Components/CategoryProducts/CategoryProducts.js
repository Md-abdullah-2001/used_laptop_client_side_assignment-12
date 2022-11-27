import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import ModalForm from "./ModalForm";
import SingleProduct from "./SingleProduct";

const CategoryProducts = () => {
  const [productData, setProductData] = useState(null);

  const products = useLoaderData();
  console.log(products);
  //

  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 m-8 ">
        {products.map((product) => (
          <SingleProduct
            product={product}
            setProductData={setProductData}
          ></SingleProduct>
        ))}
      </div>
      {productData && (
        <ModalForm
          productData={productData}
          setProductData={setProductData}
        ></ModalForm>
      )}
    </section>
  );
};

export default CategoryProducts;
