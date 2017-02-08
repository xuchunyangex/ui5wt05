sap.ui.define([
    "sap/ui/core/mvc/Controller",
    //wt06: Below here, add js files for new modules
    "sap/m/MessageToast",
    //wt07: JSONModel
    "sap/ui/model/json/JSONModel",
    //wt08: Translate texts
    "sap/ui/model/resource/ResourceModel"

    // wt06: Above here, add control names, they can be used in code directly below
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("wt05Controllers.controller.View1", {
        //onInit is cimilar to a constructor function of a control
        onInit: function() {
            // wt07, jsonmodel, set data model on view
            // set during onInit
            var oData = {
                recipient: {
                    name: "Hello World One"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "recip");
            //wt08, set i18n model on view, 
            //ResourceModel => i18n fiel
            var i18nModel = new ResourceModel({
                //bundle name is the i18n file, with name space and path
                bundleName: "wt05Controllers.i18n.i18n"
            });
            //setModel(oModel, sName?)Sets or unsets a model for the given model name for this ManagedObject.
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello: function() {
            /* wt05 - Controllers
            //show a native JS alert
            alert("Hello world!");
            */

            /*wt06, after add MessageToast in 1.define 2.function;
            now it could be used below
            MessageToast.show("Hello World");
            */

            //wt08, read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //The getProperty method can be called in any model and takes the data path as an argument.
            var sRecipient0 = this.getView().getModel("recip").getProperty("/recipient/name");
            var sRecipient1 = "Two";
            var sRecipient2 = "Three";
            //the resource bundle has a specific getText method that takes an array of strings as second argument.
            var sMsg = oBundle.getText("helloMsg", [sRecipient0, sRecipient1, sRecipient2]);
            MessageToast.show(sMsg);

        }
    });

});
