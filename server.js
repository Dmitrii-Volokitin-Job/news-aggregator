const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files
app.use(express.static('.'));

// CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Proxy endpoint
app.get('/fetch', async (req, res) => {
    const url = req.query.url;
    
    console.log('=================================');
    console.log('[PROXY REQUEST]', new Date().toISOString());
    console.log('URL requested:', url);
    
    if (!url) {
        console.error('[ERROR] No URL parameter provided');
        return res.status(400).json({ error: 'URL parameter is required' });
    }
    
    try {
        console.log('[FETCHING] Starting fetch...');
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        console.log('[RESPONSE] Status:', response.status);
        console.log('[RESPONSE] Status Text:', response.statusText);
        console.log('[RESPONSE] Content-Type:', response.headers.get('content-type'));
        
        const text = await response.text();
        console.log('[RESPONSE] Content length:', text.length, 'characters');
        console.log('[SUCCESS] Sending response to client');
        console.log('=================================\n');
        
        res.send(text);
    } catch (error) {
        console.error('[FETCH ERROR]', error.message);
        console.error('[STACK TRACE]', error.stack);
        console.log('=================================\n');
        res.status(500).json({ error: error.message });
    }
});

// Main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});