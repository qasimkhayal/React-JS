import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  image: string;
difficulty: string;
  name: string;
  cuisine: string;

};
function RecipeSearch() {
  let [recipe, setRecipe] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
//   const [loading , setLoading] = useState<boolean>(true);
//   const [error , setError] = useState<string | null>(null);
  const fetchRecipe = async () => {
    // try{
    const apiUrl=`https://dummyjson.com/recipes/search?q=${searchTerm}`;
    console.log(apiUrl);
    
 let response = await fetch(
      apiUrl
    );
    // if (!response.ok){
    //     throw new Error ("Error occured while calling the API, please try again");
    // }
 let data  = await response.json();
    setRecipe(data.recipes);
    // setLoading(false);
    // }catch (error:any){ 
    //     setError(error.message);
    // }finally{
    //     setLoading(false);
   
    // }
  };
  useEffect(() => {
    fetchRecipe();
  },[]);
//   if(loading == true){
//     return (
//       <div className="container text-center">
//         <h2 className="text-danger bold">Loading...</h2>
//       </div>
//     );
// }
//     if(error){
//         return (
//           <div className="container text-center">
//             <h2 className="text-danger fw-bold">{error}</h2>
//           </div>
//         );
// }
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
    </div>
  );
}
export default RecipeSearch;
