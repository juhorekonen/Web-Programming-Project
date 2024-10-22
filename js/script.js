const geolocationUrl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326";

/* Municipality election data from here :
"https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__kvaa/statfin_kvaa_pxt_12g3.px/"*/
const electionUrl = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/kvaa/statfin_kvaa_pxt_12g3.px"

const electionQuery = {
  "query": [
    {
      "code": "Vuosi",
      "selection": {
        "filter": "item",
        "values": [
          "1980",
          "1984",
          "1988",
          "1992",
          "1996",
          "2000",
          "2004",
          "2008",
          "2012",
          "2017",
          "2021"
        ]
      }
    },
    {
      "code": "Alue",
      "selection": {
        "filter": "item",
        "values": [
          "000000", "011091", "021049", "021078", "021092", "021106", 
          "021186", "021235", "021245", "021257", "021444", "021427", 
          "021428", "021737", "021223", "021540", "021622", "021543", 
          "021638", "021612", "021613", "021858", "022224", "022434", 
          "022424", "022585", "022701", "022505", "022710", "022220", 
          "022606", "022835", "022842", "022753", "022927", "023018", 
          "023149", "023407", "023504", "023611", "023616", "023755", 
          "031202", "031602", "031680", "031734", "031073", "031252", 
          "031259", "031308", "031501", "031586", "031587", "031776", 
          "031784", "031853", "032400", "032423", "032838", "032430", 
          "032431", "032006", "032482", "032445", "032101", "032150", 
          "032279", "032533", "032573", "032481", "032017", "032419", 
          "032503", "032490", "032529", "032485", "032705", "032920", 
          "032577", "032895", "032432", "032209", "033019", "033284", 
          "033304", "033322", "033040", "033243", "033923", "033480", 
          "033538", "033561", "033631", "033636", "033219", "033979", 
          "033704", "033906", "033738", "033761", "033833", "033918", 
          "041079", "041609", "041537", "041413", "041684", "041685", 
          "041266", "041406", "042050", "042262", "042102", "042913", 
          "042214", "042099", "042886", "042293", "043051", "043442", 
          "043181", "043230", "043271", "043484", "043531", "043608", 
          "043747", "043783", "043319", "061061", "061098", "061283", 
          "061109", "061083", "061210", "061401", "061692", "061855", 
          "061111", "061088", "061089", "061398", "061532", "061694", 
          "062016", "062082", "062165", "062560", "062015", "063081", 
          "063086", "063103", "063142", "063169", "063316", "063433", 
          "063576", "063781", "063834", "063981", "071211", "071730", 
          "071289", "071418", "071536", "071604", "071837", "071908", 
          "071980", "071932", "071303", "072020", "072864", "072928", 
          "072310", "072108", "072508", "072506", "072933", "072562", 
          "072581", "072790", "072493", "072912", "072772", "072988", 
          "072238", "072253", "072254", "073143", "073177", "073250", 
          "073291", "073619", "073635", "073439", "073702", "073887", 
          "073922", "073936", "081075", "081917", "081153", "081285", 
          "081286", "081044", "081163", "081306", "081754", "081909", 
          "081405", "081539", "081173", "081978", "081491", "081014", 
          "081492", "081085", "081696", "081775", "081740", "081741", 
          "081246", "081618", "082593", "082640", "082184", "082594", 
          "082937", "083046", "083097", "083178", "083213", "083416", 
          "083441", "083489", "083507", "083580", "083728", "083891", 
          "083588", "083623", "083624", "083681", "083689", "083700", 
          "083739", "083768", "083831", "083935", "091140", "091167", 
          "091251", "091856", "091045", "091632", "091297", "091919", 
          "091227", "091534", "091476", "091174", "091915", "091212", 
          "092276", "092309", "092422", "092541", "092911", "092749", 
          "092778", "093090", "093146", "093171", "093176", "093204", 
          "093239", "093260", "093248", "093263", "093402", "093916", 
          "093420", "093426", "093595", "093607", "093686", "093687", 
          "093707", "093762", "093844", "093848", "093943", "093857", 
          "093921", "093925", "101231", "101272", "101315", "101429", 
          "101885", "101598", "101743", "101589", "101544", "101975", 
          "101905", "101942", "102005", "102414", "102010", "102863", 
          "102145", "102232", "102233", "102004", "102281", "102971", 
          "102301", "102175", "102164", "102399", "102408", "102499", 
          "103052", "103074", "103151", "103152", "103217", "103218", 
          "103236", "103280", "103287", "103288", "103300", "103403", 
          "103421", "103440", "103475", "103545", "103584", "103599", 
          "103759", "103846", "103849", "103893", "103924", "103934", 
          "103946", "103559", "103945", "103479", "103944", "103989", 
          "111179", "111787", "111180", "111277", "112182", "112299", 
          "112443", "112183", "112249", "112410", "112500", "112992", 
          "112274", "112770", "112774", "113077", "113172", "113415", 
          "113216", "113226", "113256", "113265", "113275", "113312", 
          "113435", "113495", "113592", "113601", "113729", "113633", 
          "113850", "113892", "113931", "121205", "121940", "121244", 
          "121564", "121973", "121084", "121255", "121567", "121972", 
          "121678", "121582", "121926", "122069", "122139", "122292", 
          "122208", "122095", "122290", "122305", "122425", "122494", 
          "122535", "122563", "122765", "122977", "123009", "123071", 
          "123072", "123105", "123317", "123436", "123483", "123578", 
          "123615", "123620", "123625", "123626", "123630", "123691", 
          "123697", "123746", "123748", "123708", "123777", "123785", 
          "123791", "123247", "123603", "123617", "123682", "123832", 
          "123859", "123841", "123889", "131240", "131698", "131699", 
          "131851", "132241", "132320", "132758", "133047", "133148", 
          "133261", "133273", "133498", "133583", "133614", "133683", 
          "133732", "133742", "133751", "133845", "133854", "133890", 
          "133976",
        ]
      }
    },
    {
      "code": "Puolue",
      "selection": {
        "filter": "item",
        "values": [
          "03",
          "01",
          "04",
          "02",
          "05",
          "06",
          "07",
          "08",
          "09"
        ]
      }
    },
    {
      "code": "Tiedot",
      "selection": {
        "filter": "item",
        "values": [
          "osuus_aanista"
        ]
      }
    }
  ],
  "response": {
    "format": "json-stat2"
  }
}

