# Solutions 360 — Full Website

A complete Node.js + Express website for Solutions 360 study abroad consultancy.

## Project Structure

```
solutions360/
├── server.js              # Express backend
├── package.json
├── .env.example           # Copy to .env and fill in your values
├── public/
│   ├── index.html         # Homepage
│   ├── about.html         # About page
│   ├── countries.html     # Countries page
│   ├── courses.html       # Courses page
│   ├── success-stories.html
│   ├── contact.html       # Contact + inquiry form
│   ├── css/
│   │   └── style.css      # All styles
│   └── js/
│       ├── components.js  # Shared nav + footer
│       └── app.js         # Scroll reveal + form utils
```

## Pages
- **/** — Homepage with hero, services, countries, testimonials
- **/about** — About, team, values
- **/countries** — All destination countries with details
- **/courses** — Medicine, Business, Engineering, Law
- **/success-stories** — Student testimonials
- **/contact** — Inquiry form + FAQ
- **/whatsapp** — Redirects to WhatsApp with pre-filled message
- **/api/inquiry** — POST endpoint, sends emails + confirmation

## Quick Start

### 1. Install dependencies
```bash
cd solutions360
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` with your details:
```
PORT=3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=inquiries@solutions360.com
WHATSAPP_NUMBER=923445330210
```

### 3. Gmail App Password Setup
1. Go to your Google Account → Security
2. Enable 2-Step Verification
3. Search "App Passwords" → Create one for "Mail"
4. Use that 16-character password as EMAIL_PASS

### 4. Run the server
```bash
# Production
npm start

# Development (auto-restart)
npm run dev
```

Visit: http://localhost:3000

## Deployment

### Option A: VPS (DigitalOcean, Linode, etc.)
```bash
# Install PM2 for process management
npm install -g pm2
pm2 start server.js --name solutions360
pm2 startup
pm2 save
```

### Option B: Railway / Render (free hosting)
1. Push to GitHub
2. Connect repo to Railway or Render
3. Add environment variables in their dashboard
4. Deploy — they handle the rest

### Option C: cPanel Shared Hosting
1. Upload files via FTP
2. Create a Node.js app in cPanel
3. Set startup file to `server.js`
4. Add environment variables in cPanel

## Features
- ✅ Full responsive design (mobile + desktop)
- ✅ Sticky navbar with scroll effect
- ✅ Scroll-reveal animations on all sections
- ✅ WhatsApp floating button
- ✅ Inquiry form with email notifications
- ✅ Student receives confirmation email
- ✅ Admin receives formatted inquiry email with WhatsApp reply button
- ✅ Rate limiting (5 submissions per 15 min per IP)
- ✅ Mobile hamburger menu
- ✅ FAQ accordion on contact page
- ✅ Brand colors: #c8a36f (gold) + #1b545d (teal)

## Customization
- Change contact details: edit `public/js/components.js`
- Change colors: edit CSS variables in `public/css/style.css`
- Add/edit countries: edit `public/countries.html`
- Add team members: edit `public/about.html`
- Change WhatsApp number: update `.env` WHATSAPP_NUMBER
