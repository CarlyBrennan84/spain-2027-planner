/* ============ Spain 2027 Travel Planner ============ */

const NAV = [
  {id:'overview', label:'Overview', icon:'🏠'},
  {id:'itinerary', label:'Daily Itinerary', icon:'📅'},
  {id:'accommodation', label:'Accommodation', icon:'🏨'},
  {id:'transport', label:'Transport', icon:'✈️'},
  {id:'food', label:'Food & Drinks', icon:'🍷'},
  {id:'experiences', label:'Experiences', icon:'🏖️'},
  {id:'budget', label:'Budget', icon:'💰'},
  {id:'packing', label:'Packing', icon:'🧳'},
  {id:'maps', label:'Maps', icon:'📍'},
  {id:'tracker', label:'Booking Tracker', icon:'✓'},
];

const TRIP = {
  start: '2027-03-27T16:25:00',
  arrivalNote: 'Flight 1: Melbourne (MEL) → Madrid (MAD), departs 22:35 Fri 26 March, arrives 16:25 Sat 27 March (27h 50m, Economy). First evening kept easy: dinner and drinks only.',
  end: '2027-04-09T07:35:00',
  flightHomeNote: 'Flight 2: Barcelona (BCN) → Melbourne (MEL), departs 07:35 Fri 9 April, arrives 20:40 Sat 10 April (28h 5m, Economy).',
  nights: 13,
  travelers: 2,
  from: 'Australia'
};

const CITIES = [
  {
    id:'madrid', name:'Madrid', color:'#BF5B3E', short:'MAD',
    dateRange:'27–31 March', nights:4,
    coords:{x:236.2,y:145.9},
    accommodation:{
      name:'Gran Vía Airbnb', type:'Airbnb, Gran Vía', cost:877, status:'Reserved',
      paymentDue:'17 February 2027', cancellation:'Free cancellation', breakfast:false,
      mapsQuery:'Gran Via Madrid Spain'
    },
    want:['Architecture','Markets','Rooftop bars','Tapas','Wine','Coffee','Photography'],
    note:'One day trip to Toledo.'
  },
  {
    id:'valencia', name:'Valencia', color:'#6B7355', short:'VLC',
    dateRange:'31 March – 2 April', nights:2,
    coords:{x:358.2,y:180.6},
    accommodation:{
      name:'Caro Hotel', type:'Boutique hotel, Old Town', cost:754, status:'Booked',
      paymentDue:'Already paid', cancellation:'Free cancellation until 27 March 2027', breakfast:false,
      mapsQuery:'Caro Hotel Valencia Spain'
    },
    want:['Paella','Old town','Markets','Cocktails','Beautiful streets']
  },
  {
    id:'mallorca', name:'Mallorca (Sóller)', color:'#C9A15A', short:'PMI',
    dateRange:'2–6 April', nights:4,
    coords:{x:469.2,y:177.0},
    accommodation:{
      name:'Alcázar Hotel Sóller', type:'Deluxe Room · Breakfast included · Flexible rate', cost:1290.76, status:'Reserved',
      paymentDue:'—', cancellation:'Free cancellation until 30 March 2027', breakfast:true,
      mapsQuery:'Alcazar Hotel Soller Mallorca Spain'
    },
    want:['Boutique luxury','Beaches','Hidden coves','Scenic drives','Wineries','Boat trip','Cafés','Photography','Mountain villages'],
    need:['Car hire']
  },
  {
    id:'barcelona', name:'Barcelona', color:'#1F2A3C', short:'BCN',
    dateRange:'6–9 April', nights:3,
    coords:{x:451.7,y:110.4},
    accommodation:{
      name:'Ohla Eixample', type:'Design Room · Full buffet breakfast included · Luxury Escapes', cost:1339, status:'Booked & Paid',
      paymentDue:'Paid via Luxury Escapes', cancellation:'—', breakfast:true,
      mapsQuery:'Ohla Eixample Barcelona Spain'
    },
    want:['Gothic Quarter','Rooftop bars','Cocktails','Tapas','Architecture','Final luxury dinner']
  },
];

const WEATHER = [
  {city:'Madrid', temp:'9–18°C', desc:'Crisp mornings, mild afternoons'},
  {city:'Valencia', temp:'11–19°C', desc:'Sunny, coastal breeze'},
  {city:'Mallorca', temp:'12–19°C', desc:'Mild, good for drives & coast'},
  {city:'Barcelona', temp:'11–17°C', desc:'Mild, some spring showers'},
];