// Find HTML elements
const slider = document.getElementById("show-year");
const sliderText = document.getElementById("show-text");
const addButton = document.getElementById("add-data");
const exportButton = document.getElementById("export-data");

// Fetch all the data
const fetchData = async () => {
  try {
    const geoQuery = await fetch(geolocationUrl);
    const geoData = await geoQuery.json();
    const election = await fetch(electionUrl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(electionQuery)
    });
    if (!election.ok) {return}
    const electionData = await election.json();
    processData(geoData, electionData);
  } catch(error) {
    console.log("An error occurred while fetching data: ", error);
    return;
  }
};

// Function to modify the data to be more accessible
const processData = (geoData, electionData) => {
  const parties = Object.values(electionData.dimension.Puolue.category.label);
  const years = Object.values(electionData.dimension.Vuosi.category.label);
  const municipalities = Object.values(electionData.dimension.Alue.category.label);
  const municipalityCodes = Object.values(electionData.dimension.Alue.category.index);
  const values = electionData.value;

  parties[2] = "KESK";
  parties[5] = "VAS";
  
  // I want the default map to be be the whole Finland in year 2021
  const defaultYearIndex = years.indexOf("2021");
  const defaultAreaIndex = municipalities.indexOf("Mainland Finland");

  slider.max = (years.length - 1).toString();
  slider.value = defaultYearIndex;

  // Set party colors (from https://fi.wikipedia.org/wiki/Malline:Suomen_puolueiden_metaohje)
  const colors = ["#006288", "#E11931", "#01954B", "#FFD500", "#61BF1A", "#BF1E24", "#FFDD93", "#2B67C9", "#ae2375"];

  /* The problem with the fetched data is that it's not logically presented and the values for municipalities, parties, and number of votes is separated so I have to manually map the data to create data objects for each municipality and associate them with party data*/
  const dataObjects = [];

  // First iterate through each municipality
  for (let i = 0; i < municipalities.length; i++) {
    let areas = { 
      name: municipalities[i], 
      parties: [] 
    };
    // And then through each party
    for (let j = 0; j < parties.length; j++) {
      let partyData = {
        name: parties[j],
        values: getValues(values, municipalityCodes, years.length, j, i),
        color: colors[j]
      }
      // Push data from parties to each municipality
      areas.parties.push(partyData);
    }
    // And finally push each municipality to list of objects
    dataObjects.push(areas);
  }
  getElectionData(geoData, dataObjects);
  buildChart(dataObjects, defaultAreaIndex, years, colors);
  createMap(geoData, years);
}

