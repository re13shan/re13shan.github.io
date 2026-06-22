# Abdullah Al Bayozid — Research & Unity Portfolio

A responsive static portfolio for research, PhD applications, Unity projects, experience, awards, and certificates. No build tools or paid hosting are required.

## Open locally

Double-click `index.html`, or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Replace the profile photo

1. Add your photo as `assets/profile.jpg`.
2. In `index.html`, replace `assets/profile-placeholder.svg` with `assets/profile.jpg`.
3. Keep the filename lowercase and without spaces.

## Edit publications

Open `js/data.js` and edit the `publications` array. Supported statuses are:

- `Published`
- `Under Review`
- `In Preparation`

Example:

```js
{
  title: "Paper title",
  authors: "Author One, Abdullah Al Bayozid",
  venue: "Conference or journal",
  date: "2026",
  status: "Under Review",
  type: "Conference Paper",
  summary: "One-sentence contribution.",
  paperUrl: "https://doi.org/...",
  codeUrl: ""
}
```

Empty links are hidden automatically.

## Add project GitHub, Google Drive screenshots, videos, or APK links

Open `js/data.js` and edit the relevant project. You do not need to upload project screenshots or videos into the website folder.

Before copying a Google Drive link:

1. Right-click the image or video in Google Drive.
2. Select **Share**.
3. Under **General access**, select **Anyone with the link**.
4. Keep the role as **Viewer**.
5. Copy the link.

Then paste the normal Google Drive share link directly into the project data:

```js
{
  title: "Project name",
  category: "Unity",
  date: "June 2026",
  summary: "Project description.",
  highlights: ["Feature one", "Feature two"],
  technologies: ["Unity", "C#", "Android"],

  githubUrl: "https://github.com/username/repository",
  githubUrls: [],

  // Main screenshot shown on the project card
  imageUrl: "https://drive.google.com/file/d/IMAGE_FILE_ID/view?usp=sharing",

  // Main gameplay video shown in the project details window
  videoUrl: "https://drive.google.com/file/d/VIDEO_FILE_ID/view?usp=sharing",

  releaseUrl: "https://github.com/username/repository/releases/latest",
  demoUrl: "",

  // Optional additional Google Drive screenshots or videos
  media: [
    {
      type: "image",
      url: "https://drive.google.com/file/d/SECOND_IMAGE_FILE_ID/view?usp=sharing",
      caption: "Gameplay screenshot"
    },
    {
      type: "video",
      url: "https://drive.google.com/file/d/SECOND_VIDEO_FILE_ID/view?usp=sharing",
      caption: "Additional gameplay video"
    }
  ]
}
```

The website automatically converts public Google Drive image links into displayable screenshots and Google Drive video links into embedded video previews. YouTube links continue to work as well.

For separate frontend and backend repositories, use:

```js
githubUrls: [
  { label: "Frontend", url: "https://github.com/..." },
  { label: "Backend", url: "https://github.com/..." }
]
```

## Add certificate links

You may paste a public Google Drive share link directly into the relevant achievement. Set the file to **Anyone with the link → Viewer** first:

```js
{
  title: "National High School Programming Contest",
  detail: "1st Prize — 2016",
  certificateUrl: "https://drive.google.com/file/d/CERTIFICATE_FILE_ID/view?usp=sharing"
}
```

A **View certificate** link appears automatically and opens the certificate in Google Drive.

## Publish with GitHub Pages

1. Upload every file and folder to the root of a public GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save and open the address GitHub provides.

For `https://re13shan.github.io`, use the repository name `re13shan.github.io`.

## File structure

```text
.
├── index.html
├── css/styles.css
├── js/app.js
├── js/data.js
└── assets/
    ├── Abdullah_Al_Bayozid_CV.pdf
    ├── profile-placeholder.svg
    ├── projects/
    └── certificates/
```
