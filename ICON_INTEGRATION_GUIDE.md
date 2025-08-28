# Custom Icon Integration Guide

## Overview
This guide shows you how to integrate your purchased icon pack into the ServicesSection component with easy color customization.

## Option 1: SVG Icons (Recommended - Best Color Control)

### Step 1: Organize Your Icons
Place your SVG files in the `src/assets/icons/` directory:
```
src/assets/icons/
├── data-governance.svg
├── data-modeling.svg
├── zero-trust.svg
├── ai-ml.svg
├── data-retrieval.svg
├── rag.svg
├── architecture.svg
└── business-process.svg
```

### Step 2: Import Icons in Component
Add imports at the top of `ServicesSection.astro`:

```astro
---
// Import your SVG icons
import DataGovernanceIcon from '../assets/icons/data-governance.svg?raw';
import DataModelingIcon from '../assets/icons/data-modeling.svg?raw';
import ZeroTrustIcon from '../assets/icons/zero-trust.svg?raw';
import AiMlIcon from '../assets/icons/ai-ml.svg?raw';
import DataRetrievalIcon from '../assets/icons/data-retrieval.svg?raw';
import RagIcon from '../assets/icons/rag.svg?raw';
import ArchitectureIcon from '../assets/icons/architecture.svg?raw';
import BusinessProcessIcon from '../assets/icons/business-process.svg?raw';

// ... rest of your props
---
```

### Step 3: Use Icons with Color Control
Replace the icon div in each service card:

```astro
<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
  <Fragment set:html={DataGovernanceIcon} class="w-8 h-8 service-icon" />
</div>
```

### Step 4: Customize Colors
The CSS already includes color control:

```css
.service-icon {
  color: #556B2F; /* Olive green - change this to any color */
  transition: color 0.3s ease;
}

.service-card:hover .service-icon {
  color: #6B8E23; /* Hover color */
}
```

## Option 2: Icon Font (Easy Implementation)

### Step 1: Add Font CSS
Add your icon font CSS to `src/layouts/Layout.astro`:

```html
<head>
  <!-- Add your icon font CSS here -->
  <link rel="stylesheet" href="/assets/icon-font.css">
</head>
```

### Step 2: Use Icon Classes
Replace the SVG with icon classes:

```astro
<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
  <i class="icon-pack-data-governance service-icon text-3xl"></i>
</div>
```

## Option 3: Image Icons (Limited Color Control)

### Step 1: Place Icons in Public Directory
```
public/assets/icons/
├── data-governance.svg
├── data-modeling.svg
└── ...
```

### Step 2: Use as Images
```astro
<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
  <img src="/assets/icons/data-governance.svg" alt="Data Governance" class="w-8 h-8 service-icon" />
</div>
```

## Color Customization

### Quick Color Changes
To change all icon colors at once, modify the CSS in the component:

```css
.service-icon {
  color: #your-color-here; /* Change this */
}
```

### Individual Icon Colors
To color specific icons differently:

```css
.service-icon.data-governance {
  color: #ff6b6b; /* Red */
}

.service-icon.ai-ml {
  color: #4ecdc4; /* Teal */
}
```

### CSS Variables for Easy Theming
Add CSS variables to your global styles:

```css
:root {
  --icon-primary: #556B2F;
  --icon-hover: #6B8E23;
  --icon-secondary: #D2B48C;
}
```

Then use them in the component:

```css
.service-icon {
  color: var(--icon-primary);
}
```

## File Structure Recommendations

```
src/
├── assets/
│   └── icons/           # SVG icons (Option 1)
├── components/
│   └── ServicesSection.astro
└── layouts/
    └── Layout.astro     # Icon font CSS (Option 2)

public/
└── assets/
    └── icons/           # Image icons (Option 3)
```

## Troubleshooting

### Icons Not Showing
1. Check file paths are correct
2. Ensure SVG files are properly formatted
3. Verify CSS classes are applied

### Colors Not Changing
1. Make sure SVG uses `currentColor` or `fill="currentColor"`
2. Check CSS specificity
3. Verify class names match

### Performance Tips
1. Use SVG sprites for multiple icons
2. Optimize SVG files (remove unnecessary attributes)
3. Consider lazy loading for large icon sets

## Example Implementation

Here's a complete example for one service card:

```astro
<!-- Service 1: Data Governance -->
<div class="service-card bg-[#1a1a1a] p-6 rounded-lg text-center hover:shadow-lg border border-[#556B2F] hover:border-[#6B8E23] transition-all duration-300">
  <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
    <!-- Option 1: SVG -->
    <Fragment set:html={DataGovernanceIcon} class="w-8 h-8 service-icon" />
    
    <!-- Option 2: Icon Font -->
    <!-- <i class="icon-pack-data-governance service-icon text-3xl"></i> -->
    
    <!-- Option 3: Image -->
    <!-- <img src="/assets/icons/data-governance.svg" alt="Data Governance" class="w-8 h-8 service-icon" /> -->
  </div>
  <h3 class="text-lg font-medium text-[#F5F5DC] mb-3">
    Data Governance
  </h3>
  <p class="text-sm text-[#D2B48C] leading-relaxed">
    Policies and frameworks to ensure sharing of data as an enterprise asset...
  </p>
</div>
``` 