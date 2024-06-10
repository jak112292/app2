import React from 'react'
import { PieChart, Pie, Text } from 'recharts'


const Chart = (data) => {
  console.log("data",data)
    const label = ({ name, value, cx, x, y }) => {
        return (
          <>
            <Text x={x} y={y} fill="Red">{name}</Text>
            <Text x={x} y={y} dominantBaseline="hanging" fill="black">{value}</Text>
          </>
        )
      }

  return (
    <>
    <PieChart width={730} height={250}>
    <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="lightblue" label={label}/>
    </PieChart>
    </>
  )
}

export default Chart