/* ---------- Daily itinerary (27 Mar – 9 Apr) ---------- */
const DAYS = [
  {date:'Sat 27 Mar', city:'madrid', title:'Arrival — easy first night', breakfast:'No', morning:'Flight arrival ~4:25pm from Melbourne', lunch:'Light bite near apartment', afternoon:'Settle in, short stroll around Gran Vía', dinner:'Relaxed local dinner', cocktail:'Easy first night — no late plans', travelTime:'Airport transfer to apartment', walkingRoute:'Short', estCost:'$150', booking:'No', photoSpots:'Gran Vía at dusk, Metropolis Building', notes:''},
  {date:'Sun 28 Mar', city:'madrid', title:'Retiro Park & fine dining', breakfast:'No', morning:'Retiro Park, Royal Palace', lunch:'Tapas near Plaza Mayor', afternoon:'Puerta del Sol, Literary Quarter, Mercado de San Miguel', dinner:'Memorable fine dining dinner', cocktail:'Cocktail bar / rooftop', travelTime:'Walking + Metro', walkingRoute:'Moderate', estCost:'$220', booking:'Fine dining — yes', photoSpots:'Palacio Real courtyard, Retiro glass palace', notes:''},
  {date:'Mon 29 Mar', city:'madrid', title:'Toledo day trip', breakfast:'No', morning:'Morning train to Toledo, Historic Centre, Cathedral', lunch:'Lunch in Toledo', afternoon:'Alcázar, Jewish Quarter, Miradors', dinner:'Return to Madrid, dinner in Madrid', cocktail:'Malasaña wine bar', travelTime:'Train Madrid–Toledo return', walkingRoute:'Moderate', estCost:'$140', booking:'Train tickets — yes', photoSpots:'Toledo skyline from Mirador del Valle', notes:''},
  {date:'Tue 30 Mar', city:'madrid', title:'Chueca & photography', breakfast:'No', morning:'Relaxed morning coffee, Chueca laneways', lunch:'Market lunch', afternoon:'Architecture & photography walk, boutique shopping', dinner:'Excellent tapas crawl', cocktail:'Hidden cocktail bar', travelTime:'Walking + Metro', walkingRoute:'Moderate', estCost:'$180', booking:'No', photoSpots:'Chueca laneways, street art', notes:''},
  {date:'Wed 31 Mar', city:'madrid→valencia', title:'Travel day — on to Valencia', breakfast:'No', morning:'Check out, travel to Valencia', lunch:'Lunch en route / on arrival', afternoon:'Check in, explore Historic Centre', dinner:'Paella dinner', cocktail:'Sunset drinks', travelTime:'Train Madrid–Valencia', walkingRoute:'Short', estCost:'$160', booking:'No', photoSpots:'Torres de Serranos at golden hour', notes:''},
  {date:'Thu 1 Apr', city:'valencia', title:'Old town & markets', breakfast:'No', morning:'Central Market, Cathedral, Plaza de la Virgen', lunch:'Seafood lunch', afternoon:'Turia Gardens, relaxed walking', dinner:'Tapas & local wine', cocktail:'Cocktail bar', travelTime:'Walking', walkingRoute:'Moderate', estCost:'$200', booking:'No', photoSpots:'City of Arts and Sciences reflections', notes:''},
  {date:'Fri 2 Apr', city:'valencia→mallorca', title:'Travel day — fly to Mallorca', breakfast:'Yes (Alcázar Hotel Sóller)', morning:'Check out, flight/ferry to Mallorca, collect rental car', lunch:'Light lunch en route', afternoon:'Check in, explore Sóller & Port de Sóller, beach', dinner:'Seafood dinner', cocktail:'Cocktails at sunset, Port de Sóller', travelTime:'Rental car pick-up', walkingRoute:'Short', estCost:'$260', booking:'Rental car — yes', photoSpots:'Sóller wooden tram, Plaça de la Constitució', notes:''},
  {date:'Sat 3 Apr', city:'mallorca', title:'Serra de Tramuntana drive', breakfast:'Yes (Alcázar Hotel Sóller)', morning:'Drive Serra de Tramuntana, Deià', lunch:'Long lunch in Deià or Valldemossa', afternoon:'Valldemossa, scenic viewpoints, photography', dinner:'Dinner in Sóller', cocktail:'Beautiful café / relaxed evening', travelTime:'Self-drive', walkingRoute:'Moderate', estCost:'$190', booking:'No', photoSpots:'Cala Deià cliffs, Tramuntana mountain road', notes:''},
  {date:'Sun 4 Apr', city:'mallorca', title:'Hidden beaches & coves', breakfast:'Yes (Alcázar Hotel Sóller)', morning:'Drive towards Cala d\'Or', lunch:'Lunch at a hidden cove', afternoon:'Swimming, hidden beaches, photography', dinner:'Return via countryside, dinner in Sóller', cocktail:'Relaxed evening', travelTime:'Self-drive', walkingRoute:'Long (driving)', estCost:'$190', booking:'No', photoSpots:'Coastline from the water, hidden coves', notes:''},
  {date:'Mon 5 Apr', city:'mallorca', title:'Fornalutx & local markets', breakfast:'Yes (Alcázar Hotel Sóller)', morning:'Fornalutx, local markets (if operating)', lunch:'Coffee & bakery', afternoon:'Relaxed afternoon', dinner:'Dinner at Port de Sóller', cocktail:'Sunset drinks', travelTime:'Short local drive', walkingRoute:'Short', estCost:'$170', booking:'No', photoSpots:'Fornalutx stone lanes and orange trees', notes:''},
  {date:'Tue 6 Apr', city:'mallorca→barcelona', title:'Travel day — on to Barcelona', breakfast:'Yes (Ohla Barcelona)', morning:'Check out, return rental car, flight to Barcelona', lunch:'Light lunch en route', afternoon:'Check in, Gothic Quarter', dinner:'Tapas dinner, El Born', cocktail:'Rooftop bar', travelTime:'Flight Palma–Barcelona', walkingRoute:'Short', estCost:'$240', booking:'Flight — yes', photoSpots:'Gothic Quarter laneways at dusk', notes:''},
  {date:'Wed 7 Apr', city:'barcelona', title:'Sagrada Família & Gràcia', breakfast:'Yes (Ohla Barcelona)', morning:'Sagrada Família, Passeig de Gràcia', lunch:'Market lunch', afternoon:'Architecture & photography walk', dinner:'Great tapas', cocktail:'Hidden bar', travelTime:'Walking + Metro', walkingRoute:'Moderate', estCost:'$210', booking:'Sagrada Família — yes', photoSpots:'Sagrada Família towers, Park Güell mosaic terrace', notes:''},
  {date:'Thu 8 Apr', city:'barcelona', title:'Final luxury day', breakfast:'Yes (Ohla Barcelona)', morning:'Relaxed morning, boutique shopping', lunch:'Lunch in El Born', afternoon:'Markets, hidden bars', dinner:'Farewell dinner', cocktail:'Rooftop cocktails', travelTime:'Walking + Metro', walkingRoute:'Moderate', estCost:'$260', booking:'Farewell dinner — yes', photoSpots:'Casa Batlló façade, Barceloneta sunset', notes:''},
  {date:'Fri 9 Apr', city:'barcelona', title:'Flight home', breakfast:'Yes (Ohla Barcelona)', morning:'Check out, final coffee', lunch:'Airport lunch', afternoon:'Airport transfer, flight departs for Melbourne', dinner:'—', cocktail:'—', travelTime:'Airport transfer', walkingRoute:'Short', estCost:'$60', booking:'No', photoSpots:'—', notes:''},
];

/* ---------- Food guide ---------- */
const FOOD = {
  madrid:{
    Breakfast:[{name:'Chocolatería San Ginés', cuisine:'Churros & chocolate', price:'$', mapsQuery:'Chocolateria San Gines Madrid'}],
    Coffee:[{name:'Toma Café', cuisine:'Specialty coffee', price:'$', mapsQuery:'Toma Cafe Madrid'}],
    Tapas:[{name:'Casa Lucio', cuisine:'Classic Madrid tapas', price:'$$$', mapsQuery:'Casa Lucio Madrid', reservation:true},{name:'Mercado de San Miguel', cuisine:'Market grazing', price:'$$', mapsQuery:'Mercado de San Miguel Madrid'}],
    'Wine Bars':[{name:'Vinos y Otras Cosas', cuisine:'Natural wine', price:'$$', mapsQuery:'vermuteria Madrid Malasana'}],
    'Cocktail Bars':[{name:'Salmón Guru', cuisine:'Cocktail bar', price:'$$$', mapsQuery:'Salmon Guru Madrid', reservation:true},{name:'Picalagartos Sky Bar', cuisine:'Rooftop', price:'$$$', mapsQuery:'Picalagartos Sky Bar Madrid'}],
    'Fine Dining':[{name:'DiverXO', cuisine:'3-Michelin-star', price:'$$$$', mapsQuery:'DiverXO Madrid', reservation:true}],
    Markets:[{name:'Mercado de San Antón', cuisine:'Food market', price:'$$', mapsQuery:'Mercado de San Anton Madrid'}],
    'Local Favourites':[{name:'La Latina tapas crawl', cuisine:'Bar-hopping', price:'$$', mapsQuery:'Cava Baja Madrid'}],
  },
  valencia:{
    Breakfast:[{name:'Horchatería Santa Catalina', cuisine:'Horchata & fartons', price:'$', mapsQuery:'Horchateria Santa Catalina Valencia'}],
    Coffee:[{name:'Café de las Horas', cuisine:'Ornate café', price:'$$', mapsQuery:'Cafe de las Horas Valencia'}],
    Tapas:[{name:'Central Bar (Mercado Central)', cuisine:'Market tapas', price:'$', mapsQuery:'Central Bar Mercado Central Valencia'}],
    'Wine Bars':[{name:'Barrio del Carmen wine bars', cuisine:'Natural wine', price:'$$', mapsQuery:'wine bar Barrio del Carmen Valencia'}],
    'Cocktail Bars':[{name:'Ubik Café', cuisine:'Cocktails & books', price:'$$', mapsQuery:'Ubik Cafe Valencia'}],
    'Fine Dining':[{name:'Ricard Camarena', cuisine:'1-Michelin-star', price:'$$$$', mapsQuery:'Ricard Camarena Restaurant Valencia', reservation:true}],
    Markets:[{name:'Mercado Central', cuisine:'Food market', price:'$$', mapsQuery:'Mercado Central Valencia'}],
    'Local Favourites':[{name:'Casa Carmela', cuisine:'Traditional paella (wood-fired)', price:'$$$', mapsQuery:'Casa Carmela Valencia', reservation:true}],
  },
  mallorca:{
    Breakfast:[{name:'Café Sóller square', cuisine:'Local café', price:'$', mapsQuery:'cafe Placa Constitucio Soller'}],
    Coffee:[{name:'Port de Sóller cafés', cuisine:'Seafront coffee', price:'$', mapsQuery:'cafe Port de Soller'}],
    Tapas:[{name:'Sóller old town tapas bars', cuisine:'Mallorcan tapas', price:'$$', mapsQuery:'tapas Soller Mallorca'}],
    'Wine Bars':[{name:'Local Mallorcan bodega', cuisine:'Wine tasting', price:'$$', mapsQuery:'winery near Soller Mallorca'}],
    'Cocktail Bars':[{name:'Port de Sóller marina bar', cuisine:'Sunset cocktails', price:'$$', mapsQuery:'bar Port de Soller marina'}],
    'Fine Dining':[{name:'Restaurant in Deià', cuisine:'Mediterranean fine dining', price:'$$$$', mapsQuery:'restaurant Deia Mallorca', reservation:true}],
    Markets:[{name:'Sóller Saturday market', cuisine:'Local produce', price:'$', mapsQuery:'Soller market'}],
    'Local Favourites':[{name:'Fornalutx village café', cuisine:'Mountain village fare', price:'$$', mapsQuery:'cafe Fornalutx'}],
  },
  barcelona:{
    Breakfast:[{name:'Café in El Born', cuisine:'Pastries & coffee', price:'$', mapsQuery:'cafe El Born Barcelona'}],
    Coffee:[{name:'Nomad Coffee', cuisine:'Specialty coffee', price:'$', mapsQuery:'Nomad Coffee Barcelona'}],
    Tapas:[{name:'El Xampanyet', cuisine:'Classic tapas & cava', price:'$$', mapsQuery:'El Xampanyet Barcelona'}],
    'Wine Bars':[{name:'El Born wine bars', cuisine:'Natural wine', price:'$$', mapsQuery:'wine bar El Born Barcelona'}],
    'Cocktail Bars':[{name:'Paradiso', cuisine:'Speakeasy cocktail bar', price:'$$$', mapsQuery:'Paradiso Barcelona', reservation:true},{name:'Rooftop near Sagrada Família', cuisine:'Rooftop views', price:'$$$', mapsQuery:'rooftop bar near Sagrada Familia'}],
    'Fine Dining':[{name:'Final luxury dinner spot (TBC)', cuisine:'Fine dining', price:'$$$$', mapsQuery:'fine dining restaurant Barcelona', reservation:true}],
    Markets:[{name:'La Boqueria', cuisine:'Iconic food market', price:'$$', mapsQuery:'La Boqueria Barcelona'}],
    'Local Favourites':[{name:'Gothic Quarter tapas crawl', cuisine:'Bar-hopping', price:'$$', mapsQuery:'tapas Gothic Quarter Barcelona'}],
  },
};

