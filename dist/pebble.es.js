import { css, keyframes, cx, injectGlobal } from 'emotion';
import React__default, { createElement, Fragment, PureComponent, createRef, Children, cloneElement, createContext, Component } from 'react';
import Ink from 'react-ink';
import RCalendar from 'react-calendar/dist/entry.nostyle';
import { startOfDay, endOfDay, isSameDay, parse, format } from 'date-fns';
import { Transition, animated } from 'react-spring';
import isBrowser from 'is-in-browser';
import { createPortal, findDOMNode } from 'react-dom';
import scrollIntoView from 'scroll-into-view-if-needed';
import Rheostat from 'rheostat';
import Mitt from 'mitt';
import debounce from 'just-debounce-it';
import { Rifm } from 'rifm';
import { Manager, Reference, Popper } from 'react-popper';

const textEllipsis = {
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
const flexRow = {
  display: "flex",
  flexDirection: "row"
};
const flexSpaceBetween = Object.assign({}, flexRow, {
  justifyContent: "space-between",
  alignContent: "initial"
});
const flexMiddleAlign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const getPlaceholderStyle = color => ({
  "::-webkit-input-placeholder": {
    color
  },
  "::-moz-placeholder": {
    color
  },
  ":-ms-input-placeholder": {
    color
  },
  ":-moz-placeholder": {
    color
  },
  "::placeholder": {
    color
  }
});

var mixins = /*#__PURE__*/Object.freeze({
    textEllipsis: textEllipsis,
    flexRow: flexRow,
    flexSpaceBetween: flexSpaceBetween,
    flexMiddleAlign: flexMiddleAlign,
    getPlaceholderStyle: getPlaceholderStyle
});

const colors = {
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

const constants = {
  borderRadius: 3,
  buttonHeight: 40,
  animationCurve: "cubic-bezier(.64,.09,.08,1)",
  padding: {
    base: 20,
    higher: 60
  },
  border: {
    base: `1px solid ${colors.gray.light}`,
    light: `1px solid ${colors.gray.lighter}`
  },
  boxShadow: {
    base: `0 2px 7px 0 #F2F2F2`,
    elevated: `0 4px 7px 0 ${colors.gray.light}`,
    xElevated: "0 2px 15px 0 rgba(0,0,0,0.1)"
  }
};

const fontSize = {
  xs: 10,
  s: 12,
  normal: 14,
  l: 16,
  xl: 18,
  xll: 22
};
const typography = {
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

const tableStyle =
/*#__PURE__*/
css(Object.assign({
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
const disableScrollY =
/*#__PURE__*/
css({
  overflowY: "hidden"
});

var styles = /*#__PURE__*/Object.freeze({
    tableStyle: tableStyle,
    disableScrollY: disableScrollY
});

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

const {
  violet,
  gray,
  white,
  red,
  emerald
} = colors;
const smallButtonHeight = 40;
const commonButtonStyle =
/*#__PURE__*/
css({
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
const mappingColorByType = {
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
const linkStyle = {
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
const getStyleByType = (type, filled) => {
  if (type === "link") return linkStyle;
  const _color = mappingColorByType[type];
  const {
    base: colorBase,
    disabled,
    hover,
    active,
    textColor
  } = _color;
  const defaultFontColor = filled ? textColor || white.base : colorBase;
  return {
    color: defaultFontColor,
    backgroundColor: filled ? colorBase : white.base,
    border: filled ? "none" : `1px solid ${colorBase}`,
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
const styleBasedOnSize = {
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
const getButtonStyle = (size, type, showShadow, filled) => {
  return (
    /*#__PURE__*/
    css([commonButtonStyle, Object.assign({}, styleBasedOnSize[size], getStyleByType(type, filled), {
      boxShadow: showShadow ? constants.boxShadow.base : "none"
    })])
  );
};
const iconStyle =
/*#__PURE__*/
css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 8,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2,
  color: colors.gray.dark
});
const dropDownButtonStyle =
/*#__PURE__*/
css({
  border: constants.border.base,
  "&:not([disabled]):hover": {
    backgroundColor: colors.gray.lighter
  }
});
const dropDownButtonDefaultStyle =
/*#__PURE__*/
css({
  backgroundColor: colors.white.base,
  color: colors.gray.darker,
  "&:not([disabled]):hover": {
    backgroundColor: colors.gray.lighter
  }
});

const bounceDelay =
/*#__PURE__*/
keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)"
  },
  "40%": {
    transform: "scale(1)"
  }
});
const spinnerStyle =
/*#__PURE__*/
css(Object.assign({}, flexSpaceBetween, {
  width: 70,
  "> div": {
    width: 18,
    height: 18,
    borderRadius: "100%",
    display: "inline-block",
    animation: `${bounceDelay} 1.4s infinite ease-in-out both`,
    "&:first-of-type": {
      animationDelay: "-0.32s"
    },
    "&:nth-of-type(2n)": {
      animationDelay: "-0.16s"
    }
  }
}));

const Loader = ({
  color = colors.gray.darker,
  scale = 1,
  className
}) => {
  const style = {
    backgroundColor: color
  };
  return createElement("div", {
    className: cx(spinnerStyle, className),
    style: {
      transform: `scale(${scale})`
    }
  }, createElement("div", {
    style: style
  }), createElement("div", {
    style: style
  }), createElement("div", {
    style: style
  }));
};

const Button = ({
  type = "primary",
  disabled,
  children,
  onClick,
  width,
  showShadow,
  className,
  showRipple = true,
  loading,
  size = "small"
}) => {
  const disableAction = disabled || loading;
  const filled = size !== "x-small";
  const _className = cx(getButtonStyle(size, type, !!showShadow, filled), className);
  return createElement("button", {
    className: _className,
    onClick: !disableAction ? onClick : undefined,
    style: {
      width
    },
    disabled: disabled
  }, loading ? createElement(Loader, {
    color: colors.white.base,
    scale: 0.4
  }) : children, !disableAction && showRipple && type !== "link" && createElement(Ink, null));
};
const DropDownButton = _a => {
  var {
    isOpen,
    isSelected,
    children,
    className
  } = _a,
      props = __rest(_a, ["isOpen", "isSelected", "children", "className"]);
  const _className = cx(dropDownButtonStyle, {
    [dropDownButtonDefaultStyle]: !(isOpen || isSelected)
  });
  return createElement(Button, Object.assign({}, props, {
    type: "secondary",
    className: cx(_className, className)
  }), createElement(Fragment, null, children, " ", createElement("i", {
    className: cx("pi pi-arrow-drop-down", iconStyle),
    style: {
      transform: isOpen ? "rotate(180deg)" : "none"
    }
  })));
};

const wrapperStyle =
/*#__PURE__*/
css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  boxShadow: constants.boxShadow.xElevated,
  overflow: "hidden",
  padding: 20,
  position: "relative"
});
const tileStyle =
/*#__PURE__*/
css(Object.assign({}, typography.normal.regular, {
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
  border: `1px solid ${colors.white.base}`,
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
    color: `${colors.white.base} !important`
  },
  "&.react-calendar__tile--rangeEnd": {
    backgroundColor: colors.violet.base,
    color: `${colors.white.base} !important`
  },
  "&.react-calendar__tile--singleSelect": {
    backgroundColor: colors.violet.base,
    color: colors.white.base
  },
  "&.react-calendar__month-view__days__day--neighboringMonth": {
    color: colors.gray.base
  }
}));
const dateStyle =
/*#__PURE__*/
css({
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
    border: `1px solid ${colors.gray.light}`,
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
const dotWrapper =
/*#__PURE__*/
css({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  width: "100%"
});
const dotStyle =
/*#__PURE__*/
css({
  height: 4,
  width: 4,
  display: "inline-block",
  borderRadius: constants.borderRadius,
  margin: "5px 2px 0"
});
const buttonsWrapper =
/*#__PURE__*/
css(Object.assign({}, flexSpaceBetween, {
  marginTop: 20
}));

class Calendar extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.selected,
      singleSelectedDate: null
    };
    this.onChange = value => {
      const {
        props
      } = this;
      if (props.range) {
        if (Array.isArray(value) && value.length === 2) {
          this.setState({
            value: value,
            singleSelectedDate: null
          }, () => props.onChange(value));
        }
      } else {
        if (!Array.isArray(value)) {
          this.setState({
            value,
            singleSelectedDate: null
          }, () => props.onChange(value));
        }
      }
    };
    this.onDayClick = day => {
      const {
        onClickDay
      } = this.props;
      this.setState({
        singleSelectedDate: [startOfDay(day), endOfDay(day)]
      });
      if (onClickDay) onClickDay(day);
    };
    this.getTileContent = ({
      date
    }) => {
      const dot = this.props.tileDots.find(datum => !!datum.timeStamp && isSameDay(date, datum.timeStamp));
      return dot ? createElement("div", {
        className: dotWrapper
      }, dot.colors && dot.colors.map((color, i) => createElement("span", {
        key: i,
        className: dotStyle,
        style: {
          backgroundColor: color
        }
      }))) : null;
    };
    this.getDisabledDays = ({
      date
    }) => {
      const {
        disabledDays
      } = this.props;
      return disabledDays && disabledDays.length && disabledDays.some(_date => isSameDay(_date, date)) || false;
    };
    this.onApply = () => {
      const {
        props
      } = this;
      const {
        value,
        singleSelectedDate
      } = this.state;
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
  }
  render() {
    const _a = this.props,
          {
      range,
      selected,
      hideShadow,
      className,
      onApply,
      onClear
    } = _a,
          rest = __rest(_a, ["range", "selected", "hideShadow", "className", "onApply", "onClear"]);
    return createElement("div", {
      className: cx(wrapperStyle, {
        [
        /*#__PURE__*/
        css({
          boxShadow: "none"
        })]: hideShadow
      }, className)
    }, createElement(RCalendar, Object.assign({}, rest, {
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
      prevLabel: createElement("i", {
        style: {
          fontSize: 14
        },
        className: "pi pi-chevron-left"
      }),
      nextLabel: createElement("i", {
        style: {
          fontSize: 14
        },
        className: "pi pi-arrow-right"
      })
    })), (onClear || onApply) && createElement("div", {
      className: buttonsWrapper
    }, onClear && createElement(Button, {
      onClick: onClear,
      type: "secondary"
    }, "Clear"), onApply && createElement(Button, {
      onClick: this.onApply
    }, "Apply")));
  }
}
Calendar.defaultProps = {
  onChange: () => {},
  tileDots: []
};

const wrapperStyle$1 =
/*#__PURE__*/
css({
  position: "relative"
});
const dropDownStyle =
/*#__PURE__*/
css({
  minWidth: 100,
  boxShadow: constants.boxShadow.xElevated,
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "absolute",
  top: "100%",
  zIndex: 999,
  transformOrigin: "top left"
});

class OutsideClick extends PureComponent {
  constructor() {
    super(...arguments);
    this.childRef = createRef();
    this.handleClick = e => {
      if (this.childRef.current && !this.childRef.current.contains(e.target)) {
        this.props.onOutsideClick();
      }
    };
    this.addListener = () => {
      document.addEventListener("mousedown", this.handleClick);
    };
    this.removeListener = () => {
      document.removeEventListener("mousedown", this.handleClick);
    };
  }
  componentDidMount() {
    if (!this.props.disabled) {
      this.addListener();
    }
  }
  componentWillUnmount() {
    this.removeListener();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.props.disabled ? this.removeListener() : this.addListener();
    }
  }
  render() {
    const {
      className,
      children
    } = this.props;
    return createElement("div", {
      ref: this.childRef,
      className: className
    }, children);
  }
}

const animationConfig = {
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
  config: (_a, motion) => motion === "leave" ? {
    duration: 0.1
  } : {
    duration: 200
  }
};

const MountTransition = props => {
  return createElement(Transition, Object.assign({
    items: props.visible
  }, animationConfig, props), (show, state, index) => show && (styles => props.children(styles, state, index)));
};

class DropDown extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: !!this.props.initiallyOpen
    };
    this.toggleDropdown = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }
  render() {
    const {
      buttonLabel,
      children,
      labelComponent,
      padding,
      className,
      dropDownClassName,
      isSelected,
      disabled,
      labelClassName,
      onOutsideClick
    } = this.props;
    const {
      isOpen
    } = this.state;
    return createElement(OutsideClick, {
      className: cx(wrapperStyle$1, className),
      onOutsideClick: () => {
        this.setState({
          isOpen: false
        });
        if (onOutsideClick) onOutsideClick(isOpen);
      },
      disabled: !isOpen
    }, labelComponent ? labelComponent({
      isOpen,
      toggleDropdown: this.toggleDropdown
    }) : createElement(DropDownButton, {
      isSelected: !!isSelected,
      isOpen: isOpen,
      onClick: this.toggleDropdown,
      disabled: disabled,
      className: labelClassName
    }, buttonLabel), createElement(MountTransition, {
      visible: isOpen,
      native: true
    }, transitionStyles => createElement(animated.div, {
      className: cx(dropDownStyle, dropDownClassName),
      style: Object.assign({
        padding
      }, transitionStyles)
    }, children({
      toggle: this.toggleDropdown,
      isOpen
    }))));
  }
}
DropDown.defaultProps = {
  closeOnOutsideClick: true
};

