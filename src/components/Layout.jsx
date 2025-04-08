import { Outlet } from 'react-router-dom'
import Header from './Header'

/**
 * Layout component providing consistent page structure
 * Includes header and main content area
 */
const Layout = () => {
  return (
    <>
      <Header /> {/* Global navigation header */}
      <main>
        <Outlet /> {/* Render child routes */}
      </main>
    </>
  )
}

export default Layout