/* ---------- Experiences ---------- */
const EXPERIENCES = [
  {city:'mallorca', title:'Boat trip along the Tramuntana coast', tag:'Boat trip', desc:'Half or full day on the water, hidden coves accessible only by boat.', mapsQuery:'boat trip Port de Soller'},
  {city:'mallorca', title:'Cala Deià & Sa Calobra', tag:'Hidden beaches', desc:'Two of the most photogenic coves on the northwest coast.', mapsQuery:'Cala Deia Mallorca'},
  {city:'mallorca', title:'Wine tasting inland', tag:'Wine tasting', desc:'Mallorcan varietals at a family-run bodega.', mapsQuery:'winery Mallorca wine tasting'},
  {city:'mallorca', title:'Fornalutx & Biniaraix', tag:'Mountain villages', desc:'Stone-lane villages, widely considered among Spain\'s prettiest.', mapsQuery:'Fornalutx Mallorca'},
  {city:'mallorca', title:'Car route: Sóller → Deià → Valldemossa', tag:'Scenic drive', desc:'The classic Tramuntana coast road — allow a full day with stops.', mapsQuery:'Ma-10 coastal road Mallorca'},
  {city:'madrid', title:'Toledo day trip', tag:'Day trip', desc:'UNESCO old town, cathedral, and Alcázar viewpoint, 30 min by train.', mapsQuery:'Toledo Spain'},
  {city:'madrid', title:'Mercado de San Miguel', tag:'Markets', desc:'Glass-walled market, great for a grazing lunch.', mapsQuery:'Mercado de San Miguel'},
  {city:'madrid', title:'Museo del Prado', tag:'Museums', desc:'World-class art museum — book timed entry.', mapsQuery:'Museo del Prado'},
  {city:'valencia', title:'City of Arts and Sciences', tag:'Museums', desc:'Futurist architecture by Santiago Calatrava.', mapsQuery:'Ciudad de las Artes y las Ciencias Valencia'},
  {city:'valencia', title:'Turia Gardens walking route', tag:'Walking tour', desc:'A former riverbed turned 9km park — walk or hire bikes.', mapsQuery:'Jardin del Turia Valencia'},
  {city:'barcelona', title:'Park Güell sunset', tag:'Sunset location', desc:'Gaudí\'s mosaic park — arrive late afternoon for the light.', mapsQuery:'Park Guell Barcelona'},
  {city:'barcelona', title:'Barceloneta beach club', tag:'Beach clubs', desc:'Relaxed final beach afternoon before flying home.', mapsQuery:'beach club Barceloneta'},
  {city:'barcelona', title:'La Boqueria market', tag:'Markets', desc:'Iconic market just off Las Ramblas.', mapsQuery:'La Boqueria market Barcelona'},
];

/* ---------- Booking tracker (default items) ---------- */
const TRACKER_DEFAULTS = [
  {id:'acc-madrid', group:'Accommodation', label:'Madrid — Gran Vía Airbnb', done:true, note:'Reserved · due 17 Feb 2027'},
  {id:'acc-valencia', group:'Accommodation', label:'Valencia — Caro Hotel', done:true, note:'Booked & paid'},
  {id:'acc-mallorca', group:'Accommodation', label:'Mallorca — Alcázar Hotel Sóller', done:true, note:'Reserved, flexible rate'},
  {id:'acc-barcelona', group:'Accommodation', label:'Barcelona — Airbnb', done:true, note:'Reserved'},
  {id:'flights-intl', group:'Flights', label:'International flights (MEL ⇄ MAD / BCN)', done:true, note:'MEL→MAD 26–27 Mar; BCN→MEL 9–10 Apr, both Economy'},
  {id:'flights-vlc-pmi', group:'Flights', label:'Valencia → Mallorca flight', done:false, note:''},
  {id:'flights-pmi-bcn', group:'Flights', label:'Mallorca → Barcelona flight', done:false, note:''},
  {id:'train-toledo', group:'Train Tickets', label:'Madrid ⇄ Toledo (Renfe)', done:false, note:''},
  {id:'train-mad-vlc', group:'Train Tickets', label:'Madrid → Valencia (AVE)', done:false, note:''},
  {id:'car-mallorca', group:'Car Hire', label:'Mallorca car hire (Sóller pickup)', done:false, note:''},
  {id:'rest-toledo', group:'Restaurant Bookings', label:'Toledo lunch', done:false, note:''},
  {id:'rest-paella', group:'Restaurant Bookings', label:'Valencia — Casa Carmela paella', done:false, note:''},
  {id:'rest-final', group:'Restaurant Bookings', label:'Barcelona — final luxury dinner', done:false, note:''},
  {id:'attr-sagrada', group:'Attractions', label:'Sagrada Família timed entry', done:false, note:''},
  {id:'attr-prado', group:'Attractions', label:'Museo del Prado timed entry', done:false, note:''},
  {id:'attr-boat', group:'Attractions', label:'Mallorca boat trip', done:false, note:''},
  {id:'attr-wine', group:'Attractions', label:'Mallorca wine tasting', done:false, note:''},
  {id:'insurance', group:'Travel Insurance', label:'Travel insurance — both travellers', done:false, note:''},
  {id:'esim', group:'ESIM', label:'ESIM / data plan for Spain', done:false, note:''},
  {id:'packing', group:'Packing', label:'Packing complete', done:false, note:''},
  {id:'passport', group:'Passport', label:'Passports valid 6+ months past return', done:false, note:''},
];

/* ---------- Packing (default items) ---------- */
const PACKING_DEFAULTS = {
  Documents:['Passports','Travel insurance confirmation','Flight & train confirmations','Hotel confirmations','Driver\'s licence (for Mallorca car hire)','Copies of documents (digital + printed)'],
  Clothing:['Layers for cool Madrid mornings','Comfortable walking shoes','One smart outfit — final Barcelona dinner','Light jacket','Scarf'],
  'Beach Gear':['Swimwear','Sarong / cover-up','Reef-safe sunscreen','Sandals'],
  Electronics:['Phone + charger','Camera + spare batteries','EU power adapter','Power bank','Headphones'],
  Medication:['Regular prescriptions (enough for 13 nights + buffer)','Basic first aid kit','Travel sickness tablets (car hire drives)'],
  'Travel Accessories':['Daypack for walking days','Reusable water bottle','Packing cubes','Universal sink plug','Sunglasses'],
};

