module.exports = {
  module: {
    rules: [
      {
        test: /\.mkd$/,
        use: 'raw-loader'
      }
    ]
  }
}
