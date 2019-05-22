# serverless-inversify-example

Serverless (AWS Lambda) project that make use of:
- Nodejs(typescript)
- Serverless framework

This example show how to make use of **Dependency injection(DI)** using [InversifyJs](https://github.com/inversify/InversifyJS) in an **AWS Lambda** project.
In this way you can still take advantage of using OOP best practices and you can:
- Avoid circular dependencies
- Respect Solid principles
- DRY

Basicly implemented what is described in this post: 
- https://www.yarrasoft.com/setting-up-inversify-js-for-lambda

## How to

    $ git clone
    $ npm i
    $ npm start

then you can open:

    localhost:3000/test

and see in the console the related logs:

    got repo from container
    got logger from container
    DEBUG: Use injected logger into repository. Get data
    DEBUG: Account ok: true
    DEBUG: Dependencies are wired correctly