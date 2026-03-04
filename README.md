# 🤖 AutoBlog — Gemini-Powered Auto Blog

> **One API key. Zero dollars. Blog publishes itself every 6 hours.**

```
GitHub
   ↓
GitHub Actions (cron: every 6 hours)
   ↓
Gemini API → Generate article (text)
   ↓
Gemini API → Generate featured image
   ↓
Save as Markdown file
   ↓
Git commit + push to repo
   ↓
Vercel auto-deploy triggers
   ↓
Blog live ✅
```

## 📌 5 Niches

| # | Niche | Slug |
|---|-------|------|
| 🤖 | AI Tools & Automation | `ai-tools-automation` |
| 💰 | Make Money Online | `make-money-online` |
| 📈 | Digital Marketing | `digital-marketing` |
| ⚡ | Tech Explainers | `tech-explainers` |
| 🚀 | Online Business | `online-business` |

---

## 🚀 Setup (10 minutes)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "🚀 Initial AutoBlog setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/auto-blog.git
git push -u origin main
```

### 2. Get FREE Gemini API Key

1. Go to → **https://aistudio.google.com/app/apikey**
2. Click **"Create API key"**
3. Copy the key

Free tier: **1,500 requests/day** — enough for 4 blogs/day = 120/month

### 3. Add Secret to GitHub

1. Your repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Name: `GEMINI_API_KEY` | Value: your key

### 4. Deploy to Vercel

1. Go to → **https://vercel.com**
2. **"Add New Project"** → Import your GitHub repo
3. Click **"Deploy"**
4. Done — Vercel auto-deploys on every git push ✅

### 5. Enable GitHub Actions

1. Your repo → **Actions** tab
2. Click **"I understand my workflows, go ahead and enable them"**
3. Click **"Auto Blog Generator"** → **"Enable workflow"**

**That's it. Every 6 hours, a new blog posts automatically.**

---

## 🧪 Test Locally

```bash
cp .env.example .env
# Edit .env → add your real GEMINI_API_KEY

npm install
npm run generate    # generates one blog post now
npm run dev         # preview the site at localhost:3000
```

---

## ⏰ Schedule

The workflow runs at: **00:00, 06:00, 12:00, 18:00 UTC**

To change the frequency, edit `.github/workflows/auto-blog.yml`:
```yaml
- cron: '0 0,6,12,18 * * *'   # every 6 hours (default)
- cron: '0 */3 * * *'          # every 3 hours
- cron: '0 8 * * *'            # once daily at 8am UTC
```

---

## 💰 Cost

| Service | Limit | Cost |
|---------|-------|------|
| Gemini API | 1,500 req/day free | **₹0** |
| GitHub Actions | 2,000 min/month free | **₹0** |
| Vercel Hosting | 100GB bandwidth free | **₹0** |
| **Total** | | **₹0/month** |

---

## 📁 Structure

```
auto-blog/
├── .github/workflows/auto-blog.yml   ← Runs every 6 hours
├── scripts/generate-blog.js          ← Gemini pipeline
├── content/blogs/                    ← Auto-generated posts
│   ├── ai-tools-automation/
│   ├── make-money-online/
│   ├── digital-marketing/
│   ├── tech-explainers/
│   └── online-business/
├── app/                              ← Next.js website
├── components/                       ← Header, Footer, BlogCard
├── lib/niches.js                     ← Niche config
└── public/images/                    ← Auto-generated images
```

---

Built with 🤖 Gemini AI + ⚡ GitHub Actions + 🚀 Vercel
