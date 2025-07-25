export default function UserInput({ onInputsChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial-investment'>Initial Investment</label>
          <input
            id='initial-investment'
            type='number'
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputsChange('initialInvestment', event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor='annual-investment'>Annual Investment</label>
          <input
            id='annual-investment'
            type='number'
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputsChange('annualInvestment', event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected Return</label>
          <input
            id='expected-return'
            type='number'
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputsChange('expectedReturn', event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            id='duration'
            type='number'
            value={userInput.duration}
            onChange={(event) => onInputsChange('duration', event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
