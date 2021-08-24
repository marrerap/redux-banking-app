import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionDeposit, actionWithdrawal } from '../redux/actions/account'

function BalanceForm() {
    const dispatch = useDispatch()
    const [ amount, setAmount ] = useState(0);
    const [action, setAction] = useState('Deposit')
    const [ account, setAccount ] = useState('Savings')

const handleSubmit = (e) => {
    e.preventDefault()
    if (action === 'Deposit'){
        dispatch(actionDeposit(amount,account))
    }else if (action === 'Withdrawal'){
        dispatch(actionWithdrawal(amount, account))
    }

    
}

  return (
    <form onSubmit={handleSubmit} >
      <label>
        <span>Amount: </span>
        <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <label>
          <span>Action </span>
          <select value={action} onChange={(e) => setAction(e.target.value)} >
              <option>Deposit</option>
              <option>Withdrawal</option>
          </select>
      </label><br/>
      <label>
          <span>Account </span>
          <select value={account} onChange={(e) => setAccount(e.target.value)} >
              <option value="checking">Checking</option>
              <option value='savings'>Savings</option>
          </select>
      </label>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BalanceForm;
