import { useEffect } from 'react'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import { APPS } from 'src/constants'

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

const MockDataWeek = [
  {
    timestamp: '2022-11-13',
    value: 1.1,
  },
  {
    timestamp: '2022-11-14',
    value: 1.2,
  },
  {
    timestamp: '2022-11-15',
    value: 1.164,
  },
  {
    timestamp: '2022-11-16',
    value: 1.3,
  },
  {
    timestamp: '2022-11-17',
    value: 1.5,
  },
  {
    timestamp: '2022-11-18',
    value: 1.64523,
  },
  {
    timestamp: '2022-11-19',
    value: 1.9,
  },
]
export const Success = (data) => {
  useEffect(() => {
    console.log(data)
    window.Highcharts.chart('container', {
      title: {
        text: APPS[data.appName] + ' Price Movement',
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
            return MockDataWeek.map((x) => x.timestamp)[this.value]
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
          name: 'Price',
          data: MockDataWeek.map((x) => x.value) || [],
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
  }, [data])

  return (
    <div>
      {/* Start Topbar */}
      <div className="flex justify-between py-4">
        <div className="flex items-center">
          <p className="text-6xl">$1,000</p>
          <span className="p-2 text-indigo-600">1.59%</span>
        </div>
        <div className="flex items-center">
          <p className="text-4xl">Freaky Elves by Spin</p>
        </div>
      </div>
      {/* End Topbar */}
      {/* Start Graph Options */}
      <div className="flex justify-between">
        <div>
          <span className="pr-5 text-indigo-500 underline">Average Price</span>
          <span className="pr-5 text-gray-500">Volatility</span>
          <span className="pr-5 text-gray-500">Volume</span>
          <span className="pr-5 text-gray-500">Activity</span>
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
