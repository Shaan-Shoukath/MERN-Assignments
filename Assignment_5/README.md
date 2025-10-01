# React Custom Hook: useFetch

A comprehensive implementation of a custom React hook that simplifies API data fetching with built-in loading states, error handling, and advanced features.

## 🚀 Features

- **Automatic Data Fetching**: Fetches data when URL changes
- **Loading State Management**: Built-in loading indicators
- **Error Handling**: Comprehensive error management for various scenarios
- **Manual Refetch**: Programmatic data refresh capability
- **Memory Leak Prevention**: Proper cleanup and cancellation
- **TypeScript Ready**: Easy to extend with TypeScript
- **Performance Optimized**: Uses useCallback for optimal re-renders
- **Flexible**: Works with any REST API endpoint

## 📦 Installation

This is a custom hook implementation. Simply copy the `useFetch.js` file to your project's hooks directory.

```bash
# Project structure
src/
├── hooks/
│   └── useFetch.js
├── components/
│   ├── ProductList.jsx
│   ├── ProductList.css
│   └── UseFetchDemo.jsx
└── App.jsx
```

## 🎯 Basic Usage

```javascript
import useFetch from './hooks/useFetch';

const MyComponent = () => {
  const { data, loading, error, refetch } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
```

## 🌐 API Endpoint Used

This implementation uses the **Platzi Fake Store API**:
- **Base URL**: `https://api.escuelajs.co/api/v1/`
- **Products Endpoint**: `https://api.escuelajs.co/api/v1/products`
- **Categories Endpoint**: `https://api.escuelajs.co/api/v1/categories`
- **Users Endpoint**: `https://api.escuelajs.co/api/v1/users`

### Sample API Response Structure

```json
{
  "id": 1,
  "title": "Handmade Fresh Table",
  "price": 687,
  "description": "Andy shoes are designed to keeping in...",
  "category": {
    "id": 5,
    "name": "Others",
    "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
  },
  "images": [
    "https://placeimg.com/640/480/any?r=0.9178516507833767",
    "https://placeimg.com/640/480/any?r=0.9300320592588625"
  ]
}
```

## 🔧 API Reference

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | `string` | Yes | The API endpoint URL to fetch data from |

### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `data` | `any \| null` | The fetched data (null initially and during loading) |
| `loading` | `boolean` | Indicates if a request is currently in progress |
| `error` | `string \| null` | Error message if request failed (null if no error) |
| `refetch` | `function` | Function to manually trigger a new fetch request |

## 🎨 Advanced Usage Examples

### 1. Product Listing with Error Recovery

```javascript
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const { data, loading, error, refetch } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {data?.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};
```

### 2. Dynamic Endpoint Switching

