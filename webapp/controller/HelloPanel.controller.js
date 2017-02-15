sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("wt05Controllers.controller.HelloPanel", {
        //wt15 nested view, the controller for hello panel is new created and onShowHello event is moved here
        onShowHello: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //The getProperty method can be called in any model and takes the data path as an argument.
            var sRecipient0 = this.getView().getModel("recip").getProperty("/recipient/name");
            var sRecipient1 = "Two";
            var sRecipient2 = "Three";
            //the resource bundle has a specific getText method that takes an array of strings as second argument.
            var sMsg = oBundle.getText("helloMsg", [sRecipient0, sRecipient1, sRecipient2]);
            MessageToast.show(sMsg);

        },
        /*wt19 - not necessary anymore, as reusable dialog is used
        // wt16 dialog with fragment
        onOpenDialog: function() {
            var oView = this.getView();
            var oDialog = oView.byId("helloDialog");
            //create dialog lazily
            if (!oDialog) {
                //create dialog via fragment factory
                //here ID of the fragment "helloDialog" = oView.getId() .
                // oDialog = sap.ui.xmlfragment("helloDialog", "wt05Controllers.view.HelloDialog", this);
                // oDialog = sap.ui.xmlfragment("wt05Controllers.view.HelloDialog", this);
                oDialog = sap.ui.xmlfragment(oView.getId(), "wt05Controllers.view.HelloDialog", this);
                oView.addDependent(oDialog);
            }

            oDialog.open();

        },

        //wt17 fragment callbacks
        onCloseDialog: function() {
            // this.getView().byId("helloDialog").close();
            var oView1 = this.getView();
            oView1.byId("helloDialog").close();
        }
        */
        //wt19
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        }

        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf namespaceXXX.view.viewXXX
         */
        // onInit: function() {

        // },

        /**
         * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
         * (NOT before the first rendering! onInit() is used for that one!).
         * @memberOf namespaceXXX.view.viewXXX
         */
        //	onBeforeRendering: function() {
        //
        //	},

        /**
         * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
         * This hook is the same one that SAPUI5 controls get after being rendered.
         * @memberOf namespaceXXX.view.viewXXX
         */
        //	onAfterRendering: function() {
        //
        //	},

        /**
         * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
         * @memberOf namespaceXXX.view.viewXXX
         */
        //	onExit: function() {
        //
        //	}

    });

});
