// @ts-nocheck
'use strict';
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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step(
        (generator = generator.apply(
          thisArg,
          _arguments || []
        )).next()
      );
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
// WORKFLOW
// npm run dev    -> to develop our ts files
// npm run build  -> to build our js files in dist
// npm start      -> to run our js files in dist
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const projects = [
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
app.get('/', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    res.send(projects);
  })
);
app.listen(5000, () => console.log('server running'));
