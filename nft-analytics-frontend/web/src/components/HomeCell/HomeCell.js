import { useEffect, useState } from 'react'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import { APPS } from 'src/constants'

import { averagePriceMockData, averagePriceMockData2, averagePriceMockData3, averagePriceMockData4, averagePriceMockData5, averagePriceMockData6, averagePriceMockData7, uniqueBuyersMockData, uniqueBuyersMockData2, uniqueBuyersMockData3, uniqueBuyersMockData4, uniqueBuyersMockData5, uniqueBuyersMockData6, uniqueBuyersMockData7, volatilityMockData, volatilityMockData2, volatilityMockData3, volatilityMockData4, volatilityMockData5, volatilityMockData6, volatilityMockData7, volumeMockData, volumeMockData2, volumeMockData3, volumeMockData4, volumeMockData5, volumeMockData6, volumeMockData7 } from './MockData'

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
  const [chartData3, setChartData3] = useState([])
  const [chartData4, setChartData4] = useState([])
  const [chartData5, setChartData5] = useState([])
  const [chartData6, setChartData6] = useState([])
  const [chartData7, setChartData7] = useState([])
  const [selectedMetric, setSelectedMetric] = useState('averagePrice')
  useEffect(() => {
    setChartData(AvailableMetrics[selectedMetric])
    setChartData2(AvailableMetrics[selectedMetric + '2'])
    setChartData3(AvailableMetrics[selectedMetric + '3'])
    setChartData4(AvailableMetrics[selectedMetric + '4'])
    setChartData5(AvailableMetrics[selectedMetric + '5'])
    setChartData6(AvailableMetrics[selectedMetric + '6'])
    setChartData7(AvailableMetrics[selectedMetric + '7'])
    const getChartLabel = (metric) => {
      if (metric == 'averagePrice') return 'Price'
      if (metric == 'volatility') return 'Volatility'
      if (metric == 'volume') return 'Volume'
      if (metric == 'uniqueBuyers') return 'Unique Buyers'
    }
    window.Highcharts.chart('container', {
      title: {
        text: `${getChartLabel(selectedMetric)} (30 Days)`,
      },

      yAxis: {
        title: {
          text: getChartLabel(selectedMetric),
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
        {
          name: 'Secret Skellies Society',
          data: chartData3.map((x) => x.value) || [],
        },
        {
          name: 'NEARton',
          data: chartData4.map((x) => x.value) || [],
        },
        {
          name: 'Near Tinker Union',
          data: chartData5.map((x) => x.value) || [],
        },
        {
          name: 'NEARNauts',
          data: chartData6.map((x) => x.value) || [],
        },
        {
          name: 'Battle Boars Gen 0',
          data: chartData7.map((x) => x.value) || [],
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
    averagePrice3: averagePriceMockData3,
    averagePrice4: averagePriceMockData4,
    averagePrice5: averagePriceMockData5,
    averagePrice6: averagePriceMockData6,
    averagePrice7: averagePriceMockData7,
    volatility: volatilityMockData,
    volatility2: volatilityMockData2,
    volatility3: volatilityMockData3,
    volatility4: volatilityMockData4,
    volatility5: volatilityMockData5,
    volatility6: volatilityMockData6,
    volatility7: volatilityMockData7,
    volume: volumeMockData,
    volume2: volumeMockData2,
    volume3: volumeMockData3,
    volume4: volumeMockData4,
    volume5: volumeMockData5,
    volume6: volumeMockData6,
    volume7: volumeMockData7,
    uniqueBuyers: uniqueBuyersMockData,
    uniqueBuyers2: uniqueBuyersMockData2,
    uniqueBuyers3: uniqueBuyersMockData3,
    uniqueBuyers4: uniqueBuyersMockData4,
    uniqueBuyers5: uniqueBuyersMockData5,
    uniqueBuyers6: uniqueBuyersMockData6,
    uniqueBuyers7: uniqueBuyersMockData7,

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
          <p className="text-2xl">1Ⓝ = 1.65 USD</p>
          <span className="p-2 text-indigo-600">
            1.59% ↗️{' '}
          </span>
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
          <button className="mr-2 rounded bg-gray-100 px-2 py-1 text-sm text-gray-500">
            7D
          </button>
          <button className="mr-2 rounded bg-blue-100 px-2 py-1 text-sm text-blue-500">
            30D
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
