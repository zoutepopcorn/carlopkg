### Basic example pkg & carlo
Simple example based on this example:
https://github.com/GoogleChromeLabs/carlo/blob/master/examples/systeminfo/app.js

### Usage

Install dependencies

```bash
npm i
```

Run application

```bash
npm start
```

Optionally package as executable

```bash
npm run build
```


# node version in package.json

```json
    "targets": [
      "node10"
    ]
```

Check if it ``` node -v ``` displays the same version

With nvm you can use https://nvm.sh to switch




# Usage

Edit your files

```

| app.js (node process)
|
|---- /www/*  (html files)

```

Check if your folders are included in package.json

```
  "pkg": {
    "scripts": "*.js",
    "assets": "www/**/*"
  }
```

