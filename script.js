// Virginia Algonquian Language Learning Interface JavaScript

// Complete vocabulary data from master-word-list.md
const vocabularyData = [
  // A Section
  {
    english: "acorn",
    algonquian: "ahcôtowvun",
    pronunciation: "ah-coh-tow-vun",
    source: "Strachey",
    notes: "Related to Proto-Algonquian *axatehimin",
    category: "plants"
  },
  {
    english: "alder tree",
    algonquian: "oumaniens",
    pronunciation: "oo-ma-nee-ens",
    source: "Strachey",
    notes: "Tree species",
    category: "plants"
  },
  {
    english: "alive",
    algonquian: "apeing",
    pronunciation: "a-pe-ing",
    source: "Strachey",
    notes: "State of being",
    category: "basic"
  },
  {
    english: "arrow",
    algonquian: "attonce, ashaham",
    pronunciation: "at-ton-ce, a-sha-ham",
    source: "Strachey, Smith",
    notes: "Weaponry item",
    category: "objects"
  },
  {
    english: "autumn",
    algonquian: "taquitock",
    pronunciation: "ta-qui-tock",
    source: "Strachey",
    notes: "Season",
    category: "time"
  },
  
  // B Section
  {
    english: "baby",
    algonquian: "neckamaish",
    pronunciation: "neck-a-maish",
    source: "Strachey",
    notes: "Young child",
    category: "family"
  },
  {
    english: "back (body part)",
    algonquian: "petawah",
    pronunciation: "pe-ta-wah",
    source: "Strachey",
    notes: "Anatomical term",
    category: "body"
  },
  {
    english: "bad",
    algonquian: "matit",
    pronunciation: "ma-tit",
    source: "Strachey",
    notes: "Evaluative term, cf. Lenape 'matit'",
    category: "basic"
  },
  {
    english: "basket",
    algonquian: "manote",
    pronunciation: "ma-no-te",
    source: "Smith",
    notes: "Container for gathering",
    category: "objects"
  },
  {
    english: "bear (animal)",
    algonquian: "monacock",
    pronunciation: "mo-na-cock",
    source: "Strachey",
    notes: "Forest animal",
    category: "animals"
  },
  {
    english: "beaver",
    algonquian: "appoumes",
    pronunciation: "ap-pou-mes",
    source: "Strachey",
    notes: "Aquatic mammal",
    category: "animals"
  },
  {
    english: "bed",
    algonquian: "tussâc",
    pronunciation: "tus-sac",
    source: "Strachey",
    notes: "Sleeping place",
    category: "objects"
  },
  {
    english: "beech tree",
    algonquian: "picôn",
    pronunciation: "pi-con",
    source: "Strachey",
    notes: "Tree species",
    category: "plants"
  },
  {
    english: "belch",
    algonquian: "necassunnûm",
    pronunciation: "ne-cas-sun-num",
    source: "Strachey",
    notes: "Bodily function",
    category: "actions"
  },
  {
    english: "bird",
    algonquian: "chehip",
    pronunciation: "che-hip",
    source: "Strachey",
    notes: "General term for winged creatures",
    category: "animals"
  },
  {
    english: "black",
    algonquian: "matcherengo",
    pronunciation: "match-e-ren-go",
    source: "Strachey",
    notes: "Color term",
    category: "colors"
  },
  {
    english: "blanket",
    algonquian: "matchcôat",
    pronunciation: "match-coat",
    source: "Strachey",
    notes: "Covering",
    category: "objects"
  },
  {
    english: "blood",
    algonquian: "netahcat",
    pronunciation: "ne-tah-cat",
    source: "Strachey",
    notes: "Bodily fluid",
    category: "body"
  },
  {
    english: "blow",
    algonquian: "nipokatamen",
    pronunciation: "ni-po-ka-ta-men",
    source: "Strachey",
    notes: "Action with breath",
    category: "actions"
  },
  {
    english: "blue",
    algonquian: "oskeyu",
    pronunciation: "os-key-u",
    source: "Strachey",
    notes: "Color term",
    category: "colors"
  },
  {
    english: "boat",
    algonquian: "aquointayne",
    pronunciation: "a-quoin-tay-ne",
    source: "Smith",
    notes: "Water vessel",
    category: "objects"
  },
  {
    english: "body",
    algonquian: "mehkenanahum",
    pronunciation: "meh-ke-na-na-hum",
    source: "Strachey",
    notes: "Physical form",
    category: "body"
  },
  {
    english: "bow",
    algonquian: "attaup",
    pronunciation: "at-taup",
    source: "Smith",
    notes: "Hunting weapon",
    category: "objects"
  },
  {
    english: "bread",
    algonquian: "appoans",
    pronunciation: "ap-po-ans",
    source: "Strachey",
    notes: "Food staple, cf. Lenape 'apan'",
    category: "basic"
  },
  {
    english: "break (something)",
    algonquian: "toshemaiin",
    pronunciation: "to-she-mai-in",
    source: "Strachey",
    notes: "Action verb",
    category: "actions"
  },
  {
    english: "breath",
    algonquian: "nytake",
    pronunciation: "ny-ta-ke",
    source: "Strachey",
    notes: "Life sustaining air",
    category: "body"
  },
  {
    english: "brother",
    algonquian: "neckauw",
    pronunciation: "neck-auw",
    source: "Strachey",
    notes: "Male sibling",
    category: "family"
  },
  {
    english: "burn",
    algonquian: "pockatawer",
    pronunciation: "pock-a-ta-wer",
    source: "Strachey",
    notes: "Fire related verb, cf. 'pohkhan' (fire)",
    category: "actions"
  },
  
  // C Section
  {
    english: "canoe",
    algonquian: "aquintan",
    pronunciation: "a-quin-tan",
    source: "Smith",
    notes: "Small watercraft, related to Delaware 'akwena'",
    category: "objects"
  },
  {
    english: "cheek",
    algonquian: "mamtunnaaw",
    pronunciation: "mam-tun-naaw",
    source: "Strachey",
    notes: "Facial feature",
    category: "body"
  },
  {
    english: "child",
    algonquian: "nekaupot",
    pronunciation: "ne-kau-pot",
    source: "Strachey",
    notes: "Young person",
    category: "family"
  },
  {
    english: "cold",
    algonquian: "nâtakôam",
    pronunciation: "na-ta-ko-am",
    source: "Strachey",
    notes: "Temperature description",
    category: "weather"
  },
  {
    english: "come here",
    algonquian: "coiscutterêweh",
    pronunciation: "cois-cut-ter-e-weh",
    source: "Smith",
    notes: "Directional command",
    category: "actions"
  },
  {
    english: "copper",
    algonquian: "matassun",
    pronunciation: "ma-tas-sun",
    source: "Strachey",
    notes: "Valued metal",
    category: "objects"
  },
  {
    english: "corn (maize)",
    algonquian: "attan, attacoone",
    pronunciation: "at-tan, at-ta-coo-ne",
    source: "Smith",
    notes: "Agricultural staple",
    category: "plants"
  },
  {
    english: "cough",
    algonquian: "ahquas",
    pronunciation: "ah-quas",
    source: "Strachey",
    notes: "Bodily action",
    category: "actions"
  },
  {
    english: "crow (bird)",
    algonquian: "châraw",
    pronunciation: "cha-raw",
    source: "Strachey",
    notes: "Black bird, onomatopoeic",
    category: "animals"
  },
  
  // D Section
  {
    english: "dance",
    algonquian: "kantikantimiis",
    pronunciation: "kan-ti-kan-ti-miis",
    source: "Strachey",
    notes: "Ceremonial action",
    category: "actions"
  },
  {
    english: "darkness",
    algonquian: "petayouch",
    pronunciation: "pe-ta-youch",
    source: "Strachey",
    notes: "Absence of light",
    category: "nature"
  },
  {
    english: "daughter",
    algonquian: "netough",
    pronunciation: "ne-tough",
    source: "Strachey",
    notes: "Female offspring",
    category: "family"
  },
  {
    english: "day",
    algonquian: "rawcosowgh",
    pronunciation: "raw-co-sowgh",
    source: "Strachey",
    notes: "Time period",
    category: "time"
  },
  {
    english: "death",
    algonquian: "nepawwêtowh",
    pronunciation: "ne-paw-we-towh",
    source: "Strachey",
    notes: "End of life",
    category: "basic"
  },
  {
    english: "deer",
    algonquian: "attecenna",
    pronunciation: "at-te-cen-na",
    source: "Smith",
    notes: "Forest animal, important for food",
    category: "animals"
  },
  {
    english: "devil",
    algonquian: "riokosick",
    pronunciation: "rio-ko-sick",
    source: "Strachey",
    notes: "Evil spirit",
    category: "spiritual"
  },
  {
    english: "dog",
    algonquian: "attum",
    pronunciation: "at-tum",
    source: "Strachey",
    notes: "Domesticated animal",
    category: "animals"
  },
  {
    english: "door",
    algonquian: "cuppaton",
    pronunciation: "cup-pa-ton",
    source: "Strachey",
    notes: "Entrance to dwelling",
    category: "objects"
  },
  {
    english: "drink",
    algonquian: "netab",
    pronunciation: "ne-tab",
    source: "Strachey",
    notes: "Consume liquid",
    category: "actions"
  },
  {
    english: "dry",
    algonquian: "yataxen",
    pronunciation: "ya-tax-en",
    source: "Strachey",
    notes: "Absence of moisture",
    category: "basic"
  },
  {
    english: "duck",
    algonquian: "piscoend",
    pronunciation: "pis-co-end",
    source: "Strachey",
    notes: "Waterfowl",
    category: "animals"
  },
  
  // E Section
  {
    english: "ear",
    algonquian: "metawincs",
    pronunciation: "me-ta-wincs",
    source: "Strachey",
    notes: "Body part for hearing",
    category: "body"
  },
  {
    english: "earth",
    algonquian: "ohke",
    pronunciation: "oh-ke",
    source: "Strachey",
    notes: "Ground, soil, world",
    category: "nature"
  },
  {
    english: "eat",
    algonquian: "mecitchêh",
    pronunciation: "me-cit-cheh",
    source: "Strachey",
    notes: "Consume food",
    category: "actions"
  },
  {
    english: "egg",
    algonquian: "wahwûnnenehpiss",
    pronunciation: "wah-wun-ne-neh-piss",
    source: "Strachey",
    notes: "Bird/reptile reproductive item",
    category: "animals"
  },
  {
    english: "eight",
    algonquian: "nusswash",
    pronunciation: "nuss-wash",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "elk",
    algonquian: "mûsswack",
    pronunciation: "muss-wack",
    source: "Strachey",
    notes: "Large forest animal",
    category: "animals"
  },
  {
    english: "enemy",
    algonquian: "marapo",
    pronunciation: "ma-ra-po",
    source: "Smith",
    notes: "Hostile person",
    category: "social"
  },
  {
    english: "evening",
    algonquian: "anacome",
    pronunciation: "a-na-co-me",
    source: "Strachey",
    notes: "Time of day",
    category: "time"
  },
  {
    english: "eye",
    algonquian: "mesettink",
    pronunciation: "me-set-tink",
    source: "Strachey",
    notes: "Visual organ",
    category: "body"
  },
  
  // F Section
  {
    english: "face",
    algonquian: "usckeintâp",
    pronunciation: "us-cke-in-tap",
    source: "Strachey",
    notes: "Front of head",
    category: "body"
  },
  {
    english: "fall down",
    algonquian: "cattacaunssiminis",
    pronunciation: "cat-ta-caun-ssi-mi-nis",
    source: "Strachey",
    notes: "Physical action",
    category: "actions"
  },
  {
    english: "father",
    algonquian: "noughs",
    pronunciation: "noughs",
    source: "Smith",
    notes: "Male parent",
    category: "family"
  },
  {
    english: "feather",
    algonquian: "mehtonaca",
    pronunciation: "meh-to-na-ca",
    source: "Strachey",
    notes: "Bird part",
    category: "animals"
  },
  {
    english: "fight",
    algonquian: "netecaân",
    pronunciation: "ne-te-ca-an",
    source: "Strachey",
    notes: "Conflict action",
    category: "actions"
  },
  {
    english: "fire",
    algonquian: "pohkhan",
    pronunciation: "poh-khan",
    source: "Strachey",
    notes: "Element, used ritually",
    category: "basic"
  },
  {
    english: "fish",
    algonquian: "nameeth",
    pronunciation: "na-meeth",
    source: "Strachey",
    notes: "Aquatic animal",
    category: "animals"
  },
  {
    english: "five",
    algonquian: "paranske",
    pronunciation: "pa-ran-ske",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "flesh",
    algonquian: "weyaus",
    pronunciation: "we-yaus",
    source: "Strachey",
    notes: "Body tissue, meat",
    category: "body"
  },
  {
    english: "flint",
    algonquian: "massapo",
    pronunciation: "mas-sa-po",
    source: "Strachey",
    notes: "Stone for tools",
    category: "objects"
  },
  {
    english: "flour",
    algonquian: "attattôpwooc",
    pronunciation: "at-tat-top-wooc",
    source: "Strachey",
    notes: "Ground meal",
    category: "basic"
  },
  {
    english: "food",
    algonquian: "mecawsun",
    pronunciation: "me-caw-sun",
    source: "Strachey",
    notes: "General term for nourishment",
    category: "basic"
  },
  {
    english: "foot",
    algonquian: "mysetts",
    pronunciation: "my-setts",
    source: "Strachey",
    notes: "Body part for walking",
    category: "body"
  },
  {
    english: "forest",
    algonquian: "matacôk",
    pronunciation: "ma-ta-cok",
    source: "Strachey",
    notes: "Wooded area",
    category: "nature"
  },
  {
    english: "four",
    algonquian: "yowgh",
    pronunciation: "yowgh",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "fox",
    algonquian: "ahsounnecôck",
    pronunciation: "ah-soun-ne-cock",
    source: "Strachey",
    notes: "Small forest predator",
    category: "animals"
  },
  {
    english: "friend",
    algonquian: "netap",
    pronunciation: "ne-tap",
    source: "Smith",
    notes: "Friendly person",
    category: "social"
  },
  {
    english: "frog",
    algonquian: "ottucoys",
    pronunciation: "ot-tu-coys",
    source: "Strachey",
    notes: "Amphibian",
    category: "animals"
  },
  
  // G Section
  {
    english: "girl",
    algonquian: "usqua",
    pronunciation: "us-qua",
    source: "Strachey",
    notes: "Young female",
    category: "family"
  },
  {
    english: "give",
    algonquian: "mache",
    pronunciation: "ma-che",
    source: "Smith",
    notes: "Action of offering",
    category: "actions"
  },
  {
    english: "go",
    algonquian: "moyatt",
    pronunciation: "mo-yatt",
    source: "Strachey",
    notes: "Movement action",
    category: "actions"
  },
  {
    english: "God",
    algonquian: "ahone, kiwassa",
    pronunciation: "a-ho-ne, ki-was-sa",
    source: "Strachey",
    notes: "Supreme deity",
    category: "spiritual"
  },
  {
    english: "good",
    algonquian: "winger",
    pronunciation: "win-ger",
    source: "Smith",
    notes: "Positive evaluation",
    category: "basic"
  },
  {
    english: "goose",
    algonquian: "cohunks",
    pronunciation: "co-hunks",
    source: "Strachey",
    notes: "Large waterfowl",
    category: "animals"
  },
  {
    english: "grass",
    algonquian: "attaskuss",
    pronunciation: "at-tas-kuss",
    source: "Strachey",
    notes: "Ground covering plant",
    category: "plants"
  },
  {
    english: "great",
    algonquian: "wêroan",
    pronunciation: "we-ro-an",
    source: "Smith",
    notes: "Large, important",
    category: "basic"
  },
  {
    english: "green",
    algonquian: "asqwarevh",
    pronunciation: "as-qwa-revh",
    source: "Strachey",
    notes: "Color term",
    category: "colors"
  },
  {
    english: "gun",
    algonquian: "pawcussac",
    pronunciation: "paw-cus-sac",
    source: "Smith",
    notes: "European weapon, adapted word",
    category: "objects"
  },
  
  // H Section
  {
    english: "hair",
    algonquian: "mehtaantequas",
    pronunciation: "meh-taan-te-quas",
    source: "Strachey",
    notes: "Body covering",
    category: "body"
  },
  {
    english: "hand",
    algonquian: "mêheock",
    pronunciation: "me-he-ock",
    source: "Strachey",
    notes: "Body part",
    category: "body"
  },
  {
    english: "head",
    algonquian: "mêttock",
    pronunciation: "met-tock",
    source: "Strachey",
    notes: "Upper body part",
    category: "body"
  },
  {
    english: "hear",
    algonquian: "nummawmaum",
    pronunciation: "num-maw-maum",
    source: "Strachey",
    notes: "Sense verb",
    category: "actions"
  },
  {
    english: "heart",
    algonquian: "ottehocannough",
    pronunciation: "ot-te-ho-can-nough",
    source: "Strachey",
    notes: "Internal organ",
    category: "body"
  },
  {
    english: "heaven",
    algonquian: "okenies",
    pronunciation: "o-ke-nies",
    source: "Strachey",
    notes: "Spiritual realm",
    category: "spiritual"
  },
  {
    english: "heavy",
    algonquian: "kequatan",
    pronunciation: "ke-qua-tan",
    source: "Strachey",
    notes: "Weight description",
    category: "basic"
  },
  {
    english: "hickory",
    algonquian: "pocohiccora",
    pronunciation: "po-co-hic-co-ra",
    source: "Strachey",
    notes: "Tree species, source of 'hickory' in English",
    category: "plants"
  },
  {
    english: "hill",
    algonquian: "pomotawk",
    pronunciation: "po-mo-tawk",
    source: "Strachey",
    notes: "Raised landform",
    category: "nature"
  },
  {
    english: "home",
    algonquian: "neke",
    pronunciation: "ne-ke",
    source: "Strachey",
    notes: "Dwelling place",
    category: "basic"
  },
  {
    english: "hot",
    algonquian: "sucquateyough",
    pronunciation: "suc-qua-te-yough",
    source: "Strachey",
    notes: "Temperature term",
    category: "weather"
  },
  {
    english: "house",
    algonquian: "yehawkan",
    pronunciation: "ye-haw-kan",
    source: "Strachey",
    notes: "Dwelling structure",
    category: "basic"
  },
  {
    english: "hundred",
    algonquian: "nekateywsapooeksku",
    pronunciation: "ne-ka-tey-wsa-poo-ek-sku",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "hungry",
    algonquian: "nátougwessum",
    pronunciation: "na-toug-wes-sum",
    source: "Strachey",
    notes: "State of needing food",
    category: "basic"
  },
  {
    english: "hunt",
    algonquian: "nattewowan",
    pronunciation: "nat-te-wo-wan",
    source: "Strachey",
    notes: "Food gathering activity",
    category: "actions"
  },
  {
    english: "husband",
    algonquian: "newssoanwâh",
    pronunciation: "news-so-an-wah",
    source: "Strachey",
    notes: "Male spouse",
    category: "family"
  },
  
  // I Section
  {
    english: "ice",
    algonquian: "kepatewassuntank",
    pronunciation: "ke-pa-te-was-sun-tank",
    source: "Strachey",
    notes: "Frozen water",
    category: "weather"
  },
  {
    english: "iron",
    algonquian: "tomahack",
    pronunciation: "to-ma-hack",
    source: "Strachey",
    notes: "Metal material, source of 'tomahawk' in English",
    category: "objects"
  },
  {
    english: "island",
    algonquian: "menâtaun",
    pronunciation: "me-na-taun",
    source: "Strachey",
    notes: "Land surrounded by water",
    category: "nature"
  },
  
  // K Section
  {
    english: "kill",
    algonquian: "nepahamôn",
    pronunciation: "ne-pa-ha-mon",
    source: "Strachey",
    notes: "Cause death",
    category: "actions"
  },
  {
    english: "king",
    algonquian: "werowance",
    pronunciation: "we-ro-wan-ce",
    source: "Smith",
    notes: "Ruler, chief",
    category: "social"
  },
  {
    english: "knife",
    algonquian: "pamêhsacan",
    pronunciation: "pa-meh-sa-can",
    source: "Strachey",
    notes: "Cutting tool",
    category: "objects"
  },
  {
    english: "knot",
    algonquian: "mowtchick",
    pronunciation: "mow-tchick",
    source: "Strachey",
    notes: "Tied binding",
    category: "objects"
  },
  
  // L Section
  {
    english: "lake",
    algonquian: "weyôk",
    pronunciation: "we-yok",
    source: "Strachey",
    notes: "Body of water",
    category: "nature"
  },
  {
    english: "laugh",
    algonquian: "onsekanakan",
    pronunciation: "on-se-ka-na-kan",
    source: "Strachey",
    notes: "Expression of joy",
    category: "actions"
  },
  {
    english: "leaf",
    algonquian: "nepinsh",
    pronunciation: "ne-pinsh",
    source: "Strachey",
    notes: "Tree part",
    category: "plants"
  },
  {
    english: "leg",
    algonquian: "mehcat",
    pronunciation: "meh-cat",
    source: "Strachey",
    notes: "Body limb",
    category: "body"
  },
  {
    english: "light",
    algonquian: "awepewhôtonwh",
    pronunciation: "a-we-pew-ho-tonwh",
    source: "Strachey",
    notes: "Illumination",
    category: "nature"
  },
  {
    english: "lightning",
    algonquian: "keihquâscussun",
    pronunciation: "keih-quas-cus-sun",
    source: "Strachey",
    notes: "Weather phenomenon",
    category: "weather"
  },
  {
    english: "live",
    algonquian: "keispeweyack",
    pronunciation: "keis-pe-we-yack",
    source: "Strachey",
    notes: "State of being alive",
    category: "basic"
  },
  {
    english: "love",
    algonquian: "nounghe",
    pronunciation: "noung-he",
    source: "Strachey",
    notes: "Emotion of affection",
    category: "basic"
  },
  {
    english: "lynx",
    algonquian: "pussôcunnûah",
    pronunciation: "pus-so-cun-nu-ah",
    source: "Strachey",
    notes: "Wild feline",
    category: "animals"
  },
  
  // M Section
  {
    english: "man",
    algonquian: "nemarough",
    pronunciation: "ne-ma-rough",
    source: "Smith",
    notes: "Adult male",
    category: "basic"
  },
  {
    english: "maple tree",
    algonquian: "masescum",
    pronunciation: "ma-ses-cum",
    source: "Strachey",
    notes: "Tree species",
    category: "plants"
  },
  {
    english: "meat",
    algonquian: "weyaus",
    pronunciation: "we-yaus",
    source: "Strachey",
    notes: "Animal flesh for food",
    category: "basic"
  },
  {
    english: "medicine",
    algonquian: "wisoccan",
    pronunciation: "wi-soc-can",
    source: "Smith",
    notes: "Healing substance",
    category: "basic"
  },
  {
    english: "moon",
    algonquian: "nepausche",
    pronunciation: "ne-pau-sche",
    source: "Strachey",
    notes: "Night celestial body",
    category: "nature"
  },
  {
    english: "morning",
    algonquian: "papasowh",
    pronunciation: "pa-pa-sowh",
    source: "Strachey",
    notes: "Early day",
    category: "time"
  },
  {
    english: "mother",
    algonquian: "anna",
    pronunciation: "an-na",
    source: "Smith",
    notes: "Female parent",
    category: "family"
  },
  {
    english: "mountain",
    algonquian: "pomottawk",
    pronunciation: "po-mot-tawk",
    source: "Strachey",
    notes: "Large landform",
    category: "nature"
  },
  {
    english: "mouth",
    algonquian: "mettoone",
    pronunciation: "met-too-ne",
    source: "Strachey",
    notes: "Body opening for eating",
    category: "body"
  },
  
  // N Section
  {
    english: "name",
    algonquian: "yêhaukan",
    pronunciation: "ye-hau-kan",
    source: "Strachey",
    notes: "Personal identifier",
    category: "basic"
  },
  {
    english: "neck",
    algonquian: "memenchum",
    pronunciation: "me-men-chum",
    source: "Strachey",
    notes: "Body part",
    category: "body"
  },
  {
    english: "net",
    algonquian: "ahsâp",
    pronunciation: "ah-sap",
    source: "Strachey",
    notes: "Fishing tool",
    category: "objects"
  },
  {
    english: "night",
    algonquian: "tapacoh",
    pronunciation: "ta-pa-coh",
    source: "Strachey",
    notes: "Dark time",
    category: "time"
  },
  {
    english: "nine",
    algonquian: "kyketawe",
    pronunciation: "ky-ke-ta-we",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "nose",
    algonquian: "meschwipêcat",
    pronunciation: "mesch-wi-pe-cat",
    source: "Strachey",
    notes: "Facial feature",
    category: "body"
  },
  {
    english: "nut",
    algonquian: "assinimmeis",
    pronunciation: "as-si-nim-meis",
    source: "Strachey",
    notes: "Tree seed",
    category: "plants"
  },
  
  // O Section
  {
    english: "oak tree",
    algonquian: "mohomindge",
    pronunciation: "mo-ho-mind-ge",
    source: "Strachey",
    notes: "Tree species",
    category: "plants"
  },
  {
    english: "opossum",
    algonquian: "aposoum",
    pronunciation: "a-po-soum",
    source: "Strachey",
    notes: "Marsupial, source of 'opossum' in English",
    category: "animals"
  },
  {
    english: "otter",
    algonquian: "cûttaquincheméns",
    pronunciation: "cut-ta-quin-che-mens",
    source: "Strachey",
    notes: "Aquatic mammal",
    category: "animals"
  },
  
  // P Section
  {
    english: "pain",
    algonquian: "amatêwh",
    pronunciation: "a-ma-tewh",
    source: "Strachey",
    notes: "Physical discomfort",
    category: "body"
  },
  {
    english: "paint",
    algonquian: "uhcatéwh",
    pronunciation: "uh-ca-tewh",
    source: "Strachey",
    notes: "Coloring substance",
    category: "objects"
  },
  {
    english: "path",
    algonquian: "mehct",
    pronunciation: "mehct",
    source: "Strachey",
    notes: "Walking trail",
    category: "nature"
  },
  {
    english: "peas",
    algonquian: "assemmowghsemina",
    pronunciation: "as-sem-mowgh-se-mi-na",
    source: "Strachey",
    notes: "Small food item",
    category: "plants"
  },
  {
    english: "persimmon",
    algonquian: "pessemmins",
    pronunciation: "pes-sem-mins",
    source: "Strachey",
    notes: "Fruit, source of 'persimmon' in English",
    category: "plants"
  },
  {
    english: "pine tree",
    algonquian: "wnssapih",
    pronunciation: "wns-sa-pih",
    source: "Strachey",
    notes: "Evergreen tree",
    category: "plants"
  },
  {
    english: "pipe",
    algonquian: "apooke",
    pronunciation: "a-poo-ke",
    source: "Strachey",
    notes: "Smoking device",
    category: "objects"
  },
  {
    english: "plant",
    algonquian: "attass",
    pronunciation: "at-tass",
    source: "Strachey",
    notes: "Growing living thing",
    category: "plants"
  },
  {
    english: "play",
    algonquian: "mamantobpassewh",
    pronunciation: "ma-man-tob-pas-sewh",
    source: "Strachey",
    notes: "Recreational activity",
    category: "actions"
  },
  {
    english: "pumpkin",
    algonquian: "macocks",
    pronunciation: "ma-cocks",
    source: "Strachey",
    notes: "Large gourd",
    category: "plants"
  },
  
  // Q Section
  {
    english: "quail",
    algonquian: "ohauhnoc",
    pronunciation: "o-hauh-noc",
    source: "Strachey",
    notes: "Small bird",
    category: "animals"
  },
  {
    english: "quick",
    algonquian: "utcheiscummens",
    pronunciation: "ut-cheis-cum-mens",
    source: "Strachey",
    notes: "Fast movement",
    category: "basic"
  },
  
  // R Section
  {
    english: "rabbit",
    algonquian: "wêhsacat",
    pronunciation: "weh-sa-cat",
    source: "Strachey",
    notes: "Small mammal",
    category: "animals"
  },
  {
    english: "raccoon",
    algonquian: "aroughcun",
    pronunciation: "a-rough-cun",
    source: "Strachey",
    notes: "Forest animal, source of 'raccoon' in English",
    category: "animals"
  },
  {
    english: "rain",
    algonquian: "kemowan",
    pronunciation: "ke-mo-wan",
    source: "Strachey",
    notes: "Weather condition",
    category: "weather"
  },
  {
    english: "red",
    algonquian: "nehessayew",
    pronunciation: "ne-hes-sa-yew",
    source: "Strachey",
    notes: "Color term",
    category: "colors"
  },
  {
    english: "river",
    algonquian: "seip",
    pronunciation: "seip",
    source: "Strachey",
    notes: "Flowing water body",
    category: "nature"
  },
  {
    english: "rock",
    algonquian: "othassik",
    pronunciation: "o-thas-sik",
    source: "Strachey",
    notes: "Stone",
    category: "nature"
  },
  {
    english: "rope",
    algonquian: "pemuntah",
    pronunciation: "pe-mun-tah",
    source: "Strachey",
    notes: "Binding material",
    category: "objects"
  },
  {
    english: "run",
    algonquian: "pettecoagh",
    pronunciation: "pet-te-co-agh",
    source: "Strachey",
    notes: "Fast movement",
    category: "actions"
  },
  
  // S Section
  {
    english: "salt",
    algonquian: "sawwone",
    pronunciation: "saw-wo-ne",
    source: "Strachey",
    notes: "Seasoning mineral",
    category: "basic"
  },
  {
    english: "sand",
    algonquian: "aggonshetôck",
    pronunciation: "ag-gon-she-tock",
    source: "Strachey",
    notes: "Fine earth material",
    category: "nature"
  },
  {
    english: "say",
    algonquian: "iynough",
    pronunciation: "iy-nough",
    source: "Smith",
    notes: "Speak words",
    category: "actions"
  },
  {
    english: "sea",
    algonquian: "uttamamashaw",
    pronunciation: "ut-ta-ma-ma-shaw",
    source: "Strachey",
    notes: "Large body of water",
    category: "nature"
  },
  {
    english: "see",
    algonquian: "nummêching",
    pronunciation: "num-me-ching",
    source: "Strachey",
    notes: "Visual perception",
    category: "actions"
  },
  {
    english: "seven",
    algonquian: "toppawoss",
    pronunciation: "top-pa-woss",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "shirt",
    algonquian: "aquewan",
    pronunciation: "a-que-wan",
    source: "Strachey",
    notes: "Upper body clothing",
    category: "objects"
  },
  {
    english: "shoe",
    algonquian: "mockasin",
    pronunciation: "mock-a-sin",
    source: "Smith",
    notes: "Foot covering, source of 'moccasin' in English",
    category: "objects"
  },
  {
    english: "sing",
    algonquian: "ottuwâigh",
    pronunciation: "ot-tu-waigh",
    source: "Strachey",
    notes: "Musical vocalization",
    category: "actions"
  },
  {
    english: "sister",
    algonquian: "nummisseshew",
    pronunciation: "num-mis-se-shew",
    source: "Strachey",
    notes: "Female sibling",
    category: "family"
  },
  {
    english: "sit",
    algonquian: "mattuttâish",
    pronunciation: "mat-tut-taish",
    source: "Strachey",
    notes: "Resting position",
    category: "actions"
  },
  {
    english: "six",
    algonquian: "comotinch",
    pronunciation: "co-mo-tinch",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "skin",
    algonquian: "nahawnonack",
    pronunciation: "na-haw-no-nack",
    source: "Strachey",
    notes: "Body covering",
    category: "body"
  },
  {
    english: "sky",
    algonquian: "arrokoth",
    pronunciation: "ar-ro-koth",
    source: "Strachey",
    notes: "Upper atmosphere",
    category: "nature"
  },
  {
    english: "sleep",
    algonquian: "asapan",
    pronunciation: "a-sa-pan",
    source: "Strachey",
    notes: "Rest state",
    category: "actions"
  },
  {
    english: "small",
    algonquian: "matasseyowh",
    pronunciation: "ma-tas-sey-owh",
    source: "Strachey",
    notes: "Size descriptor",
    category: "basic"
  },
  {
    english: "snake",
    algonquian: "ascook",
    pronunciation: "as-cook",
    source: "Strachey",
    notes: "Reptile",
    category: "animals"
  },
  {
    english: "snow",
    algonquian: "macatêwh",
    pronunciation: "ma-ca-tewh",
    source: "Strachey",
    notes: "Weather condition",
    category: "weather"
  },
  {
    english: "son",
    algonquian: "neputtishow",
    pronunciation: "ne-put-ti-show",
    source: "Strachey",
    notes: "Male offspring",
    category: "family"
  },
  {
    english: "speak",
    algonquian: "kettorauog",
    pronunciation: "ket-to-rau-og",
    source: "Strachey",
    notes: "Verbal communication",
    category: "actions"
  },
  {
    english: "squirrel",
    algonquian: "mussanicka",
    pronunciation: "mus-sa-nic-ka",
    source: "Strachey",
    notes: "Small tree animal",
    category: "animals"
  },
  {
    english: "star",
    algonquian: "punnahe",
    pronunciation: "pun-na-he",
    source: "Strachey",
    notes: "Night sky object",
    category: "nature"
  },
  {
    english: "stick",
    algonquian: "mehtugkquash",
    pronunciation: "meh-tugk-quash",
    source: "Strachey",
    notes: "Wooden piece",
    category: "objects"
  },
  {
    english: "stone",
    algonquian: "assoone",
    pronunciation: "as-soo-ne",
    source: "Strachey",
    notes: "Hard earth material",
    category: "nature"
  },
  {
    english: "strawberry",
    algonquian: "wichasakon",
    pronunciation: "wi-cha-sa-kon",
    source: "Strachey",
    notes: "Red berry",
    category: "plants"
  },
  {
    english: "strong",
    algonquian: "weesecannôt",
    pronunciation: "wee-se-can-not",
    source: "Strachey",
    notes: "Physical power",
    category: "basic"
  },
  {
    english: "summer",
    algonquian: "cawqwaih",
    pronunciation: "caw-qwaih",
    source: "Strachey",
    notes: "Warm season",
    category: "time"
  },
  {
    english: "sun",
    algonquian: "keshowaugh",
    pronunciation: "ke-sho-waugh",
    source: "Strachey",
    notes: "Day celestial body",
    category: "nature"
  },
  {
    english: "sweet",
    algonquian: "wîngan",
    pronunciation: "win-gan",
    source: "Strachey",
    notes: "Pleasant taste",
    category: "basic"
  },
  {
    english: "swim",
    algonquian: "tusshakehawh",
    pronunciation: "tus-sha-ke-hawh",
    source: "Strachey",
    notes: "Water movement",
    category: "actions"
  },
  
  // T Section
  {
    english: "take",
    algonquian: "necassunnamen",
    pronunciation: "ne-cas-sun-na-men",
    source: "Strachey",
    notes: "Acquire action",
    category: "actions"
  },
  {
    english: "talk",
    algonquian: "yekûth",
    pronunciation: "ye-kuth",
    source: "Strachey",
    notes: "Communication",
    category: "actions"
  },
  {
    english: "teeth",
    algonquian: "neputtetâssuacans",
    pronunciation: "ne-put-te-tas-sua-cans",
    source: "Strachey",
    notes: "Mouth parts",
    category: "body"
  },
  {
    english: "ten",
    algonquian: "cassacomêh",
    pronunciation: "cas-sa-co-meh",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "thank you",
    algonquian: "wingapo",
    pronunciation: "win-ga-po",
    source: "Smith",
    notes: "Expression of gratitude",
    category: "basic"
  },
  {
    english: "that",
    algonquian: "nawwot",
    pronunciation: "naw-wot",
    source: "Strachey",
    notes: "Demonstrative",
    category: "basic"
  },
  {
    english: "there",
    algonquian: "neuttah",
    pronunciation: "neut-tah",
    source: "Strachey",
    notes: "Location indicator",
    category: "basic"
  },
  {
    english: "they",
    algonquian: "yêwogh",
    pronunciation: "ye-wogh",
    source: "Strachey",
    notes: "Third person plural",
    category: "basic"
  },
  {
    english: "thigh",
    algonquian: "mehcowewen",
    pronunciation: "meh-co-we-wen",
    source: "Strachey",
    notes: "Upper leg",
    category: "body"
  },
  {
    english: "think",
    algonquian: "netebôwh",
    pronunciation: "ne-te-bowh",
    source: "Strachey",
    notes: "Mental activity",
    category: "actions"
  },
  {
    english: "thirsty",
    algonquian: "unquanshowaih",
    pronunciation: "un-quan-sho-waih",
    source: "Strachey",
    notes: "Need for water",
    category: "basic"
  },
  {
    english: "three",
    algonquian: "nuss",
    pronunciation: "nuss",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "throw",
    algonquian: "uppocútamun",
    pronunciation: "up-po-cu-ta-mun",
    source: "Strachey",
    notes: "Projecting action",
    category: "actions"
  },
  {
    english: "thunder",
    algonquian: "kawmêtowh",
    pronunciation: "kaw-me-towh",
    source: "Strachey",
    notes: "Storm sound",
    category: "weather"
  },
  {
    english: "today",
    algonquian: "yuhatquitschumumossum",
    pronunciation: "yu-hat-quit-schu-mu-mos-sum",
    source: "Strachey",
    notes: "Present time",
    category: "time"
  },
  {
    english: "tomorrow",
    algonquian: "yraphê",
    pronunciation: "y-ra-phe",
    source: "Strachey",
    notes: "Future time",
    category: "time"
  },
  {
    english: "tongue",
    algonquian: "metetsheew",
    pronunciation: "me-tet-sheew",
    source: "Strachey",
    notes: "Mouth organ",
    category: "body"
  },
  {
    english: "tooth",
    algonquian: "nepetâssuac",
    pronunciation: "ne-pe-tas-suac",
    source: "Strachey",
    notes: "Mouth part",
    category: "body"
  },
  {
    english: "tree",
    algonquian: "mahtask",
    pronunciation: "mah-task",
    source: "Strachey",
    notes: "Woody plant",
    category: "plants"
  },
  {
    english: "turkey",
    algonquian: "monanaw",
    pronunciation: "mo-na-naw",
    source: "Strachey",
    notes: "Large bird",
    category: "animals"
  },
  {
    english: "turtle",
    algonquian: "comôtoah",
    pronunciation: "co-mo-to-ah",
    source: "Strachey",
    notes: "Shelled reptile",
    category: "animals"
  },
  {
    english: "twenty",
    algonquian: "ningecuttaughwunshquenekâttough",
    pronunciation: "nin-ge-cut-taugh-wunsh-que-ne-kat-tough",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  {
    english: "two",
    algonquian: "ningh",
    pronunciation: "ningh",
    source: "Strachey",
    notes: "Numerical term",
    category: "numbers"
  },
  
  // U Section
  {
    english: "ugly",
    algonquian: "mumsayêwh",
    pronunciation: "mum-say-ewh",
    source: "Strachey",
    notes: "Unattractive",
    category: "basic"
  },
  
  // V Section
  {
    english: "village",
    algonquian: "mangôit",
    pronunciation: "man-goit",
    source: "Strachey",
    notes: "Settlement",
    category: "social"
  },
  
  // W Section
  {
    english: "walk",
    algonquian: "pomiteyouqh",
    pronunciation: "po-mi-te-youqh",
    source: "Strachey",
    notes: "Movement on foot",
    category: "actions"
  },
  {
    english: "war",
    algonquian: "mowhchick",
    pronunciation: "mowh-chick",
    source: "Strachey",
    notes: "Armed conflict",
    category: "social"
  },
  {
    english: "warm",
    algonquian: "apôtekeyqwoh",
    pronunciation: "a-po-te-key-qwoh",
    source: "Strachey",
    notes: "Comfortable temperature",
    category: "weather"
  },
  {
    english: "warrior",
    algonquian: "nemarough",
    pronunciation: "ne-ma-rough",
    source: "Strachey",
    notes: "Fighting man",
    category: "social"
  },
  {
    english: "water",
    algonquian: "sucquehanna",
    pronunciation: "suc-que-han-na",
    source: "Smith",
    notes: "Liquid for drinking",
    category: "basic"
  },
  {
    english: "weak",
    algonquian: "kequassinum",
    pronunciation: "ke-quas-si-num",
    source: "Strachey",
    notes: "Lacking strength",
    category: "basic"
  },
  {
    english: "weep",
    algonquian: "namountamen",
    pronunciation: "na-moun-ta-men",
    source: "Strachey",
    notes: "Crying",
    category: "actions"
  },
  {
    english: "west",
    algonquian: "uttesheskayough",
    pronunciation: "ut-te-shes-ka-yough",
    source: "Strachey",
    notes: "Directional",
    category: "nature"
  },
  {
    english: "whale",
    algonquian: "potewallonsheeah",
    pronunciation: "po-te-wal-lon-shee-ah",
    source: "Strachey",
    notes: "Large sea mammal",
    category: "animals"
  },
  {
    english: "what",
    algonquian: "kekoy",
    pronunciation: "ke-koy",
    source: "Smith",
    notes: "Question word",
    category: "basic"
  },
  {
    english: "white",
    algonquian: "wompsipim",
    pronunciation: "womp-si-pim",
    source: "Strachey",
    notes: "Color term",
    category: "colors"
  },
  {
    english: "wife",
    algonquian: "niourough",
    pronunciation: "niou-rough",
    source: "Smith",
    notes: "Female spouse",
    category: "family"
  },
  {
    english: "wind",
    algonquian: "pahquiwh",
    pronunciation: "pah-quiwh",
    source: "Strachey",
    notes: "Moving air",
    category: "weather"
  },
  {
    english: "winter",
    algonquian: "popanow",
    pronunciation: "po-pa-now",
    source: "Strachey",
    notes: "Cold season",
    category: "time"
  },
  {
    english: "wolf",
    algonquian: "naantam",
    pronunciation: "naan-tam",
    source: "Strachey",
    notes: "Predator animal",
    category: "animals"
  },
  {
    english: "woman",
    algonquian: "cusses",
    pronunciation: "cus-ses",
    source: "Smith",
    notes: "Adult female",
    category: "basic"
  },
  {
    english: "wood",
    algonquian: "apook",
    pronunciation: "a-pook",
    source: "Strachey",
    notes: "Material from trees",
    category: "nature"
  },
  
  // Y Section
  {
    english: "year",
    algonquian: "popâpow",
    pronunciation: "po-pa-pow",
    source: "Strachey",
    notes: "Time measure",
    category: "time"
  },
  {
    english: "yellow",
    algonquian: "wussawhu",
    pronunciation: "wus-saw-hu",
    source: "Strachey",
    notes: "Color term",
    category: "colors"
  },
  {
    english: "yesterday",
    algonquian: "ouskêo",
    pronunciation: "ous-ke-o",
    source: "Strachey",
    notes: "Past time",
    category: "time"
  },
  {
    english: "you",
    algonquian: "kêmatah",
    pronunciation: "ke-ma-tah",
    source: "Strachey",
    notes: "Second person",
    category: "basic"
  }
];

// Global variables
let learnedWords = new Set();
let currentCategory = "all";
let currentIndex = 0;
let filteredVocabulary = [...vocabularyData];
let isFlipped = false;
let audioPlayer = new Audio();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("Virginia Algonquian Language App script loaded");
  init();
});

