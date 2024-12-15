# React Router v6 useLocation Bug

This repository demonstrates a subtle bug in React Router v6 related to the `useLocation` hook. When `useLocation` is used in a component that is not a direct descendant of a route component, the location state may not update correctly.

## Bug Description
The `useLocation` hook fails to reflect the current location when used outside a route's component hierarchy.  This leads to stale location data.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate between the '/' and '/about' routes.
5. Observe the console output in `MyComponent`. The location will not always reflect the current route.

## Solution
The solution involves restructuring the application so that `MyComponent` resides within the route hierarchy. This ensures that it's always re-rendered with the latest location data.