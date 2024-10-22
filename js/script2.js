const populationUrl = "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px";
const employmentUrl = "https://pxdata.stat.fi:443/PxWeb/api/v1/fi/StatFin/tyokay/statfin_tyokay_pxt_115b.px";
const geolocationUrl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326";

const populationQuery = {
    "query": [
        {
            "code": "Vuosi",
            "selection": {
                "filter": "item",
                "values": [
                    "2000",
                    "2001",
                    "2002",
                    "2003",
                    "2004",
                    "2005",
                    "2006",
                    "2007",
                    "2008",
                    "2009",
                    "2010",
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022"
                ]
            }
        },
        {
            "code": "Alue",
            "selection": {
                "filter": "item",
                "values": [
                    "SSS", "KU020", "KU005", "KU009", "KU010", "KU016", 
                    "KU018", "KU019", "KU035", "KU043", "KU046", "KU047", 
                    "KU049", "KU050", "KU051", "KU052", "KU060", "KU061", 
                    "KU062", "KU065", "KU069", "KU071", "KU072", "KU074", 
                    "KU075", "KU076", "KU077", "KU078", "KU079", "KU081", 
                    "KU082", "KU086", "KU111", "KU090", "KU091", "KU097", 
                    "KU098", "KU102", "KU103", "KU105", "KU106", "KU108", 
                    "KU109", "KU139", "KU140", "KU142", "KU143", "KU145", 
                    "KU146", "KU153", "KU148", "KU149", "KU151", "KU152", 
                    "KU165", "KU167", "KU169", "KU170", "KU171", "KU172", 
                    "KU176", "KU177", "KU178", "KU179", "KU181", "KU182", 
                    "KU186", "KU202", "KU204", "KU205", "KU208", "KU211", 
                    "KU213", "KU214", "KU216", "KU217", "KU218", "KU224", 
                    "KU226", "KU230", "KU231", "KU232", "KU233", "KU235", 
                    "KU236", "KU239", "KU240", "KU320", "KU241", "KU322", 
                    "KU244", "KU245", "KU249", "KU250", "KU256", "KU257", 
                    "KU260", "KU261", "KU263", "KU265", "KU271", "KU272", 
                    "KU273", "KU275", "KU276", "KU280", "KU284", "KU285", 
                    "KU286", "KU287", "KU288", "KU290", "KU291", "KU295", 
                    "KU297", "KU300", "KU301", "KU304", "KU305", "KU312", 
                    "KU316", "KU317", "KU318", "KU398", "KU399", "KU400", 
                    "KU407", "KU402", "KU403", "KU405", "KU408", "KU410", 
                    "KU416", "KU417", "KU418", "KU420", "KU421", "KU422", 
                    "KU423", "KU425", "KU426", "KU444", "KU430", "KU433", 
                    "KU434", "KU435", "KU436", "KU438", "KU440", "KU441", 
                    "KU475", "KU478", "KU480", "KU481", "KU483", "KU484", 
                    "KU489", "KU491", "KU494", "KU495", "KU498", "KU499", 
                    "KU500", "KU503", "KU504", "KU505", "KU508", "KU507", 
                    "KU529", "KU531", "KU535", "KU536", "KU538", "KU541", 
                    "KU543", "KU545", "KU560", "KU561", "KU562", "KU563", 
                    "KU564", "KU309", "KU576", "KU577", "KU578", "KU445", 
                    "KU580", "KU581", "KU599", "KU583", "KU854", "KU584", 
                    "KU588", "KU592", "KU593", "KU595", "KU598", "KU601", 
                    "KU604", "KU607", "KU608", "KU609", "KU611", "KU638", 
                    "KU614", "KU615", "KU616", "KU619", "KU620", "KU623", 
                    "KU624", "KU625", "KU626", "KU630", "KU631", "KU635", 
                    "KU636", "KU678", "KU710", "KU680", "KU681", "KU683", 
                    "KU684", "KU686", "KU687", "KU689", "KU691", "KU694", 
                    "KU697", "KU698", "KU700", "KU702", "KU704", "KU707", 
                    "KU729", "KU732", "KU734", "KU736", "KU790", "KU738", 
                    "KU739", "KU740", "KU742", "KU743", "KU746", "KU747", 
                    "KU748", "KU791", "KU749", "KU751", "KU753", "KU755", 
                    "KU758", "KU759", "KU761", "KU762", "KU765", "KU766", 
                    "KU768", "KU771", "KU777", "KU778", "KU781", "KU783", 
                    "KU831", "KU832", "KU833", "KU834", "KU837", "KU844", 
                    "KU845", "KU846", "KU848", "KU849", "KU850", "KU851", 
                    "KU853", "KU857", "KU858", "KU859", "KU886", "KU887", 
                    "KU889", "KU890", "KU892", "KU893", "KU895", "KU785", 
                    "KU905", "KU908", "KU092", "KU915", "KU918", "KU921", 
                    "KU922", "KU924", "KU925", "KU927", "KU931", "KU934", 
                    "KU935", "KU936", "KU941", "KU946", "KU976", "KU977", 
                    "KU980", "KU981", "KU989", "KU992"
                ]
            }
        },
        {
            "code": "Tiedot",
            "selection": {
                "filter": "item",
                "values": ["vaesto"]
            }
        }
    ],
    "response": {
        "format": "json-stat2"
    }
};

