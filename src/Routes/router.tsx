
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/custom/layout/ScrollToTop";
import BackToTopButton from "@/components/custom/ui/BackToTopButton";
import SuspenseWrapper from "@/components/ui/suspense-wrapper";
import LoadingPage from "@/components/ui/loading-page";

// Lazy load all pages with better error boundaries
const Index = lazy(() => import("@/pages/Index"));
const AboutPage = lazy(() => import("@/pages/About"));
const TrainingPage = lazy(() => import("@/pages/Training"));
const CertifiedTrainingPage = lazy(() => import("@/pages/training/CertifiedTraining"));
const CertifiedTrainingDetailPage = lazy(() => import("@/pages/training/CertifiedTrainingDetail"));
const CertifiedRegistrationPage = lazy(() => import("@/pages/training/CertifiedRegistration"));
const HolidaysTrainingPage = lazy(() => import("@/pages/training/HolidaysTraining"));
const EnterpriseTrainingPage = lazy(() => import("@/pages/training/EnterpriseTraining"));
const EnterpriseTrainingDetailPage = lazy(() => import("@/pages/training/EnterpriseTrainingDetail"));
const EnterpriseQuotePage = lazy(() => import("@/pages/training/EnterpriseQuote"));
const PersonalizedTrainingPage = lazy(() => import("@/pages/training/PersonalizedTraining"));
const PersonalizedQuotePage = lazy(() => import("@/pages/training/PersonalizedQuote"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const Module1Page = lazy(() => import("@/pages/modules/Module1"));
const Module2Page = lazy(() => import("@/pages/modules/Module2"));
const Module3Page = lazy(() => import("@/pages/modules/Module3"));
const Module4Page = lazy(() => import("@/pages/modules/Module4"));
const RegistrationPage = lazy(() => import("@/pages/Registration"));
const LegalPage = lazy(() => import("@/pages/Legal"));
const PrivacyPage = lazy(() => import("@/pages/Privacy"));
const SitemapPage = lazy(() => import("@/pages/Sitemap"));
const FAQPage = lazy(() => import("@/pages/FAQ"));
const CourseDetailPage = lazy(() => import("@/pages/CourseDetail"));
const DashboardPage = lazy(() => import("@/pages/Dashboard"));

const Router = () => {
  return (
    <>
      <SuspenseWrapper fallback="page">
        <ScrollToTop />
        <Routes>
          {/* Navigation routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/training" element={<TrainingPage />} />

          {/* Certified training routes */}
          <Route path="/training/certified" element={<CertifiedTrainingPage />} />
          <Route path="/training/certified/:id" element={<CertifiedTrainingDetailPage />} />
          <Route path="/training/certified/:id/registration" element={<CertifiedRegistrationPage />} />

          {/* enterprise training routes */}
          <Route path="/training/enterprise" element={<EnterpriseTrainingPage />} />
          <Route path="/training/enterprise/:id" element={<EnterpriseTrainingDetailPage />} />
          <Route path="/training/enterprise/quote" element={<EnterpriseQuotePage />} />

          {/* personnalized training routes */}
          <Route path="/training/personalized" element={<PersonalizedTrainingPage />} />
          <Route path="/training/personalized/quote" element={<PersonalizedQuotePage />} />

          {/* Holliday trainning routes */}
          <Route path="/training/holidays" element={<HolidaysTrainingPage />} />
          <Route path="/training/holidays/modules/module1" element={<Module1Page />} />
          <Route path="/training/holidays/modules/module2" element={<Module2Page />} />
          <Route path="/training/holidays/modules/module3" element={<Module3Page />} />
          <Route path="/training/holidays/modules/module4" element={<Module4Page />} />
          <Route path="/registration" element={<RegistrationPage />} />

          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />


          {/* Legal pages */}
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SuspenseWrapper>
      <BackToTopButton />
    </>
  );
};

export default Router;
