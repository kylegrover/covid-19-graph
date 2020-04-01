const covidSchema = {
  headerRow: 0,
  stateColumn: 0,
  countryColumn: 1,
  latColumn: 2,
  lonColumn: 3,
  dateStartColumn: 4,
};

const covidDataBaseURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series';

const confirmedPalette = ['#BBBBBB', '#AAAAAA', '#999999', '#888888', '#777777'];
const recoveredPalette = ['#4BC0C0', '#1D5353', '#379E9E', '#4BC0C0', '#2A7878'];
const deathsPalette = ['#FF6384', '#93001D', '#F90031', '#FF2D57', '#C60027'];
const activePalette = ['#FF9F40', '#703600', '#D66700', '#FF800A', '#A34E00'];

const covidDataTypes = {
  confirmed: {
    key: 'confirmed',
    title: 'Confirmed',
    dataSourceUrl: `${covidDataBaseURL}/time_series_covid19_confirmed_global.csv`,
    borderColor: confirmedPalette,
    alertClass: 'alert-secondary',
    badgeClass: 'badge-secondary',
  },
  recovered: {
    key: 'recovered',
    title: 'Recovered',
    dataSourceUrl: `${covidDataBaseURL}/time_series_covid19_recovered_global.csv`,
    borderColor: recoveredPalette,
    alertClass: 'alert-success',
    badgeClass: 'badge-success',
  },
  deaths: {
    key: 'deaths',
    title: 'Deaths',
    dataSourceUrl: `${covidDataBaseURL}/time_series_covid19_deaths_global.csv`,
    borderColor: deathsPalette,
    alertClass: 'alert-danger',
    badgeClass: 'badge-danger',
  },
  active: { // i want to move this above recovered but it breaks shit
    key: 'active',
    title: 'Active',
    dataSourceUrl: `math`,
    borderColor: activePalette,
    alertClass: 'alert-warning',
    badgeClass: 'badge-warning',
  },
};

const covidCountries = {
  all: {
    key: 'Global',
    title: 'Global',
    index: -1,
  }
};

const covidSorts = {
  country: {
    key: 'country',
  },
  confirmed: {
    key: 'confirmed',
    dataKey: covidDataTypes.confirmed.key,
  },
  active: {
    key: 'active',
    dataKey: covidDataTypes.active.key,
  },
  recovered: {
    key: 'recovered',
    dataKey: covidDataTypes.recovered.key,
  },
  deaths: {
    key: 'deaths',
    dataKey: covidDataTypes.deaths.key,
  },
};

const covidSortDirections = {
  asc: {
    key: 'asc',
  },
  desc: {
    key: 'desc',
  },
};

