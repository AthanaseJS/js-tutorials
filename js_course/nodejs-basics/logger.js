//;(function (exports, require, __filename, __dirname) {
console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

function log(message) {
  // Sent http request

  console.log(message);
}

// export (add) log function to module structure
const _log = log;
export { _log as log };

// export (add) url variable to module structure
const _url = url;
export { _url as url };

export const endPoint = url;
//})
