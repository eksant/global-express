const fs = require('fs');
const config = require('./config');
const path = require('path');

var actions = {};
var globalPath = path.join(__dirname, '..');

actions.init = () => {
  var initSuccess = true;
  const expressPath = `${globalPath}/express`;

  if (!fs.existsSync(expressPath)) {
    fs.mkdirSync(expressPath);

    /** create package.json */
    if (!fs.existsSync(`${expressPath}/package.json`)) {
      const packageJsonTemp = fs.readFileSync(`${globalPath}/templates/packageTemplate.json`);
      fs.writeFileSync(`${expressPath}/package.json`, packageJsonTemp);
    }

    /** create app.js */
    if (!fs.existsSync(`${expressPath}/app.js`)) {
      const appTemp = fs.readFileSync(`${globalPath}/templates/appTemplate.js`);
      fs.writeFileSync(`${expressPath}/app.js`, appTemp);
    }

    /** create module apidoc */
    if (!fs.existsSync(`${expressPath}/apidoc`)) {
      const apiDocDir = `${expressPath}/apidoc`;
      const apiDocTemp = fs.readFileSync(`${globalPath}/templates/apiDocTemplate.html`);
      const faviconTemp = fs.readFileSync(`${globalPath}/templates/faviconTemplate.ico`);
      const iconTemp = fs.readFileSync(`${globalPath}/templates/iconTemplate.png`);

      fs.mkdirSync(apiDocDir);
      fs.writeFileSync(`${apiDocDir}/apidoc.html`, apiDocTemp);
      fs.writeFileSync(`${apiDocDir}/favicon.ico`, faviconTemp);
      fs.writeFileSync(`${apiDocDir}/icon.png`, iconTemp);
    }

    /** create module config */
    if (!fs.existsSync(`${expressPath}/config`)) {
      const configDir = `${expressPath}/config`;
      const configTemp = fs.readFileSync(`${globalPath}/templates/configTemplate.js`);
      const configGraphqlTemp = fs.readFileSync(`${globalPath}/templates/configGraphqlTemplate.js`);
      const configSwaggerTemp = fs.readFileSync(`${globalPath}/templates/configSwaggerTemplate.js`);

      fs.mkdirSync(configDir);
      fs.writeFileSync(`${configDir}/config.js`, configTemp);
      fs.writeFileSync(`${configDir}/graphql.js`, configGraphqlTemp);
      fs.writeFileSync(`${configDir}/swagger.js`, configSwaggerTemp);
    }

    /** create module docs */
    if (!fs.existsSync(`${expressPath}/docs`)) {
      const docsDir = `${expressPath}/docs`;
      const introductionTemp = fs.readFileSync(`${globalPath}/templates/1-introductionTemplate.js`);
      const metaTemp = fs.readFileSync(`${globalPath}/templates/metaTemplate.js`);

      fs.mkdirSync(docsDir);
      fs.writeFileSync(`${docsDir}/1-introduction.js`, introductionTemp);
      fs.writeFileSync(`${docsDir}/meta.js`, metaTemp);
    }

    /** create module graphql */
    if (!fs.existsSync(`${expressPath}/graphql`)) {
      const graphqlDir = `${expressPath}/graphql`;
      const graphqlResolversDir = `${graphqlDir}/resolvers`;
      const graphqlSchemaDir = `${graphqlDir}/schema`;
      const indexResolversTemp = fs.readFileSync(
        `${globalPath}/templates/indexResolversTemplate.js`
      );
      const exampleResolversTemp = fs.readFileSync(
        `${globalPath}/templates/exampleResolversTemplate.js`
      );
      const schemagraphqlTemp = fs.readFileSync(`${globalPath}/templates/schemagraphqlTemplate.js`);

      fs.mkdirSync(graphqlDir);
      fs.mkdirSync(graphqlResolversDir);
      fs.mkdirSync(graphqlSchemaDir);
      fs.writeFileSync(`${graphqlResolversDir}/index.js`, indexResolversTemp);
      fs.writeFileSync(`${graphqlResolversDir}/ExampleResolvers.js`, exampleResolversTemp);
      fs.writeFileSync(`${graphqlSchemaDir}/schemagraphql.js`, schemagraphqlTemp);
    }

    /** create module logs */
    if (!fs.existsSync(`${expressPath}/logs`)) {
      const logsDir = `${expressPath}/logs`;

      fs.mkdirSync(logsDir);
      fs.writeFileSync(`${logsDir}/.keep`);
    }

    /** create module models */
    if (!fs.existsSync(`${expressPath}/models`)) {
      const modelsDir = `${expressPath}/models`;
      const indexModelTemp = fs.readFileSync(`${globalPath}/templates/indexModelTemplate.js`);
      const exampleModelTemp = fs.readFileSync(`${globalPath}/templates/exampleModelTemplate.js`);

      fs.mkdirSync(modelsDir);
      fs.writeFileSync(`${modelsDir}/index.js`, indexModelTemp);
      fs.writeFileSync(`${modelsDir}/Example.js`, exampleModelTemp);
    }

    /** create module server */
    if (!fs.existsSync(`${expressPath}/server`)) {
      const serverDir = `${expressPath}/server`;
      const apiLimiterTemp = fs.readFileSync(`${globalPath}/templates/apiLimiterTemplate.js`);
      const clusterTemp = fs.readFileSync(`${globalPath}/templates/clusterTemplate.js`);
      const compressionTemp = fs.readFileSync(`${globalPath}/templates/compressionTemplate.js`);
      const corsTemp = fs.readFileSync(`${globalPath}/templates/corsTemplate.js`);
      const graphqlTemp = fs.readFileSync(`${globalPath}/templates/graphqlTemplate.js`);
      const logTemp = fs.readFileSync(`${globalPath}/templates/logTemplate.js`);
      const routesTemp = fs.readFileSync(`${globalPath}/templates/routesTemplate.js`);
      const swaggerTemp = fs.readFileSync(`${globalPath}/templates/swaggerTemplate.js`);

      fs.mkdirSync(serverDir);
      fs.writeFileSync(`${serverDir}/apiLimiter.js`, apiLimiterTemp);
      fs.writeFileSync(`${serverDir}/cluster.js`, clusterTemp);
      fs.writeFileSync(`${serverDir}/compression.js`, compressionTemp);
      fs.writeFileSync(`${serverDir}/cors.js`, corsTemp);
      fs.writeFileSync(`${serverDir}/graphql.js`, graphqlTemp);
      fs.writeFileSync(`${serverDir}/log.js`, logTemp);
      fs.writeFileSync(`${serverDir}/routes.js`, routesTemp);
      fs.writeFileSync(`${serverDir}/swagger.js`, swaggerTemp);
    }

    /** create module restapi */
    if (!fs.existsSync(`${expressPath}/utils`)) {
      const restApiDir = `${expressPath}/restapi`;
      const restApiControllersDir = `${restApiDir}/controllers`;
      const restApiRoutesDir = `${restApiDir}/routes`;
      const restApiServicesDir = `${restApiDir}/services`;
      const indexControllerTemp = fs.readFileSync(
        `${globalPath}/templates/indexControllerTemplate.js`
      );
      const baseControllerTemp = fs.readFileSync(
        `${globalPath}/templates/baseControllerTemplate.js`
      );
      const handleErrorControllerTemp = fs.readFileSync(
        `${globalPath}/templates/handleErrorControllerTemplate.js`
      );
      const exampleControllerTemp = fs.readFileSync(
        `${globalPath}/templates/exampleControllerTemplate.js`
      );
      const exampleRoutesTemp = fs.readFileSync(`${globalPath}/templates/exampleRoutesTemplate.js`);
      const indexServiceTemp = fs.readFileSync(`${globalPath}/templates/indexServiceTemplate.js`);
      const baseServiceTemp = fs.readFileSync(`${globalPath}/templates/baseServiceTemplate.js`);
      const exampleServiceTemp = fs.readFileSync(
        `${globalPath}/templates/exampleServiceTemplate.js`
      );

      fs.mkdirSync(restApiDir);
      fs.mkdirSync(restApiControllersDir);
      fs.mkdirSync(restApiRoutesDir);
      fs.mkdirSync(restApiServicesDir);
      fs.writeFileSync(`${restApiControllersDir}/index.js`, indexControllerTemp);
      fs.writeFileSync(`${restApiControllersDir}/BaseController.js`, baseControllerTemp);
      fs.writeFileSync(`${restApiControllersDir}/HandleError.js`, handleErrorControllerTemp);
      fs.writeFileSync(`${restApiControllersDir}/ExampleController.js`, exampleControllerTemp);
      fs.writeFileSync(`${restApiRoutesDir}/example.js`, exampleRoutesTemp);
      fs.writeFileSync(`${restApiServicesDir}/index.js`, indexServiceTemp);
      fs.writeFileSync(`${restApiServicesDir}/BaseService.js`, baseServiceTemp);
      fs.writeFileSync(`${restApiServicesDir}/ExampleService.js`, exampleServiceTemp);
    }

    /** create module utils */
    if (!fs.existsSync(`${expressPath}/utils`)) {
      const utilsDir = `${expressPath}/utils`;
      const indexUtilTemp = fs.readFileSync(`${globalPath}/templates/indexUtilTemplate.js`);
      const responseBuilderTemp = fs.readFileSync(
        `${globalPath}/templates/responseBuilderTemplate.js`
      );

      fs.mkdirSync(utilsDir);
      fs.writeFileSync(`${utilsDir}/index.js`, indexUtilTemp);
      fs.writeFileSync(`${utilsDir}/ResponseBuilder.js`, responseBuilderTemp);
    }
  } else initSuccess = false;

  if (initSuccess) {
    console.log(config.color.green, '✔ Initialization successful');
    return true;
  } else {
    console.log(config.color.red, `✖ Directory ${restApiDir} already exists.`);
    return false;
  }
};

module.exports = actions;