const covidFilters = {
  selectedTypes: {
    key: 'selectedTypes',
    defaultValue: Object.keys(covidDataTypes),
  },
  groupByCountry: {
    key: 'groupByCountry',
    defaultValue: true,
  },
  selectedRegions: {
    key: 'selectedRegions',
    defaultValue: [covidCountries.all.key]
  },
  useLogScale: {
    key: 'useLogScale',
    defaultValue: false,
  },
  countrySearchQuery: {
    key: 'countrySearchQuery',
    defaultValue: '',
  },
  dataSort: {
    key: 'dataSort',
    defaultValue: covidSorts.confirmed.key,
  },
  dataSortDirection: {
    key: 'dataSortDirection',
    defaultValue: covidSortDirections.desc.key,
  },
};
const populations = {
  "WORLD": 7794798729,
  "Burundi": 11890781,
  "Comoros": 869595,
  "Djibouti": 988002,
  "Eritrea": 3546427,
  "Ethiopia": 114963583,
  "Kenya": 53771300,
  "Madagascar": 27691019,
  "Malawi": 19129955,
  "Mauritius": 1271767,
  "Mayotte": 272813,
  "Mozambique": 31255435,
  "Réunion": 895308,
  "Rwanda": 12952209,
  "Seychelles": 98340,
  "Somalia": 15893219,
  "South Sudan": 11193729,
  "Uganda": 45741000,
  "United Republic of Tanzania": 59734213,
  "Zambia": 18383956,
  "Zimbabwe": 14862927,
  "Angola": 32866268,
  "Cameroon": 26545864,
  "Central African Republic": 4829764,
  "Chad": 16425859,
  "Congo": 5518092,
  "Democratic Republic of the Congo": 89561404,
  "Equatorial Guinea": 1402985,
  "Gabon": 2225728,
  "Sao Tome and Principe": 219161,
  "Botswana": 2351625,
  "Eswatini": 1160164,
  "Lesotho": 2142252,
  "Namibia": 2540916,
  "South Africa": 59308690,
  "Benin": 12123198,
  "Burkina Faso": 20903278,
  "Cabo Verde": 555988,
  "Côte d'Ivoire": 26378275,
  "Gambia": 2416664,
  "Ghana": 31072945,
  "Guinea": 13132792,
  "Guinea-Bissau": 1967998,
  "Liberia": 5057677,
  "Mali": 20250834,
  "Mauritania": 4649660,
  "Niger": 24206636,
  "Nigeria": 206139587,
  "Saint Helena": 6071,
  "Senegal": 16743930,
  "Sierra Leone": 7976985,
  "Togo": 8278737,
  "Algeria": 43851043,
  "Egypt": 102334403,
  "Libya": 6871287,
  "Morocco": 36910558,
  "Sudan": 43849269,
  "Tunisia": 11818618,
  "Western Sahara": 597330,
  "Armenia": 2963234,
  "Azerbaijan": 10139175,
  "Bahrain": 1701583,
  "Cyprus": 1207361,
  "Georgia": 3989175,
  "Iraq": 40222503,
  "Israel": 8655541,
  "Jordan": 10203140,
  "Kuwait": 4270563,
  "Lebanon": 6825442,
  "Oman": 5106622,
  "Qatar": 2881060,
  "Saudi Arabia": 34813867,
  "State of Palestine": 5101416,
  "Syrian Arab Republic": 17500657,
  "Turkey": 84339067,
  "United Arab Emirates": 9890400,
  "Yemen": 29825968,
  "Kazakhstan": 18776707,
  "Kyrgyzstan": 6524191,
  "Tajikistan": 9537642,
  "Turkmenistan": 6031187,
  "Uzbekistan": 33469199,
  "Afghanistan": 38928341,
  "Bangladesh": 164689383,
  "Bhutan": 771612,
  "India": 1380004385,
  "Iran (Islamic Republic of)": 83992953,
  "Maldives": 540542,
  "Nepal": 29136808,
  "Pakistan": 220892331,
  "Sri Lanka": 21413250,
  "China": 1439323774,
  "China, Hong Kong SAR": 7496988,
  "China, Macao SAR": 649342,
  "China, Taiwan Province of China": 23816775,
  "Dem. People's Republic of Korea": 25778815,
  "Japan": 126476458,
  "Mongolia": 3278292,
  "Republic of Korea": 51269183,
  "Brunei": 437483,
  "Cambodia": 16718971,
  "Indonesia": 273523621,
  "Lao People's Democratic Republic": 7275556,
  "Malaysia": 32365998,
  "Burma": 54409794,
  "Philippines": 109581085,
  "Singapore": 5850343,
  "Thailand": 69799978,
  "Timor-Leste": 1318442,
  "Viet Nam": 97338583,
  "Anguilla": 15002,
  "Antigua and Barbuda": 97928,
  "Aruba": 106766,
  "Bahamas": 393248,
  "Barbados": 287371,
  "Bonaire, Sint Eustatius and Saba": 26221,
  "British Virgin Islands": 30237,
  "Cayman Islands": 65720,
  "Cuba": 11326616,
  "Curaçao": 164100,
  "Dominica": 71991,
  "Dominican Republic": 10847904,
  "Grenada": 112519,
  "Guadeloupe": 400127,
  "Haiti": 11402533,
  "Jamaica": 2961161,
  "Martinique": 375265,
  "Montserrat": 4999,
  "Puerto Rico": 2860840,
  "Saint Barthélemy": 9885,
  "Saint Kitts and Nevis": 53192,
  "Saint Lucia": 183629,
  "Saint Martin (French part)": 38659,
  "Saint Vincent and the Grenadines": 110947,
  "Sint Maarten (Dutch part)": 42882,
  "Trinidad and Tobago": 1399491,
  "Turks and Caicos Islands": 38718,
  "United States Virgin Islands": 104423,
  "Belize": 397621,
  "Costa Rica": 5094114,
  "El Salvador": 6486201,
  "Guatemala": 17915567,
  "Honduras": 9904608,
  "Mexico": 128932753,
  "Nicaragua": 6624554,
  "Panama": 4314768,
  "Argentina": 45195777,
  "Bolivia": 11673029,
  "Brazil": 212559409,
  "Chile": 19116209,
  "Colombia": 50882884,
  "Ecuador": 17643060,
  "Falkland Islands (Malvinas)": 3483,
  "French Guiana": 298682,
  "Guyana": 786559,
  "Paraguay": 7132530,
  "Peru": 32971846,
  "Suriname": 586634,
  "Uruguay": 3473727,
  "Venezuela (Bolivarian Republic of)": 28435943,
  "Australia": 25499881,
  "New Zealand": 4822233,
  "Fiji": 896444,
  "New Caledonia": 285491,
  "Papua New Guinea": 8947027,
  "Solomon Islands": 686878,
  "Vanuatu": 307150,
  "Guam": 168783,
  "Kiribati": 119446,
  "Marshall Islands": 59194,
  "Micronesia": 115021,
  "Nauru": 10834,
  "Northern Mariana Islands": 57557,
  "Palau": 18092,
  "American Samoa": 55197,
  "Cook Islands": 17564,
  "French Polynesia": 280904,
  "Niue": 1618,
  "Samoa": 198410,
  "Tokelau": 1350,
  "Tonga": 105697,
  "Tuvalu": 11792,
  "Wallis and Futuna Islands": 11246,
  "Belarus": 9449321,
  "Bulgaria": 6948445,
  "Czechia": 10708982,
  "Hungary": 9660350,
  "Poland": 37846605,
  "Republic of Moldova": 4033963,
  "Romania": 19237682,
  "Russian Federation": 145934460,
  "Slovakia": 5459643,
  "Ukraine": 43733759,
  "Channel Islands": 173859,
  "Denmark": 5792203,
  "Estonia": 1326539,
  "Faroe Islands": 48865,
  "Finland": 5540718,
  "Iceland": 341250,
  "Ireland": 4937796,
  "Isle of Man": 85032,
  "Latvia": 1886202,
  "Lithuania": 2722291,
  "Norway": 5421242,
  "Sweden": 10099270,
  "United Kingdom": 67886004,
  "Albania": 2877800,
  "Andorra": 77265,
  "Bosnia and Herzegovina": 3280815,
  "Croatia": 4105268,
  "Gibraltar": 33691,
  "Greece": 10423056,
  "Holy See": 809,
  "Italy": 60461828,
  "Malta": 441539,
  "Montenegro": 628062,
  "North Macedonia": 2083380,
  "Portugal": 10196707,
  "San Marino": 33938,
  "Serbia": 8737370,
  "Slovenia": 2078932,
  "Spain": 46754783,
  "Austria": 9006400,
  "Belgium": 11589616,
  "France": 65273512,
  "Germany": 83783945,
  "Liechtenstein": 38137,
  "Luxembourg": 625976,
  "Monaco": 39244,
  "Netherlands": 17134873,
  "Switzerland": 8654618,
  "Bermuda": 62273,
  "Canada": 37742157,
  "Greenland": 56772,
  "Saint Pierre and Miquelon": 5795,
  "US": 331002647
}
function loadCovidData() {
  const defaultDataContainer = {
    labels: [],
    ticks: {},
  };
  covidData = Promise
    .all(Object.values(covidDataTypes).filter(item => item.dataSourceUrl != 'math').map(
      dataType => fetch(dataType.dataSourceUrl)
    ))
    .then(responses => Promise.all(
      responses.map(response => response.text())
    ))
    .then(dataTypesTicks => {
      return dataTypesTicks.reduce(
        (dataContainer, dataTypeTicksCSV, dataTypeIndex) => {
          const dataType = Object.keys(covidDataTypes)[dataTypeIndex];
          const dataTypeTicks = Papa.parse(dataTypeTicksCSV).data;
          dataContainer.labels = dataTypeTicks.shift();
          dataContainer.ticks[dataType] = dataTypeTicks
            .filter(regionTicks => {
              return regionTicks.length === dataContainer.labels.length;
            })
            .map(regionTicks => {
              return regionTicks.map((regionTick, tickIndex) => {
                if (tickIndex < covidSchema.dateStartColumn) {
                  return regionTick;
                }
                if (!regionTick) {
                  return 0;
                }
                return parseInt(regionTick, 10);
              });
            })
            .sort((regionTicksA, regionTicksB) => {
              const regionNameA = getRegionKey(regionTicksA);
              const regionNameB = getRegionKey(regionTicksB);
              if (regionNameA > regionNameB) {
                return 1;
              } else if (regionNameA < regionNameB) {
                return -1;
              }
              return 0;
            });
          return dataContainer;
        },
        defaultDataContainer
      );
    })
    .then(data => {
      data.ticks.active = []
      // data.ticks.cfr = [] // case fatality rate
      // data.ticks.confirmedPC = [] // confirmed cases per capita
      // data.ticks.activePC = [] // active cases per capita
      // data.ticks.deathsPC = [] // deaths per capita
      // data.ticks.recovsPC = [] // recoveries per capita
      // data.ticks.estFromDeathsRecovs = [];  // estimated total infected based on deaths
      // data.ticks.estFromDeathsRecovsPC = []; // estimated total infected per capita based on deaths
      data.ticks.confirmed.forEach(tick => {
        const header = [tick[0],tick[1],tick[2],tick[3]];
        console.log(header[1])
        let activeTick = header;
        // let cfrTick = header; 
        // let cpcTick = header;
        // let apcTick = header;
        // let dpcTick = header;
        // let rpcTick = header;
        // let efdTick = header;
        // let efdpcTick = header;
        const deaths = data.ticks.deaths.filter(deathData => deathData[0]+deathData[1] == header[0]+header[1])[0];
        const recovs = data.ticks.recovered.filter(recoveredData => recoveredData[0]+recoveredData[1] == header[0]+header[1])[0];
        const population = populations[header[1]]
        console.log(header[1],population)
        for (let i = 4; i < tick.length; i++) {
          var deathsi = 0;
          if (deaths) deathsi = deaths[i];
          var recovsi = 0;
          if (recovs) recovsi = recovs[i];
          var confirmedi = tick[i];
          activeTick[i] = confirmedi - deathsi - recovsi;
          // cfrTick[i] = deathsi / confirmedi
          // cpcTick[i] = confirmedi / population
          // apcTick[i] = activeTick[i] / population
          // dpcTick[i] = deathsi / population
          // rpcTick[i] = recovsi / population
          // efdTick[i] = (deaths[i + 21] + recovs[i + 21]) * 100 // assumes 1% mortality rate
          // efdpcTick[i] = efdTick[i] / population
        }
        data.ticks.active.push(activeTick)
        // data.ticks.cfr.push(cfrTick)
        // data.ticks.confirmedPC.push(cpcTick)
        // data.ticks.activePC.push(apcTick)
        // data.ticks.deathsPC.push(dpcTick)
        // data.ticks.recovsPC.push(rpcTick)
        // data.ticks.estFromDeathsRecovs.push(efdTick)
        // data.ticks.estFromDeathsRecovsPC.push(efdpcTick)
      })
      return data;
    });
    return covidData;
}

