import './App.css';
import { getNutritionData } from './api.js';

function CalorieCounter() {
  const mantras = [
    { id: 1, number: 'One', mantra: "Be good to yourself." },
    { id: 2, number: 'Two', mantra: "Practice makes perfect." },
    { id: 3, number: 'Three', mantra: "Patience is key." },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements[0].value || '';
    if (searchQuery) {
      getNutritionData(searchQuery).then(fat => {
        alert(`The total fat content is ${fat} grams.`);
      });
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        Calorie Counter
      </header>
      <div className="App-body">
        <form onSubmit={handleClick}>
          <div className="Food">Food:</div>
          <input type="searchBar" placeholder="Input your food" />
          <div className="goalWeight">Goal Weight:</div>
          <input type="goalWeight" placeholder="Input your goal weight" />
          <div className='submitButton'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="Mantras">
        <ul>
          {mantras.map((mantra) => (
            <li key={mantra.id}>
              Number: {mantra.number} Mantra: {mantra.mantra}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalorieCounter;
