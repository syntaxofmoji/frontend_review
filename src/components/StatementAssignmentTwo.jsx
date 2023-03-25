import { useState } from 'react';

function StateAssignmentTwo() {
  const [numbers, setNumbers] = useState([]);

  const handleClick = () => {
    const newNumber = Math.floor(Math.random() * 10);
    setNumbers(prevNumbers => [...prevNumbers, newNumber]);
  };

  return (
    <section>
      <button onClick={handleClick}>Click me!</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </section>
  );
}

export default StateAssignmentTwo;