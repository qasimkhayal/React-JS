import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  catageory: string;
  image: string;
};
function ProductListA() {
  let [product, setProduct] = useState<Product[]>([]);
  const fetchProduct = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let id = await response.json();
    setProduct(id);
  };
  useEffect(()=>{
    fetchProduct();
  },[]);
  return (
    <div className="container my-3">
      <h2 className="text-dark fw-bold">product List</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {product.map((product) => (
          <div key={product.id}>
            <div className="col-md-4 " style={{ width: "auto" }}>
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title my-2">{product.title}</h4>
                <p className="card-text mt-3">{product.description}</p>
                <h3 className="text-bold">{product.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductListA;