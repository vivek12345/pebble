'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var emotion = require('emotion');
var React = require('react');
var React__default = _interopDefault(React);
var Ink = _interopDefault(require('react-ink'));
var RCalendar = _interopDefault(require('react-calendar/dist/entry.nostyle'));
var dateFns = require('date-fns');
var reactSpring = require('react-spring');
var isBrowser = _interopDefault(require('is-in-browser'));
var ReactDOM = require('react-dom');
var scrollIntoView = _interopDefault(require('scroll-into-view-if-needed'));
var Rheostat = _interopDefault(require('rheostat'));
var Mitt = _interopDefault(require('mitt'));
var debounce = _interopDefault(require('just-debounce-it'));
var rifm = require('rifm');
var reactPopper = require('react-popper');

var textEllipsis = {
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
var flexRow = {
  display: "flex",
  flexDirection: "row"
};
var flexSpaceBetween = Object.assign({}, flexRow, {
  justifyContent: "space-between",
  alignContent: "initial"
});
var flexMiddleAlign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var getPlaceholderStyle = function getPlaceholderStyle(color) {
  return {
    "::-webkit-input-placeholder": {
      color: color
    },
    "::-moz-placeholder": {
      color: color
    },
    ":-ms-input-placeholder": {
      color: color
    },
    ":-moz-placeholder": {
      color: color
    },
    "::placeholder": {
      color: color
    }
  };
};

var mixins = /*#__PURE__*/Object.freeze({
    textEllipsis: textEllipsis,
    flexRow: flexRow,
    flexSpaceBetween: flexSpaceBetween,
    flexMiddleAlign: flexMiddleAlign,
    getPlaceholderStyle: getPlaceholderStyle
});

var colors = {
  violet: {
    darker: "#4040BA",
    dark: "#5656ED",
    base: "#6161FF",
    light: "#7070FF",
    lighter: "#C0C0FF",
    lightest: "#E8E8FF"
  },
  green: {
    base: "#69C022",
    light: "#E8F6DD"
  },
  yellow: {
    base: "#F3AA07",
    light: "#FDF2DA"
  },
  blue: {
    base: "#1F69FF",
    light: "#DDE8FF"
  },
  white: {
    base: "#ffffff"
  },
  emerald: {
    darker: "#088649",
    dark: "#0E9A56",
    base: "#10AC60",
    light: "#40BD80",
    lighter: "#9DDCBE",
    lightest: "#DBF3E7"
  },
  red: {
    darker: "#A91D00",
    dark: "#BD2900",
    base: "#D32F02",
    light: "#D94C26",
    lighter: "#EFBBAD",
    lightest: "#F9E0D9"
  },
  purple: {
    base: "#9254E3",
    light: "#EFE6FB"
  },
  pink: {
    base: "#DC4276",
    light: "#FBDEE8"
  },
  teal: {
    base: "#47C1BF",
    light: "#E4F6F6"
  },
  coral: {
    base: "#ED754B",
    light: "#FDEBE4"
  },
  jade: {
    base: "#4BB952",
    light: "#E3F4E5"
  },
  gray: {
    darker: "#101721",
    dark: "#6B7785",
    base: "#9FA6B0",
    light: "#E0E0E0",
    lighter: "#EDEDED",
    lightest: "#F7F7F9"
  }
};

var constants = {
  borderRadius: 3,
  buttonHeight: 40,
  animationCurve: "cubic-bezier(.64,.09,.08,1)",
  padding: {
    base: 20,
    higher: 60
  },
  border: {
    base: "1px solid ".concat(colors.gray.light),
    light: "1px solid ".concat(colors.gray.lighter)
  },
  boxShadow: {
    base: "0 2px 7px 0 #F2F2F2",
    elevated: "0 4px 7px 0 ".concat(colors.gray.light),
    xElevated: "0 2px 15px 0 rgba(0,0,0,0.1)"
  }
};

var fontSize = {
  xs: 10,
  s: 12,
  normal: 14,
  l: 16,
  xl: 18,
  xll: 22
};
var typography = {
  xll: {
    regular: {
      fontWeight: 400
      ,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    },
    bold: {
      fontWeight: 500
      ,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    }
  },
  xl: {
    bold: {
      fontWeight: 500
      ,
      color: colors.gray.darker,
      fontSize: fontSize.xl
    }
  },
  l: {
    bold: {
      fontWeight: 500
      ,
      color: colors.gray.dark,
      fontSize: fontSize.l
    },
    light: {
      fontWeight: 400
      ,
      color: colors.gray.dark,
      fontSize: fontSize.l
    }
  },
  normal: {
    regular: {
      fontWeight: 400
      ,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    bold: {
      fontWeight: 500
      ,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    light: {
      fontWeight: 400
      ,
      color: colors.gray.dark,
      fontSize: fontSize.normal
    },
    lighter: {
      fontWeight: 400
      ,
      color: colors.gray.base,
      fontSize: fontSize.normal
    },
    link: {
      fontWeight: 400
      ,
      color: colors.violet.base,
      fontSize: fontSize.normal
    }
  },
  s: {
    regular: {
      fontWeight: 400
      ,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    bold: {
      fontWeight: 500
      ,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    light: {
      fontWeight: 400
      ,
      color: colors.gray.dark,
      fontSize: fontSize.s
    },
    lighter: {
      fontWeight: 400
      ,
      color: colors.gray.base,
      fontSize: fontSize.s
    },
    link: {
      fontWeight: 400
      ,
      color: colors.violet.base,
      fontSize: fontSize.s
    }
  },
  xs: {
    bold: {
      fontWeight: 500
      ,
      color: colors.gray.darker,
      fontSize: fontSize.xs
    },
    light: {
      fontWeight: 400
      ,
      color: colors.gray.dark,
      fontSize: fontSize.xs
    }
  }
};

var tableStyle =
/*#__PURE__*/
emotion.css(Object.assign({
  borderRadius: constants.borderRadius,
  border: constants.border.dark
}, typography.s.regular, {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: 0,
  backgroundColor: colors.gray.lightest,
  "tr:last-child": {
    td: {
      border: 0
    },
    "td:first-child": {
      borderBottomLeftRadius: constants.borderRadius
    },
    "td:last-child": {
      borderBottomRightRadius: constants.borderRadius
    }
  },
  "tr:first-child": {
    "th:first-child": {
      borderLeftLeftRadius: constants.borderRadius
    },
    "th:last-child": {
      borderLeftRightRadius: constants.borderRadius
    }
  },
  th: Object.assign({
    textAlign: "left"
  }, typography.xs.bold, {
    color: colors.gray.dark
  }),
  "tbody > tr:nth-of-type(2n + 1)": {
    backgroundColor: colors.white.base
  },
  "th, td": {
    height: 50,
    padding: "10px 25px",
    borderBottom: constants.border.dark
  }
}));
var disableScrollY =
/*#__PURE__*/
emotion.css({
  overflowY: "hidden"
});

var styles = /*#__PURE__*/Object.freeze({
    tableStyle: tableStyle,
    disableScrollY: disableScrollY
});

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var violet = colors.violet,
    gray = colors.gray,
    white = colors.white,
    red = colors.red,
    emerald = colors.emerald;
var smallButtonHeight = 40;
var commonButtonStyle =
/*#__PURE__*/
emotion.css({
  lineHeight: "23px",
  height: constants.buttonHeight,
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  transition: "all ease-out .2s",
  borderRadius: constants.borderRadius,
  outline: "none",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  whiteSpace: "nowrap",
  justifyContent: "center",
  border: 0,
  "&[disabled]": {
    cursor: "not-allowed"
  }
});
var mappingColorByType = {
  primary: {
    base: violet.base,
    hover: violet.light,
    active: violet.dark,
    disabled: violet.lighter
  },
  secondary: {
    textColor: gray.darker,
    base: gray.lighter,
    hover: gray.lightest,
    active: gray.base,
    disabled: gray.lighter
  },
  success: {
    base: emerald.base,
    hover: emerald.light,
    active: emerald.dark,
    disabled: emerald.lighter
  },
  alert: {
    base: red.base,
    hover: red.light,
    active: red.dark,
    disabled: red.lighter
  }
};
var linkStyle = {
  backgroundColor: "transparent",
  border: 0,
  color: violet.base,
  minWidth: 0,
  padding: 0,
  fontSize: 14,
  ":not([disabled]):hover": {
    textDecoration: "underline"
  },
  "&[disabled]": {
    color: violet.lighter
  }
};
var getStyleByType = function getStyleByType(type, filled) {
  if (type === "link") return linkStyle;
  var _color = mappingColorByType[type];
  var colorBase = _color.base,
      disabled = _color.disabled,
      hover = _color.hover,
      active = _color.active,
      textColor = _color.textColor;
  var defaultFontColor = filled ? textColor || white.base : colorBase;
  return {
    color: defaultFontColor,
    backgroundColor: filled ? colorBase : white.base,
    border: filled ? "none" : "1px solid ".concat(colorBase),
    "&:not([disabled]):hover": {
      color: textColor || white.base,
      backgroundColor: hover,
      borderColor: hover
    },
    "&:not([disabled]):active": {
      color: textColor || white.base,
      backgroundColor: active,
      borderColor: active
    },
    "&[disabled]": {
      color: textColor || white.base,
      backgroundColor: disabled,
      borderColor: disabled
    }
  };
};
var styleBasedOnSize = {
  "x-small": Object.assign({
    height: 25,
    minWidth: 70
  }, typography.xs.light),
  small: Object.assign({
    height: smallButtonHeight,
    minWidth: 100
  }, typography.s.regular),
  large: Object.assign({
    height: 50,
    minWidth: 140
  }, typography.normal.regular)
};
var getButtonStyle = function getButtonStyle(size, type, showShadow, filled) {
  return (
    /*#__PURE__*/
    emotion.css([commonButtonStyle, Object.assign({}, styleBasedOnSize[size], getStyleByType(type, filled), {
      boxShadow: showShadow ? constants.boxShadow.base : "none"
    })])
  );
};
var iconStyle =
/*#__PURE__*/
emotion.css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 8,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2,
  color: colors.gray.dark
});
var dropDownButtonStyle =
/*#__PURE__*/
emotion.css({
  border: constants.border.base,
  "&:not([disabled]):hover": {
    backgroundColor: colors.gray.lighter
  }
});
var dropDownButtonDefaultStyle =
/*#__PURE__*/
emotion.css({
  backgroundColor: colors.white.base,
  color: colors.gray.darker,
  "&:not([disabled]):hover": {
    backgroundColor: colors.gray.lighter
  }
});

var bounceDelay =
/*#__PURE__*/
emotion.keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)"
  },
  "40%": {
    transform: "scale(1)"
  }
});
var spinnerStyle =
/*#__PURE__*/
emotion.css(Object.assign({}, flexSpaceBetween, {
  width: 70,
  "> div": {
    width: 18,
    height: 18,
    borderRadius: "100%",
    display: "inline-block",
    animation: "".concat(bounceDelay, " 1.4s infinite ease-in-out both"),
    "&:first-of-type": {
      animationDelay: "-0.32s"
    },
    "&:nth-of-type(2n)": {
      animationDelay: "-0.16s"
    }
  }
}));

var Loader = function Loader(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.gray.darker : _ref$color,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 1 : _ref$scale,
      className = _ref.className;
  var style = {
    backgroundColor: color
  };
  return React.createElement("div", {
    className: emotion.cx(spinnerStyle, className),
    style: {
      transform: "scale(".concat(scale, ")")
    }
  }, React.createElement("div", {
    style: style
  }), React.createElement("div", {
    style: style
  }), React.createElement("div", {
    style: style
  }));
};

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "primary" : _ref$type,
      disabled = _ref.disabled,
      children = _ref.children,
      onClick = _ref.onClick,
      width = _ref.width,
      showShadow = _ref.showShadow,
      className = _ref.className,
      _ref$showRipple = _ref.showRipple,
      showRipple = _ref$showRipple === void 0 ? true : _ref$showRipple,
      loading = _ref.loading,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size;
  var disableAction = disabled || loading;
  var filled = size !== "x-small";
  var _className = emotion.cx(getButtonStyle(size, type, !!showShadow, filled), className);
  return React.createElement("button", {
    className: _className,
    onClick: !disableAction ? onClick : undefined,
    style: {
      width: width
    },
    disabled: disabled
  }, loading ? React.createElement(Loader, {
    color: colors.white.base,
    scale: 0.4
  }) : children, !disableAction && showRipple && type !== "link" && React.createElement(Ink, null));
};
var DropDownButton = function DropDownButton(_a) {
  var isOpen = _a.isOpen,
      isSelected = _a.isSelected,
      children = _a.children,
      className = _a.className,
      props = __rest(_a, ["isOpen", "isSelected", "children", "className"]);
  var _className = emotion.cx(dropDownButtonStyle, _defineProperty({}, dropDownButtonDefaultStyle, !(isOpen || isSelected)));
  return React.createElement(Button, Object.assign({}, props, {
    type: "secondary",
    className: emotion.cx(_className, className)
  }), React.createElement(React.Fragment, null, children, " ", React.createElement("i", {
    className: emotion.cx("pi pi-arrow-drop-down", iconStyle),
    style: {
      transform: isOpen ? "rotate(180deg)" : "none"
    }
  })));
};

