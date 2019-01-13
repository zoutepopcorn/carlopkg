### Basic example pkg & carlo
Simple example based on this example:
https://github.com/GoogleChromeLabs/carlo/blob/master/examples/systeminfo/app.js

You can use es6 with this example

### Usage

Install dependencies

You will need parcel
```
npm i parcel -g
```


```bash
npm i
```

Run application / start will also build it with parcel

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

