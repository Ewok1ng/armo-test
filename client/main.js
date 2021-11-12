const { app, BrowserWindow } = require('electron');

let dataWindow = null;

function createDataWindow() {
	dataWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	dataWindow.loadFile('index.html');

	dataWindow.on('closed', () => {
		dataWindow = null;
	});
}

app.on('ready', createDataWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