// Main initialization function
function init() {
  console.log("Initializing Virginia Algonquian Language App...");
  
  // Load learned words from localStorage if available
  const savedLearned = localStorage.getItem('learnedVirginiaAlgonquianWords');
  if (savedLearned) {
    try {
      learnedWords = new Set(JSON.parse(savedLearned));
      console.log(`Loaded ${learnedWords.size} learned words from localStorage`);
    } catch (e) {
      console.error("Error loading learned words from localStorage:", e);
      learnedWords = new Set();
    }
  }
  
  // Ensure filteredVocabulary is populated
  if (filteredVocabulary.length === 0) {
    filteredVocabulary = [...vocabularyData];
  }
  
  // Shuffle the words
  shuffleArray(filteredVocabulary);
  
  // Update stats display
  updateStats();
  
  // Display the first word
  displayWord();
  
  // Set up event listeners
  setupEventListeners();
  
  // Try to load external vocabulary data (but keep using built-in data if it fails)
  tryLoadExternalVocabulary();
  
  // Check if we need to modify the HTML to support audio
  modifyHTMLIfNeeded();
  
  console.log("Initialization complete!");
}

// Check and modify HTML if needed to support audio functionality
function modifyHTMLIfNeeded() {
  // Check if we already have the audio button in HTML
  if (!document.querySelector('.card-back button#play-audio-btn')) {
    // Update card-back template to include audio button
    const cardBack = document.querySelector('.card-back');
    if (cardBack) {
      // Create a placeholder for the audio button between notes and bottom symbol
      const notesElement = cardBack.querySelector('.notes');
      
      if (notesElement) {
        // Create audio button element
        const audioButtonHTML = `
          <div class="audio-control">
            <button id="play-audio-btn" class="audio-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Play Pronunciation
            </button>
          </div>
        `;
        
        // Insert after notes
        notesElement.insertAdjacentHTML('afterend', audioButtonHTML);
        
        // Add event listener to the new button
        const playAudioBtn = document.getElementById('play-audio-btn');
        if (playAudioBtn) {
          playAudioBtn.addEventListener('click', function(e) {
            playCurrentWordAudio();
            e.stopPropagation();
          });
        }
      }
    }
    
    // Add CSS for the audio button
    addAudioButtonStyles();
  }
}

