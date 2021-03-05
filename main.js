const { BrowserWindow, app, ipcMain } = require('electron');
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  // event.reply('asynchronous-reply', 'pong')
})
// const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js'
    }
  })
// preload: path.join(__dirname, 'preload.ts'),
  win.loadURL("http://localhost:3000")
  // win.loadFile('build/index.html')
}



app.whenReady().then(createWindow)