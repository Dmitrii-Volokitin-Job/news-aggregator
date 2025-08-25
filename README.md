# News Aggregator

A modern, client-side news aggregator that fetches and displays articles from Ukrainian news sources. Built with pure JavaScript and runs entirely in your browser.

## Features

- 📰 **Multi-source aggregation** - Fetches news from Interfax Ukraine and Ukrinform
- 🌓 **Dark/Light theme** - Automatic detection of system preference with manual toggle
- 🔍 **Advanced filtering** - Search, date range, source, and read/unread status filters
- 💾 **Local storage** - Saves your preferences and read articles
- 🔄 **Auto-refresh** - Configurable interval for automatic updates
- 📱 **Responsive design** - Works on all devices
- 📊 **Article details** - Click to view full article content in a modal
- ➕ **Dynamic sources** - Add, edit, or remove news sources

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```

3. **Open in browser:**
   ```
   http://localhost:8080
   ```

4. **Fetch news:**
   Click the "Refresh" button to load articles

## How It Works

The aggregator uses a local Node.js proxy server to bypass CORS restrictions and fetch content from news websites. All processing happens in your browser using JavaScript.

### Architecture

- **Frontend**: Single HTML file with embedded CSS and JavaScript
- **Backend**: Express.js proxy server for CORS handling
- **Storage**: Browser localStorage for settings and read status
- **No database required** - Everything runs locally

## Adding New Sources

1. Click "Manage Sources" button
2. Fill in the source details:
   - Name: Display name for the source
   - URL: The news page URL
   - CSS Selectors for article elements
3. Click "Test" to verify it works
4. Click "Add Source" to save

## Configuration

### Auto-refresh intervals
- Disabled
- 5 minutes
- 15 minutes (default)
- 30 minutes
- 1 hour

### Theme options
- Automatic (follows system preference)
- Light mode
- Dark mode

## Technologies Used

- HTML5 / CSS3 / JavaScript (ES6+)
- Bootstrap 5 for UI components
- Node.js + Express for proxy server
- localStorage for data persistence

## Browser Support

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT

## Author

Created with Claude Code assistance