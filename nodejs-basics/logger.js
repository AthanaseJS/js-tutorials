//;(function (exports, require, __filename, __dirname) {
console.log(__filename)
console.log(__dirname)

var url = 'http://mylogger.io/log'

function log(message) {
  // Sent http request

  console.log(message)
}

// export (add) log function to module structure
module.exports.log = log

// export (add) url vareable to module structure
module.exports.url = url

// export (add) url varrablesa and named is endPoint
module.exports.endPoint = url
//})
