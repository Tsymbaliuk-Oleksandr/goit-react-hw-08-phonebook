import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

// export default PublicRoute;
