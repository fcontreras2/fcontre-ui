module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  })

  return config
}