// Add CSS styles for the audio button
function addAudioButtonStyles() {
  if (!document.querySelector('style#audio-button-styles')) {
    const style = document.createElement('style');
    style.id = 'audio-button-styles';
    style.textContent = `
      .audio-control {
        margin: 5px auto;
        text-align: center;
        display: block;
        clear: both;
      }
      
      .audio-button {
        background-color: #563d2d;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 6px 12px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease;
        font-family: inherit;
      }
      
      .audio-button:hover {
        background-color: #6e4e3a;
      }
      
      .audio-button:disabled {
        background-color: #ccbbaa;
        cursor: not-allowed;
      }
      
      /* Fix spacing in card back elements */
      .card-back {
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
      }
      
      .card-back .word {
        margin: 0 0 4px 0;
      }
      
      .card-back .pronunciation {
        color: #c4634b;
        font-style: italic;
        margin: 0 0 8px 0;
      }
      
      .card-back .source {
        font-size: 0.9em;
        color: #697268;
        margin: 0 0 4px 0;
      }
      
      .card-back .notes {
        font-size: 0.9em;
        color: #697268;
        margin: 0 0 5px 0;
        line-height: 1.2;
      }
      
      /* Adjust symbol spacing */
      .card-back .symbol {
        margin: 2px;
      }
      
      /* Card adjustments */
      .card-container {
        margin: 20px auto;
        perspective: 1000px;
        height: 300px;
      }
      
      .card {
        height: 100%;
      }
    `;
    document.head.appendChild(style);
  }
}

