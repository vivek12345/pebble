import remove from "just-remove";

module.exports = {
  typescript: true,
  protocol: "http",
  modifyBabelRc: babelRc => {
    babelRc.presets = remove(babelRc.presets, ["stage-0", "react"]);
    return babelRc;
  }
};
