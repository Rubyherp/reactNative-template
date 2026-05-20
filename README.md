This is a simple template that uses:
React Native
Expo
GlueStack
NodeJS (ExpressJS)

Setup instructions for integrated tech stack project:

1. Create Expo project
bash
npx create-expo-app myapp
cd myapp
2. Install gluestack
bash
npx gluestack-ui init
npx gluestack-ui add button text box heading input vstack hstack badge spinner
3. Fix version mismatches
bash
npx expo install react-native-safe-area-context@~5.6.0 react-native-svg@15.12.1 babel-preset-expo@~54.0.10 @types/react@~19.1.10
4. Install other dependencies
bash
npx expo install expo-device expo-network @react-native-async-storage/async-storage
npm install react-dom typescript @types/react @types/react-native
5. Copy from your working project
components/ui/ folder
global.css
tailwind.config.js
metro.config.js
babel.config.js
nativewind-env.d.ts
6. Set up app/_layout.jsx
jsx
import "../global.css";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
    return (
        <GluestackUIProvider mode="light">
            <Stack />
        </GluestackUIProvider>
    );
}
7. Set up tsconfig.json
json
{
  "compilerOptions": {
    "jsx": "react-native"
  }
}
8. Set up backend
bash
mkdir backend && cd backend
npm init -y
npm install express cors
9. Create .env
EXPO_PUBLIC_BACKEND_URL=http://192.168.x.x:3000
10. Start everything
bash
# terminal 1 - backend
node backend/index.js

# terminal 2 - expo
npx expo start -c

Which files are gluestack specific?

From your project:
components/ui/ — all gluestack components
global.css — tailwind directives
tailwind.config.js — gluestack color tokens
nativewind-env.d.ts — nativewind types
The gluestack-related parts of babel.config.js (nativewind/babel and module-resolver plugin)
The gluestack-related parts of metro.config.js (withNativeWind)
Everything else (app/, app.json, package.json, tsconfig.json, backend/) is standard Expo/Node.


how to remove all gluestack stuff and make sure its still all works
1. Uninstall packages:
bash
npm uninstall @gluestack-ui/core @gluestack-ui/utils nativewind tailwindcss react-aria react-stately tailwind-variants @legendapp/motion prettier-plugin-tailwindcss
2. Delete files:
bash
rm -rf components/
rm global.css
rm tailwind.config.js
rm nativewind-env.d.ts
3. Fix babel.config.js:
js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
4. Fix metro.config.js:
js
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
module.exports = config;
5. Fix _layout.jsx:
jsx
import { Stack } from "expo-router";

export default function RootLayout() {
    return <Stack />;
}
6. Clear cache and restart:
bash
npx expo start -c
If the test screen still renders correctly after that, everything is working without gluestack.

