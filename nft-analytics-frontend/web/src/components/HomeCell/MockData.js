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
export const averagePriceMockData3 = averagePriceMockData.map(item => ({ ...item, value: item.value * (Math.random() + .3) }))
export const averagePriceMockData4 = averagePriceMockData.map(item => ({ ...item, value: item.value * (Math.random() + .4) }))
export const averagePriceMockData5 = averagePriceMockData.map(item => ({ ...item, value: item.value * (Math.random() + .5) }))
export const averagePriceMockData6 = averagePriceMockData.map(item => ({ ...item, value: item.value * (Math.random() + .6) }))
export const averagePriceMockData7 = averagePriceMockData.map(item => ({ ...item, value: item.value * (Math.random() + .7) }))

export const volatilityMockData = generateAveragePriceMockData(31536000)
export const volatilityMockData2 = volatilityMockData.map(item => ({ ...item, value: item.value * (Math.random() + .2) }))
export const volatilityMockData3 = volatilityMockData.map(item => ({ ...item, value: item.value * (Math.random() + .21) }))
export const volatilityMockData4 = volatilityMockData.map(item => ({ ...item, value: item.value * (Math.random() + .22) }))
export const volatilityMockData5 = volatilityMockData.map(item => ({ ...item, value: item.value * (Math.random() + .23) }))
export const volatilityMockData6 = volatilityMockData.map(item => ({ ...item, value: item.value * (Math.random() + .24) }))
export const volatilityMockData7 = volatilityMockData.map(item => ({ ...item, value: item.value * (Math.random() + .25) }))

export const volumeMockData = generateVolumeMockData(31536000)
export const volumeMockData2 = volumeMockData.map(item => ({ ...item, value: item.value * .83 }))
export const volumeMockData3 = volumeMockData.map(item => ({ ...item, value: item.value * .65 }))
export const volumeMockData4 = volumeMockData.map(item => ({ ...item, value: item.value * 1.27 }))
export const volumeMockData5 = volumeMockData.map(item => ({ ...item, value: item.value * .91 }))
export const volumeMockData6 = volumeMockData.map(item => ({ ...item, value: item.value * 1.4 }))
export const volumeMockData7 = volumeMockData.map(item => ({ ...item, value: item.value * .53 }))

export const uniqueBuyersMockData = generateVolumeMockData(31536000)
export const uniqueBuyersMockData2 = uniqueBuyersMockData.map(item => ({ ...item, value: item.value * 1.1 }))
export const uniqueBuyersMockData3 = uniqueBuyersMockData.map(item => ({ ...item, value: item.value * 2 }))
export const uniqueBuyersMockData4 = uniqueBuyersMockData.map(item => ({ ...item, value: item.value * .75 }))
export const uniqueBuyersMockData5 = uniqueBuyersMockData.map(item => ({ ...item, value: item.value * 1.2 }))
export const uniqueBuyersMockData6 = uniqueBuyersMockData.map(item => ({ ...item, value: item.value * .75 }))
export const uniqueBuyersMockData7 = uniqueBuyersMockData.map(item => ({ ...item, value: item.value * .6 }))
