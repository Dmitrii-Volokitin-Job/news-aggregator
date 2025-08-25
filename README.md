# News Aggregator

A modern, real-time news aggregator application that fetches and displays news from Ukrainian news sources with a clean, responsive interface.

## Features

- 📰 **Multi-source aggregation** - Fetches news from Interfax Ukraine and Ukrinform
- 🌓 **Dark/Light theme** - Automatic detection of system preference with manual toggle
- 🔍 **Advanced filtering** - Search, date range, source, and read/unread status filters
- 💾 **Local storage** - Saves your preferences and read articles
- 🔄 **Auto-refresh** - Configurable interval for automatic updates
- 📱 **Responsive design** - Works on all devices
- 📊 **Article details** - Click to view full article content in a modal
- ➕ **Dynamic sources** - Add, edit, or remove news sources
- 🧹 **Clean Storage** - Reset all data with one click

## Prerequisites

Before installing, ensure you have:
- **Node.js** (version 14.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for cloning repository) - [Download](https://git-scm.com/)

### Check Prerequisites

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## Installation Instructions

### Option 1: Clone from Git Repository

```bash
# Clone the repository (replace with your actual repository URL)
git clone https://github.com/yourusername/news-aggregator.git

# Navigate to project directory
cd news-aggregator

# Install dependencies
npm install

# Start the server
npm start
```

### Option 2: Manual Setup (If no Git repository exists)

1. **Create project directory:**
   ```bash
   mkdir news-aggregator
   cd news-aggregator
   ```

2. **Copy all project files** to this directory:
   - `index.html`
   - `server.js`
   - `package.json`
   - `README.md`

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

### Option 3: Initialize Git Repository (For future use)

```bash
# In your project directory
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit of news aggregator"

# Add remote repository (when you have one)
git remote add origin https://github.com/yourusername/news-aggregator.git

# Push to remote
git push -u origin main
```

## Platform-Specific Instructions

### Windows

1. **Install Node.js:**
   - Download from [nodejs.org](https://nodejs.org/)
   - Run the installer (.msi file)
   - Restart command prompt after installation

2. **Install Git:**
   - Download from [git-scm.com](https://git-scm.com/download/win)
   - Run the installer
   - Use default settings

3. **Clone and run:**
   ```cmd
   # Open Command Prompt or PowerShell
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
   npm install
   npm start
   ```

### macOS

1. **Install Homebrew (if not installed):**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js and Git:**
   ```bash
   brew install node
   brew install git
   ```

3. **Clone and run:**
   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
   npm install
   npm start
   ```

### Linux (Ubuntu/Debian)

1. **Install Node.js and Git:**
   ```bash
   sudo apt update
   sudo apt install nodejs npm git
   ```

2. **Clone and run:**
   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
   npm install
   npm start
   ```

## Quick Start

After installation:

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open browser and navigate to:**
   ```
   http://localhost:8080
   ```

3. **Fetch news:**
   Click the "Refresh" button to load articles

## Usage Guide

### Main Interface

- **Navigation Bar**: Contains Refresh button, theme toggle, and settings
- **Left Sidebar**: Search, filters, source management, and actions
- **Main Area**: Displays aggregated news articles

### Key Features

#### 1. Fetching Articles
- Click the **Refresh** button to fetch latest articles
- Articles are fetched from all enabled sources
- Loading spinner shows during fetch operation

#### 2. Filtering Articles
- **Search**: Type keywords to search titles and summaries
- **Date Range**: Select start and end dates
- **Status Filter**: Show All/Unread/Read articles
- **Source Filter**: Toggle individual news sources

#### 3. Managing Sources
Click **"Manage Sources"** to:
- View all configured sources
- Add new sources with custom selectors
- Test sources before adding
- Edit or delete existing sources
- Export/Import source configurations

#### 4. Article Actions
- **Click article** - View full content in modal
- **"Read" button** - Open article details
- **"Original" button** - Open source website
- **Check button** - Mark as read/unread

#### 5. Bulk Actions
- **Mark All Read** - Mark all articles as read
- **Clear Articles** - Remove all articles (keeps sources)
- **Clean Storage** - Reset entire application to defaults

### Settings Configuration

Access via the gear icon:
- **Auto-Refresh Interval**: Off, 5min, 15min, 30min, 1hr
- **CORS Proxy**: Choose proxy service
- **Articles Per Page**: 10-200 articles
- **Show Summaries**: Toggle article previews

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 8080
# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :8080
kill -9 <PID>

# Or change port in server.js:
const PORT = 3000;  # Change from 8080
```

#### Articles Not Loading
1. Check server is running (console shows "Server running...")
2. Open browser Developer Tools (F12) for errors
3. Test sources using "Test" button
4. Try different CORS proxy in Settings

#### CORS Errors
- Ensure you're accessing via `http://localhost:8080`
- Not `file:///` protocol
- Use the CORS proxy settings

#### Storage Issues
- Click "Clean Storage" to reset
- Or manually clear in Developer Tools:
  - F12 → Application → Local Storage → Clear

#### Node.js Installation Issues

**Windows:**
- Run Command Prompt as Administrator
- If npm commands fail, restart after Node.js installation
- Add Node.js to PATH if needed

**macOS:**
- Use Homebrew for easier installation
- May need to run: `sudo npm install` for permissions

**Linux:**
- Update package manager first: `sudo apt update`
- Use `sudo` for global installations

### File Structure

```
TestProject/
├── index.html        # Main application (UI + logic)
├── server.js         # Express CORS proxy server
├── package.json      # Node dependencies
├── package-lock.json # Dependency lock file
├── README.md        # This documentation
└── node_modules/    # Installed packages (auto-generated)
```

### Advanced Configuration

#### Running on Different Port
Edit `server.js`:
```javascript
const PORT = 3000; // Change from 8080
```

#### Using PM2 for Production
```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start server.js --name news-aggregator

# Auto-restart on crash
pm2 startup
pm2 save
```

#### Docker Deployment
Create `Dockerfile`:
```dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t news-aggregator .
docker run -p 8080:8080 news-aggregator
```

## How It Works

The aggregator uses a local Node.js proxy server to bypass CORS restrictions and fetch content from news websites. All processing happens in your browser using JavaScript.

### Architecture

- **Frontend**: Single HTML file with embedded CSS and JavaScript
- **Backend**: Express.js proxy server for CORS handling
- **Storage**: Browser localStorage for settings and read status
- **No database required** - Everything runs locally

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

## Security Notes

- CORS proxy should be secured in production
- All data stored locally in browser
- No external tracking or analytics
- Consider HTTPS for production deployment

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create Pull Request

## License

MIT License - Feel free to use and modify

## Support

For issues or questions:
- Check Troubleshooting section above
- Open browser console (F12) for detailed errors
- Create issue on GitHub repository

---

**Version**: 1.0.0  
**Last Updated**: August 2024