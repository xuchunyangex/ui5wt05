sap.ui.define([
	"sap/ui/core/mvc/Controller",
	// wt06: Below here, add js files for new modules
	"sap/m/MessageToast",
	// wt07: JSONModel
	"sap/ui/model/json/JSONModel"
	
// wt06: Above here, add control names, they can be used in code directly below
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("wt05Controllers.controller.View1", {
		onInit : function () {
		
		},
		onShowHello : function () {
			/* wt05 - Controllers
			//show a native JS alert
			alert("Hello world!");
			*/
			
			/*wt06, after add MessageToast in 1.define 2.function;
			now it could be used below
			MessageToast.show("Hello world");
			*/
			
			// wt07, JSONmodel
			
		}
	});

});