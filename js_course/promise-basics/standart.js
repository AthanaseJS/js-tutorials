console.log('Request data...')

setTimeout(() => {
  console.log('pereparing data ...')
  let num =1;
  const backEndData = {
    server: 'aws',
    port: 20000,
    status: 'working',
  }

  setTimeout(() => {
    backEndData.modified = true
    console.log('Data resive', bcakEndData)
  }, 2000)
}, 2000)
