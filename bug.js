In React Router Dom v6, using the `useLocation` hook inside a component that's *not* directly within a route's component tree can lead to unexpected behavior.  The location might not update correctly, especially if nested routes or route changes happen.

For example:
```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  console.log(location);
  return <div>My Component</div>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <MyComponent />
    </div>
  );
}
```

`MyComponent`, not being a child of any Route, might receive stale location data. 