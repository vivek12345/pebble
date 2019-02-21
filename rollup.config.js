const babelConfig = require("./babel.config");

import path from "path";
import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";

const external = ["react", "react-calendar/dist/entry.nostyle"];

function getPlugins(targets) {
  return [
    babel({
      ...babelConfig,
      presets: [
        ...babelConfig.presets.filter(preset => {
          Array.isArray(preset)
            ? preset[0] !== "@babel/preset-env"
            : preset !== "@babel/preset-env";
        }),
        ["@babel/preset-env", { targets }]
      ]
    }),
    resolve({
      extensions: [".js", ".jsx", ".json"]
    }),
    commonjs(),
    cleanup({
      comments: [/^\*#__PURE__/, /^\*@__PURE__/]
    }),
    sourceMaps(),
    filesize()
  ];
}

export default commandLineArgs => {
  const packageDir = commandLineArgs.configPackageDir;
  const pkg = require(path.join(packageDir, "package.json"));

  const input = path.join(packageDir, "compiled/index.js");
  return [
    {
      input,
      external: ["react", "react-dom"],
      output: [
        {
          file: path.join(packageDir, pkg.unpkg),
          format: "umd",
          sourcemap: true,
          name: pkg.name,
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          }
        }
      ],
      plugins: getPlugins({ node: "6" })
    },
    {
      input,
      external: external.concat(Object.keys(pkg.dependencies)),
      output: [
        {
          file: path.join(packageDir, pkg.module),
          format: "es",
          sourcemap: true
        }
      ],
      plugins: getPlugins({ node: "10" })
    },
    {
      input,
      external: external.concat(Object.keys(pkg.dependencies)),
      output: [
        {
          file: path.join(packageDir, pkg.main),
          format: "cjs",
          sourcemap: true
        }
      ],
      plugins: getPlugins({ node: "6" })
    }
  ];

}

