module.exports = {
  db: {
    connectionLimit: 10,
    host     : '',
    user     : '9thnathan',
    password : 'CHuipoyau1114',
    database : 'medium',
    charset: 'utf8mb4'
  },
  batchLimit: 5,
  randomDelay: function() {
    return Math.floor(Math.random() * 200) + 100
  },
  errorRateTolerance: 0.2,
  delayWhenError: 500
}
