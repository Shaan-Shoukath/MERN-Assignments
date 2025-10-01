# useFetch Custom Hook

A custom React hook that simplifies the process of fetching data from APIs.

## Features

- ✅ Handles loading states
- ✅ Manages error states
- ✅ Automatic data fetching on URL change
- ✅ Manual refetch capability
- ✅ Built with React hooks (useState, useEffect, useCallback)

## Usage

```javascript
import useFetch from './hooks/useFetch';

const MyComponent = () => {
  const { data, loading, error, refetch } = useFetch('https://api.example.com/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

## API

### Parameters

- `url` (string): The API endpoint URL to fetch data from

### Returns

An object containing:

- `data`: The fetched data (null initially)
- `loading`: Boolean indicating if a request is in progress
- `error`: Error message if the request failed (null if no error)
- `refetch`: Function to manually trigger a new fetch request

## Error Handling

The hook handles various error scenarios:

- Network errors
- HTTP error status codes
- Malformed JSON responses
- Invalid URLs

## Example with Error Handling

```javascript
const { data, loading, error, refetch } = useFetch('https://api.example.com/data');

if (loading) {
  return <div className="spinner">Loading...</div>;
}

if (error) {
  return (
    <div className="error">
      <p>Something went wrong: {error}</p>
      <button onClick={refetch}>Try Again</button>
    </div>
  );
}

return <div>{/* Render your data */}</div>;
```

## Dependencies

- React (useState, useEffect, useCallback)
- Native fetch API