var wrapperStyle =
/*#__PURE__*/
emotion.css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  boxShadow: constants.boxShadow.xElevated,
  overflow: "hidden",
  padding: 20,
  position: "relative"
});
var tileStyle =
/*#__PURE__*/
emotion.css(Object.assign({}, typography.normal.regular, {
  height: 48,
  width: 48,
  padding: 0,
  position: "relative",
  textAlign: "center",
  cursor: "pointer",
  outline: "none",
  backgroundColor: colors.gray.lightest,
  borderRadius: constants.borderRadius,
  display: "table",
  borderCollapse: "collapse",
  border: "1px solid ".concat(colors.white.base),
  borderLeft: 0,
  borderTop: 0,
  time: {
    fontFamily: "inherit"
  },
  "&.react-calendar__tile--now": {
    color: colors.violet.base
  },
  "&:hover": {
    backgroundColor: colors.gray.lighter
  },
  "&[disabled]": {
    color: colors.gray.base,
    "&:hover": {
      backgroundColor: colors.gray.lightest,
      cursor: "not-allowed"
    }
  },
  "&.react-calendar__tile--active": {
    backgroundColor: colors.violet.lightest,
    color: colors.violet.base
  },
  "&.react-calendar__tile--rangeStart": {
    backgroundColor: colors.violet.base,
    color: "".concat(colors.white.base, " !important")
  },
  "&.react-calendar__tile--rangeEnd": {
    backgroundColor: colors.violet.base,
    color: "".concat(colors.white.base, " !important")
  },
  "&.react-calendar__tile--singleSelect": {
    backgroundColor: colors.violet.base,
    color: colors.white.base
  },
  "&.react-calendar__month-view__days__day--neighboringMonth": {
    color: colors.gray.base
  }
}));
var dateStyle =
/*#__PURE__*/
emotion.css({
  width: 356,
  margin: 10,
  position: "relative",
  ".react-calendar__month-view__weekdays__weekday": {
    color: colors.gray.dark,
    lineSpacing: "7px",
    fontSize: 12,
    textAlign: "center"
  },
  ".react-calendar__navigation__arrow": {
    border: "1px solid ".concat(colors.gray.light),
    padding: "8px 10px",
    borderRadius: constants.borderRadius,
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    outline: "none",
    height: 40,
    width: 40,
    backgroundColor: colors.white.base,
    "&.react-calendar__navigation__prev-button": {
      position: "absolute",
      right: 47
    },
    "&:disabled": {
      cursor: "not-allowed"
    }
  },
  ".react-calendar__navigation__label": Object.assign({}, typography.xl.bold, {
    textAlign: "left",
    border: 0,
    outline: "none",
    cursor: "pointer",
    backgroundColor: colors.white.base,
    paddingLeft: 5
  }),
  ".react-calendar__month-view ": {
    marginTop: 30
  },
  ".react-calendar__month-view__weekdays": {
    marginBottom: 20
  },
  ".react-calendar__decade-view__years, .react-calendar__century-view, .react-calendar__year-view": {
    marginTop: 15
  }
});
var dotWrapper =
/*#__PURE__*/
emotion.css({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  width: "100%"
});
var dotStyle =
/*#__PURE__*/
emotion.css({
  height: 4,
  width: 4,
  display: "inline-block",
  borderRadius: constants.borderRadius,
  margin: "5px 2px 0"
});
var buttonsWrapper =
/*#__PURE__*/
emotion.css(Object.assign({}, flexSpaceBetween, {
  marginTop: 20
}));

var Calendar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Calendar, _React$PureComponent);
  function Calendar() {
    var _this;
    _classCallCheck(this, Calendar);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).apply(this, arguments));
    _this.state = {
      value: _this.props.selected,
      singleSelectedDate: null
    };
    _this.onChange = function (value) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;
      if (props.range) {
        if (Array.isArray(value) && value.length === 2) {
          _this.setState({
            value: value,
            singleSelectedDate: null
          }, function () {
            return props.onChange(value);
          });
        }
      } else {
        if (!Array.isArray(value)) {
          _this.setState({
            value: value,
            singleSelectedDate: null
          }, function () {
            return props.onChange(value);
          });
        }
      }
    };
    _this.onDayClick = function (day) {
      var onClickDay = _this.props.onClickDay;
      _this.setState({
        singleSelectedDate: [dateFns.startOfDay(day), dateFns.endOfDay(day)]
      });
      if (onClickDay) onClickDay(day);
    };
    _this.getTileContent = function (_ref) {
      var date = _ref.date;
      var dot = _this.props.tileDots.find(function (datum) {
        return !!datum.timeStamp && dateFns.isSameDay(date, datum.timeStamp);
      });
      return dot ? React.createElement("div", {
        className: dotWrapper
      }, dot.colors && dot.colors.map(function (color, i) {
        return React.createElement("span", {
          key: i,
          className: dotStyle,
          style: {
            backgroundColor: color
          }
        });
      })) : null;
    };
    _this.getDisabledDays = function (_ref2) {
      var date = _ref2.date;
      var disabledDays = _this.props.disabledDays;
      return disabledDays && disabledDays.length && disabledDays.some(function (_date) {
        return dateFns.isSameDay(_date, date);
      }) || false;
    };
    _this.onApply = function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          props = _assertThisInitialize2.props;
      var _this$state = _this.state,
          value = _this$state.value,
          singleSelectedDate = _this$state.singleSelectedDate;
      if (props.range && props.onApply) {
        if (singleSelectedDate) {
          props.onApply(singleSelectedDate);
        } else if (Array.isArray(value)) {
          props.onApply(value);
        }
      } else if (!props.range && props.onApply && !Array.isArray(value)) {
        props.onApply(value);
      }
    };
    return _this;
  }
  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          range = _a.range,
          selected = _a.selected,
          hideShadow = _a.hideShadow,
          className = _a.className,
          onApply = _a.onApply,
          onClear = _a.onClear,
          rest = __rest(_a, ["range", "selected", "hideShadow", "className", "onApply", "onClear"]);
      return React.createElement("div", {
        className: emotion.cx(wrapperStyle, _defineProperty({},
        /*#__PURE__*/
        /*#__PURE__*/
        emotion.css({
          boxShadow: "none"
        }), hideShadow), className)
      }, React.createElement(RCalendar, Object.assign({}, rest, {
        onChange: this.onChange,
        selectRange: range,
        view: "month",
        value: selected,
        next2Label: null,
        prev2Label: null,
        tileClassName: tileStyle,
        className: dateStyle,
        showNeighboringMonth: false,
        tileContent: this.getTileContent,
        tileDisabled: this.getDisabledDays,
        onClickDay: this.onDayClick,
        prevLabel: React.createElement("i", {
          style: {
            fontSize: 14
          },
          className: "pi pi-chevron-left"
        }),
        nextLabel: React.createElement("i", {
          style: {
            fontSize: 14
          },
          className: "pi pi-arrow-right"
        })
      })), (onClear || onApply) && React.createElement("div", {
        className: buttonsWrapper
      }, onClear && React.createElement(Button, {
        onClick: onClear,
        type: "secondary"
      }, "Clear"), onApply && React.createElement(Button, {
        onClick: this.onApply
      }, "Apply")));
    }
  }]);
  return Calendar;
}(React.PureComponent);
Calendar.defaultProps = {
  onChange: function onChange() {},
  tileDots: []
};

var wrapperStyle$1 =
/*#__PURE__*/
emotion.css({
  position: "relative"
});
var dropDownStyle =
/*#__PURE__*/
emotion.css({
  minWidth: 100,
  boxShadow: constants.boxShadow.xElevated,
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "absolute",
  top: "100%",
  zIndex: 999,
  transformOrigin: "top left"
});

var OutsideClick =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(OutsideClick, _React$PureComponent);
  function OutsideClick() {
    var _this;
    _classCallCheck(this, OutsideClick);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(OutsideClick).apply(this, arguments));
    _this.childRef = React.createRef();
    _this.handleClick = function (e) {
      if (_this.childRef.current && !_this.childRef.current.contains(e.target)) {
        _this.props.onOutsideClick();
      }
    };
    _this.addListener = function () {
      document.addEventListener("mousedown", _this.handleClick);
    };
    _this.removeListener = function () {
      document.removeEventListener("mousedown", _this.handleClick);
    };
    return _this;
  }
  _createClass(OutsideClick, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.disabled) {
        this.addListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.disabled !== this.props.disabled) {
        this.props.disabled ? this.removeListener() : this.addListener();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return React.createElement("div", {
        ref: this.childRef,
        className: className
      }, children);
    }
  }]);
  return OutsideClick;
}(React.PureComponent);

var animationConfig = {
  from: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  enter: {
    opacity: 1,
    transform: "scale(1)"
  },
  leave: {
    opacity: 0,
    transform: "scale(0.95)",
    pointerEvents: "none"
  },
  config: function config(_a, motion) {
    return motion === "leave" ? {
      duration: 0.1
    } : {
      duration: 200
    };
  }
};

var MountTransition = function MountTransition(props) {
  return React.createElement(reactSpring.Transition, Object.assign({
    items: props.visible
  }, animationConfig, props), function (show, state, index) {
    return show && function (styles) {
      return props.children(styles, state, index);
    };
  });
};

var DropDown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DropDown, _React$PureComponent);
  function DropDown() {
    var _this;
    _classCallCheck(this, DropDown);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).apply(this, arguments));
    _this.state = {
      isOpen: !!_this.props.initiallyOpen
    };
    _this.toggleDropdown = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };
    return _this;
  }
  _createClass(DropDown, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
          buttonLabel = _this$props.buttonLabel,
          children = _this$props.children,
          labelComponent = _this$props.labelComponent,
          padding = _this$props.padding,
          className = _this$props.className,
          dropDownClassName = _this$props.dropDownClassName,
          isSelected = _this$props.isSelected,
          disabled = _this$props.disabled,
          labelClassName = _this$props.labelClassName,
          _onOutsideClick = _this$props.onOutsideClick;
      var isOpen = this.state.isOpen;
      return React.createElement(OutsideClick, {
        className: emotion.cx(wrapperStyle$1, className),
        onOutsideClick: function onOutsideClick() {
          _this2.setState({
            isOpen: false
          });
          if (_onOutsideClick) _onOutsideClick(isOpen);
        },
        disabled: !isOpen
      }, labelComponent ? labelComponent({
        isOpen: isOpen,
        toggleDropdown: this.toggleDropdown
      }) : React.createElement(DropDownButton, {
        isSelected: !!isSelected,
        isOpen: isOpen,
        onClick: this.toggleDropdown,
        disabled: disabled,
        className: labelClassName
      }, buttonLabel), React.createElement(MountTransition, {
        visible: isOpen,
        native: true
      }, function (transitionStyles) {
        return React.createElement(reactSpring.animated.div, {
          className: emotion.cx(dropDownStyle, dropDownClassName),
          style: Object.assign({
            padding: padding
          }, transitionStyles)
        }, children({
          toggle: _this2.toggleDropdown,
          isOpen: isOpen
        }));
      }));
    }
  }]);
  return DropDown;
}(React.PureComponent);
DropDown.defaultProps = {
  closeOnOutsideClick: true
};

var animation = "all 0.3s cubic-bezier(.64,.09,.08,1)";
var inputMarginBottom = 20;
var wrapperStyle$2 =
/*#__PURE__*/
emotion.css({
  position: "relative",
  display: "flex",
  backgroundColor: colors.white.base,
  width: "100%",
  flexDirection: "column",
  marginBottom: inputMarginBottom,
  height: 68,
  "&._pebble_input_wrapper_textarea": {
    height: 110
  }
});
var inputStyle =
/*#__PURE__*/
emotion.css(Object.assign({
  outline: 0,
  border: 0,
  borderBottom: "1px solid ".concat(colors.gray.lighter),
  padding: "24px 0 12px 0",
  height: 48,
  borderRadius: 0
}, typography.normal.regular, {
  width: "100%"
}, textEllipsis, {
  "&:disabled": {
    backgroundColor: colors.white.base
  }
},
/*#__PURE__*/
getPlaceholderStyle(colors.gray.light)
));
var inputReadOnlyStyle =
/*#__PURE__*/
emotion.css({
  color: colors.gray.dark
});
var inputDisabledStyle =
/*#__PURE__*/
emotion.css({
  cursor: "not-allowed",
  pointerEvents: "none",
  color: colors.gray.base
});
var inputTextAreaStyle =
/*#__PURE__*/
emotion.css({
  height: 88,
  padding: "0 0 52px 0",
  marginTop: 22,
  resize: "none"
});
var highlightStyle =
/*#__PURE__*/
emotion.css({
  height: 2,
  backgroundColor: colors.violet.base,
  marginTop: -2,
  position: "relative",
  width: 0,
  transition: animation,
  zIndex: 9,
  "&._pebble_input_highlight_state, &._pebble_input_highlight_focused": {
    width: "100%"
  }
});
var labelStyle =
/*#__PURE__*/
emotion.css({
  color: colors.gray.base,
  fontSize: 14,
  lineHeight: "12px",
  position: "absolute",
  transition: animation,
  transform: "translate(0, 24px)",
  pointerEvents: "none",
  "&._pebble_input_label_focused": {
    fontSize: 12,
    lineHeight: "10px",
    transform: "translate(0, 0)",
    color: colors.gray.dark
  }
});
var messageStyle =
/*#__PURE__*/
emotion.css(Object.assign({}, typography.s.regular, {
  marginTop: 10,
  lineHeight: "10px",
  textAlign: "left"
}));
var loadingStyle =
/*#__PURE__*/
emotion.css({
  right: -10,
  top: 20,
  position: "absolute"
});

