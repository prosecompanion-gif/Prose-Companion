// US Map SVG Loader
// Loads the SVG map and adds interactive data attributes
function initializeMap() {
    // Determine the correct path to the SVG based on current page location
    var svgPath = 'us-map-raw.svg';
    var scripts = document.querySelectorAll('script[src*="us-map.js"]');
    if (scripts.length > 0) {
        var src = scripts[0].getAttribute('src');
        var dir = src.substring(0, src.lastIndexOf('/') + 1);
        svgPath = dir + 'us-map-raw.svg';
    }
    
    return fetch(svgPath)
        .then(response => response.text())
        .then(svgText => {
            const mapContainer = document.getElementById('map-container');
            mapContainer.innerHTML = svgText;
            
            const svg = mapContainer.querySelector('svg');
            if (!svg) return;
            
            // Map CSS class names to state abbreviations
            const classToAbbr = {
                'al': 'AL', 'ak': 'AK', 'az': 'AZ', 'ar': 'AR', 'ca': 'CA',
                'co': 'CO', 'ct': 'CT', 'de': 'DE', 'fl': 'FL', 'ga': 'GA',
                'hi': 'HI', 'id': 'ID', 'il': 'IL', 'in': 'IN', 'ia': 'IA',
                'ks': 'KS', 'ky': 'KY', 'la': 'LA', 'me': 'ME', 'md': 'MD',
                'ma': 'MA', 'mi': 'MI', 'mn': 'MN', 'ms': 'MS', 'mo': 'MO',
                'mt': 'MT', 'ne': 'NE', 'nv': 'NV', 'nh': 'NH', 'nj': 'NJ',
                'nm': 'NM', 'ny': 'NY', 'nc': 'NC', 'nd': 'ND', 'oh': 'OH',
                'ok': 'OK', 'or': 'OR', 'pa': 'PA', 'ri': 'RI', 'sc': 'SC',
                'sd': 'SD', 'tn': 'TN', 'tx': 'TX', 'ut': 'UT', 'vt': 'VT',
                'va': 'VA', 'wa': 'WA', 'wv': 'WV', 'wi': 'WI', 'wy': 'WY',
                'dc': 'DC'
            };


            // Get all state paths in the .state group
            const stateGroup = svg.querySelector('g.state');
            if (stateGroup) {
                const paths = stateGroup.querySelectorAll('path');
                paths.forEach(path => {
                    const classList = path.getAttribute('class');
                    if (classList) {
                        const stateClass = classList.trim().split(/\s+/)[0];
                        const abbr = classToAbbr[stateClass];
                        if (abbr) {
                            path.setAttribute('data-state', abbr);
                            path.setAttribute('id', 'state-' + abbr);
                        }
                    }
                });
            }
            
            // Also handle the DC circle
            const dcCircle = svg.querySelector('circle.dc');
            if (dcCircle) {
                dcCircle.setAttribute('data-state', 'DC');
                dcCircle.setAttribute('id', 'state-DC');
                dcCircle.style.cursor = 'pointer';
            }

            // Add clickable territory boxes below the map
            addTerritoryBoxes(mapContainer);
        });
}

function addTerritoryBoxes(mapContainer) {
    const territories = [
        { abbr: 'PR', name: 'Puerto Rico' },
        { abbr: 'GU', name: 'Guam' },
        { abbr: 'VI', name: 'U.S. Virgin Islands' },
        { abbr: 'AS', name: 'American Samoa' },
        { abbr: 'MP', name: 'N. Mariana Islands' }
    ];

    const wrapper = document.createElement('div');
    wrapper.className = 'territory-boxes';

    territories.forEach(t => {
        const box = document.createElement('div');
        box.className = 'territory-box';
        box.setAttribute('data-state', t.abbr);
        box.setAttribute('id', 'state-' + t.abbr);
        box.textContent = t.name;
        wrapper.appendChild(box);
    });

    mapContainer.appendChild(wrapper);
}
