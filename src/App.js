import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BalanceForm from './components/BalanceForm';



function App() {

  const checking = useSelector((state) => state.checking)
  const savings = useSelector((state) => state.savings)





  return (
    <div className="App">
     <h1>Bank Account Balance</h1>
     <h2>Checking: {checking}</h2>
     <h2>Savings: {savings}</h2>
     <BalanceForm />
     
    </div>
  );
}

export default App;
