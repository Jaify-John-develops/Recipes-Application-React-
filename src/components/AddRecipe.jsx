import React from 'react'

const AddRecipe = () => {
  return (
    <div className='centered'>
        <div className ='form-card'>
            <h2>Add New Recipe</h2>
            <form>
                <label>Recipe Name</label>
                <input type='text' name="name" placeholder='Enter recipe name'/>

                <label>Prep Time (minutes)</label>
                <input type='number' name="prepTime" />

                <label>Cook Time (minutes)</label>
                <input type='number' name="cookTime" />

                <label>Servings</label>
                <input type='number' name="servings" />

                <label>Difficulty</label>
                <select name="difficulty">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <label>Calories Per Serving</label>
                <input type='number' name="caloriesPerServing" />

                <label>Ingredients (comma separated values)</label>
               <textarea cols="50" row="4"></textarea>

                <label>Instructions (comma separated values)</label>
                <textarea cols="50" row="4"></textarea>

                <button type="submit">Add Recipe</button>

            </form>
        </div>
      
    </div>
  )
}

export default AddRecipe
