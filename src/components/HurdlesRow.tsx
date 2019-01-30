import * as React from "react";
import { css } from "emotion";
import { colors } from "../theme";
import HurdleTags from "./HurdleTags";
import { Keyframes, animated } from "react-spring";

// @ts-ignore
const OriginalRow = Keyframes.Spring(async next => {
  await next({
    from: { opacity: 0 },
    opacity: 1,
    config: { duration: 2000 }
  });
  while (true) {
    await next({
      from: { transform: "translateX(0%)" },
      transform: "translateX(-100%)",
      config: { duration: 30000 }
    });
    await next({
      from: { transform: "translateX(-100%)" },
      transform: "translateX(100%)",
      config: { duration: 1 }
    });
    await next({
      from: { transform: "translateX(-100%)" },
      transform: "translateX(0%)",
      config: { duration: 30000 }
    });
  }
});

// @ts-ignore
const DuplicateRow = Keyframes.Spring(async next => {
  await next({
    from: { opacity: 0 },
    opacity: 1,
    config: { duration: 2000 }
  });
  while (true) {
    await next({
      from: { transform: "translateX(0%)" },
      transform: "translateX(-100%)",
      config: { duration: 30000 }
    });
    await next({
      from: { transform: "translateX(-100%)" },
      transform: "translateX(-200%)",
      config: { duration: 30000 }
    });
    await next({
      from: { transform: "translateX(-200%)" },
      transform: "translateX(0%)",
      config: { duration: 1 }
    });
  }
});

interface HurdlesRowProps {
  hurdleTags: string[];
}

// const marquee = keyframes`
//   0% { transform: translate(0, 0); }
//   100% { transform: translate(-100%, 0); }
// `
// const translate = css({
//   animation: `${marquee} ${Math.floor(Math.random() * (32 - 28 + 1)) + 28}s linear infinite`
// })

const rowStyles = css({ display: "flex", height: 80, alignItems: "center" });

const COLOR_PRESETS = [
  { color: colors.violet.base, bgColor: colors.violet.lightest },
  { color: colors.yellow.base, bgColor: colors.yellow.light },
  { color: colors.gray.base, bgColor: colors.gray.lighter },
  { color: colors.emerald.base, bgColor: colors.emerald.lightest },
  { color: colors.pink.base, bgColor: colors.pink.light },
  { color: colors.coral.base, bgColor: colors.coral.light }
];

const VERTICAL_POSITION = ["-20px", "-10px", "0px", "10px", "20px"];

class HurdlesRow extends React.PureComponent<HurdlesRowProps> {
  render() {
    const { hurdleTags } = this.props;

    // tslint:disable-next-line prefer-const
    let randomStyles = [] as string[];
    hurdleTags.map(_ => {
      const randomIndex = Math.floor(Math.random() * COLOR_PRESETS.length);
      const marginTopIndex = Math.floor(
        Math.random() * VERTICAL_POSITION.length
      );

      randomStyles.push(
        css({
          color: COLOR_PRESETS[randomIndex].color,
          backgroundColor: COLOR_PRESETS[randomIndex].bgColor,
          marginTop: VERTICAL_POSITION[marginTopIndex],
          marginRight: `${Math.floor(Math.random() * (250 - 50 + 1)) + 50}px`, //  50px - 250px
          marginLeft: `${Math.floor(Math.random() * (150 - 25 + 1)) + 25}px` //  25px - 150px
        })
      );
    });

    const sortedTags = hurdleTags.slice(0).sort(() => Math.random() - 0.5);

    const originalRow = (
      // @ts-ignore
      <OriginalRow native>
        {(props: React.CSSProperties) => (
          <animated.div className={rowStyles} style={props}>
            {sortedTags.map((tags, i) => (
              <HurdleTags
                key={i}
                tagIndex={i}
                totalTags={hurdleTags.length}
                tagText={tags}
                randomStyles={randomStyles[i]}
              />
            ))}
          </animated.div>
        )}
      </OriginalRow>
    );

    const duplicateRow = (
      // @ts-ignore
      <DuplicateRow native>
        {(props: React.CSSProperties) => (
          <animated.div className={rowStyles} style={props}>
            {sortedTags.map((tags, i) => (
              <HurdleTags
                key={i}
                tagIndex={i}
                totalTags={hurdleTags.length}
                tagText={tags}
                randomStyles={randomStyles[i]}
              />
            ))}
          </animated.div>
        )}
      </DuplicateRow>
    );

    return (
      <div className={css({ display: "flex", position: "relative" })}>
        {originalRow}
        {duplicateRow}
      </div>
    );
  }
}

export default HurdlesRow;
