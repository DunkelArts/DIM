const { BrowserWindow, app, Menu } = require('electron')

function createwindow() {

const win = new BrowserWindow({
    title: "Destiny Inventory Manager"
})

win.loadURL('https://app.destinyitemmanager.com/')

win.maximize()

var menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label:'Exit',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        }
      ],
    },
    {
      label: 'Update Contents',
      submenu: [
        {
          label:'Reload Page',
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
            label:'Developer Console',
            accelerator: 'F12',
            click() {
              win.webContents.openDevTools()
            }
        }, 
      ],
    },
    {
      label: 'Fireteam',
      submenu: [
        {
          label:'Search Fireteam',
          click() {
            win.loadURL('https://www.bungie.net/en/ClanV2/FireteamSearch/')
          }
        }
      ],
    },
    {
    label: 'Item Manager',
    submenu: [
      {
        label:'Open DIM',
        click() {
          win.loadURL('https://app.destinyitemmanager.com/')
        }
      }
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