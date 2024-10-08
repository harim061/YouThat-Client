module.exports = {
  plugins: ["react", "prettier"],
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  rules: {
    "linebreak-style": 0,
    "prettier/prettier": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "eol-last": ["error", "always"], // line의 가장 마지막 줄에는 개행 넣기
    "simple-import-sort/imports": "error", // import 정렬
    "no-multi-spaces": "error",
  },
};
