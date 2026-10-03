import React from 'react'
import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
const RecipeList = () => {

    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchRecipes() {
            try {
                setLoading(true)
                const recipesResponse = await fetch('https://dummyjson.com/recipes?limit=10')
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

        fetchRecipes()



    }, [])


    return (
        <>
            {loading && <div>loading...</div>}

            {error && <div>Error fetching recipes. Please try again later.</div>}
            <div className='search-section'>
                <input type="text" placeholder='Search for recipes...' name="search" />
                <button className='searchBtn'>Search</button>
            </div>
            <div className="card-grid">
                {
                    recipes.map((recipe) => (
                        <RecipeCard
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
