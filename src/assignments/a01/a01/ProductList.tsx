import { useState } from "react";

type Product = {
    id :number;
    title: string;
    price:number;
    description:string;
    catageory:string;
    image:string;
}
function ProductList() {
    let [products , setProducts] = useState<Product[]>([]);
    const fetchProduct = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let id  = await response.json();
    setProducts(id);
    };
    return (
      <div className="container my-3">
        <h2 className="text-dark fw-bold">
          product List</h2>
        <button className="btn btn-danger my-2" onClick={fetchProduct}>
          Fetch Product
        </button>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 col-lg-3 mb-4"
              key={product.id}>
              <img className="card-img-top">{product.image}</img>
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text">{product.description}</p>
              <h6 className="text-bold">{product.price}</h6>
            </div>
          ))}
        </div>
      </div>
    );
}
      export default ProductList;
      


    
