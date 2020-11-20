const path = require('path')

module.exports = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "@storybook/preset-scss"
  ],
  webpackFinal : config => {
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
