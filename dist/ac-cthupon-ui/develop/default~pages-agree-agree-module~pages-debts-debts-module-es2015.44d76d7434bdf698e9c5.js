(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-agree-agree-module~pages-debts-debts-module"],{

/***/ "./node_modules/ng2-currency-mask/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ng2-currency-mask/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/currency-mask.directive */ "./node_modules/ng2-currency-mask/src/currency-mask.directive.js"));
__export(__webpack_require__(/*! ./src/currency-mask.module */ "./node_modules/ng2-currency-mask/src/currency-mask.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.config.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-currency-mask/src/currency-mask.config.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.directive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng2-currency-mask/src/currency-mask.directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var currency_mask_config_1 = __webpack_require__(/*! ./currency-mask.config */ "./node_modules/ng2-currency-mask/src/currency-mask.config.js");
var input_handler_1 = __webpack_require__(/*! ./input.handler */ "./node_modules/ng2-currency-mask/src/input.handler.js");
exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CurrencyMaskDirective; }),
    multi: true
};
var CurrencyMaskDirective = (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ","
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create();
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new input_handler_1.InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleClick = function (event) {
        this.inputHandler.handleClick(event, this.isChromeAndroid());
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            this.inputHandler.handleInput(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeyup = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeyup(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.validate = function (abstractControl) {
        var result = {};
        if (abstractControl.value > this.max) {
            result.max = true;
        }
        if (abstractControl.value < this.min) {
            result.min = true;
        }
        return result != {} ? result : null;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    return CurrencyMaskDirective;
}());
CurrencyMaskDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[currencyMask]",
                providers: [
                    exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR,
                    { provide: forms_1.NG_VALIDATORS, useExisting: CurrencyMaskDirective, multi: true }
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [currency_mask_config_1.CURRENCY_MASK_CONFIG,] },] },
    { type: core_1.ElementRef, },
    { type: core_1.KeyValueDiffers, },
]; };
CurrencyMaskDirective.propDecorators = {
    'max': [{ type: core_1.Input },],
    'min': [{ type: core_1.Input },],
    'options': [{ type: core_1.Input },],
    'handleBlur': [{ type: core_1.HostListener, args: ["blur", ["$event"],] },],
    'handleClick': [{ type: core_1.HostListener, args: ["click", ["$event"],] },],
    'handleCut': [{ type: core_1.HostListener, args: ["cut", ["$event"],] },],
    'handleInput': [{ type: core_1.HostListener, args: ["input", ["$event"],] },],
    'handleKeydown': [{ type: core_1.HostListener, args: ["keydown", ["$event"],] },],
    'handleKeypress': [{ type: core_1.HostListener, args: ["keypress", ["$event"],] },],
    'handleKeyup': [{ type: core_1.HostListener, args: ["keyup", ["$event"],] },],
    'handlePaste': [{ type: core_1.HostListener, args: ["paste", ["$event"],] },],
};
exports.CurrencyMaskDirective = CurrencyMaskDirective;
//# sourceMappingURL=currency-mask.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-currency-mask/src/currency-mask.module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var currency_mask_directive_1 = __webpack_require__(/*! ./currency-mask.directive */ "./node_modules/ng2-currency-mask/src/currency-mask.directive.js");
var CurrencyMaskModule = (function () {
    function CurrencyMaskModule() {
    }
    return CurrencyMaskModule;
}());
CurrencyMaskModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ],
                exports: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskModule.ctorParameters = function () { return []; };