const employmentQuery = {
    "query": [
        {
        "code": "Alue",
        "selection": {
          "filter": "item",
          "values": [
                "SSS", "KU020", "KU005", "KU009", "KU010", "KU016", 
                "KU018", "KU019", "KU035", "KU043", "KU046", "KU047", 
                "KU049", "KU050", "KU051", "KU052", "KU060", "KU061", 
                "KU062", "KU065", "KU069", "KU071", "KU072", "KU074", 
                "KU075", "KU076", "KU077", "KU078", "KU079", "KU081", 
                "KU082", "KU086", "KU111", "KU090", "KU091", "KU097", 
                "KU098", "KU102", "KU103", "KU105", "KU106", "KU108", 
                "KU109", "KU139", "KU140", "KU142", "KU143", "KU145", 
                "KU146", "KU153", "KU148", "KU149", "KU151", "KU152", 
                "KU165", "KU167", "KU169", "KU170", "KU171", "KU172", 
                "KU176", "KU177", "KU178", "KU179", "KU181", "KU182", 
                "KU186", "KU202", "KU204", "KU205", "KU208", "KU211", 
                "KU213", "KU214", "KU216", "KU217", "KU218", "KU224", 
                "KU226", "KU230", "KU231", "KU232", "KU233", "KU235", 
                "KU236", "KU239", "KU240", "KU320", "KU241", "KU322", 
                "KU244", "KU245", "KU249", "KU250", "KU256", "KU257", 
                "KU260", "KU261", "KU263", "KU265", "KU271", "KU272", 
                "KU273", "KU275", "KU276", "KU280", "KU284", "KU285", 
                "KU286", "KU287", "KU288", "KU290", "KU291", "KU295", 
                "KU297", "KU300", "KU301", "KU304", "KU305", "KU312", 
                "KU316", "KU317", "KU318", "KU398", "KU399", "KU400", 
                "KU407", "KU402", "KU403", "KU405", "KU408", "KU410", 
                "KU416", "KU417", "KU418", "KU420", "KU421", "KU422", 
                "KU423", "KU425", "KU426", "KU444", "KU430", "KU433", 
                "KU434", "KU435", "KU436", "KU438", "KU440", "KU441", 
                "KU475", "KU478", "KU480", "KU481", "KU483", "KU484", 
                "KU489", "KU491", "KU494", "KU495", "KU498", "KU499", 
                "KU500", "KU503", "KU504", "KU505", "KU508", "KU507", 
                "KU529", "KU531", "KU535", "KU536", "KU538", "KU541", 
                "KU543", "KU545", "KU560", "KU561", "KU562", "KU563", 
                "KU564", "KU309", "KU576", "KU577", "KU578", "KU445", 
                "KU580", "KU581", "KU599", "KU583", "KU854", "KU584", 
                "KU588", "KU592", "KU593", "KU595", "KU598", "KU601", 
                "KU604", "KU607", "KU608", "KU609", "KU611", "KU638", 
                "KU614", "KU615", "KU616", "KU619", "KU620", "KU623", 
                "KU624", "KU625", "KU626", "KU630", "KU631", "KU635", 
                "KU636", "KU678", "KU710", "KU680", "KU681", "KU683", 
                "KU684", "KU686", "KU687", "KU689", "KU691", "KU694", 
                "KU697", "KU698", "KU700", "KU702", "KU704", "KU707", 
                "KU729", "KU732", "KU734", "KU736", "KU790", "KU738", 
                "KU739", "KU740", "KU742", "KU743", "KU746", "KU747", 
                "KU748", "KU791", "KU749", "KU751", "KU753", "KU755", 
                "KU758", "KU759", "KU761", "KU762", "KU765", "KU766", 
                "KU768", "KU771", "KU777", "KU778", "KU781", "KU783", 
                "KU831", "KU832", "KU833", "KU834", "KU837", "KU844", 
                "KU845", "KU846", "KU848", "KU849", "KU850", "KU851", 
                "KU853", "KU857", "KU858", "KU859", "KU886", "KU887", 
                "KU889", "KU890", "KU892", "KU893", "KU895", "KU785", 
                "KU905", "KU908", "KU092", "KU915", "KU918", "KU921", 
                "KU922", "KU924", "KU925", "KU927", "KU931", "KU934", 
                "KU935", "KU936", "KU941", "KU946", "KU976", "KU977", 
                "KU980", "KU981", "KU989", "KU992"]
        }
      },
      {
        "code": "Pääasiallinen toiminta",
        "selection": {
          "filter": "item",
          "values": [
            "11",
            "12"
          ]
        }
      },
      {
        "code": "Sukupuoli",
        "selection": {
          "filter": "item",
          "values": [
            "SSS"
          ]
        }
      },
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ]
        }
      }
    ],
    "response": {
        "format": "json-stat2"
    }
}

