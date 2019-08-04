const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const lignator = require('lignator');

function writeFile(fileName, fileNameTemp, dir = '.') {
  if (!fs.existsSync(`${dir}/${fileName}`)) {
    const tempPath = path.join(__dirname, '../templates');
    const lastPath = dir.substring(dir.indexOf('/') + 1);
    const fileTemp = fs.readFileSync(`${tempPath}/${dir === '.' ? fileNameTemp : lastPath + '/' + fileNameTemp}`);
    const indent = dir === '.' ? '' : '  ';
    fs.writeFileSync(`${dir}/${fileName}`, fileTemp);
    console.log(chalk.green(`${indent}✔ Create ${dir === '.' ? fileName : dir + '/' + fileName} successful`));
  } else console.log(chalk.red(`✖ File ${fileName} already exists!`));
}

function makeDir(dir) {
  if (!fs.existsSync(`./${dir}`)) {
    fs.mkdirSync(`./${dir}`, { recursive: true });
    console.log(chalk.green(`✔ Make directory ${dir} successful`));
    return true;
  } else {
    console.log(chalk.red(`✖ Directory ${dir} already exists!`));
    return false;
  }
}

var actions = {};

actions.init = path => {
  var initSuccess = true;
  var startTime = process.hrtime();

  /** make directory if path defined */
  if (path) {
    makeDir(path);
  } else path = '.';

  const expExists = fs.existsSync(`${path}/app.js`) || fs.existsSync(`${path}/package.json`);
  if (!expExists) {
    /** create package.json */
    writeFile(`${path}/package.json`, 'packageTemp.json');

    /** create app.js */
    writeFile(`${path}/app.js`, 'appTemp.js');

    /** create module apidoc */
    const apiDocDir = `${path}/apidoc`;
    if (makeDir(apiDocDir)) {
      writeFile('apidoc.html', 'apiDocTemp.html', apiDocDir);
      writeFile('favicon.ico', 'faviconTemp.ico', apiDocDir);
      writeFile('icon.png', 'iconTemp.png', apiDocDir);
    }

    /** create module config */
    const configDir = `${path}/config`;
    if (makeDir(configDir)) {
      writeFile('config.js', 'configTemp.js', configDir);
      writeFile('graphql.js', 'graphqlTemp.js', configDir);
      writeFile('swagger.js', 'swaggerTemp.js', configDir);
    }

    /** create module docs */
    const docsDir = `${path}/docs`;
    if (makeDir(docsDir)) {
      writeFile('1-introduction.js', '1-introductionTemp.js', docsDir);
      writeFile('meta.js', 'metaTemp.js', docsDir);
    }

    /** create module graphql */
    const graphqlDir = `${path}/graphql`;
    if (makeDir(graphqlDir)) {
      const graphqlResloversDir = `${graphqlDir}/resolvers`;
      if (makeDir(graphqlResloversDir)) {
        writeFile('ExampleResolvers.js', 'ExampleResolversTemp.js', graphqlResloversDir);
        writeFile('index.js', 'indexTemp.js', graphqlResloversDir);
      }
      const graphqlSchemaDir = `${graphqlDir}/schema`;
      if (makeDir(graphqlSchemaDir)) {
        writeFile('schemagraphql.js', 'schemagraphqlTemp.js', graphqlSchemaDir);
      }
    }

    /** create module logs */
    const logsDir = `${path}/logs`;
    if (makeDir(logsDir)) {
      fs.writeFileSync(`${logsDir}/.keep`);
    }

    /** create module models */
    const modelsDir = `${path}/models`;
    if (makeDir(modelsDir)) {
      writeFile('Example.js', 'ExampleTemp.js', modelsDir);
      writeFile('index.js', 'indexTemp.js', modelsDir);
    }

    /** create module restapi */
    const restapiDir = `${path}/restapi`;
    if (makeDir(restapiDir)) {
      const restapiControllersDir = `${restapiDir}/controllers`;
      if (makeDir(restapiControllersDir)) {
        writeFile('BaseController.js', 'BaseControllerTemp.js', restapiControllersDir);
        writeFile('ExampleController.js', 'ExampleControllerTemp.js', restapiControllersDir);
        writeFile('HandleError.js', 'HandleErrorTemp.js', restapiControllersDir);
        writeFile('index.js', 'indexTemp.js', restapiControllersDir);
      }
      const restapiRoutesDir = `${restapiDir}/routes`;
      if (makeDir(restapiRoutesDir)) {
        writeFile('example.js', 'exampleTemp.js', restapiRoutesDir);
      }
      const restapiServicesDir = `${restapiDir}/services`;
      if (makeDir(restapiServicesDir)) {
        writeFile('BaseService.js', 'BaseServiceTemp.js', restapiServicesDir);
        writeFile('ExampleService.js', 'ExampleServiceTemp.js', restapiServicesDir);
        writeFile('index.js', 'indexTemp.js', restapiServicesDir);
      }
    }

    /** create module server */
    const serverDir = `${path}/server`;
    if (makeDir(serverDir)) {
      writeFile('apiLimiter.js', 'apiLimiterTemp.js', serverDir);
      writeFile('cluster.js', 'clusterTemp.js', serverDir);
      writeFile('compression.js', 'compressionTemp.js', serverDir);
      writeFile('cors.js', 'corsTemp.js', serverDir);
      writeFile('graphql.js', 'graphqlTemp.js', serverDir);
      writeFile('log.js', 'logTemp.js', serverDir);
      writeFile('routes.js', 'routesTemp.js', serverDir);
      writeFile('swagger.js', 'swaggerTemp.js', serverDir);
    }

    /** create module utils */
    const utilsDir = `${path}/utils`;
    if (makeDir(utilsDir)) {
      writeFile('index.js', 'indexTemp.js', utilsDir);
      writeFile('ResponseBuilder.js', 'ResponseBuilderTemp.js', utilsDir);
    }
  } else initSuccess = false;

  if (initSuccess) {
    console.log(chalk.green(`\n✨ Initialization done in ${process.hrtime(startTime)}s`));
    return true;
  } else {
    console.log(chalk.red('✖ Application server already exists!'));
    return false;
  }
};

actions.clean = async path => {
  const pathExists = await fs.existsSync(path);
  if (path !== undefined && pathExists) {
    const startTime = process.hrtime();
    lignator.remove(path);
    console.log(chalk.green(`\n✨ Clean Directory ${path} done in ${process.hrtime(startTime)}s`));
    return true;
  } else {
    console.log(chalk.red('✖ Please insert directory name to delete!'));
    return false;
  }
};

module.exports = actions;