const getValues = (values, municipalityCodes, years, targetParty, areaIndex) => {

  let supportData = [];
  for (let i = 0; i < years; i++) {
    // To find the values we first search the correct year, then the correct area, and finally the correct party. Values in the array are multiplied by 9 because there are 9 parties
    let index = (i * 9 * municipalityCodes.length) + (9 * municipalityCodes[areaIndex]) + targetParty;
    // Push the target value
    supportData.push(values[index]);
  }
  return supportData;
}

/* Function to match areas in the electionData to the geographical areas in geoData. This is done in a separate function because the fetched data also shows the municipality names in a way where it is impossible to match them if the data is not edited first.

So for example here in electionData :
(name = 101231: "231 Kaskinen") 
I have to map just the value "Kaskinen" to geoData's value "Kaskinen"*/
const getElectionData = (geoData, dataObjects) => {

  for (let i = 0; i < dataObjects.length; i++) {
    // The correct municipality name is just the label.split("")[1]
    let electionName = dataObjects[i].name.split(" ")[1]

    for (let j = 0; j < geoData.features.length; j++) {
      // Find the corresponding name from the geoData
      let geoName = geoData.features[j].properties.nimi;

      if (electionName === geoName) {
        // Whenever the municipalities match, we copy the same dataObjects to geoData aswell so they can be used to display the chart when user clicks on any municipality
        geoData.features[j].properties.objects = dataObjects[i];
      }
    }
  }
}

// Function to create the map
const createMap = (geoData, years) => {
  let map = L.map("map", { 
    minZoom: -3, 
    maxZoom: 10 
  });

  let geoJSON = L.geoJSON(geoData, { 
    onEachFeature: (feature, layer) => getFeature(feature, layer, years), 
    style: (feature) => getStyle(feature)
  }).addTo(map);

  // Default value for the map is from year 2021
  sliderText.innerHTML = `Municipal elections in ${years[slider.value]}`;

  let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 20, 
    weight: 2, 
    attribution: "© OpenStreetMap" 
  }).addTo(map);

  map.fitBounds(geoJSON.getBounds());

  // Every time user uses the slide we update the map coloring, found the usage from: https://www.w3schools.com/jsref/event_oninput.asp
  slider.oninput = () => {
    sliderText.innerHTML = `Municipal elections in ${years[slider.value]}`;
    geoJSON.eachLayer(layer => changeStyle(layer));
  };

  /* Every time user wants to estimate new data we calculate the data and update
  the map and it's values, the chart and it's values, and the slider and it's values */
  addButton.addEventListener("click", () => {
    geoJSON.eachLayer(layer => {
      updateChart(layer);
    });
    updateSlider(years);
  });
};

// Function to build the initial chart
const buildChart = (dataObjects, index, years, colors) => {
  const parties = dataObjects[index].parties;

  // We create an array of objects for each municipality
  const municipalityData = [];
  for (let i = 0; i < parties.length; i++) {
    const current = parties[i];
    municipalityData.push({
      name: current.name,
      values: current.values,
      color: current.color
    });
  }
  
  const data = {
    labels: years,
    datasets: municipalityData
  };

  const chart = new frappe.Chart("#chart", {
    title: `Election-% for each party in Finland : ${years[0]} - ${years[years.length - 1]}`,
    data: data,
    type: "line",
    height: 450,
    colors: colors,

    axisOptions: {
      xAxisMode: 'tick' // default: 'span'
    }
  });

  // Whenever user estimates new datapoints
  addButton.addEventListener("click", () => {
    let newValues = [];
    for (let i = 0; i < municipalityData.length; i++) {
      let party = municipalityData[i];
      newValues.push(calculateEstimatedValue(party.values))
    }

    // Finally we add the new data points to the chart
    let newYear = parseInt(years[years.length - 1]) + 4;
    chart.addDataPoint(newYear.toString(), newValues);
    
    // Update the municipalityData.values with the new value in case user wants to estimate new data multiple times in a row
    for (let i = 0; i < municipalityData.length; i++) {
      municipalityData[i].values.push(newValues[i]);
    }
  });
  // Found a way to export frappe charts from : https://frappe.io/charts/docs/exporting/images
  exportButton.addEventListener('click', () => chart.export());
};