// Set up all event listeners
function setupEventListeners() {
  // Card flip event - add to both card and flip button
  const flashcard = document.getElementById('flashcard');
  
  if (flashcard) {
    flashcard.addEventListener('click', function(e) {
      // Don't toggle if clicking on a button inside the card
      if (!e.target.closest('button')) {
        toggleCardFlip();
        e.stopPropagation();
      }
    });
  }
  
  const flipBtn = document.getElementById('flip-btn');
  if (flipBtn) {
    flipBtn.addEventListener('click', function(e) {
      toggleCardFlip();
      e.stopPropagation(); // Prevent the card click event from also firing
    });
  }
  
  // Next word button
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      nextWord();
      e.stopPropagation(); // Prevent the card click event from also firing
    });
  }
  
  // Mark as learned button
  const markLearnedBtn = document.getElementById('mark-learned-btn');
  if (markLearnedBtn) {
    markLearnedBtn.addEventListener('click', function(e) {
      markAsLearned();
      e.stopPropagation(); // Prevent the card click event from also firing
    });
  }
  
  // Category buttons
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Set current category
      currentCategory = this.dataset.category;
      
      // Update active button styling
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter vocabulary based on category
      if (currentCategory === 'all') {
        filteredVocabulary = [...vocabularyData];
      } else {
        filteredVocabulary = vocabularyData.filter(word => word.category === currentCategory);
      }
      
      // Shuffle and reset
      shuffleArray(filteredVocabulary);
      currentIndex = 0;
      isFlipped = false;
      updateStats();
      displayWord();
    });
  });
  
  // Audio button (may be dynamically added later)
  const playAudioBtn = document.getElementById('play-audio-btn');
  if (playAudioBtn) {
    playAudioBtn.addEventListener('click', function(e) {
      playCurrentWordAudio();
      e.stopPropagation(); // Prevent card flip
    });
  }
  
  // Add keyboard support
  document.addEventListener('keydown', function(e) {
    // Space or Enter to flip card
    if (e.code === 'Space' || e.code === 'Enter') {
      toggleCardFlip();
      e.preventDefault();
    }
    // Right arrow for next word
    else if (e.code === 'ArrowRight') {
      nextWord();
      e.preventDefault();
    }
    // L key to mark as learned
    else if (e.code === 'KeyL') {
      markAsLearned();
      e.preventDefault();
    }
    // A key for audio playback
    else if (e.code === 'KeyA') {
      playCurrentWordAudio();
      e.preventDefault();
    }
  });
}

