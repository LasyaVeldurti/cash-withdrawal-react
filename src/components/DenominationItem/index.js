// Write your code here
import './index.css'
import {unlink} from 'fs'

const CashWithdrawal = props => {
  const {denominationValue, deductBalance} = props
  const {value} = denominationValue

  const onDeduct = () => {
    deductBalance(value)
  }
  return (
    <li>
      <button onClick={onDeduct} className="cash-button" type="button">
        {value}
      </button>
    </li>
  )
}

export default CashWithdrawal