/* ============ STATE ============ */
const STORAGE_KEY = 'spain2027_state_v1';

function defaultState(){
  const tracker = {};
  TRACKER_DEFAULTS.forEach(t => tracker[t.id] = {done:t.done, note:t.note});

  const packing = {};
  Object.entries(PACKING_DEFAULTS).forEach(([cat, items]) => {
    packing[cat] = items.map(name => ({name, done:false}));
  });

  const budget = [
    {cat:'Accommodation', est: CITIES.reduce((s,c)=>s+c.accommodation.cost,0), actual:0, deposit:0, notes:'Auto-totalled from accommodation'},
    {cat:'Flights (International)', est:0, actual:0, deposit:0, notes:''},
    {cat:'Flights (Internal)',      est:0, actual:0, deposit:0, notes:''},
    {cat:'Trains',        est:0, actual:0, deposit:0, notes:''},
    {cat:'Car Hire',      est:0, actual:0, deposit:0, notes:''},
    {cat:'Restaurants',   est:0, actual:0, deposit:0, notes:''},
    {cat:'Experiences',   est:0, actual:0, deposit:0, notes:''},
    {cat:'Shopping',      est:0, actual:0, deposit:0, notes:''},
    {cat:'Miscellaneous', est:0, actual:0, deposit:0, notes:''},
  ];

  const dayNotes = DAYS.map(() => '');
  const hotelNotes = {}; const hotelRating = {}; const hotelPhotos = {};
  CITIES.forEach(c => { hotelNotes[c.id]=''; hotelRating[c.id]=0; hotelPhotos[c.id]=[]; });

  return {
    theme:'light',
    totalBudget: 10000,
    tracker, packing, budget, dayNotes, hotelNotes, hotelRating, hotelPhotos,
    openDay: 0,
  };
}

let STATE = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const saved = JSON.parse(raw);
    // migrate: add actual/deposit fields if missing
    if(saved.budget && saved.budget.length && saved.budget[0] && !('actual' in saved.budget[0])){
      saved.budget = saved.budget.map(b=>({...b, actual:0, deposit:0}));
    }
    if(saved.budget && saved.budget.length && saved.budget[0] && !('deposit' in saved.budget[0])){
      saved.budget = saved.budget.map(b=>({...b, deposit: b.paid ? Number(b.est||0) : 0}));
    }
    // migrate: flatten items-based format back to flat rows
    if(saved.budget && saved.budget.length && saved.budget[0] && 'items' in saved.budget[0]){
      saved.budget = saved.budget.map(b=>({
        cat: b.cat,
        est: b.items ? b.items.reduce((s,it)=>s+Number(it.est||0),0) : 0,
        actual: b.items ? b.items.reduce((s,it)=>s+Number(it.actual||0),0) : 0,
        paid: b.items ? b.items.every(it=>it.paid) : false,
        notes: b.items && b.items[0] ? b.items[0].notes : '',
      }));
    }
    const base = defaultState();
    return deepMerge(base, saved);
  }catch(e){ return defaultState(); }
}
function deepMerge(base, override){
  if(Array.isArray(base)){
    // Trust saved data for arrays (lets lists grow — added packing items, uploaded photos, etc.)
    return Array.isArray(override) ? override : base;
  }
  if(typeof base === 'object' && base !== null){
    const out = {...base};
    if(override && typeof override === 'object'){
      Object.keys(override).forEach(k => {
        out[k] = k in base ? deepMerge(base[k], override[k]) : override[k];
      });
    }
    return out;
  }
  return override !== undefined ? override : base;
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._tm);
  toast._tm = setTimeout(()=>t.classList.remove('show'), 1800);
}

/* ============ HELPERS ============ */
function mapsUrl(query){ return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query); }
function fmtMoney(n){ return 'A$' + Number(n||0).toLocaleString('en-AU', {minimumFractionDigits:2, maximumFractionDigits:2}); }
function cityById(id){ return CITIES.find(c=>c.id===id); }

/* ============ NAV / ROUTING ============ */
function currentRoute(){
  const h = location.hash.replace('#','');
  return NAV.find(n=>n.id===h) ? h : 'overview';
}
function renderNav(){
  const route = currentRoute();
  const buildLinks = () => NAV.map(n => `
    <button class="navlink ${n.id===route?'active':''}" data-nav="${n.id}">
      <span class="ic">${n.icon}</span><span>${n.label}</span>
    </button>`).join('');

  document.getElementById('sidebar').innerHTML = `
    <div class="brand">
      <div class="eyebrow">Spain</div>
      <h1>2027 Journey</h1>
      <div class="dates">27 Mar – 9 Apr · 13 nights · 2 travellers</div>
    </div>
    ${buildLinks()}
    <div class="sidebar-foot">
      <button class="theme-toggle" id="themeToggle">
        <span>${STATE.theme==='dark'?'Dark mode':'Light mode'}</span>
        <span class="switch"></span>
      </button>
      <div class="io-row">
        <button class="iobtn" id="exportBtn">⤓ Export</button>
        <button class="iobtn" id="importBtn">⤒ Import</button>
      </div>
      <input type="file" id="importFile" accept="application/json" style="display:none" />
    </div>
  `;
  document.getElementById('mobileTabs').innerHTML = buildLinks();

  document.querySelectorAll('[data-nav]').forEach(el=>{
    el.addEventListener('click', ()=>{ location.hash = el.dataset.nav; });
  });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('exportBtn').addEventListener('click', exportData);
  document.getElementById('importBtn').addEventListener('click', ()=>document.getElementById('importFile').click());
  document.getElementById('importFile').addEventListener('change', importData);
}

function toggleTheme(){
  STATE.theme = STATE.theme==='dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', STATE.theme);
  saveState();
  renderNav();
}

