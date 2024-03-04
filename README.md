# Spelling

## Improve your English spelling with this beautiful web app

# Try it out 

You can try it out [here](https://martinshaw.github.io/spelling)

# How it was made

This Spelling game was made using simple HTML, SCSS and 110 lines of Vanilla TypeScript. 

Then this is compiled into a tiny HTML, CSS and JS bundle using [Parcel](https://parceljs.org/).

It uses my [tailwind-colors-scss](https://npmjs.com/package/tailwind-colors-scss) SCSS variables package for the minimal color scheme and a subset of the MIT 10,000 wordlist which I filtered for words over 4 characters long using the [jq](https://stedolan.github.io/jq/) command line tool.

# How to run it locally

1. Clone the repo

```
git clone https://github.com/martinshaw/spelling.git
```

2. Install the dependencies

```
npm install
```

3. Run the dev server

```
npm run start
```

4. Open the browser to http://localhost:1234

# Future additions

I might add additional languages and dialects in the future.