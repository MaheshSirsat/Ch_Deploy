sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("myApp.controller.App", {
      onInit: function () {
          var oData = {
              items: [
                  { name: "Item 1", description: "Description 1" },
                  { name: "Item 2", description: "Description 2" }
              ]
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
      }
  });
});
