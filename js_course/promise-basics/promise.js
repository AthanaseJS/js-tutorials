const p = Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Prepering data...')
    const bacjEndData = {
      server: 'aws',
      port: '2000',
      status: 'working',
    }
    resolve()
  }, 2000)
})

p.then(() => {
  console.log('Promis Resolved')
})
