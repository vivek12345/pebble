const path = require("path");
const fs = require("fs");
const execa = require("execa");

(async () => {
  const packagesDir = path.resolve(__dirname, "../packages");
  const packageDirectories = fs
    .readdirSync(packagesDir)
    .map(_dir => path.join(packagesDir, _dir));

  packageDirectories.forEach(async _dir => {
    const _tsConfigPath = path.join(_dir, "tsconfig.build.json");

    await execa.shell(
      `tsc -p ${_tsConfigPath} && rollup -c ${path.resolve(
        __dirname,
        "../rollup.config.js"
      )} --configPackageDir ${_dir}`
    );
  });
})();
