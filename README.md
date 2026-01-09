# 🎴 Infinite Stacked Event Slider

A premium, mobile-first **Infinite Stacked Slider** built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. This project features high-performance touch gestures, spring-physics animations, and a seamless looping deck interface inspired by modern social discovery apps.

## ✨ Features

* **Infinite Looping**: Swiping the top card automatically sends it to the back of the deck, ensuring the content never ends.
* **Tactile Gestures**: Built with Framer Motion drag constraints and velocity detection for a native mobile feel.
* **Spring Physics**: Cards respond with "weight" and realistic movement when swiped or snapped back.
* **Dynamic UI Transforms**:
* **Chevron Spin**: Icons perform a mechanical 360° spin as cards enter the focus area.
* **Stack Depth**: Background cards dynamically scale and shift upward as the top card is moved.
* **Ghosting Effect**: Top cards fade out based on swipe distance.


* **Responsive Navigation**: Fixed bottom navigation menu optimized for thumb reach on mobile devices.

## 🚀 Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Fonts**: [Geist Sans](https://vercel.com/font)

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js 20+** installed.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/shakerscode/custom-slider.git
cd custom-slider

```


2. **Install dependencies:**
```bash
npm install

```


3. **Configure Unsplash Images:**
To use external images, ensure your `next.config.mjs` allows the Unsplash hostname:
```javascript
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

```


4. **Run the development server:**
```bash
npm run dev

```



Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the application.

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx     # Root layout with Geist font
│   └── page.tsx       # Main view with Bottom Nav & Slider container
├── components/
│   └── StackedSlider.tsx  # Parent logic for infinite loop & card slicing
└── public/            # Static assets

```

## 📱 Mobile Interaction

* **Swipe Left/Right**: Toss the current card to see the next event.
* **Flick**: High-velocity gestures will trigger the slide even with short drag distances.
* **Touch Optimization**: Uses `touch-none` to prevent browser scrolling interference during swiping.

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