exports.CurrencyMaskModule = CurrencyMaskModule;
//# sourceMappingURL=currency-mask.module.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.handler.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-currency-mask/src/input.handler.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_service_1 = __webpack_require__(/*! ./input.service */ "./node_modules/ng2-currency-mask/src/input.service.js");
var InputHandler = (function () {
    function InputHandler(htmlInputElement, options) {
        this.inputService = new input_service_1.InputService(htmlInputElement, options);
        this.htmlInputElement = htmlInputElement;
    }
    InputHandler.prototype.handleClick = function (event, chromeAndroid) {
        var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
        //if there is no selection and the value is not null, the cursor position will be fixed. if the browser is chrome on android, the cursor will go to the end of the number.
        if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
            this.inputService.fixCursorPosition(chromeAndroid);
        }
    };
    InputHandler.prototype.handleCut = function (event) {
        var _this = this;
        if (this.isReadOnly()) {
            return;
        }
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 0);
    };
    InputHandler.prototype.handleInput = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = this.getNewKeyCode(this.inputService.storedRawValue, this.inputService.rawValue);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;
        if ((rawValueSelectionEnd != rawValueWithoutSuffixEndPosition || Math.abs(rawValueLength - storedRawValueLength) != 1) && storedRawValueLength != 0) {
            this.setCursorPosition(event);
            return;
        }
        if (rawValueLength < storedRawValueLength) {
            if (this.inputService.value != 0) {
                this.inputService.removeNumber(8);
            }
            else {
                this.setValue(null);
            }
        }
        if (rawValueLength > storedRawValueLength) {
            switch (keyCode) {
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (!this.inputService.canInputMoreNumbers || (isNaN(this.inputService.value) && String.fromCharCode(keyCode).match(/\d/) == null)) {
                        return;
                    }
                    this.inputService.addNumber(keyCode);
            }
        }
        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeydown = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
            if (selectionRangeLength == this.inputService.rawValue.length || this.inputService.value == 0) {
                this.setValue(null);
                this.onModelChange(this.inputService.value);
            }
            if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
            if ((keyCode === 8 || keyCode === 46) && selectionRangeLength != 0 && !isNaN(this.inputService.value)) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
        }
    };
    InputHandler.prototype.handleKeypress = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == undefined || [9, 13].indexOf(keyCode) != -1 || this.isArrowEndHomeKeyInFirefox(event)) {
            return;
        }
        switch (keyCode) {
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers && (!isNaN(this.inputService.value) || String.fromCharCode(keyCode).match(/\d/) != null)) {
                    this.inputService.addNumber(keyCode);
                }
        }
        event.preventDefault();
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeyup = function (event) {
        this.inputService.fixCursorPosition();
    };
    InputHandler.prototype.handlePaste = function (event) {
        var _this = this;
        if (this.isReadOnly()) {
            return;
        }
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 1);
    };
    InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
    };
    InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
    };
    InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
    };
    InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
    };
    InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
    };
    InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    InputHandler.prototype.getNewKeyCode = function (oldString, newString) {
        if (oldString.length > newString.length) {
            return null;
        }
        for (var x = 0; x < newString.length; x++) {
            if (oldString.length == x || oldString[x] != newString[x]) {
                return newString.charCodeAt(x);
            }
        }
    };
    InputHandler.prototype.isArrowEndHomeKeyInFirefox = function (event) {
        if ([35, 36, 37, 38, 39, 40].indexOf(event.keyCode) != -1 && (event.charCode == undefined || event.charCode == 0)) {
            return true;
        }
        return false;
    };
    InputHandler.prototype.isReadOnly = function () {
        return this.htmlInputElement && this.htmlInputElement.readOnly;
    };
    InputHandler.prototype.setCursorPosition = function (event) {
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        setTimeout(function () {
            event.target.setSelectionRange(rawValueWithoutSuffixEndPosition, rawValueWithoutSuffixEndPosition);
        }, 0);
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;
//# sourceMappingURL=input.handler.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.manager.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-currency-mask/src/input.manager.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            var textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    };
    InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    };
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
            var selectionStart = this.inputSelection.selectionStart;
            var selectionEnd = this.inputSelection.selectionEnd;
            var haveNumberSelected = (selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/)) ? true : false;
            var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var selectionStart = 0;
            var selectionEnd = 0;
            if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                selectionStart = this.htmlInputElement.selectionStart;
                selectionEnd = this.htmlInputElement.selectionEnd;
            }
            else {
                var range = document.getSelection().baseNode;
                if (range && range.firstChild == this.htmlInputElement) {
                    var lenght = this.htmlInputElement.value.length;
                    var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                    var startRange = this.htmlInputElement.createTextRange();
                    var endRange = this.htmlInputElement.createTextRange();
                    endRange.collapse(false);
                    if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                        selectionStart = selectionEnd = lenght;
                    }
                    else {
                        selectionStart = -startRange.moveStart("character", -lenght);
                        selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                        if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                            selectionEnd = lenght;
                        }
                        else {
                            selectionEnd = -startRange.moveEnd("character", -lenght);
                            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                        }
                    }
                }
            }
            return {
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function (value) {
            this._storedRawValue = value;
            if (this.htmlInputElement) {
                this.htmlInputElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function () {
            return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=input.manager.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.service.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-currency-mask/src/input.service.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_manager_1 = __webpack_require__(/*! ./input.manager */ "./node_modules/ng2-currency-mask/src/input.manager.js");
var InputService = (function () {
    function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new input_manager_1.InputManager(htmlInputElement);
    }
    InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, "0");
        }
        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
    };
    InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");
        if (!onlyNumbers) {
            return "";
        }
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart == "") {
            integerPart = "0";
        }
        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        if (precision > 0) {
            decimalPart = "0".repeat(precision - decimalPart.length) + decimalPart;
            newRawValue += decimal + decimalPart;
        }
        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = (rawValue.indexOf("-") > -1 && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    };
    InputService.prototype.clearMask = function (rawValue) {
        if (rawValue == null || rawValue == "") {
            return null;
        }
        var value = rawValue.replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        return parseFloat(value);
    };
    InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            var selectionStart = this.inputSelection.selectionStart;
            this.rawValue = "-" + this.rawValue;
            this.updateFieldValue(selectionStart + 1);
        }
    };
    InputService.prototype.changeToPositive = function () {
        var selectionStart = this.inputSelection.selectionStart;
        this.rawValue = this.rawValue.replace("-", "");
        this.updateFieldValue(selectionStart - 1);
    };
    InputService.prototype.fixCursorPosition = function (forceToEndPosition) {
        var currentCursorPosition = this.inputSelection.selectionStart;
        //if the current cursor position is after the number end position, it is moved to the end of the number, ignoring the prefix or suffix. this behavior can be forced with forceToEndPosition flag
        if (currentCursorPosition > this.getRawValueWithoutSuffixEndPosition() || forceToEndPosition) {
            this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition());
            //if the current cursor position is before the number start position, it is moved to the start of the number, ignoring the prefix or suffix
        }
        else if (currentCursorPosition < this.getRawValueWithoutPrefixStartPosition()) {
            this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition());
        }
    };
    InputService.prototype.getRawValueWithoutSuffixEndPosition = function () {
        return this.rawValue.length - this.options.suffix.length;
    };
    InputService.prototype.getRawValueWithoutPrefixStartPosition = function () {
        return this.value != null && this.value < 0 ? this.options.prefix.length + 1 : this.options.prefix.length;
    };
    InputService.prototype.removeNumber = function (keyCode) {
        var _a = this.options, decimal = _a.decimal, thousands = _a.thousands;
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;
        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
            selectionEnd = this.rawValue.length - this.options.suffix.length;
            selectionStart = this.rawValue.length - this.options.suffix.length;
        }
        //there is no selection
        if (selectionEnd == selectionStart) {
            //delete key and the target digit is a number
            if ((keyCode == 46 || keyCode == 63272) && /^\d+$/.test(this.rawValue.substring(selectionStart, selectionEnd + 1))) {
                selectionEnd = selectionEnd + 1;
            }
            //delete key and the target digit is the decimal or thousands divider
            if ((keyCode == 46 || keyCode == 63272) && (this.rawValue.substring(selectionStart, selectionEnd + 1) == decimal || this.rawValue.substring(selectionStart, selectionEnd + 1) == thousands)) {
                selectionEnd = selectionEnd + 2;
                selectionStart = selectionStart + 1;
            }
            //backspace key and the target digit is a number
            if (keyCode == 8 && /^\d+$/.test(this.rawValue.substring(selectionStart - 1, selectionEnd))) {
                selectionStart = selectionStart - 1;
            }
            //backspace key and the target digit is the decimal or thousands divider
            if (keyCode == 8 && (this.rawValue.substring(selectionStart - 1, selectionEnd) == decimal || this.rawValue.substring(selectionStart - 1, selectionEnd) == thousands)) {
                selectionStart = selectionStart - 2;
                selectionEnd = selectionEnd - 1;
            }
        }
        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
    };
    InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    };
    InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
    };
    Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "rawValue", {
        get: function () {
            return this.inputManager.rawValue;
        },
        set: function (value) {
            this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function () {
            return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "value", {
        get: function () {
            return this.clearMask(this.rawValue);
        },
        set: function (value) {
            this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
    });
    return InputService;
}());
exports.InputService = InputService;
//# sourceMappingURL=input.service.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade modal-deal\" id=\"modal-deal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"\r\n\tdata-backdrop=\"static\">\r\n\t<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-12 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"title my-0\">\r\n\t\t\t\t\t\t\t<h3>Ponte al día con {{dealModal.debCompany}}</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txt\">\r\n\t\t\t\t\t\t\t<p>Aquí podrás negociar tu deuda en mora por:</p>\r\n\t\t\t\t\t\t\t<p class=\"price\">$ {{dealModal.debBalance | currency:'COP':'':'1.2-2' }}</p>\r\n\t\t\t\t\t\t\t<p>Haz una propuesta de pago en línea:</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"separate\"></div>\r\n\t\t\t\t\t\t<fieldset>\r\n\t\t\t\t\t\t\t<form (ngSubmit)=\"propuesta(datos)\" #datos=\"ngForm\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t\t\t\t\t\t{{ errorMessage }}\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"month\" class=\"bmd-label-floating\">Capacidad de pago\r\n\t\t\t\t\t\t\t\t\t\t\t\tmensual</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input currencyMask type=\"text\" class=\"form-control text-left\" id=\"month\" [(ngModel)]=\"monthly\" #month=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t\trequired=\"required\" name=\"pago\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"documento\" class=\"bmd-label-floating\">Cantidad de pagos</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control custom-select\" id=\"pay\" name=\"cuota\" [(ngModel)]=\"payment\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t#pay=\"ngModel\" autocomplete=\"off\" required=\"required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let mes of dealModal.selectMonth\" [value]=\"mes\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{mes}} \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"mes === '1'\">mes</span> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"mes !== '1'\">meses</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"arrow down\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<small>La entidad permite un plazo de hasta {{dealModal.selectMonth?.length}} meses.</small>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label for=\"dat\" class=\"bmd-label-floating\">Fecha de pago</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"dat\" [(ngModel)]=\"date\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t#dat=\"ngModel\" required=\"required\" name=\"dat\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"dat\" class=\"bmd-label-floating\">Fecha de pago</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"dd - mm - yyyy\" id=\"dat\" name=\"fecha\" [(ngModel)]=\"date\" readonly\r\n\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #d=\"ngbDatepicker\" autocomplete=\"off\" required=\"required\"  [placement]=\"placement\" [positionTarget]=\"buttonCalendar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button #buttonCalendar class=\"btn calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button [attr.disabled]=\"(datos.valid && !dealModal.loading) ? null : 'disabled'\" [ngClass]=\"{'disabled': !datos.valid || dealModal.loading }\"\r\n\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-lg d-block mx-auto btn-secundary\">\r\n\t\t\t\t\t\t\t\t\tHacer propuesta \r\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"!dealModal.loading\" class=\"arrow right\"></i>\r\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"dealModal.loading\" class=\"fa fa-spinner fa-spin positionSpinner\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</fieldset>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 m-auto text-right d-none d-sm-block\">\r\n\t\t\t\t\t\t<!-- <img [src]=\"imgSrc\" class=\"icon\" [alt]=\"title\"> -->\r\n\t\t\t\t\t\t<img src=\"assets/icons/acuerdo_pop.svg\" alt=\"Ponte el día\" class=\"img-modal\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/deal/deal.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/deal/deal.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://use.typekit.net/mre5lng.css\");\n/* You can add global styles to this file, and also import other style files */\n.btn {\n  width: 200px;\n  height: 40px;\n  font-size: 16px;\n  vertical-align: middle;\n  font-family: \"Roboto\", sans-serif;\n  cursor: pointer;\n  margin: 10px auto;\n  max-width: 100%;\n  position: relative;\n}\n.btn.btn-secundary {\n  background-color: #B12384;\n  color: #ffffff;\n  margin: 10px auto;\n}\n.btn.btn-secundary:disabled {\n  background: #767579;\n  color: #ffffff;\n  opacity: 0.4;\n}\n.btn.btn-secundary .arrow {\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n  position: absolute;\n  right: 40px;\n  top: 18px;\n  padding: 4px;\n}\n.btn.round {\n  border-radius: 18px;\n}\n.btn.btn-outline {\n  border-color: #B12384;\n  color: #B12384;\n}\n.btn.btn-outline-light .arrow {\n  top: 22px;\n}\n.btn.btn-outline .arrow {\n  border: solid #B12384;\n  border-width: 0 2px 2px 0;\n  position: absolute;\n  right: 17px;\n  top: 15px;\n  padding: 4px;\n}\n.btn.btn-outline-w {\n  border-color: #ffffff;\n  color: #ffffff;\n  padding-top: 10px;\n}\n.btn.btn-outline-w:hover {\n  background-color: #ffffff;\n  color: #B12384;\n}\n.btn.btn-outline-w:hover .arrow {\n  border: solid #B12384;\n  border-width: 0 2px 2px 0;\n}\n.btn.btn-outline-w .arrow {\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n  position: absolute;\n  right: 17px;\n  top: 17px;\n  padding: 4px;\n}\n.btn .icon {\n  display: inline-block;\n  width: 10%;\n}\n.btn-blue {\n  color: #ffffff;\n  background-color: #08478E;\n}\n.btn-dtc {\n  color: #ffffff;\n  background-color: #632678;\n}\n.btn-dtc .arrow {\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n  position: absolute;\n  right: 17px;\n  top: 21px;\n  padding: 4px;\n}\n.btn-lg {\n  width: 300px;\n  height: 50px;\n  font-weight: bold;\n  text-align: center;\n}\n.arrow {\n  border: solid #B12384;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n}\n.arrow.right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n.arrow.left {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n.arrow.up {\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n}\n.arrow.down {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n.link {\n  color: #B12384;\n  font-size: 14px;\n}\n.link-b {\n  color: #08478E;\n}\n.custom-select::after {\n  display: none;\n}\n.arrow {\n  border: solid #B12384;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n}\n.arrow.right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n.arrow.left {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n.arrow.up {\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n}\n.arrow.down {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\nfieldset {\n  margin: 10px auto;\n}\nfieldset select {\n  -webkit-appearance: none;\n  appearance: none;\n  -moz-appearance: none;\n  -ms-progress-appearance: none;\n  -o-appearance: none;\n}\nfieldset select + i {\n  float: right;\n  pointer-events: none;\n  margin-top: -20px;\n  margin-right: 15px;\n}\nfieldset .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='blue' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\nfieldset .custom-control-input:checked ~ .custom-control-label::before {\n  color: #B12384;\n  border-color: #B12384;\n  background-color: #ffffff;\n}\nfieldset .form-control.is-valid,\nfieldset .was-validated .form-control:valid {\n  border: solid #ced4da;\n  border-width: 1px;\n}\nfieldset .btn {\n  width: 100%;\n}\nfieldset label {\n  font-size: 14px;\n  color: #767579;\n  margin: 5px auto;\n  line-height: 15px;\n}\nfieldset label a {\n  color: #B12384;\n}\n@media (min-width: 768px) {\n  fieldset label {\n    font-size: 12px;\n    line-height: 20px;\n    color: gray;\n    font-weight: 500;\n  }\n}\nfieldset .form-control {\n  font-family: \"Roboto\", sans-serif;\n  color: gray;\n  font-size: 15px;\n}\n@media (min-width: 768px) {\n  fieldset .form-control {\n    font-size: 12px;\n    color: gray;\n  }\n}\nfieldset ::-webkit-input-placeholder {\n  color: #b0b0b0;\n}\nfieldset ::-moz-placeholder {\n  color: #b0b0b0;\n}\nfieldset ::-ms-input-placeholder {\n  color: #b0b0b0;\n}\nfieldset ::placeholder {\n  color: #b0b0b0;\n}\nfieldset input {\n  height: 35px;\n  font-family: \"Roboto\", sans-serif;\n  color: gray;\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n@media (min-width: 768px) {\n  fieldset input {\n    font-size: 12px;\n    color: gray;\n  }\n}\nfieldset input:focus {\n  border-color: #B12384;\n  box-shadow: 0 0 0 0.2rem rgba(177, 35, 132, 0.4);\n}\n@media (min-width: 768px) {\n  fieldset .custom-checkbox {\n    margin-left: 10px;\n    width: 97%;\n    font-size: 14px;\n    margin-top: 10px;\n  }\n}\n@media (min-width: 768px) {\n  fieldset .btn {\n    margin-top: 20px;\n  }\n}\n.form-control:focus {\n  border-color: #B12384;\n  box-shadow: 0 0 0 0.2rem rgba(177, 35, 132, 0.4);\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.table {\n  color: #767579;\n  font-size: 14px;\n}\n.table thead th {\n  padding-bottom: 14px;\n}\n.table tbody tr:first-child {\n  padding-top: 10px;\n}\nselect::-ms-expand {\n  display: none;\n}\n.custom-select {\n  background-image: none;\n}\n.form-group .calendar {\n  position: absolute;\n  top: 9px;\n  right: 14px;\n  width: 10%;\n  height: 35px;\n  border: none;\n  color: #B12384;\n}\n.dropdown-toggle::after {\n  display: none;\n}\nngb-datepicker {\n  font-family: \"Roboto\", sans-serif;\n}\nngb-datepicker [ngbDatepickerDayView] {\n  border-radius: 18px;\n}\nngb-datepicker .btn-link {\n  color: #B12384;\n  margin-top: -2px;\n}\nngb-datepicker .ngb-dp-weekday {\n  color: #B12384;\n  font-style: normal;\n  font-family: din-2014, sans-serif;\n}\nngb-datepicker .btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n  font-size: 11px;\n  font-family: \"Roboto\", sans-serif;\n}\nngb-datepicker .btn-light:focus {\n  box-shadow: none;\n}\nngb-datepicker .bg-primary {\n  background-color: #08478E !important;\n}\n.modal-header {\n  border: none;\n  padding: 5px 20px;\n}\n.modal-header .close {\n  color: #B12384;\n  font-weight: 300;\n  font-size: 2.5rem;\n}\n.modal-content {\n  padding: 20px;\n  border-radius: 16px;\n}\n.modal-content .field-title {\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n@media (min-width: 768px) {\n  .modal-content .field-title {\n    color: #545659;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\n}\n.modal-content svg {\n  fill: #807f7f;\n  opacity: 0.5;\n  font-weight: 300;\n  margin: 5px auto;\n  display: block;\n  width: 20%;\n  padding-bottom: 15px;\n}\n.modal-error .title {\n  color: #a92381;\n  font-size: 30px;\n}\nbody {\n  font-family: \"Roboto\", sans-serif !important;\n}\n.breadcrumb {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  display: flex;\n  color: #767579;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: transparent;\n  border-radius: 0.25rem;\n  z-index: 1;\n}\n.header {\n  background-color: transparent;\n  transition: ease 0.3s;\n  padding-top: 0px;\n}\n@media (min-width: 768px) {\n  .header {\n    padding-top: 15px;\n  }\n}\n.header.scrolled {\n  background-color: #08478E;\n  transition: ease 0.3s;\n  padding-top: 5px;\n}\n@media (min-width: 768px) {\n  .header.scrolled .icon {\n    width: 250px;\n  }\n}\n.header.secundary {\n  background-color: #08478E;\n  padding-top: 5px;\n}\n.header.secundary .arrow {\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n  padding: 2px;\n  top: 16px;\n  right: -6px;\n  position: absolute;\n}\n.midc {\n  background: #ffffff;\n  color: #000000;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .midc {\n    text-align: left;\n    padding: 90px 40px;\n  }\n}\n.midc .sub-title {\n  font-family: din-2014, sans-serif;\n  line-height: 20px;\n  font-size: 18px;\n  margin: 20px 20px;\n}\n@media (min-width: 768px) {\n  .midc .sub-title {\n    font-size: 35px;\n    line-height: 40px;\n    text-align: left;\n    margin: 40px auto;\n    padding-right: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .midc .btn {\n    width: 300px;\n    font-size: 20px;\n    height: 55px;\n  }\n}\n.midc p {\n  font-size: 14px;\n  color: #767579;\n  margin: 20px auto;\n  line-height: 18px;\n}\n@media (min-width: 768px) {\n  .midc p {\n    font-size: 20px;\n    line-height: 24px;\n    text-align: center;\n  }\n}\n.spinner:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n.btnDisabled {\n  background: #6a68646e !important;\n  color: white !important;\n}\n:focus {\n  outline-color: transparent;\n  outline-style: none;\n}\n.btn_class {\n  background-color: transparent;\n  border: 1px solid #ababab;\n  color: #ababab;\n  padding: 4px 6px;\n  font-size: 11px;\n  border-radius: 4px;\n  margin: 4px 4px 4px 0;\n  cursor: none;\n}\n.btn_status {\n  background-color: transparent;\n  border: 1px solid #BA2F7D;\n  color: #BA2F7D;\n  padding: 4px 6px;\n  font-size: 11px;\n  border-radius: 4px;\n  margin: 4px 4px 4px 0;\n  cursor: none;\n}\n.modal-deal {\n  padding-right: 0 !important;\n}\n.modal-deal .modal-content {\n  padding: 10px;\n  border-radius: 20px;\n  background-color: #ffffff;\n}\n@media (min-width: 768px) {\n  .modal-deal .modal-content {\n    background-image: url(/assets/icons/bg_acuerdo.svg);\n    background-position: center right;\n    background-repeat: no-repeat;\n  }\n}\n.modal-deal .modal-content .modal-header {\n  position: absolute;\n  right: 8px;\n  z-index: 2;\n}\n.modal-deal .modal-content .modal-body {\n  padding: 2rem !important;\n}\n@media (max-width: 767px) {\n  .modal-deal .modal-content .modal-body {\n    padding: 2rem 1rem !important;\n  }\n}\n.modal-deal .modal-content .modal-body .separate {\n  height: 1px;\n  width: 100%;\n  background-color: #ececec;\n}\n.modal-deal .modal-content .modal-body .img-modal {\n  width: 70%;\n}\n.modal-deal .title h3 {\n  color: #000000;\n  font-family: din-2014, sans-serif;\n  font-size: 24px;\n  line-height: 28px;\n}\n@media (max-width: 767px) {\n  .modal-deal .title h3 {\n    font-size: 18px;\n  }\n}\n.modal-deal small {\n  font-size: 11px;\n  color: #767579;\n  font-family: \"Roboto\", sans-serif;\n}\n.modal-deal .txt p {\n  font-size: 14px;\n  color: #767579;\n  font-family: \"Roboto\", sans-serif;\n  margin-bottom: 8px;\n}\n.modal-deal .txt p span {\n  font-size: 20px !important;\n}\n.modal-deal .txt p.price {\n  font-size: 20px;\n  font-weight: 500;\n  color: #000;\n}\n.positionSpinner {\n  right: 33px;\n  position: absolute;\n  top: 17px;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #fff !important;\n}\n.form-group .calendar {\n  top: 10px;\n  right: 20px;\n}\n@media (max-width: 767px) {\n  .form-group .calendar {\n    position: absolute;\n    top: 12px;\n    right: 16px;\n    width: 15%;\n    height: 45px;\n  }\n}\n.form-group .calendar i {\n  font-size: 20px;\n}\n::ng-deep ngb-datepicker {\n  left: -95px !important;\n  box-shadow: 0px 0px 9px 0px #5d53ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVhbC9DOlxcZGV2XFx3b3Jrc3BhY2VfYW5ndWxhclxcYWMtY3RodXBvbi11aS9zcmNcXHN0eWxlc1xcaGVscGVyc1xcX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhbC9DOlxcZGV2XFx3b3Jrc3BhY2VfYW5ndWxhclxcYWMtY3RodXBvbi11aS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWFsL0M6XFxkZXZcXHdvcmtzcGFjZV9hbmd1bGFyXFxhYy1jdGh1cG9uLXVpL3NyY1xcc3R5bGVzXFxjb21wb25lbnRzXFxfYnV0dG9ucy5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWFsL2RlYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RlYWwvQzpcXGRldlxcd29ya3NwYWNlX2FuZ3VsYXJcXGFjLWN0aHVwb24tdWkvc3JjXFxzdHlsZXNcXGhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhbC9DOlxcZGV2XFx3b3Jrc3BhY2VfYW5ndWxhclxcYWMtY3RodXBvbi11aS9zcmNcXHN0eWxlc1xcY29tcG9uZW50c1xcX2Zvcm1zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RlYWwvQzpcXGRldlxcd29ya3NwYWNlX2FuZ3VsYXJcXGFjLWN0aHVwb24tdWkvc3JjXFxzdHlsZXNcXGNvbXBvbmVudHNcXF9tb2RhbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWFsL0M6XFxkZXZcXHdvcmtzcGFjZV9hbmd1bGFyXFxhYy1jdGh1cG9uLXVpL3NyY1xcYXBwXFxwYWdlc1xcZGVhbFxcZGVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQVEsNkVBQUE7QUFDQSxrREFBQTtBQ0RSLDhFQUFBO0FDQUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDRkhRO0VFSVIsZUFBQTtFQUNDLGlCQUFBO0VBQ0EsZUFB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RjtJQU1JLGVBQUE7RUoyZ0JKO0FBQ0Y7QUl6Z0JFO0VBQ0UsZUFBQTtFQUNBLGNIN0JNO0VHOEJOLGlDUDFDSztBR3FqQlQ7QUl4Z0JFO0VBQ0UsZUFBQTtFQUNBLGNIbkNNO0VHb0NOLGlDUGhESztFT2lETCxrQkFBQTtBSjBnQko7QUl6Z0JJO0VBQ0UsMEJBQUE7QUoyZ0JOO0FJeGdCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUowZ0JKO0FJdmdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUowZ0JGO0FJeGdCQTtFQUNFLGlDQUFBO0FKMmdCRjtBSXpnQkE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBSjRnQko7QUkzZ0JFO0VBSEY7SUFJSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUo4Z0JGO0FBQ0Y7QUk3Z0JFO0VBQ0UsZUFBQTtBSitnQko7QUkzZ0JBO0VBQ0Usc0JBQUE7RUFHRixtQ0FBQTtBSjhnQkEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWFsL2RlYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAnKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9tcmU1bG5nLmNzc1wiKTtcclxuJHJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRsaWdodDogMzAwO1xyXG4kcmVndWxhcjogNDAwO1xyXG4kbWVkaXVtOiA1MDA7XHJcbiRib2xkOiA3MDA7XHJcbiRkaW46IGRpbi0yMDE0LHNhbnMtc2VyaWY7IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IFwic3R5bGVzL2hlbHBlcnMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMvaGVscGVycy90eXBvZ3JhcGh5XCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMvY29tcG9uZW50cy9idXR0b25zXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMvY29tcG9uZW50cy9mb3Jtc1wiO1xyXG5AaW1wb3J0IFwic3R5bGVzL2NvbXBvbmVudHMvbW9kYWxcIjtcclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8gIWltcG9ydGFudDtcclxufVxyXG4vLyAuY29udGFpbmVyIHtcclxuLy8gICBwYWRkaW5nOiA1cHggMjVweDtcclxuLy8gfVxyXG4uYnJlYWRjcnVtYiB7XHJcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICR0eHQtZ3JheTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgJi5zY3JvbGxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIC5pY29uIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuc2VjdW5kYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIC5hcnJvdyB7XHJcbiAgICAgIGJvcmRlcjogc29saWQgI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIHJpZ2h0OiAtNnB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5taWRjIHtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgY29sb3I6ICRibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOTBweCA0MHB4O1xyXG4gIH1cclxuICAuc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBkaW4tMjAxNCwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR0eHQtZ3JheTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNwaW5uZXI6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbi10b3A6IC0xMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xyXG5cdGFuaW1hdGlvbjogc3Bpbm5lciAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uYnRuRGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICM2YTY4NjQ2ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Zm9jdXMgeyBcclxuICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDsgXHJcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bl9jbGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYmFiYWI7XHJcbiAgICBjb2xvcjojYWJhYmFiO1xyXG4gICAgcGFkZGluZzogNHB4IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogNHB4IDRweCA0cHggMDtcclxuICAgIGN1cnNvcjogbm9uZTtcclxuIH1cclxuIC5idG5fc3RhdHVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JBMkY3RDtcclxuICAgIGNvbG9yOiNCQTJGN0Q7XHJcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiA0cHggNHB4IDRweCAwO1xyXG4gICAgY3Vyc29yOiBub25lO1xyXG4gfVxyXG4iLCIuYnRue1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0Zm9udC1mYW1pbHk6ICRyb2JvdG87XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ji5idG4tc2VjdW5kYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICBjb2xvcjokd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR0eHQtZ3JheTtcclxuICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICBvcGFjaXR5OiAuNDtcclxuXHRcdH1cclxuXHRcdC5hcnJvd3tcclxuXHRcdFx0Ym9yZGVyOiBzb2xpZCAkd2hpdGU7XHJcblx0XHRcdGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IDQwcHg7XHJcblx0XHRcdHRvcDogMThweDtcclxuXHRcdFx0cGFkZGluZzogNHB4O1xyXG5cdFx0fVxyXG4gIH1cclxuICAmLnJvdW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICB9XHJcblx0Ji5idG4tb3V0bGluZXtcclxuICAgIGJvcmRlci1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAmLWxpZ2h0e1xyXG4gICAgICAuYXJyb3d7XHJcbiAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXJyb3d7XHJcbiAgICAgIGJvcmRlcjogc29saWQgJG1haW4tY29sb3I7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE3cHg7XHJcbiAgICAgIHRvcDogMTVweDtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmJ0bi1vdXRsaW5lLXd7XHJcbiAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgY29sb3I6JG1haW4tY29sb3I7XHJcbiAgICAgIC5hcnJvd3tcclxuICAgICAgICBib3JkZXI6IHNvbGlkICRtYWluLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcnJvd3tcclxuICAgICAgYm9yZGVyOiBzb2xpZCAkd2hpdGU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE3cHg7XHJcbiAgICAgIHRvcDogMTdweDtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWNvbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG59XHJcbi5idG4tYmx1ZXtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG59XHJcbi5idG4tZHRje1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1pZGM7XHJcbiAgLmFycm93e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAkd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiAyMXB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxufVxyXG4uYnRuLWxne1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcnJvd3tcclxuICBib3JkZXI6IHNvbGlkICRtYWluLWNvbG9yO1xyXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICAmLnJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG4gICYubGVmdCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gIH1cclxuICAmLnVwIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICB9XHJcbiAgJi5kb3duIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxufVxyXG4ubGlua3tcclxuICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5saW5rLWIge1xyXG4gIGNvbG9yOiRibHVlO1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvbXJlNWxuZy5jc3NcIik7XG4uYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ0bi5idG4tc2VjdW5kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IxMjM4NDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLmJ0bi5idG4tc2VjdW5kYXJ5OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzc2NzU3OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5idG4uYnRuLXNlY3VuZGFyeSAuYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQwcHg7XG4gIHRvcDogMThweDtcbiAgcGFkZGluZzogNHB4O1xufVxuLmJ0bi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG4uYnRuLmJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyLWNvbG9yOiAjQjEyMzg0O1xuICBjb2xvcjogI0IxMjM4NDtcbn1cbi5idG4uYnRuLW91dGxpbmUtbGlnaHQgLmFycm93IHtcbiAgdG9wOiAyMnB4O1xufVxuLmJ0bi5idG4tb3V0bGluZSAuYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICNCMTIzODQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTVweDtcbiAgcGFkZGluZzogNHB4O1xufVxuLmJ0bi5idG4tb3V0bGluZS13IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uYnRuLmJ0bi1vdXRsaW5lLXc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogI0IxMjM4NDtcbn1cbi5idG4uYnRuLW91dGxpbmUtdzpob3ZlciAuYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICNCMTIzODQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG59XG4uYnRuLmJ0bi1vdXRsaW5lLXcgLmFycm93IHtcbiAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDE3cHg7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5idG4gLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5idG4tYmx1ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg0NzhFO1xufVxuXG4uYnRuLWR0YyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjMyNjc4O1xufVxuLmJ0bi1kdGMgLmFycm93IHtcbiAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDIxcHg7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmJ0bi1sZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICNCMTIzODQ7XG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xufVxuLmFycm93LnJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLmFycm93LmxlZnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG4uYXJyb3cudXAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbn1cbi5hcnJvdy5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogI0IxMjM4NDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGluay1iIHtcbiAgY29sb3I6ICMwODQ3OEU7XG59XG5cbi5jdXN0b20tc2VsZWN0OjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcnJvdyB7XG4gIGJvcmRlcjogc29saWQgI0IxMjM4NDtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG59XG4uYXJyb3cucmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uYXJyb3cubGVmdCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cbi5hcnJvdy51cCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xufVxuLmFycm93LmRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuZmllbGRzZXQgc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tcy1wcm9ncmVzcy1hcHBlYXJhbmNlOiBub25lO1xuICAtby1hcHBlYXJhbmNlOiBub25lO1xufVxuZmllbGRzZXQgc2VsZWN0ICsgaSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5maWVsZHNldCAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGZpbGw9J2JsdWUnIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuZmllbGRzZXQgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiAjQjEyMzg0O1xuICBib3JkZXItY29sb3I6ICNCMTIzODQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5maWVsZHNldCAuZm9ybS1jb250cm9sLmlzLXZhbGlkLFxuZmllbGRzZXQgLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDp2YWxpZCB7XG4gIGJvcmRlcjogc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5maWVsZHNldCAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5maWVsZHNldCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3Njc1Nzk7XG4gIG1hcmdpbjogNXB4IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuZmllbGRzZXQgbGFiZWwgYSB7XG4gIGNvbG9yOiAjQjEyMzg0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGZpZWxkc2V0IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuZmllbGRzZXQgLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGZpZWxkc2V0IC5mb3JtLWNvbnRyb2wge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxufVxuZmllbGRzZXQgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYjBiMGIwO1xufVxuZmllbGRzZXQgaW5wdXQge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZmllbGRzZXQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxufVxuZmllbGRzZXQgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNCMTIzODQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDE3NywgMzUsIDEzMiwgMC40KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBmaWVsZHNldCAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogOTclO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZmllbGRzZXQgLmJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjQjEyMzg0O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxNzcsIDM1LCAxMzIsIDAuNCk7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFibGUge1xuICBjb2xvcjogIzc2NzU3OTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4udGFibGUgdGJvZHkgdHI6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uZm9ybS1ncm91cCAuY2FsZW5kYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXB4O1xuICByaWdodDogMTRweDtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjQjEyMzg0O1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbm5nYi1kYXRlcGlja2VyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5uZ2ItZGF0ZXBpY2tlciBbbmdiRGF0ZXBpY2tlckRheVZpZXddIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cbm5nYi1kYXRlcGlja2VyIC5idG4tbGluayB7XG4gIGNvbG9yOiAjQjEyMzg0O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxubmdiLWRhdGVwaWNrZXIgLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICNCMTIzODQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IGRpbi0yMDE0LCBzYW5zLXNlcmlmO1xufVxubmdiLWRhdGVwaWNrZXIgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNmOGY5ZmE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5uZ2ItZGF0ZXBpY2tlciAuYnRuLWxpZ2h0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbm5nYi1kYXRlcGlja2VyIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NDc4RSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgY29sb3I6ICNCMTIzODQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4ubW9kYWwtY29udGVudCAuZmllbGQtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQgLmZpZWxkLXRpdGxlIHtcbiAgICBjb2xvcjogIzU0NTY1OTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuLm1vZGFsLWNvbnRlbnQgc3ZnIHtcbiAgZmlsbDogIzgwN2Y3ZjtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5tb2RhbC1lcnJvciAudGl0bGUge1xuICBjb2xvcjogI2E5MjM4MTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmJyZWFkY3J1bWIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogIzc2NzU3OTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xuICB0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbn1cbi5oZWFkZXIuc2Nyb2xsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg0NzhFO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgMC4zcztcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIuc2Nyb2xsZWQgLmljb24ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuLmhlYWRlci5zZWN1bmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg0NzhFO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmhlYWRlci5zZWN1bmRhcnkgLmFycm93IHtcbiAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IC02cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1pZGMge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5taWRjIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDkwcHggNDBweDtcbiAgfVxufVxuLm1pZGMgLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBkaW4tMjAxNCwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1pZGMgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5taWRjIC5idG4ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG59XG4ubWlkYyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzc2NzU3OTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5taWRjIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnNwaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XG4gIGFuaW1hdGlvbjogc3Bpbm5lciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmJ0bkRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzZhNjg2NDZlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWJhYmFiO1xuICBjb2xvcjogI2FiYWJhYjtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogNHB4IDRweCA0cHggMDtcbiAgY3Vyc29yOiBub25lO1xufVxuXG4uYnRuX3N0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkEyRjdEO1xuICBjb2xvcjogI0JBMkY3RDtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogNHB4IDRweCA0cHggMDtcbiAgY3Vyc29yOiBub25lO1xufVxuXG4ubW9kYWwtZGVhbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1kZWFsIC5tb2RhbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtZGVhbCAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaWNvbnMvYmdfYWN1ZXJkby5zdmcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG59XG4ubW9kYWwtZGVhbCAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB6LWluZGV4OiAyO1xufVxuLm1vZGFsLWRlYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAycmVtICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1vZGFsLWRlYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4ubW9kYWwtZGVhbCAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuc2VwYXJhdGUge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG59XG4ubW9kYWwtZGVhbCAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuaW1nLW1vZGFsIHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5tb2RhbC1kZWFsIC50aXRsZSBoMyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogZGluLTIwMTQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1vZGFsLWRlYWwgLnRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi5tb2RhbC1kZWFsIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzc2NzU3OTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG4ubW9kYWwtZGVhbCAudHh0IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzY3NTc5O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm1vZGFsLWRlYWwgLnR4dCBwIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cbi5tb2RhbC1kZWFsIC50eHQgcC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5wb3NpdGlvblNwaW5uZXIge1xuICByaWdodDogMzNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQsIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCAuY2FsZW5kYXIge1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWdyb3VwIC5jYWxlbmRhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICByaWdodDogMTZweDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxufVxuLmZvcm0tZ3JvdXAgLmNhbGVuZGFyIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlciB7XG4gIGxlZnQ6IC05NXB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggMHB4ICM1ZDUzZWQ7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA5cHggMHB4ICM1ZDUzZWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IDBweCAjNWQ1M2VkO1xufSIsIiRtYWluLWNvbG9yOiNCMTIzODQ7XHJcbiRsaWdodC1tYWluOiNFRkQzRTY7XHJcbiRtaWRjOiAjNjMyNjc4O1xyXG4kYmx1ZTojMDg0NzhFO1xyXG4kbWlkLWJsdWU6IzBENkVCNjtcclxuJGxpZ2h0LWJsdWU6I0VCRjBGNjtcclxuJGNsZWFyLWJsdWU6ICNFOUYyRjg7XHJcbiRiZy1tYWluOiNGNUY4RkI7XHJcbiRtaWRjOiM2MzI2Nzg7XHJcbiR3aGl0ZTojZmZmZmZmO1xyXG4kYmxhY2s6IzAwMDAwMDtcclxuJGFwcm92ZTogIzNGOUI1MztcclxuLy8gJG5lZzpcclxuJGJnLWRhcms6IGhzbGEoMjE5LCAzJSwgMzQlLCAxKTtcclxuJHR4dC1ncmF5OiM3Njc1Nzk7XHJcbiRtaWQtZ3JheTojNzE3MTZFO1xyXG4kZ3JheTogIzk5OTk5OTtcclxuJGRhcmstZ3JheTogIzU0NTY1QTtcclxuJGxpZ2h0LWdyYXk6I0NFQ0VDRTtcclxuJGVycm9yOmhzbGEoMzE4LCA2NiUsIDQwJSwgMSk7XHJcbiRmb3JtLWdyYXk6aHNsYSgwLCAwJSwgNTAlLCAxKTtcclxuJGZvcm0tcGxhY2Vob2xkZXI6aHNsYSgwLCAwJSwgNjklLCAxKTtcclxuJGZvcm0taW5wdXQtYm9yZGVyOiBoc2xhKDIxMCwgMTQlLCA4MyUsIDEpO1xyXG4iLCIvLyAuPGkgY2xhc3M9XCJhcnJvdyBkb3duXCI+PC9pPlxyXG4vLyAubWF0LWZvcm0tZmllbGQtZmxleHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG4vLyAubWF0LWZvcm0tZmllbGQtZmxleHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbi8vICAgJjpob3ZlcntcclxuLy8gICAgIGJvcmRlcjogJG1haW4tY29sb3I7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi5jdXN0b20tc2VsZWN0OjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAvLyBjb250ZW50OiBcIlxcZjEwNlwiIWltcG9ydGFudFxyXG59XHJcbi5hcnJvdyB7XHJcbiAgYm9yZGVyOiBzb2xpZCAkbWFpbi1jb2xvcjtcclxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgJi5yaWdodCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuICAmLmxlZnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICB9XHJcbiAgJi51cCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgfVxyXG4gICYuZG93biB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBzZWxlY3Qge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tcy1wcm9ncmVzcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgc2VsZWN0ICsgaSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBmaWxsPSdibHVlJyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjYgMi45NzQgNy4yNSA4IDIuMTkzeicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICB9XHJcbiAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sLmlzLXZhbGlkLFxyXG4gIC53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6dmFsaWQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAkZm9ybS1pbnB1dC1ib3JkZXI7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR0eHQtZ3JheTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgLy8gbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgIGNvbG9yOiAkZm9ybS1ncmF5O1xyXG4gICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LWZhbWlseTogJHJvYm90bztcclxuICAgIGNvbG9yOiAkZm9ybS1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICRmb3JtLWdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRmb3JtLXBsYWNlaG9sZGVyO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICAvLyBmb250LXdlaWdodDogJG1lZGl1bTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcm9ib3RvO1xyXG4gICAgY29sb3I6ICRmb3JtLWdyYXk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJGZvcm0tZ3JheTtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgkbWFpbi1jb2xvciwgMC40KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC8vIGxhYmVse1xyXG4gICAgLy8gICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoJG1haW4tY29sb3IsIDAuNCk7XHJcbiAgfVxyXG59XHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnRhYmxlIHtcclxuICBjb2xvcjogJHR4dC1ncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0aGVhZCB7XHJcbiAgICB0aCB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICB0Ym9keSB7XHJcbiAgICB0ciB7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbnNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3VzdG9tLXNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgLmNhbGVuZGFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gIH1cclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbm5nYi1kYXRlcGlja2VyIHsgIFxyXG4gIFtuZ2JEYXRlcGlja2VyRGF5Vmlld117XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIH1cclxuICBmb250LWZhbWlseTogJHJvYm90bztcclxuICAuYnRuLWxpbmsge1xyXG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxuICB9XHJcbiAgLm5nYi1kcC13ZWVrZGF5IHtcclxuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZGluO1xyXG4gIH1cclxuICAuYnRuLWxpZ2h0IHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcm9ib3RvO1xyXG4gICAgJjpmb2N1c3tcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogJGxpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgfVxyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5maWVsZC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogJGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGNvbG9yOiAkYmctZGFyaztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBzdmcge1xyXG4gICAgZmlsbDogIzgwN2Y3ZjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG59XHJcbi5tb2RhbC1lcnJvciB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAkZXJyb3I7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4ubW9kYWwtZGVhbCB7XHJcbiAgcGFkZGluZy1yaWdodDogMCFpbXBvcnRhbnQ7XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaWNvbnMvYmdfYWN1ZXJkby5zdmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtaGVhZGVye1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtYm9keXtcclxuICAgICAgcGFkZGluZzogMnJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNlcGFyYXRlIHtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctbW9kYWwge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIGgzIHtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJGRpbjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbiAgc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICR0eHQtZ3JheTtcclxuICAgIGZvbnQtZmFtaWx5OiAkcm9ib3RvO1xyXG4gIH1cclxuXHJcbiAgLnR4dCBwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR0eHQtZ3JheTtcclxuICAgIGZvbnQtZmFtaWx5OiAkcm9ib3RvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAudHh0IHAucHJpY2V7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IzAwMDtcclxuICB9XHJcbn1cclxuLnBvc2l0aW9uU3Bpbm5lciB7XHJcbiAgcmlnaHQ6IDMzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTdweDtcclxufVxyXG4uZm9ybS1jb250cm9sOmRpc2FibGVkLCAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmNhbGVuZGFyIHtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIEBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH0gIFxyXG4gIGl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXIge1xyXG4gIGxlZnQ6IC05NXB4IWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOXB4IDBweCByZ2JhKDkzLDgzLDIzNywxKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggcmdiYSg5Myw4MywyMzcsMSk7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggOXB4IDBweCByZ2JhKDkzLDgzLDIzNywxKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/deal/deal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/deal/deal.component.ts ***!
  \**********************************************/
/*! exports provided: DealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealComponent", function() { return DealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_deal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/deal.service */ "./src/app/core/services/deal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_broker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/broker.service */ "./src/app/core/services/broker.service.ts");
/* harmony import */ var src_app_core_services_sesion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/sesion.service */ "./src/app/core/services/sesion.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_core_services_offer_selected_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/offer-selected.service */ "./src/app/core/services/offer-selected.service.ts");








let DealComponent = class DealComponent {
    constructor(dealModal, select, router, broker, sesion, ngbCalendar, dateAdapter) {
        this.dealModal = dealModal;
        this.select = select;
        this.router = router;
        this.broker = broker;
        this.sesion = sesion;
        this.ngbCalendar = ngbCalendar;
        this.dateAdapter = dateAdapter;
        this.placement = 'top';
    }
    ngOnInit() {
        // this.dealModal.companyParams()
    }
    propuesta(data) {
        // this.router.navigate(['/propuesta']);
        // this.dealModal.close();
        // const dat: NgbDate = new NgbDate.from(this.date);
        //console.log('data form', data.form.value);
        //console.log('fecha', this.dealModal.debtItem);
        this.dateAdapter.toModel(this.ngbCalendar.getToday());
        const dat = JSON.stringify(this.date.year) + '-' + JSON.stringify(this.date.month) + '-' + JSON.stringify(this.date.day);
        const datee = new Date(dat);
        console.log(datee);
        //console.log('fecha', dat);
        const body = {
            nit: this.dealModal.debtItem.nitCompany,
            idSession: this.sesion.sesionCookie,
            idUserProduct: String(this.dealModal.debtItem.numberAccount),
            productType: this.dealModal.debtItem.idProduct,
            paymentCapacity: String(data.form.value.pago),
            numberPayments: String(data.form.value.cuota),
            paymentDate: datee,
            nonPredefinedVariables: [
                {
                    prefix: 'VD',
                    value: String(this.dealModal.debBalance)
                }
            ]
        };
        this.dealModal.dealService(body);
    }
};
DealComponent.ctorParameters = () => [
    { type: src_app_core_services_deal_service__WEBPACK_IMPORTED_MODULE_2__["DealService"] },
    { type: src_app_core_services_offer_selected_service__WEBPACK_IMPORTED_MODULE_7__["OfferSelectedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_broker_service__WEBPACK_IMPORTED_MODULE_4__["BrokerService"] },
    { type: src_app_core_services_sesion_service__WEBPACK_IMPORTED_MODULE_5__["SesionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateAdapter"] }
];
DealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deal.component.scss */ "./src/app/pages/deal/deal.component.scss")).default]
    })
], DealComponent);



