module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    //CSS
    'length-zero-no-unit': true,
    'selector-list-comma-newline-after': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'block-opening-brace-space-before': 'always',
    'declaration-block-single-line-max-declarations': 1,
    'max-empty-lines': 2,
    'max-nesting-depth': 3,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'shorthand-property-no-redundant-values': true,
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'selector-max-compound-selectors': 3,
    'selector-no-qualifying-type': true,
    'no-duplicate-selectors': true,
    'block-no-empty': true,
    'at-rule-name-case': 'lower',
    'string-quotes': 'single',
    // SCSS
    'scss/selector-no-redundant-nesting-selector': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    // Functions
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    //Comment
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands'],
      },
    ],
  },
  extends: ['stylelint-config-recommended'],
};
