import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const RecipeDetail = () => {
    const routeParams = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [recipeDetail, setRecipeDetail] = useState({})

    useEffect(() => {
        async function fetchRecipeDetail() {
            try {
                setLoading(true)
                const response = await fetch(`https://dummyjson.com/recipes/${routeParams.recipeid}`)
                const jsonResponse = await response.json()
                console.log(jsonResponse)
                setRecipeDetail(jsonResponse)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
                console.log(error)
            }
        }
        fetchRecipeDetail()
    }, [])
    return (
        <div className='centered'>
            {loading && (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
            {error && (
                <div>
                    <h1>Error occurred while fetching recipe details.</h1>
                </div>
            )}
            <div className='detail-card'>
                {/* Recipe id : {routeParams.recipeid} */}

                <img src={recipeDetail && recipeDetail.image ? recipeDetail.image : ''} alt="detail_img_failed" />
                <div className='detail-body'>
                    <h2>{recipeDetail && recipeDetail.name ? recipeDetail.name : null}</h2>

                </div>
                <div className='recipe-meta'>
                    <p>
                        <strong>Prep Time:</strong> {recipeDetail && recipeDetail.prepTimeMinutes ? recipeDetail.prepTimeMinutes : null} mins
                    </p>
                    <p>
                        <strong>Cook Time:</strong> {recipeDetail && recipeDetail.cookTimeMinutes ? recipeDetail.cookTimeMinutes : null} mins
                    </p>
                    <p>
                        <strong>Servings:</strong> {recipeDetail && recipeDetail.servings ? recipeDetail.servings : null}
                    </p>
                    <p>
                        <strong>Difficulty:</strong> {recipeDetail && recipeDetail.difficulty ? recipeDetail.difficulty : null}
                    </p>
                    <p>
                        <strong>Calories</strong> {recipeDetail && recipeDetail.caloriesPerServing ? recipeDetail.caloriesPerServing : null}
                    </p>
                    <p>
                        <strong>Cuisine:</strong> {recipeDetail && recipeDetail.cuisine ? recipeDetail.cuisine : null}
                    </p>
                    <p>
                        <strong>Rating:</strong> {recipeDetail && recipeDetail.rating ? recipeDetail.rating : null}
                    </p>



                </div>

                <div className='ingredients'>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipeDetail && recipeDetail.ingredients ? recipeDetail.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        )) : null}
                    </ul>
                </div>
                <div className='instructions'>
                    <h3>Instructions</h3>
                    <ol>
                        {recipeDetail && recipeDetail.instructions ? recipeDetail.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        )) : null}
                    </ol>
                </div>

            </div>

        </div>
    )
}

export default RecipeDetail
