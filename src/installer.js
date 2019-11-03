const core = require('@actions/core')
const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installBProlog}

/**
 * Install B-Prolog.
 */
async function installBProlog() {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-b-prolog-darwin'), [])
    core.exportVariable('BPDIR', '/Users/runner/BProlog');
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-b-prolog-ubuntu'), [])
    core.exportVariable('BPDIR', '/home/runner/BProlog');
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-b-prolog-windows'), [])
    core.exportVariable('BPDIR', '$HOME/BProlog');
  }
}
