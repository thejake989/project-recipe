var recentRecipe =$('#recent-recipe');
var recipes = [];
var key = '1';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // caling function init();
  init();

function init(){
    //Get stored recipes from localStorage
    //Parsing the json string to an object
    var storedRecipes = JSON.parse(localsStorage.getItem(recipes));

    // if recipes were retrieved from local storage, update the cities array to it
    if (storedCities !== null) {
        recipes = storedRecipes;
    }
}

//When form is submitted...
$("#add-recipe").on("click", function(event){
    event.preventDefault();

    // this line will grab the recipe from the input box
    var recipe = $('recipe-input').val().trim()

    // return from function early if submitted recipe is blank
    if (recipe === '') {
        return;
    }
    // adding recipe-input to recipe array
    recipe.push(recipes);
    //store updated recipes in local storage, re-render list
    storeRecipes();
    rednerRecipes();
})

function getRecipeByRecipeName(recipeName){
    var queryURL = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata' +recipeName+ '&appid=' + key;
}