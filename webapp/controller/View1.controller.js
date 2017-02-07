sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("wt05Controllers.controller.View1", {
		onShowHello : function () {
			//show a native JS alert
			alert("Hello world!");
		}
	});

});