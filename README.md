# TheCloudReference website

The static website for www.thecloudreference.com, hosted for free on GitHub Pages.

## What's in this folder

| Path | Page |
|---|---|
| `index.html` | Home |
| `cloud/`, `outsourcing/`, `data-and-analytics/` | Service pages |
| `careers/` | Job list, with one folder per job post |
| `contact-us/` | Contact form |
| `apply/` | Job application form |
| `assets/style.css` | Colors, fonts and layout for every page |
| `assets/site.js` | Mobile menu and forms (the form key goes here) |
| `assets/img/` | Images |
| `CNAME` | Tells GitHub Pages to use your domain. Don't delete it. |

To change text, open the page's `index.html`, edit the text between the tags, and save.

## Going live: step by step

### 1. Put the site on GitHub
1. Sign up at https://github.com (free).
2. Click **New repository**. Name it `thecloudreference-website`, make it **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in **everything inside this folder** (not the folder itself), then click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, set Branch to **main** and **/(root)**, and click **Save**.
5. After about a minute, the site is live at `https://<your-username>.github.io/thecloudreference-website/`. Some styling may look broken at that address; that's expected, and it's fixed once your own domain is connected.

### 2. Connect the contact and application forms (free)
1. Go to https://web3forms.com, enter the email address that should receive messages, and click **Create Access Key**.
2. The key arrives by email. Open `assets/site.js` and paste it between the quotes:
   `const WEB3FORMS_ACCESS_KEY = "paste-key-here";`
3. Upload the changed `assets/site.js` to GitHub (it replaces the old one).

### 3. Point the domain to GitHub (GoDaddy)
In GoDaddy, go to **My Products → thecloudreference.com → DNS**:
1. **Delete** the existing `A` record for `@` (currently `99.83.181.15`, which is Umso) and the existing `CNAME` record for `www`.
2. **Add** four `A` records with name `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. **Add** a `CNAME` record with name `www` and value `<your-username>.github.io`
4. Leave all `MX` and `TXT` records as they are. They handle your email.

Then, in GitHub under **Settings → Pages → Custom domain**, enter `www.thecloudreference.com` and click **Save**. Once the check passes (anywhere from a few minutes to a few hours), tick **Enforce HTTPS**.

### 4. Cancel Umso
Wait until `https://www.thecloudreference.com` shows the new site and a test message sent through the contact form arrives in your inbox. Then cancel the Umso subscription.

## Differences from the Umso version
- **Careers**: all 7 jobs are on a single page (previously split over two).
- **Apply form**: applicants now share a link to their CV or LinkedIn profile, because uploading files needs a paid form plan. Each job post has an "Apply for this position" button that fills in the job title automatically.
- **Spam protection**: the captcha image is replaced by Web3Forms' built-in spam filter.
- Google Analytics (`G-6WPR6Y4HBJ`) is kept, so your statistics continue.