function getColor(error, success, isUnderlineColor) {
  var color = colors.gray.dark;
  if (error) {
    color = colors.red.base;
  } else if (success) {
    color = colors.emerald.base;
  } else if (isUnderlineColor) {
    color = colors.violet.base;
  }
  return color;
}
var Input =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);
  function Input() {
    var _this;
    _classCallCheck(this, Input);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
    _this.state = {
      isFocused: false
    };
    _this.addFocus = function () {
      _this.setState({
        isFocused: true
      });
    };
    _this.removeFocus = function () {
      _this.setState({
        isFocused: false
      });
    };
    _this.handleChange = function (e) {
      _this.props.onChange(e.target.value || "");
    };
    return _this;
  }
  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _cx;
      var _this$props = this.props,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          inputClassName = _this$props.inputClassName,
          fixLabelAtTop = _this$props.fixLabelAtTop,
          value = _this$props.value,
          readOnly = _this$props.readOnly,
          disabled = _this$props.disabled,
          errorMessage = _this$props.errorMessage,
          successMessage = _this$props.successMessage,
          message = _this$props.message,
          textArea = _this$props.textArea,
          required = _this$props.required,
          onClick = _this$props.onClick,
          loading = _this$props.loading;
      var isFocused = this.state.isFocused;
      var _message = errorMessage || successMessage || message;
      var _inputClassName = emotion.cx(inputStyle, (_cx = {}, _defineProperty(_cx, inputDisabledStyle, disabled), _defineProperty(_cx, inputReadOnlyStyle, readOnly), _defineProperty(_cx, inputTextAreaStyle, textArea), _cx), inputClassName);
      var _inputProps = {
        "aria-label": placeholder,
        className: _inputClassName,
        disabled: disabled,
        onChange: this.handleChange,
        readOnly: readOnly,
        value: value || ""
      };
      var highlightClassName = emotion.cx(highlightStyle, {
        _pebble_input_highlight_focused: isFocused,
        _pebble_input_highlight_state: !!_message,
        _pebble_input_highlight_read_only: readOnly,
        _pebble_input_highlight_disabled: disabled
      });
      var labelClassName = emotion.cx(labelStyle, {
        _pebble_input_label_focused: isFocused || !!value || fixLabelAtTop
      });
      var _wrapperStyle = emotion.cx(wrapperStyle$2, {
        _pebble_input_wrapper_textarea: textArea
      }, className);
      return React.createElement("div", {
        className: _wrapperStyle,
        onFocus: this.addFocus,
        onBlur: this.removeFocus,
        onClick: onClick
      }, this.props.textArea ? React.createElement("textarea", Object.assign({}, _inputProps, this.props.inputProps)) : React.createElement("input", Object.assign({
        type: type
      }, _inputProps, this.props.inputProps)), React.createElement("label", {
        className: labelClassName
      }, placeholder, required && React.createElement("span", {
        style: {
          color: colors.red.base
        }
      }, "\xA0*")), React.createElement("div", {
        className: highlightClassName,
        style: {
          backgroundColor: getColor(errorMessage, successMessage, true)
        }
      }), loading && React.createElement(Loader, {
        color: colors.violet.base,
        scale: 0.6,
        className: loadingStyle
      }), _message && React.createElement("div", {
        className: messageStyle,
        style: {
          color: getColor(errorMessage, successMessage)
        }
      }, _message));
    }
  }]);
  return Input;
}(React.PureComponent);
Input.defaultProps = {
  value: "",
  readOnly: false
};

var modalContainer =
/*#__PURE__*/
emotion.css({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  overflowY: "scroll",
  WebkitOverflowScrolling: "touch",
  zIndex: 99998
});

var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);
  function Modal() {
    var _this;
    _classCallCheck(this, Modal);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
    _this.node = isBrowser ? document.createElement("div") : null;
    return _this;
  }
  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.node) {
        document.body.appendChild(this.node);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.node) {
        document.body.removeChild(this.node);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.visible === this.props.visible) return;
      if (this.props.visible) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName("body")[0].style.overflow = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!isBrowser) return null;
      var _this$props = this.props,
          children = _this$props.children,
          visible = _this$props.visible,
          backDropClassName = _this$props.backDropClassName,
          modalClassName = _this$props.modalClassName;
      var node = this.node;
      return ReactDOM.createPortal(React.createElement(MountTransition, {
        visible: visible
      }, function (transitionStyles) {
        return React.createElement("div", {
          style: {
            opacity: transitionStyles.opacity
          },
          className: emotion.cx(modalContainer, backDropClassName)
        }, React.createElement("div", {
          className: emotion.cx(
          /*#__PURE__*/
          emotion.css({
            transform: transitionStyles.transform
          }), modalClassName)
        }, children));
      }), node);
    }
  }]);
  return Modal;
}(React.PureComponent);

var searchWrapperStyle =
/*#__PURE__*/
emotion.css(Object.assign({
  minWidth: "200px",
  borderRadius: constants.borderRadius,
  padding: "0 20px"
}, flexRow, {
  alignItems: "center",
  height: 40,
  "> i": {
    marginRight: 10,
    fontSize: 12
  },
  "&.__pebble__search__small": {
    backgroundColor: colors.gray.lightest
  },
  "&.__pebble__search__large": {
    backgroundColor: colors.white.base,
    height: 76,
    padding: "0 25px",
    boxShadow: constants.boxShadow.base
  },
  "&.__pebble__search__table": {
    border: "1px solid ".concat(colors.gray.light),
    backgroundColor: colors.white.base,
    i: {
      color: colors.gray.dark
    }
  }
}));
var searchStyle =
/*#__PURE__*/
emotion.css(Object.assign({
  borderRadius: constants.borderRadius,
  outline: "none",
  border: 0,
  height: "inherit",
  flexGrow: 1
}, textEllipsis, typography.s.regular,
/*#__PURE__*/
getPlaceholderStyle(colors.gray.base), {
  backgroundColor: "transparent"
}));
var clearContainer =
/*#__PURE__*/
emotion.css({
  display: "table",
  height: 16,
  width: 16,
  backgroundColor: colors.gray.light,
  fontSize: 6,
  borderRadius: 16,
  textAlign: "center",
  cursor: "pointer",
  pointerEvents: "none",
  transition: "opacity 0.3s",
  opacity: 0,
  "&.__display": {
    opacity: 1,
    pointerEvents: "unset"
  }
});

var Search =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Search, _React$PureComponent);
  function Search() {
    var _this;
    _classCallCheck(this, Search);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
    _this.searchInputRef = React.createRef();
    return _this;
  }
  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
          type = _this$props.type,
          inputProps = _this$props.inputProps,
          _onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          showSearchIcon = _this$props.showSearchIcon,
          className = _this$props.className,
          clearable = _this$props.clearable,
          value = _this$props.value;
      var wrapperClassName = emotion.cx(searchWrapperStyle, {
        __pebble__search__small: type === "small",
        __pebble__search__large: type === "large",
        __pebble__search__table: type === "table"
      });
      return React.createElement("div", {
        className: emotion.cx(wrapperClassName, className)
      }, type !== "large" && showSearchIcon && React.createElement("i", {
        className: "pi pi-search"
      }), React.createElement("input", Object.assign({
        className: searchStyle,
        type: "text",
        "aria-label": placeholder,
        placeholder: placeholder,
        onChange: function onChange(e) {
          _onChange(e.target.value);
        },
        ref: this.searchInputRef,
        value: value
      }, inputProps)), clearable && React.createElement("div", {
        className: emotion.cx(clearContainer, {
          __display: value && !!value.length
        }),
        onClick: function onClick() {
          if (_this2.searchInputRef.current) {
            _this2.searchInputRef.current.value = "";
          }
          _onChange("");
        }
      }, React.createElement("i", {
        className: "pi pi-close",
        style: {
          display: "table-cell",
          verticalAlign: "middle"
        }
      })));
    }
  }]);
  return Search;
}(React.PureComponent);
Search.defaultProps = {
  showSearchIcon: true,
  clearable: true
};

var selectWrapper =
/*#__PURE__*/
emotion.css({
  marginBottom: 20
});
var relativePosition =
/*#__PURE__*/
emotion.css({
  position: "relative"
});
var selectInputWrapper =
/*#__PURE__*/
emotion.css({
  pointerEvents: "none"
});
var selectInput =
/*#__PURE__*/
emotion.css({
  color: colors.gray.darker,
  paddingRight: 15
});
var dropDownClass =
/*#__PURE__*/
emotion.css({
  marginTop: -inputMarginBottom
});
var fullWidth =
/*#__PURE__*/
emotion.css({
  width: "100%"
});
var inputWrapper =
/*#__PURE__*/
emotion.css({
  cursor: "pointer",
  position: "relative"
});
var chevronStyle =
/*#__PURE__*/
emotion.css({
  position: "absolute",
  top: 25,
  right: 7,
  color: colors.gray.base,
  fontSize: 10,
  "&.__pebble__select__open": {
    transform: "rotate(180deg)"
  }
});

function getSelectedCheckboxes(changedValue, prevSelected) {
  var _selected = prevSelected || [];
  var cloned = _selected.slice(0);
  var index = _selected.findIndex(function (datum) {
    return datum === changedValue;
  });
  if (index >= 0) {
    cloned.splice(index, 1);
  } else {
    cloned.push(changedValue);
  }
  return cloned;
}

var optionWrapperMaxHeight = 316;
var searchBoxHeight = 80;
var initialPadding = 20;
var onScrollPadding = 10;
var optionsWrapper =
/*#__PURE__*/
emotion.css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "relative",
  width: "inherit",
  zIndex: 9,
  maxHeight: optionWrapperMaxHeight,
  minWidth: 100,
  overflowY: "auto",
  padding: "10px 1px"
});
var searchBoxWrapper =
/*#__PURE__*/
emotion.css({
  padding: initialPadding,
  boxShadow: "none",
  transition: "all 100ms linear",
  zIndex: 10,
  willChange: "padding",
  position: "absolute",
  top: 0,
  background: "white",
  width: "100%",
  boxSizing: "border-box"
});
var searchBoxScrolledStyle =
/*#__PURE__*/
emotion.css({
  boxShadow: constants.boxShadow.base,
  padding: onScrollPadding
});

var OptionGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(OptionGroup, _React$PureComponent);
  function OptionGroup() {
    var _this;
    _classCallCheck(this, OptionGroup);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionGroup).apply(this, arguments));
    _this.optionRef = React.createRef();
    _this.optionsRefsSet = new Map();
    _this.state = {
      highlighted: -1,
      isScrolled: false
    };
    _this.handleKeyPress = function (e) {
      var _this$props = _this.props,
          handleChange = _this$props.handleChange,
          isSelected = _this$props.isSelected;
      var children = React.Children.toArray(_this.props.children);
      var highlighted = _this.state.highlighted;
      var which = e.which;
      if (which === 13 && children && children[highlighted]) {
        var _ref =
        children && children[highlighted] && children[highlighted].props,
            value = _ref.value;
        handleChange({
          value: value,
          checked: !isSelected(value)
        }, e);
      }
      _this.setState(function () {
        var _highlighted = highlighted;
        if (which === 40) {
          _highlighted = Math.min(_highlighted + 1, React.Children.count(children) - 1);
        }
        if (which === 38) {
          _highlighted = Math.max(_highlighted - 1, 0);
        }
        return {
          highlighted: _highlighted
        };
      }, function () {
        var currentRef = _this.optionsRefsSet.get(highlighted);
        if (_this.optionRef.current && (which === 40 || which === 38) && currentRef && currentRef.current) {
          var element = ReactDOM.findDOMNode(currentRef.current);
          if (element) {
            scrollIntoView(element, {
              behavior: "smooth",
              boundary: _this.optionRef.current
            });
          }
        }
      });
    };
    return _this;
  }
  _createClass(OptionGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.observer = new IntersectionObserver(function (entries) {
        _this2.setState({
          isScrolled: entries[0].intersectionRatio < 0.9
        });
      }, {
        root: this.optionRef.current,
        threshold: 0.9
      });
      if (this.optionRef.current && this.optionRef.current.childNodes && this.optionRef.current.childNodes.length) {
        this.observer.observe(this.optionRef.current.childNodes[0]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
          searchBox = _this$props2.searchBox,
          children = _this$props2.children,
          multiSelect = _this$props2.multiSelect,
          className = _this$props2.className,
          isSelected = _this$props2.isSelected,
          handleChange = _this$props2.handleChange,
          searchBoxProps = _this$props2.searchBoxProps;
      var _this$state = this.state,
          isScrolled = _this$state.isScrolled,
          highlighted = _this$state.highlighted;
      var _children = React.Children.map(children, function (_option, i) {
        var option = _option;
        var ref = _this3.optionsRefsSet.get(i);
        if (!ref) {
          ref = React.createRef();
          _this3.optionsRefsSet.set(i, ref);
        }
        return React.cloneElement(option, {
          onChange: handleChange,
          isActive: highlighted === i,
          isSelected: isSelected(option.props.value),
          multiSelect: multiSelect,
          ref: ref
        });
      });
      var searchBoxClassName = emotion.cx(searchBoxWrapper, _defineProperty({}, searchBoxScrolledStyle, isScrolled));
      return React.createElement(React.Fragment, null, searchBox && searchBoxProps && React.createElement("div", {
        className: searchBoxClassName
      }, React.createElement(Search, Object.assign({
        type: "small"
      }, searchBoxProps, {
        inputProps: Object.assign({}, searchBoxProps && searchBoxProps.inputProps, {
          onKeyDown: this.handleKeyPress,
          autoFocus: true
        })
      }))), !!React.Children.count(children) && React.createElement("div", {
        ref: this.optionRef,
        style: {
          paddingTop: searchBox ? searchBoxHeight : undefined
        },
        className: emotion.cx(optionsWrapper, className),
        role: multiSelect ? "group" : "radiogroup",
        "data-test-id": "optiongroup"
      }, _children));
    }
  }]);
  return OptionGroup;
}(React.PureComponent);