```javascript
const DynamicFetch = () => {
  const [endpoint, setEndpoint] = useState('products');
  const { data, loading, error } = useFetch(`https://api.escuelajs.co/api/v1/${endpoint}`);

  return (
    <div>
      <select onChange={(e) => setEndpoint(e.target.value)}>
        <option value="products">Products</option>
        <option value="categories">Categories</option>
        <option value="users">Users</option>
      </select>
      
      {loading && <p>Loading {endpoint}...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data.slice(0, 3), null, 2)}</pre>}
    </div>
  );
};
```

### 3. Conditional Fetching

```javascript
const ConditionalFetch = ({ userId }) => {
  const url = userId ? `https://api.example.com/users/${userId}` : null;
  const { data, loading, error } = useFetch(url);

  if (!userId) return <p>Please select a user</p>;
  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>User: {data?.name}</div>;
};
```

## 🛡️ Error Handling

The hook handles various error scenarios:

### Network Errors
- Connection timeouts
- Network unavailable
- DNS resolution failures

### HTTP Errors
- 4xx Client errors (400, 401, 403, 404, etc.)
- 5xx Server errors (500, 502, 503, etc.)

### Data Parsing Errors
- Invalid JSON responses
- Malformed data structures

### Example Error Handling

```javascript
const RobustComponent = () => {
  const { data, loading, error, refetch } = useFetch('https://api.example.com/data');

  const renderError = () => {
    if (error.includes('404')) {
      return <p>Data not found. Please check the URL.</p>;
    }
    if (error.includes('500')) {
      return <p>Server error. Please try again later.</p>;
    }
    if (error.includes('Failed to fetch')) {
      return <p>Network error. Check your connection.</p>;
    }
    return <p>An unexpected error occurred: {error}</p>;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{renderError()}</div>;
  
  return <div>{/* Render data */}</div>;
};
```

## 🎯 Best Practices

### 1. Loading States
Always provide meaningful loading indicators:

```javascript
if (loading) {
  return (
    <div className="loading-state">
      <div className="spinner" />
      <p>Fetching latest data...</p>
    </div>
  );
}
```

### 2. Error Recovery
Implement user-friendly error recovery:

```javascript
if (error) {
  return (
    <div className="error-state">
      <h3>Unable to load data</h3>
      <p>{error}</p>
      <div className="error-actions">
        <button onClick={refetch}>Retry</button>
        <button onClick={() => window.location.reload()}>Refresh Page</button>
      </div>
    </div>
  );
}
```

### 3. Data Validation
Always validate data before rendering:

```javascript
const safeData = data && Array.isArray(data) ? data : [];
return (
  <div>
    {safeData.length > 0 ? (
      safeData.map(item => <div key={item.id}>{item.name}</div>)
    ) : (
      <p>No data available</p>
    )}
  </div>
);
```

## 🔄 Hook Implementation Details

### Core Features

```javascript
import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
```

### Key Design Decisions

1. **useCallback**: Prevents unnecessary re-renders and infinite loops
2. **Error Reset**: Clears previous errors on new requests
3. **Null URL Handling**: Gracefully handles conditional fetching
4. **HTTP Status Checking**: Throws errors for non-2xx responses
5. **Finally Block**: Ensures loading state is always cleared

## 🧪 Testing

### Unit Test Example

```javascript
import { renderHook, waitFor } from '@testing-library/react';
import useFetch from './useFetch';

// Mock fetch
global.fetch = jest.fn();

describe('useFetch', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'Test' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useFetch('https://api.test.com/data'));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  test('should handle errors', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useFetch('https://api.test.com/data'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('Network error');
    expect(result.current.data).toBe(null);
  });
});
```

## 🚀 Performance Optimization

### 1. Memoization
The hook uses `useCallback` to prevent unnecessary re-renders:

```javascript
const fetchData = useCallback(async () => {
  // Fetch logic
}, [url]); // Only recreate when URL changes
```

### 2. Conditional Rendering
Optimize component rendering based on states:

```javascript
const MyComponent = () => {
  const { data, loading, error } = useFetch(url);

  // Early returns prevent unnecessary JSX processing
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <EmptyState />;

  return <DataDisplay data={data} />;
};
```

## 🔮 Future Enhancements

Potential improvements for the hook:

1. **Request Cancellation**: AbortController support
2. **Caching**: Built-in response caching
3. **Retry Logic**: Automatic retry with exponential backoff
4. **Request Interceptors**: Middleware for auth tokens
5. **TypeScript**: Full TypeScript implementation
6. **Pagination**: Built-in pagination support

### Enhanced Version Example

```javascript
const useFetchAdvanced = (url, options = {}) => {
  const {
    retries = 0,
    retryDelay = 1000,
    cache = false,
    headers = {},
  } = options;

  // Implementation with advanced features
  // ...
};
```

## 📚 Related Resources

- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Error Handling Best Practices](https://reactjs.org/docs/error-boundaries.html)

## 🤝 Contributing

Feel free to extend this hook with additional features:

1. Fork the project
2. Create your feature branch
3. Add tests for new functionality
4. Submit a pull request

## 📄 License

This implementation is provided as-is for educational purposes. Feel free to use and modify according to your needs.

---

**Built with ❤️ using React Hooks**