const animation = "all 0.3s cubic-bezier(.64,.09,.08,1)";
const inputMarginBottom = 20;
const wrapperStyle$2 =
/*#__PURE__*/
css({
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
const inputStyle =
/*#__PURE__*/
css(Object.assign({
  outline: 0,
  border: 0,
  borderBottom: `1px solid ${colors.gray.lighter}`,
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
const inputReadOnlyStyle =
/*#__PURE__*/
css({
  color: colors.gray.dark
});
const inputDisabledStyle =
/*#__PURE__*/
css({
  cursor: "not-allowed",
  pointerEvents: "none",
  color: colors.gray.base
});
const inputTextAreaStyle =
/*#__PURE__*/
css({
  height: 88,
  padding: "0 0 52px 0",
  marginTop: 22,
  resize: "none"
});
const highlightStyle =
/*#__PURE__*/
css({
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
const labelStyle =
/*#__PURE__*/
css({
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
const messageStyle =
/*#__PURE__*/
css(Object.assign({}, typography.s.regular, {
  marginTop: 10,
  lineHeight: "10px",
  textAlign: "left"
}));
const loadingStyle =
/*#__PURE__*/
css({
  right: -10,
  top: 20,
  position: "absolute"
});

function getColor(error, success, isUnderlineColor) {
  let color = colors.gray.dark;
  if (error) {
    color = colors.red.base;
  } else if (success) {
    color = colors.emerald.base;
  } else if (isUnderlineColor) {
    color = colors.violet.base;
  }
  return color;
}
class Input extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isFocused: false
    };
    this.addFocus = () => {
      this.setState({
        isFocused: true
      });
    };
    this.removeFocus = () => {
      this.setState({
        isFocused: false
      });
    };
    this.handleChange = e => {
      this.props.onChange(e.target.value || "");
    };
  }
  render() {
    const {
      type,
      placeholder,
      className,
      inputClassName,
      fixLabelAtTop,
      value,
      readOnly,
      disabled,
      errorMessage,
      successMessage,
      message,
      textArea,
      required,
      onClick,
      loading
    } = this.props;
    const {
      isFocused
    } = this.state;
    const _message = errorMessage || successMessage || message;
    const _inputClassName = cx(inputStyle, {
      [inputDisabledStyle]: disabled,
      [inputReadOnlyStyle]: readOnly,
      [inputTextAreaStyle]: textArea
    }, inputClassName);
    const _inputProps = {
      "aria-label": placeholder,
      className: _inputClassName,
      disabled,
      onChange: this.handleChange,
      readOnly,
      value: value || ""
    };
    const highlightClassName = cx(highlightStyle, {
      _pebble_input_highlight_focused: isFocused,
      _pebble_input_highlight_state: !!_message,
      _pebble_input_highlight_read_only: readOnly,
      _pebble_input_highlight_disabled: disabled
    });
    const labelClassName = cx(labelStyle, {
      _pebble_input_label_focused: isFocused || !!value || fixLabelAtTop
    });
    const _wrapperStyle = cx(wrapperStyle$2, {
      _pebble_input_wrapper_textarea: textArea
    }, className);
    return createElement("div", {
      className: _wrapperStyle,
      onFocus: this.addFocus,
      onBlur: this.removeFocus,
      onClick: onClick
    }, this.props.textArea ? createElement("textarea", Object.assign({}, _inputProps, this.props.inputProps)) : createElement("input", Object.assign({
      type: type
    }, _inputProps, this.props.inputProps)), createElement("label", {
      className: labelClassName
    }, placeholder, required && createElement("span", {
      style: {
        color: colors.red.base
      }
    }, "\xA0*")), createElement("div", {
      className: highlightClassName,
      style: {
        backgroundColor: getColor(errorMessage, successMessage, true)
      }
    }), loading && createElement(Loader, {
      color: colors.violet.base,
      scale: 0.6,
      className: loadingStyle
    }), _message && createElement("div", {
      className: messageStyle,
      style: {
        color: getColor(errorMessage, successMessage)
      }
    }, _message));
  }
}
Input.defaultProps = {
  value: "",
  readOnly: false
};

const modalContainer =
/*#__PURE__*/
css({
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

class Modal extends PureComponent {
  constructor() {
    super(...arguments);
    this.node = isBrowser ? document.createElement("div") : null;
  }
  componentDidMount() {
    if (this.node) {
      document.body.appendChild(this.node);
    }
  }
  componentWillUnmount() {
    if (this.node) {
      document.body.removeChild(this.node);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.visible === this.props.visible) return;
    if (this.props.visible) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "";
    }
  }
  render() {
    if (!isBrowser) return null;
    const {
      children,
      visible,
      backDropClassName,
      modalClassName
    } = this.props;
    const node = this.node;
    return createPortal(createElement(MountTransition, {
      visible: visible
    }, transitionStyles => createElement("div", {
      style: {
        opacity: transitionStyles.opacity
      },
      className: cx(modalContainer, backDropClassName)
    }, createElement("div", {
      className: cx(
      /*#__PURE__*/
      css({
        transform: transitionStyles.transform
      }), modalClassName)
    }, children))), node);
  }
}

const searchWrapperStyle =
/*#__PURE__*/
css(Object.assign({
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
    border: `1px solid ${colors.gray.light}`,
    backgroundColor: colors.white.base,
    i: {
      color: colors.gray.dark
    }
  }
}));
const searchStyle =
/*#__PURE__*/
css(Object.assign({
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
const clearContainer =
/*#__PURE__*/
css({
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

class Search extends PureComponent {
  constructor() {
    super(...arguments);
    this.searchInputRef = createRef();
  }
  render() {
    const {
      type,
      inputProps,
      onChange,
      placeholder,
      showSearchIcon,
      className,
      clearable,
      value
    } = this.props;
    const wrapperClassName = cx(searchWrapperStyle, {
      __pebble__search__small: type === "small",
      __pebble__search__large: type === "large",
      __pebble__search__table: type === "table"
    });
    return createElement("div", {
      className: cx(wrapperClassName, className)
    }, type !== "large" && showSearchIcon && createElement("i", {
      className: "pi pi-search"
    }), createElement("input", Object.assign({
      className: searchStyle,
      type: "text",
      "aria-label": placeholder,
      placeholder: placeholder,
      onChange: e => {
        onChange(e.target.value);
      },
      ref: this.searchInputRef,
      value: value
    }, inputProps)), clearable && createElement("div", {
      className: cx(clearContainer, {
        __display: value && !!value.length
      }),
      onClick: () => {
        if (this.searchInputRef.current) {
          this.searchInputRef.current.value = "";
        }
        onChange("");
      }
    }, createElement("i", {
      className: "pi pi-close",
      style: {
        display: "table-cell",
        verticalAlign: "middle"
      }
    })));
  }
}
Search.defaultProps = {
  showSearchIcon: true,
  clearable: true
};

const selectWrapper =
/*#__PURE__*/
css({
  marginBottom: 20
});
const relativePosition =
/*#__PURE__*/
css({
  position: "relative"
});
const selectInputWrapper =
/*#__PURE__*/
css({
  pointerEvents: "none"
});
const selectInput =
/*#__PURE__*/
css({
  color: colors.gray.darker,
  paddingRight: 15
});
const dropDownClass =
/*#__PURE__*/
css({
  marginTop: -inputMarginBottom
});
const fullWidth =
/*#__PURE__*/
css({
  width: "100%"
});
const inputWrapper =
/*#__PURE__*/
css({
  cursor: "pointer",
  position: "relative"
});
const chevronStyle =
/*#__PURE__*/
css({
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
  const _selected = prevSelected || [];
  const cloned = _selected.slice(0);
  const index = _selected.findIndex(datum => datum === changedValue);
  if (index >= 0) {
    cloned.splice(index, 1);
  } else {
    cloned.push(changedValue);
  }
  return cloned;
}

const optionWrapperMaxHeight = 316;
const searchBoxHeight = 80;
const initialPadding = 20;
const onScrollPadding = 10;
const optionsWrapper =
/*#__PURE__*/
css({
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
const searchBoxWrapper =
/*#__PURE__*/
css({
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
const searchBoxScrolledStyle =
/*#__PURE__*/
css({
  boxShadow: constants.boxShadow.base,
  padding: onScrollPadding
});

class OptionGroup extends PureComponent {
  constructor() {
    super(...arguments);
    this.optionRef = createRef();
    this.optionsRefsSet = new Map();
    this.state = {
      highlighted: -1,
      isScrolled: false
    };
    this.handleKeyPress = e => {
      const {
        handleChange,
        isSelected
      } = this.props;
      const children = Children.toArray(this.props.children);
      const {
        highlighted
      } = this.state;
      const {
        which
      } = e;
      if (which === 13 && children && children[highlighted]) {
        const {
          value
        } =
        children && children[highlighted] && children[highlighted].props;
        handleChange({
          value,
          checked: !isSelected(value)
        }, e);
      }
      this.setState(() => {
        let _highlighted = highlighted;
        if (which === 40) {
          _highlighted = Math.min(_highlighted + 1, Children.count(children) - 1);
        }
        if (which === 38) {
          _highlighted = Math.max(_highlighted - 1, 0);
        }
        return {
          highlighted: _highlighted
        };
      }, () => {
        const currentRef = this.optionsRefsSet.get(highlighted);
        if (this.optionRef.current && (which === 40 || which === 38) && currentRef && currentRef.current) {
          const element = findDOMNode(currentRef.current);
          if (element) {
            scrollIntoView(element, {
              behavior: "smooth",
              boundary: this.optionRef.current
            });
          }
        }
      });
    };
  }
  componentDidMount() {
    this.observer = new IntersectionObserver(entries => {
      this.setState({
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
  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    const {
      searchBox,
      children,
      multiSelect,
      className,
      isSelected,
      handleChange,
      searchBoxProps
    } = this.props;
    const {
      isScrolled,
      highlighted
    } = this.state;
    const _children = Children.map(children, (_option, i) => {
      const option = _option;
      let ref = this.optionsRefsSet.get(i);
      if (!ref) {
        ref = createRef();
        this.optionsRefsSet.set(i, ref);
      }
      return cloneElement(option, {
        onChange: handleChange,
        isActive: highlighted === i,
        isSelected: isSelected(option.props.value),
        multiSelect,
        ref
      });
    });
    const searchBoxClassName = cx(searchBoxWrapper, {
      [searchBoxScrolledStyle]: isScrolled
    });
    return createElement(Fragment, null, searchBox && searchBoxProps && createElement("div", {
      className: searchBoxClassName
    }, createElement(Search, Object.assign({
      type: "small"
    }, searchBoxProps, {
      inputProps: Object.assign({}, searchBoxProps && searchBoxProps.inputProps, {
        onKeyDown: this.handleKeyPress,
        autoFocus: true
      })
    }))), !!Children.count(children) && createElement("div", {
      ref: this.optionRef,
      style: {
        paddingTop: searchBox ? searchBoxHeight : undefined
      },
      className: cx(optionsWrapper, className),
      role: multiSelect ? "group" : "radiogroup",
      "data-test-id": "optiongroup"
    }, _children));
  }
}

const optionGroupCheckBoxButtonWrapPadding = 20;
const optionGroupCheckBoxButtonWrapPaddingTop = 10;
const optionGroupCheckBoxWrap =
/*#__PURE__*/
css({
  maxHeight: `${optionWrapperMaxHeight + searchBoxHeight + 2 * (initialPadding - onScrollPadding) + optionGroupCheckBoxButtonWrapPadding + optionGroupCheckBoxButtonWrapPaddingTop + smallButtonHeight}`,
  position: "relative"
});
const optionGroupCheckBoxButtonWrap =
/*#__PURE__*/
css(Object.assign({}, flexSpaceBetween, {
  padding: `${optionGroupCheckBoxButtonWrapPadding}`,
  paddingTop: `${optionGroupCheckBoxButtonWrapPaddingTop}`,
  backgroundColor: colors.white.base
}));

class OptionGroupCheckBox extends PureComponent {
  constructor() {
    super(...arguments);
    this.isSelected = value => {
      const {
        selected
      } = this.props;
      return !!selected && selected.includes(value);
    };
    this.handleChange = ({
      value
    }, event) => {
      this.props.onChange(getSelectedCheckboxes(value, this.props.selected), {
        props: this.props,
        event
      });
    };
    this.onApply = () => {
      const {
        onApply,
        selected
      } = this.props;
      if (onApply) onApply(selected || [], this.props);
    };
  }
  render() {
    const _a = this.props,
          {
      onApply,
      onClear,
      isSelected,
      onChange
    } = _a,
          rest = __rest(_a, ["onApply", "onClear", "isSelected", "onChange"]);
    return createElement("div", {
      className: optionGroupCheckBoxWrap
    }, createElement(OptionGroup, Object.assign({}, rest, {
      isSelected: isSelected || this.isSelected,
      handleChange: this.handleChange,
      multiSelect: true
    })), (onApply || onClear) && createElement("div", {
      className: optionGroupCheckBoxButtonWrap
    }, onClear && createElement(Button, {
      type: "secondary",
      onClick: onClear
    }, "Clear"), onApply && createElement(Button, {
      onClick: this.onApply
    }, "Apply")));
  }
}

class OptionGroupRadio extends PureComponent {
  constructor() {
    super(...arguments);
    this.isSelected = value => {
      return this.props.selected === value;
    };
    this.handleChange = ({
      value,
      checked
    }, event) => {
      const {
        onChange
      } = this.props;
      onChange(checked ? value : undefined, {
        props: this.props,
        event
      });
    };
  }
  render() {
    const _a = this.props,
          {
      selected,
      onChange,
      isSelected
    } = _a,
          rest = __rest(_a, ["selected", "onChange", "isSelected"]);
    return createElement(OptionGroup, Object.assign({}, rest, {
      isSelected: isSelected || this.isSelected,
      handleChange: this.handleChange
    }));
  }
}

function noop() {}
function Select(props) {
  const {
    className,
    placeholder,
    required,
    errorMessage,
    value,
    dropdownClassName,
    inputProps,
    fullWidthDropdown,
    onDropdownToggle = noop,
    disabled,
    isSelected
  } = props;
  return createElement("div", {
    className: cx(selectWrapper, className, {
      [relativePosition]: fullWidthDropdown
    })
  }, createElement(DropDown, {
    dropDownClassName: cx(dropDownClass, dropdownClassName, {
      [fullWidth]: fullWidthDropdown
    }),
    onOutsideClick: isOpen => onDropdownToggle(isOpen),
    labelComponent: ({
      toggleDropdown,
      isOpen
    }) => {
      const chevron = cx(chevronStyle, "pi", "pi-arrow-drop-down", {
        __pebble__select__open: isOpen
      });
      return createElement("div", {
        className: inputWrapper,
        onClick: disabled ? undefined : () => {
          toggleDropdown();
          onDropdownToggle(isOpen);
        }
      }, createElement(Input, Object.assign({
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
      }, inputProps)), createElement("i", {
        className: chevron
      }));
    }
  }, ({
    toggle,
    isOpen
  }) => {
    const {
      children,
      onClear,
      searchBox,
      searchBoxProps
    } = props;
    const commonProps = {
      isSelected,
      onClear: onClear && (() => {
        onClear();
        onDropdownToggle(isOpen);
        toggle();
      }),
      searchBox,
      searchBoxProps
    };
    if (props.multiSelect) {
      return createElement(OptionGroupCheckBox, Object.assign({
        selected: props.selected,
        onChange: (_value, extras) => {
          props.onChange(_value, extras);
        },
        onApply: props.onApply && (_value => {
          if (props.onApply) props.onApply(_value, props);
          onDropdownToggle(isOpen);
          toggle();
        })
      }, commonProps), children);
    } else {
      return createElement(OptionGroupRadio, Object.assign({
        selected: props.selected,
        onChange: (_value, extras) => {
          if (_value) props.onChange(_value, extras);
          onDropdownToggle(isOpen);
          toggle();
        }
      }, commonProps), children);
    }
  }));
}

const sidebarWrapperStyle =
/*#__PURE__*/
css({
  backgroundColor: "rgba(16,23,33,0.3)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 99
});
const closeStyle =
/*#__PURE__*/
css({
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
const sidebarStyle =
/*#__PURE__*/
css({
  transition: `transform 200ms ${constants.animationCurve}`,
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

const transitionProps = {
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
class SideBar extends PureComponent {
  componentDidMount() {
    if (this.props.isOpen) document.body.classList.add(disableScrollY);
  }
  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.classList.add(disableScrollY);
    } else {
      document.body.classList.remove(disableScrollY);
    }
  }
  componentWillUnmount() {
    if (this.props.isOpen) {
      document.body.classList.remove(disableScrollY);
    }
  }
  render() {
    const {
      width,
      isOpen,
      children,
      onClose,
      closeOnOutsideClick
    } = this.props;
    const _sidebarOverride =
    /*#__PURE__*/
    css({
      width,
      transform: isOpen ? `translateX(0)` : `translateX(${width}px)`
    });
    const _sidebarStyle = cx(_sidebarOverride, sidebarStyle,
    /*#__PURE__*/
    css({
      transform: isOpen ? `translateX(0)` : `translateX(100%)`
    }));
    return createElement(Fragment, null, createElement(Transition, Object.assign({
      items: isOpen
    }, transitionProps, {
      config: animationConfig.config
    }), show => show && (styles => createElement(animated.div, {
      style: styles,
      className: sidebarWrapperStyle
    }))), createElement(OutsideClick, {
      onOutsideClick: this.props.onClose,
      disabled: !closeOnOutsideClick || !isOpen
    }, createElement("div", {
      className: _sidebarStyle
    }, createElement(Transition, Object.assign({
      items: isOpen
    }, transitionProps), show => show && (styles => createElement(animated.div, {
      style: styles,
      className: closeStyle,
      onClick: onClose
    }, createElement("i", {
      className: "pi pi-close"
    }), createElement(Ink, null)))), createElement("div", {
      style: {
        overflowY: "scroll",
        height: "100vh"
      }
    }, children))));
  }
}
SideBar.defaultProps = {
  closeOnOutsideClick: true
};

const rheostatOverrides = `
.rheostat {
  overflow: visible;
}

.rheostat-background {
  background-color: ${colors.violet.lightest};
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  height: 4px;
  top: 0;
  width: 100%;
}

.rheostat-progress {
  background-color: ${colors.violet.base};
  position: absolute;
  height: 4px;
  border-radius: 2px;
  top: 0;
}

.rheostat-handle {
  background-color: ${colors.violet.base};
  border-radius: 50%;
  height: 20px;
  outline: none;
  z-index: 2;
  width: 20px;
  margin-left: -10px;
  top: -8px;
  border: 0;
  cursor: pointer;
  box-shadow: ${constants.boxShadow.xElevated};
}

.__pebble__slider__large .rheostat-handle {
  width: 24px;
  height: 24px;
  margin-left: -12px;
  top: -10px;
}

.rheostat-handle:hover {
  background-color: ${colors.violet.light};
}

.__pebble__slider__disabled .rheostat-handle {
  background-color: ${colors.violet.lighter};
  cursor: inherit;
}

.rheostat-horizontal {
  height: 4px;
}
`;
const sliderHeader =
/*#__PURE__*/
css(Object.assign({}, flexSpaceBetween, {
  marginBottom: 25,
  alignItems: "center",
  ".__pebble__slider__large &": {
    marginBottom: 35
  }
}));

let rheostatStylesOverriden = false;
function overrideRheostatStyles() {
  if (rheostatStylesOverriden) return;
  injectGlobal(rheostatOverrides);
  rheostatStylesOverriden = true;
}
const Slider = _a => {
  var {
    className,
    large,
    title,
    disabled,
    valueLabelExtractor,
    values,
    onValuesUpdated
  } = _a,
      rest = __rest(_a, ["className", "large", "title", "disabled", "valueLabelExtractor", "values", "onValuesUpdated"]);
  overrideRheostatStyles();
  const mainClass = cx(className, {
    __pebble__slider__disabled: disabled,
    __pebble__slider__large: large
  });
  const _values = Array.isArray(values) ? values.slice(0) : values || [];
  if (Array.isArray(values)) {
    if (!values[0] && rest.min) {
      _values[0] = rest.min;
    }
    if (!values[1] && rest.max) {
      _values[1] = rest.max;
    }
  }
  return createElement("div", {
    className: mainClass
  }, createElement("div", {
    className: sliderHeader
  }, createElement("div", {
    style: large ? typography.normal.light : typography.normal.light
  }, title), createElement("div", {
    style: large ? typography.l.regular : typography.normal.regular
  }, valueLabelExtractor())), createElement(Rheostat, Object.assign({
    "aria-valuemax": rest.max,
    "aria-valuemin": rest.min,
    disabled: disabled,
    onValuesUpdated: onValuesUpdated && (args => {
      const {
        min,
        max
      } = args;
      if (Array.isArray(args.values) && args.values[0] === rest.min && args.values[1] === rest.max) {
        onValuesUpdated({
          min,
          max,
          values: []
        });
      } else {
        onValuesUpdated(args);
      }
    }),
    values: _values
  }, rest)));
};

const headStyle =
/*#__PURE__*/
css({
  display: "flex",
  flexDirection: "row",
  position: "relative"
});
const headSection =
/*#__PURE__*/
css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "> div": {
    fontSize: 14
  }
});
const headingStyle =
/*#__PURE__*/
css(Object.assign({}, typography.normal.regular));
const dotStyle$1 =
/*#__PURE__*/
css({
  height: 20,
  width: 20,
  backgroundColor: colors.gray.base,
  borderRadius: "50%",
  border: "5px solid white",
  marginTop: 18,
  position: "relative",
  zIndex: 9
});
const activeDotStyle =
/*#__PURE__*/
css({
  backgroundColor: colors.violet.base
});
const contentWrapper =
/*#__PURE__*/
css({
  marginTop: -10
});
const footerStyle =
/*#__PURE__*/
css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 50
});
const stepperLineStyle =
/*#__PURE__*/
css({
  height: 2,
  bottom: 9,
  position: "absolute",
  transition: "width 100ms ease-out",
  backgroundColor: colors.violet.base
});

function noop$1() {}
class Stepper extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      active: this.props.initialSelectedIndex || 0
    };
    this.goToNextPage = async () => {
      const {
        onBeforeNext,
        data
      } = this.props;
      const allow = await onBeforeNext(this.state.active);
      if (allow) this.goToPage(Math.min(data.length - 1, this.state.active + 1));
    };
    this.goToPrevPage = async () => {
      const allow = await this.props.onBeforePrev(this.state.active);
      if (allow) this.goToPage(Math.max(0, this.state.active - 1));
    };
    this.goToPage = index => {
      const prev = this.state.active;
      this.setState({
        active: index
      }, () => this.props.onChange({
        prev,
        current: this.state.active
      }));
    };
    this.getHeadings = () => {
      const {
        headingExtractor,
        data
      } = this.props;
      return data.map(datum => headingExtractor({
        item: datum
      }));
    };
    this.getLeftButtonData = () => {
      const {
        cancelLabel,
        prevLabel,
        onCancel
      } = this.props;
      return this.state.active === 0 ? {
        label: cancelLabel,
        action: onCancel
      } : {
        label: prevLabel,
        action: this.goToPrevPage
      };
    };
    this.getRightButtonData = () => {
      const {
        nextLabel,
        onDone,
        data,
        doneLabel
      } = this.props;
      return this.state.active === data.length - 1 ? {
        label: doneLabel,
        action: onDone
      } : {
        label: nextLabel,
        action: this.goToNextPage
      };
    };
  }
  render() {
    const {
      data,
      renderContentElement,
      keyExtractor,
      renderFooterElement,
      className,
      allowSkip
    } = this.props;
    const {
      active
    } = this.state;
    const args = {
      goToNext: this.goToNextPage,
      goToPage: this.goToPage,
      goToPrev: this.goToPrevPage,
      leftButtonData: this.getLeftButtonData(),
      rightButtonData: this.getRightButtonData()
    };
    return createElement("div", {
      className: className
    }, createElement("div", {
      className: headStyle
    }, this.getHeadings().map((heading, i) => {
      const dotClass = cx(dotStyle$1, {
        [activeDotStyle]: i <= active
      });
      const headingColor = i === active ? colors.violet.base : allowSkip ? colors.gray.base : undefined;
      return createElement("div", {
        key: keyExtractor(data[i]),
        className: cx(headSection, {
          [
          /*#__PURE__*/
          css({
            cursor: "inherit"
          })]: !allowSkip
        }),
        onClick: allowSkip ? () => this.goToPage(i) : noop$1
      }, createElement("div", {
        className: headingStyle,
        style: {
          color: headingColor
        }
      }, heading), createElement("div", {
        className: dotClass
      }));
    }), createElement("div", {
      className: stepperLineStyle,
      style: {
        width: `${100 / (2 * data.length) * 2 * active}%`,
        marginLeft: `${100 / (2 * data.length)}%`
      }
    })), createElement("div", {
      className: contentWrapper
    }, data.map((datum, i) => createElement("div", {
      key: keyExtractor(datum),
      className: cx({
        [
        /*#__PURE__*/
        css({
          display: "none"
        })]: i !== this.state.active
      })
    }, renderContentElement(Object.assign({
      item: datum,
      isSelected: i === this.state.active
    }, args)))), renderFooterElement(Object.assign({
      activeIndex: this.state.active
    }, args), this.props)));
  }
}
Stepper.defaultProps = {
  allowSkip: true,
  cancelLabel: "Cancel",
  nextLabel: "Next",
  prevLabel: "Prev",
  doneLabel: "Done",
  onBeforeNext: () => true,
  onBeforePrev: () => true,
  onChange: () => {},
  onCancel: () => {},
  onDone: () => {},
  renderFooterElement: ({
    leftButtonData,
    rightButtonData
  }, props) => {
    return createElement("footer", {
      className: footerStyle
    }, createElement(Button, {
      size: "large",
      width: 100,
      type: "secondary",
      onClick: leftButtonData.action
    }, leftButtonData.label), createElement(Button, {
      size: "large",
      width: 100,
      loading: props.isRightButtonLoading,
      onClick: rightButtonData.action
    }, rightButtonData.label));
  }
};

const tagStyle =
/*#__PURE__*/
css(Object.assign({}, typography.s.bold, flexSpaceBetween, {
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
const iconClass =
/*#__PURE__*/
css({
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

const Tag = ({
  label,
  color,
  onClose,
  className
}) => {
  const wrapperClassName = cx(tagStyle, {
    __pebble__tag__with__close: !!onClose
  });
  const _className = cx(wrapperClassName, className);
  return createElement("div", {
    className: _className,
    style: {
      color: colors[color].base,
      backgroundColor: colors[color].lightest || colors[color].light
    }
  }, label, " ", onClose && createElement("i", {
    onClick: onClose,
    className: cx("pi", "pi-close", iconClass)
  }, createElement(Ink, null)));
};

const toastWrapper =
/*#__PURE__*/
css(Object.assign({
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

const emitter =
/*#__PURE__*/
new Mitt();
const _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};
class Toast extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      text: "",
      type: "success",
      show: false
    };
    this.show = ({
      text,
      type = "success",
      time
    }) => {
      this.setState({
        text,
        type,
        show: true
      });
      if (this.showTimer) {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      }
      this.showTimer = window.setTimeout(() => this.setState({
        show: false
      }), time ? time : this.props.defaultTime || 5000);
    };
    this.hide = () => this.setState({
      show: false
    });
  }
  static show(text, type, time) {
    emitter.emit("showToast", {
      text,
      type,
      time
    });
  }
  static hide() {
    emitter.emit("hideToast");
  }
  componentDidMount() {
    emitter.on("showToast", this.show);
    emitter.on("hideToast", this.hide);
  }
  componentWillUnmount() {
    emitter.off("showToast", this.show);
    emitter.off("hideToast", this.hide);
  }
  render() {
    const bColor = _colors[this.state.type];
    const iconClass = cx("pi", {
      "pi-radio-check-filled": this.state.type === "success",
      "pi-close-circle-filled": this.state.type === "error"
    });
    return createElement(Transition, {
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
    }, show => show && (styles => createElement(animated.div, {
      className: cx(toastWrapper, this.props.className),
      style: Object.assign({
        backgroundColor: bColor
      }, styles)
    }, createElement("i", {
      className: iconClass
    }), this.state.text)));
  }
}

const wrapper =
/*#__PURE__*/
css({
  position: "relative"
});
const optionsWrapper$1 =
/*#__PURE__*/
css({
  width: "100%",
  position: "absolute",
  marginTop: -40,
  zIndex: 999,
  boxShadow: constants.boxShadow.elevated,
  transformOrigin: "0 0"
});

function defaultSearchBox({
  registerChange,
  onFocus,
  value
}, props) {
  return createElement(Input, {
    onChange: registerChange,
    placeholder: props.placeholder,
    inputProps: {
      onFocus,
      onKeyDown: e => {
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
class TypeAhead extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.initialValue || "",
      showSuggestions: false
    };
    this.onChange = () => {
      this.props.onChange(this.state.value, this.props);
    };
    this.debouncedChange = debounce(this.onChange, this.props.debounceTime);
    this.registerChange = value => {
      this.setState({
        value
      }, this.debouncedChange);
    };
    this.onFocus = () => {
      this.setState({
        showSuggestions: true
      });
    };
    this.onSelect = _value => {
      this.props.onSelect(_value, this.props);
      this.setState({
        showSuggestions: false,
        value: _value && this.props.valueExtractor(_value) || ""
      });
    };
  }
  render() {
    const {
      className,
      searchBox = defaultSearchBox,
      dropdownClassName,
      children
    } = this.props;
    const {
      showSuggestions,
      value
    } = this.state;
    return createElement(OutsideClick, {
      onOutsideClick: () => this.setState({
        showSuggestions: false
      }),
      disabled: !showSuggestions,
      className: cx(wrapper, className)
    }, searchBox({
      registerChange: this.registerChange,
      onFocus: this.onFocus,
      value
    }, this.props), createElement(MountTransition, {
      visible: showSuggestions,
      native: true
    }, transitionStyles => createElement(animated.div, {
      style: transitionStyles,
      className: cx(optionsWrapper$1, dropdownClassName)
    }, createElement(OptionGroupRadio, {
      onChange: this.onSelect
    }, children))));
  }
}
TypeAhead.defaultProps = {
  debounceTime: 500,
  onClear: () => {}
};

const dateClass =
/*#__PURE__*/
css({
  padding: 20,
  width: "100%"
});
const dropDownClassName =
/*#__PURE__*/
css({
  marginTop: -inputMarginBottom
});

class NativeDateInput extends PureComponent {
  constructor() {
    super(...arguments);
    this.onDateInputChange = value => {
      const date = parse(value);
      this.props.onChange(date && date.getTime());
    };
  }
  render() {
    const {
      inputProps,
      placeholder,
      value
    } = this.props;
    return createElement(Input, Object.assign({
      onChange: this.onDateInputChange,
      type: "date"
      ,
      value: value && format(value, "YYYY-MM-DD"),
      placeholder: placeholder,
      fixLabelAtTop: true
    }, inputProps));
  }
}

const defaultContext = {
  userAgent: ""
};
const UserAgentInfoContext =
/*@__PURE__*/
createContext(defaultContext);
function computeUserAgentInfo(userAgent) {
  return {
    userAgent
  };
}
class UserAgentInfoProvider extends PureComponent {
  constructor(props) {
    super(props);
    if (typeof navigator !== "undefined" && navigator.userAgent) {
      this.state = computeUserAgentInfo(navigator.userAgent);
    } else if (props.userAgent) {
      this.state = computeUserAgentInfo(props.userAgent);
    } else {
      this.state = defaultContext;
    }
  }
  render() {
    return createElement(UserAgentInfoContext.Provider, {
      value: this.state
    }, this.props.children);
  }
}

const noop$2 = () => {};
function dateFormat(str) {
  const clean = str.replace(/[^\d]+/gi, "");
  const chars = clean.split("");
  return chars.reduce((r, v, index) => `${r}${v}${index === 1 || index === 3 ? "/" : ""}`.substr(0, 10), "");
}
class DateInput extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      stringInput: ""
    };
    this.onCalendarDateChange = date => {
      this.props.onChange(date.getTime());
    };
    this.onInputChange = input => {
      this.setState({
        stringInput: input
      });
      if (input.length === 10) {
        const date = startOfDay(new Date());
        date.setFullYear(parseInt(input.substr(6, 4), 10), parseInt(input.substr(3, 5), 10) - 1, parseInt(input.substr(0, 2), 10));
        this.props.onChange(date.getTime());
      }
    };
  }
  static getDerivedStateFromProps(props, state) {
    let newState = null;
    if (props.value && props.value !== state.propsValue) {
      newState = {
        propsValue: props.value,
        stringInput: props.value && format(props.value, "DD/MM/YYYY") || ""
      };
    }
    return newState;
  }
  render() {
    const {
      calendarProps,
      inputProps,
      placeholder,
      value: propsValue
    } = this.props;
    return createElement(DropDown, {
      dropDownClassName: dropDownClassName,
      labelComponent: ({
        toggleDropdown
      }) => createElement(Rifm, {
        value: this.state.stringInput,
        onChange: this.onInputChange,
        format: dateFormat
      }, ({
        value,
        onChange
      }) => createElement(Input, Object.assign({
        onChange: noop$2,
        type: "tel",
        value: value,
        placeholder: `${placeholder} DD/MM/YYYY`,
        onClick: toggleDropdown,
        fixLabelAtTop: true
      }, inputProps, {
        inputProps: Object.assign({
          placeholder: "DD/MM/YYYY"
        }, inputProps && inputProps.inputProps, {
          onChange
        })
      })))
    }, ({
      toggle
    }) => createElement(Calendar, Object.assign({
      hideShadow: true,
      className: dateClass,
      selected: propsValue ? new Date(propsValue) : undefined
    }, calendarProps, {
      range: false,
      onChange: date => {
        this.onCalendarDateChange(date);
        toggle();
      }
    })));
  }
}
function checkDateInputSupport() {
  try {
    const input = document.createElement("input");
    const type = "date";
    input.setAttribute("type", "date");
    input.value = "\x01";
    return input.type === type && (input.value !== "\x01" || !input.checkValidity());
  } catch (e) {
    return true;
  }
}
const hasDateInputSupport =
/*@__PURE__*/
checkDateInputSupport();
class BrowserBasedDateInput extends PureComponent {
  render() {
    return createElement(UserAgentInfoContext.Consumer, null, ({
      userAgent
    }) => {
      if (/Android|iPhone|iPad/i.test(userAgent) && hasDateInputSupport) {
        return createElement(NativeDateInput, this.props);
      }
      return createElement(DateInput, this.props);
    });
  }
}
BrowserBasedDateInput.contextType = UserAgentInfoContext;

const popperStyle =
/*#__PURE__*/
css({
  margin: 14,
  boxShadow: constants.boxShadow.xElevated,
  borderRadius: constants.borderRadius
});
const arrowStyle =
/*#__PURE__*/
css({
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

class default_1 extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: !!this.props.isOpen
    };
    this.toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }
  render() {
    const _a = this.props,
          {
      label,
      popperBackgroundColor,
      children,
      controlled,
      isOpen,
      popperClassName,
      onOutsideClick
    } = _a,
          props = __rest(_a, ["label", "popperBackgroundColor", "children", "controlled", "isOpen", "popperClassName", "onOutsideClick"]);
    const _isPopperOpen = controlled ? !!isOpen : this.state.isOpen;
    return createElement(OutsideClick, {
      onOutsideClick: () => {
        this.setState({
          isOpen: false
        });
        if (onOutsideClick) {
          onOutsideClick();
        }
      },
      disabled: !_isPopperOpen
    }, createElement(Manager, null, createElement(Reference, null, ({
      ref
    }) => createElement("div", {
      style: {
        display: "inline-block"
      },
      ref: ref
    }, typeof label === "function" ? label({
      toggle: this.toggle,
      isOpen: this.state.isOpen
    }) : label)), createElement(MountTransition, {
      visible: _isPopperOpen
    }, transitionStyles => createElement(Popper, Object.assign({}, props, {
      positionFixed: true
    }), ({
      ref,
      style,
      placement,
      arrowProps
    }) => {
      const wrapperStyle = Object.assign({}, style, transitionStyles, {
        backgroundColor: popperBackgroundColor,
        transform: `${style.transform || ""} ${transitionStyles.transform || ""}`,
        transformOrigin: `${arrowProps.style.left || 0}px ${arrowProps.style.top || 0}px`
      });
      return createElement("div", {
        className: cx(popperStyle, popperClassName),
        ref: ref,
        style: wrapperStyle,
        "data-placement": placement
      }, children({
        toggle: this.toggle,
        isOpen: this.state.isOpen
      }), createElement("div", {
        className: arrowStyle,
        ref: arrowProps.ref,
        style: Object.assign({}, arrowProps.style, {
          color: popperBackgroundColor
        }),
        "data-placement": placement
      }, "\u25B6"));
    }))));
  }
}
default_1.defaultProps = {
  placement: "bottom",
  popperBackgroundColor: colors.white.base,
  closeOnOutsideClick: true
};

const textStyle =
/*#__PURE__*/
css(Object.assign({}, typography.s.regular, {
  color: colors.white.base,
  display: "block",
  padding: "10px 16px"
}));
const popperStyle$1 =
/*#__PURE__*/
css({
  margin: 4,
  boxShadow: "none",
  maxWidth: 320
});

class Tooltip extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: !!this.props.isOpen
    };
    this.labelRef = createRef();
    this.showTooltip = () => this.setState({
      isOpen: true
    });
    this.hideTooltip = () => this.setState({
      isOpen: false
    });
    this.addListeners = () => {
      if (!this.props.disabled) {
        this.labelRef.current.addEventListener("mouseenter", this.showTooltip);
        this.labelRef.current.addEventListener("mouseout", this.hideTooltip);
      }
    };
    this.removeListeners = () => {
      this.labelRef.current.removeEventListener("mouseenter", this.showTooltip);
      this.labelRef.current.removeEventListener("mouseout", this.showTooltip);
    };
    this.getTooltip = () => createElement("span", {
      className: textStyle
    }, this.props.text);
  }
  componentDidMount() {
    this.addListeners();
  }
  componentWillUnmount() {
    this.removeListeners();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.props.disabled ? this.removeListeners() : this.addListeners();
    }
  }
  render() {
    const {
      placement,
      label,
      modifiers,
      isError
    } = this.props;
    return createElement(default_1, {
      label: () => label({
        ref: this.labelRef
      }),
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
}

const Logo = ({
  height = 40,
  color = "#000000"
}) => {
  const style =
  /*#__PURE__*/
  css({
    fill: color
  });
  return createElement("svg", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    height: height,
    viewBox: "0 0 413.31 92.91"
  }, createElement("defs", null, createElement("clipPath", {
    id: "clip-path",
    transform: "translate(-57.88 -61.39)"
  }, createElement("rect", {
    className: "cls-1",
    width: "529.46",
    height: "215.51"
  }))), createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, createElement("g", {
    className: "cls-2",
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, createElement("polygon", {
    className: style,
    points: "7.31 91.39 3.84 82.98 2.62 82.98 6.81 92.81 7.79 92.81 11.98 82.98 10.8 82.98 7.31 91.39"
  }), createElement("path", {
    className: style,
    d: "M89.05 144.31l-4.45 9.82h1.13l1.16-2.57h5.31l1.14 2.57h1.18l-4.44-9.82zm-1.73 6.24l2.23-5 2.22 5z",
    transform: "translate(-57.88 -61.39)"
  }), createElement("polygon", {
    className: style,
    points: "54.71 82.98 53.61 82.98 53.61 92.74 60.2 92.74 60.2 91.72 54.71 91.72 54.71 82.98"
  }), createElement("path", {
    className: style,
    d: "M141.75 150.05c0 2.13-1.14 3.22-2.94 3.22s-3-1.18-3-3.29v-5.6h-1.1v5.67c0 2.76 1.64 4.24 4.05 4.24s4.07-1.48 4.07-4.32v-5.59h-1.1z",
    transform: "translate(-57.88 -61.39)"
  }), createElement("polygon", {
    className: style,
    points: "103.72 88.32 109.04 88.32 109.04 87.32 103.72 87.32 103.72 83.99 109.67 83.99 109.67 82.98 102.62 82.98 102.62 92.74 109.74 92.74 109.74 91.74 103.72 91.74 103.72 88.32"
  }), createElement("path", {
    className: style,
    d: "M186.15 148.73c-2.14-.46-2.65-1-2.65-1.9 0-.87.81-1.57 2.08-1.57a4.3 4.3 0 0 1 2.82 1.06l.64-.85a5.07 5.07 0 0 0-3.43-1.2c-1.85 0-3.21 1.13-3.21 2.66 0 1.6 1 2.33 3.28 2.81 2 .44 2.54.95 2.54 1.86 0 1-.87 1.65-2.18 1.65a4.63 4.63 0 0 1-3.34-1.38l-.69.81a5.69 5.69 0 0 0 4 1.56c1.94 0 3.33-1.08 3.33-2.76 0-1.49-1-2.29-3.18-2.76m44.24-4.51a5 5 0 0 0-5 5 5 5 0 1 0 10 0 4.9 4.9 0 0 0-5-5m3.82 5.07a3.83 3.83 0 0 1-3.82 4 3.88 3.88 0 0 1-3.85-4 3.83 3.83 0 0 1 3.82-4 3.88 3.88 0 0 1 3.85 4z",
    transform: "translate(-57.88 -61.39)"
  }), createElement("polygon", {
    className: style,
    points: "198.14 91.39 194.67 82.98 193.44 82.98 197.64 92.81 198.61 92.81 202.81 82.98 201.62 82.98 198.14 91.39"
  }), createElement("polygon", {
    className: style,
    points: "220.87 88.32 226.2 88.32 226.2 87.32 220.87 87.32 220.87 83.99 226.82 83.99 226.82 82.98 219.77 82.98 219.77 92.74 226.9 92.74 226.9 91.74 220.87 91.74 220.87 88.32"
  }), createElement("path", {
    className: style,
    d: "M309.76 147.31a2.73 2.73 0 0 0-.75-1.93 3.88 3.88 0 0 0-2.78-1H302v9.75h1.1v-3.79h2.78l2.83 3.79h1.35l-3-4a2.86 2.86 0 0 0 2.65-2.84m-6.62 2v-3.89h3c1.57 0 2.49.72 2.49 1.92 0 1.25-1 2-2.51 2z",
    transform: "translate(-57.88 -61.39)"
  }), createElement("polygon", {
    className: style,
    points: "292.36 91.39 288.89 82.98 287.66 82.98 291.86 92.81 292.83 92.81 297.03 82.98 295.84 82.98 292.36 91.39"
  }), createElement("path", {
    className: style,
    d: "M374.09 144.31l-4.44 9.82h1.13l1.15-2.57h5.31l1.15 2.57h1.18l-4.45-9.82zm-1.73 6.24l2.23-5 2.22 5z",
    transform: "translate(-57.88 -61.39)"
  }), createElement("polygon", {
    className: style,
    points: "339.75 82.98 338.65 82.98 338.65 92.74 345.24 92.74 345.24 91.72 339.75 91.72 339.75 82.98"
  }), createElement("path", {
    className: style,
    d: "M426.8 150.05c0 2.13-1.14 3.22-2.94 3.22s-3-1.18-3-3.29v-5.6h-1.11v5.67c0 2.76 1.65 4.24 4.06 4.24s4.07-1.48 4.07-4.32v-5.59h-1.1z",
    transform: "translate(-57.88 -61.39)"
  }), createElement("polygon", {
    className: style,
    points: "388.76 88.32 394.09 88.32 394.09 87.32 388.76 87.32 388.76 83.99 394.72 83.99 394.72 82.98 387.66 82.98 387.66 92.74 394.79 92.74 394.79 91.74 388.76 91.74 388.76 88.32"
  }), createElement("rect", {
    className: style,
    y: "76.12",
    width: "399.11",
    height: "0.74"
  }), createElement("polygon", {
    className: style,
    points: "72.54 33.07 117.31 71.74 117.31 11.02 107.61 11.03 107.61 51.1 63.42 11.18 63.42 71.06 72.54 71.06 72.54 33.07"
  }), createElement("path", {
    className: style,
    d: "M193.23 120.52h27.68l5.81 12h10.95l-30.41-62L177 132.5h10.44zm4.12-9.93l9.33-19.19 9.32 19.19zm-122.42 9.93h27.68l5.82 12h10.95L89 70.47l-30.29 62h10.4zm4.12-9.93l9.33-19.19 9.33 19.19zM248.39 120h2.89v13h2.81v-15.81h-8.5v13.05H242v-18.56l7.22-6.61 27.3 27.66h13.89l-26.89-26.54c5.63-.34 21.73-2.47 21.73-15.85 0-11.29-8.31-18-22.23-18h-23.71V133h9.09zm14.13-22.2H250V82.33h12.3c7.59 0 11.94 2.59 11.94 7.1.04 7.26-7.33 8.34-11.72 8.34zm55.55 34.72c18.06 0 30.67-12.37 30.67-30.09A30 30 0 0 0 340.28 81c-5.55-5.55-13.44-8.6-22.21-8.6-17.84 0-30.78 12.65-30.78 30.08s12.94 30.09 30.78 30.09m-21.41-30.1c0-13.3 8.81-22.6 21.43-22.6s21.27 9.3 21.27 22.6-8.75 22.74-21.27 22.74-21.43-9.4-21.43-22.79zm84.28 30.26c10.83 0 19-4.43 24.42-13.17l.25-.4-6.25-5.06-.31.57c-4.47 8.19-11.83 9.91-17.21 9.91-12.38 0-20.69-8.94-20.69-22.24 0-12.2 8.59-21.4 20-21.4 7.29 0 13.67 2.68 16.24 6.82l.37.6 5.77-6.15-.27-.36c-4.64-6.25-12-9.29-22.53-9.29-17.09 0-30 12.83-30 29.85 0 17.85 12.42 30.32 30.2 30.32",
    transform: "translate(-57.88 -61.39)"
  }), createElement("polygon", {
    className: style,
    points: "360.13 46.74 362.55 44.05 386.41 70.99 398.53 70.99 369.14 37.48 394.27 11.15 382.73 11.15 360.13 34.58 360.13 11.02 349.68 11.02 349.68 71.02 360.13 71.02 360.13 46.74"
  }), createElement("path", {
    className: style,
    d: "M461.59 68.58h1.6a2.58 2.58 0 0 0 1.57-.34 1.08 1.08 0 0 0 .42-.9 1.1 1.1 0 0 0-.2-.64 1.28 1.28 0 0 0-.56-.43 4.3 4.3 0 0 0-1.33-.14h-1.5zm-1.31 4.6V65h2.8a6.88 6.88 0 0 1 2.09.23 2 2 0 0 1 1 .79 2.1 2.1 0 0 1 .38 1.19 2.17 2.17 0 0 1-.64 1.56 2.53 2.53 0 0 1-1.7.74 2.27 2.27 0 0 1 .69.43 9.29 9.29 0 0 1 1.21 1.62l1 1.6h-1.6l-.73-1.29a6.64 6.64 0 0 0-1.39-1.9 1.67 1.67 0 0 0-1.05-.27h-.78v3.46zm3.33-10.53a6.55 6.55 0 0 0-3.12.82 5.89 5.89 0 0 0-2.37 2.35 6.31 6.31 0 0 0 0 6.31 5.9 5.9 0 0 0 2.35 2.35 6.33 6.33 0 0 0 6.3 0 5.88 5.88 0 0 0 2.34-2.35 6.35 6.35 0 0 0 .84-3.14 6.47 6.47 0 0 0-.85-3.17 5.89 5.89 0 0 0-2.37-2.35 6.57 6.57 0 0 0-3.12-.82zm0-1.26a7.72 7.72 0 0 1 3.73 1 7 7 0 0 1 2.84 2.8 7.82 7.82 0 0 1 1 3.81 7.63 7.63 0 0 1-1 3.77 7 7 0 0 1-2.8 2.81 7.58 7.58 0 0 1-7.56 0 7 7 0 0 1-2.82-2.82 7.64 7.64 0 0 1-1-3.76 7.72 7.72 0 0 1 1-3.81 7 7 0 0 1 2.84-2.8 7.76 7.76 0 0 1 3.77-1z",
    transform: "translate(-57.88 -61.39)"
  }))));
};

const modalPadding = 30;
const modalContainer$1 =
/*#__PURE__*/
css({
  background: "white",
  width: "360px",
  alignSelf: "center",
  borderRadius: constants.borderRadius,
  padding: `${modalPadding}px`,
  position: "relative"
});
const flexCenter =
/*#__PURE__*/
css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%"
});
const buttonsContainer =
/*#__PURE__*/
css(Object.assign({}, flexSpaceBetween, {
  marginTop: "40px"
}));
const iconCloseClassName =
/*#__PURE__*/
css({
  cursor: "pointer",
  position: "absolute",
  right: `${modalPadding}px`,
  top: `${modalPadding}px`,
  fontSize: "14px",
  color: colors.gray.base,
  "&:hover": {
    color: colors.gray.darker
  }
});

const PopUp = props => {
  const {
    onClose,
    onApprove,
    onReject,
    visible,
    approveButtonText = "Yes",
    rejectButtonText = "No",
    children
  } = props;
  return createElement(Modal, {
    visible: visible,
    modalClassName: flexCenter
  }, createElement("div", {
    className: modalContainer$1
  }, onClose && createElement("i", {
    className: cx("pi", "pi-close", iconCloseClassName),
    onClick: onClose
  }), children, (onReject || onApprove) && createElement("div", {
    className: buttonsContainer
  }, onReject && createElement(Button, {
    size: "large",
    type: "secondary",
    onClick: onReject
  }, rejectButtonText), onApprove && createElement(Button, {
    size: "large",
    type: "primary",
    onClick: onApprove
  }, approveButtonText))));
};

const radioIconStyle =
/*#__PURE__*/
css({
  marginRight: 10,
  fontSize: 16
});
const controlStyle =
/*#__PURE__*/
css(Object.assign({
  cursor: "pointer",
  display: "flex",
  outline: "none",
  padding: "10px 0",
  position: "relative",
  alignItems: "center"
}, typography.normal.regular, {
  "&[data-disabled='true']": {
    cursor: "not-allowed",
    [`.${radioIconStyle}`]: {
      color: colors.gray.light
    }
  }
}));

function Control(props) {
  const {
    checked,
    onChange,
    value,
    disabled,
    children = ControlView,
    type,
    className
  } = props;
  return createElement("div", {
    className: cx(controlStyle, className),
    role: type,
    "aria-disabled": disabled,
    "aria-checked": checked,
    "data-disabled": disabled,
    tabIndex: checked ? 0 : -1,
    onClick: !disabled ? e => onChange && onChange({
      value,
      checked: !checked
    }, e) : undefined
  }, children(props));
}
const ControlView = ({
  checked,
  label,
  type,
  disabled
}) => {
  const isRadio = type === "radio";
  const iconClass = cx(radioIconStyle, "pi", {
    "pi-radio": isRadio && !checked && !disabled,
    "pi-radio-selected": isRadio && (checked || disabled),
    "pi-checkbox-selected": !isRadio && (checked || disabled),
    "pi-checkbox-unselected": !isRadio && !checked && !disabled
  });
  const getColor = () => {
    if (disabled) {
      return colors.gray.base;
    }
    if (checked) {
      return colors.violet.base;
    }
    return colors.gray.light;
  };
  return createElement(Fragment, null, createElement("i", {
    style: {
      color: getColor(),
      paddingTop: 2
    },
    className: iconClass
  }), " ", label);
};

function Radio(props) {
  return createElement(Control, Object.assign({}, props, {
    type: "radio"
  }));
}

class RadioGroup extends PureComponent {
  constructor() {
    super(...arguments);
    this.handleChange = ({
      value,
      checked
    }, event) => {
      const {
        toggle,
        selected,
        onChange
      } = this.props;
      if (!toggle && value === selected) return;
      onChange(checked ? value : undefined, event);
    };
  }
  render() {
    const {
      children,
      selected,
      className,
      name,
      disabled
    } = this.props;
    const _children = Children.map(children, _radio => {
      const radio = _radio;
      return cloneElement(radio, {
        onChange: this.handleChange,
        checked: selected === radio.props.value,
        disabled
      });
    });
    return createElement("div", {
      role: "radiogroup",
      "aria-label": name,
      className: className
    }, _children);
  }
}

function Checkbox(props) {
  return createElement(Control, Object.assign({}, props, {
    type: "checkbox"
  }));
}

class CheckboxGroup extends PureComponent {
  constructor() {
    super(...arguments);
    this.handleChange = ({
      value
    }, event) => {
      const {
        onChange,
        selected
      } = this.props;
      onChange(getSelectedCheckboxes(value, selected), event);
    };
  }
  render() {
    const {
      children,
      selected,
      className,
      name,
      disabled
    } = this.props;
    const _children = Children.map(children, _checkbox => {
      const checkbox = _checkbox;
      return cloneElement(checkbox, {
        onChange: this.handleChange,
        checked: selected.indexOf(checkbox.props.value) >= 0,
        disabled
      });
    });
    return createElement("div", {
      role: "checkboxgroup",
      "aria-label": name,
      className: className
    }, _children);
  }
}

const rowWrapper =
/*#__PURE__*/
css(Object.assign({}, typography.normal.regular, {
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
const labelWrap =
/*#__PURE__*/
css({
  userSelect: "none",
  overflow: "hidden",
  textOverflow: "ellipsis"
});
const activeRow =
/*#__PURE__*/
css({
  backgroundColor: colors.gray.lightest
});
const selectedRow =
/*#__PURE__*/
css(Object.assign({
  color: colors.violet.base
}, typography.normal.bold));

const defaultProps = {
  rightElement: ({
    isSelected,
    multiSelect
  }) => {
    const iconClass = cx("pi", {
      "pi-checkbox-selected": isSelected,
      "pi-checkbox-unselected": !isSelected
    },
    /*#__PURE__*/
    css({
      marginLeft: "10px",
      color: isSelected ? colors.violet.base : colors.gray.light,
      fontSize: "20px"
    }));
    return multiSelect ? createElement("i", {
      className: iconClass
    }) : null;
  }
};
class Option extends Component {
  render() {
    const {
      label,
      isActive,
      isSelected,
      rightElement,
      labelClassName,
      className
    } = this.props;
    const _class = cx(rowWrapper, {
      [activeRow]: isActive,
      [selectedRow]: isSelected
    }, className);
    return createElement(Control, Object.assign({}, this.props, {
      checked: this.props.isSelected,
      type: this.props.multiSelect ? "checkbox" : "radio",
      className: _class
    }), () => {
      return createElement(Fragment, null, createElement("div", {
        className: cx(labelWrap, labelClassName)
      }, label), rightElement(this.props), createElement(Ink, null));
    });
  }
}
Option.defaultProps = defaultProps;

const wrapper$1 =
/*#__PURE__*/
css({
  display: "flex"
});
const selectStyle =
/*#__PURE__*/
css({
  width: "80px",
  marginBottom: 0
});
const combinedLabelStyle =
/*#__PURE__*/
css({
  zIndex: 1
});

class PhoneNumberInput extends Component {
  constructor() {
    super(...arguments);
    this.onCountrySelect = countryCode => {
      this.props.onChange({
        countryCode,
        phone: this.props.phone
      });
    };
    this.onNumberChange = value => {
      const _value = value.replace(/\D/g, "");
      if (_value === this.props.phone) {
        return;
      }
      this.props.onChange({
        countryCode: this.props.countryCode,
        phone: _value
      });
    };
  }
  render() {
    const {
      phone,
      countryCode,
      className,
      selectProps,
      inputProps,
      required,
      placeholder
    } = this.props;
    return createElement("div", {
      className: cx(wrapper$1, className)
    }, createElement("label", {
      className: cx(labelStyle, "_pebble_input_label_focused", combinedLabelStyle)
    }, placeholder || "Phone No.", required && createElement("span", {
      style: {
        color: colors.red.base
      }
    }, "\xA0*")), createElement(Select, Object.assign({
      placeholder: "",
      onChange: this.onCountrySelect,
      value: countryCode + "",
      selected: countryCode
    }, selectProps, {
      className: cx(selectStyle, selectProps && selectProps.className)
    }), this.props.children), createElement(Input, Object.assign({
      onChange: this.onNumberChange,
      placeholder: "",
      value: phone
    }, inputProps)));
  }
}

const timePickerWrap =
/*#__PURE__*/
css({
  display: "flex",
  alignItems: "center",
  border: `1px solid ${colors.gray.light}`,
  borderRadius: "3px",
  cursor: "pointer",
  "&:not([disabled]):hover": {
    background: colors.gray.light
  }
});
const timePickerSelected =
/*#__PURE__*/
css({
  backgroundColor: colors.gray.lighter
});
const hourPicker =
/*#__PURE__*/
css({
  borderRadius: "3px 0px 0px 3px",
  borderRight: "none"
});
const seperator =
/*#__PURE__*/
css({
  color: colors.gray.dark,
  lineHeight: "40px"
});
const minutePicker =
/*#__PURE__*/
css({
  borderLeft: "none",
  borderRadius: "0px 3px 3px 0px"
});
const optionStyle =
/*#__PURE__*/
css({
  width: "100px"
});

const HOURS =
/*#__PURE__*/
[...Array(12)].map((_, i) => ("00" + (i + 1).toString(10)).slice(-2));
const MINUTES =
/*#__PURE__*/
[...Array(4)].map((_, i) => ("00" + (i * 15).toString(10)).slice(-2));
const iconStyle$1 =
/*#__PURE__*/
css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 8,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2,
  color: colors.gray.dark,
  display: "inline-block"
});
const buttonStyle =
/*#__PURE__*/
css({
  padding: "15px 20px",
  fontSize: "12px",
  color: colors.gray.darker,
  lineHeight: "9px"
});
const TimePicker = props => {
  const {
    selectedHour,
    selectedMinute,
    onHourChange,
    onMinuteChange
  } = props;
  const selected = !!selectedHour || selectedMinute !== undefined;
  return createElement("div", {
    className: cx({
      [timePickerWrap]: true,
      [timePickerSelected]: selected
    })
  }, createElement(DropDown, {
    labelClassName: hourPicker,
    isSelected: selected,
    labelComponent: ({
      isOpen,
      toggleDropdown
    }) => createElement("div", {
      onClick: () => {
        toggleDropdown();
      },
      className: buttonStyle,
      "data-test-id": "hour-label"
    }, createElement("span", {
      className:
      /*#__PURE__*/
      /*#__PURE__*/
      css({
        marginRight: "15px"
      })
    }, selectedHour ? selectedHour : "Hrs"), createElement("span", null, createElement("i", {
      className: cx("pi pi-arrow-drop-down", iconStyle$1),
      style: {
        transform: isOpen ? "rotate(180deg)" : "none"
      }
    })))
  }, ({
    toggle
  }) => createElement(OptionGroupRadio, {
    onChange: value => {
      onHourChange(value);
      toggle();
    },
    selected: selectedHour,
    className: optionStyle
  }, HOURS.map(hour => createElement(Option, {
    key: hour,
    value: parseInt(hour, 10),
    label: hour,
    className: optionStyle
  })))), createElement("span", {
    className: seperator
  }, ":"), createElement(DropDown, {
    labelClassName: minutePicker,
    isSelected: selected,
    labelComponent: ({
      isOpen,
      toggleDropdown
    }) => createElement("div", {
      onClick: () => {
        toggleDropdown();
      },
      className: buttonStyle,
      "data-test-id": "minute-label"
    }, createElement("span", {
      className:
      /*#__PURE__*/
      /*#__PURE__*/
      css({
        marginRight: "15px"
      })
    }, selectedMinute !== undefined ? selectedMinute : "mins"), createElement("i", {
      className: cx("pi pi-arrow-drop-down", iconStyle$1),
      style: {
        transform: isOpen ? "rotate(180deg)" : "none"
      }
    }))
  }, ({
    toggle
  }) => createElement(OptionGroupRadio, {
    onChange: value => {
      onMinuteChange(value);
      toggle();
    },
    selected: selectedMinute,
    className: optionStyle
  }, MINUTES.map(min => createElement(Option, {
    key: min,
    value: parseInt(min, 10),
    label: min,
    className: optionStyle
  })))));
};

const Text = ({
  typography,
  color = colors.gray.darker,
  children,
  className
}) => {
  const _className =
  /*#__PURE__*/
  css(Object.assign({}, typography, {
    color
  }));
  return React__default.createElement("span", {
    className: cx(_className, className)
  }, children);
};

function capitalize(str) {
  return str ? str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ") : str;
}

function getShortenedNumber(num, toFixed = 1) {
  let formattedNum;
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
    formattedNum = `${num.toFixed(toFixed)}`;
  } else {
    formattedNum = `${num}`;
  }
  return formattedNum;
}

function initGoogleAnalytics(gaId) {
  if (isBrowser) {
    ((s, o, g) => {
      window.GoogleAnalyticsObject = "ga";
      window.ga = window.ga || (() => {
        (window.ga.q = window.ga.q || []).push(arguments);
      });
      window.ga.l = Date.now();
      const a = s.createElement(o);
      const m = s.getElementsByTagName(o)[0];
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
const isDesktop =
/*@__PURE__*/
width() >= 1024;



var index = /*#__PURE__*/Object.freeze({
    capitalize: capitalize,
    getShortenedNumber: getShortenedNumber,
    initGoogleAnalytics: initGoogleAnalytics,
    isDesktop: isDesktop
});

export { index as utils, mixins, styles, colors, typography, constants, Button, DropDownButton, Calendar, DropDown, Input, Modal, Search, Select, Slider, Stepper, Tag, TimePicker, Toast, TypeAhead, SideBar, DateInput, BrowserBasedDateInput, NativeDateInput, Tooltip, Logo, default_1 as Popper, PopUp, Loader, Radio, RadioGroup, Checkbox, CheckboxGroup, Option, OptionGroup, OptionGroupRadio, OptionGroupCheckBox, OutsideClick, PhoneNumberInput, Text, UserAgentInfoContext, UserAgentInfoProvider };
//# sourceMappingURL=pebble.es.js.map
