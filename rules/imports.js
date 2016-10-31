module.exports = {

  // Static analysis:

  // ensure imports point to files/modules that can be resolved
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  "import/no-unresolved": 2,

  // ensure named imports coupled with named exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
  "import/named": 2,

  // ensure default import coupled with default export
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
  "import/default": 2,

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
  "import/namespace": 2,

  // Helpful warnings:

  // disallow invalid exports, e.g. multiple defaults
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
  "import/export": 2,

  // do not allow a default import name to match a named export
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 2,

  // warn on accessing default export property names that are also named exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
  'import/no-named-as-default-member': 2,

  // disallow use of jsdoc-marked-deprecated imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
  'import/no-deprecated': 1,

  // Forbid the use of extraneous packages
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': 0,

  // Forbid mutable exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': 2,

  // Module systems:

  // disallow require()
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
  'import/no-commonjs': 1,

  // disallow AMD require/define
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
  'import/no-amd': 2,

  // No Node.js builtin modules
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
  'import/no-nodejs-modules': 0,

  // Style guide:

  // disallow non-import statements appearing before import statements
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
  'import/imports-first': 2,

  // disallow duplicate imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'import/no-duplicates': 2,

  // disallow namespace imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
  'import/no-namespace': 0,

  // Ensure consistent use of file extension within the import path
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
  'import/extensions': [2, { "js": "never", "jsx": "never" }],

  // Enforce a convention in module import order
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
  'import/order': [2, {
    groups: ['builtin', 'external', 'internal'],
    'newlines-between': 'never',
  }],

  // Require a newline after the last import/require in a group
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
  'import/newline-after-import': 0,

  // Require modules with a single export to use a default export
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  'import/prefer-default-export': 0,

  // Forbid import of modules using asbolute paths
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
  "import/no-absolute-path": 2
};

