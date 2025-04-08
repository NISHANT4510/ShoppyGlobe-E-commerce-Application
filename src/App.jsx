import './index.css'
import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { routes } from './routes/routes'

const AppRoutes = () => {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {element}
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