// Get the index.html elements
const populationButton = document.getElementById("show-population");
const employmentButton = document.getElementById("show-employment");
const unemploymentButton = document.getElementById("show-unemployment");
const exportButton = document.getElementById("export-data");

// Fetch all the data
const fetchData = async () => {
  try {
    const geoQuery = await fetch(geolocationUrl);
    const geoData = await geoQuery.json();

    const population = await fetch(populationUrl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(populationQuery)
    });
    if (!population.ok) {return}
    const populationData = await population.json();

    const employment = await fetch(employmentUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employmentQuery)
      });
      if (!employment.ok) {return}
      const employmentData = await employment.json();

    createMap(geoData, populationData, employmentData);
    buildChart(populationData, employmentData);

  } catch(error) {
    console.log("An error occurred while fetching data: ", error);
    return;
  }
};

// Function to create the map
const createMap = (geoData, populationData, employmentData) => {
    let counter = 0
    let map = L.map('map', {
        minZoom: -3,
        maxZoom: 10,
    })

    let geoJson = L.geoJSON(geoData, {
        onEachFeature: (feature, layer) => {
            counter++;
            getFeature(feature, layer, populationData, employmentData, counter);
        },
        style: (feature) => getStyle(feature, employmentData)
    }).addTo(map)

    // To show the user an additional layer
    let population = L.geoJSON(geoData, {
        onEachFeature: (feature, layer) => {
            layer.bindTooltip(feature.properties.name);
        },
        style: (feature) => getDensity(feature, populationData)
    });

    let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        weight: 2,
        attribution: "© OpenStreetMap",
    }).addTo(map); 

    let googleMaps = L.tileLayer("https://{s}.google.com/vt/lyrs=s@221097413,traffic&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        minZoom: 2,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }).addTo(map)

    // Drag and drop functionality straight from: https://jsfiddle.net/430oz1pj/197/
    marker = document.getElementById("map")
    marker.ondragover = function (e) {
    	e.preventDefault()
        e.dataTransfer.dropEffect = "move"
    }
    
    marker.ondrop = function (e) {
    	e.preventDefault()

        /* Because the Leaflet map is zoomed in, the marker was not displayed correctly on the same spot as the cursor was during dropping, so I had to read this entire documentation to find a solution: https://leafletjs.com/reference.html */

        let path = e.dataTransfer.getData("text/plain")
        // The geographical point where the mouse event occurred
        let coordinates = map.mouseEventToLatLng(e);

        L.marker(coordinates, {
            icon: L.icon({
                iconUrl: path
            }),
      	    draggable: true
        }).addTo(map)
    }
    
      let baseMaps = {
        "Google Maps": googleMaps,
        "OpenStreetMap": osm
      }
    
      let overlayMaps = {
        "Ratio": geoJson,
        "Density": population
      }

      let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

    map.fitBounds(geoJson.getBounds())
}

// Function to build the chart
const buildChart = (populationData, employmentData) => {
    // Initial chart will be the change in Finnish population over the years
    const labels = Object.keys(populationData.dimension.Vuosi.category.index);
    const values = [];
    for (let i = 0; i < labels.length; i++) {
        values.push(populationData.value[0 + 310 * i]);
    }
    const data = {
        labels: labels,
        datasets: [{
            name: "Population",
            values: values,
    }]
    };

    const chart = new frappe.Chart("#chart", {
        title: `Statistical representation of Finland from 2000 - 2022`,
        data: data,
        type: "line",
        height: 450,
        colors: ["#ff4d4d"]
    });

    // Found a way to export frappe charts from : https://frappe.io/charts/docs/exporting/images
    exportButton.addEventListener("click", () => chart.export());

    // Updating the chart on button presses
    populationButton.addEventListener("click", () => updateChart(chart, populationData, "population-chart"));
    employmentButton.addEventListener("click", () => updateChart(chart, employmentData, "employment-chart"));
    unemploymentButton.addEventListener("click", () => updateChart(chart, employmentData, "unemployment-chart"));
};

