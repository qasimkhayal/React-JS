import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  image: string;
  difficulty: string;
  name: string;
  cuisine: string;
};

const PAGE_SIZE = 4;

const RecipePages =() => {
  let [recipe, setRecipe] = useState<Recipe[]>([]);
  const [currentPage , setCurrentPage] = useState <number>(1);
  const [totalPage , setTotalPages] = useState <number>(0);
  const [searchTerm , setSearchTerm] = useState <string>("");
  
  const fetchRecipe = async () => {
    let skipRecords =(currentPage - 1) * PAGE_SIZE;
   let apiUrl: string = `https://dummyjson.com/recipes?select=id,name,image,difficulty&limit=${PAGE_SIZE}&skip=${skipRecords}`;
    let response = await fetch(apiUrl);

    let data = await response.json();
   const recipesData: Recipe [] = data.recipes;
   setTotalPages (Math.ceil(data.total/PAGE_SIZE));
   console.log(`Total Page ${totalPage}`);
   setRecipe(recipesData);

   
  };
  useEffect(() => {
    fetchRecipe();
  }, [currentPage]);

  return (
    <div className="container my-3">
      <h2 className="text-dark fw-bold">Recipes</h2>
      <div className="mb-5 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search Recipes (e.g. pizz,chicken,soup)..."
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
        <button className="btn btn-primary" onClick={() => fetchRecipe()}>
          Search
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {recipe.map((recipe) => (
          <div key={recipe.id}>
            <div className="col-md-4 " style={{ width: "auto" }}>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title my-3 text-danger fw-bold">
                  {recipe.name}
                </h3>
                <h5 className="card-text mt-2 text-sucess">{recipe.cuisine}</h5>
                <h6 className="card-text mt-2 text-primary">
                  {recipe.difficulty}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                setCurrentPage(currentPage > 2 ? currentPage - 1 : 1)
              }
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage(1)}>
              1
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage(2)}>
              2
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage(3)}>
              3
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage(4)}>
              4
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage (currentPage <totalPage ? currentPage +1 :currentPage)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default RecipePages;
