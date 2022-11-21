const generateAveragePriceMockData = (seconds) => {
  const days = parseInt(seconds / 86400);
  const currentDay = parseInt(parseInt(parseInt(Date.now() / 1000) / 86400))
  const data = []
  for (let i = 0; i <= days; i++) {
    data.push({ timestamp: new Date(((currentDay * 86400) - (i * 86400)) * 1000).toDateString(), value: (Math.random() + 1) * .5 * 32 })
  }
  return data.reverse()
}
const generateVolumeMockData = (seconds) => {
  const days = parseInt(seconds / 86400);
  const currentDay = parseInt(parseInt(parseInt(Date.now() / 1000) / 86400))
  const data = []
  let total = 19000;
  for (let i = 0; i <= days; i++) {
    total = total - ((Math.random() + 1) * .5 * 32)
    data.push({ timestamp: new Date(((currentDay * 86400) - (i * 86400)) * 1000).toDateString(), value: total })
  }
  return data.reverse()
}
export const averagePriceMockData = generateAveragePriceMockData(31536000)
export const averagePriceMockData2 = averagePriceMockData.map(item => ({ ...item, value: item.value * (Math.random() + .2) }))

export const volatilityMockData = generateAveragePriceMockData(31536000)
export const volatilityMockData2 = volatilityMockData.map(item => ({ ...item, value: item.value * (Math.random() + .2) }))

export const volumeMockData = generateVolumeMockData(31536000)
export const volumeMockData2 = volumeMockData.map(item => ({ ...item, value: item.value * .83 }))

export const uniqueBuyersMockData = generateVolumeMockData(31536000)
export const uniqueBuyersMockData2 = uniqueBuyersMockData.map(item => ({ ...item, value: item.value * .75 }))
