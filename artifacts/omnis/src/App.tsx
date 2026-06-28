import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import SocialLayout from "@/components/layout/SocialLayout";
import BusinessLayout from "@/components/layout/BusinessLayout";

import SocialLanding from "@/pages/social/SocialLanding";
import SocialAbout from "@/pages/social/SocialAbout";
import SocialServices from "@/pages/social/SocialServices";
import SocialDonate from "@/pages/social/SocialDonate";
import SocialBookCall from "@/pages/social/SocialBookCall";

import BusinessLanding from "@/pages/business/BusinessLanding";
import BusinessAbout from "@/pages/business/BusinessAbout";
import BusinessServices from "@/pages/business/BusinessServices";
import BusinessBookCall from "@/pages/business/BusinessBookCall";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Social Sector Routes */}
      <Route path="/social" component={() => <SocialLayout><SocialLanding /></SocialLayout>} />
      <Route path="/social/about" component={() => <SocialLayout><SocialAbout /></SocialLayout>} />
      <Route path="/social/services" component={() => <SocialLayout><SocialServices /></SocialLayout>} />
      <Route path="/social/donate" component={() => <SocialLayout><SocialDonate /></SocialLayout>} />
      <Route path="/social/book-call" component={() => <SocialLayout><SocialBookCall /></SocialLayout>} />

      {/* Business Sector Routes */}
      <Route path="/business" component={() => <BusinessLayout><BusinessLanding /></BusinessLayout>} />
      <Route path="/business/about" component={() => <BusinessLayout><BusinessAbout /></BusinessLayout>} />
      <Route path="/business/services" component={() => <BusinessLayout><BusinessServices /></BusinessLayout>} />
      <Route path="/business/book-call" component={() => <BusinessLayout><BusinessBookCall /></BusinessLayout>} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
