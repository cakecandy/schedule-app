// A BrowserWindow's preload script runs in a context that has access to both the HTML DOM 
// and a limited subset of Node.js and Electron APIs
/*
 * The contextBridge allows us to inject/add a key (in our case, "api") on the window, 
 * with an object where we can define any number of properties that are available within the renderer process.
*/
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    addRow: (callback) => ipcRenderer.on('addRow', callback),
    save: (callback) => ipcRenderer.on('save', callback),
    saveToFile: (records) => ipcRenderer.send('saveToFile', records)
})
