function displayRecipe(response) {
  console.log("Recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b3b90fo474e98fbe2dt0209a2baa7df2";
  let context =
    "You are a cakes expert and love to write cake recipes. Your mission is to generate a cake recipe. Please include the ingredients first and then the steps to complete the recipe in basic HTML format and separate each line with a <br />. For example, '• 1 cup all-purpose flour' followed by 'Step 1: Preheat the oven to 350°F.' Make sure to follow the user instructions. Do not include a title, an input or anything else, start directly wit ingredients. Sign the recipe with 'SheCodes AI' inside a <stong> element at the end of the recipe.";
  let prompt = `User instructions: Generate a cake recipe about ${instructionsInput.value}`;

  context +=
    "<br /><br /><strong>Ingredients:</strong><br /><div style='margin-bottom: 5px'></div>";
  context +=
    "<br /><strong>Instructions:</strong><div style='margin-bottom: 5px'></div><br />";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#cake-recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
