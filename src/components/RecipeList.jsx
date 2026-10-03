import React from 'react'
import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
const RecipeList = () => {

    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [searchText, setSearchText] = useState('')
    async function fetchRecipes() {
        let apiUrl = "https://dummyjson.com/recipes?limit=10"
        if (searchText.length > 1) {
            apiUrl = `https://dummyjson.com/recipes/search?q=${searchText}&limit=10`;
        }
        try {
            setLoading(true)
            const recipesResponse = await fetch(apiUrl)
            const recipesJason = await recipesResponse.json()
            setRecipes(recipesJason.recipes)
            setLoading(false)
        }
        catch (error) {
            console.error('Error fetching recipes:', error)
            setLoading(false)
            setError(true)
        }

    }
    useEffect(() => {


        fetchRecipes()



    }, [])

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value)
    }

    const searchSubmit = () => {
        // setSkip(0);
        fetchRecipes();
    };
    // const handlePageClick = (event) => {
    //     setSkip(event.selected * 10);
    // };
    return (
        <>
            {loading && <div>loading...</div>}

            {error && <div>Error fetching recipes. Please try again later.</div>}
            <div className='search-section'>
                <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder='Search for recipes...' name="search" />
                <button className='searchBtn' onClick={searchSubmit}>
                    Search
                </button>
            </div>
            <div className="card-grid">
                {
                    recipes.map((recipe) => (
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
                    ))
                }

            </div>
        </>
    )
}

export default RecipeList
