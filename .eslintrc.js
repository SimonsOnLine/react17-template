module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: ['@typescript-eslint/parser'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    "curly": [2, "all"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": 0,
    "no-underscore-dangle": 0,
    "comma-dangle": ["error", "never"],
    "no-use-before-define": "error",
    "no-console": "error",
    "no-plusplus": 0,
    "no-minusminus": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    "object-curly-newline": 0,
    "function-paren-newline": 0,
    "no-return-await": 0,
    "max-params": ["error", 5],
    "max-depth": ["error", 3],
    "promise/always-return": "error",
    "promise/catch-or-return": "error",
    "promise/param-names": "error",
    "promise/no-return-wrap": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "ignoreRestSiblings": true }
    ],
    "prettier/prettier": ["error"],
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]

    // 'react-hooks/rules-of-hooks': 'error',
    // 'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    // 'import/no-absolute-path': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'no-param-reassign': [
    //   'error',
    //   {
    //     props: true,
    //     ignorePropertyModificationsFor: ['state', 'config']
    //   }
    // ]
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "17.0.2"
    },
    "import/resolver": {
      "node": {
        "paths": ["."],
        "extensions": [".js", ".ts", ".tsx"]
      }
    }
  }
}
