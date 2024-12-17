const fs = require('fs');
const path = require('path');
const createScreenTemplate = require('./templates/screenTemplate/ScreenTemplate');
const createUseScreenTemplate = require('./templates/screenTemplate/useScreenTemplate');

const createScreen = screenName => {
  const arrayName = screenName.split('_');
  const capitalizeName = arrayName
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('');
  const camelcaseName = arrayName
    .map((item, index) =>
      index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1),
    )
    .join('');
  const dir = path.join(__dirname, '../src/screens/app', camelcaseName);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
  }

  const screenPath = path.join(dir, `${capitalizeName}Screen.tsx`);
  const useScreenPath = path.join(dir, `use${capitalizeName}Screen.hook.ts`);
  const screenIndexPath = path.join(dir, 'index.ts');

  if (fs.existsSync(screenPath)) {
    console.log(`${capitalizeName} screen already exists`);
    process.exit(1);
  }
  if (fs.existsSync(useScreenPath)) {
    console.log(`use${capitalizeName} hook already exists`);
    process.exit(1);
  }
  if (fs.existsSync(screenIndexPath)) {
    console.log('index.ts already exists');
    process.exit(1);
  }

  fs.writeFileSync(screenPath, createScreenTemplate(screenName));
  fs.writeFileSync(useScreenPath, createUseScreenTemplate(screenName));
  fs.writeFileSync(
    screenIndexPath,
    `export * from './${capitalizeName}Screen';`,
  );
  modifyScreenConfig(screenName);
};

const modifyScreenConfig = screenName => {
  const arrayName = screenName.split('_');
  const capitalizeName = arrayName
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('');
  const camelcaseName = arrayName
    .map((item, index) =>
      index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1),
    )
    .join('');

  //update src/screens/app/index.ts
  const screenConfigPath = path.join(__dirname, '../src/screens/app/index.ts');
  const screenConfig = fs.readFileSync(screenConfigPath, 'utf-8');
  const newScreenConfig =
    screenConfig + `export * from './${camelcaseName}';\n`;
  fs.writeFileSync(screenConfigPath, newScreenConfig);

  //update src/navigation/RouteName.tsx
  const routeNamePath = path.join(__dirname, '../src/navigation/RouteName.tsx');
  const routeName = fs.readFileSync(routeNamePath, 'utf-8');
  const routeNamePattern = '//NEW ROUTE HERE';
  const newRouteNameIndex = routeName.indexOf(routeNamePattern);
  const newRouteName =
    routeName.slice(0, newRouteNameIndex) +
    `${screenName.toUpperCase()} = '${screenName.toUpperCase()}',\n  ` +
    routeName.slice(newRouteNameIndex);
  fs.writeFileSync(routeNamePath, newRouteName);

  //update src/navigation/NavigationParams.tsx
  const navigationParamsPath = path.join(
    __dirname,
    '../src/navigation/NavigationParams.tsx',
  );
  const navigationParams = fs.readFileSync(navigationParamsPath, 'utf-8');
  const newNavigationParams =
    navigationParams +
    `export interface I${capitalizeName}ScreenParams {
    params: any;
  }\n`;
  fs.writeFileSync(navigationParamsPath, newNavigationParams);

  //update src/navigation/RootStackParamList.tsx
  const rootStackParamListPath = path.join(
    __dirname,
    '../src/navigation/RootStackParamList.tsx',
  );
  const rootStackParamList = fs.readFileSync(rootStackParamListPath, 'utf-8');
  const routeStackPattern = '//NEW ROUTE STACK HERE';
  const routeParamsImportPattern = '//NEW ROUTE PARAMS HERE';
  const newRouteStackIndex = rootStackParamList.indexOf(routeStackPattern);
  const newRouteStack =
    rootStackParamList.slice(0, newRouteStackIndex) +
    `[RouteName.${screenName.toUpperCase()}]: I${capitalizeName}ScreenParams;\n  ` +
    rootStackParamList.slice(newRouteStackIndex);
  const newRouteParamsImportIndex = newRouteStack.indexOf(
    routeParamsImportPattern,
  );
  const newRouteParamsImport =
    newRouteStack.slice(0, newRouteParamsImportIndex) +
    `I${capitalizeName}ScreenParams\n` +
    newRouteStack.slice(newRouteParamsImportIndex);
  fs.writeFileSync(rootStackParamListPath, newRouteParamsImport);

  //update src/navigation/stack/MainStack.tsx
  const mainStackPath = path.join(
    __dirname,
    '../src/navigation/stack/MainStack.tsx',
  );
  const mainStack = fs.readFileSync(mainStackPath, 'utf-8');
  const stackPattern = '{/* NEW SCREEN HERE */}';
  const importPattern = '// NEW SCREEN IMPORT HERE';
  const newStackIndex = mainStack.indexOf(stackPattern);
  const newStack =
    mainStack.slice(0, newStackIndex) +
    `<Stack.Screen
        name={RouteName.${screenName.toUpperCase()}}
        component={${capitalizeName}Screen}
      />\n      ` +
    mainStack.slice(newStackIndex);
  const newImportIndex = newStack.indexOf(importPattern);
  const newImport =
    newStack.slice(0, newImportIndex) +
    `${capitalizeName}Screen\n` +
    newStack.slice(newImportIndex);
  fs.writeFileSync(mainStackPath, newImport);
};

const screenName = process.argv[2];

if (screenName) {
  createScreen(screenName);
}
