import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputType, inputValue) {
    setUserInput((previous) => {
      return {
        ...previous,
        [inputType]: +inputValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputsChange={handleInputChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className='center'>
          Please enter a duration equal to or greater than one.
        </p>
      )}
    </>
  );
}

export default App;
