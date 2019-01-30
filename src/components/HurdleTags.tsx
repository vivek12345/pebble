import * as React from "react";
import { css, cx } from "emotion";

interface HurdlesProps {
  tagText: string;
  randomStyles: string;
  tagIndex: number;
  totalTags: number;
}

const tagStyle = css({
  height: 40,
  padding: "0px 15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 180,
  fontSize: 16,
  whiteSpace: "nowrap"
});

class HurdleTags extends React.PureComponent<HurdlesProps> {
  render() {
    const { tagText, tagIndex, totalTags, randomStyles } = this.props;

    return (
      <div
        className={cx(tagStyle, randomStyles, {
          [css({ marginLeft: 0 })]: tagIndex !== 0,
          [css({ marginRight: 0 })]: tagIndex + 1 === totalTags
        })}
      >
        {tagText}
      </div>
    );
  }
}

export default HurdleTags;
