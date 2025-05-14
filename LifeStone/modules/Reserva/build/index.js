"use strict";
Liferay.Loader.define("Reserva@1.0.0/index", ['module', 'exports', 'require', 'liferay!frontend-js-react-web$react', 'liferay!frontend-js-react-web$react-dom', './AppComponent'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = main;var _react = _interopRequireDefault(require("liferay!frontend-js-react-web$react")),
        _reactDom = _interopRequireDefault(require("liferay!frontend-js-react-web$react-dom")),
        _AppComponent = _interopRequireDefault(require("./AppComponent"));function _interopRequireDefault(a) {
      return a && a.__esModule ? a : { default: a };
    } /**
      * This is the main entry point of the portlet.
      *
      * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
      * information on the signature of this function.
      *
      * @param  {Object} params a hash with values of interest to the portlet
      * @return {void}
      */function main(a) {
      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_AppComponent["default"], { portletNamespace: a.portletNamespace, contextPath: a.contextPath, portletElementId: a.portletElementId, configuration: a.configuration }), document.getElementById(a.portletElementId));
    }
    //# sourceMappingURL=index.js.map
  }
});
//# sourceMappingURL=index.js.map