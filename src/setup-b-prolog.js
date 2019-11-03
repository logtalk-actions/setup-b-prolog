const core = require('@actions/core')
const {installBProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  console.log(`##[group]Installing B-Prolog 8.1`)
  await installBProlog()
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-b-prolog does not support Windows at this time'
    )
}
