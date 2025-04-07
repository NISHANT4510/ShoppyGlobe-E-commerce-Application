import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetailPage from './components/ProductDetailPage'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ErrorBoundary from './components/ErrorBoundary'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

export default App;