const getFeature = (feature, layer, years) => {
  if (!feature.properties.name || !feature.properties.objects) return;

  let data = feature.properties.objects.parties;

  /* To create a chart inside the popup I looked help from:
  https://stackoverflow.com/questions/69300439/chart-js-inside-popup-on-leaflet
  https://gis.stackexchange.com/questions/44800/chart-inside-pop-up-window-in-javascript
  https://gis.stackexchange.com/questions/188457/text-chart-inside-pop-up-window-in-javascript?noredirect=1&lq=1
  */
  layer.on("click", function() {

    let municipality = feature.properties.name;
    let year = slider.value;

    // Create a new element for vote distribution
    var voteDistribution = document.createElement("div");
    voteDistribution.innerHTML = `
    <div id="chart2" style="width: 300px; height: 300px;"></div>
    `;

    layer.bindPopup(voteDistribution).openPopup();

    let chartLabels = [];
    let chartValues = [];
    for (let j = 0; j < data.length; j++) {
      chartLabels.push(data[j].name);
      chartValues.push(data[j].values[year]);
    }

    let chartData = {
      labels: chartLabels,
      datasets: [{
        name: "Votes %",
        values: chartValues
      }]
    };

    const newChart = document.getElementById("chart2");

    const chart = new frappe.Chart(newChart, {
      title: `Votes in ${municipality} in ${years[year]}`,
      data: chartData,
      type: "line",
      height: 300,

      /* The labels with more than three letters were not displayed so I found an answer to that problem from here:
      https://frappe.io/charts/docs/reference/configuration */
      axisOptions: {
        xIsSeries: 1,
      },

      lineOptions: {
        hideLine: 1,
        dotSize: 7
      }
    });

    // Update chart when the user estimates new data
    addButton.addEventListener("click", function() {
      chart.update(chartData);
    });

  })
  layer.bindTooltip(feature.properties.name);
}

// Function to calculate the new elections to get the correct color
const updateChart = (layer) => {
  if (!layer.feature.properties.objects) return;

  let data = layer.feature.properties.objects.parties;
  for (let i = 0; i < data.length; i++) {
    let values = data[i].values;
    let estimation = 0;
    // Here the new value is calculated the same way as in calculateEstimatedValue() (from week 6 lecture)
    for (let j = 1; j < values.length; j++) {
      estimation += values[j] - values[j - 1];
    }

    let newValue = (estimation / (values.length - 1)) + values[values.length - 1];

    // To ensure that the newValue is non-negative
    data[i].values.push(Math.max(0, Math.round(newValue)));
  }
  
  // Update the election data in the layer
  layer.feature.properties.objects.parties = data.slice();
  changeStyle(layer);
}; 

// Function to update the slider value when estimating data
const updateSlider = (years) => {
  // Calculate new value (original data is from every four years)
  let newYear = (parseInt(years[years.length - 1]) + 4).toString();
  years.push(newYear);

  // Update the slider
  slider.max = (years.length - 1).toString();
  slider.value = slider.max;
  sliderText.innerHTML = `Municipal elections in ${years[slider.value]}`;
};

const getStyle = (feature) => {
  // Check if the election data exists for each municipality
  if (!feature.properties.name || !feature.properties.objects) {
    return { 
      fillColor: "#ffffff", 
      color: "#ffffff", 
      fillOpacity: 0.3 
    };
  };

  // Otherwise we get the correct color
  return { 
    fillColor: getColor(feature.properties.objects.parties), 
    color: getColor(feature.properties.objects.parties), 
    fillOpacity: 0.3
   };
};

// Function to change the colors when changing the slider value
const changeStyle = (layer) => {
  if (!layer.feature.properties.objects) {
    return { 
      fillColor: "#ffffff", 
      color: "#ffffff", 
      fillOpacity: 0.3 
    };
  };

  const color = getColor(layer.feature.properties.objects.parties);
  layer.setStyle({ 
    fillColor: color, 
    color: color, 
    fillOpacity: 0.3 
  });
};

const getColor = (data) => {
  // In cases where the percentage of votes is unknown, color the municipality black
  let largest = 0, color = "#000000";
  // Iterate through the parties to find the winning party
  data.forEach(party => {
    const votes = party.values[slider.value];
      if (votes > largest) {
        largest = votes
        color = party.color;
      }
  });
  // Return it's corresponding color
  return color;
};

// Function to estimate new data points (from week 6 lecture)
const calculateEstimatedValue = (votes) => {
  let estimation = 0;
  for (let i = 1; i < votes.length; i++) {
      estimation += (votes[i] - votes[i - 1]);
  }
  estimation = (estimation / (votes.length - 1)) + votes[votes.length - 1];
  return Math.round(estimation);
};

if (document.readyState === "loading") {

  document.addEventListener("DOMContentLoaded", fetchData());

} else {

  fetchData();

}

// Switch to view population data
document.getElementById('navigation').addEventListener('click', () => {
  window.location.href = 'index2.html';
});
