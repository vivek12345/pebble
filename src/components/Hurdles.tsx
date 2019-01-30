import * as React from "react";
import { css } from "emotion";
import HurdlesRow from "./HurdlesRow";

interface HurdlesProps {
  hurdleTags: string[];
}

class Hurdles extends React.PureComponent<HurdlesProps> {
  static defaultProps: Partial<HurdlesProps> = {
    hurdleTags: ["Anarock", "React", "React Native", "Visa", "American Express"]
  };

  render() {
    const { hurdleTags } = this.props;
    return (
      <div className={css({ width: "100vw", overflowX: "hidden" })}>
        {[...new Array(5)].map((_, index) => (
          <HurdlesRow key={index} hurdleTags={hurdleTags} />
        ))}
      </div>
    );
  }
}

export default Hurdles;
