# Horizontal Slider

A performance-optimized horizontal scroll component built with React. This slider uses direct DOM manipulation via `refs` to ensure the UI stays in sync with manual user scrolls while providing smooth programmatic navigation.

## ✨ Features

- **DOM-Synced Navigation**: Uses `scrollLeft` directly, preventing the "jumpy" behavior found in state-based sliders.
- **Native Smooth Scrolling**: Leverages the browser's native `scrollTo` API for fluid transitions.
- **Lightweight**: Zero external dependencies.
- **Swipe Support**: Works out-of-the-box with trackpads and touch devices.

## 🛠️ Usage

### 1. Data Structure
Ensure your data source (e.g., `./utils/data.js`) follows this format:

```javascript
export const SAMPLE_DATA = [
  { id: 1, color: "#3498db" },
  { id: 2, color: "#e74c3c" },
  { id: 3, color: "#2ecc71" },
];
```

### 2. Component Implementation
The core logic relies on a useRef to target the scroll container:

```javascript
const handleScroll = (direction) => {
  if (containerRef.current) {
    const { scrollLeft } = containerRef.current;
    const offset = direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH;

    containerRef.current.scrollTo({
      left: scrollLeft + offset,
      behavior: "smooth",
    });
  }
};
```