import RootLayout from '../components/layout/RootLayout';
import HomePage from '../pages/HomePage';
import PhilosophyPage from '../pages/PhilosophyPage';
import GalleryPage from '../pages/GalleryPage';
import BookingPage from '../pages/BookingPage';

export let router = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'pages/philosophy', element: <PhilosophyPage /> },
      { path: 'pages/gallery', element: <GalleryPage /> },
      { path: 'pages/booking', element: <BookingPage /> },
    ],
  },
];