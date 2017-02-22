sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("wt05Controllers.controller.InvoiceList", {
		//wt23, custom formatter, define a function property, no arguments 
		formatter1: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf namespaceXXX.view.viewXXX
		 */
		onInit: function() {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});

			this.getView().setModel(oViewModel, "view");
		},
		//wt24 filtering
		onFilterInvoice: function(oEvent) {
			//1.build filter array
			var aFilter = [];
			//2.sQuery is the string user inputs in the searchField
			var sQuery = oEvent.getParameter("query");
			//3.build sQuery filter operator - e.g. contains
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			//filter binding
			//4.get the invoiceList control
			var oList = this.getView().byId("invoiceList");
			//5.get binding of items in the list
			var oBinding = oList.getBinding("items");
			//6.call filter
			oBinding.filter(aFilter);
		},

		onPress: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");
		}

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