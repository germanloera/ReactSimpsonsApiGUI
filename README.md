# React Simpsons API GUI

[![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000000)](https://react.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-20232A?logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

A portfolio-ready sample app built with **React Native + Expo** that delivers a custom UI for **The Simpsons API**.

## Highlights

- Custom tab-based navigation and themed UI
- Infinite scrolling lists for characters, episodes, and locations
- Typed API layer with Axios + TypeScript interfaces
- Lightweight MVVM-style organization
- Runs on Android, iOS, and Web

## Architecture

The project is structured in a clear UI → ViewModel → Service flow.

- **UI Layer**: `app/(tabs)` and `components/ui`
- **State/ViewModels**: `src/viewmodels`
- **Data Services**: `src/services`
- **Typed Models**: `src/models`

### Data Flow

1. A screen (Characters / Episodes / Locations) calls its ViewModel.
2. The ViewModel requests paginated data via `apiService`.
3. Incoming results are merged into local state with duplicate prevention by `id`.
4. The UI renders `FlatList` with infinite scroll using `onEndReached`.

## Key Files

- `app/_layout.tsx` — root layout and stack
- `app/(tabs)/_layout.tsx` — tab navigation configuration
- `app/(tabs)/characters.tsx` — characters screen
- `app/(tabs)/episodes.tsx` — episodes screen
- `app/(tabs)/locations.tsx` — locations screen
- `src/services/api.ts` — Axios instance (`baseURL`, timeout, headers)
- `src/services/apiService.ts` — API methods for main resources

## Tech Stack

### Core

- Expo 54
- React 19
- React Native 0.81
- TypeScript 5.9

### Navigation and UI

- expo-router
- @react-navigation/native
- @react-navigation/bottom-tabs
- @expo/vector-icons
- react-native-safe-area-context
- expo-image
- expo-haptics

### Networking and Tooling

- axios
- eslint + eslint-config-expo

## Getting Started

```bash
npm install
```

### Run locally

```bash
npm run start
```

### Platform commands

```bash
npm run android
npm run ios
npm run web
```

### Lint

```bash
npm run lint
```

## API

This project uses:

- [The Simpsons API](https://thesimpsonsapi.com/)
- Base URL: `https://thesimpsonsapi.com/api`

## Roadmap

- Add real search/filter behavior to `SearchBox`
- Add resource detail screens (character, episode, location)
- Improve loading/error/empty states
- Add tests for ViewModels and service layer

## Author

German Loera

## License

MIT

## Screenshots


### Home

| iOS | Android | 
| --- | --- | 
| <img src="./screenshots/home_ios.png" alt="" style="width:30%; height:auto;"> | <img src="./screenshots/home_android.png" alt="" style="width:30%; height:auto;"> |

### Characters

| iOS | Android | 
| --- | --- | 
| <img src="./screenshots/character_ios.png" alt="" style="width:40%; height:auto;"> | <img src="./screenshots/character_android.png" alt="" style="width:40%; height:auto;"> |

### Characters detail

| iOS | Android | 
| --- | --- | 
| <img src="./screenshots/char_detail_ios.png" alt="" style="width:30%; height:auto;"> | <img src="./screenshots/char_detail_android.png" alt="" style="width:30%; height:auto;"> |

### Episodes

| iOS | Android | 
| --- | --- | 
| <img src="./screenshots/episodes_ios.png" alt="" style="width:30%; height:auto;"> | <img src="./screenshots/episodes_android.png" alt="" style="width:30%; height:auto;"> |

### Episodes Detail

| iOS | Android | 
| --- | --- | 
| <img src="./screenshots/ep_detail_ios.png" alt="" style="width:30%; height:auto;"> | <img src="./screenshots/ep_detail_android.png" alt="" style="width:30%; height:auto;"> |


### Locations

| iOS | Android | 
| --- | --- | 
| <img src="./screenshots/loc_ios.png" alt="" style="width:30%; height:auto;"> | <img src="./screenshots/locations_android.png" alt="Home iOS" style="width:30%; height:auto;"> |

### Locations Detail

| iOS | Android | 
| --- | --- | 
|  <img src="./screenshots/loc_det_ios.png" alt="" style="width:30%; height:auto;"> | <img src="./screenshots/loc_det_android.png" alt="" style="width:30%; height:auto;"> |