function getRegionKey(regionTicks) {
  if (!regionTicks || !regionTicks.length) {
    return null;
  }
  const country = regionTicks[covidSchema.countryColumn];
  const state = regionTicks[covidSchema.stateColumn];
  return state ? `${country} - ${state}` : `${country}`;
}

function getRegionIndexByKey(covidData, dataTypeKey, regionKey) {
  return covidData.ticks[dataTypeKey].findIndex(
    regionTicks => getRegionKey(regionTicks) === regionKey
  );
}

function getRegionByKey(covidData, dataTypeKey, regionKey) {
  const regionIndex = getRegionIndexByKey(covidData, dataTypeKey, regionKey);
  return covidData.ticks[dataTypeKey][regionIndex];
}

function getGlobalTicks(covidData, dataTypeKey) {
  const totalTicks = covidData.ticks[dataTypeKey][0].length;
  const globalTicks = new Array(totalTicks).fill(0);
  globalTicks[covidSchema.stateColumn] = '';
  globalTicks[covidSchema.countryColumn] = covidCountries.all.title;
  globalTicks[covidSchema.latColumn] = '';
  globalTicks[covidSchema.lonColumn] = '';
  covidData.ticks[dataTypeKey].forEach(regionTicks => {
    regionTicks.forEach((regionTick, tickIndex) => {
      if (tickIndex < covidSchema.dateStartColumn) {
        return;
      }
      globalTicks[tickIndex] += regionTick;
    });
  });
  return globalTicks;
}

