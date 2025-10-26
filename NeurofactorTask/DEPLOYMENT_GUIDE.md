# Deployment Guide - Cafe South Indian

This guide explains how to deploy your South Indian restaurant website.

## 🚀 Quick Deployment Options

### Option 1: Replit (Easiest - Original Setup)

If deploying to Replit:

1. **Push to Replit**
   - Already configured for automatic deployment
   - Application auto-deploys with each commit
   - Access via provided `.replit.app` domain

2. **No Additional Steps Required**
   - Replit handles build and deployment automatically

---

### Option 2: Build and Deploy Locally/Anywhere

#### Step 1: Build the Production Bundle

```bash
npm run build
```

This command will:
- Build the Vite frontend to `dist/public/`
- Bundle the Express server to `dist/index.js`
- Create optimized production files

#### Step 2: Run the Production Server

```bash
npm run start
```

The server will start on port 3000 (or PORT environment variable if set).

---

### Option 3: Deploy to Popular Platforms

#### **Vercel** (Recommended for Easy Deployment)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** - Vercel will detect your build setup

4. **Access your site** at the provided `.vercel.app` URL

**Note**: For Vercel, you may need to create a `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/node" },
    { "src": "dist/public/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/server/index.ts" },
    { "src": "/(.*)", "dest": "/dist/public/$1" }
  ]
}
```

---

#### **Netlify**

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod --dir=dist/public
   ```

**Note**: Netlify works best as a static frontend. You'll need a separate backend API deployment.

---

#### **Heroku**

1. **Create `Procfile`**:
   ```
   web: node dist/index.js
   ```

2. **Login to Heroku**:
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   git add .
   git commit -m "Production build"
   git push heroku main
   ```

---

#### **Railway**

1. **Connect your GitHub repo** to Railway
2. **Railway auto-detects** the build process
3. **Add environment variables** if needed:
   - `NODE_ENV=production`
   - `PORT` (auto-set by Railway)

---

#### **Render**

1. **Create a new Web Service** on Render
2. **Connect your repository**
3. **Build command**: `npm run build`
4. **Start command**: `npm start`
5. **Deploy!**

---

### Option 4: Traditional VPS (AWS EC2, DigitalOcean, etc.)

1. **SSH into your server**

2. **Clone your repository**:
   ```bash
   git clone <your-repo-url>
   cd NeurofactorTask
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Build the project**:
   ```bash
   npm run build
   ```

5. **Install PM2** (for process management):
   ```bash
   npm install -g pm2
   ```

6. **Start the application**:
   ```bash
   pm2 start dist/index.js --name cafe-south-indian
   ```

7. **Save PM2 configuration**:
   ```bash
   pm2 save
   pm2 startup
   ```

8. **Set up nginx** (optional, for reverse proxy):
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

---

## 🔧 Environment Variables

Set these in your deployment platform:

- `NODE_ENV=production` (auto-set by most platforms)
- `PORT=3000` (your platform may auto-assign this)

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test locally with `npm run start`
- [ ] Verify all images load correctly (South Indian food images)
- [ ] Check API endpoints work (`/api/menu`, `/api/reservations`)
- [ ] Test reservation form submission
- [ ] Verify mobile responsiveness
- [ ] Test on different browsers

---

## 📦 What Gets Deployed

### Built Files:
- `dist/public/` - Static frontend assets
- `dist/index.js` - Production server bundle
- All optimizations applied automatically

### Runtime:
- Express.js server
- Static file serving
- API endpoints for menu and reservations

---

## 🎯 Recommended Platforms for This Project

1. **Vercel** - Best for JavaScript projects, easy setup
2. **Render** - Great for full-stack apps, free tier available
3. **Railway** - Modern, simple deployment
4. **Heroku** - Traditional but reliable (paid plans available)

---

## 💡 Tips for Production

1. **Database**: Current setup uses in-memory storage. For production:
   - Add PostgreSQL, MySQL, or MongoDB
   - Update `server/storage.ts` with real database calls

2. **Environment Variables**: Add a `.env` file for:
   - Database credentials
   - API keys
   - Secret keys

3. **HTTPS**: Most platforms provide SSL certificates automatically

4. **CDN**: Consider adding a CDN for faster image loading globally

---

## 🐛 Troubleshooting

### Build fails?
```bash
npm run check  # Check TypeScript errors
npm run build  # Try building again
```

### Port conflicts?
```bash
# Set a different port
PORT=8080 npm start
```

### Images not loading?
- Ensure all image URLs are accessible
- Check CORS settings on image hosting
- Verify image URLs are HTTPS

---

## 📊 Current Status

✅ **Ready for Deployment**:
- Production build working
- All South Indian images configured
- Server optimized for production
- All features implemented

Access your live site after deployment at the provided URL!

