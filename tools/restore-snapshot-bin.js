const path = require('path')
const fs = require('fs')

const baseDirPath = path.resolve(__dirname, '..')
const pathToBlob = path.join(baseDirPath, 'electron_v8_context_snapshot.bin')

switch (process.platform) {
  case 'darwin': {
    const pathToElectron = path.resolve(
      __dirname,
      '..',
      'node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Resources'
    )
    console.log('Restoring snapshot to: ', pathToElectron)
    fs.copyFileSync(
      pathToBlob,
      path.join(pathToElectron, 'v8_context_snapshot.bin')
    )
    break
  }
  case 'win32':
  case 'linux': {
    const pathToElectron = path.resolve(
      __dirname,
      '..',
      'node_modules',
      'electron',
      'dist'
    )
    console.log('Restoring snapshot to: ', pathToElectron)
    fs.copyFileSync(
      pathToBlob,
      path.join(pathToElectron, 'v8_context_snapshot.bin')
    )
    break
  }
}
