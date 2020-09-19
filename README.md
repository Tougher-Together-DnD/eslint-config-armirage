<!-- top of page anchor -->
[toc](#table-of-contents)

<!-- Header: A templated header of logo and company name. -->
<p align="center">
  <a href="https://armirage.github.io" target="_blank" rel="noopener noreferrer">
    <img src="https://armirage.github.io/assets/images/armirage-logo.svg" width="100">
  </a>
</p>

<!-- External Links to other resources -->
<div align="center">
  <h3>
    <a href="https://www.armirage.com">
      Armirage.com
    </a>
    <span> | </span>
    <a href="https://github.com/armirage/eslint-config-armirage">
      eslint-config-armirage Github Repo
    </a>
  </h3>
</div>

[![GitHub tag (latest by date)](https://img.shields.io/github/v/release/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/releases)
[![GitHub issues](https://img.shields.io/github/issues/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/issues/)
[![Github code size](https://img.shields.io/github/languages/code-size/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/releases)
[![GitHub license](https://img.shields.io/github/license/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/blob/master/LICENSE.md)

# @armirage/eslint-config-armirage

**Easily adopt the Coding Style of Armirage with this [ESLint][] [shareable config]. Hook ESLint into your editor and build pipeline for
maximum effect.**

**Armirage code example:**
```js
	const thing = "Hello";
	const another = "World";
	const total = count([ 1, 2, 3 ]);

	function speak( arg ) {
		let out = "Bye";
		if ( !arg ) {
			out = thing;
		} else if ( arg === thing ) {
			out = another;
		}
		return out;
	}
```

## Table of Contents
* [Install](#install)
* [Usage](#usage)
* [Overrides](#overrides)

## Install
```
npm install --save-dev eslint @armirage/eslint-config-armirage
```

This will install ESLint and the Armirage config settings as dev dependencies.

The linting capabilities are accessible through the command line. Preferably,
hook it into your favorite editor to get warnings and errors about syntax as you
write your code.

Like the [ESLint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).  
**[⬆ back to toc](#table-of-contents)**

## Usage
Once ESLint and the Armirage config are downloaded, goto the root of your project
and create a `.eslintrc.json` file:

```json
{
  "extends": "@armirage/eslint-config-armirage"
}
```

To use with ESLint's recommended ruleset:
```json
{
  "extends": [
    "eslint:recommended",
    "@armirage/eslint-config-armirage"
  ]
}
```

Note: `eslint:recommended` should be listed first.  
**[⬆ back to toc](#table-of-contents)**

### Overrides
You can easily override rules in your own `.eslintrc.json` config. For example, to get warnings when destructuring is possible:
```json
{
	"extends": ["@armirage/eslint-config-armirage"],
	"rules": {
		"prefer-destructuring": ["warn", {"object": true, "array": true}]
		}
}
```  
**[⬆ back to toc](#table-of-contents)** 

## Release History  
**[⬆ back to toc](#table-of-contents)** 

- 2020-09-19 Easy Peasy

[ESLint]: http://eslint.org/
[ESLint rules]: http://eslint.org/docs/rules/
[shareable config]: http://eslint.org/docs/developer-guide/shareable-configs.html