var optionGroupCheckBoxButtonWrapPadding = 20;
var optionGroupCheckBoxButtonWrapPaddingTop = 10;
var optionGroupCheckBoxWrap =
/*#__PURE__*/
emotion.css({
  maxHeight: "".concat(optionWrapperMaxHeight + searchBoxHeight + 2 * (initialPadding - onScrollPadding) + optionGroupCheckBoxButtonWrapPadding + optionGroupCheckBoxButtonWrapPaddingTop + smallButtonHeight),
  position: "relative"
});
var optionGroupCheckBoxButtonWrap =
/*#__PURE__*/
emotion.css(Object.assign({}, flexSpaceBetween, {
  padding: "".concat(optionGroupCheckBoxButtonWrapPadding),
  paddingTop: "".concat(optionGroupCheckBoxButtonWrapPaddingTop),
  backgroundColor: colors.white.base
}));

var OptionGroupCheckBox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(OptionGroupCheckBox, _React$PureComponent);
  function OptionGroupCheckBox() {
    var _this;
    _classCallCheck(this, OptionGroupCheckBox);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionGroupCheckBox).apply(this, arguments));
    _this.isSelected = function (value) {
      var selected = _this.props.selected;
      return !!selected && selected.includes(value);
    };
    _this.handleChange = function (_ref, event) {
      var value = _ref.value;
      _this.props.onChange(getSelectedCheckboxes(value, _this.props.selected), {
        props: _this.props,
        event: event
      });
    };
    _this.onApply = function () {
      var _this$props = _this.props,
          onApply = _this$props.onApply,
          selected = _this$props.selected;
      if (onApply) onApply(selected || [], _this.props);
    };
    return _this;
  }
  _createClass(OptionGroupCheckBox, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          onApply = _a.onApply,
          onClear = _a.onClear,
          isSelected = _a.isSelected,
          onChange = _a.onChange,
          rest = __rest(_a, ["onApply", "onClear", "isSelected", "onChange"]);
      return React.createElement("div", {
        className: optionGroupCheckBoxWrap
      }, React.createElement(OptionGroup, Object.assign({}, rest, {
        isSelected: isSelected || this.isSelected,
        handleChange: this.handleChange,
        multiSelect: true
      })), (onApply || onClear) && React.createElement("div", {
        className: optionGroupCheckBoxButtonWrap
      }, onClear && React.createElement(Button, {
        type: "secondary",
        onClick: onClear
      }, "Clear"), onApply && React.createElement(Button, {
        onClick: this.onApply
      }, "Apply")));
    }
  }]);
  return OptionGroupCheckBox;
}(React.PureComponent);

var OptionGroupRadio =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(OptionGroupRadio, _React$PureComponent);
  function OptionGroupRadio() {
    var _this;
    _classCallCheck(this, OptionGroupRadio);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionGroupRadio).apply(this, arguments));
    _this.isSelected = function (value) {
      return _this.props.selected === value;
    };
    _this.handleChange = function (_ref, event) {
      var value = _ref.value,
          checked = _ref.checked;
      var onChange = _this.props.onChange;
      onChange(checked ? value : undefined, {
        props: _this.props,
        event: event
      });
    };
    return _this;
  }
  _createClass(OptionGroupRadio, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          selected = _a.selected,
          onChange = _a.onChange,
          isSelected = _a.isSelected,
          rest = __rest(_a, ["selected", "onChange", "isSelected"]);
      return React.createElement(OptionGroup, Object.assign({}, rest, {
        isSelected: isSelected || this.isSelected,
        handleChange: this.handleChange
      }));
    }
  }]);
  return OptionGroupRadio;
}(React.PureComponent);

function noop() {}
function Select(props) {
  var className = props.className,
      placeholder = props.placeholder,
      required = props.required,
      errorMessage = props.errorMessage,
      value = props.value,
      dropdownClassName = props.dropdownClassName,
      inputProps = props.inputProps,
      fullWidthDropdown = props.fullWidthDropdown,
      _props$onDropdownTogg = props.onDropdownToggle,
      onDropdownToggle = _props$onDropdownTogg === void 0 ? noop : _props$onDropdownTogg,
      disabled = props.disabled,
      isSelected = props.isSelected;
  return React.createElement("div", {
    className: emotion.cx(selectWrapper, className, _defineProperty({}, relativePosition, fullWidthDropdown))
  }, React.createElement(DropDown, {
    dropDownClassName: emotion.cx(dropDownClass, dropdownClassName, _defineProperty({}, fullWidth, fullWidthDropdown)),
    onOutsideClick: function onOutsideClick(isOpen) {
      return onDropdownToggle(isOpen);
    },
    labelComponent: function labelComponent(_ref) {
      var toggleDropdown = _ref.toggleDropdown,
          isOpen = _ref.isOpen;
      var chevron = emotion.cx(chevronStyle, "pi", "pi-arrow-drop-down", {
        __pebble__select__open: isOpen
      });
      return React.createElement("div", {
        className: inputWrapper,
        onClick: disabled ? undefined : function () {
          toggleDropdown();
          onDropdownToggle(isOpen);
        }
      }, React.createElement(Input, Object.assign({
        className: selectInputWrapper,
        inputClassName: selectInput,
        placeholder: placeholder,
        value: value || "",
        onChange: noop,
        required: required,
        message: isOpen ? " " : "",
        errorMessage: errorMessage,
        readOnly: true,
        disabled: disabled
      }, inputProps)), React.createElement("i", {
        className: chevron
      }));
    }
  }, function (_ref2) {
    var toggle = _ref2.toggle,
        isOpen = _ref2.isOpen;
    var children = props.children,
        onClear = props.onClear,
        searchBox = props.searchBox,
        searchBoxProps = props.searchBoxProps;
    var commonProps = {
      isSelected: isSelected,
      onClear: onClear && function () {
        onClear();
        onDropdownToggle(isOpen);
        toggle();
      },
      searchBox: searchBox,
      searchBoxProps: searchBoxProps
    };
    if (props.multiSelect) {
      return React.createElement(OptionGroupCheckBox, Object.assign({
        selected: props.selected,
        onChange: function onChange(_value, extras) {
          props.onChange(_value, extras);
        },
        onApply: props.onApply && function (_value) {
          if (props.onApply) props.onApply(_value, props);
          onDropdownToggle(isOpen);
          toggle();
        }
      }, commonProps), children);
    } else {
      return React.createElement(OptionGroupRadio, Object.assign({
        selected: props.selected,
        onChange: function onChange(_value, extras) {
          if (_value) props.onChange(_value, extras);
          onDropdownToggle(isOpen);
          toggle();
        }
      }, commonProps), children);
    }
  }));
}

var sidebarWrapperStyle =
/*#__PURE__*/
emotion.css({
  backgroundColor: "rgba(16,23,33,0.3)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 99
});
var closeStyle =
/*#__PURE__*/
emotion.css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  marginLeft: -60,
  marginTop: 20,
  position: "absolute",
  i: {
    fontSize: 14,
    color: colors.gray.darker
  },
  "@media (max-width: 800px)": {
    left: 80,
    marginTop: -45,
    borderRadius: 0,
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 20px",
    i: {
      float: "right",
      color: colors.gray.dark,
      fontSize: 14
    }
  }
});
var sidebarStyle =
/*#__PURE__*/
emotion.css({
  transition: "transform 200ms ".concat(constants.animationCurve),
  backgroundColor: colors.white.base,
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  willChange: "transform",
  zIndex: 99,
  "@media (max-width: 800px)": {
    width: "100%",
    paddingTop: 50
  },
  webkitOverflowScrolling: "touch"
});

var transitionProps = {
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  }
};
var SideBar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SideBar, _React$PureComponent);
  function SideBar() {
    _classCallCheck(this, SideBar);
    return _possibleConstructorReturn(this, _getPrototypeOf(SideBar).apply(this, arguments));
  }
  _createClass(SideBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) document.body.classList.add(disableScrollY);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isOpen) {
        document.body.classList.add(disableScrollY);
      } else {
        document.body.classList.remove(disableScrollY);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.isOpen) {
        document.body.classList.remove(disableScrollY);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          isOpen = _this$props.isOpen,
          children = _this$props.children,
          onClose = _this$props.onClose,
          closeOnOutsideClick = _this$props.closeOnOutsideClick;
      var _sidebarOverride =
      /*#__PURE__*/
      emotion.css({
        width: width,
        transform: isOpen ? "translateX(0)" : "translateX(".concat(width, "px)")
      });
      var _sidebarStyle = emotion.cx(_sidebarOverride, sidebarStyle,
      /*#__PURE__*/
      emotion.css({
        transform: isOpen ? "translateX(0)" : "translateX(100%)"
      }));
      return React.createElement(React.Fragment, null, React.createElement(reactSpring.Transition, Object.assign({
        items: isOpen
      }, transitionProps, {
        config: animationConfig.config
      }), function (show) {
        return show && function (styles) {
          return React.createElement(reactSpring.animated.div, {
            style: styles,
            className: sidebarWrapperStyle
          });
        };
      }), React.createElement(OutsideClick, {
        onOutsideClick: this.props.onClose,
        disabled: !closeOnOutsideClick || !isOpen
      }, React.createElement("div", {
        className: _sidebarStyle
      }, React.createElement(reactSpring.Transition, Object.assign({
        items: isOpen
      }, transitionProps), function (show) {
        return show && function (styles) {
          return React.createElement(reactSpring.animated.div, {
            style: styles,
            className: closeStyle,
            onClick: onClose
          }, React.createElement("i", {
            className: "pi pi-close"
          }), React.createElement(Ink, null));
        };
      }), React.createElement("div", {
        style: {
          overflowY: "scroll",
          height: "100vh"
        }
      }, children))));
    }
  }]);
  return SideBar;
}(React.PureComponent);
SideBar.defaultProps = {
  closeOnOutsideClick: true
};

var rheostatOverrides = "\n.rheostat {\n  overflow: visible;\n}\n\n.rheostat-background {\n  background-color: ".concat(colors.violet.lightest, ";\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n  height: 4px;\n  top: 0;\n  width: 100%;\n}\n\n.rheostat-progress {\n  background-color: ").concat(colors.violet.base, ";\n  position: absolute;\n  height: 4px;\n  border-radius: 2px;\n  top: 0;\n}\n\n.rheostat-handle {\n  background-color: ").concat(colors.violet.base, ";\n  border-radius: 50%;\n  height: 20px;\n  outline: none;\n  z-index: 2;\n  width: 20px;\n  margin-left: -10px;\n  top: -8px;\n  border: 0;\n  cursor: pointer;\n  box-shadow: ").concat(constants.boxShadow.xElevated, ";\n}\n\n.__pebble__slider__large .rheostat-handle {\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  top: -10px;\n}\n\n.rheostat-handle:hover {\n  background-color: ").concat(colors.violet.light, ";\n}\n\n.__pebble__slider__disabled .rheostat-handle {\n  background-color: ").concat(colors.violet.lighter, ";\n  cursor: inherit;\n}\n\n.rheostat-horizontal {\n  height: 4px;\n}\n");
var sliderHeader =
/*#__PURE__*/
emotion.css(Object.assign({}, flexSpaceBetween, {
  marginBottom: 25,
  alignItems: "center",
  ".__pebble__slider__large &": {
    marginBottom: 35
  }
}));

var rheostatStylesOverriden = false;
function overrideRheostatStyles() {
  if (rheostatStylesOverriden) return;
  emotion.injectGlobal(rheostatOverrides);
  rheostatStylesOverriden = true;
}
var Slider = function Slider(_a) {
  var className = _a.className,
      large = _a.large,
      title = _a.title,
      disabled = _a.disabled,
      valueLabelExtractor = _a.valueLabelExtractor,
      values = _a.values,
      onValuesUpdated = _a.onValuesUpdated,
      rest = __rest(_a, ["className", "large", "title", "disabled", "valueLabelExtractor", "values", "onValuesUpdated"]);
  overrideRheostatStyles();
  var mainClass = emotion.cx(className, {
    __pebble__slider__disabled: disabled,
    __pebble__slider__large: large
  });
  var _values = Array.isArray(values) ? values.slice(0) : values || [];
  if (Array.isArray(values)) {
    if (!values[0] && rest.min) {
      _values[0] = rest.min;
    }
    if (!values[1] && rest.max) {
      _values[1] = rest.max;
    }
  }
  return React.createElement("div", {
    className: mainClass
  }, React.createElement("div", {
    className: sliderHeader
  }, React.createElement("div", {
    style: large ? typography.normal.light : typography.normal.light
  }, title), React.createElement("div", {
    style: large ? typography.l.regular : typography.normal.regular
  }, valueLabelExtractor())), React.createElement(Rheostat, Object.assign({
    "aria-valuemax": rest.max,
    "aria-valuemin": rest.min,
    disabled: disabled,
    onValuesUpdated: onValuesUpdated && function (args) {
      var min = args.min,
          max = args.max;
      if (Array.isArray(args.values) && args.values[0] === rest.min && args.values[1] === rest.max) {
        onValuesUpdated({
          min: min,
          max: max,
          values: []
        });
      } else {
        onValuesUpdated(args);
      }
    },
    values: _values
  }, rest)));
};