// Function to play audio for current word
function playCurrentWordAudio() {
  if (filteredVocabulary.length === 0) return;
  
  const word = filteredVocabulary[currentIndex];
  // Create safe filename from the Algonquian word (only use first word if multiple)
  const algonquianWord = word.algonquian.split(',')[0].trim();
  const filename = algonquianWord.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.mp3';
  
  // Update button to show loading state
  const playBtn = document.getElementById('play-audio-btn');
  if (!playBtn) return;
  
  const originalText = playBtn.innerHTML;
  playBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
    Playing...
  `;
  playBtn.disabled = true;
  
  // Set the audio source
  audioPlayer.src = `audio/${filename}`;
  
  // Play the audio
  audioPlayer.play().catch(err => {
    console.error("Error playing audio:", err);
    alert("Could not play the audio file. Make sure you have generated the audio files and placed them in an 'audio' folder.");
  });
  
  // Reset button when audio finishes
  audioPlayer.onended = function() {
    playBtn.innerHTML = originalText;
    playBtn.disabled = false;
  };
  
  // Also reset on error
  audioPlayer.onerror = function() {
    playBtn.innerHTML = originalText;
    playBtn.disabled = false;
    console.error(`Error loading audio file: audio/${filename}`);
  };
}

// Function to display the current word
function displayWord() {
  // Check if we have words available
  if (filteredVocabulary.length === 0) {
    document.getElementById('english-word').textContent = "No words available in this category";
    return;
  }
  
  // Get the current word
  const word = filteredVocabulary[currentIndex];
  
  // Reset card to front side if it was flipped
  if (isFlipped) {
    document.getElementById('flashcard').classList.remove('flipped');
    isFlipped = false;
  }
  
  // Update content
  document.getElementById('english-word').textContent = word.english;
  document.getElementById('algonquian-word').textContent = word.algonquian;
  document.getElementById('pronunciation').textContent = word.pronunciation;
  document.getElementById('source').textContent = `Source: ${word.source}`;
  document.getElementById('notes').textContent = word.notes;

  // Update emoji hints
const emojiHintFront = document.getElementById('emoji-hint-front');
const emojiHintBack = document.getElementById('emoji-hint-back');

if (emojiHintFront) {
  emojiHintFront.textContent = word.emojiHint || '';
}
if (emojiHintBack) {
  emojiHintBack.textContent = word.emojiHint || '';
}
  
  // Reset audio player
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  
  // Reset play button if it exists
  const playBtn = document.getElementById('play-audio-btn');
  if (playBtn) {
    playBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      Play Pronunciation
    `;
    playBtn.disabled = false;
  }
  
  // Update mark learned button
  const markLearnedBtn = document.getElementById('mark-learned-btn');
  if (!markLearnedBtn) return;
  
  if (learnedWords.has(word.english)) {
    markLearnedBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
      </svg>
      Already Learned
    `;
    markLearnedBtn.disabled = true;
    markLearnedBtn.classList.add('learned');
  } else {
    markLearnedBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      Mark as Learned
    `;
    markLearnedBtn.disabled = false;
    markLearnedBtn.classList.remove('learned');
  }
}

