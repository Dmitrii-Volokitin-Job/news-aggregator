# News Aggregator

A real-time news aggregator with a built-in **CORS proxy** for fetching RSS feeds from multiple sources without browser restrictions.
Comes with an advanced filter UI, dark/light theme, and auto-refresh — all in a single HTML file backed by a lightweight Node.js server.

## Features

- Multi-source RSS aggregation (Interfax Ukraine, Ukrinform, and more)
- Keyword search, date range filter, source filter, read/unread tracking
- Configurable auto-refresh interval
- Article detail modal with full content
- Dynamic source management via settings panel
- Dark / Light theme toggle
- Alternative Python proxy (`server.py`) for environments without Node.js

## Quick Start

**Node.js proxy (recommended):**
```bash
npm install
npm start
# Server runs at http://localhost:8080
```

**Python proxy (alternative):**
```bash
python server.py
# Server runs at http://localhost:8000
# Open http://localhost:8000/index.html in your browser
```

## Tech Stack

- Node.js · Express.js (CORS proxy)
- Python (alternative proxy, stdlib only)
- HTML5 · Bootstrap 5 · Vanilla JavaScript
- localStorage (read/unread state, preferences)

## License

MIT