function exportData(){
  const blob = new Blob([JSON.stringify(STATE, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'spain-2027-trip-data.json';
  a.click();
  URL.revokeObjectURL(url);
  toast('Trip data exported');
}
function importData(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(reader.result);
      STATE = deepMerge(defaultState(), parsed);
      saveState();
      document.documentElement.setAttribute('data-theme', STATE.theme);
      render();
      toast('Trip data imported');
    }catch(err){ toast('Import failed — invalid file'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

/* ============ RENDER ROUTER ============ */
function render(){
  const scrollY = window.scrollY;
  renderNav();
  const route = currentRoute();
  const content = document.getElementById('content');
  const renderers = {
    overview: renderOverview, itinerary: renderItinerary, accommodation: renderAccommodation,
    transport: renderTransport, food: renderFood, experiences: renderExperiences,
    budget: renderBudget, packing: renderPacking, maps: renderMaps, tracker: renderTracker,
  };
  content.innerHTML = `<div class="section active">${renderers[route]()}</div>`;
  requestAnimationFrame(() => window.scrollTo(0, scrollY));
  attachSectionHandlers(route);
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
}

/* ============ OVERVIEW ============ */
function countdownParts(){
  const now = new Date();
  const start = new Date(TRIP.start);
  let diff = start - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000)/3600000);
  return {days, hours, past: start < now};
}

function routeSvg(){
  const w=560,h=460;
  const mainlandPath = "M31.0,51.2 L45.7,31.0 L78.7,31.0 L126.3,31.0 L177.7,32.8 L225.4,36.5 L247.4,34.7 L284.0,38.3 L309.7,38.3 L357.4,36.5 L394.0,45.7 L423.4,65.8 L434.4,75.0 L478.4,72.4 L489.4,75.0 L487.6,91.5 L465.6,104.3 L449.1,119.0 L417.9,119.0 L395.9,137.3 L377.5,157.5 L370.2,177.7 L359.2,181.4 L364.7,203.4 L373.9,219.9 L395.9,223.5 L384.9,240.0 L353.7,249.2 L322.5,265.7 L295.0,276.7 L276.7,280.4 L243.7,280.4 L214.4,282.2 L186.9,302.4 L166.7,304.2 L150.2,285.9 L137.3,265.7 L113.5,265.7 L100.7,251.0 L97.0,229.0 L113.5,197.9 L115.3,174.0 L120.8,155.7 L119.0,128.2 L113.5,106.2 L97.0,93.3 L73.2,93.3 L54.8,82.3 L45.7,67.7 L31.0,51.2 Z";
  const mallorcaPath = "M458.2,166.7 L467.4,163.0 L483.9,166.7 L487.6,177.7 L480.2,185.0 L467.4,186.1 L458.2,179.5 L456.4,172.2 L458.2,166.7 Z";
  const menorcaPath = "M513.2,161.2 L520.6,161.9 L529.0,164.9 L527.9,167.8 L516.9,166.7 L513.2,161.2 Z";
  const ibizaPath = "M417.9,196.0 L424.1,194.2 L428.2,198.6 L424.1,202.6 L419.0,201.5 L417.9,196.0 Z";

  const pts = CITIES.map(c=>({...c.coords, ...c}));
  const path = pts.map((p,i)=> (i===0?'M':'L') + p.x + ' ' + p.y).join(' ');

  // simple label-offset table so text doesn't collide with the coastline / other labels
  const labelOffset = {madrid:{dx:0,dy:-16}, valencia:{dx:6,dy:-16}, mallorca:{dx:26,dy:-4}, barcelona:{dx:0,dy:-16}};

  const dots = pts.map((p)=>{
    const lo = labelOffset[p.id] || {dx:0,dy:-16};
    return `
    <g>
      <circle cx="${p.x}" cy="${p.y}" r="7" fill="${p.color}" stroke="var(--warm-white)" stroke-width="2.5"/>
      <circle cx="${p.x}" cy="${p.y}" r="12" fill="none" stroke="${p.color}" stroke-width="1" opacity="0.35"/>
      <text x="${p.x+lo.dx}" y="${p.y+lo.dy}" text-anchor="middle" font-family="Fraunces, serif" font-size="14" font-weight="600" fill="var(--text)">${p.name.split(' (')[0]}</text>
      <text x="${p.x+lo.dx}" y="${p.y+lo.dy+16}" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" fill="var(--text-muted)">${p.nights} nights</text>
    </g>`;
  }).join('');

  return `<svg class="route-svg" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map of Spain showing Madrid, Valencia, Mallorca and Barcelona">
    <path d="${mainlandPath}" fill="var(--sandstone)" stroke="var(--card-border)" stroke-width="1.5" opacity="0.9"/>
    <path d="${mallorcaPath}" fill="var(--sandstone)" stroke="var(--card-border)" stroke-width="1.2" opacity="0.9"/>
    <path d="${menorcaPath}" fill="var(--sandstone)" stroke="var(--card-border)" stroke-width="1.2" opacity="0.75"/>
    <path d="${ibizaPath}" fill="var(--sandstone)" stroke="var(--card-border)" stroke-width="1.2" opacity="0.75"/>
    <path d="${path}" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="1 8" stroke-linecap="round"/>
    ${dots}
    <text x="${w-14}" y="${h-14}" text-anchor="end" font-family="Inter, sans-serif" font-size="9.5" fill="var(--text-muted)" opacity="0.7">Simplified schematic — not to scale</text>
  </svg>`;
}

function renderOverview(){
  const cd = countdownParts();
  const totalPaidBooked = STATE.budget.reduce((s,b)=>s+Number(b.deposit||0),0);
  const doneCount = TRACKER_DEFAULTS.filter(t=>STATE.tracker[t.id]?.done).length;
  const pct = Math.round(doneCount / TRACKER_DEFAULTS.length * 100);
  const totalEst = STATE.budget.reduce((s,b)=>s+Number(b.est||0),0);

  return `
    <div class="card hero-card">
      <div class="hero-top">
        <div>
          <div class="eyebrow">Madrid · Valencia · Mallorca · Barcelona</div>
          <h2>13 nights across Spain</h2>
          <p style="color:var(--text-muted); margin-top:8px; max-width:480px; font-size:14px;">${TRIP.arrivalNote}</p>
        </div>
        <div class="countdown">
          <div class="num">${cd.past ? '0' : cd.days}</div>
          <div class="lbl">${cd.past ? 'Trip underway / complete' : 'days to departure'}</div>
        </div>
      </div>
      <div class="routewrap">${routeSvg()}</div>
      <div class="stat-strip">
        <div class="stat-box"><div class="v">13</div><div class="l">Nights</div></div>
        <div class="stat-box"><div class="v">4</div><div class="l">Cities</div></div>
        <div class="stat-box"><div class="v">2</div><div class="l">Travellers</div></div>
        <div class="stat-box"><div class="v">${fmtMoney(totalEst)}</div><div class="l">Est. total spend</div></div>
      </div>
    </div>

    <div class="grid grid-2" style="margin-bottom:18px;">
      <div class="card">
        <div class="eyebrow">Booking progress</div>
        <h3 style="font-size:19px; margin-bottom:8px;">${doneCount} of ${TRACKER_DEFAULTS.length} items done</h3>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <p style="font-size:12.5px; color:var(--text-muted); margin-top:8px;">See the full Booking Tracker for details.</p>
      </div>
      <div class="card">
        <div class="eyebrow">Weather averages</div>
        <h3 style="font-size:19px; margin-bottom:12px;">Late March – early April</h3>
        <div class="weather-row">
          ${WEATHER.map(w=>`<div class="weather-chip"><div class="city">${w.city}</div><div class="temp">${w.temp}</div><div class="desc">${w.desc}</div></div>`).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="eyebrow">Cities at a glance</div>
      <div class="grid grid-4" style="margin-top:12px;">
        ${CITIES.map(c=>`
          <div class="card" style="padding:16px; box-shadow:none; border:1px solid var(--card-border);">
            <span class="city-tag" style="background:${c.color}22; color:${c.color};"><span class="dot" style="background:${c.color}"></span>${c.short}</span>
            <h4 style="font-size:16px; margin-top:10px;">${c.name}</h4>
            <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">${c.dateRange} · ${c.nights} nights</div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

/* ============ ITINERARY ============ */
function renderItinerary(){
  const rows = DAYS.map((d, i)=>{
    const city = d.city.includes('→') ? null : cityById(d.city);
    const cityColor = city ? city.color : 'var(--gold)';
    const cityLabel = d.city.includes('→') ? d.city.split('→').map(id=>cityById(id)?.name || id).join(' → ') : (city?.name || d.city);
    return `
    <div class="card day-card ${STATE.openDay===i?'open':''}" data-day="${i}">
      <div class="day-head" data-toggle="${i}">
        <div class="day-head-left">
          <div class="day-num">${String(i+1).padStart(2,'0')}</div>
          <div>
            <h3>${d.title}</h3>
            <div class="dsub">${d.date} · <span style="color:${cityColor}">${cityLabel}</span></div>
          </div>
        </div>
        <span class="chev">▾</span>
      </div>
      <div class="day-body">
        <div class="day-body-inner">
          <div class="dblock"><div class="lbl">Breakfast</div><div class="val">${d.breakfast}</div></div>
          <div class="dblock"><div class="lbl">Morning</div><div class="val">${d.morning}</div></div>
          <div class="dblock"><div class="lbl">Lunch</div><div class="val">${d.lunch}</div></div>
          <div class="dblock"><div class="lbl">Afternoon</div><div class="val">${d.afternoon}</div></div>
          <div class="dblock"><div class="lbl">Cocktail bar</div><div class="val">${d.cocktail}</div></div>
          <div class="dblock"><div class="lbl">Dinner</div><div class="val">${d.dinner}</div></div>
          <div class="dblock"><div class="lbl">Walking route</div><div class="val">${d.walkingRoute}</div></div>
          <div class="dblock"><div class="lbl">Est. cost</div><div class="val">${d.estCost}</div></div>
          <div class="dblock"><div class="lbl">Travel time</div><div class="val">${d.travelTime}</div></div>
          <div class="dblock"><div class="lbl">Booking needed</div><div class="val">${d.booking}</div></div>
          <div class="dblock"><div class="lbl">Photography spots</div><div class="val">${d.photoSpots}</div></div>
          <div class="dblock" style="grid-column:1/-1;">
            <div class="lbl">Notes</div>
            <textarea data-daynote="${i}" placeholder="Add your own notes for this day...">${STATE.dayNotes[i]||''}</textarea>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">Day by day</div>
      <h2>Daily Itinerary</h2>
      <div class="sub">Tap any day to expand. Suggestions are pre-filled from your wishlist — edit notes freely, everything saves automatically.</div>
    </div>
    ${rows}
  `;
}

/* ============ ACCOMMODATION ============ */
function renderAccommodation(){
  const cards = CITIES.map(c=>{
    const a = c.accommodation;
    const rating = STATE.hotelRating[c.id]||0;
    const stars = [1,2,3,4,5].map(n=>`<span class="star ${n<=rating?'on':''}" data-rate="${c.id}" data-val="${n}">★</span>`).join('');
    const photos = STATE.hotelPhotos[c.id] || [];
    const heroPhoto = photos[0];

    const imgInner = heroPhoto
      ? `<img src="${heroPhoto}" alt="${a.name}" style="width:100%; height:100%; object-fit:cover;" />`
      : `<span>${c.name} — no photo yet</span>`;

    const thumbRow = photos.length ? `
      <div class="photo-thumbs">
        ${photos.map((p,idx)=>`
          <div class="thumb">
            <img src="${p}" alt="" />
            <button class="thumb-remove" data-photo-remove="${c.id}" data-photo-idx="${idx}" title="Remove photo">×</button>
          </div>`).join('')}
      </div>` : '';

    return `
    <div class="card hotel-card">
      <div class="hotel-img" style="background:linear-gradient(135deg, ${c.color}33, var(--bg-alt));">${imgInner}</div>
      <div class="hotel-body">
        <span class="city-tag" style="background:${c.color}22; color:${c.color};"><span class="dot" style="background:${c.color}"></span>${c.dateRange}</span>
        <h3 style="margin-top:10px;">${a.name}</h3>
        <div class="hotel-meta">${a.type}</div>
        <span class="status-pill status-${a.status}">${a.status}</span>
        <div class="detail-list">
          <div class="row"><span>Cost</span><span>${fmtMoney(a.cost)}</span></div>
          <div class="row"><span>Payment due</span><span>${a.paymentDue}</span></div>
          <div class="row"><span>Cancellation</span><span>${a.cancellation}</span></div>
          <div class="row"><span>Breakfast</span><span>${a.breakfast?'Included':'Not included'}</span></div>
        </div>
        <div class="hotel-actions">
          <a class="btn primary" target="_blank" rel="noopener" href="${mapsUrl(a.mapsQuery)}">📍 Map</a>
          <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(a.name + ' ' + c.name)}">🔗 Website</a>
          <button class="btn" data-photo-add="${c.id}">📷 Add photo</button>
          <input type="file" accept="image/*" multiple style="display:none" data-photo-input="${c.id}" />
        </div>
        ${thumbRow}
        <div class="stars">${stars}</div>
        <textarea class="notes-field" data-hotelnote="${c.id}" placeholder="Notes — room number, host contact, check-in instructions...">${STATE.hotelNotes[c.id]||''}</textarea>
      </div>
    </div>`;
  }).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">Where you're staying</div>
      <h2>Accommodation</h2>
      <div class="sub">All four stays at a glance — tap Map to open in Google Maps, rate each stay, and jot notes as bookings firm up.</div>
    </div>
    <div class="grid grid-2">${cards}</div>
  `;
}

/* ============ TRANSPORT ============ */
function renderTransport(){
  const legs = [
    {leg:'Australia → Madrid', date:'26–27 Mar 2027', detail:'Flight 1: Melbourne (MEL) 22:35 Fri 26 Mar → Madrid (MAD) 16:25 Sat 27 Mar. Duration 27h 50m, Economy Class.', status:'Booked'},
    {leg:'Madrid ⇄ Toledo', date:'29 Mar 2027', detail:'High-speed Renfe train, ~33 min each way.', status:'To book'},
    {leg:'Madrid → Valencia', date:'31 Mar 2027', detail:'AVE high-speed train, ~1h40.', status:'To book'},
    {leg:'Valencia → Mallorca (Palma)', date:'2 Apr 2027', detail:'Flight, ~45 min. Then Palma → Sóller by car or train, ~40 min.', status:'To book'},
    {leg:'Mallorca car hire', date:'2–6 Apr 2027', detail:'Pickup on arrival in Palma or Sóller — needed for coastal drives and mountain villages.', status:'To book'},
    {leg:'Mallorca → Barcelona', date:'6 Apr 2027', detail:'Flight, ~50 min.', status:'To book'},
    {leg:'Barcelona → Australia', date:'9–10 Apr 2027', detail:'Flight 2: Barcelona (BCN) 07:35 Fri 9 Apr → Melbourne (MEL) 20:40 Sat 10 Apr. Duration 28h 5m, Economy Class.', status:'Booked'},
  ];
  return `
    <div class="page-head">
      <div class="eyebrow">Getting around</div>
      <h2>Transport</h2>
      <div class="sub">Every flight, train, and the Mallorca car hire — booking status updates in the Booking Tracker.</div>
    </div>
    <div class="card">
      ${legs.map(l=>`
        <div class="detail-list" style="border-bottom:1px solid var(--card-border); padding:14px 4px;">
          <div class="row" style="font-size:15px; font-weight:600;"><span>${l.leg}</span><span style="color:${l.status==='Booked'?'var(--olive)':'var(--terracotta)'}; font-size:11.5px; font-weight:700; text-transform:uppercase;">${l.status}</span></div>
          <div class="row"><span>${l.date}</span><span></span></div>
          <div style="font-size:13px; color:var(--text-muted); margin-top:2px;">${l.detail}</div>
        </div>`).join('')}
    </div>
  `;
}

/* ============ FOOD ============ */
function renderFood(){
  const cats = ['Breakfast','Coffee','Tapas','Wine Bars','Cocktail Bars','Fine Dining','Markets','Local Favourites'];
  const cityBlocks = CITIES.map(c=>{
    const data = FOOD[c.id];
    return `
    <div class="card" style="margin-bottom:18px;">
      <span class="city-tag" style="background:${c.color}22; color:${c.color};"><span class="dot" style="background:${c.color}"></span>${c.name}</span>
      ${cats.map(cat => data[cat] && data[cat].length ? `
        <div class="food-cat" style="margin-top:16px;">
          <h4>${cat}</h4>
          ${data[cat].map(item=>`
            <div class="card food-item" style="box-shadow:none; border:1px solid var(--card-border);">
              <div class="fname">${item.name}</div>
              <div class="fmeta">${item.cuisine} · ${item.price}${item.reservation? ' · Reservation recommended':''}</div>
              <div class="hotel-actions" style="margin-top:8px;">
                <a class="btn" target="_blank" rel="noopener" href="${mapsUrl(item.mapsQuery)}">📍 Maps</a>
                <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(item.name + ' ' + c.name)}">🔗 Website</a>
              </div>
            </div>`).join('')}
        </div>` : '').join('')}
    </div>`;
  }).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">Eat & drink</div>
      <h2>Food & Drinks</h2>
      <div class="sub">Organised by city and category. These are starting suggestions — swap in your own finds as you research.</div>
    </div>
    ${cityBlocks}
  `;
}

/* ============ EXPERIENCES ============ */
function renderExperiences(){
  const groups = {};
  EXPERIENCES.forEach(e=>{ (groups[e.city] = groups[e.city]||[]).push(e); });
  const blocks = CITIES.map(c=>{
    const items = groups[c.id] || [];
    if(!items.length) return '';
    return `
    <div style="margin-bottom:22px;">
      <span class="city-tag" style="background:${c.color}22; color:${c.color};"><span class="dot" style="background:${c.color}"></span>${c.name}</span>
      <div class="grid grid-3" style="margin-top:12px;">
        ${items.map(e=>`
          <div class="card" style="padding:16px;">
            <div class="eyebrow" style="color:var(--olive);">${e.tag}</div>
            <h4 style="font-size:15.5px; margin-top:2px;">${e.title}</h4>
            <p style="font-size:12.5px; color:var(--text-muted); margin-top:6px;">${e.desc}</p>
            <a class="btn" style="margin-top:10px;" target="_blank" rel="noopener" href="${mapsUrl(e.mapsQuery)}">📍 Map</a>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">What to do</div>
      <h2>Experiences</h2>
      <div class="sub">Boat trips, coves, wineries, and the Toledo day trip — grouped by city.</div>
    </div>
    ${blocks}
  `;
}

/* ============ BUDGET ============ */
function budgetChartsSvg(){
  const data = STATE.budget.filter(b=>Number(b.est)>0);
  const total = data.reduce((s,b)=>s+Number(b.est),0);
  const palette = ['#BF5B3E','#6B7355','#C9A15A','#1F2A3C','#A87C5F','#8C9E7E','#D9B26A','#3E4E5C'];
  if(total===0) return '<p style="font-size:13px;color:var(--text-muted)">Add estimates below to see the breakdown.</p>';

  // Pie
  let angle = 0; const cx=90, cy=90, r=80;
  const slices = data.map((b,i)=>{
    const frac = Number(b.est)/total;
    const a0 = angle, a1 = angle + frac*Math.PI*2;
    angle = a1;
    const x0 = cx + r*Math.sin(a0), y0 = cy - r*Math.cos(a0);
    const x1 = cx + r*Math.sin(a1), y1 = cy - r*Math.cos(a1);
    const large = (a1-a0) > Math.PI ? 1 : 0;
    return `<path d="M${cx},${cy} L${x0.toFixed(2)},${y0.toFixed(2)} A${r},${r} 0 ${large} 1 ${x1.toFixed(2)},${y1.toFixed(2)} Z" fill="${palette[i%palette.length]}" opacity="0.9"/>`;
  }).join('');

  // Bar
  const maxV = Math.max(...data.map(b=>Number(b.est)));
  const barW = 46, gap = 14, chartH = 130;
  const bars = data.map((b,i)=>{
    const h = maxV ? (Number(b.est)/maxV)*chartH : 0;
    const x = i*(barW+gap);
    return `<rect x="${x}" y="${chartH-h}" width="${barW}" height="${h}" rx="6" fill="${palette[i%palette.length]}"/>`;
  }).join('');

  const legend = data.map((b,i)=>`<div class="li"><span class="sw" style="background:${palette[i%palette.length]}"></span>${b.cat} — ${fmtMoney(b.est)}</div>`).join('');

  return `
    <div class="grid grid-2">
      <div>
        <svg viewBox="0 0 180 180" style="width:100%; max-width:220px;"><g>${slices}</g></svg>
      </div>
      <div>
        <svg viewBox="0 0 ${data.length*(barW+gap)} ${chartH+10}" style="width:100%; max-width:340px;">${bars}</svg>
      </div>
    </div>
    <div class="chart-legend">${legend}</div>
  `;
}

function renderBudget(){
  const totalEst     = STATE.budget.reduce((s,b)=>s+Number(b.est||0),0);
  const totalActual  = STATE.budget.reduce((s,b)=>s+Number(b.actual||0),0);
  const totalDeposit = STATE.budget.reduce((s,b)=>s+Number(b.deposit||0),0);
  const remaining   = STATE.totalBudget - totalEst;

  const rows = STATE.budget.map((b,i)=>{
    const bal = Number(b.est||0) - Number(b.deposit||0);
    return `
    <div class="budget-row">
      <div>${b.cat}</div>
      <div><input type="number" min="0" step="0.01" data-budget-est="${i}" value="${b.est||''}" placeholder="0" ${b.cat==='Accommodation'?'readonly title="Auto-totalled from accommodation costs"':''}/></div>
      <div class="hide-sm"><input type="number" min="0" step="0.01" data-budget-actual="${i}" value="${b.actual||''}" placeholder="0"/></div>
      <div><input type="number" min="0" step="0.01" data-budget-deposit="${i}" value="${b.deposit||''}" placeholder="0"/></div>
      <div class="hide-sm bal-cell${bal<0?' neg':''}">${fmtMoney(bal)}</div>
      <div class="bnotes"><input type="text" data-budget-notes="${i}" value="${b.notes||''}" placeholder="Notes…"/></div>
    </div>`;
  }).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">Running totals</div>
      <h2>Budget</h2>
      <div class="sub">Track estimates vs actuals per category. Balance = Estimate − Actual.</div>
    </div>

    <div class="card" style="margin-bottom:18px;">
      <div class="grid grid-3">
        <div class="stat-box"><div class="v">${fmtMoney(STATE.totalBudget)}</div><div class="l">Total budget</div>
          <input type="number" min="0" step="1" id="totalBudgetInput" value="${STATE.totalBudget}" style="margin-top:8px; width:100%; border:1px solid var(--card-border); border-radius:8px; padding:6px 8px; background:var(--warm-white); color:var(--text);" />
        </div>
        <div class="stat-box"><div class="v">${fmtMoney(totalEst)}</div><div class="l">Estimated spend</div></div>
        <div class="stat-box"><div class="v" style="color:${remaining<0?'var(--terracotta)':'inherit'}">${fmtMoney(remaining)}</div><div class="l">Remaining</div></div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.max(0,(totalEst/Math.max(1,STATE.totalBudget))*100))}%"></div></div>
    </div>

    <div class="card" style="margin-bottom:18px;">
      <div class="eyebrow">By category</div>
      ${budgetChartsSvg()}
    </div>

    <div class="card">
      <div class="budget-head-row"><div>Category</div><div>Estimate</div><div class="hide-sm">Actual</div><div>Deposit Paid</div><div class="hide-sm">Balance</div><div class="bnhead">Notes</div></div>
      ${rows}
      <div class="total-line">
        <span>Total</span><span>${fmtMoney(totalEst)}</span><span class="hide-sm">${fmtMoney(totalActual)}</span><span></span><span class="hide-sm${(totalEst-totalDeposit)<0?' neg':''}">${fmtMoney(totalEst-totalDeposit)}</span><span class="bnhead"></span>
      </div>
    </div>
  `;
}

/* ============ PACKING ============ */
function renderPacking(){
  const blocks = Object.entries(STATE.packing).map(([cat, items])=>{
    const doneN = items.filter(i=>i.done).length;
    return `
    <div class="card" style="margin-bottom:16px;">
      <div class="cat-head">
        <h4>${cat}</h4>
        <span class="cat-count">${doneN}/${items.length}</span>
      </div>
      ${items.map((it,idx)=>`
        <div class="check-item ${it.done?'done':''}">
          <input type="checkbox" id="pack-${cat}-${idx}" data-pack-cat="${cat}" data-pack-idx="${idx}" ${it.done?'checked':''}/>
          <label for="pack-${cat}-${idx}">${it.name}</label>
        </div>`).join('')}
      <div class="add-row">
        <input type="text" placeholder="Add item..." data-add-pack="${cat}" />
        <button data-add-pack-btn="${cat}">Add</button>
      </div>
    </div>`;
  }).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">Before you go</div>
      <h2>Packing</h2>
      <div class="sub">Tick items off as they go in the bag. Add your own to any category — it saves automatically.</div>
    </div>
    <div class="grid grid-2">${blocks}</div>
  `;
}

/* ============ MAPS ============ */
function renderMaps(){
  const hotels = CITIES.map(c=>({label:`${c.accommodation.name} (${c.name})`, q:c.accommodation.mapsQuery}));
  const restaurants = [];
  Object.entries(FOOD).forEach(([cid, cats])=>{
    const c = cityById(cid);
    Object.values(cats).flat().forEach(item=> restaurants.push({label:`${item.name} (${c.name})`, q:item.mapsQuery}));
  });
  const attractions = EXPERIENCES.map(e=>({label:`${e.title} (${cityById(e.city)?.name||e.city})`, q:e.mapsQuery}));
  const transitPoints = [
    {label:'Madrid-Barajas Airport (MAD)', q:'Madrid Barajas Airport'},
    {label:'Palma de Mallorca Airport (PMI)', q:'Palma de Mallorca Airport'},
    {label:'Barcelona-El Prat Airport (BCN)', q:'Barcelona El Prat Airport'},
    {label:'Madrid Atocha Station', q:'Madrid Atocha train station'},
    {label:'Valencia Estació del Nord', q:'Valencia Estacio del Nord'},
    {label:'Sóller train station', q:'Soller train station Mallorca'},
  ];

  const group = (title, items) => `
    <div class="maps-group">
      <h4>${title}</h4>
      ${items.map(i=>`<a class="map-link" target="_blank" rel="noopener" href="${mapsUrl(i.q)}"><span>${i.label}</span><span>📍</span></a>`).join('')}
    </div>`;

  return `
    <div class="page-head">
      <div class="eyebrow">Every pin in one place</div>
      <h2>Maps</h2>
      <div class="sub">Tap any location to open directly in Google Maps.</div>
    </div>
    <div class="grid grid-2">
      <div class="card">${group('Hotels', hotels)}${group('Airports & Stations', transitPoints)}</div>
      <div class="card">${group('Restaurants & Bars', restaurants)}${group('Attractions & Experiences', attractions)}</div>
    </div>
  `;
}

/* ============ TRACKER ============ */
function renderTracker(){
  const groups = {};
  TRACKER_DEFAULTS.forEach(t=>{ (groups[t.group]=groups[t.group]||[]).push(t); });
  const doneCount = TRACKER_DEFAULTS.filter(t=>STATE.tracker[t.id]?.done).length;
  const pct = Math.round(doneCount/TRACKER_DEFAULTS.length*100);

  const blocks = Object.entries(groups).map(([group, items])=>`
    <div class="card" style="margin-bottom:16px;">
      <div class="cat-head"><h4>${group}</h4><span class="cat-count">${items.filter(t=>STATE.tracker[t.id]?.done).length}/${items.length}</span></div>
      ${items.map(t=>{
        const s = STATE.tracker[t.id] || {done:false, note:''};
        return `
        <div class="check-item ${s.done?'done':''}">
          <input type="checkbox" id="trk-${t.id}" data-track="${t.id}" ${s.done?'checked':''}/>
          <label for="trk-${t.id}">${t.label}${s.note? ` <span class="due">— ${s.note}</span>`:''}</label>
        </div>`;
      }).join('')}
    </div>`).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">Everything that needs booking</div>
      <h2>Booking Tracker</h2>
      <div class="sub">${doneCount} of ${TRACKER_DEFAULTS.length} complete.</div>
      <div class="progress-track" style="max-width:400px;"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="grid grid-2">${blocks}</div>
  `;
}

/* ============ EVENT HANDLERS PER SECTION ============ */
function attachSectionHandlers(route){
  if(route==='itinerary'){
    document.querySelectorAll('[data-toggle]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const i = Number(el.dataset.toggle);
        const card = document.querySelector(`.day-card[data-day="${i}"]`);
        const isOpen = card.classList.contains('open');
        document.querySelectorAll('.day-card.open').forEach(c=>c.classList.remove('open'));
        if(!isOpen){ card.classList.add('open'); STATE.openDay = i; } else { STATE.openDay = -1; }
        saveState();
      });
    });
    document.querySelectorAll('[data-daynote]').forEach(el=>{
      el.addEventListener('blur', ()=>{
        STATE.dayNotes[Number(el.dataset.daynote)] = el.value;
        saveState();
      });
    });
  }
  if(route==='accommodation'){
    document.querySelectorAll('[data-rate]').forEach(el=>{
      el.addEventListener('click', ()=>{
        STATE.hotelRating[el.dataset.rate] = Number(el.dataset.val);
        saveState(); render(); location.hash = 'accommodation';
      });
    });
    document.querySelectorAll('[data-hotelnote]').forEach(el=>{
      el.addEventListener('blur', ()=>{
        STATE.hotelNotes[el.dataset.hotelnote] = el.value;
        saveState();
      });
    });
    document.querySelectorAll('[data-photo-add]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.querySelector(`[data-photo-input="${btn.dataset.photoAdd}"]`).click();
      });
    });
    document.querySelectorAll('[data-photo-input]').forEach(input=>{
      input.addEventListener('change', (e)=>{
        const cityId = input.dataset.photoInput;
        const files = Array.from(e.target.files || []);
        if(!files.length) return;
        let remaining = files.length;
        files.forEach(file=>{
          if(file.size > 4 * 1024 * 1024){
            toast(`${file.name} is over 4MB — skipped`);
            remaining--;
            if(remaining===0) finish();
            return;
          }
          const reader = new FileReader();
          reader.onload = () => {
            STATE.hotelPhotos[cityId] = STATE.hotelPhotos[cityId] || [];
            STATE.hotelPhotos[cityId].push(reader.result);
            remaining--;
            if(remaining===0) finish();
          };
          reader.readAsDataURL(file);
        });
        function finish(){
          saveState(); render(); location.hash = 'accommodation';
          toast('Photo added');
        }
      });
    });
    document.querySelectorAll('[data-photo-remove]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const cityId = btn.dataset.photoRemove;
        const idx = Number(btn.dataset.photoIdx);
        STATE.hotelPhotos[cityId].splice(idx,1);
        saveState(); render(); location.hash = 'accommodation';
      });
    });
  }
  if(route==='budget'){
    document.getElementById('totalBudgetInput').addEventListener('change', (e)=>{
      STATE.totalBudget = Number(e.target.value)||0; saveState(); render();
    });
    document.querySelectorAll('[data-budget-est]').forEach(el=>{
      el.addEventListener('change', ()=>{
        STATE.budget[Number(el.dataset.budgetEst)].est = Number(el.value)||0;
        saveState(); render();
      });
    });
    document.querySelectorAll('[data-budget-actual]').forEach(el=>{
      el.addEventListener('change', ()=>{
        STATE.budget[Number(el.dataset.budgetActual)].actual = Number(el.value)||0;
        saveState(); render();
      });
    });
    document.querySelectorAll('[data-budget-deposit]').forEach(el=>{
      el.addEventListener('change', ()=>{
        STATE.budget[Number(el.dataset.budgetDeposit)].deposit = Number(el.value)||0;
        saveState(); render();
      });
    });
    document.querySelectorAll('[data-budget-notes]').forEach(el=>{
      el.addEventListener('blur', ()=>{
        STATE.budget[Number(el.dataset.budgetNotes)].notes = el.value;
        saveState();
      });
    });
  }
  if(route==='packing'){
    document.querySelectorAll('[data-pack-cat]').forEach(el=>{
      el.addEventListener('change', ()=>{
        STATE.packing[el.dataset.packCat][Number(el.dataset.packIdx)].done = el.checked;
        saveState();
      });
    });
    document.querySelectorAll('[data-add-pack-btn]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const cat = btn.dataset.addPackBtn;
        const input = document.querySelector(`[data-add-pack="${cat}"]`);
        if(input.value.trim()){
          STATE.packing[cat].push({name:input.value.trim(), done:false});
          saveState(); render();
        }
      });
    });
  }
  if(route==='tracker'){
    document.querySelectorAll('[data-track]').forEach(el=>{
      el.addEventListener('change', ()=>{
        const id = el.dataset.track;
        STATE.tracker[id] = STATE.tracker[id] || {done:false, note:''};
        STATE.tracker[id].done = el.checked;
        saveState();
      });
    });
  }
}

/* ============ INIT ============ */
document.documentElement.setAttribute('data-theme', STATE.theme);
window.addEventListener('hashchange', render);
render();

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}
