module.exports = {
  preset: "ts-jest",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["intersection-observer", "<rootDir>/tests/__setup__/setup.ts"],
  setupTestFrameworkScriptFile: "<rootDir>/tests/__setup__/setupFramework.ts",
  testMatch: ["**/?(*.)+(spec|test).(j|t)s?(x)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js"
  },
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  transformIgnorePatterns: ["<rootDir>.*(node_modules)(?!.*pebble-theme.*).*$"]
};
