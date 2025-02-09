const recipesList = document.querySelector('.recipes-list');

fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(({ recipes }) => {
    renderRecipesList(recipes);
  })
  .catch(err => {
    console.log(err);
  });

function renderRecipesList(recipes) {
  const markup = recipes
    .map(
      ({ image, name, cuisine, difficulty }) => `
   <li class="recipes-item">
      <img src="${image}" alt="${name}" />
      <div class="recipes-info">
      <p>${name}</p>
      <p>Cuisine: ${cuisine}</p>
      <p>Difficulty: ${difficulty}</p>
      </div> 
    </li>
    `,
    )
    .join('');
  recipesList.insertAdjacentHTML('beforeend', markup);
}
