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

