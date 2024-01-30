/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"byemtaui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
