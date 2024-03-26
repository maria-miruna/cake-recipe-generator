function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Apple pie recipe",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#cake-recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
