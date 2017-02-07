sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	// wt06: Above here, add js files for new modules
], function(Controller, MessageToast) {
	// wt06: Above here, add control names, they can be used in code directly below
	"use strict";

	return Controller.extend("wt05Controllers.controller.View1", {
		onShowHello : function () {
			/* wt05 - Controllers
			//show a native JS alert
			alert("Hello world!");
			*/
			
			/*wt06, after add MessageToast in 1.define 2.function;
			now it could be used below*/
			MessageToast.show("Hello world");
		}
	});

});