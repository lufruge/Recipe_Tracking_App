import React, { useState } from "react";

function RecipeCreate({ onCreateRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    onCreateRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <div className="recipe-create">
      <h2>Create a Recipe</h2>
      <form name="create" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Cuisine:
          <input
            type="text"
            name="cuisine"
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
            required
          />
        </label>
        <label>
          Photo URL:
          <input
            type="text"
            name="photo"
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
            required
          />
        </label>
        <label>
          Ingredients:
          <textarea
            name="ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
            required
          />
        </label>
        <label>
          Preparation:
          <textarea
            name="preparation"
            value={preparation}
            onChange={(event) => setPreparation(event.target.value)}
            required
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeCreate;
