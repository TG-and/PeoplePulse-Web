# Image Replacement and Layout Modification Plan

## Project Overview
This plan outlines the complete image replacement and layout modification for the HR system interface, focusing on high-quality, people-centric images and improved visual consistency.

## Current Image Usage

### 1. Hero Section (`/src/sections/Hero.tsx`)
- **Main image**: `/ai-dashboard.jpg` (currently used)
- **Floating cards**: Two animated cards with SVG icons (need to be removed)

### 2. Blog Section (`/src/sections/Blog.tsx`)
- **Blog images**: `/blog-1.jpg`, `/blog-2.jpg`, `/blog-3.jpg`, `/blog-4.jpg`
- **Usage**: Repeated across 8 blog posts

### 3. Other Images
- **Avatars**: `/avatar-1.jpg`, `/avatar-2.jpg`, `/avatar-3.jpg`
- **Legacy**: `/hero-dashboard.jpg` (old hero image)

## Implementation Plan

### Phase 1: Hero Section Modifications

#### 1.1 Replace Main Image
- **File**: `/src/sections/Hero.tsx`
- **Current**: `/ai-dashboard.jpg`
- **New**: Professional photograph showing people interacting with HR system
- **Specifications**:
  - High resolution (minimum 1920x1080px)
  - Professional office setting
  - People actively using HR software
  - Consistent color scheme with existing design

#### 1.2 Remove Floating Cards
- **File**: `/src/sections/Hero.tsx`
- **Action**: Remove both floating badge elements (lines 158-174 and 177-193)
- **Adjustment**: Update layout to maintain visual balance

### Phase 2: Blog Section Image Replacement

#### 2.1 Replace Blog Images
- **File**: `/src/sections/Blog.tsx`
- **Current**: `/blog-1.jpg`, `/blog-2.jpg`, `/blog-3.jpg`, `/blog-4.jpg`
- **New**: 4 distinct professional photographs
- **Specifications**:
  - Each image should feature people in HR-related scenarios
  - Consistent visual style across all blog images
  - High resolution (minimum 800x600px)
  - Contextually relevant to HR topics

### Phase 3: Avatar Image Replacement

#### 3.1 Replace Avatar Images
- **Files**: Various components using avatars
- **Current**: `/avatar-1.jpg`, `/avatar-2.jpg`, `/avatar-3.jpg`
- **New**: Professional headshot photographs
- **Specifications**:
  - High quality professional headshots
  - Diverse representation
  - Consistent style and lighting

### Phase 4: Image Implementation

#### 4.1 Image Acquisition
- Source high-quality, commercially licensed photographs
- Ensure all images feature human subjects
- Verify copyright compliance
- Optimize images for web performance

#### 4.2 Technical Implementation
- Replace image paths in component files
- Update any hardcoded image references
- Ensure responsive behavior across devices
- Test image loading and display

### Phase 5: Quality Assurance

#### 5.1 Visual Consistency Check
- Ensure all images maintain consistent style
- Verify color palette alignment with brand
- Check for proper image sizing and cropping
- Test across different screen resolutions

#### 5.2 Performance Testing
- Optimize image loading times
- Verify responsive behavior
- Test on mobile devices
- Ensure accessibility compliance

## Expected Outcome

- **Hero Section**: Professional, people-centric main image with clean layout (no floating cards)
- **Blog Section**: Visually engaging, people-focused images for all blog posts
- **Avatar Section**: Professional headshots for user representations
- **Overall**: Consistent, high-quality visual experience throughout the interface

## Timeline

1. **Planning**: 1 day
2. **Image Acquisition**: 2-3 days
3. **Implementation**: 1-2 days
4. **Testing**: 1 day
5. **Finalization**: 1 day

## Files to Modify

1. `/src/sections/Hero.tsx` - Replace main image and remove floating cards
2. `/src/sections/Blog.tsx` - Update blog post images
3. Any other components using avatar images
4. `/public` directory - Add new image files
