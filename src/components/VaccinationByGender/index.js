// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {dataGender} = props
  console.log(dataGender)

  return (
    <div className="css-barchart-container">
      <h1>Vaccination by gender</h1>
      <ResponsiveContainer width="90%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={dataGender}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#fecba6" />
            <Cell name="Female" fill="#b3d23f" />
            <Cell name="Others" fill="#a44c9e" />
          </Pie>
          <Legend iconType="circle" layout="horizontal" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
