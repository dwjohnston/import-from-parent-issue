This repo demonstrates some behaviour around module imports from a parent `..` index file. 

## Instructions 

1. Read the `src/foo/fooFile.ts` file. 
2. Run `npm run build`
3. Run `node lib/index.js`
4. Observe how the `..` import is resolved differently to the `../bar` import. 
6. Run `node lib/main.js` observe that the `..` import is not resolved differently. 

## Using linter to solve it. 

It looks like `import/no-cycle` is the best rule to solve this. 