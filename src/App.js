import './App.css';
import {getNutritionData} from './api.js';

function handleClick() {
  alert(`Are you sure you want to submit?`);
}
function fetchData() {
  getNutritionData().then(data => {return data});
}
function inputs() {
  fetchData();
  return (
    <form onSubmit={handleClick}>
      <div>Food:</div>
        <input type="searchBar" placeholder="Input your food" />
      <div>Goal Weight:</div>
      <input type="goalWeight" placeholder="Input your goal weight" />
      <div className='submitButton'>
        <button type="submit">Submit</button>
      </div>
    </form>);
}


function CalorieCounter() {
  const users = [
    { id: 1, name: 'Anya', age: 30 },
    { id: 2, name: 'Vera', age: 25 },
    { id: 3, name: 'Sid', age: 20 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        Calorie Counter
      </header>
      <div className="App-body">
        {inputs()}
      </div>
      <div className="Users">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name: {user.name} Age: {user.age}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalorieCounter;
