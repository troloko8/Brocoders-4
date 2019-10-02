import React from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';

export default function Chart() {
  const data = [
    {
      "name": "1",
      "minute in this hourse": 60,
    },
    {
      "name": "2",
      "minute in this hourse": 30,
    },
    {
      "name": "3",
      "minute in this hourse": 45,
    }
  ]

  return (
    <ComposedChart width={1000} height={350} data={data} margin={{ top: 50, right: 0, bottom: 0, left: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="minute in this hourse" barSize={20} fill="#413ea0" />
    </ComposedChart >
  )
}

