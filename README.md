# sls-restapi-sequelize
It's RESTFul API With Sequelize by Serverless framework. With Typescript, Node, AWS Lambda, Koa.

## Explanation
### 1. Root folder tree
```
src             # source codes
.env            # environment variables for dev serverless deploy
.env.local      # environment variables for local start
.gitignore      # gitignore
package.json    # packages, scripts, project infos.
serverless.yml  # serverless configration (AWS)
tsconfig.json   # typescript compile options
```
### 2. Src Folder tree
```
src
  ㄴcomponents   
    ㄴUser
      -index.ts
      -User.ts            # Model
      -UserController.ts  # Router functions
      -UserService.ts     # Adapter functions
  ㄴconfigs
    -index.ts
    -SwaggerConfig.ts     # for API document
    -SequelizeConfig.ts   # sequelize
  ㄴutils
    -index.ts       
    -Logger.ts            # Global Logger
    -Constants.ts         # Global Variables
    -AppError.ts          # Centralized error class
    -HTTPResCodes.ts      # Common HTTP response codes
  -app.ts
```

## Usage
### 1. Prefare AWS Account for Serverless Framework
https://github.com/rien1026/document/blob/master/AWS/ServerlessWithAWS.md
### 2. Install Serverless Framework
```
npm i -g serverless
```
### 3. Install Packages
```
npm i
```
### 4. Local Start 
```
npm run start 
or
npm run watch
```
### 5. Deploy
```
sls deploy
```
### 6. Usage
```

```
#### POSTMAN Example
#### Swagger API Document Example