/***/ }),

/***/ "./src/app/pages/deal/deal.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/deal/deal.module.ts ***!
  \*******************************************/
/*! exports provided: CustomCurrencyMaskConfig, NgbDateParserFormatter, DealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyMaskConfig", function() { return CustomCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealModule", function() { return DealModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _deal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deal.component */ "./src/app/pages/deal/deal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask/src/currency-mask.config */ "./node_modules/ng2-currency-mask/src/currency-mask.config.js");
/* harmony import */ var ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_7__);








const CustomCurrencyMaskConfig = {
    align: "right",
    allowNegative: false,
    decimal: ".",
    precision: 0,
    prefix: "$ ",
    suffix: "",
    thousands: "."
};
class NgbDateParserFormatter {
}
let DealModule = class DealModule {
};
DealModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _deal_component__WEBPACK_IMPORTED_MODULE_3__["DealComponent"]
        ],
        exports: [
            _deal_component__WEBPACK_IMPORTED_MODULE_3__["DealComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_6__["CurrencyMaskModule"]
        ],
        providers: [
            { provide: ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_7__["CURRENCY_MASK_CONFIG"], useValue: CustomCurrencyMaskConfig }
        ]
    })
], DealModule);



/***/ })

}]);
//# sourceMappingURL=default~pages-agree-agree-module~pages-debts-debts-module-es2015.44d76d7434bdf698e9c5.js.map