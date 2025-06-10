const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pdfParse = require('pdf-parse');
require('dotenv').config();
console.log('Gemini Key:', process.env.GEMINI_API_KEY ? 'Loaded' : 'NOT LOADED');
const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

const upload = multer();

app.post('/analyze', upload.single('resume'), async (req, res) => {
    const { role } = req.body;
    if (!req.file || !role) {
        return res.status(400).json({ error: 'Missing resume or role' });
    }

    let resumeText = '';
    try {
        if (req.file.mimetype === 'application/pdf') {
            const data = await pdfParse(req.file.buffer);
            resumeText = data.text;
        } else {
            resumeText = req.file.buffer.toString('utf-8');
        }
    } catch (err) {
        return res.status(500).json({ error: 'Failed to extract text from resume', details: err.message });
    }

    const prompt = `Analyze the following resume for the role of ${role}. Provide:
1. ATS score out of 100
2. 3 Strengths
3. 3 Areas for Improvement

Resume:
${resumeText}`;

    try {
        const fetch = (await import('node-fetch')).default;
        const geminiRes = await fetch(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                }),
            }
        );

        const data = await geminiRes.json();
        if (
            data.candidates &&
            data.candidates[0] &&
            data.candidates[0].content &&
            data.candidates[0].content.parts
        ) {
            res.json({ result: data.candidates[0].content.parts.map(p => p.text).join('\n') });
        } else {
            console.error('Gemini API error:', data);
            res.status(500).json({ error: 'Gemini API error', details: data });
        }
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));