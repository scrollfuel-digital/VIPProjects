import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import SkyConnect7CrownPage from "@/pages/projects/Skyconnect.tsx";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PyramidAmara = lazy(() => import("@/pages/projects/PyramidAmaraPage"));
const SkyJoy = lazy(() => import("@/pages/projects/SkyJoyPage"));
const PropertyDetail = lazy(() => import("@/pages/PropertyDetailPage"));
const NotFound = lazy(() => import("@/pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[var(--gold)]" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* All routes share the persistent Layout (Navbar + Footer) */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/skyconnect-7-crown" element={<SkyConnect7CrownPage />} />
            <Route path="/projects/pyramid-amara" element={<PyramidAmara />} />
            <Route path="/projects/sky-joy" element={<SkyJoy />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Route>

          {/* 404 — outside layout, full screen */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
