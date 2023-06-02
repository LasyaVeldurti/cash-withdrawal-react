// Write your code here
import {Component} from 'react'

import './index.css'

import CashWithdrawal from '../DenominationItem/index'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component {
  state = {balance: 2000}

  onDeductBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="cash-withdraw-container">
          <div className="title-container">
            <button className="name" type="button">
              S
            </button>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount">
              <p className="balance-amount"> {balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          <div className="list-container">
            <ul className="button-container">
              {denominationsList.map(eachValue => (
                <CashWithdrawal
                  denominationValue={eachValue}
                  key={eachValue.id}
                  deductBalance={this.onDeductBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
