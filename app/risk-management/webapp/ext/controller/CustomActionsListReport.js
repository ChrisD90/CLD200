sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        copyItem: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
