// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {dataAge} = props
  return (
    <div className="css-barchart-container">
      <h1>Vaccination by Age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          data={dataAge}
          startAngle={0}
          endAngle={360}
          dataKey="count"
        >
          <Cell name="18-44" fill="#fecba6" />
          <Cell name="45-60" fill="#b3d23f" />
          <Cell name="Above 60" fill="#a44c9e" />
        </Pie>
        <Legend iconType="circle" layout="horizontal" align="center" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
