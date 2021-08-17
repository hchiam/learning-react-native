# Learning [React Native](https://facebook.github.io/react-native)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Generate native Android and native iOS components using one code base.

Core/Custom/Community components ∈ React Native components ∈ React components.

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

If you see the localhost page automatically open in your browser, but your mobile device fails upon connecting with the default settings (via the QR code scan within the Expo Go app), try setting the connection to "Tunnel".

If you see a console error about something like the SDK version being incompatible, or react native version mismatch in Expo Go on your mobile device,try hitting the dismiss button and see if the demo still works for now. You might need to run `expo update` to automatically update all dependencies to be compatible in the `app.json` and `package.json` for you.

If you still can't get it to work on a real mobile device, you can still simulate mobile in a browser by hitting the "w" key in the terminal to run in browser.
