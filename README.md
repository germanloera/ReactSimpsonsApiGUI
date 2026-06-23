# React Simpsons API GUI

A sample project built with **React Native + Expo** that provides a custom UI for **The Simpsons API**.

It includes dedicated screens for:

- Characters
- Episodes
- Locations

## Screenshots

Add your screenshots here later.

### Home

![Home Screenshot](./screenshots/home.png)

### Characters

![Characters Screenshot](./screenshots/characters.png)

### Episodes

![Episodes Screenshot](./screenshots/episodes.png)

### Locations

![Locations Screenshot](./screenshots/locations.png)

## Overview

The app uses a lightweight MVVM-style structure:

- **UI layer** in `app/(tabs)` and `components/ui`
- **ViewModels** in `src/viewmodels` for state and pagination logic
- **API services** in `src/services` using Axios
- **TypeScript models** in `src/models`

Main API base URL:

- `https://thesimpsonsapi.com/api`

## How it works

1. Each tab screen (Characters, Episodes, Locations) uses its own ViewModel.
2. The ViewModel fetches paginated data through `apiService`.
3. New items are merged into local state while avoiding duplicate IDs.
4. Lists are rendered with `FlatList` and support infinite scroll via `onEndReached`.

## Project structure

- `app/_layout.tsx`: root layout and stack setup
- `app/(tabs)/_layout.tsx`: tabs navigation
- `app/(tabs)/characters.tsx`: characters list screen
- `app/(tabs)/episodes.tsx`: episodes list screen
- `app/(tabs)/locations.tsx`: locations list screen
- `src/services/api.ts`: Axios client (`baseURL`, timeout, headers)
- `src/services/apiService.ts`: API methods for characters, episodes, and locations

## Tech stack and libraries

### Core

- **expo** (~54)
- **react** (19)
- **react-native** (0.81)
- **typescript** (~5.9)

### Navigation and UI

- **expo-router**
- **@react-navigation/native**
- **@react-navigation/bottom-tabs**
- **@expo/vector-icons**
- **react-native-safe-area-context**
- **expo-image**
- **expo-haptics**

### Data

- **axios** for HTTP requests

### Code quality

- **eslint** + **eslint-config-expo**

## Installation

```bash
npm install
```

## Available scripts

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
```

## Run the project

```bash
npm run start
```

Then choose where to run it:

- Android
- iOS
- Web

## Notes

- `SearchBox` is currently implemented as a UI component and can be extended with real filtering logic.
- Routing is file-based using `expo-router`.
- TypeScript strict mode is enabled (`strict: true`).

## API

- [The Simpsons API](https://thesimpsonsapi.com/)
