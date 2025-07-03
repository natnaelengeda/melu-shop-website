import { Metadata } from "next";

export const meta: Metadata = {
  // metadataBase: new URL('https://melu-shop.vercel.app/'),
  icons: {
    icon: 'logo.png',
  },
  // themeColor: "#0F4C81",
  title: "Melu Clothes Shop",
  description: "Melu Clothes Shop offers stylish, affordable women's fashion for every occasion. From casual outfits to elegant looks, we bring you the latest trends and timeless pieces to help you look and feel your best.",
  applicationName: 'Melu Clothes Shop',
  keywords: [
    "Women's Clothing",
    'Affordable Fashion',
    'Trendy Outfits',
    "Women's Dresses",
    'Casual Wear',
    'Elegant Fashion',
    'Melu Clothes Shop'
  ],
  creator: 'Melu Clothes Shop',
  authors: [
    {
      name: 'Melu Clothes Shop',
      url: 'https://melu-shop.vercel.app/'
    }
  ],
  publisher: 'Melu Clothes Shop',
  openGraph: {
    title: 'Melu Clothes Shop',
    description: "Melu Clothes Shop offers stylish, affordable women's fashion for every occasion. From casual outfits to elegant looks, we bring you the latest trends and timeless pieces to help you look and feel your best.",
    url: 'https://melu-shop.vercel.app/',
    siteName: "Melu Clothes Shop",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Melu Clothes Shop",
    description: "Melu Clothes Shop offers stylish, affordable women's fashion for every occasion. From casual outfits to elegant looks, we bring you the latest trends and timeless pieces to help you look and feel your best.",
    site: "@MeluClothesShop",
    images: ['/seo-image.png'],
    creator: "@MeluClothesShop",
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['nattynengeda@gmail.com', 'https://natnaelengeda.tech']
    }
  },
  appleWebApp: {
    title: "Melu Clothes Shop",
    statusBarStyle: 'black-translucent',
    startupImage: [
      'logo.png'
    ]
  },
};