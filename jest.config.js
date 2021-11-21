
module.exports = {

    verbose: true,
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\](?!(@dentsu-ui)\\/).+\\.(js|jsx|ts|tsx)$",
    ],

    coveragePathIgnorePatterns: [
      "src/config",
      "src/helpers/constant",
      "src/context",
      "src/index.js",
      "src/app",
      ".*\\.d\\.{js|jsx}",
    ],
    testPathIgnorePatterns: [
      "/node_modules/",
      "/.babelrc",
      "/gitignore",
      ],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleFileExtensions: [
      "js",
      "jsx",
      "node",
    ],
    setupFiles: [
        "./setupTest.js"
      ],
      testEnvironment: "jsdom",
  }
