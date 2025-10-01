import PhotoGallery from "./components/PhotoGallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Products Store</h1>
        <p>Browse our collection of products with names and prices</p>
      </header>
      <main>
        <PhotoGallery />
      </main>
    </div>
  );
}

export default App;
