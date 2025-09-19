# YouTube Clone -

## Objective:
A fully functional YouTube clone built with Next.js, TypeScript and TailwindCSS.

## Tech Stack:
- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js with Google OAuth

## Features:
- Video Player (watch videos with progress tracking (resets on clicking Home button)).
- Shorts Player (9:16 aspect ratio with autoplay).
- Downloads Page (save & manage downloaded videos).
- Subscriptions Page (subscribe/unsubscribe to channels).
- Search Bar (filter videos by title).

## Project Structure:
```
YouTube-Clone/
│── src/
│   ├── auth/                # NextAuth config & authentication logic
│   │    ├── [...nextauth].ts
│
│   ├── data/                # Static data & type definitions
│   │    ├── video.ts        # Video type + dummy data
│   │    ├── shorts.ts       # Shorts type + dummy data
│
│   ├── components/          # Reusable React components
│   │    ├── Appbar.tsx          # Top navigation bar
│   │    ├── Searchbar.tsx       # Search input & handling
│   │    ├── SidePane.tsx        # Sidebar navigation
│   │    ├── VideoCard.tsx       # Single video card for home view
│   │    ├── VideoCardS.tsx      # Single video card for watch page view
│   │    ├── VideoGrid.tsx       # Grid layout for videos in home page
│   │    ├── VideoList.tsx       # List layout for videos in watch page
│
│   ├── pages/               # Next.js pages (frontend routes)
│   │    ├── shorts/             # Shorts related pages
│   │    │    ├── index.tsx      # Shorts feed
│   │    │    ├── [id].tsx       # Watch a single short
│   │
│   │    ├── watch/              # Watch page for videos
│   │    │    ├── [id].tsx
│   │
│   │    ├── downloads.tsx       # User downloads page
│   │    ├── subscriptions.tsx   # User subscriptions page
│   │    ├── index.tsx           # Home page
│   │
│   │    ├── _app.tsx            # Custom app wrapper
│
│── public/                  # Static assets (logos, icons, thumbnails)
│
│── README.md
```

## Installation & Usage:
### 1) Clone the repository:
```sh
git clone https://github.com/Ca853-V1/youtube-clone.git
npm install  # Install dependencies
```

### 2) Frontend Setup:
```sh
cd youtube-clone
npm run dev  # Start frontend development server
```

### 3) Environment Variables:
Create a `.env.local` file in the root:
```sh
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
```

## Future Scope:
1. **Integrate YouTube Data API**
   * Fetch real videos, thumbnails, titles, views, and channels instead of using dummy `VIDEOS` data.
   * Sync watch progress (so that it looks more like real youtube).
2. **Video Upload & Hosting**
   * Let users upload their own videos (using AWS S3 or Firebase for storage).
   * Add a backend to process and store uploaded video metadata.
3. **Engagement System**
   * Allow users to add comments under videos/shorts and like/dislike them.
   * Infinite scrolling for shorts feed.
