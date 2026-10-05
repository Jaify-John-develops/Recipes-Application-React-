import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddRecipe = () => {
    const navigate = useNavigate();
    const [recipeData, setRecipeData] = useState({
        name: '',
        prepTime: 0,
        cookTime: 0,
        servings: 0,
        difficulty: 'Easy',
        caloriesPerServing: 0,
        ingredients: "",
        instructions: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setRecipeData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const addRecipe = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/recipes/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recipeData)
            })
            if (response.ok) {
                setLoading(false);
            }
            // console.log('response', response)
            navigate('/')
        } catch (error) {
            console.error('Error adding recipe:', error);
            setError(true);
            setLoading(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(recipeData);
        addRecipe();
    }
    return (
        <div className='centered'>
            {loading && <p>Loading...</p>}
            {error && <p>Error adding recipe. Please try again.</p>}
            <div className='form-card'>
                <h2>Add New Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <label>Recipe Name</label>
                    <input type='text' name="name" value={recipeData.name} onChange={handleChange} />

                    <label>Prep Time (minutes)</label>
                    <input type='number' name="prepTime" value={recipeData.prepTime
                    } onChange={handleChange} />

                    <label>Cook Time (minutes)</label>
                    <input type='number' name="cookTime" value={recipeData.cookTime} onChange={handleChange} />

                    <label>Servings</label>
                    <input type='number' name="servings" value={recipeData.servings} onChange={handleChange} />

                    <label>Difficulty</label>
                    <select name="difficulty" value={recipeData.difficulty}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>

                    <label>Calories Per Serving</label>
                    <input type='number' name="caloriesPerServing" value={recipeData.caloriesPerServing} onChange={handleChange} />

                    <label>Ingredients (comma separated values)</label>
                    <textarea cols="50" row="4" value={recipeData.ingredients} name="ingredients" onChange={handleChange}></textarea>

                    <label>Instructions (comma separated values)</label>
                    <textarea cols="50" row="4" value={recipeData.instructions} name="instructions" onChange={handleChange}></textarea>

                    <button type="submit" >Add Recipe</button>

                </form>
            </div>

        </div>
    )
}

export default AddRecipe
