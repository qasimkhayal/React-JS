import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  catageory: string;
  image: string;
};
function ProductListB() {
  let [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchProduct = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Error occured while calling the api");
      }
      const data: Product[] = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  if (loading == true) {
    return (
      <div className="container text-center">
        <h2 className="text-danger bold">Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container text-center">
        <h2 className="text-danger fw-bold">{error}</h2>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Posts</h1>
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
export default ProductListB;
