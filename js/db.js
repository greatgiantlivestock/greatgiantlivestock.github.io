// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// real-time listener
db.collection('recipes').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    // console.log(change.doc.data().rate);
    if(change.type === 'added'){
      var a1 = document.querySelector('.recipes');
      if(a1){
        renderRecipe(change.doc.data(), change.doc.id);
      }
      var a = document.querySelector('.recipeshome');
      if(a){
        renderRecipe(change.doc.data(), change.doc.id);
      }
      var b = document.querySelector('.recipeshome1');
      if(b){
        renderRecipe1(change.doc.data(), change.doc.id);
      }
      var c = document.querySelector('.recipeshome2');
      if(c){
        renderRecipe2(change.doc.data(), change.doc.id);
      }
    }
    if(change.type === 'removed'){
      // remove the document data from the web page
      removeRecipe(change.doc.id);
    }
    if(change.type === 'modified'){
      // update the document data from the web page
      // console.log(change.doc.data());
      console.log("modified");
      var a = document.querySelector('.recipeshome');
      if(a){
        // removeRecipe(change.doc.id);
        updateRenderRecipe(change.doc.data(), change.doc.id);
      }
      var b = document.querySelector('.recipeshome1');
      if(b){
        // removeRecipe(change.doc.id);
        updateRenderRecipe1(change.doc.data(), change.doc.id);
      }
      var c = document.querySelector('.recipeshome2');
      if(c){
        updateRenderRecipe2(change.doc.data(), change.doc.id);
      }
      // window.location.href = "/pages/about.html";
      // updateRecipe(change.doc.data(), change.doc.id);
    }
  });
});

// add new recipe
// const form = document.querySelector('form');
// form.addEventListener('submit', evt => {
//   evt.preventDefault();
  
//   const recipe = {
//     title: form.title.value,
//     ingredients: form.ingredients.value
//   };

//   db.collection('recipes').add(recipe)
//     .catch(err => console.log(err));

//   form.title.value = '';
//   form.ingredients.value = '';
// });

// update a recipe
const recipeContainer = document.querySelector('.sidenav');
if(recipeContainer){
  var input = document.getElementById('opex1');
  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('btn_update').click();
      document.getElementById("cattle_cost1").disabled = false;
      document.getElementById("cattle_cost1").readOnly = true;
      document.getElementById('cattle_cost1').focus();
      document.getElementById("cattle_cost1").disabled = true;
    }
  });

  recipeContainer.addEventListener('click', evt => {
    // console.log(evt);
    if(evt.target.tagName === 'A'){
      // console.log(document.getElementById('feed').value);
      // const id = evt.target.getAttribute('data-id');
      const id = document.getElementById('btn_update').value;
      document.getElementById("success_dlg").style.visibility = "visible";
      setTimeout(function(){ document.getElementById("success_dlg").style.visibility = "hidden"; }, 1500);
      // db.collection("recipes").doc(id).update({feed_cost: document.getElementById('feed').value});
      db.collection('recipes').doc(id).update({
        feed_cost: document.getElementById('feed1').value,
        med_cost: document.getElementById('med1').value,
        labour_cost: document.getElementById('labour1').value,
        foh: document.getElementById('foh1').value,
        opex_int: document.getElementById('opex1').value
      });      
    }
  });
}

// update a recipe
// const updatreCalContainer1 = document.querySelector('.recipeshome1');
// if(updatreCalContainer1){
//   updatreCalContainer1.addEventListener('click', evt => {
//     if(evt.target.tagName === 'A'){
//       console.log(document.getElementById('cattle_cost').value);
//       // const id = evt.target.getAttribute('data-id');
//       // db.collection('recipes').doc(id).set({
//       //   title: "Master Cost",
//       //   feed_cost: document.getElementById('feed').value,
//       //   med_cost: document.getElementById('med').value,
//       //   labour_cost: document.getElementById('labour').value,
//       //   foh: document.getElementById('foh').value,
//       //   opex_int: document.getElementById('opex').value
//       // });      
//     }
//   });
// }

// delete a recipe
// const recipeContainer = document.querySelector('.recipes');
// recipeContainer.addEventListener('click', evt => {
//   console.log(evt);
//   if(evt.target.tagName === 'I'){
//     const id = evt.target.getAttribute('data-id');
//     db.collection('recipes').doc(id).delete();
//   }
// });