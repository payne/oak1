# Stand alone executable written in TypeScript with Deno

Deno 2 example of serving an angular 19 program and doing CRUD with a SQLite database.

## Some references
Need to do better with this list.
1. [Oak](https://oakserver.org/)
1. [Deno Sqlite3](https://docs.deno.com/examples/sqlite/)
1. [Angular 19 with material](https://angular.dev/) built with node 22 (not deno)

## Running while developing
1. Run the server: `deno run -A server.ts`
   1. Then visit http://localhost:8000
1. Run the frontend while developing it:
```
cd angular_todo
npm run dev
```
   1. Then visit http://localhost:4200

# https://bit.ly/deno-oak1 has executables in it
1. Building after first clone
   1. `deno compile -A server.ts`

1. Building front end & copy to dist
   1. `cd angular_todo && npm run build`


# Bugs
1. The Mac version does not have this dist folder build into the executable.  

[That Deno 2.1 allows embedding assets](https://deno.com/blog/v2.1#embed-assets-files-in-deno-compile) is likely to help fix this bug.  Trying it naively did not seem to work on Windows (it did make a larger exe and said it included it):

```
 deno compile --include ./dist/ -A .\server.ts
Compile file:///C:/Users/mattg/Downloads/oak1-main/oak1-main/server.ts to server.exe

Embedded Files

server.exe
├── database.ts (773B)
├── deps.ts (334B)
├── dist/* (654.2KB)
├── routes/* (5.03KB)
└── server.ts (2.4KB)

Size: 662.71KB
```


# Problem reading included files 

Both u.ts and u2.ts do not work.  [compiling](https://docs.deno.com/runtime/reference/cli/compile/) like this:

```
deno compile --no-check --include file.zip -A u.ts 
```

I wonder if could read file.zip via http/https instead of being included?


