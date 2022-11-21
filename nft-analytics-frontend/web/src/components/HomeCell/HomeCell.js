import { useEffect, useState } from 'react'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import { APPS } from 'src/constants'

import { averagePriceMockData, averagePriceMockData2, uniqueBuyersMockData, uniqueBuyersMockData2, volatilityMockData, volatilityMockData2, volumeMockData, volumeMockData2 } from './MockData'

export const QUERY = gql`
  query HomeQuery($appName: String!) {
    transactionsForApp(appName: $appName) {
      price {
        value
        timestamp
      }
      transactions {
        value
        timestamp
      }
    }
  }
`

export const Loading = () => (
  <div className="align-center mt-5 flex items-center justify-center">
    <ClimbingBoxLoader color="#ffde5c" />
  </div>
)

export const Empty = () => (
  <div className="align-center mt-5 flex items-center justify-center">
    <img src="/nodata.png" alt="no data" height={100} width={100} />
  </div>
)

export const Failure = () => (
  <div className="align-center mt-5 flex items-center justify-center">
    <img src="/nodata.png" alt="no data" height={100} width={100} />
  </div>
)

export const Success = (data) => {
  const [chartData, setChartData] = useState([])
  const [chartData2, setChartData2] = useState([])
  const [selectedMetric, setSelectedMetric] = useState('averagePrice')
  useEffect(() => {
    setChartData(AvailableMetrics[selectedMetric])
    setChartData2(AvailableMetrics[selectedMetric + '2'])
    window.Highcharts.chart('container', {
      title: {
        text: 'Average Price',
      },

      yAxis: {
        title: {
          text: 'Price',
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Date',
        },
        labels: {
          enabled: true,
          formatter: function () {
            return chartData.map((x) => x.timestamp)[this.value]
          },
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },

      series: [
        {
          name: 'Freaky Eleves by Spin',
          data: chartData.map((x) => x.value) || [],
        },
        {
          name: 'Antisocial Ape Club',
          data: chartData2.map((x) => x.value) || [],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    })
  }, [chartData, selectedMetric])

  const AvailableMetrics = {
    averagePrice: averagePriceMockData,
    averagePrice2: averagePriceMockData2,
    volatility: volatilityMockData,
    volatility2: volatilityMockData2,
    volume: volumeMockData,
    volume2: volumeMockData2,
    uniqueBuyers: uniqueBuyersMockData,
    uniqueBuyers2: uniqueBuyersMockData2

  }

  const changeMetric = (metricName) => {
    setSelectedMetric(metricName)
    // setChartData(AvailableMetrics[metricName])
    // setChartData2(AvailableMetrics[metricName + '2'])
  }

  return (
    <div>
      {/* Start Topbar */}
      <div className="flex justify-between py-4">
        <div className="flex items-center">
          <p className="text-6xl">16.2 Ⓝ</p>
          <span className="p-2 text-indigo-600">
            1.59% ↗️{' '}
          </span>
        </div>
        <div className="flex items-center">
          <p className="text-4xl">Freaky Elves by Spin</p>
        </div>
      </div>
      {/* End Topbar */}
      {/* Start Graph Options */}
      <div className="flex justify-between">
        <div>
          <span className={`pr-5 cursor-pointer ${selectedMetric === 'averagePrice' ? 'text-indigo-500 underline' : 'text-gray-500'}`} onClick={() => changeMetric('averagePrice')}>Average Price</span>
          <span className={`pr-5 cursor-pointer ${selectedMetric === 'volatility' ? 'text-indigo-500 underline' : 'text-gray-500'}`} onClick={() => changeMetric('volatility')}>Volatility</span>
          <span className={`pr-5 cursor-pointer ${selectedMetric === 'volume' ? 'text-indigo-500 underline' : 'text-gray-500'}`} onClick={() => changeMetric('volume')}>Volume</span>
          <span className={`pr-5 cursor-pointer ${selectedMetric === 'uniqueBuyers' ? 'text-indigo-500 underline' : 'text-gray-500'}`} onClick={() => changeMetric('uniqueBuyers')}>Unique Buyers</span>
        </div>
        <div>
          <button className="mr-2 rounded bg-gray-100 px-2 py-1 text-sm text-gray-500">
            1H
          </button>
          <button className="mr-2 rounded bg-gray-100 px-2 py-1 text-sm text-gray-500">
            24H
          </button>
          <button className="mr-2 rounded bg-blue-100 px-2 py-1 text-sm text-blue-500">
            7D
          </button>
          <button className="mr-2 rounded bg-gray-100 px-2 py-1 text-sm text-gray-500">
            1Y
          </button>
          <button className="mr-2 rounded bg-gray-100 px-2 py-1 text-sm text-gray-500">
            All
          </button>
        </div>
      </div>
      {/* End Graph Options */}
      {/* Start Chart */}
      <figure className="m-5">
        <div className="m-5" id="container"></div>
      </figure>
      <figure className="highcharts-figure mt-5">
        <div id="container-transactions"></div>
      </figure>
      {/* End Chart  */}
      {/* Start Chips */}
      {/* End Chips */}
    </div>
  )
}