var headStyle =
/*#__PURE__*/
emotion.css({
  display: "flex",
  flexDirection: "row",
  position: "relative"
});
var headSection =
/*#__PURE__*/
emotion.css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "> div": {
    fontSize: 14
  }
});
var headingStyle =
/*#__PURE__*/
emotion.css(Object.assign({}, typography.normal.regular));
var dotStyle$1 =
/*#__PURE__*/
emotion.css({
  height: 20,
  width: 20,
  backgroundColor: colors.gray.base,
  borderRadius: "50%",
  border: "5px solid white",
  marginTop: 18,
  position: "relative",
  zIndex: 9
});
var activeDotStyle =
/*#__PURE__*/
emotion.css({
  backgroundColor: colors.violet.base
});
var contentWrapper =
/*#__PURE__*/
emotion.css({
  marginTop: -10
});
var footerStyle =
/*#__PURE__*/
emotion.css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 50
});
var stepperLineStyle =
/*#__PURE__*/
emotion.css({
  height: 2,
  bottom: 9,
  position: "absolute",
  transition: "width 100ms ease-out",
  backgroundColor: colors.violet.base
});

function noop$1() {}
var Stepper =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Stepper, _React$PureComponent);
  function Stepper() {
    var _this;
    _classCallCheck(this, Stepper);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stepper).apply(this, arguments));
    _this.state = {
      active: _this.props.initialSelectedIndex || 0
    };
    _this.goToNextPage =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$props, onBeforeNext, data, allow;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, onBeforeNext = _this$props.onBeforeNext, data = _this$props.data;
              _context.next = 3;
              return onBeforeNext(_this.state.active);
            case 3:
              allow = _context.sent;
              if (allow) _this.goToPage(Math.min(data.length - 1, _this.state.active + 1));
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.goToPrevPage =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var allow;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.props.onBeforePrev(_this.state.active);
            case 2:
              allow = _context2.sent;
              if (allow) _this.goToPage(Math.max(0, _this.state.active - 1));
            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    _this.goToPage = function (index) {
      var prev = _this.state.active;
      _this.setState({
        active: index
      }, function () {
        return _this.props.onChange({
          prev: prev,
          current: _this.state.active
        });
      });
    };
    _this.getHeadings = function () {
      var _this$props2 = _this.props,
          headingExtractor = _this$props2.headingExtractor,
          data = _this$props2.data;
      return data.map(function (datum) {
        return headingExtractor({
          item: datum
        });
      });
    };
    _this.getLeftButtonData = function () {
      var _this$props3 = _this.props,
          cancelLabel = _this$props3.cancelLabel,
          prevLabel = _this$props3.prevLabel,
          onCancel = _this$props3.onCancel;
      return _this.state.active === 0 ? {
        label: cancelLabel,
        action: onCancel
      } : {
        label: prevLabel,
        action: _this.goToPrevPage
      };
    };
    _this.getRightButtonData = function () {
      var _this$props4 = _this.props,
          nextLabel = _this$props4.nextLabel,
          onDone = _this$props4.onDone,
          data = _this$props4.data,
          doneLabel = _this$props4.doneLabel;
      return _this.state.active === data.length - 1 ? {
        label: doneLabel,
        action: onDone
      } : {
        label: nextLabel,
        action: _this.goToNextPage
      };
    };
    return _this;
  }
  _createClass(Stepper, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props5 = this.props,
          data = _this$props5.data,
          renderContentElement = _this$props5.renderContentElement,
          keyExtractor = _this$props5.keyExtractor,
          renderFooterElement = _this$props5.renderFooterElement,
          className = _this$props5.className,
          allowSkip = _this$props5.allowSkip;
      var active = this.state.active;
      var args = {
        goToNext: this.goToNextPage,
        goToPage: this.goToPage,
        goToPrev: this.goToPrevPage,
        leftButtonData: this.getLeftButtonData(),
        rightButtonData: this.getRightButtonData()
      };
      return React.createElement("div", {
        className: className
      }, React.createElement("div", {
        className: headStyle
      }, this.getHeadings().map(function (heading, i) {
        var dotClass = emotion.cx(dotStyle$1, _defineProperty({}, activeDotStyle, i <= active));
        var headingColor = i === active ? colors.violet.base : allowSkip ? colors.gray.base : undefined;
        return React.createElement("div", {
          key: keyExtractor(data[i]),
          className: emotion.cx(headSection, _defineProperty({},
          /*#__PURE__*/
          /*#__PURE__*/
          emotion.css({
            cursor: "inherit"
          }), !allowSkip)),
          onClick: allowSkip ? function () {
            return _this2.goToPage(i);
          } : noop$1
        }, React.createElement("div", {
          className: headingStyle,
          style: {
            color: headingColor
          }
        }, heading), React.createElement("div", {
          className: dotClass
        }));
      }), React.createElement("div", {
        className: stepperLineStyle,
        style: {
          width: "".concat(100 / (2 * data.length) * 2 * active, "%"),
          marginLeft: "".concat(100 / (2 * data.length), "%")
        }
      })), React.createElement("div", {
        className: contentWrapper
      }, data.map(function (datum, i) {
        return React.createElement("div", {
          key: keyExtractor(datum),
          className: emotion.cx(_defineProperty({},
          /*#__PURE__*/
          /*#__PURE__*/
          emotion.css({
            display: "none"
          }), i !== _this2.state.active))
        }, renderContentElement(Object.assign({
          item: datum,
          isSelected: i === _this2.state.active
        }, args)));
      }), renderFooterElement(Object.assign({
        activeIndex: this.state.active
      }, args), this.props)));
    }
  }]);
  return Stepper;
}(React.PureComponent);
Stepper.defaultProps = {
  allowSkip: true,
  cancelLabel: "Cancel",
  nextLabel: "Next",
  prevLabel: "Prev",
  doneLabel: "Done",
  onBeforeNext: function onBeforeNext() {
    return true;
  },
  onBeforePrev: function onBeforePrev() {
    return true;
  },
  onChange: function onChange() {},
  onCancel: function onCancel() {},
  onDone: function onDone() {},
  renderFooterElement: function renderFooterElement(_ref3, props) {
    var leftButtonData = _ref3.leftButtonData,
        rightButtonData = _ref3.rightButtonData;
    return React.createElement("footer", {
      className: footerStyle
    }, React.createElement(Button, {
      size: "large",
      width: 100,
      type: "secondary",
      onClick: leftButtonData.action
    }, leftButtonData.label), React.createElement(Button, {
      size: "large",
      width: 100,
      loading: props.isRightButtonLoading,
      onClick: rightButtonData.action
    }, rightButtonData.label));
  }
};

var tagStyle =
/*#__PURE__*/
emotion.css(Object.assign({}, typography.s.bold, flexSpaceBetween, {
  borderRadius: constants.borderRadius,
  padding: "0 10px",
  height: 28,
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex",
  lineHeight: "10px",
  "&.__pebble__tag__with__close": {
    paddingRight: 0
  }
}));
var iconClass =
/*#__PURE__*/
emotion.css({
  fontSize: 7,
  marginLeft: 5,
  height: "inherit",
  padding: "10px 10px",
  cursor: "pointer",
  position: "relative",
  ":hover": {
    backgroundColor: colors.violet.lighter,
    borderTopRightRadius: constants.borderRadius,
    borderBottomRightRadius: constants.borderRadius
  }
});

var Tag = function Tag(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onClose = _ref.onClose,
      className = _ref.className;
  var wrapperClassName = emotion.cx(tagStyle, {
    __pebble__tag__with__close: !!onClose
  });
  var _className = emotion.cx(wrapperClassName, className);
  return React.createElement("div", {
    className: _className,
    style: {
      color: colors[color].base,
      backgroundColor: colors[color].lightest || colors[color].light
    }
  }, label, " ", onClose && React.createElement("i", {
    onClick: onClose,
    className: emotion.cx("pi", "pi-close", iconClass)
  }, React.createElement(Ink, null)));
};

var toastWrapper =
/*#__PURE__*/
emotion.css(Object.assign({
  position: "fixed",
  bottom: 50,
  borderRadius: constants.borderRadius
}, typography.normal.regular, {
  color: colors.white.base,
  height: 46,
  display: "flex",
  alignItems: "center",
  padding: 20,
  zIndex: 99999,
  left: "50%",
  "> i": {
    marginRight: 10
  }
}));

var emitter =
/*#__PURE__*/
new Mitt();
var _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};
var Toast =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Toast, _React$PureComponent);
  function Toast() {
    var _this;
    _classCallCheck(this, Toast);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
    _this.state = {
      text: "",
      type: "success",
      show: false
    };
    _this.show = function (_ref) {
      var text = _ref.text,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? "success" : _ref$type,
          time = _ref.time;
      _this.setState({
        text: text,
        type: type,
        show: true
      });
      if (_this.showTimer) {
        clearTimeout(_this.showTimer);
        _this.showTimer = null;
      }
      _this.showTimer = window.setTimeout(function () {
        return _this.setState({
          show: false
        });
      }, time ? time : _this.props.defaultTime || 5000);
    };
    _this.hide = function () {
      return _this.setState({
        show: false
      });
    };
    return _this;
  }
  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      emitter.on("showToast", this.show);
      emitter.on("hideToast", this.hide);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      emitter.off("showToast", this.show);
      emitter.off("hideToast", this.hide);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var bColor = _colors[this.state.type];
      var iconClass = emotion.cx("pi", {
        "pi-radio-check-filled": this.state.type === "success",
        "pi-close-circle-filled": this.state.type === "error"
      });
      return React.createElement(reactSpring.Transition, {
        native: true,
        items: this.state.show,
        from: {
          opacity: 0,
          transform: "translateX(-50%) translateY(10px)"
        },
        enter: {
          opacity: 1,
          transform: "translateX(-50%) translateY(0)"
        },
        leave: {
          opacity: 0,
          transform: "translateX(-50%) translateY(10px)",
          pointerEvents: "none"
        },
        config: animationConfig.config
      }, function (show) {
        return show && function (styles) {
          return React.createElement(reactSpring.animated.div, {
            className: emotion.cx(toastWrapper, _this2.props.className),
            style: Object.assign({
              backgroundColor: bColor
            }, styles)
          }, React.createElement("i", {
            className: iconClass
          }), _this2.state.text);
        };
      });
    }
  }], [{
    key: "show",
    value: function show(text, type, time) {
      emitter.emit("showToast", {
        text: text,
        type: type,
        time: time
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      emitter.emit("hideToast");
    }
  }]);
  return Toast;
}(React.PureComponent);

var wrapper =
/*#__PURE__*/
emotion.css({
  position: "relative"
});
var optionsWrapper$1 =
/*#__PURE__*/
emotion.css({
  width: "100%",
  position: "absolute",
  marginTop: -40,
  zIndex: 999,
  boxShadow: constants.boxShadow.elevated,
  transformOrigin: "0 0"
});

function defaultSearchBox(_ref, props) {
  var registerChange = _ref.registerChange,
      onFocus = _ref.onFocus,
      value = _ref.value;
  return React.createElement(Input, {
    onChange: registerChange,
    placeholder: props.placeholder,
    inputProps: {
      onFocus: onFocus,
      onKeyDown: function onKeyDown(e) {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        if (e.keyCode === 8 && props.selected) {
          registerChange("");
          props.onClear();
        }
      }
    },
    value: value,
    errorMessage: props.errorMessage,
    loading: props.loading,
    required: props.required,
    disabled: props.disabled
  });
}
var TypeAhead =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TypeAhead, _React$PureComponent);
  function TypeAhead() {
    var _this;
    _classCallCheck(this, TypeAhead);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TypeAhead).apply(this, arguments));
    _this.state = {
      value: _this.props.initialValue || "",
      showSuggestions: false
    };
    _this.onChange = function () {
      _this.props.onChange(_this.state.value, _this.props);
    };
    _this.debouncedChange = debounce(_this.onChange, _this.props.debounceTime);
    _this.registerChange = function (value) {
      _this.setState({
        value: value
      }, _this.debouncedChange);
    };
    _this.onFocus = function () {
      _this.setState({
        showSuggestions: true
      });
    };
    _this.onSelect = function (_value) {
      _this.props.onSelect(_value, _this.props);
      _this.setState({
        showSuggestions: false,
        value: _value && _this.props.valueExtractor(_value) || ""
      });
    };
    return _this;
  }
  _createClass(TypeAhead, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$searchBox = _this$props.searchBox,
          searchBox = _this$props$searchBox === void 0 ? defaultSearchBox : _this$props$searchBox,
          dropdownClassName = _this$props.dropdownClassName,
          children = _this$props.children;
      var _this$state = this.state,
          showSuggestions = _this$state.showSuggestions,
          value = _this$state.value;
      return React.createElement(OutsideClick, {
        onOutsideClick: function onOutsideClick() {
          return _this2.setState({
            showSuggestions: false
          });
        },
        disabled: !showSuggestions,
        className: emotion.cx(wrapper, className)
      }, searchBox({
        registerChange: this.registerChange,
        onFocus: this.onFocus,
        value: value
      }, this.props), React.createElement(MountTransition, {
        visible: showSuggestions,
        native: true
      }, function (transitionStyles) {
        return React.createElement(reactSpring.animated.div, {
          style: transitionStyles,
          className: emotion.cx(optionsWrapper$1, dropdownClassName)
        }, React.createElement(OptionGroupRadio, {
          onChange: _this2.onSelect
        }, children));
      }));
    }
  }]);
  return TypeAhead;
}(React.PureComponent);
TypeAhead.defaultProps = {
  debounceTime: 500,
  onClear: function onClear() {}
};

var dateClass =
/*#__PURE__*/
emotion.css({
  padding: 20,
  width: "100%"
});
var dropDownClassName =
/*#__PURE__*/
emotion.css({
  marginTop: -inputMarginBottom
});

var NativeDateInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(NativeDateInput, _React$PureComponent);
  function NativeDateInput() {
    var _this;
    _classCallCheck(this, NativeDateInput);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(NativeDateInput).apply(this, arguments));
    _this.onDateInputChange = function (value) {
      var date = dateFns.parse(value);
      _this.props.onChange(date && date.getTime());
    };
    return _this;
  }
  _createClass(NativeDateInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inputProps = _this$props.inputProps,
          placeholder = _this$props.placeholder,
          value = _this$props.value;
      return React.createElement(Input, Object.assign({
        onChange: this.onDateInputChange,
        type: "date"
        ,
        value: value && dateFns.format(value, "YYYY-MM-DD"),
        placeholder: placeholder,
        fixLabelAtTop: true
      }, inputProps));
    }
  }]);
  return NativeDateInput;
}(React.PureComponent);

var defaultContext = {
  userAgent: ""
};
var UserAgentInfoContext =
/*@__PURE__*/
React.createContext(defaultContext);
function computeUserAgentInfo(userAgent) {
  return {
    userAgent: userAgent
  };
}
var UserAgentInfoProvider =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(UserAgentInfoProvider, _React$PureComponent);
  function UserAgentInfoProvider(props) {
    var _this;
    _classCallCheck(this, UserAgentInfoProvider);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserAgentInfoProvider).call(this, props));
    if (typeof navigator !== "undefined" && navigator.userAgent) {
      _this.state = computeUserAgentInfo(navigator.userAgent);
    } else if (props.userAgent) {
      _this.state = computeUserAgentInfo(props.userAgent);
    } else {
      _this.state = defaultContext;
    }
    return _this;
  }
  _createClass(UserAgentInfoProvider, [{
    key: "render",
    value: function render() {
      return React.createElement(UserAgentInfoContext.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return UserAgentInfoProvider;
}(React.PureComponent);

var noop$2 = function noop() {};
function dateFormat(str) {
  var clean = str.replace(/[^\d]+/gi, "");
  var chars = clean.split("");
  return chars.reduce(function (r, v, index) {
    return "".concat(r).concat(v).concat(index === 1 || index === 3 ? "/" : "").substr(0, 10);
  }, "");
}
var DateInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DateInput, _React$PureComponent);
  function DateInput() {
    var _this;
    _classCallCheck(this, DateInput);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).apply(this, arguments));
    _this.state = {
      stringInput: ""
    };
    _this.onCalendarDateChange = function (date) {
      _this.props.onChange(date.getTime());
    };
    _this.onInputChange = function (input) {
      _this.setState({
        stringInput: input
      });
      if (input.length === 10) {
        var date = dateFns.startOfDay(new Date());
        date.setFullYear(parseInt(input.substr(6, 4), 10), parseInt(input.substr(3, 5), 10) - 1, parseInt(input.substr(0, 2), 10));
        _this.props.onChange(date.getTime());
      }
    };
    return _this;
  }
  _createClass(DateInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
          calendarProps = _this$props.calendarProps,
          inputProps = _this$props.inputProps,
          placeholder = _this$props.placeholder,
          propsValue = _this$props.value;
      return React.createElement(DropDown, {
        dropDownClassName: dropDownClassName,
        labelComponent: function labelComponent(_ref) {
          var toggleDropdown = _ref.toggleDropdown;
          return React.createElement(rifm.Rifm, {
            value: _this2.state.stringInput,
            onChange: _this2.onInputChange,
            format: dateFormat
          }, function (_ref2) {
            var value = _ref2.value,
                onChange = _ref2.onChange;
            return React.createElement(Input, Object.assign({
              onChange: noop$2,
              type: "tel",
              value: value,
              placeholder: "".concat(placeholder, " DD/MM/YYYY"),
              onClick: toggleDropdown,
              fixLabelAtTop: true
            }, inputProps, {
              inputProps: Object.assign({
                placeholder: "DD/MM/YYYY"
              }, inputProps && inputProps.inputProps, {
                onChange: onChange
              })
            }));
          });
        }
      }, function (_ref3) {
        var toggle = _ref3.toggle;
        return React.createElement(Calendar, Object.assign({
          hideShadow: true,
          className: dateClass,
          selected: propsValue ? new Date(propsValue) : undefined
        }, calendarProps, {
          range: false,
          onChange: function onChange(date) {
            _this2.onCalendarDateChange(date);
            toggle();
          }
        }));
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newState = null;
      if (props.value && props.value !== state.propsValue) {
        newState = {
          propsValue: props.value,
          stringInput: props.value && dateFns.format(props.value, "DD/MM/YYYY") || ""
        };
      }
      return newState;
    }
  }]);
  return DateInput;
}(React.PureComponent);
function checkDateInputSupport() {
  try {
    var input = document.createElement("input");
    var type = "date";
    input.setAttribute("type", "date");
    input.value = "\x01";
    return input.type === type && (input.value !== "\x01" || !input.checkValidity());
  } catch (e) {
    return true;
  }
}
var hasDateInputSupport =
/*@__PURE__*/
checkDateInputSupport();
var BrowserBasedDateInput =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(BrowserBasedDateInput, _React$PureComponent2);
  function BrowserBasedDateInput() {
    _classCallCheck(this, BrowserBasedDateInput);
    return _possibleConstructorReturn(this, _getPrototypeOf(BrowserBasedDateInput).apply(this, arguments));
  }
  _createClass(BrowserBasedDateInput, [{
    key: "render",
    value: function render() {
      var _this3 = this;
      return React.createElement(UserAgentInfoContext.Consumer, null, function (_ref4) {
        var userAgent = _ref4.userAgent;
        if (/Android|iPhone|iPad/i.test(userAgent) && hasDateInputSupport) {
          return React.createElement(NativeDateInput, _this3.props);
        }
        return React.createElement(DateInput, _this3.props);
      });
    }
  }]);
  return BrowserBasedDateInput;
}(React.PureComponent);
BrowserBasedDateInput.contextType = UserAgentInfoContext;

var popperStyle =
/*#__PURE__*/
emotion.css({
  margin: 14,
  boxShadow: constants.boxShadow.xElevated,
  borderRadius: constants.borderRadius
});
var arrowStyle =
/*#__PURE__*/
emotion.css({
  position: "absolute",
  textShadow: "1px 0 20px rgba(0,0,0,0.1)",
  "&[data-placement^='top']": {
    transform: "rotate(90deg)",
    bottom: -11
  },
  "&[data-placement^='bottom']": {
    transform: "rotate(-90deg)",
    top: -11
  },
  "&[data-placement^='right']": {
    transform: "rotate(180deg)",
    left: -11
  },
  "&[data-placement^='left']": {
    right: -11
  }
});

var default_1 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(default_1, _React$PureComponent);
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(default_1).apply(this, arguments));
    _this.state = {
      isOpen: !!_this.props.isOpen
    };
    _this.toggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };
    return _this;
  }
  _createClass(default_1, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
          label = _a.label,
          popperBackgroundColor = _a.popperBackgroundColor,
          children = _a.children,
          controlled = _a.controlled,
          isOpen = _a.isOpen,
          popperClassName = _a.popperClassName,
          _onOutsideClick = _a.onOutsideClick,
          props = __rest(_a, ["label", "popperBackgroundColor", "children", "controlled", "isOpen", "popperClassName", "onOutsideClick"]);
      var _isPopperOpen = controlled ? !!isOpen : this.state.isOpen;
      return React.createElement(OutsideClick, {
        onOutsideClick: function onOutsideClick() {
          _this2.setState({
            isOpen: false
          });
          if (_onOutsideClick) {
            _onOutsideClick();
          }
        },
        disabled: !_isPopperOpen
      }, React.createElement(reactPopper.Manager, null, React.createElement(reactPopper.Reference, null, function (_ref) {
        var ref = _ref.ref;
        return React.createElement("div", {
          style: {
            display: "inline-block"
          },
          ref: ref
        }, typeof label === "function" ? label({
          toggle: _this2.toggle,
          isOpen: _this2.state.isOpen
        }) : label);
      }), React.createElement(MountTransition, {
        visible: _isPopperOpen
      }, function (transitionStyles) {
        return React.createElement(reactPopper.Popper, Object.assign({}, props, {
          positionFixed: true
        }), function (_ref2) {
          var ref = _ref2.ref,
              style = _ref2.style,
              placement = _ref2.placement,
              arrowProps = _ref2.arrowProps;
          var wrapperStyle = Object.assign({}, style, transitionStyles, {
            backgroundColor: popperBackgroundColor,
            transform: "".concat(style.transform || "", " ").concat(transitionStyles.transform || ""),
            transformOrigin: "".concat(arrowProps.style.left || 0, "px ").concat(arrowProps.style.top || 0, "px")
          });
          return React.createElement("div", {
            className: emotion.cx(popperStyle, popperClassName),
            ref: ref,
            style: wrapperStyle,
            "data-placement": placement
          }, children({
            toggle: _this2.toggle,
            isOpen: _this2.state.isOpen
          }), React.createElement("div", {
            className: arrowStyle,
            ref: arrowProps.ref,
            style: Object.assign({}, arrowProps.style, {
              color: popperBackgroundColor
            }),
            "data-placement": placement
          }, "\u25B6"));
        });
      })));
    }
  }]);
  return default_1;
}(React.PureComponent);
default_1.defaultProps = {
  placement: "bottom",
  popperBackgroundColor: colors.white.base,
  closeOnOutsideClick: true
};

var textStyle =
/*#__PURE__*/
emotion.css(Object.assign({}, typography.s.regular, {
  color: colors.white.base,
  display: "block",
  padding: "10px 16px"
}));
var popperStyle$1 =
/*#__PURE__*/
emotion.css({
  margin: 4,
  boxShadow: "none",
  maxWidth: 320
});

var Tooltip =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);
  function Tooltip() {
    var _this;
    _classCallCheck(this, Tooltip);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
    _this.state = {
      isOpen: !!_this.props.isOpen
    };
    _this.labelRef = React.createRef();
    _this.showTooltip = function () {
      return _this.setState({
        isOpen: true
      });
    };
    _this.hideTooltip = function () {
      return _this.setState({
        isOpen: false
      });
    };
    _this.addListeners = function () {
      if (!_this.props.disabled) {
        _this.labelRef.current.addEventListener("mouseenter", _this.showTooltip);
        _this.labelRef.current.addEventListener("mouseout", _this.hideTooltip);
      }
    };
    _this.removeListeners = function () {
      _this.labelRef.current.removeEventListener("mouseenter", _this.showTooltip);
      _this.labelRef.current.removeEventListener("mouseout", _this.showTooltip);
    };
    _this.getTooltip = function () {
      return React.createElement("span", {
        className: textStyle
      }, _this.props.text);
    };
    return _this;
  }
  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.disabled !== this.props.disabled) {
        this.props.disabled ? this.removeListeners() : this.addListeners();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
          placement = _this$props.placement,
          _label = _this$props.label,
          modifiers = _this$props.modifiers,
          isError = _this$props.isError;
      return React.createElement(default_1, {
        label: function label() {
          return _label({
            ref: _this2.labelRef
          });
        },
        placement: placement,
        positionFixed: true,
        controlled: true,
        popperBackgroundColor: isError ? colors.red.base : colors.gray.darker,
        modifiers: modifiers,
        isOpen: this.props.isOpen || this.state.isOpen,
        popperClassName: popperStyle$1,
        closeOnOutsideClick: false
      }, this.getTooltip);
    }
  }]);
  return Tooltip;
}(React.PureComponent);