function getTotalCount(covidData, dataTypeKey, regionKeys) {
  if (regionKeys.includes(covidCountries.all.key)) {
    const globalTicks = getGlobalTicks(covidData, dataTypeKey);
    return globalTicks[globalTicks.length - 1];
  }
  return regionKeys.reduce((total, regionKey) => {
    const regionTicks = getRegionByKey(covidData, dataTypeKey, regionKey);
    total += regionTicks[regionTicks.length - 1];
    return total;
  }, 0);
}

function searchRegionTicks(covidData, dataTypeKey, regionKey) {
  if (!regionKey) {
    return null;
  }
  const regionsTicks = covidData.ticks[dataTypeKey];
  return regionsTicks.find((regionTicks) => getRegionKey(regionTicks) === regionKey);
}

function getCovidRegions(covidData) {
  return covidData.ticks[covidDataTypes.confirmed.key]
    .map((regionTicks, regionIndex) => {
      const key = getRegionKey(regionTicks);
      const numbers = {};
      Object.values(covidDataTypes).forEach((covidDataType) => {
        const regionTicksOfType = covidData.ticks[covidDataType.key][regionIndex];
        const regionKeyOfType = getRegionKey(regionTicksOfType);
        if (regionTicksOfType && regionTicksOfType.length === regionTicks.length && regionKeyOfType && regionKeyOfType === key) {
          numbers[covidDataType.key] = regionTicksOfType[regionTicksOfType.length - 1];
        } else {
          const foundRegionTicks = searchRegionTicks(covidData, covidDataType.key, key);
          if (foundRegionTicks && foundRegionTicks.length === regionTicks.length) {
            numbers[covidDataType.key] = foundRegionTicks[foundRegionTicks.length - 1];
          } else {
            numbers[covidDataType.key] = -1;
          }
        }
      });
      return {key, numbers};
    });
}

