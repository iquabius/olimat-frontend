import { ApolloServer, gql } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { prisma } from './__generated__/prisma-client';
import { Prisma as PrismaBinding } from 'prisma-binding';
import resolvers from './resolvers';
import * as path from 'path';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { generate } from 'shortid';
import { extension } from 'mime-types';
import { handleGET } from './filepond';
const express = require('express');

export const appConfig = {
  uploads: {
    server: 'http://localhost:4000',
    basePath: 'files',
    tempDir: path.join(__dirname, '..', 'files', 'tmp'),
    publicDir: path.join(__dirname, '..', 'files', 'public'),
  },
};

// We fallback to prisma-binding because prisma-client xsConnections doesn't work
const prismaBinding = new PrismaBinding({
  typeDefs: 'src/__generated__/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
  secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
});

const typeDefs = gql(importSchema('src/schema.graphql'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    db: prisma,
    prismaBinding,
    appConfig,
  }),
});

const app = new express();
server.applyMiddleware({ app });
app.use(cors({ origin: '*' }));

// The 'files' directory should be a docker volume, maybe in a dedicated container
const UPLOAD_PATH = path.join(__dirname, '..', 'files');
app.use('/files', express.static(appConfig.uploads.publicDir));

app.use(fileUpload());

app.post('/upload', (req, res, next) => {
  const uploadFile = req.files.imageUrl;
  // We don't need the extension here, just the ID is enough
  const fileName = generate() + '.' + extension(uploadFile.mimetype);
  console.log('FILE: ');
  console.log(uploadFile);
  uploadFile.mv(`${appConfig.uploads.tempDir}/${fileName}`, err => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(fileName);
  });
});

app.get('/upload', handleGET);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
