import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Pagination from "./Paginate";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [skip, setSkip] = useState(0);

  async function fetchRecipes() {
    let apiUrl = `https://dummyjson.com/recipes?limit=10&skip=${skip}`;
    if (searchText.length > 1) {
      apiUrl = `https://dummyjson.com/recipes/search?q=${searchText}&limit=10&skip=${skip}`;
    }
    try {
      setLoading(true);
      const recipesResponse = await fetch(apiUrl);
      const recipesJson = await recipesResponse.json();
      setRecipes(recipesJson.recipes);
      setPageCount(recipesJson.total / 10);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRecipes();
  }, [skip]);
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const searchSubmit = () => {
    setSkip(0);
    fetchRecipes();
  };
  const handlePageClick = (event) => {
    setSkip(event.selected * 10);
  };

  return (
    <>
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
      <div className="search-section">
        <input
          type="text"
          value={searchText}
          placeholder="search recipes"
          name="search"
          onChange={handleSearchTextChange}
        />
        <button className="searchBtn" onClick={searchSubmit}>
          Search
        </button>
      </div>
      <div className="card-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            imageUrl={recipe.image}
            name={recipe.name}
            prepTimeMinutes={recipe.prepTimeMinutes}
            cookTimeMinutes={recipe.cookTimeMinutes}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
            caloriesPerServing={recipe.caloriesPerServing}
          />
        ))}
      </div>
      {pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          handlePageChange={(event) => handlePageClick(event)}
        />
      )}
    </>
  );
};
export default RecipeList;