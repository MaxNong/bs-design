module.exports = {
  extends: ["plugin:prettier/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["simple-import-sort"],
  parserOptions: { ecmaVersion: 2021 },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        singleQuote: false,
        trailingComma: "none",
        endOfLine: "auto"
      }
    ],
    // Sort
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^moment", "^ahooks", "^ant", "^@ant-design?\\w", "^@?\\w", "^eh-\\w"],
          // share lib
          // first level directory
          [
            "^config",
            "^hooks",
            "^context",
            "^store",
            "^utils",
            "^constants",
            "^apis",
            "^components",
            "^types"
          ],
          // relative paths up until 3 level
          [
            "^\\./?$",
            "^\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\./\\.\\.(?!/?$)"
          ],
          ["^"],
          // {s}css files
          ["^.+\\.s?css$"]
        ]
      }
    ]
  }
};
