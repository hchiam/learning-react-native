# Learning [React Native](https://facebook.github.io/react-native)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

You can generate a [dependency graph](https://github.com/hchiam/learning-dependency-cruiser) with `bash show_dep_graph.sh`.

## Setup from scratch

<https://facebook.github.io/react-native/docs/getting-started>

## Setup from this repo

```bash
npm install -g expo-cli
cd learning-react-native
npm install
npm start
# hit the "w" key to run in browser
# http://192.168.0.165:19006/
# open developer tools and choose a mobile device
# when you make changes, the preview will automatically reload
```

or:

```bash
yarn global add expo-cli
cd learning-react-native
yarn
yarn dev
```

## Troubleshooting

If you keep seeing an error message about the SDK version being incompatible, try manually updating the `sdkVersion` number in `app.json` to the latest: <https://docs.expo.dev/versions/latest>

If you see the localhost page automatically open in your browser, but your mobile device fails upon connecting with the default settings (via the QR code scan within the Expo Go app), try setting the connection to "Tunnel".

If you see a console error about react native version mismatch in Expo Go on your mobile device,try hitting the dismiss button and see if the demo still works for now. You might need to close all terminals and run `yarn dev` again. Or explicitly set the ``"react-native"` version number in your `package.json` by running `yarn add react-native` . Or just run `expo update`.

If you still can't get it to work on a real mobile device, you can still simulate mobile in a browser by hitting the "w" key in the terminal to run in browser.
