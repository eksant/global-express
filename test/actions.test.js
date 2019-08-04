const fs = require('fs');
const lignator = require('lignator');
const assert = require('chai').assert;
const expect = require('chai').expect;

const actions = require('../bin/actions');
const init = async path => {
  if (await fs.existsSync(path)) {
    await lignator.remove(path);
  }
  await actions.init(path);
};

const clean = async path => {
  if (await fs.existsSync(path)) {
    await lignator.remove(path);
  }
};

const expPath = 'express';
init(expPath);

require('chai').use(require('chai-fs'));
describe('Global-Express Actions Init Testing :', () => {
  it(`should create folder ${expPath} if it does not exist`, async () => {
    await expect(`${expPath}`).to.be.a.directory();
    await assert.pathExists(`${expPath}`);
  });

  it(`should create folder ${expPath}/apidoc if it does not exist`, async () => {
    await expect(`${expPath}/apidoc`).to.be.a.directory();
    await assert.pathExists(`${expPath}/apidoc`);
  });

  it(`should create folder ${expPath}/config if it does not exist`, async () => {
    await expect(`${expPath}/config`).to.be.a.directory();
    await assert.pathExists(`${expPath}/config`);
  });

  it(`should create folder ${expPath}/docs if it does not exist`, async () => {
    await expect(`${expPath}/docs`).to.be.a.directory();
    await assert.pathExists(`${expPath}/docs`);
  });

  it(`should create folder ${expPath}/graphql if it does not exist`, async () => {
    await expect(`${expPath}/graphql`).to.be.a.directory();
    await assert.pathExists(`${expPath}/graphql`);
  });

  it(`should create folder ${expPath}/graphql/resolvers if it does not exist`, async () => {
    await expect(`${expPath}/graphql/resolvers`).to.be.a.directory();
    await assert.pathExists(`${expPath}/graphql/resolvers`);
  });

  it(`should create folder ${expPath}/graphql/schema if it does not exist`, async () => {
    await expect(`${expPath}/graphql/schema`).to.be.a.directory();
    await assert.pathExists(`${expPath}/graphql/schema`);
  });

  it(`should create folder ${expPath}/logs if it does not exist`, async () => {
    await expect(`${expPath}/logs`).to.be.a.directory();
    await assert.pathExists(`${expPath}/logs`);
  });

  it(`should create folder ${expPath}/models if it does not exist`, async () => {
    await expect(`${expPath}/models`).to.be.a.directory();
    await assert.pathExists(`${expPath}/models`);
  });

  it(`should create folder ${expPath}/restapi if it does not exist`, async () => {
    await expect(`${expPath}/restapi`).to.be.a.directory();
    await assert.pathExists(`${expPath}/restapi`);
  });

  it(`should create folder ${expPath}/restapi/controllers if it does not exist`, async () => {
    await expect(`${expPath}/restapi/controllers`).to.be.a.directory();
    await assert.pathExists(`${expPath}/restapi/controllers`);
  });

  it(`should create folder ${expPath}/restapi/routes if it does not exist`, async () => {
    await expect(`${expPath}/restapi/routes`).to.be.a.directory();
    await assert.pathExists(`${expPath}/restapi/routes`);
  });

  it(`should create folder ${expPath}/restapi/services if it does not exist`, async () => {
    await expect(`${expPath}/restapi/services`).to.be.a.directory();
    await assert.pathExists(`${expPath}/restapi/services`);
  });

  it(`should create folder ${expPath}/server if it does not exist`, async () => {
    await expect(`${expPath}/server`).to.be.a.directory();
    await assert.pathExists(`${expPath}/server`);
  });

  it(`should create folder ${expPath}/utils if it does not exist`, async () => {
    await expect(`${expPath}/utils`).to.be.a.directory();
    await assert.pathExists(`${expPath}/utils`);
  });
});

describe('Global Express Actions Clean Testing :', () => {
  it(`should delete folder ${expPath} if it exist`, async () => {
    await clean(expPath);
    await expect(`${expPath}`).to.not.be.a.path();
    await assert.notPathExists(`${expPath}`);
  });
});
