Steps
1. install gh-pages (npm i gh-pages)

2. add homepage field in package.json  "homepage":"."
3. add 2 more scripts in package.json
"scripts":{ 
    ...,
    "predeploy" : "npm run build"
    "deploy": "gh-pages -d build"
}
Note: it should have github remote origin

4. npm run deploy 