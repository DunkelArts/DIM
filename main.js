const { BrowserWindow, app, Menu } = require('electron')

function createwindow() {

const win = new BrowserWindow({
    title: "Destiny Inventory Manager"
})

win.loadURL('https://app.destinyitemmanager.com/')

win.maximize()

var menu = Menu.buildFromTemplate([
    {
      label: 'Datei',
      submenu: [
        {
          label:'Beenden',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        }
      ],
    },
    {
      label: 'Anzeige',
      submenu: [
        {
          label:'Reload',
          accelerator: 'F5',
          click() {
            win.reload()
          }
        },
        {
          label:'Force Reload',
          accelerator: 'CmdOrCtrl+F5',
          click() {
            win.webContents.reloadIgnoringCache()
          }
        },
        {
            label:'Entwicklerkonsole anzeigen',
            accelerator: 'F12',
            click() {
              win.webContents.openDevTools()
            }
        }, 
      ],
    }
  ])
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createwindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
})