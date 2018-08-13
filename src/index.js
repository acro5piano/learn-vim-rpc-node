module.exports = plugin => {
  plugin.setOptions({
    dev: true,
  })

  plugin.registerCommand('HelloNode', async () => {
    console.log('Hello Node')
  })
}
