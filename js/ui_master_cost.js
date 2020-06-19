const recipes = document.querySelector('.recipes');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  // const forms = document.querySelectorAll('.side-form');
  // M.Sidenav.init(forms, {edge: 'left'});
});

// render recipe data
const renderRecipe = (data, id) => {
  const html = `
    <div class="card-panel recipe white row" data-id="${id}">
      <div class="recipe-details">
      <form class="add-recipe container section" autocomplete="off">
          <div class="recipe-title">Master Cost</div>
          <div></div>
          <div class="recipe-ingredients">
            <label for="title">Feed Cost</label>
            <input id="feed" type="text" value="${data.feed_cost}" class="validate">
          </div>
          <div class="recipe-ingredients">
            <label for="title">Med Cost</label>
            <input id="med" type="text" value="${data.med_cost}" class="validate">
          </div>
          <div class="recipe-ingredients">
            <label for="title">Labour Cost</label>
            <input id="labour" type="text" value="${data.labour_cost}" class="validate">
          </div>
          <div class="recipe-ingredients">
            <label for="title">FOH</label>
            <input id="foh" type="text" value="${data.foh}" class="validate">
          </div>
          <div class="recipe-ingredients">
            <label for="title">OPEX + Interest</label>
            <input id="opex" type="text" value="${data.opex_int}" class="validate">
          </div>
          <div class="center">
            <a style="border-radius:15px" class=" btn-small btn-large update-btn" data-id="${id}">
              UPDATE
            </a>
          </div>
        </form>  
      </div>
    </div>
  `;
  recipes.innerHTML += html;
};

// render recipe data
// const renderRecipe = (data, id) => {
//   const html = `
//     <div class="card-panel recipe white row" data-id="${id}">
//       <img src="/img/dish.png" alt="recipe thumb">
//       <div class="recipe-details">
//         <div class="recipe-title">${data.title}</div>
//         <div class="recipe-ingredients">${data.ingredients}</div>
//       </div>
//       <div class="recipe-delete">
//         <i class="material-icons" data-id="${id}">delete_outline</i>
//       </div>
//     </div>
//   `;
//   recipes.innerHTML += html;
// };

//remove recipe from
const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`)
  recipe.remove();
}
//update recipe from
// const updateRecipe = (data, id) => {
//   const html = `
//     <div class="card-panel recipe white row" data-id="${id}">
//       <div class="recipe-details">
//         <div class="recipe-title">${data.title}</div>
//         <div></div>
//         <div class="recipe-ingredients">
//           <label for="title">Feed Cost</label>
//           <input id="title" type="text" value="${data.feed_cost}" class="validate">
//         </div>
//         <div class="recipe-ingredients">
//           <label for="title">Med Cost</label>
//           <input id="title" type="text" value="${data.med_cost}" class="validate">
//         </div>
//         <div class="recipe-ingredients">
//           <label for="title">Labour Cost</label>
//           <input id="title" type="text" value="${data.labour_cost}" class="validate">
//         </div>
//         <div class="recipe-ingredients">
//           <label for="title">FOH</label>
//           <input id="title" type="text" value="${data.foh}" class="validate">
//         </div>
//         <div class="recipe-ingredients">
//           <label for="title">OPEX + Interest</label>
//           <input id="title" type="text" value="${data.opex_int}" class="validate">
//         </div>
//         <div class="center">
//           <a class=" btn-small btn-large update-btn" data-id="${id}">
//             UPDATE
//           </a>
//         </div>
//       </div>
//     </div>
//   `;
//   recipes.innerHTML += html;
// };