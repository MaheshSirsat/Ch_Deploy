//@ui5-bundle myApp/Component-preload.js
sap.ui.require.preload({
	"myApp/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(e){"use strict";return e.extend("myApp.Component",{metadata:{manifest:"json"}})});
},
	"myApp/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,i){"use strict";return e.extend("myApp.controller.App",{onInit:function(){var e={items:[{name:"Item 1",description:"Description 1"},{name:"Item 2",description:"Description 2"}]};var n=new i(e);this.getView().setModel(n)}})});
},
	"myApp/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("myapp.controller.View1",{onInit:function(){}})});
},
	"myApp/i18n/i18n.properties":'# This is the resource bundle for myapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\r\n#XTIT: Main view title\ntitle=App Title',
	"myApp/manifest.json":'{"sap.app":{"id":"myApp","type":"application","title":"My Fiori App"},"sap.ui5":{"dependencies":{"libs":{"sap.m":{}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"App"}],"targets":{"App":{"viewName":"App","viewLevel":1}}}}}',
	"myApp/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"myApp/view/App.view.xml":'<mvc:View\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"\n    controllerName="myApp.controller.App"><App><pages><Page title="My Fiori App"><content><List items="{/items}"><StandardListItem title="{name}" description="{description}"/></List></content></Page></pages></App></mvc:View>\n',
	"myApp/view/View1.view.xml":'<mvc:View controllerName="myapp.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
