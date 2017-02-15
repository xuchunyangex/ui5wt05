sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // //wt06: Below here, add js files for new modules
    // "sap/m/MessageToast",
    // //wt07: JSONModel
    // "sap/ui/model/json/JSONModel",
    // //wt08: Translate texts
    // "sap/ui/model/resource/ResourceModel"

    // wt06: Above here, add control names, they can be used in code directly below
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("wt05Controllers.controller.App", {
        //wt19 reusable dialog
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });

});
