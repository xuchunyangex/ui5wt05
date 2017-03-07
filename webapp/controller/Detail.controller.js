sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, History, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("wt05Controllers.controller.Detail", {
    	onInit: function () {
    		// body...
            var oViewModel = new JSONModel({
                        currency : "EUR"
                    });
            this.getView().setModel(oViewModel, "view"); 

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

    	},

        //oEvent is the event "change" submitted by _onSubmit in control JS
        onRatingChange : function (oEvent) {
            // body...
            var fValue = oEvent.getParameter("value");
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
        }

    });

});