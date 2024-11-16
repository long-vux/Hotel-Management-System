import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins
} from 'chart.js/auto'
import { Chart, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const DB_HOST = process.env.REACT_APP_DB_HOST

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Revenue last 7 days'
      },
      legend: {
        display: false
      }
    },

    scales: {
      // Add scales configuration
      y: {
        beginAtZero: true,
        title: {
          // Customize y-axis title
          display: true,
          text: 'Revenue ($)', // Example: Change to your units
          color: 'black'
        },

        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Set grid color with alpha for opacity
          drawBorder: false // Hide the top and right borders of the chart
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Set grid color with alpha for opacity
          drawBorder: false // Hide the bottom and left borders of the chart
        },

        title: {
          display: true,
          text: 'Day',
          color: 'black'
        }
      }
    }
  }

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Revenue',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      }
    ]
  })

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch(DB_HOST + 'api/Payment')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const paymentData = await response.json()

        const sevenDaysAgo = dayjs().subtract(7, 'day')
        const last7DaysData = paymentData.filter(payment =>
          dayjs(payment.paymentDate).isAfter(sevenDaysAgo)
        )

        const dailyRevenue = {}
        last7DaysData.forEach(payment => {
          const date = dayjs(payment.paymentDate).format('YYYY-MM-DD')
          dailyRevenue[date] = (dailyRevenue[date] || 0) + payment.totalAmount
        })

        const labels = []
        const data = []
        for (let i = 6; i >= 0; i--) {
          // Generates labels for past 7 days
          const date = dayjs().subtract(i, 'day').format('YYYY-MM-DD')
          labels.push(date)
          data.push(dailyRevenue[date] || 0) // Sets revenue, or 0 if no data for that day
        }

        setChartData({
          labels: labels,
          datasets: [
            {
              ...chartData.datasets[0], // Keep existing dataset properties
              data: data
            }
          ]
        })
      } catch (error) {
        console.error('Error fetching payment data:', error)
      }
    }

    fetchPaymentData()
  }, [])
  return (
    <div style={{ backgroundColor: 'white', padding: 4, borderRadius: 7 }}>
      <Line options={options} data={chartData} /> {/* Use the state variable */}
    </div>
  )
}

export default LineChart
