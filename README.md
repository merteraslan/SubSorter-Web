# YouTube Subscription Manager

A Chrome extension that enhances your YouTube subscription feed with powerful filtering and organization features.

## Features

### Video Filtering
- **Hide Shorts**: Remove YouTube Shorts from your subscription feed
- **Filter Streams**: Hide previously streamed videos
- **Hide Live Videos**: Remove currently live broadcasts
- **Hide Premieres**: Filter out scheduled video premieres

### Creator Video Bundling
- **Smart Grouping**: Automatically bundle multiple videos from the same creator
- **Time-Based Options**: Choose to bundle videos from the last 24 hours, 7 days, or 30 days
- **Interactive UI**: Click to expand and view all bundled videos in a modal

## How It Works

The extension works by modifying YouTube's subscription feed page. It:

1. Injects custom CSS styling to match YouTube's design language
2. Uses a MutationObserver to detect when new videos load
3. Processes videos according to your settings
4. Adds a settings button next to YouTube's "Manage" button

## Installation

1. Download and unzip the extension files
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension folder
5. The extension will automatically activate when you visit your YouTube subscription feed

## Settings Management

There are two ways to configure the extension:

### In-page Settings Modal
- Click the "Settings" button on the subscription page
- Adjust filters and bundling options without leaving YouTube

### Extension Options Page
- Access through Chrome's extension management
- Same settings as the in-page modal

## Technical Details

- **Video Detection**: Works with both grid and list view layouts
- **Smart Bundling**: Identifies videos from the same creator within selected timeframes
- **Adaptive UI**: Modal for viewing bundled videos adapts to YouTube's dark/light themes
- **Performance**: Uses debouncing to avoid excessive processing when scrolling

## File Structure

- **manifest.json**: Chrome extension configuration
- **content.js**: Entry point that initializes the extension
- **settingsManager.js**: Handles loading/saving user preferences
- **videoFilters.js**: Logic for detecting and filtering video types
- **bundling.js**: Groups videos from the same creator
- **observerManager.js**: Watches for page changes to apply filters
- **uiComponents.js**: Creates UI elements and styling

## Permissions

The extension requires:
- `storage`: To save your preferences
- `activeTab`: To interact with the YouTube page
- `https://www.youtube.com/*`: To operate on YouTube's website

## License

[MIT License](LICENSE)

## Support

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.
