import { useState } from 'react';

function StateAssignmentOne() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <section>
      <button onClick={handleClick}>{` ${clicks} time${clicks !== 1 ? 's' : ''}`}</button>
    </section>
  );
}

export default StateAssignmentOne;
