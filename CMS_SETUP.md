# CMS Setup Instructions

Your KLECHDY website now has a simple CMS integrated! Here's how to set it up:

## 1. Enable Netlify Identity

1. Go to your Netlify dashboard
2. Navigate to your site settings
3. Go to **Identity** in the sidebar
4. Click **Enable Identity**
5. Under **Registration preferences**, select "Invite only" (recommended)
6. Under **External providers**, you can optionally enable Google/GitHub login

## 2. Enable Git Gateway

1. Still in Identity settings
2. Scroll down to **Services**
3. Click **Enable Git Gateway**

## 3. Invite Yourself as Admin

1. In Identity tab, click **Invite users**
2. Enter your email address
3. Check your email and accept the invitation
4. Set your password

## 4. Access Your CMS

1. Visit `https://yoursite.netlify.app/admin/`
2. Log in with your credentials
3. Start managing your content!

## What You Can Manage

### Site Settings
- Site title and tagline
- Host name  
- Logo image
- Platform links (Spotify, Apple Podcasts, etc.)

### Episodes
- Create new episodes
- Add episode descriptions
- Set audio URLs
- Mark episodes as featured
- Full markdown content for episode pages

### Content
- About page content
- General site descriptions

## How It Works

- Content is stored in YAML and Markdown files in your repository
- When you edit through the CMS, it commits changes to your GitHub repo
- Netlify automatically rebuilds and deploys your site
- Your site loads content dynamically from the data files

## Files Created

```
admin/
  ├── index.html          # CMS admin interface
  └── config.yml          # CMS configuration

_data/
  ├── site.yml           # Site settings
  ├── platforms.yml      # Platform links
  └── about.yml          # About content

_episodes/
  └── *.md               # Episode files

js/
  └── cms-loader.js      # JavaScript to load CMS content
```

## Benefits

✅ **Simple**: No complex build process  
✅ **Git-based**: All content versioned in your repository  
✅ **Netlify-integrated**: Works seamlessly with your current hosting  
✅ **User-friendly**: Non-technical editors can manage content  
✅ **Fast**: Static site performance with dynamic content management

## Next Steps

1. Complete the setup steps above
2. Log into `/admin/` and customize your content
3. Create your first episode
4. Share admin access with team members if needed

## Troubleshooting

- **Can't access /admin/**: Make sure Netlify Identity is enabled
- **Can't save changes**: Verify Git Gateway is enabled  
- **Content not updating**: Check that files are being created in your repo

---

*Happy content managing! 🎙️* 