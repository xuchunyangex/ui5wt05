//wt09 Component configuration
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "wt05Controllers/model/models",
    //wt09 component configuration, and add these two to function arguments
    "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel"
    // ], function(UIComponent, Device, models, JSONModel, ResourceModel) {
], function(UIComponent, Device, models, JSONModel) {
    "use strict";

    return UIComponent.extend("wt05Controllers.Component", {
        //wt09 Component metadata: here it define a reference to the root view 
        metadata: {
            //wt10 descriptor
            manifest : "json"
                // //wt09 component configuration
                // rootView: "wt05Controllers.view.App"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            //wt09 component configuration - set the data model>>>>>>>>>>>>>>>
            var oData = {
                recipient: {
                    name: "World_wt09 One"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel, "recip");

            // wt10 no need to instantiate resource bundle i18n as it is done in manifest.json
            // // wt09 set i18n model
            // var i18nModel = new ResourceModel({
            //     bundleName: "wt05Controllers.i18n.i18n"
            // });
            // this.setModel(i18nModel, "i18n");

        }
    });
});
