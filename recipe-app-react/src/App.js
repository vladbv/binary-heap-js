import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import logo from './logo.svg';
import './App.css';

const App = () => {

const APP_ID = 'df91b0fa';
const APP_KEY = '8f5a0b20ee69948ef08a64f3d5fd0db6';

	const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');


//	const exampleReq = 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free';
// const [counter, setCounter] = useState(0);

useEffect( () => {

getRecipes();

}, [query]);
	const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
		console.log(data);
console.log(data.hits);
		setRecipes(data.hits);

	}

const updateSearch = e => {
setSearch(e.target.value)
	console.log(search);
}

const getSearch = e => {
e.preventDefault();
	setQuery(search);
	setSearch('');
}

return(
	<div className="App">
<h1>Welcome</h1>
		<form onSubmit={getSearch} className="search-form">
<input className="search-bar" type="text" value={search} onChange={updateSearch} />
		<button className="search-button" type="submit">Search</button>
		</form>
	<div className="items-recipe">
	{recipes.map(recipe =>(
<Recipe 
	key={recipe.recipe.label}
	title={recipe.recipe.label} 
	image={recipe.recipe.image} 
	calories={recipe.recipe.calories}	
ingredients = {recipe.recipe.ingredients}


		/>

	)

)}
</div>
	</div>

);
};


export default App;
