// BOOT
// 1.
// globally
// npm i -g typescript
// tsc --version
// 2.
// make project folder, and cd
// tsc --init
// edit tsconfig.json for -> {"target": "es6", "rootDir": "./src", "outDir": "./dist", "moduleResolution": "node"}
// make src and dist directories in root
// run inside src : tsc / tsc --watch
// 3.
// go to project root
// npm init -y
// npm i -D typescript ts-node nodemon @types/node @types/express
// add scripts in package.json -> {"start": "node dist/app.js", "dev": "nodemon src/app.ts", "build": "tsc -p ."}

// WORKFLOW
// npm run dev    -> to develop our ts files
// npm run build  -> to build our js files in dist
// npm start      -> to run our js files in dist

import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());

type Project = {
  id: number;
  name: string;
  chain: string;
  budget: number;
  status: boolean;
};
const projects: Array<Project> = [
  {
    id: 1,
    name: 'CocaCola NFTs',
    chain: 'Polygon',
    budget: 1000000,
    status: true,
  },
  {
    id: 2,
    name: 'CBN KYC',
    chain: 'Fabric',
    budget: 7500000,
    status: false,
  },
];

app.get('/', async (req: Request, res: Response) => {
  res.send(projects);
});

app.listen(5000, () => console.log('server running'));
