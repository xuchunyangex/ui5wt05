sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(Controller, History) {
    "use strict";

    return Controller.extend("wt05Controllers.controller.Detail", {
    	onInit: function () {
    		// body...
    		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    		oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
    	},

    	_onObjectMatched : function (oEvent) {
    		// body...
    		this.getView().bindElement({
    			path: "/" + oEvent.getParameter("arguments").invoicePath, 
    			model: "invoice"
    		});
    	},

    	onNavBack: function () {
    		// wt33 routing back and history
    		var oHistory = History.getInstance();
    		var sPreviousHash = oHistory.getPreviousHash();

    		if (sPreviousHash !== undefined) {
    			window.history.go(-1);
    		} else {
    			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    			oRouter.navTo("overview", {}, true);
    		}

    	}
    });

});