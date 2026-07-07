// Episode App - Shared interactive map logic for episode pages
// Each episode loads its own data file (episodeData) and this handles the map interaction

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map (us-map.js is loaded from parent directory)
    initializeMap().then(function() {
        setupEpisodeMapInteraction();
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', function() {
        showEpisodeMap();
    });
});

function setupEpisodeMapInteraction() {
    const mapContainer = document.getElementById('map-container');
    const tooltip = createEpisodeTooltip();

    // Event delegation for state clicks
    mapContainer.addEventListener('click', function(e) {
        const target = e.target.closest('[data-state]');
        if (target) {
            const stateAbbr = target.getAttribute('data-state');
            if (episodeData[stateAbbr]) {
                showEpisodeStatePanel(stateAbbr);
            }
        }
    });

    // Tooltip on hover
    mapContainer.addEventListener('mousemove', function(e) {
        const target = e.target.closest('[data-state]');
        if (target) {
            const stateAbbr = target.getAttribute('data-state');
            const data = episodeData[stateAbbr];
            if (data) {
                tooltip.textContent = data.name;
                tooltip.style.display = 'block';
                tooltip.style.left = (e.clientX + 15) + 'px';
                tooltip.style.top = (e.clientY - 10) + 'px';
            }
        } else {
            tooltip.style.display = 'none';
        }
    });

    mapContainer.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
}

function createEpisodeTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'state-tooltip';
    document.body.appendChild(tooltip);
    return tooltip;
}

function showEpisodeStatePanel(stateAbbr) {
    const data = episodeData[stateAbbr];
    if (!data) return;

    // Hide map, show panel
    document.getElementById('map-section').style.display = 'none';
    const panel = document.getElementById('state-panel');
    panel.classList.add('active');

    // Set state name
    document.getElementById('state-name').textContent = data.name;

    // Build the state content
    const contentDiv = document.getElementById('state-content');
    contentDiv.innerHTML = '';

    // System name badge
    const systemBadge = document.createElement('div');
    systemBadge.className = 'resource-card';
    systemBadge.innerHTML = '<h3><span class="icon">\u{1F4BB}</span> System Name: ' + data.systemName + '</h3>';
    contentDiv.appendChild(systemBadge);

    // Description section
    const infoSection = document.createElement('div');
    infoSection.className = 'state-info-section';

    const desc = document.createElement('div');
    desc.className = 'info-description';
    desc.textContent = data.description;
    infoSection.appendChild(desc);

    // Steps
    if (data.steps && data.steps.length > 0) {
        const stepsTitle = document.createElement('h3');
        stepsTitle.textContent = 'How to Access Your Case Files';
        infoSection.appendChild(stepsTitle);

        const stepsList = document.createElement('ol');
        stepsList.className = 'steps';
        data.steps.forEach(function(step) {
            const li = document.createElement('li');
            li.textContent = step;
            stepsList.appendChild(li);
        });
        infoSection.appendChild(stepsList);
    }

    contentDiv.appendChild(infoSection);

    // Links card
    if (data.links && data.links.length > 0) {
        const linksCard = document.createElement('div');
        linksCard.className = 'resource-card';
        linksCard.style.marginTop = '1.5rem';

        const linksH3 = document.createElement('h3');
        linksH3.innerHTML = '<span class="icon">\u{1F517}</span> Direct Links';
        linksCard.appendChild(linksH3);

        const ul = document.createElement('ul');
        data.links.forEach(function(link) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.name;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            li.appendChild(a);
            ul.appendChild(li);
        });
        linksCard.appendChild(ul);
        contentDiv.appendChild(linksCard);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showEpisodeMap() {
    document.getElementById('state-panel').classList.remove('active');
    document.getElementById('map-section').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
