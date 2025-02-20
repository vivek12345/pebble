import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import { DropDownButton } from "./Button";
import { dropDownStyle, wrapperStyle } from "./styles/Dropdown.styles";
import { cx } from "emotion";
import OutsideClick from "./OutsideClick";
import { animated } from "react-spring";
import MountTransition from "./shared/MountTransition";
import { Manager, Reference, Popper } from "react-popper";
import { colors } from "pebble-shared";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  state: DropdownState = {
    isOpen: !!this.props.initiallyOpen
  };

  static defaultProps: Partial<DropdownProps> = {
    closeOnOutsideClick: true,
    placement: "bottom-start",
    modifiers: {
      hide: {
        enabled: false
      },
      preventOverflow: {
        enabled: false
      },
      flip: {
        enabled: false
      }
    }
  };

  private toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

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
    const { isOpen } = this.state;

    return (
      <OutsideClick
        className={cx(wrapperStyle, className)}
        onOutsideClick={() => {
          this.setState({
            isOpen: false
          });
          if (onOutsideClick) onOutsideClick(isOpen);
        }}
        disabled={!isOpen}
      >
        <Manager>
          <Reference>
            {({ ref }) => (
              <div style={{ display: "inline-block", width: "100%" }} ref={ref}>
                {labelComponent ? (
                  labelComponent({
                    isOpen,
                    toggleDropdown: this.toggleDropdown
                  })
                ) : (
                  <DropDownButton
                    isSelected={!!isSelected}
                    isOpen={isOpen}
                    onClick={this.toggleDropdown}
                    disabled={disabled}
                    className={labelClassName}
                  >
                    {buttonLabel}
                  </DropDownButton>
                )}
              </div>
            )}
          </Reference>

          {/* TODO: Add native flag. */}
          <MountTransition visible={isOpen}>
            {transitionStyles => (
              <animated.div
                className={cx(dropDownStyle, dropDownClassName)}
                style={{ padding, ...transitionStyles }}
              >
                <Popper {...this.props} positionFixed>
                  {({ ref, style, placement, arrowProps }) => {
                    const popperWrapperStyle = {
                      ...style,
                      ...transitionStyles,
                      backgroundColor: colors.white.base,
                      transform: `${style.transform ||
                        ""} ${transitionStyles.transform || ""}`,
                      transformOrigin: `${arrowProps.style.left ||
                        0}px ${arrowProps.style.top || 0}px`,
                      padding: `${padding}`
                    };

                    return (
                      <div
                        className={cx(dropDownStyle, dropDownClassName)}
                        ref={ref}
                        style={popperWrapperStyle}
                        data-placement={placement}
                      >
                        {children({
                          toggle: this.toggleDropdown,
                          isOpen: this.state.isOpen
                        })}
                      </div>
                    );
                  }}
                </Popper>
              </animated.div>
            )}
          </MountTransition>
        </Manager>
      </OutsideClick>
    );
  }
}

export default DropDown;
