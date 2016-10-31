# eslint-config-trabe

The Trabe ESLint config based on the Airbnb config https://github.com/airbnb/javascript.
We decided not to fork the project and used the Airbnb code as a template (they not only
had a great set of rules, they also commented them one by one. Kudos to them!).

## Instalation

```
$ npm install --save-dev eslint-config-trabe
```

## Usage

Add the  ESLint config in your `package.json`:

```
"scripts": {
  "lint": "eslint ./src ./test"
},
"eslintConfig": {
  "extends": "trabe"
}
```

or create an `.eslintrc` file in the project:

```
{
  "extends": "trabe"
}
```


Test the linter running `$ npm run lint`.

### How to overwrite rules

Rules can be overriden/extended. Just add your own after extending form the trabe config:

```
"eslintConfig": {
  "extends": "trabe",
  "rules": {
    "comma-dangle": [1]
  }
}
```

or in the `.eslintrc`:

```
{
  "extends": "trabe",
  "rules": {
    "comma-dangle": [1]
  }
}
```


## Contributing

This project defines a set of ESLint rules tailored to the Trabe team tastes but if you're using it
and feel that some rule may change, feel free to add an issue to the project and engage in a healthy
debate ;)

## TODO

* Write "the" styleguide /(ºoº)\
