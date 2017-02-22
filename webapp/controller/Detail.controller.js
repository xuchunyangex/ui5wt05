sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function(Controller) {
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
    	}
    });

});