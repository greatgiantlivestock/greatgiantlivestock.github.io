const recipes = document.querySelector('.recipes');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render recipe data
// const renderRecipe = (data, id) => {
//   const html = `
//     <div class="card-panel recipe white row" data-id="${id}">
//       <div class="recipe-details">
//         <div class="recipe-title">${data.title}</div>
//         <div class="recipe-ingredients">${data.ingredients}</div>
//         <div class="recipe-ingredients">
//           <label for="title">Feed Cost</label>
//           <input id="title" type="text" value="${data.feed_cost}" class="validate">
//         </div>
//         <div class="recipe-ingredients">${data.foh}</div>
//         <div class="recipe-ingredients">${data.labour_cost}</div>
//         <div class="recipe-ingredients">${data.med_cost}</div>
//         <div class="recipe-ingredients">${data.opex_int}</div>
//       </div>
//     </div>
//   `;
//   recipes.innerHTML += html;
// };

// render recipe data
const renderRecipe = (data, id) => {
  const html = `
    <div class="card-panel recipe white row" data-id="${id}">
      <img src="/img/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${data.title}</div>
        <div class="recipe-ingredients">${data.ingredients}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  recipes.innerHTML += html;
};

//remove recipe from
const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`)
  recipe.remove();
}