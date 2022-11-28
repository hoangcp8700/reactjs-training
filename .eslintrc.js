module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      // Your TypeScript files extension
      parserOptions: {
        project: "./tsconfig.json", // Specify it only for TypeScript files
      },
      extends: "airbnb-typescript",
      rules: {
        "react/function-component-definition": 0,
        "no-param-reassign": [
          "error",
          {
            props: true,
            ignorePropertyModificationsFor: ["$state", "$config"],
          },
        ],
        "import/prefer-default-export": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "react/no-unused-prop-types": "off",
        "react/prop-types": "off",
        "jsx-a11y/interactive-supports-focus": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/quotes": [
          "error",
          "double",
          {
            allowTemplateLiterals: true,
          },
        ],
      },
    },
  ],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "no-duplicate-imports": "error",
    camelcase: "error",
    "spaced-comment": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["scripts/**/*"],
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
  },
};
