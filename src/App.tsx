import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

// Dedicated Product Pages (Stage 3)
import { FlushMountAlbumPage } from './pages/products/FlushMountAlbumPage';
import { LayflatAlbumPage } from './pages/products/LayflatAlbumPage';
import { PhotoBookPage } from './pages/products/PhotoBookPage';
import { LuxuryAlbumsPage } from './pages/products/LuxuryAlbumsPage';
import { BoxAndBagsPage } from './pages/products/BoxAndBagsPage';
import { SlipInAlbumsPage } from './pages/products/SlipInAlbumsPage';

// Dedicated Service Pages (Stage 4)
import { AlbumDesigningPage } from './pages/services/AlbumDesigningPage';
import { ImageEditingPage } from './pages/services/ImageEditingPage';
import { WeddingPhotographyPage } from './pages/services/WeddingPhotographyPage';

// Dedicated UK Pages (Stage 5)
import { FlushMountAlbumUkPage } from './pages/uk/FlushMountAlbumUkPage';
import { LuxuryAlbumsUkPage } from './pages/uk/LuxuryAlbumsUkPage';
import { BoxAndBagsUkPage } from './pages/uk/BoxAndBagsUkPage';
import { SlipInAlbumsUkPage } from './pages/uk/SlipInAlbumsUkPage';
import { ImageEditingUkPage } from './pages/uk/ImageEditingUkPage';
import { PhotoBookUkPage } from './pages/uk/PhotoBookUkPage';
import { PhotographyUkPage } from './pages/uk/PhotographyUkPage';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Core Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />

        {/* 6 Dedicated Product Detail Pages */}
        <Route path="/flush-mount-album" element={<FlushMountAlbumPage />} />
        <Route path="/layflat" element={<LayflatAlbumPage />} />
        <Route path="/photo-book" element={<PhotoBookPage />} />
        <Route path="/luxury-albums" element={<LuxuryAlbumsPage />} />
        <Route path="/box-and-bags" element={<BoxAndBagsPage />} />
        <Route path="/slip-in-albums" element={<SlipInAlbumsPage />} />

        {/* 3 Dedicated Service Pages */}
        <Route path="/album-designing" element={<AlbumDesigningPage />} />
        <Route path="/image-editing" element={<ImageEditingPage />} />
        <Route path="/photography" element={<WeddingPhotographyPage />} />

        {/* 7 Dedicated UK Pages (Stage 5) */}
        <Route path="/flush-mount-album-for-uk" element={<FlushMountAlbumUkPage />} />
        <Route path="/luxury-albums-for-uk" element={<LuxuryAlbumsUkPage />} />
        <Route path="/box-and-bags-for-uk" element={<BoxAndBagsUkPage />} />
        <Route path="/slip-in-albums-for-uk" element={<SlipInAlbumsUkPage />} />
        <Route path="/image-editing-for-uk" element={<ImageEditingUkPage />} />
        <Route path="/photo-book-for-uk" element={<PhotoBookUkPage />} />
        <Route path="/photography-for-uk" element={<PhotographyUkPage />} />

        {/* Catch-All / Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
