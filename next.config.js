module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: require.resolve('snapsvg'),
      use: [
        {
          loader: 'imports-loader',
          options: {
            this: '>window',
            fix: '>module.exports=0'
          }
        }
      ]

    })
    return config
  }
}
