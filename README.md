This repo demonstrates some behaviour around module imports from a parent `..` index file. 

Stack Overflow question here: 

https://stackoverflow.com/questions/64980541/why-do-relative-imports-from-a-parent-index-file-cause-asynchronous-module

## Instructions 

1. Read the `src/foo/fooFile.ts` file. 
2. Run `npm run build`
3. Run `node lib/index.js`
4. Observe how the `..` import is resolved differently to the `../bar` import. 
6. Run `node lib/main.js` observe that the `..` import is not resolved differently. 

