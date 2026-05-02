import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAuth } from "./contexts/AuthContext"; // adjust to your actual auth hook

// ✅ Public pages — lazy loaded, each becomes its own JS chunk
const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ReferralLanding = lazy(() => import("@/pages/ReferralPage").then(m => ({ default: m.ReferralLanding })));
const ReferPage = lazy(() => import("@/pages/ReferralPage").then(m => ({ default: m.ReferPage })));
const Downloads = lazy(() => import("@/pages/Downloads"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const ShippingReturns = lazy(() => import("@/pages/ShippingReturns"));

// ✅ Admin pages — lazy loaded separately so public visitors never download this code
const AdminSocial = lazy(() => import("@/pages/AdminSocial"));
const AdminSocialCallback = lazy(() => import("@/pages/AdminSocialCallback"));
const AdminOrders = lazy(() => import("@/pages/AdminOrders"));
const AdminReviews = lazy(() => import("@/pages/AdminReviews"));
const AdminSubscribers = lazy(() => import("@/pages/AdminSubscribers"));

// ✅ Fixed: auth guard — redirects unauthenticated users away from admin routes
function AdminRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Redirect to="/" />;
  return <Component />;
}

// ✅ Fixed: use wouter's useLocation (not react-router-dom) for SPA analytics
function Analytics() {
  const [location] = useLocation();
  useEffect(() => {
    window.umami?.track();
  }, [location]);
  return null;
}

function Router() {
  return (
    // ✅ Suspense wraps all lazy routes — show nothing (or a spinner) while chunk loads
    <Suspense fallback={null}>
      <Analytics />
      <Switch>
        <Route path="/" component={Home} />

        {/* Admin routes — protected */}
        <Route path="/admin/social/callback">
          <AdminRoute component={AdminSocialCallback} />
        </Route>
        <Route path="/admin/social">
          <AdminRoute component={AdminSocial} />
        </Route>
        <Route path="/admin/orders">
          <AdminRoute component={AdminOrders} />
        </Route>
        <Route path="/admin/reviews">
          <AdminRoute component={AdminReviews} />
        </Route>
        <Route path="/admin/subscribers">
          <AdminRoute component={AdminSubscribers} />
        </Route>

        {/* Public routes */}
        <Route path="/ref/:code" component={ReferralLanding} />
        <Route path="/refer" component={ReferPage} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/faq" component={FAQ} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/shipping" component={ShippingReturns} />

        {/* ✅ Removed redundant /404 route — catch-all handles it */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      {/* ✅ Fixed: "system" respects user's OS light/dark preference */}
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
