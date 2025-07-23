

import { useState } from 'react';
import './styles.css'
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('')
  const buttonValues = ['AC', 'DEL', '.', '%', '7', '8', '9', 'x', '4', '5', '6', ' - ', '1', '2', '3', ' + ', '0', '=']

  // const handleButtonClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  //   setDisplayValue(displayValue + (e.target as HTMLInputElement).value)
  // }
  return (
    <div >


      <div className="flex justify-center">

        <div className="bg-gray-600 w-100 p-10 rounded-xl mt-8">
          <h3 className="font-bold text-3xl text-sky-300 text-center mb-4">Calculator</h3>
          <form action="">
            <div className='w-full'>
              <input value={displayValue} readOnly className='p-3 text-xl font-semibold  w-full rounded-lg border border-solid mb-3 bg-white' type="text" />
            </div>
            <div className='button-grid'>
              {buttonValues.map((btnVal) => (
                <input
                  key={btnVal}
                  type="button"
                  value={btnVal}
                  className={`${btnVal === '=' ? 'equalBtn' : 'numBtn'}`}
                  onClick={() => {
                    if (btnVal === 'AC') setDisplayValue('');
                    else if (btnVal === 'DEL') setDisplayValue(displayValue.slice(0, -1));
                    else if (btnVal === '=') setDisplayValue(eval(displayValue));
                    else
                    {
                      const operators = ['+', '-', '*', '/', '%', 'x', '.'];

                      const lastChar = displayValue.trim().slice(-1);
                      const isOperator = operators.includes(btnVal.trim());
                      const lastIsOperator = operators.includes(lastChar);

                      // Prevent multiple operators
                      if (isOperator && lastIsOperator) return;

                      // Replace 'x' with '*'
                      const newVal = btnVal === 'x' ? '*' : btnVal;

                      setDisplayValue(displayValue + newVal);
                    }
                  }}
                />
              ))}
            </div>
          </form>
        </div>

      </div>
    </div>
  )
};

export default Calculator;
