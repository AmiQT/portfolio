# Google Analytics Setup Guide

## Step 1: Create Account
1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Create account: "Noor Azami Portfolio"
4. Property name: "Portfolio Website"

## Step 2: Get Tracking Code
1. Copy your Measurement ID (G-XXXXXXXXXX)
2. Add to Layout.astro file

## Step 3: Add to Your Website
Replace the commented Google Analytics section in Layout.astro:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Key Metrics to Monitor:
- 📊 **Page Views**: How many times pages are viewed
- 👥 **Users**: Unique visitors to your site
- 📱 **Traffic Sources**: Where visitors come from
- ⏱️ **Session Duration**: How long people stay
- 🎯 **Bounce Rate**: Percentage who leave after one page 