// Function to update the chart to display different statistics
const updateChart = (chart, data, type) => {
    // The same data structure from buildChart()
    const newData = {
        labels: [],
        datasets: [{
            name: "",
            values: []
        }]
    }
    if (!data) {return};
    let labels = Object.keys(data.dimension.Vuosi.category.index);
    let values = [];

    // The given type divides the updateChart() into building three different charts
    if (type === "population-chart") {
        for (let i = 0; i < labels.length; i++) {
            values.push(data.value[0 + 310 * i]);
        }
        newData.datasets[0].name = "Population";

    } else if (type === "employment-chart") {
        for (let i = 0; i < labels.length; i++) {
            values.push(data.value[i]);
        }
        newData.datasets[0].name = "Employment";

    } else if (type === "unemployment-chart") {
        for (let i = 0; i < labels.length; i++) {
            values.push(data.value[i + 23]);
        }
        newData.datasets[0].name = "Unemployment";

    } else {
        console.log("Undefined Datatype")
        return
    };

    newData.labels = labels;
    newData.datasets[0].values = values;

    // To simply update charts : https://frappe.io/charts/docs/update_state/modify_data
    chart.update(newData);
};

const getFeature = (feature, layer, populationData, employmentData, counter) => {
    if (!feature.properties.name) {return}
    // For some reason municipalities with codes "SSS" and "KU020" doesnt exist in the object arrays so I'm using a counter to get get the "KU020" values too
    let population, employment, unemployment, ratio, municipalityId;
    const index = Object.keys(populationData.dimension.Alue.category.index);

    if (counter === 1) {
        municipalityId = "KU020";
    } else {
        // For every other municipality
        municipalityId = "KU" + feature.properties.kunta;
    }

    const municipalityIndex = index.indexOf(municipalityId)
    // Because there are 23 years fetched, data from 2022 is found in the last 310 values
    const populationIndex = municipalityIndex + 22 * 310;

    // For every municipality there are 2 values, employed people and unemployed people -> therefore the municipality changes in every 23*2 = 46 values in the object's array
    const employmentIndex = municipalityIndex * 46;

    population = populationData.value[populationIndex];
    employment = employmentData.value[employmentIndex + 22]; // +22 gives the last (2022) employment value
    unemployment = employmentData.value[employmentIndex + 45]; // +45 gives the last unemployment value

    if (unemployment > 0) {
        ratio = ((employment / (employment + unemployment)) * 100).toFixed(2);
    } else {
        ratio = undefined
    }
    /* Store the ratio so we can use it in getStyle()
    feature.properties.ratio = ratio;  // for some reason this was undefined in getStyle() */
   
    layer.on("click", function () {
        layer.bindPopup(
            `<ul>
                <li>Name: ${feature.properties.name}</li>
                <li>Population: ${population}</li>
                <li>Employed: ${employment}</li>
                <li>Unemployed: ${unemployment}</li>
                <li>Ratio: ${ratio}</li>
            </ul>`
        ).openPopup();
    })

    layer.bindTooltip(feature.properties.name);
};

const getStyle = (feature, employmentData) => {
    if (!feature.properties.name) {return}

    // Here we do the same steps to calculate the ratio as in getFeature()
    let ratio;
    const municipalityId = "KU" + feature.properties.kunta;
    const index = Object.keys(employmentData.dimension.Alue.category.index);
    const municipalityIndex = index.indexOf(municipalityId);
    const employmentIndex = municipalityIndex * 46;
    const employment = employmentData.value[employmentIndex + 22];
    const unemployment = employmentData.value[employmentIndex + 45];

    if (unemployment > 0) {
        ratio = ((employment / (employment + unemployment)) * 100).toFixed(2);
    } else {
        ratio = undefined;
    }

    // Coloring the map based on employment ratio
    if (ratio === undefined) {
        color = "#FFFFFF";
    } else if (ratio > 90) {
        color = "#00FF00";
    } else if (ratio >= 85) {
        color = "#FFA500";
    } else {
        color = "#FF0000";
    }
    return {
        color: color,
        fillColor: color,
        fillOpacity: 0.3
    };
};

// Same as getStyle() but for density overlay
const getDensity = (feature, populationData) => {
    if (!feature.properties.name) { return }

    let population;
    const index = Object.keys(populationData.dimension.Alue.category.index);
    const municipalityId = "KU" + feature.properties.kunta;
    const municipalityIndex = index.indexOf(municipalityId);
    const populationIndex = municipalityIndex + 22 * 310; // For 2022

    population = populationData.value[populationIndex];
    
    let color;
    if (population > 10000) {
        color = "#D70040";
    } else if (population > 5000) {
        color = "#FFC000";
    } else {
        color = "#228B22";
    }

    return {
        color: color,
        fillColor: color,
        fillOpacity: 0.3,
    };
};

if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", fetchData());

} else {

    fetchData();

}

document.getElementById('navigation').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