// Toggle card flip state
function toggleCardFlip() {
  const flashcard = document.getElementById('flashcard');
  if (!flashcard) return;
  
  isFlipped = !isFlipped;
  
  if (isFlipped) {
    flashcard.classList.add('flipped');
  } else {
    flashcard.classList.remove('flipped');
  }
}

// Function to go to the next word
function nextWord() {
  if (filteredVocabulary.length === 0) return;
  
  // Move to next word (with wrap-around)
  currentIndex = (currentIndex + 1) % filteredVocabulary.length;
  
  // Reset flip state
  isFlipped = false;
  
  // Update display
  displayWord();
}

// Function to mark a word as learned
function markAsLearned() {
  if (filteredVocabulary.length === 0) return;
  
  const word = filteredVocabulary[currentIndex];
  learnedWords.add(word.english);
  
  // Save to localStorage
  try {
    localStorage.setItem('learnedVirginiaAlgonquianWords', JSON.stringify([...learnedWords]));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
  
  // Update stats and button
  updateStats();
  const markLearnedBtn = document.getElementById('mark-learned-btn');
  if (!markLearnedBtn) return;
  
  markLearnedBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 11l3 3L22 4"></path>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
    </svg>
    Learned!
  `;
  markLearnedBtn.disabled = true;
  markLearnedBtn.classList.add('learned');
  
  // Go to next word after a short delay
  setTimeout(function() {
    nextWord();
  }, 1000);
}

// Function to update stats
function updateStats() {
  const learnedCount = document.getElementById('learned-count');
  const totalCount = document.getElementById('total-count');
  const progressBar = document.getElementById('progress-bar');
  
  if (!learnedCount || !totalCount || !progressBar) return;
  
  // Count learned words in current category
  let learnedInCategory = 0;
  let totalInCategory = 0;
  
  if (currentCategory === 'all') {
    learnedInCategory = learnedWords.size;
    totalInCategory = vocabularyData.length;
  } else {
    const categoryWords = vocabularyData.filter(word => word.category === currentCategory);
    learnedInCategory = categoryWords.filter(word => learnedWords.has(word.english)).length;
    totalInCategory = categoryWords.length;
  }
  
  // Update display
  learnedCount.textContent = learnedInCategory;
  totalCount.textContent = totalInCategory;
  
  // Update progress bar
  const percentage = totalInCategory > 0 ? (learnedInCategory / totalInCategory) * 100 : 0;
  progressBar.style.width = `${percentage}%`;
}

// Utility function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Improved function to load vocabulary data from external file
async function tryLoadExternalVocabulary() {
  console.log("Attempting to load external vocabulary data...");
  try {
    // First try with fetch
    console.log("Fetching vocabulary-data.json...");
    const response = await fetch('vocabulary-data.json');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    console.log("File fetched successfully, parsing JSON...");
    const text = await response.text(); // Get as text first
    console.log(`JSON file size: ${text.length} characters`);
    
    // Try to parse the JSON
    const data = JSON.parse(text);
    
    if (!Array.isArray(data)) {
      throw new Error("Vocabulary data is not an array");
    }
    
    console.log(`Found ${data.length} vocabulary entries`);
    
    // Check if entries have emoji hints
    const entriesWithEmojis = data.filter(word => word.emojiHint);
    console.log(`Entries with emoji hints: ${entriesWithEmojis.length}`);
    
    // Clear built-in data and add loaded data
    vocabularyData.length = 0;
    vocabularyData.push(...data);
    console.log("Successfully loaded vocabulary data from external file");
    
    // Update the display
    filteredVocabulary = [...vocabularyData];
    shuffleArray(filteredVocabulary);
    updateStats();
    displayWord();
    return true;
    
  } catch (error) {
    console.error("Detailed error loading vocabulary data:", error);
    
    if (error instanceof SyntaxError) {
      console.error("JSON Syntax Error Details:", error.message);
      // Try to extract line number from error message
      const match = error.message.match(/position (\d+)/);
      if (match) {
        const position = parseInt(match[1]);
        console.error(`Error near character position: ${position}`);
      }
    }
    
    console.log(`Using built-in vocabulary data due to: ${error.message}`);
    // Continue with built-in data
    return false;
  }
}
