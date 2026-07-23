// The Pro Se Companion - Main Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    initializeMap().then(function() {
        setupMapInteraction();
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', function() {
        showMap();
    });
});

function buildStateDirectory() {
    var tbody = document.getElementById('state-directory-tbody');
    if (!tbody) return;

    // Sort states alphabetically by name
    var abbrs = Object.keys(stateData);
    abbrs.sort(function(a, b) {
        return stateData[a].name.localeCompare(stateData[b].name);
    });

    abbrs.forEach(function(abbr) {
        var s = stateData[abbr];
        var tr = document.createElement('tr');

        var tdState = document.createElement('td');
        tdState.innerHTML = '<strong>' + s.name + '</strong>';
        tr.appendChild(tdState);

        var tdLinks = document.createElement('td');
        var linksHtml = '<a href="' + s.judiciary.url + '" target="_blank" rel="noopener">Official Court Website</a><br>';
        linksHtml += '<a href="' + s.selfHelp.url + '" target="_blank" rel="noopener">Self-Help Resources</a>';
        // Add e-filing link for Maryland (MDEC) as shown in the PDF
        if (abbr === 'MD') {
            linksHtml += '<br><a href="https://mdecportal.courts.state.md.us/mdec/" target="_blank" rel="noopener">E-Filing (MDEC)</a>';
            linksHtml += '<br><a href="https://www.peoples-law.org/" target="_blank" rel="noopener">Law Library</a>';
        }
        tdLinks.innerHTML = linksHtml;
        tr.appendChild(tdLinks);

        tbody.appendChild(tr);
    });
}

function setupMapInteraction() {
    var mapContainer = document.getElementById('map-container');
    var tooltip = createTooltip();

    // Event delegation for state clicks
    mapContainer.addEventListener('click', function(e) {
        var target = e.target.closest('[data-state]');
        if (target) {
            var stateAbbr = target.getAttribute('data-state');
            if (stateData[stateAbbr]) {
                showStatePanel(stateAbbr);
            }
        }
    });

    // Tooltip on hover
    mapContainer.addEventListener('mousemove', function(e) {
        var target = e.target.closest('[data-state]');
        if (target) {
            var stateAbbr = target.getAttribute('data-state');
            var data = stateData[stateAbbr];
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

function createTooltip() {
    var tooltip = document.createElement('div');
    tooltip.className = 'state-tooltip';
    document.body.appendChild(tooltip);
    return tooltip;
}

function showStatePanel(stateAbbr) {
    var data = stateData[stateAbbr];
    if (!data) return;

    // Hide map, show panel
    document.getElementById('map-section').style.display = 'none';
    var panel = document.getElementById('state-panel');
    panel.classList.add('active');

    // Set state name
    document.getElementById('state-name').textContent = data.name;

    // Build resources grid
    var grid = document.getElementById('resources-grid');
    grid.innerHTML = '';

    grid.appendChild(createResourceCard('Official Judiciary', 'courthouse', [data.judiciary]));
    grid.appendChild(createResourceCard('Court Rules & Procedures', 'rules', [data.courtRules]));
    grid.appendChild(createResourceCard('Statutes & Laws', 'laws', [data.statutes]));
    grid.appendChild(createResourceCard('Self-Help / Pro Se Center', 'selfhelp', [data.selfHelp]));
    grid.appendChild(createResourceCard('Free Legal Aid & Resources', 'legalaid', data.legalAid));
    grid.appendChild(createResourceCard('National Resources', 'national', [
        { name: 'LawHelp.org - Find Local Help', url: 'https://www.lawhelp.org/' },
        { name: 'Legal Services Corporation', url: 'https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help' },
        { name: 'ABA Free Legal Answers', url: 'https://abafreelegalanswers.org/' },
        { name: 'Cornell Law - Legal Information', url: 'https://www.law.cornell.edu/' },
        { name: 'CourtListener - Free Case Law', url: 'https://www.courtlistener.com/' }
    ]));

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createResourceCard(title, iconType, links) {
    var card = document.createElement('div');
    card.className = 'resource-card';

    var icons = {
        courthouse: '\u{1F3DB}',
        rules: '\u{1F4DC}',
        laws: '\u{1F4D6}',
        selfhelp: '\u{1F4CB}',
        legalaid: '\u{1F91D}',
        national: '\u{1F1FA}\u{1F1F8}'
    };

    var h3 = document.createElement('h3');
    h3.innerHTML = '<span class="icon">' + (icons[iconType] || '') + '</span> ' + title;
    card.appendChild(h3);

    var ul = document.createElement('ul');
    links.forEach(function(link) {
        if (link && link.url) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.name;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            li.appendChild(a);
            ul.appendChild(li);
        }
    });
    card.appendChild(ul);

    return card;
}

function showMap() {
    document.getElementById('state-panel').classList.remove('active');
    document.getElementById('map-section').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
