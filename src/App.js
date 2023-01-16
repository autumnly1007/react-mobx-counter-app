import { observer } from 'mobx-react-lite';
import './App.css';

const App = observer((props) => {
  const { myCounter } = props;

  return (
    <div>
      카운트: {myCounter.count}
      <br />
      <br />
      마이너스?: {myCounter.isNegative}
      <br />
      <br />
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
});

export default App;
