sap.ui.define([
	"sap/ui/base/Object"
	], function(UI5object) {
    "use strict";
    //wt19 Reuse Dialog
    return UI5object.extend("wt05Controllers.controller.HelloDialog", {
        constructor: function(oView) {
            this._oView = oView;
        },

        open: function() {
            var oView = this._oView;
            var oDialog = oView.byId("helloDialog");

            //create dialog lazily
            if (!oDialog) {
            	var oFragmentController = {
            		onCloseDialog : function () {
            			oDialog.close();
            		}
            	};
            	//create dialog via fragment factory
            	//Note that now we do not pass a controller as third parameter but a local helper object oFragmentController 
            	//which includes the needed event handler function onCloseFialog for the fragment
            	oDialog = sap.ui.xmlfragment(oView.getId(), "wt05Controllers.view.HelloDialog", oFragmentController);
            	oView.addDependent(oDialog);
            }
            oDialog.open();
        },
    });

});
