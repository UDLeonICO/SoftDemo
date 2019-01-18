/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

// instanciando los objectos app , BrowserWindow
const {app, BrowserWindow } = require('electron');


console.dir(app);

app.on('before-quit', () => {
	console.log("saliedo...");
});



app.on('ready', () =>{
	let ventana = new BrowserWindow({
		width:1350,
		height: 700,
		title: 'Ednux App',
		center: true,
                maximizable: false,
                 hasShadow:true          

   
	});
        
        ventana.on('closed',() =>{
		ventana = null;
		app.quit();
	});

	ventana.loadURL(`file://${__dirname}/App/Editor.html`);
        });