var Logo = function Logo(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000000" : _ref$color;
  var style =
  /*#__PURE__*/
  emotion.css({
    fill: color
  });
  return React.createElement("svg", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    height: height,
    viewBox: "0 0 413.31 92.91"
  }, React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip-path",
    transform: "translate(-57.88 -61.39)"
  }, React.createElement("rect", {
    className: "cls-1",
    width: "529.46",
    height: "215.51"
  }))), React.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, React.createElement("g", {
    className: "cls-2",
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, React.createElement("polygon", {
    className: style,
    points: "7.31 91.39 3.84 82.98 2.62 82.98 6.81 92.81 7.79 92.81 11.98 82.98 10.8 82.98 7.31 91.39"
  }), React.createElement("path", {
    className: style,
    d: "M89.05 144.31l-4.45 9.82h1.13l1.16-2.57h5.31l1.14 2.57h1.18l-4.44-9.82zm-1.73 6.24l2.23-5 2.22 5z",
    transform: "translate(-57.88 -61.39)"
  }), React.createElement("polygon", {
    className: style,
    points: "54.71 82.98 53.61 82.98 53.61 92.74 60.2 92.74 60.2 91.72 54.71 91.72 54.71 82.98"
  }), React.createElement("path", {
    className: style,
    d: "M141.75 150.05c0 2.13-1.14 3.22-2.94 3.22s-3-1.18-3-3.29v-5.6h-1.1v5.67c0 2.76 1.64 4.24 4.05 4.24s4.07-1.48 4.07-4.32v-5.59h-1.1z",
    transform: "translate(-57.88 -61.39)"
  }), React.createElement("polygon", {
    className: style,
    points: "103.72 88.32 109.04 88.32 109.04 87.32 103.72 87.32 103.72 83.99 109.67 83.99 109.67 82.98 102.62 82.98 102.62 92.74 109.74 92.74 109.74 91.74 103.72 91.74 103.72 88.32"
  }), React.createElement("path", {
    className: style,
    d: "M186.15 148.73c-2.14-.46-2.65-1-2.65-1.9 0-.87.81-1.57 2.08-1.57a4.3 4.3 0 0 1 2.82 1.06l.64-.85a5.07 5.07 0 0 0-3.43-1.2c-1.85 0-3.21 1.13-3.21 2.66 0 1.6 1 2.33 3.28 2.81 2 .44 2.54.95 2.54 1.86 0 1-.87 1.65-2.18 1.65a4.63 4.63 0 0 1-3.34-1.38l-.69.81a5.69 5.69 0 0 0 4 1.56c1.94 0 3.33-1.08 3.33-2.76 0-1.49-1-2.29-3.18-2.76m44.24-4.51a5 5 0 0 0-5 5 5 5 0 1 0 10 0 4.9 4.9 0 0 0-5-5m3.82 5.07a3.83 3.83 0 0 1-3.82 4 3.88 3.88 0 0 1-3.85-4 3.83 3.83 0 0 1 3.82-4 3.88 3.88 0 0 1 3.85 4z",
    transform: "translate(-57.88 -61.39)"
  }), React.createElement("polygon", {
    className: style,
    points: "198.14 91.39 194.67 82.98 193.44 82.98 197.64 92.81 198.61 92.81 202.81 82.98 201.62 82.98 198.14 91.39"
  }), React.createElement("polygon", {
    className: style,
    points: "220.87 88.32 226.2 88.32 226.2 87.32 220.87 87.32 220.87 83.99 226.82 83.99 226.82 82.98 219.77 82.98 219.77 92.74 226.9 92.74 226.9 91.74 220.87 91.74 220.87 88.32"
  }), React.createElement("path", {
    className: style,
    d: "M309.76 147.31a2.73 2.73 0 0 0-.75-1.93 3.88 3.88 0 0 0-2.78-1H302v9.75h1.1v-3.79h2.78l2.83 3.79h1.35l-3-4a2.86 2.86 0 0 0 2.65-2.84m-6.62 2v-3.89h3c1.57 0 2.49.72 2.49 1.92 0 1.25-1 2-2.51 2z",
    transform: "translate(-57.88 -61.39)"
  }), React.createElement("polygon", {
    className: style,
    points: "292.36 91.39 288.89 82.98 287.66 82.98 291.86 92.81 292.83 92.81 297.03 82.98 295.84 82.98 292.36 91.39"
  }), React.createElement("path", {
    className: style,
    d: "M374.09 144.31l-4.44 9.82h1.13l1.15-2.57h5.31l1.15 2.57h1.18l-4.45-9.82zm-1.73 6.24l2.23-5 2.22 5z",
    transform: "translate(-57.88 -61.39)"
  }), React.createElement("polygon", {
    className: style,
    points: "339.75 82.98 338.65 82.98 338.65 92.74 345.24 92.74 345.24 91.72 339.75 91.72 339.75 82.98"
  }), React.createElement("path", {
    className: style,
    d: "M426.8 150.05c0 2.13-1.14 3.22-2.94 3.22s-3-1.18-3-3.29v-5.6h-1.11v5.67c0 2.76 1.65 4.24 4.06 4.24s4.07-1.48 4.07-4.32v-5.59h-1.1z",
    transform: "translate(-57.88 -61.39)"
  }), React.createElement("polygon", {
    className: style,
    points: "388.76 88.32 394.09 88.32 394.09 87.32 388.76 87.32 388.76 83.99 394.72 83.99 394.72 82.98 387.66 82.98 387.66 92.74 394.79 92.74 394.79 91.74 388.76 91.74 388.76 88.32"
  }), React.createElement("rect", {
    className: style,
    y: "76.12",
    width: "399.11",
    height: "0.74"
  }), React.createElement("polygon", {
    className: style,
    points: "72.54 33.07 117.31 71.74 117.31 11.02 107.61 11.03 107.61 51.1 63.42 11.18 63.42 71.06 72.54 71.06 72.54 33.07"
  }), React.createElement("path", {
    className: style,
    d: "M193.23 120.52h27.68l5.81 12h10.95l-30.41-62L177 132.5h10.44zm4.12-9.93l9.33-19.19 9.32 19.19zm-122.42 9.93h27.68l5.82 12h10.95L89 70.47l-30.29 62h10.4zm4.12-9.93l9.33-19.19 9.33 19.19zM248.39 120h2.89v13h2.81v-15.81h-8.5v13.05H242v-18.56l7.22-6.61 27.3 27.66h13.89l-26.89-26.54c5.63-.34 21.73-2.47 21.73-15.85 0-11.29-8.31-18-22.23-18h-23.71V133h9.09zm14.13-22.2H250V82.33h12.3c7.59 0 11.94 2.59 11.94 7.1.04 7.26-7.33 8.34-11.72 8.34zm55.55 34.72c18.06 0 30.67-12.37 30.67-30.09A30 30 0 0 0 340.28 81c-5.55-5.55-13.44-8.6-22.21-8.6-17.84 0-30.78 12.65-30.78 30.08s12.94 30.09 30.78 30.09m-21.41-30.1c0-13.3 8.81-22.6 21.43-22.6s21.27 9.3 21.27 22.6-8.75 22.74-21.27 22.74-21.43-9.4-21.43-22.79zm84.28 30.26c10.83 0 19-4.43 24.42-13.17l.25-.4-6.25-5.06-.31.57c-4.47 8.19-11.83 9.91-17.21 9.91-12.38 0-20.69-8.94-20.69-22.24 0-12.2 8.59-21.4 20-21.4 7.29 0 13.67 2.68 16.24 6.82l.37.6 5.77-6.15-.27-.36c-4.64-6.25-12-9.29-22.53-9.29-17.09 0-30 12.83-30 29.85 0 17.85 12.42 30.32 30.2 30.32",
    transform: "translate(-57.88 -61.39)"
  }), React.createElement("polygon", {
    className: style,
    points: "360.13 46.74 362.55 44.05 386.41 70.99 398.53 70.99 369.14 37.48 394.27 11.15 382.73 11.15 360.13 34.58 360.13 11.02 349.68 11.02 349.68 71.02 360.13 71.02 360.13 46.74"
  }), React.createElement("path", {
    className: style,
    d: "M461.59 68.58h1.6a2.58 2.58 0 0 0 1.57-.34 1.08 1.08 0 0 0 .42-.9 1.1 1.1 0 0 0-.2-.64 1.28 1.28 0 0 0-.56-.43 4.3 4.3 0 0 0-1.33-.14h-1.5zm-1.31 4.6V65h2.8a6.88 6.88 0 0 1 2.09.23 2 2 0 0 1 1 .79 2.1 2.1 0 0 1 .38 1.19 2.17 2.17 0 0 1-.64 1.56 2.53 2.53 0 0 1-1.7.74 2.27 2.27 0 0 1 .69.43 9.29 9.29 0 0 1 1.21 1.62l1 1.6h-1.6l-.73-1.29a6.64 6.64 0 0 0-1.39-1.9 1.67 1.67 0 0 0-1.05-.27h-.78v3.46zm3.33-10.53a6.55 6.55 0 0 0-3.12.82 5.89 5.89 0 0 0-2.37 2.35 6.31 6.31 0 0 0 0 6.31 5.9 5.9 0 0 0 2.35 2.35 6.33 6.33 0 0 0 6.3 0 5.88 5.88 0 0 0 2.34-2.35 6.35 6.35 0 0 0 .84-3.14 6.47 6.47 0 0 0-.85-3.17 5.89 5.89 0 0 0-2.37-2.35 6.57 6.57 0 0 0-3.12-.82zm0-1.26a7.72 7.72 0 0 1 3.73 1 7 7 0 0 1 2.84 2.8 7.82 7.82 0 0 1 1 3.81 7.63 7.63 0 0 1-1 3.77 7 7 0 0 1-2.8 2.81 7.58 7.58 0 0 1-7.56 0 7 7 0 0 1-2.82-2.82 7.64 7.64 0 0 1-1-3.76 7.72 7.72 0 0 1 1-3.81 7 7 0 0 1 2.84-2.8 7.76 7.76 0 0 1 3.77-1z",
    transform: "translate(-57.88 -61.39)"
  }))));
};

var modalPadding = 30;
var modalContainer$1 =
/*#__PURE__*/
emotion.css({
  background: "white",
  width: "360px",
  alignSelf: "center",
  borderRadius: constants.borderRadius,
  padding: "".concat(modalPadding, "px"),
  position: "relative"
});
var flexCenter =
/*#__PURE__*/
emotion.css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%"
});
var buttonsContainer =
/*#__PURE__*/
emotion.css(Object.assign({}, flexSpaceBetween, {
  marginTop: "40px"
}));
var iconCloseClassName =
/*#__PURE__*/
emotion.css({
  cursor: "pointer",
  position: "absolute",
  right: "".concat(modalPadding, "px"),
  top: "".concat(modalPadding, "px"),
  fontSize: "14px",
  color: colors.gray.base,
  "&:hover": {
    color: colors.gray.darker
  }
});

var PopUp = function PopUp(props) {
  var onClose = props.onClose,
      onApprove = props.onApprove,
      onReject = props.onReject,
      visible = props.visible,
      _props$approveButtonT = props.approveButtonText,
      approveButtonText = _props$approveButtonT === void 0 ? "Yes" : _props$approveButtonT,
      _props$rejectButtonTe = props.rejectButtonText,
      rejectButtonText = _props$rejectButtonTe === void 0 ? "No" : _props$rejectButtonTe,
      children = props.children;
  return React.createElement(Modal, {
    visible: visible,
    modalClassName: flexCenter
  }, React.createElement("div", {
    className: modalContainer$1
  }, onClose && React.createElement("i", {
    className: emotion.cx("pi", "pi-close", iconCloseClassName),
    onClick: onClose
  }), children, (onReject || onApprove) && React.createElement("div", {
    className: buttonsContainer
  }, onReject && React.createElement(Button, {
    size: "large",
    type: "secondary",
    onClick: onReject
  }, rejectButtonText), onApprove && React.createElement(Button, {
    size: "large",
    type: "primary",
    onClick: onApprove
  }, approveButtonText))));
};

var radioIconStyle =
/*#__PURE__*/
emotion.css({
  marginRight: 10,
  fontSize: 16
});
var controlStyle =
/*#__PURE__*/
emotion.css(Object.assign({
  cursor: "pointer",
  display: "flex",
  outline: "none",
  padding: "10px 0",
  position: "relative",
  alignItems: "center"
}, typography.normal.regular, {
  "&[data-disabled='true']": _defineProperty({
    cursor: "not-allowed"
  }, ".".concat(radioIconStyle), {
    color: colors.gray.light
  })
}));

function Control(props) {
  var checked = props.checked,
      onChange = props.onChange,
      value = props.value,
      disabled = props.disabled,
      _props$children = props.children,
      children = _props$children === void 0 ? ControlView : _props$children,
      type = props.type,
      className = props.className;
  return React.createElement("div", {
    className: emotion.cx(controlStyle, className),
    role: type,
    "aria-disabled": disabled,
    "aria-checked": checked,
    "data-disabled": disabled,
    tabIndex: checked ? 0 : -1,
    onClick: !disabled ? function (e) {
      return onChange && onChange({
        value: value,
        checked: !checked
      }, e);
    } : undefined
  }, children(props));
}
var ControlView = function ControlView(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      type = _ref.type,
      disabled = _ref.disabled;
  var isRadio = type === "radio";
  var iconClass = emotion.cx(radioIconStyle, "pi", {
    "pi-radio": isRadio && !checked && !disabled,
    "pi-radio-selected": isRadio && (checked || disabled),
    "pi-checkbox-selected": !isRadio && (checked || disabled),
    "pi-checkbox-unselected": !isRadio && !checked && !disabled
  });
  var getColor = function getColor() {
    if (disabled) {
      return colors.gray.base;
    }
    if (checked) {
      return colors.violet.base;
    }
    return colors.gray.light;
  };
  return React.createElement(React.Fragment, null, React.createElement("i", {
    style: {
      color: getColor(),
      paddingTop: 2
    },
    className: iconClass
  }), " ", label);
};

function Radio(props) {
  return React.createElement(Control, Object.assign({}, props, {
    type: "radio"
  }));
}

var RadioGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RadioGroup, _React$PureComponent);
  function RadioGroup() {
    var _this;
    _classCallCheck(this, RadioGroup);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).apply(this, arguments));
    _this.handleChange = function (_ref, event) {
      var value = _ref.value,
          checked = _ref.checked;
      var _this$props = _this.props,
          toggle = _this$props.toggle,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
      if (!toggle && value === selected) return;
      onChange(checked ? value : undefined, event);
    };
    return _this;
  }
  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
          children = _this$props2.children,
          selected = _this$props2.selected,
          className = _this$props2.className,
          name = _this$props2.name,
          disabled = _this$props2.disabled;
      var _children = React.Children.map(children, function (_radio) {
        var radio = _radio;
        return React.cloneElement(radio, {
          onChange: _this2.handleChange,
          checked: selected === radio.props.value,
          disabled: disabled
        });
      });
      return React.createElement("div", {
        role: "radiogroup",
        "aria-label": name,
        className: className
      }, _children);
    }
  }]);
  return RadioGroup;
}(React.PureComponent);

function Checkbox(props) {
  return React.createElement(Control, Object.assign({}, props, {
    type: "checkbox"
  }));
}

var CheckboxGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CheckboxGroup, _React$PureComponent);
  function CheckboxGroup() {
    var _this;
    _classCallCheck(this, CheckboxGroup);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).apply(this, arguments));
    _this.handleChange = function (_ref, event) {
      var value = _ref.value;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          selected = _this$props.selected;
      onChange(getSelectedCheckboxes(value, selected), event);
    };
    return _this;
  }
  _createClass(CheckboxGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
          children = _this$props2.children,
          selected = _this$props2.selected,
          className = _this$props2.className,
          name = _this$props2.name,
          disabled = _this$props2.disabled;
      var _children = React.Children.map(children, function (_checkbox) {
        var checkbox = _checkbox;
        return React.cloneElement(checkbox, {
          onChange: _this2.handleChange,
          checked: selected.indexOf(checkbox.props.value) >= 0,
          disabled: disabled
        });
      });
      return React.createElement("div", {
        role: "checkboxgroup",
        "aria-label": name,
        className: className
      }, _children);
    }
  }]);
  return CheckboxGroup;
}(React.PureComponent);

var rowWrapper =
/*#__PURE__*/
emotion.css(Object.assign({}, typography.normal.regular, {
  cursor: "pointer",
  padding: "12px 18px",
  position: "relative",
  lineHeight: "28px",
  zIndex: 999
}, textEllipsis, flexSpaceBetween, {
  alignItems: "center",
  display: "flex",
  "&:last-of-type": {
    border: 0
  },
  "&:hover": {
    backgroundColor: colors.gray.lightest
  }
}));
var labelWrap =
/*#__PURE__*/
emotion.css({
  userSelect: "none",
  overflow: "hidden",
  textOverflow: "ellipsis"
});
var activeRow =
/*#__PURE__*/
emotion.css({
  backgroundColor: colors.gray.lightest
});
var selectedRow =
/*#__PURE__*/
emotion.css(Object.assign({
  color: colors.violet.base
}, typography.normal.bold));

var defaultProps = {
  rightElement: function rightElement(_ref) {
    var isSelected = _ref.isSelected,
        multiSelect = _ref.multiSelect;
    var iconClass = emotion.cx("pi", {
      "pi-checkbox-selected": isSelected,
      "pi-checkbox-unselected": !isSelected
    },
    /*#__PURE__*/
    emotion.css({
      marginLeft: "10px",
      color: isSelected ? colors.violet.base : colors.gray.light,
      fontSize: "20px"
    }));
    return multiSelect ? React.createElement("i", {
      className: iconClass
    }) : null;
  }
};
var Option =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Option, _React$Component);
  function Option() {
    _classCallCheck(this, Option);
    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }
  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _cx,
          _this = this;
      var _this$props = this.props,
          label = _this$props.label,
          isActive = _this$props.isActive,
          isSelected = _this$props.isSelected,
          rightElement = _this$props.rightElement,
          labelClassName = _this$props.labelClassName,
          className = _this$props.className;
      var _class = emotion.cx(rowWrapper, (_cx = {}, _defineProperty(_cx, activeRow, isActive), _defineProperty(_cx, selectedRow, isSelected), _cx), className);
      return React.createElement(Control, Object.assign({}, this.props, {
        checked: this.props.isSelected,
        type: this.props.multiSelect ? "checkbox" : "radio",
        className: _class
      }), function () {
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: emotion.cx(labelWrap, labelClassName)
        }, label), rightElement(_this.props), React.createElement(Ink, null));
      });
    }
  }]);
  return Option;
}(React.Component);
Option.defaultProps = defaultProps;

var wrapper$1 =
/*#__PURE__*/
emotion.css({
  display: "flex"
});
var selectStyle =
/*#__PURE__*/
emotion.css({
  width: "80px",
  marginBottom: 0
});
var combinedLabelStyle =
/*#__PURE__*/
emotion.css({
  zIndex: 1
});

var PhoneNumberInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PhoneNumberInput, _React$Component);
  function PhoneNumberInput() {
    var _this;
    _classCallCheck(this, PhoneNumberInput);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneNumberInput).apply(this, arguments));
    _this.onCountrySelect = function (countryCode) {
      _this.props.onChange({
        countryCode: countryCode,
        phone: _this.props.phone
      });
    };
    _this.onNumberChange = function (value) {
      var _value = value.replace(/\D/g, "");
      if (_value === _this.props.phone) {
        return;
      }
      _this.props.onChange({
        countryCode: _this.props.countryCode,
        phone: _value
      });
    };
    return _this;
  }
  _createClass(PhoneNumberInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          phone = _this$props.phone,
          countryCode = _this$props.countryCode,
          className = _this$props.className,
          selectProps = _this$props.selectProps,
          inputProps = _this$props.inputProps,
          required = _this$props.required,
          placeholder = _this$props.placeholder;
      return React.createElement("div", {
        className: emotion.cx(wrapper$1, className)
      }, React.createElement("label", {
        className: emotion.cx(labelStyle, "_pebble_input_label_focused", combinedLabelStyle)
      }, placeholder || "Phone No.", required && React.createElement("span", {
        style: {
          color: colors.red.base
        }
      }, "\xA0*")), React.createElement(Select, Object.assign({
        placeholder: "",
        onChange: this.onCountrySelect,
        value: countryCode + "",
        selected: countryCode
      }, selectProps, {
        className: emotion.cx(selectStyle, selectProps && selectProps.className)
      }), this.props.children), React.createElement(Input, Object.assign({
        onChange: this.onNumberChange,
        placeholder: "",
        value: phone
      }, inputProps)));
    }
  }]);
  return PhoneNumberInput;
}(React.Component);

var timePickerWrap =
/*#__PURE__*/
emotion.css({
  display: "flex",
  alignItems: "center",
  border: "1px solid ".concat(colors.gray.light),
  borderRadius: "3px",
  cursor: "pointer",
  "&:not([disabled]):hover": {
    background: colors.gray.light
  }
});
var timePickerSelected =
/*#__PURE__*/
emotion.css({
  backgroundColor: colors.gray.lighter
});
var hourPicker =
/*#__PURE__*/
emotion.css({
  borderRadius: "3px 0px 0px 3px",
  borderRight: "none"
});
var seperator =
/*#__PURE__*/
emotion.css({
  color: colors.gray.dark,
  lineHeight: "40px"
});
var minutePicker =
/*#__PURE__*/
emotion.css({
  borderLeft: "none",
  borderRadius: "0px 3px 3px 0px"
});
var optionStyle =
/*#__PURE__*/
emotion.css({
  width: "100px"
});

var HOURS =
/*#__PURE__*/
_toConsumableArray(Array(12)).map(function (_, i) {
  return ("00" + (i + 1).toString(10)).slice(-2);
});
var MINUTES =
/*#__PURE__*/
_toConsumableArray(Array(4)).map(function (_, i) {
  return ("00" + (i * 15).toString(10)).slice(-2);
});
var iconStyle$1 =
/*#__PURE__*/
emotion.css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 8,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2,
  color: colors.gray.dark,
  display: "inline-block"
});
var buttonStyle =
/*#__PURE__*/
emotion.css({
  padding: "15px 20px",
  fontSize: "12px",
  color: colors.gray.darker,
  lineHeight: "9px"
});
var TimePicker = function TimePicker(props) {
  var _cx;
  var selectedHour = props.selectedHour,
      selectedMinute = props.selectedMinute,
      onHourChange = props.onHourChange,
      onMinuteChange = props.onMinuteChange;
  var selected = !!selectedHour || selectedMinute !== undefined;
  return React.createElement("div", {
    className: emotion.cx((_cx = {}, _defineProperty(_cx, timePickerWrap, true), _defineProperty(_cx, timePickerSelected, selected), _cx))
  }, React.createElement(DropDown, {
    labelClassName: hourPicker,
    isSelected: selected,
    labelComponent: function labelComponent(_ref) {
      var isOpen = _ref.isOpen,
          toggleDropdown = _ref.toggleDropdown;
      return React.createElement("div", {
        onClick: function onClick() {
          toggleDropdown();
        },
        className: buttonStyle,
        "data-test-id": "hour-label"
      }, React.createElement("span", {
        className:
        /*#__PURE__*/
        /*#__PURE__*/
        emotion.css({
          marginRight: "15px"
        })
      }, selectedHour ? selectedHour : "Hrs"), React.createElement("span", null, React.createElement("i", {
        className: emotion.cx("pi pi-arrow-drop-down", iconStyle$1),
        style: {
          transform: isOpen ? "rotate(180deg)" : "none"
        }
      })));
    }
  }, function (_ref2) {
    var toggle = _ref2.toggle;
    return React.createElement(OptionGroupRadio, {
      onChange: function onChange(value) {
        onHourChange(value);
        toggle();
      },
      selected: selectedHour,
      className: optionStyle
    }, HOURS.map(function (hour) {
      return React.createElement(Option, {
        key: hour,
        value: parseInt(hour, 10),
        label: hour,
        className: optionStyle
      });
    }));
  }), React.createElement("span", {
    className: seperator
  }, ":"), React.createElement(DropDown, {
    labelClassName: minutePicker,
    isSelected: selected,
    labelComponent: function labelComponent(_ref3) {
      var isOpen = _ref3.isOpen,
          toggleDropdown = _ref3.toggleDropdown;
      return React.createElement("div", {
        onClick: function onClick() {
          toggleDropdown();
        },
        className: buttonStyle,
        "data-test-id": "minute-label"
      }, React.createElement("span", {
        className:
        /*#__PURE__*/
        /*#__PURE__*/
        emotion.css({
          marginRight: "15px"
        })
      }, selectedMinute !== undefined ? selectedMinute : "mins"), React.createElement("i", {
        className: emotion.cx("pi pi-arrow-drop-down", iconStyle$1),
        style: {
          transform: isOpen ? "rotate(180deg)" : "none"
        }
      }));
    }
  }, function (_ref4) {
    var toggle = _ref4.toggle;
    return React.createElement(OptionGroupRadio, {
      onChange: function onChange(value) {
        onMinuteChange(value);
        toggle();
      },
      selected: selectedMinute,
      className: optionStyle
    }, MINUTES.map(function (min) {
      return React.createElement(Option, {
        key: min,
        value: parseInt(min, 10),
        label: min,
        className: optionStyle
      });
    }));
  }));
};

var Text = function Text(_ref) {
  var typography = _ref.typography,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.gray.darker : _ref$color,
      children = _ref.children,
      className = _ref.className;
  var _className =
  /*#__PURE__*/
  emotion.css(Object.assign({}, typography, {
    color: color
  }));
  return React__default.createElement("span", {
    className: emotion.cx(_className, className)
  }, children);
};

function capitalize(str) {
  return str ? str.split(" ").map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join(" ") : str;
}

function getShortenedNumber(num) {
  var toFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var formattedNum;
  if (!num && num !== 0) {
    return;
  }
  if (num >= 10000000) {
    formattedNum = (num / 10000000).toFixed(toFixed) + " Cr";
  } else if (num >= 100000) {
    formattedNum = (num / 100000).toFixed(toFixed) + " L";
  } else if (num >= 1000) {
    formattedNum = (num / 1000).toFixed(toFixed) + " K";
  } else if (num !== Math.floor(num)) {
    formattedNum = "".concat(num.toFixed(toFixed));
  } else {
    formattedNum = "".concat(num);
  }
  return formattedNum;
}

function initGoogleAnalytics(gaId) {
  var _arguments = arguments;
  if (isBrowser) {
    (function (s, o, g) {
      window.GoogleAnalyticsObject = "ga";
      window.ga = window.ga || function () {
        (window.ga.q = window.ga.q || []).push(_arguments);
      };
      window.ga.l = Date.now();
      var a = s.createElement(o);
      var m = s.getElementsByTagName(o)[0];
      a.async = true;
      a.src = g;
      if (m.parentNode) m.parentNode.insertBefore(a, m);
    })(document, "script", "https://www.google-analytics.com/analytics.js");
    window.ga("create", gaId, "auto");
    window.ga("send", "pageview");
  }
}

function width() {
  return isBrowser && window.screen.width || 1025;
}
var isDesktop =
/*@__PURE__*/
width() >= 1024;



var index = /*#__PURE__*/Object.freeze({
    capitalize: capitalize,
    getShortenedNumber: getShortenedNumber,
    initGoogleAnalytics: initGoogleAnalytics,
    isDesktop: isDesktop
});

exports.utils = index;
exports.mixins = mixins;
exports.styles = styles;
exports.colors = colors;
exports.typography = typography;
exports.constants = constants;
exports.Button = Button;
exports.DropDownButton = DropDownButton;
exports.Calendar = Calendar;
exports.DropDown = DropDown;
exports.Input = Input;
exports.Modal = Modal;
exports.Search = Search;
exports.Select = Select;
exports.Slider = Slider;
exports.Stepper = Stepper;
exports.Tag = Tag;
exports.TimePicker = TimePicker;
exports.Toast = Toast;
exports.TypeAhead = TypeAhead;
exports.SideBar = SideBar;
exports.DateInput = DateInput;
exports.BrowserBasedDateInput = BrowserBasedDateInput;
exports.NativeDateInput = NativeDateInput;
exports.Tooltip = Tooltip;
exports.Logo = Logo;
exports.Popper = default_1;
exports.PopUp = PopUp;
exports.Loader = Loader;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.Option = Option;
exports.OptionGroup = OptionGroup;
exports.OptionGroupRadio = OptionGroupRadio;
exports.OptionGroupCheckBox = OptionGroupCheckBox;
exports.OutsideClick = OutsideClick;
exports.PhoneNumberInput = PhoneNumberInput;
exports.Text = Text;
exports.UserAgentInfoContext = UserAgentInfoContext;
exports.UserAgentInfoProvider = UserAgentInfoProvider;
//# sourceMappingURL=pebble.js.map
