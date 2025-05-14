"use strict";
Liferay.Loader.define("Reserva@1.0.0/utils/api", ['module', 'exports', 'require', 'Reserva$axios'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    var _axios = _interopRequireDefault(require("Reserva$axios"));Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = void 0;function _interopRequireDefault(a) {
      return a && a.__esModule ? a : { default: a };
    }var api = _axios["default"].create({ baseURL: "/o/c/noticias", timeout: 6e4, params: { p_auth: Liferay.authToken } }),
        _default = exports["default"] = api;
    //# sourceMappingURL=api.js.map
  }
});
//# sourceMappingURL=api.js.map