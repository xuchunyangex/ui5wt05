// wt34 custom control
// A custom control is a JavaScript object that has two special sections (metadata and renderer) 
//and a number of methods that implement the functionality of the control.
sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/RatingIndicator",
    "sap/m/Label",
    "sap/m/Button"
], function(Control, RatingIndicator, Label, Button) {
    "use strict";
    return Control.extend("wt05Controllers.control.ProductRating", {
        metadata: {
            //The metadata section defines the data structure and thus the API of the control.
            properties: {
                value: { type: "float", defaultValue: 0 }
            },
            aggregations: {
                _rating: { type: "sap.m.RatingIndicator", multiple: false, visibility: "hidden" },
                _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                _button: { type: "sap.m.Button", multiple: false, visibility: "hidden" }
            },
            events: {
                change: { parameters: { value: { type: "int" } } }
            }
        },

        init: function() {
            // 
            this.setAggregation("_rating", new RatingIndicator({
                value: this.getValue(),
                iconSize: "2rem",
                visualMode: "Half",
                liveChange: this._onRate.bind(this)
            }));
            //
            this.setAggregation("_label", new Label({
                text: "{i18n>productRatingLabelInitial}"
            }).addStyleClass("sapUiTinyMargin"));
            //
            this.setAggregation("_button", new Button({
                text: "{i18n>productRatingButton}",
                press: this._onSubmit.bind(this)
            }));
        },

        // a method to overwrite setValue of standard control ratingIndicator
        setValue: function(iValue) {
            // pass iValue to built-in control ratingIndicator
            this.setProperty("value", iValue, true);
            this.getAggregation("_rating").setValue(iValue);
        },


        _onRate: function(oEvent) {
            // instantiate resource bundle for i18n
            // return: jQuery.sap.util.ResourceBundle (has method getText / hasText)
            var oResourceBundle = this.getModel("i18n").getResourceBundle();
            // get value of rating
            var fValue = oEvent.getParameter("value");
            // set value when rating indicator is clicked
            this.setValue(fValue);

            //should lable according to rating indicator value
            this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
            this.getAggregation("_label").setDesign("Bold");
        },

        _onSubmit: function(oEvent) {
            var oResourceBundle = this.getModel("i18n").getResourceBundle();

            this.getAggregation("_rating").setEnabled(false);
            this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
            this.getAggregation("_button").setEnabled(false);
            this.fireEvent("change", {
                value: this.getValue()
            });
        },

        renderer: function(oRM, oControl) {
            oRM.write("<div");
            oRM.writeControlData(oControl);
            oRM.addClass("myAppDemoWTProductRating");
            oRM.writeClasses();
            oRM.write(">");
            oRM.renderControl(oControl.getAggregation("_rating"));
            oRM.renderControl(oControl.getAggregation("_label"));
            oRM.renderControl(oControl.getAggregation("_button"));
            oRM.write("</div>");
        }

    });
});