function getLastUpdatedDate(covidData) {
  const dateLabel = covidData.labels[covidData.labels.length - 1];
  return formatDateLabel(dateLabel);
}

function formatDateLabel(dateLabel) {
  const date = new Date(dateLabel);
  const options = {year: 'numeric', month: 'short', day: '2-digit'};
  return date.toLocaleDateString('en-US', options);
}

function groupCovidDataByCountries(covidData) {
  const covidDataByCountries = {
    labels: [],
    ticks: {},
  };
  covidDataByCountries.labels = [...covidData.labels];
  Object.values(covidDataTypes).forEach((covidDataType) => {
    covidDataByCountries.ticks[covidDataType.key] = Object.values(covidData.ticks[covidDataType.key]
      .reduce((countriesTicksMap, regionTicks) => {
        const countryName = regionTicks[covidSchema.countryColumn];
        if (!countriesTicksMap[countryName]) {
          countriesTicksMap[countryName] = [...regionTicks];
          countriesTicksMap[countryName][covidSchema.stateColumn] = '';
          return countriesTicksMap;
        }
        for (let columnIndex = covidSchema.dateStartColumn; columnIndex < regionTicks.length; columnIndex += 1) {
          countriesTicksMap[countryName][columnIndex] += regionTicks[columnIndex];
        }
        return countriesTicksMap;
      }, {}));
  });
  return covidDataByCountries;
}

function filterToUrl(filterKey, filterValue) {
  try {
    const url = new URL(document.location);
    url.searchParams.set(filterKey, JSON.stringify(filterValue));
    history.pushState(null, null, url.href);
  } catch (e) {
    console.error('Cannot send filters to URL');
  }
}

function filtersFromUrl() {
  const filtersInUrl = {};
  try {
    const url = new URL(document.location);
    Object.values(covidFilters).forEach((covidFilter) => {
      if (url.searchParams.has(covidFilter.key)) {
        filtersInUrl[covidFilter.key] = JSON.parse(
          url.searchParams.get(covidFilter.key)
        );
      }
    });
  } catch (e) {
    console.error('Cannot fetch filters from URL');
  }
  return filtersInUrl;
}

function deleteFiltersFromUrl() {
  try {
    const url = new URL(document.location);
    Object.values(covidFilters).forEach((covidFilter) => {
      url.searchParams.delete(covidFilter.key);
    });
    history.pushState(null, null, url.href);
  } catch (e) {
    console.error('Cannot delete filters from URL');
  }
}
