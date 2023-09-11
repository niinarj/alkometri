import { useState } from 'react';
import './App.css';

function App() {
  
const [weight, setWeight] = useState (0);
const [gender, setGender] = useState ('male');
const [result, setResult] = useState (0);
const [bottle, setBottle] = useState (0);
const [time, setTime] = useState (0);

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

/*litres: bottles * 0.33
grams: litres * 8 * 4.5
burning: weight / 10
grams(left): grams – (burning * time) */ 

const calculate = () => {
  let level = 0
  let litres = bottle * 0.33
  let grams =  litres * 8 * 4.5
  let burning = weight / 10
  let gramsleft = grams - (burning * time) 
  
  if (gender === 'male') {
    level = gramsleft / (weight * 0.7) 
  } else { //nainen
    level = gramsleft / (weight * 0.6) 
  }
  setResult(level);
}

  return (
    <div id ="container">
      <h3>Alcometer</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <select type="number" value={bottle} onChange={e => setBottle(e.target.value)}>
        {
            numbers.map(bottle =>(
              <option value={bottle}>{bottle} bottles</option>
            ))
          }
        </select>
      </div>

      <div>
        <label>Time</label>
        <select type="number" value={time} onChange={e => setTime(e.target.value)}>
          {
            numbers.map(time =>(
              <option value={time}>{time} hours</option>
            ))
          }
        </select>
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input><label>Male</label>
        <input type="radio" name="gender" value ="female" onChange={e => setGender(e.target.value)}></input> <label>Female</label>
      </div>
      
      <div>
        <label>Result: </label>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}> Calculate</button>
      </div>
    </div>
  );
}

export default App;

//luo public repo ilman mitään tieodstoja (readme, gitignore)
//git remote add origin hhtps.://
//git add .
//git commit -m "Viesti"
//git push -u master