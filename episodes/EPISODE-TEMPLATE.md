# How to Add a New Episode

Each week, follow these steps to add a new episode:

## Step 1: Create the Data File

Copy and rename `episode-01-data.js` as a starting point. For example:
- Episode 2: `episode-02-data.js`
- Episode 3: `episode-03-data.js`

The data file structure:

```javascript
const episodeData = {
    "AL": {
        name: "Alabama",
        systemName: "Name of the system/topic for this state",
        description: "A paragraph explaining what this episode covers for Alabama.",
        steps: [
            "Step 1 instruction",
            "Step 2 instruction",
            "Step 3 instruction"
        ],
        links: [
            { name: "Link Display Name", url: "https://official-url.gov/" },
            { name: "Another Link", url: "https://another-url.gov/" }
        ]
    },
    // ... repeat for all 50 states + DC
};
```

## Step 2: Create the Episode HTML Page

Copy `episode-01.html` and rename it (e.g., `episode-02.html`). Update:
1. The `<title>` tag
2. The episode number in `<p class="subtitle">`
3. The episode title in `<h2>`
4. The intro paragraphs `<p>` describing the episode topic
5. The `<script src="episode-02-data.js">` to point to your new data file

## Step 3: Add to the Episodes Index

Open `index.html` (in the episodes folder) and add a new card:

```html
<a href="episode-02.html" class="episode-card">
    <div class="episode-number">Episode 2</div>
    <h3>Your Episode Title</h3>
    <p>Brief description of what this episode covers.</p>
</a>
```

## That's it!

The episode-app.js and us-map.js are shared across all episodes.
No other files need to change.
