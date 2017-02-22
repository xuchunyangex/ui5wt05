/*global QUnit*/
/*global opaTest*/

sap.ui.define([
	"sap/ui/test/opaQunit"
], function(opaTest) {
	"use strict";

	QUnit.module("Navigation");

	opaTest("Should open the hello dialog", function(Given, When, Then) {
		// Arrangements
		Given.iStartMyAppInAFrame(jQuery.sap.getResourcePath("wt05Controllers/test", ".html"));
		
		// Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();
		
		// Assertations
		Then.onTheAppPage.iShouldSeeTheHelloDialog().and.iTeardownMyAppFrame();
	});

});