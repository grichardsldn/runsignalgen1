angular.module('templates-app', ['about/about.tpl.html', 'binary/binary.tpl.html', 'rs232/rs232.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    Signalgen 1 \n" +
    "    <small>Binary frame synthesizer</small>\n" +
    "  </h1>\n" +
    "</div>\n" +
    "");
}]);

angular.module("binary/binary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("binary/binary.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-8\">\n" +
    "    <div class=\"panel panel-primary\"> \n" +
    "      <div class=\"panel-body\">\n" +
    "        <h4>\n" +
    "          Retro Binary Frame Generator\n" +
    "        </h4>\n" +
    "        <hr/>\n" +
    "        <div class=\"row\">\n" +
    "          <!-- TEXT -->\n" +
    "          <textarea \n" +
    "            rows='3'\n" +
    "            style=\"resize: none;\" \n" +
    "            class=\"col-xs-10\" \n" +
    "            ng-change=\"change()\" \n" +
    "            ng-model=\"param_text\">\n" +
    "          </textarea>   \n" +
    "        </div>\n" +
    "        <br/>\n" +
    "        <div class=\"row\">\n" +
    "          <!-- REPEAT COUNT -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Char repeat: <input ng-change=\"change()\" \n" +
    "              ng-model=\"param_repeat_count\" size=\"3\"> </p>\n" +
    "          </span> \n" +
    "          <!-- ENCRYPTION -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <input type=\"checkbox\" ng-change=\"change()\" \n" +
    "              ng-model=\"param_encryption\"\n" +
    "              ng-true-value=\"1\" ng-false-value=\"0\">\n" +
    "              Encrypt\n" +
    "          </span>\n" +
    "          <!-- CHECKSUM -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <input type=\"checkbox\" ng-change=\"change()\" \n" +
    "              ng-model=\"param_checksum\"\n" +
    "              ng-true-value=\"1\" ng-false-value=\"0\">\n" +
    "              Checksum \n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <!-- BIG_ENDIAN -->\n" +
    "            <p>Endianism:</p>\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-default\" \n" +
    "                ng-change=\"change()\" ng-model=\"param_big_endian\" \n" +
    "                btn-radio=\"'1'\">Big</label>\n" +
    "              <label class=\"btn btn-default\" \n" +
    "                ng-change=\"change()\" ng-model=\"param_big_endian\" \n" +
    "                btn-radio=\"'0'\">Little</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <!-- 7/8 BIT -->\n" +
    "            <p>Data:</p>\n" +
    "              <div class=\"btn-group\">\n" +
    "                <label class=\"btn btn-default\" \n" +
    "                  ng-change=\"change()\" ng-model=\"param_sevenbit\" \n" +
    "                  btn-radio=\"'1'\">7-bit</label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_sevenbit\" \n" +
    "                  ng-change=\"change()\" btn-radio=\"'0'\">8-bit</label>\n" +
    "              </div>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <!-- PARITY -->\n" +
    "            <p>Parity:</p>\n" +
    "              <div class=\"btn-group\">\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_parity\" \n" +
    "                  btn-radio=\"'0'\" ng-change=\"change()\">None</label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_parity\" \n" +
    "                  btn-radio=\"'1'\" ng-change=\"change()\">Odd</label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_parity\" \n" +
    "                  btn-radio=\"'2'\" ng-change=\"change()\">Even</label>\n" +
    "              </div>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"row\">\n" +
    "          <!-- MTU -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>MTU: <input ng-model=\"param_mtu\" ng-change=\"change()\" \n" +
    "              size=\"5\"> </p>\n" +
    "          </span> \n" +
    "\n" +
    "          <!-- START BITS -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Start bits:</p>\n" +
    "            <div class=\"btn-group\">\n" +
    "               <label class=\"btn btn-default\" ng-model=\"param_start_bits\" \n" +
    "                  btn-radio=\"'0'\" ng-change=\"change()\">None</label>\n" +
    "               <label class=\"btn btn-default\" ng-model=\"param_start_bits\" \n" +
    "                 btn-radio=\"'1'\" ng-change=\"change()\">1</label>\n" +
    "               <label class=\"btn btn-default\" ng-model=\"param_start_bits\" \n" +
    "                  btn-radio=\"'2'\" ng-change=\"change()\">2</label>\n" +
    "            </div>\n" +
    "          </span>\n" +
    "\n" +
    "          <!-- STOP BITS -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Stop bits:</p>\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-default\" ng-model=\"param_stop_bits\" \n" +
    "                btn-radio=\"'0'\" ng-change=\"change()\">None</label>\n" +
    "              <label class=\"btn btn-default\" ng-model=\"param_stop_bits\" \n" +
    "                btn-radio=\"'1'\" ng-change=\"change()\">1</label>\n" +
    "            </div>\n" +
    "          <span>\n" +
    "        </div>\n" +
    "        <br/>\n" +
    "        <div class=\"row\">\n" +
    "          <!-- PERIOD --> \n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <p>Period: <input ng-model=\"param_period\" \n" +
    "              ng-change=\"change()\" size=\"5\"> </p>\n" +
    "          </div>\n" +
    "\n" +
    "          <!-- ENCODING -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Encoding:</p>\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-default\" ng-model=\"param_encoding\" \n" +
    "                  btn-radio=\"'NRZ'\" ng-change=\"change()\">NRZ</label>\n" +
    "              <label class=\"btn btn-default\" ng-model=\"param_encoding\" \n" +
    "                  btn-radio=\"'RZ'\" ng-change=\"change()\">RZ</label>\n" +
    "            </div>\n" +
    "          </span>\n" +
    "          <!-- FRAME GAP --> \n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Frame gap: <input ng-model=\"param_frame_gap\"\n" +
    "              ng-change=\"change()\"size=\"5\">ms</p>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <canvas id=\"scopecanvas\" class=\"col-xs-12\" height=\"75\"></canvas>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <h4>Audio</h4>\n" +
    "        <p class=\"text-default\">\n" +
    "          status={{ message }}\n" +
    "        </p>\n" +
    "        <i class=\"fa fa-play btn\" ng-click=\"startPow()\" ng-class=\"play_class\"></i>\n" +
    "        <i class=\"fa fa-stop btn\" ng-click=\"stopPow()\" ng-class=\"stop_class\"></i>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("rs232/rs232.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rs232/rs232.tpl.html",
    "<div class=\"row\">\n" +
    " <div class=\"col-sm-8\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <h4>\n" +
    "          RS-232 Frame Generator\n" +
    "        </h4>\n" +
    "        <div class=\"row\">\n" +
    "          <!-- TEXT -->\n" +
    "          <textarea \n" +
    "            rows='3'\n" +
    "            style=\"resize: none;\" \n" +
    "            class=\"col-xs-12\" \n" +
    "            ng-model=\"param_text\">\n" +
    "          </textarea>   \n" +
    "        </div>\n" +
    "        <br/>\n" +
    "        <div class=\"row\">\n" +
    "          <!-- REPEAT COUNT -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Char repeat: <input ng-model=\"param_repeat_count\" size=\"3\"> </p>\n" +
    "          </span> \n" +
    "          <!-- ENCRYPTION -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <input type=\"checkbox\" ng-model=\"param_encryption\"\n" +
    "              ng-true-value=\"1\" ng-false-value=\"0\">\n" +
    "              Encrypt\n" +
    "          </span>\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <!-- 7/8 BIT -->\n" +
    "            <p>Data:</p>\n" +
    "              <div class=\"btn-group\">\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_sevenbit\" \n" +
    "                  btn-radio=\"'1'\">7-bit</label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_sevenbit\" \n" +
    "                  btn-radio=\"'0'\">8-bit</label>\n" +
    "              </div>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <!-- PARITY -->\n" +
    "            <p>Parity:</p>\n" +
    "              <div class=\"btn-group\">\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_parity\" \n" +
    "                  btn-radio=\"'0'\">None</label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_parity\" \n" +
    "                  btn-radio=\"'1'\">Odd</label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"param_parity\" \n" +
    "                  btn-radio=\"'2'\">Even</label>\n" +
    "              </div>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <!-- START BITS -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Start bits:</p>\n" +
    "            <div class=\"btn-group\">\n" +
    "               <label class=\"btn btn-default\" ng-model=\"param_start_bits\" \n" +
    "                  btn-radio=\"'0'\">None</label>\n" +
    "               <label class=\"btn btn-default\" ng-model=\"param_start_bits\" \n" +
    "                 btn-radio=\"'1'\">1</label>\n" +
    "               <label class=\"btn btn-default\" ng-model=\"param_start_bits\" \n" +
    "                  btn-radio=\"'2'\">2</label>\n" +
    "            </div>\n" +
    "          </span>\n" +
    "\n" +
    "          <!-- STOP BITS -->\n" +
    "          <span class=\"col-xs-4\">\n" +
    "            <p>Stop bits:</p>\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-default\" ng-model=\"param_stop_bits\" \n" +
    "                btn-radio=\"'0'\">None</label>\n" +
    "              <label class=\"btn btn-default\" ng-model=\"param_stop_bits\" \n" +
    "                btn-radio=\"'1'\">1</label>\n" +
    "            </div>\n" +
    "          <span>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <!-- PERIOD --> \n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <p>Period: <input ng-model=\"param_period\" size=\"5\"> </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <h4>Audio</h4>\n" +
    "        <p class=\"text-default\">\n" +
    "          status={{ message }}\n" +
    "        </p>\n" +
    "        <i class=\"fa fa-play btn\" ng-click=\"startPow()\" ng-class=\"play_class\"></i>\n" +
    "        <i class=\"fa fa-stop btn\" ng-click=\"stopPow()\" ng-class=\"stop_class\"></i>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
