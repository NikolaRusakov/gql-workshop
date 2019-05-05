export interface RestCountriesModel {
    countries?: Country[];
}

export interface Country {
    name?: CountryName;
    topLevelDomain?: string[];
    alpha2Code?: Alpha2Code;
    alpha3Code?: Alpha3Code;
    callingCodes?: string[];
    capital?: Capital;
    altSpellings?: string[];
    region?: Region;
    subregion?: string;
    population?: number;
    latlng?: number[];
    demonym?: string;
    area?: number | null;
    gini?: number | null;
    timezones?: string[];
    borders?: string[];
    nativeName?: string;
    numericCode?: null | string;
    currencies?: Currency[];
    languages?: Language[];
    translations?: Translations;
    flag?: string;
    regionalBlocs?: RegionalBloc[];
    cioc?: null | string;
}


export interface Language {
    iso6391?: null | string;
    iso6392?: string;
    name?: string;
    nativeName?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Asia = "Asia",
    Empty = "",
    Europe = "Europe",
    Oceania = "Oceania",
    Polar = "Polar",
}

export interface RegionalBloc {
    acronym?: Acronym;
    name?: Name;
    otherAcronyms?: OtherAcronym[];
    otherNames?: OtherName[];
}

export enum Acronym {
    Al = "AL",
    Asean = "ASEAN",
    Au = "AU",
    Cais = "CAIS",
    Caricom = "CARICOM",
    Cefta = "CEFTA",
    Eeu = "EEU",
    Efta = "EFTA",
    Eu = "EU",
    Nafta = "NAFTA",
    Pa = "PA",
    Saarc = "SAARC",
    Usan = "USAN",
}

export enum Name {
    AfricanUnion = "African Union",
    ArabLeague = "Arab League",
    AssociationOfSoutheastAsianNations = "Association of Southeast Asian Nations",
    CaribbeanCommunity = "Caribbean Community",
    CentralAmericanIntegrationSystem = "Central American Integration System",
    CentralEuropeanFreeTradeAgreement = "Central European Free Trade Agreement",
    EurasianEconomicUnion = "Eurasian Economic Union",
    EuropeanFreeTradeAssociation = "European Free Trade Association",
    EuropeanUnion = "European Union",
    NorthAmericanFreeTradeAgreement = "North American Free Trade Agreement",
    PacificAlliance = "Pacific Alliance",
    SouthAsianAssociationForRegionalCooperation = "South Asian Association for Regional Cooperation",
    UnionOfSouthAmericanNations = "Union of South American Nations",
}

export enum OtherAcronym {
    Eaeu = "EAEU",
    Sica = "SICA",
    Unasul = "UNASUL",
    Unasur = "UNASUR",
    Uzan = "UZAN",
}

export enum OtherName {
    AccordDeLibreÉchangeNordAméricain = "Accord de Libre-échange Nord-Américain",
    AlianzaDelPacífico = "Alianza del Pacífico",
    CaribischeGemeenschap = "Caribische Gemeenschap",
    CommunautéCaribéenne = "Communauté Caribéenne",
    ComunidadDelCaribe = "Comunidad del Caribe",
    JāmiAtAdDuwalAlArabīyah = "Jāmiʻat ad-Duwal al-ʻArabīyah",
    LeagueOfArabStates = "League of Arab States",
    SistemaDeLaIntegraciónCentroamericana = "Sistema de la Integración Centroamericana,",
    SouthAmericanUnion = "South American Union",
    TratadoDeLibreComercioDeAméricaDelNorte = "Tratado de Libre Comercio de América del Norte",
    UmojaWaAfrika = "Umoja wa Afrika",
    UnieVanZuidAmerikaanseNaties = "Unie van Zuid-Amerikaanse Naties",
    UnionAfricaine = "Union africaine",
    UniãoAfricana = "União Africana",
    UniãoDeNaçõesSulAmericanas = "União de Nações Sul-Americanas",
    UniónAfricana = "Unión Africana",
    UniónDeNacionesSuramericanas = "Unión de Naciones Suramericanas",
    الاتحادالأفريقي = "الاتحاد الأفريقي",
    جامعةالدولالعربية = "جامعة الدول العربية",
}

export interface Translations {
    de?: null | string;
    es?: null | string;
    fr?: null | string;
    ja?: null | string;
    it?: null | string;
    br?: string;
    pt?: string;
    nl?: null | string;
    hr?: null | string;
    fa?: string;
}


export const enum CountryName {
    Afghanistan = "Afghanistan",
    AlandIslands = "Åland Islands",
    Albania = "Albania",
    Algeria = "Algeria",
    AmericanSamoa = "American Samoa",
    Andorra = "Andorra",
    Angola = "Angola",
    Anguilla = "Anguilla",
    Antarctica = "Antarctica",
    AntiguaAndBarbuda = "Antigua and Barbuda",
    Argentina = "Argentina",
    Armenia = "Armenia",
    Aruba = "Aruba",
    Australia = "Australia",
    Austria = "Austria",
    Azerbaijan = "Azerbaijan",
    Bahamas = "Bahamas",
    Bahrain = "Bahrain",
    Bangladesh = "Bangladesh",
    Barbados = "Barbados",
    Belarus = "Belarus",
    Belgium = "Belgium",
    Belize = "Belize",
    Benin = "Benin",
    Bermuda = "Bermuda",
    Bhutan = "Bhutan",
    Bolivia = "Bolivia (Plurinational State of)",
    BonaireSintEustatiusAndSaba = "Bonaire, Sint Eustatius and Saba",
    BosniaAndHerzegovina = "Bosnia and Herzegovina",
    Botswana = "Botswana",
    BouvetIsland = "Bouvet Island",
    Brazil = "Brazil",
    BritishIndianOceanTerritory = "British Indian Ocean Territory",
    UnitedStatesMinorOutlyingIslands = "United States Minor Outlying Islands",
    VirginIslands = "Virgin Islands (British)",
    VirginIslandsUS = "Virgin Islands (U.S.)",
    BruneiDarussalam = "Brunei Darussalam",
    Bulgaria = "Bulgaria",
    BurkinaFaso = "Burkina Faso",
    Burundi = "Burundi",
    Cambodia = "Cambodia",
    Cameroon = "Cameroon",
    Canada = "Canada",
    CaboVerde = "Cabo Verde",
    CaymanIslands = "Cayman Islands",
    CentralAfricanRepublic = "Central African Republic",
    Chad = "Chad",
    Chile = "Chile",
    China = "China",
    ChristmasIsland = "Christmas Island",
    CocosIslands = "Cocos (Keeling) Islands",
    Colombia = "Colombia",
    Comoros = "Comoros",
    Congo = "Congo",
    CongoRep = "Congo (Democratic Republic of the)",
    CookIslands = "Cook Islands",
    CostaRica = "Costa Rica",
    Croatia = "Croatia",
    Cuba = "Cuba",
    Curacao = "Curaçao",
    Cyprus = "Cyprus",
    CzechRepublic = "Czech Republic",
    Denmark = "Denmark",
    Djibouti = "Djibouti",
    Dominica = "Dominica",
    DominicanRepublic = "Dominican Republic",
    Ecuador = "Ecuador",
    Egypt = "Egypt",
    ElSalvador = "El Salvador",
    EquatorialGuinea = "Equatorial Guinea",
    Eritrea = "Eritrea",
    Estonia = "Estonia",
    Ethiopia = "Ethiopia",
    FalklandIslands = "Falkland Islands (Malvinas)",
    FaroeIslands = "Faroe Islands",
    Fiji = "Fiji",
    Finland = "Finland",
    France = "France",
    FrenchGuiana = "French Guiana",
    FrenchPolynesia = "French Polynesia",
    FrenchSouthernTerritories = "French Southern Territories",
    Gabon = "Gabon",
    Gambia = "Gambia",
    Georgia = "Georgia",
    Germany = "Germany",
    Ghana = "Ghana",
    Gibraltar = "Gibraltar",
    Greece = "Greece",
    Greenland = "Greenland",
    Grenada = "Grenada",
    Guadeloupe = "Guadeloupe",
    Guam = "Guam",
    Guatemala = "Guatemala",
    Guernsey = "Guernsey",
    Guinea = "Guinea",
    GuineaBissau = "Guinea-Bissau",
    Guyana = "Guyana",
    Haiti = "Haiti",
    HeardIslandAndMcDonaldIslands = "Heard Island and McDonald Islands",
    HolySee = "Holy See",
    Honduras = "Honduras",
    HongKong = "Hong Kong",
    Hungary = "Hungary",
    Iceland = "Iceland",
    India = "India",
    Indonesia = "Indonesia",
    CoteDIvoire = "Côte d'Ivoire",
    Iran = "Iran (Islamic Republic of)",
    Iraq = "Iraq",
    Ireland = "Ireland",
    IsleOfMan = "Isle of Man",
    Israel = "Israel",
    Italy = "Italy",
    Jamaica = "Jamaica",
    Japan = "Japan",
    Jersey = "Jersey",
    Jordan = "Jordan",
    Kazakhstan = "Kazakhstan",
    Kenya = "Kenya",
    Kiribati = "Kiribati",
    Kuwait = "Kuwait",
    Kyrgyzstan = "Kyrgyzstan",
    LaoPeoplesDemocraticRepublic = "Lao People's Democratic Republic",
    Latvia = "Latvia",
    Lebanon = "Lebanon",
    Lesotho = "Lesotho",
    Liberia = "Liberia",
    Libya = "Libya",
    Liechtenstein = "Liechtenstein",
    Lithuania = "Lithuania",
    Luxembourg = "Luxembourg",
    Macao = "Macao",
    Macedonia = "Macedonia (the former Yugoslav Republic of)",
    Madagascar = "Madagascar",
    Malawi = "Malawi",
    Malaysia = "Malaysia",
    Maldives = "Maldives",
    Mali = "Mali",
    Malta = "Malta",
    MarshallIslands = "Marshall Islands",
    Martinique = "Martinique",
    Mauritania = "Mauritania",
    Mauritius = "Mauritius",
    Mayotte = "Mayotte",
    Mexico = "Mexico",
    Micronesia = "Micronesia (Federated States of)",
    Moldova = "Moldova (Republic of)",
    Monaco = "Monaco",
    Mongolia = "Mongolia",
    Montenegro = "Montenegro",
    Montserrat = "Montserrat",
    Morocco = "Morocco",
    Mozambique = "Mozambique",
    Myanmar = "Myanmar",
    Namibia = "Namibia",
    Nauru = "Nauru",
    Nepal = "Nepal",
    Netherlands = "Netherlands",
    NewCaledonia = "New Caledonia",
    NewZealand = "New Zealand",
    Nicaragua = "Nicaragua",
    Niger = "Niger",
    Nigeria = "Nigeria",
    Niue = "Niue",
    NorfolkIsland = "Norfolk Island",
    KoreaRep = "Korea (Democratic People's Republic of)",
    NorthernMarianaIslands = "Northern Mariana Islands",
    Norway = "Norway",
    Oman = "Oman",
    Pakistan = "Pakistan",
    Palau = "Palau",
    PalestineStateOf = "Palestine, State of",
    Panama = "Panama",
    PapuaNewGuinea = "Papua New Guinea",
    Paraguay = "Paraguay",
    Peru = "Peru",
    Philippines = "Philippines",
    Pitcairn = "Pitcairn",
    Poland = "Poland",
    Portugal = "Portugal",
    PuertoRico = "Puerto Rico",
    Qatar = "Qatar",
    RepublicOfKosovo = "Republic of Kosovo",
    Reunion = "Réunion",
    Romania = "Romania",
    RussianFederation = "Russian Federation",
    Rwanda = "Rwanda",
    SaintBarthelemy = "Saint Barthélemy",
    SaintHelenaAscensionAndTristanDaCunha = "Saint Helena, Ascension and Tristan da Cunha",
    SaintKittsAndNevis = "Saint Kitts and Nevis",
    SaintLucia = "Saint Lucia",
    SaintMartin = "Saint Martin (French part)",
    SaintPierreAndMiquelon = "Saint Pierre and Miquelon",
    SaintVincentAndTheGrenadines = "Saint Vincent and the Grenadines",
    Samoa = "Samoa",
    SanMarino = "San Marino",
    SaoTomeAndPrincipe = "Sao Tome and Principe",
    SaudiArabia = "Saudi Arabia",
    Senegal = "Senegal",
    Serbia = "Serbia",
    Seychelles = "Seychelles",
    SierraLeone = "Sierra Leone",
    Singapore = "Singapore",
    SintMaarten = "Sint Maarten (Dutch part)",
    Slovakia = "Slovakia",
    Slovenia = "Slovenia",
    SolomonIslands = "Solomon Islands",
    Somalia = "Somalia",
    SouthAfrica = "South Africa",
    SouthGeorgiaAndTheSouthSandwichIslands = "South Georgia and the South Sandwich Islands",
    Korea = "Korea (Republic of)",
    SouthSudan = "South Sudan",
    Spain = "Spain",
    SriLanka = "Sri Lanka",
    Sudan = "Sudan",
    Suriname = "Suriname",
    SvalbardAndJanMayen = "Svalbard and Jan Mayen",
    Swaziland = "Swaziland",
    Sweden = "Sweden",
    Switzerland = "Switzerland",
    SyrianArabRepublic = "Syrian Arab Republic",
    Taiwan = "Taiwan",
    Tajikistan = "Tajikistan",
    TanzaniaUnitedRepublicOf = "Tanzania, United Republic of",
    Thailand = "Thailand",
    TimorLeste = "Timor-Leste",
    Togo = "Togo",
    Tokelau = "Tokelau",
    Tonga = "Tonga",
    TrinidadAndTobago = "Trinidad and Tobago",
    Tunisia = "Tunisia",
    Turkey = "Turkey",
    Turkmenistan = "Turkmenistan",
    TurksAndCaicosIslands = "Turks and Caicos Islands",
    Tuvalu = "Tuvalu",
    Uganda = "Uganda",
    Ukraine = "Ukraine",
    UnitedArabEmirates = "United Arab Emirates",
    UnitedKingdomOfGreatBritainAndNorthernIreland = "United Kingdom of Great Britain and Northern Ireland",
    UnitedStatesOfAmerica = "United States of America",
    Uruguay = "Uruguay",
    Uzbekistan = "Uzbekistan",
    Vanuatu = "Vanuatu",
    Venezuela = "Venezuela (Bolivarian Republic of)",
    VietNam = "Viet Nam",
    WallisAndFutuna = "Wallis and Futuna",
    WesternSahara = "Western Sahara",
    Yemen = "Yemen",
    Zambia = "Zambia",
    Zimbabwe = "Zimbabwe"
}

export const enum Alpha2Code {
    AF = "AF",
    AX = "AX",
    AL = "AL",
    DZ = "DZ",
    AS = "AS",
    AD = "AD",
    AO = "AO",
    AI = "AI",
    AQ = "AQ",
    AG = "AG",
    AR = "AR",
    AM = "AM",
    AW = "AW",
    AU = "AU",
    AT = "AT",
    AZ = "AZ",
    BS = "BS",
    BH = "BH",
    BD = "BD",
    BB = "BB",
    BY = "BY",
    BE = "BE",
    BZ = "BZ",
    BJ = "BJ",
    BM = "BM",
    BT = "BT",
    BO = "BO",
    BQ = "BQ",
    BA = "BA",
    BW = "BW",
    BV = "BV",
    BR = "BR",
    IO = "IO",
    UM = "UM",
    VG = "VG",
    VI = "VI",
    BN = "BN",
    BG = "BG",
    BF = "BF",
    BI = "BI",
    KH = "KH",
    CM = "CM",
    CA = "CA",
    CV = "CV",
    KY = "KY",
    CF = "CF",
    TD = "TD",
    CL = "CL",
    CN = "CN",
    CX = "CX",
    CC = "CC",
    CO = "CO",
    KM = "KM",
    CG = "CG",
    CD = "CD",
    CK = "CK",
    CR = "CR",
    HR = "HR",
    CU = "CU",
    CW = "CW",
    CY = "CY",
    CZ = "CZ",
    DK = "DK",
    DJ = "DJ",
    DM = "DM",
    DO = "DO",
    EC = "EC",
    EG = "EG",
    SV = "SV",
    GQ = "GQ",
    ER = "ER",
    EE = "EE",
    ET = "ET",
    FK = "FK",
    FO = "FO",
    FJ = "FJ",
    FI = "FI",
    FR = "FR",
    GF = "GF",
    PF = "PF",
    TF = "TF",
    GA = "GA",
    GM = "GM",
    GE = "GE",
    DE = "DE",
    GH = "GH",
    GI = "GI",
    GR = "GR",
    GL = "GL",
    GD = "GD",
    GP = "GP",
    GU = "GU",
    GT = "GT",
    GG = "GG",
    GN = "GN",
    GW = "GW",
    GY = "GY",
    HT = "HT",
    HM = "HM",
    VA = "VA",
    HN = "HN",
    HK = "HK",
    HU = "HU",
    IS = "IS",
    IN = "IN",
    ID = "ID",
    CI = "CI",
    IR = "IR",
    IQ = "IQ",
    IE = "IE",
    IM = "IM",
    IL = "IL",
    IT = "IT",
    JM = "JM",
    JP = "JP",
    JE = "JE",
    JO = "JO",
    KZ = "KZ",
    KE = "KE",
    KI = "KI",
    KW = "KW",
    KG = "KG",
    LA = "LA",
    LV = "LV",
    LB = "LB",
    LS = "LS",
    LR = "LR",
    LY = "LY",
    LI = "LI",
    LT = "LT",
    LU = "LU",
    MO = "MO",
    MK = "MK",
    MG = "MG",
    MW = "MW",
    MY = "MY",
    MV = "MV",
    ML = "ML",
    MT = "MT",
    MH = "MH",
    MQ = "MQ",
    MR = "MR",
    MU = "MU",
    YT = "YT",
    MX = "MX",
    FM = "FM",
    MD = "MD",
    MC = "MC",
    MN = "MN",
    ME = "ME",
    MS = "MS",
    MA = "MA",
    MZ = "MZ",
    MM = "MM",
    NA = "NA",
    NR = "NR",
    NP = "NP",
    NL = "NL",
    NC = "NC",
    NZ = "NZ",
    NI = "NI",
    NE = "NE",
    NG = "NG",
    NU = "NU",
    NF = "NF",
    KP = "KP",
    MP = "MP",
    NO = "NO",
    OM = "OM",
    PK = "PK",
    PW = "PW",
    PS = "PS",
    PA = "PA",
    PG = "PG",
    PY = "PY",
    PE = "PE",
    PH = "PH",
    PN = "PN",
    PL = "PL",
    PT = "PT",
    PR = "PR",
    QA = "QA",
    XK = "XK",
    RE = "RE",
    RO = "RO",
    RU = "RU",
    RW = "RW",
    BL = "BL",
    SH = "SH",
    KN = "KN",
    LC = "LC",
    MF = "MF",
    PM = "PM",
    VC = "VC",
    WS = "WS",
    SM = "SM",
    ST = "ST",
    SA = "SA",
    SN = "SN",
    RS = "RS",
    SC = "SC",
    SL = "SL",
    SG = "SG",
    SX = "SX",
    SK = "SK",
    SI = "SI",
    SB = "SB",
    SO = "SO",
    ZA = "ZA",
    GS = "GS",
    KR = "KR",
    SS = "SS",
    ES = "ES",
    LK = "LK",
    SD = "SD",
    SR = "SR",
    SJ = "SJ",
    SZ = "SZ",
    SE = "SE",
    CH = "CH",
    SY = "SY",
    TW = "TW",
    TJ = "TJ",
    TZ = "TZ",
    TH = "TH",
    TL = "TL",
    TG = "TG",
    TK = "TK",
    TO = "TO",
    TT = "TT",
    TN = "TN",
    TR = "TR",
    TM = "TM",
    TC = "TC",
    TV = "TV",
    UG = "UG",
    UA = "UA",
    AE = "AE",
    GB = "GB",
    US = "US",
    UY = "UY",
    UZ = "UZ",
    VU = "VU",
    VE = "VE",
    VN = "VN",
    WF = "WF",
    EH = "EH",
    YE = "YE",
    ZM = "ZM",
    ZW = "ZW"
}

export const enum Alpha3Code {
    AFG = "AFG",
    ALA = "ALA",
    ALB = "ALB",
    DZA = "DZA",
    ASM = "ASM",
    AND = "AND",
    AGO = "AGO",
    AIA = "AIA",
    ATA = "ATA",
    ATG = "ATG",
    ARG = "ARG",
    ARM = "ARM",
    ABW = "ABW",
    AUS = "AUS",
    AUT = "AUT",
    AZE = "AZE",
    BHS = "BHS",
    BHR = "BHR",
    BGD = "BGD",
    BRB = "BRB",
    BLR = "BLR",
    BEL = "BEL",
    BLZ = "BLZ",
    BEN = "BEN",
    BMU = "BMU",
    BTN = "BTN",
    BOL = "BOL",
    BES = "BES",
    BIH = "BIH",
    BWA = "BWA",
    BVT = "BVT",
    BRA = "BRA",
    IOT = "IOT",
    UMI = "UMI",
    VGB = "VGB",
    VIR = "VIR",
    BRN = "BRN",
    BGR = "BGR",
    BFA = "BFA",
    BDI = "BDI",
    KHM = "KHM",
    CMR = "CMR",
    CAN = "CAN",
    CPV = "CPV",
    CYM = "CYM",
    CAF = "CAF",
    TCD = "TCD",
    CHL = "CHL",
    CHN = "CHN",
    CXR = "CXR",
    CCK = "CCK",
    COL = "COL",
    COM = "COM",
    COG = "COG",
    COD = "COD",
    COK = "COK",
    CRI = "CRI",
    HRV = "HRV",
    CUB = "CUB",
    CUW = "CUW",
    CYP = "CYP",
    CZE = "CZE",
    DNK = "DNK",
    DJI = "DJI",
    DMA = "DMA",
    DOM = "DOM",
    ECU = "ECU",
    EGY = "EGY",
    SLV = "SLV",
    GNQ = "GNQ",
    ERI = "ERI",
    EST = "EST",
    ETH = "ETH",
    FLK = "FLK",
    FRO = "FRO",
    FJI = "FJI",
    FIN = "FIN",
    FRA = "FRA",
    GUF = "GUF",
    PYF = "PYF",
    ATF = "ATF",
    GAB = "GAB",
    GMB = "GMB",
    GEO = "GEO",
    DEU = "DEU",
    GHA = "GHA",
    GIB = "GIB",
    GRC = "GRC",
    GRL = "GRL",
    GRD = "GRD",
    GLP = "GLP",
    GUM = "GUM",
    GTM = "GTM",
    GGY = "GGY",
    GIN = "GIN",
    GNB = "GNB",
    GUY = "GUY",
    HTI = "HTI",
    HMD = "HMD",
    VAT = "VAT",
    HND = "HND",
    HKG = "HKG",
    HUN = "HUN",
    ISL = "ISL",
    IND = "IND",
    IDN = "IDN",
    CIV = "CIV",
    IRN = "IRN",
    IRQ = "IRQ",
    IRL = "IRL",
    IMN = "IMN",
    ISR = "ISR",
    ITA = "ITA",
    JAM = "JAM",
    JPN = "JPN",
    JEY = "JEY",
    JOR = "JOR",
    KAZ = "KAZ",
    KEN = "KEN",
    KIR = "KIR",
    KWT = "KWT",
    KGZ = "KGZ",
    LAO = "LAO",
    LVA = "LVA",
    LBN = "LBN",
    LSO = "LSO",
    LBR = "LBR",
    LBY = "LBY",
    LIE = "LIE",
    LTU = "LTU",
    LUX = "LUX",
    MAC = "MAC",
    MKD = "MKD",
    MDG = "MDG",
    MWI = "MWI",
    MYS = "MYS",
    MDV = "MDV",
    MLI = "MLI",
    MLT = "MLT",
    MHL = "MHL",
    MTQ = "MTQ",
    MRT = "MRT",
    MUS = "MUS",
    MYT = "MYT",
    MEX = "MEX",
    FSM = "FSM",
    MDA = "MDA",
    MCO = "MCO",
    MNG = "MNG",
    MNE = "MNE",
    MSR = "MSR",
    MAR = "MAR",
    MOZ = "MOZ",
    MMR = "MMR",
    NAM = "NAM",
    NRU = "NRU",
    NPL = "NPL",
    NLD = "NLD",
    NCL = "NCL",
    NZL = "NZL",
    NIC = "NIC",
    NER = "NER",
    NGA = "NGA",
    NIU = "NIU",
    NFK = "NFK",
    PRK = "PRK",
    MNP = "MNP",
    NOR = "NOR",
    OMN = "OMN",
    PAK = "PAK",
    PLW = "PLW",
    PSE = "PSE",
    PAN = "PAN",
    PNG = "PNG",
    PRY = "PRY",
    PER = "PER",
    PHL = "PHL",
    PCN = "PCN",
    POL = "POL",
    PRT = "PRT",
    PRI = "PRI",
    QAT = "QAT",
    KOS = "KOS",
    REU = "REU",
    ROU = "ROU",
    RUS = "RUS",
    RWA = "RWA",
    BLM = "BLM",
    SHN = "SHN",
    KNA = "KNA",
    LCA = "LCA",
    MAF = "MAF",
    SPM = "SPM",
    VCT = "VCT",
    WSM = "WSM",
    SMR = "SMR",
    STP = "STP",
    SAU = "SAU",
    SEN = "SEN",
    SRB = "SRB",
    SYC = "SYC",
    SLE = "SLE",
    SGP = "SGP",
    SXM = "SXM",
    SVK = "SVK",
    SVN = "SVN",
    SLB = "SLB",
    SOM = "SOM",
    ZAF = "ZAF",
    SGS = "SGS",
    KOR = "KOR",
    SSD = "SSD",
    ESP = "ESP",
    LKA = "LKA",
    SDN = "SDN",
    SUR = "SUR",
    SJM = "SJM",
    SWZ = "SWZ",
    SWE = "SWE",
    CHE = "CHE",
    SYR = "SYR",
    TWN = "TWN",
    TJK = "TJK",
    TZA = "TZA",
    THA = "THA",
    TLS = "TLS",
    TGO = "TGO",
    TKL = "TKL",
    TON = "TON",
    TTO = "TTO",
    TUN = "TUN",
    TUR = "TUR",
    TKM = "TKM",
    TCA = "TCA",
    TUV = "TUV",
    UGA = "UGA",
    UKR = "UKR",
    ARE = "ARE",
    GBR = "GBR",
    USA = "USA",
    URY = "URY",
    UZB = "UZB",
    VUT = "VUT",
    VEN = "VEN",
    VNM = "VNM",
    WLF = "WLF",
    ESH = "ESH",
    YEM = "YEM",
    ZMB = "ZMB",
    ZWE = "ZWE"
}

export const enum Capital {
    "Kabul",
    "Mariehamn",
    "Tirana",
    "Algiers",
    "Pago Pago",
    "Andorra la Vella",
    "Luanda",
    "The Valley",
    "Saint John's",
    "Buenos Aires",
    "Yerevan",
    "Oranjestad",
    "Canberra",
    "Vienna",
    "Baku",
    "Nassau",
    "Manama",
    "Dhaka",
    "Bridgetown",
    "Minsk",
    "Brussels",
    "Belmopan",
    "Porto-Novo",
    "Hamilton",
    "Thimphu",
    "Sucre",
    "Kralendijk",
    "Sarajevo",
    "Gaborone",
    "Brasília",
    "Diego Garcia",
    "Road Town",
    "Charlotte Amalie",
    "Bandar Seri Begawan",
    "Sofia",
    "Ouagadougou",
    "Bujumbura",
    "Phnom Penh",
    "Yaoundé",
    "Ottawa",
    "Praia",
    "George Town",
    "Bangui",
    "N'Djamena",
    "Santiago",
    "Beijing",
    "Flying Fish Cove",
    "West Island",
    "Bogotá",
    "Moroni",
    "Brazzaville",
    "Kinshasa",
    "Avarua",
    "San José",
    "Zagreb",
    "Havana",
    "Willemstad",
    "Nicosia",
    "Prague",
    "Copenhagen",
    "Djibouti",
    "Roseau",
    "Santo Domingo",
    "Quito",
    "Cairo",
    "San Salvador",
    "Malabo",
    "Asmara",
    "Tallinn",
    "Addis Ababa",
    "Stanley",
    "Tórshavn",
    "Suva",
    "Helsinki",
    "Paris",
    "Cayenne",
    "Papeetē",
    "Port-aux-Français",
    "Libreville",
    "Banjul",
    "Tbilisi",
    "Berlin",
    "Accra",
    "Gibraltar",
    "Athens",
    "Nuuk",
    "St. George's",
    "Basse-Terre",
    "Hagåtña",
    "Guatemala City",
    "St. Peter Port",
    "Conakry",
    "Bissau",
    "Georgetown",
    "Port-au-Prince",
    "Rome",
    "Tegucigalpa",
    "City of Victoria",
    "Budapest",
    "Reykjavík",
    "New Delhi",
    "Jakarta",
    "Yamoussoukro",
    "Tehran",
    "Baghdad",
    "Dublin",
    "Douglas",
    "Jerusalem",
    "Tokyo",
    "Saint Helier",
    "Amman",
    "Astana",
    "Nairobi",
    "South Tarawa",
    "Kuwait City",
    "Bishkek",
    "Vientiane",
    "Riga",
    "Beirut",
    "Maseru",
    "Monrovia",
    "Tripoli",
    "Vaduz",
    "Vilnius",
    "Luxembourg",
    "Skopje",
    "Antananarivo",
    "Lilongwe",
    "Kuala Lumpur",
    "Malé",
    "Bamako",
    "Valletta",
    "Majuro",
    "Fort-de-France",
    "Nouakchott",
    "Port Louis",
    "Mamoudzou",
    "Mexico City",
    "Palikir",
    "Chișinău",
    "Monaco",
    "Ulan Bator",
    "Podgorica",
    "Plymouth",
    "Rabat",
    "Maputo",
    "Naypyidaw",
    "Windhoek",
    "Yaren",
    "Kathmandu",
    "Amsterdam",
    "Nouméa",
    "Wellington",
    "Managua",
    "Niamey",
    "Abuja",
    "Alofi",
    "Kingston",
    "Pyongyang",
    "Saipan",
    "Oslo",
    "Muscat",
    "Islamabad",
    "Ngerulmud",
    "Ramallah",
    "Panama City",
    "Port Moresby",
    "Asunción",
    "Lima",
    "Manila",
    "Adamstown",
    "Warsaw",
    "Lisbon",
    "San Juan",
    "Doha",
    "Pristina",
    "Saint-Denis",
    "Bucharest",
    "Moscow",
    "Kigali",
    "Gustavia",
    "Jamestown",
    "Basseterre",
    "Castries",
    "Marigot",
    "Saint-Pierre",
    "Kingstown",
    "Apia",
    "City of San Marino",
    "São Tomé",
    "Riyadh",
    "Dakar",
    "Belgrade",
    "Victoria",
    "Freetown",
    "Singapore",
    "Philipsburg",
    "Bratislava",
    "Ljubljana",
    "Honiara",
    "Mogadishu",
    "Pretoria",
    "King Edward Point",
    "Seoul",
    "Juba",
    "Madrid",
    "Colombo",
    "Khartoum",
    "Paramaribo",
    "Longyearbyen",
    "Lobamba",
    "Stockholm",
    "Bern",
    "Damascus",
    "Taipei",
    "Dushanbe",
    "Dodoma",
    "Bangkok",
    "Dili",
    "Lomé",
    "Fakaofo",
    "Nuku'alofa",
    "Port of Spain",
    "Tunis",
    "Ankara",
    "Ashgabat",
    "Cockburn Town",
    "Funafuti",
    "Kampala",
    "Kiev",
    "Abu Dhabi",
    "London",
    "Washington, D.C.",
    "Montevideo",
    "Tashkent",
    "Port Vila",
    "Caracas",
    "Hanoi",
    "Mata-Utu",
    "El Aaiún",
    "Sana'a",
    "Lusaka",
    "Harare",
    ""
}

export interface Currency {
    code?: null | CurrencyCode;
    name?: null | string;
    symbol?: null | string;
}

export const enum CurrencyCode {
    AFN = "AFN",
    EUR = "EUR",
    ALL = "ALL",
    DZD = "DZD",
    USD = "USD",
    AOA = "AOA",
    XCD = "XCD",
    AUD = "AUD",
    GBP = "GBP",
    ARS = "ARS",
    AMD = "AMD",
    AWG = "AWG",
    AZN = "AZN",
    BSD = "BSD",
    BHD = "BHD",
    BDT = "BDT",
    BBD = "BBD",
    BYN = "BYN",
    BYR = "BYR",
    BZD = "BZD",
    XOF = "XOF",
    BMD = "BMD",
    BTN = "BTN",
    INR = "INR",
    BOB = "BOB",
    BAM = "BAM",
    BWP = "BWP",
    NOK = "NOK",
    BRL = "BRL",
    BND = "BND",
    SGD = "SGD",
    BGN = "BGN",
    BIF = "BIF",
    KHR = "KHR",
    XAF = "XAF",
    CAD = "CAD",
    CVE = "CVE",
    KYD = "KYD",
    CLP = "CLP",
    CNY = "CNY",
    COP = "COP",
    KMF = "KMF",
    CDF = "CDF",
    NZD = "NZD",
    CKD = "CKD",
    CRC = "CRC",
    HRK = "HRK",
    CUC = "CUC",
    CUP = "CUP",
    ANG = "ANG",
    CZK = "CZK",
    DKK = "DKK",
    DJF = "DJF",
    DOP = "DOP",
    EGP = "EGP",
    ERN = "ERN",
    ETB = "ETB",
    FKP = "FKP",
    NONE = "(none)",
    FJD = "FJD",
    XPF = "XPF",
    GMD = "GMD",
    GEL = "GEL",
    GHS = "GHS",
    GIP = "GIP",
    GTQ = "GTQ",
    GNF = "GNF",
    GYD = "GYD",
    HTG = "HTG",
    HNL = "HNL",
    HKD = "HKD",
    HUF = "HUF",
    ISK = "ISK",
    IDR = "IDR",
    IRR = "IRR",
    IQD = "IQD",
    IMP = "IMP[G]",
    ILS = "ILS",
    JMD = "JMD",
    JPY = "JPY",
    JEP = "JEP[G]",
    JOD = "JOD",
    KZT = "KZT",
    KES = "KES",
    KWD = "KWD",
    KGS = "KGS",
    LAK = "LAK",
    LBP = "LBP",
    LSL = "LSL",
    ZAR = "ZAR",
    LRD = "LRD",
    LYD = "LYD",
    CHF = "CHF",
    MOP = "MOP",
    MKD = "MKD",
    MGA = "MGA",
    MWK = "MWK",
    MYR = "MYR",
    MVR = "MVR",
    MRO = "MRO",
    MUR = "MUR",
    MXN = "MXN",
    MDL = "MDL",
    MNT = "MNT",
    MAD = "MAD",
    MZN = "MZN",
    MMK = "MMK",
    NAD = "NAD",
    NPR = "NPR",
    NIO = "NIO",
    NGN = "NGN",
    KPW = "KPW",
    OMR = "OMR",
    PKR = "PKR",
    PAB = "PAB",
    PGK = "PGK",
    PYG = "PYG",
    PEN = "PEN",
    PHP = "PHP",
    PLN = "PLN",
    QAR = "QAR",
    RON = "RON",
    RUB = "RUB",
    RWF = "RWF",
    SHP = "SHP",
    WST = "WST",
    STD = "STD",
    SAR = "SAR",
    RSD = "RSD",
    SCR = "SCR",
    SLL = "SLL",
    SBD = "SBD",
    SOS = "SOS",
    KRW = "KRW",
    SSP = "SSP",
    LKR = "LKR",
    SDG = "SDG",
    SRD = "SRD",
    SZL = "SZL",
    SEK = "SEK",
    SYP = "SYP",
    TWD = "TWD",
    TJS = "TJS",
    TZS = "TZS",
    THB = "THB",
    TOP = "TOP",
    TTD = "TTD",
    TND = "TND",
    TRY = "TRY",
    TMT = "TMT",
    TVD = "TVD[G]",
    UGX = "UGX",
    UAH = "UAH",
    AED = "AED",
    UYU = "UYU",
    UZS = "UZS",
    VUV = "VUV",
    VEF = "VEF",
    VND = "VND",
    YER = "YER",
    ZM = "ZMW"
}

export const CountryMapper = {
    "Afghanistan": {
        alpha2Code: Alpha2Code.AF,
        alpha3Code: Alpha3Code.AFG,
        currencies: [
            CurrencyCode.AFN
            ]
    },
    "Åland Islands": {
        alpha2Code: Alpha2Code.AX,
        alpha3Code: Alpha3Code.ALA,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Albania": {
        alpha2Code: Alpha2Code.AL,
        alpha3Code: Alpha3Code.ALB,
        currencies: [
            CurrencyCode.ALL
            ]
    },
    "Algeria": {
        alpha2Code: Alpha2Code.DZ,
        alpha3Code: Alpha3Code.DZA,
        currencies: [
            CurrencyCode.DZD
            ]
    },
    "American Samoa": {
        alpha2Code: Alpha2Code.AS,
        alpha3Code: Alpha3Code.ASM,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Andorra": {
        alpha2Code: Alpha2Code.AD,
        alpha3Code: Alpha3Code.AND,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Angola": {
        alpha2Code: Alpha2Code.AO,
        alpha3Code: Alpha3Code.AGO,
        currencies: [
            CurrencyCode.AOA
            ]
    },
    "Anguilla": {
        alpha2Code: Alpha2Code.AI,
        alpha3Code: Alpha3Code.AIA,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Antarctica": {
        alpha2Code: Alpha2Code.AQ,
        alpha3Code: Alpha3Code.ATA,
        currencies: [
            CurrencyCode.AUD,
            CurrencyCode.GBP
            ]
    },
    "Antigua and Barbuda": {
        alpha2Code: Alpha2Code.AG,
        alpha3Code: Alpha3Code.ATG,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Argentina": {
        alpha2Code: Alpha2Code.AR,
        alpha3Code: Alpha3Code.ARG,
        currencies: [
            CurrencyCode.ARS
            ]
    },
    "Armenia": {
        alpha2Code: Alpha2Code.AM,
        alpha3Code: Alpha3Code.ARM,
        currencies: [
            CurrencyCode.AMD
            ]
    },
    "Aruba": {
        alpha2Code: Alpha2Code.AW,
        alpha3Code: Alpha3Code.ABW,
        currencies: [
            CurrencyCode.AWG
            ]
    },
    "Australia": {
        alpha2Code: Alpha2Code.AU,
        alpha3Code: Alpha3Code.AUS,
        currencies: [
            CurrencyCode.AUD
            ]
    },
    "Austria": {
        alpha2Code: Alpha2Code.AT,
        alpha3Code: Alpha3Code.AUT,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Azerbaijan": {
        alpha2Code: Alpha2Code.AZ,
        alpha3Code: Alpha3Code.AZE,
        currencies: [
            CurrencyCode.AZN
            ]
    },
    "Bahamas": {
        alpha2Code: Alpha2Code.BS,
        alpha3Code: Alpha3Code.BHS,
        currencies: [
            CurrencyCode.BSD
            ]
    },
    "Bahrain": {
        alpha2Code: Alpha2Code.BH,
        alpha3Code: Alpha3Code.BHR,
        currencies: [
            CurrencyCode.BHD
            ]
    },
    "Bangladesh": {
        alpha2Code: Alpha2Code.BD,
        alpha3Code: Alpha3Code.BGD,
        currencies: [
            CurrencyCode.BDT
            ]
    },
    "Barbados": {
        alpha2Code: Alpha2Code.BB,
        alpha3Code: Alpha3Code.BRB,
        currencies: [
            CurrencyCode.BBD
            ]
    },
    "Belarus": {
        alpha2Code: Alpha2Code.BY,
        alpha3Code: Alpha3Code.BLR,
        currencies: [
            CurrencyCode.BYN,
            CurrencyCode.BYR
            ]
    },
    "Belgium": {
        alpha2Code: Alpha2Code.BE,
        alpha3Code: Alpha3Code.BEL,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Belize": {
        alpha2Code: Alpha2Code.BZ,
        alpha3Code: Alpha3Code.BLZ,
        currencies: [
            CurrencyCode.BZD
            ]
    },
    "Benin": {
        alpha2Code: Alpha2Code.BJ,
        alpha3Code: Alpha3Code.BEN,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Bermuda": {
        alpha2Code: Alpha2Code.BM,
        alpha3Code: Alpha3Code.BMU,
        currencies: [
            CurrencyCode.BMD
            ]
    },
    "Bhutan": {
        alpha2Code: Alpha2Code.BT,
        alpha3Code: Alpha3Code.BTN,
        currencies: [
            CurrencyCode.BTN,
            CurrencyCode.INR
            ]
    },
    "Bolivia (Plurinational State of)": {
        alpha2Code: Alpha2Code.BO,
        alpha3Code: Alpha3Code.BOL,
        currencies: [
            CurrencyCode.BOB
            ]
    },
    "Bonaire, Sint Eustatius and Saba": {
        alpha2Code: Alpha2Code.BQ,
        alpha3Code: Alpha3Code.BES,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Bosnia and Herzegovina": {
        alpha2Code: Alpha2Code.BA,
        alpha3Code: Alpha3Code.BIH,
        currencies: [
            CurrencyCode.BAM
            ]
    },
    "Botswana": {
        alpha2Code: Alpha2Code.BW,
        alpha3Code: Alpha3Code.BWA,
        currencies: [
            CurrencyCode.BWP
            ]
    },
    "Bouvet Island": {
        alpha2Code: Alpha2Code.BV,
        alpha3Code: Alpha3Code.BVT,
        currencies: [
            CurrencyCode.NOK
            ]
    },
    "Brazil": {
        alpha2Code: Alpha2Code.BR,
        alpha3Code: Alpha3Code.BRA,
        currencies: [
            CurrencyCode.BRL
            ]
    },
    "British Indian Ocean Territory": {
        alpha2Code: Alpha2Code.IO,
        alpha3Code: Alpha3Code.IOT,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "United States Minor Outlying Islands": {
        alpha2Code: Alpha2Code.UM,
        alpha3Code: Alpha3Code.UMI,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Virgin Islands (British)": {
        alpha2Code: Alpha2Code.VG,
        alpha3Code: Alpha3Code.VGB,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Virgin Islands (U.S.)": {
        alpha2Code: Alpha2Code.VI,
        alpha3Code: Alpha3Code.VIR,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Brunei Darussalam": {
        alpha2Code: Alpha2Code.BN,
        alpha3Code: Alpha3Code.BRN,
        currencies: [
            CurrencyCode.BND,
            CurrencyCode.SGD
            ]
    },
    "Bulgaria": {
        alpha2Code: Alpha2Code.BG,
        alpha3Code: Alpha3Code.BGR,
        currencies: [
            CurrencyCode.BGN
            ]
    },
    "Burkina Faso": {
        alpha2Code: Alpha2Code.BF,
        alpha3Code: Alpha3Code.BFA,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Burundi": {
        alpha2Code: Alpha2Code.BI,
        alpha3Code: Alpha3Code.BDI,
        currencies: [
            CurrencyCode.BIF
            ]
    },
    "Cambodia": {
        alpha2Code: Alpha2Code.KH,
        alpha3Code: Alpha3Code.KHM,
        currencies: [
            CurrencyCode.KHR,
            CurrencyCode.USD
            ]
    },
    "Cameroon": {
        alpha2Code: Alpha2Code.CM,
        alpha3Code: Alpha3Code.CMR,
        currencies: [
            CurrencyCode.XAF
            ]
    },
    "Canada": {
        alpha2Code: Alpha2Code.CA,
        alpha3Code: Alpha3Code.CAN,
        currencies: [
            CurrencyCode.CAD
            ]
    },
    "Cabo Verde": {
        alpha2Code: Alpha2Code.CV,
        alpha3Code: Alpha3Code.CPV,
        currencies: [
            CurrencyCode.CVE
            ]
    },
    "Cayman Islands": {
        alpha2Code: Alpha2Code.KY,
        alpha3Code: Alpha3Code.CYM,
        currencies: [
            CurrencyCode.KYD
            ]
    },
    "Central African Republic": {
        alpha2Code: Alpha2Code.CF,
        alpha3Code: Alpha3Code.CAF,
        currencies: [
            CurrencyCode.XAF
            ]
    },
    "Chad": {
        alpha2Code: Alpha2Code.TD,
        alpha3Code: Alpha3Code.TCD,
        currencies: [
            CurrencyCode.XAF
            ]
    },
    "Chile": {
        alpha2Code: Alpha2Code.CL,
        alpha3Code: Alpha3Code.CHL,
        currencies: [
            CurrencyCode.CLP
            ]
    },
    "China": {
        alpha2Code: Alpha2Code.CN,
        alpha3Code: Alpha3Code.CHN,
        currencies: [
            CurrencyCode.CNY
            ]
    },
    "Christmas Island": {
        alpha2Code: Alpha2Code.CX,
        alpha3Code: Alpha3Code.CXR,
        currencies: [
            CurrencyCode.AUD
            ]
    },
    "Cocos (Keeling) Islands": {
        alpha2Code: Alpha2Code.CC,
        alpha3Code: Alpha3Code.CCK,
        currencies: [
            CurrencyCode.AUD
            ]
    },
    "Colombia": {
        alpha2Code: Alpha2Code.CO,
        alpha3Code: Alpha3Code.COL,
        currencies: [
            CurrencyCode.COP
            ]
    },
    "Comoros": {
        alpha2Code: Alpha2Code.KM,
        alpha3Code: Alpha3Code.COM,
        currencies: [
            CurrencyCode.KMF
            ]
    },
    "Congo": {
        alpha2Code: Alpha2Code.CG,
        alpha3Code: Alpha3Code.COG,
        currencies: [
            CurrencyCode.XAF
            ]
    },
    "Congo (Democratic Republic of the)": {
        alpha2Code: Alpha2Code.CD,
        alpha3Code: Alpha3Code.COD,
        currencies: [
            CurrencyCode.CDF
            ]
    },
    "Cook Islands": {
        alpha2Code: Alpha2Code.CK,
        alpha3Code: Alpha3Code.COK,
        currencies: [
            CurrencyCode.NZD,
            CurrencyCode.CKD
            ]
    },
    "Costa Rica": {
        alpha2Code: Alpha2Code.CR,
        alpha3Code: Alpha3Code.CRI,
        currencies: [
            CurrencyCode.CRC
            ]
    },
    "Croatia": {
        alpha2Code: Alpha2Code.HR,
        alpha3Code: Alpha3Code.HRV,
        currencies: [
            CurrencyCode.HRK
            ]
    },
    "Cuba": {
        alpha2Code: Alpha2Code.CU,
        alpha3Code: Alpha3Code.CUB,
        currencies: [
            CurrencyCode.CUC,
            CurrencyCode.CUP
            ]
    },
    "Curaçao": {
        alpha2Code: Alpha2Code.CW,
        alpha3Code: Alpha3Code.CUW,
        currencies: [
            CurrencyCode.ANG
            ]
    },
    "Cyprus": {
        alpha2Code: Alpha2Code.CY,
        alpha3Code: Alpha3Code.CYP,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Czech Republic": {
        alpha2Code: Alpha2Code.CZ,
        alpha3Code: Alpha3Code.CZE,
        currencies: [
            CurrencyCode.CZK
            ]
    },
    "Denmark": {
        alpha2Code: Alpha2Code.DK,
        alpha3Code: Alpha3Code.DNK,
        currencies: [
            CurrencyCode.DKK
            ]
    },
    "Djibouti": {
        alpha2Code: Alpha2Code.DJ,
        alpha3Code: Alpha3Code.DJI,
        currencies: [
            CurrencyCode.DJF
            ]
    },
    "Dominica": {
        alpha2Code: Alpha2Code.DM,
        alpha3Code: Alpha3Code.DMA,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Dominican Republic": {
        alpha2Code: Alpha2Code.DO,
        alpha3Code: Alpha3Code.DOM,
        currencies: [
            CurrencyCode.DOP
            ]
    },
    "Ecuador": {
        alpha2Code: Alpha2Code.EC,
        alpha3Code: Alpha3Code.ECU,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Egypt": {
        alpha2Code: Alpha2Code.EG,
        alpha3Code: Alpha3Code.EGY,
        currencies: [
            CurrencyCode.EGP
            ]
    },
    "El Salvador": {
        alpha2Code: Alpha2Code.SV,
        alpha3Code: Alpha3Code.SLV,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Equatorial Guinea": {
        alpha2Code: Alpha2Code.GQ,
        alpha3Code: Alpha3Code.GNQ,
        currencies: [
            CurrencyCode.XAF
            ]
    },
    "Eritrea": {
        alpha2Code: Alpha2Code.ER,
        alpha3Code: Alpha3Code.ERI,
        currencies: [
            CurrencyCode.ERN
            ]
    },
    "Estonia": {
        alpha2Code: Alpha2Code.EE,
        alpha3Code: Alpha3Code.EST,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Ethiopia": {
        alpha2Code: Alpha2Code.ET,
        alpha3Code: Alpha3Code.ETH,
        currencies: [
            CurrencyCode.ETB
            ]
    },
    "Falkland Islands (Malvinas)": {
        alpha2Code: Alpha2Code.FK,
        alpha3Code: Alpha3Code.FLK,
        currencies: [
            CurrencyCode.FKP
            ]
    },
    "Faroe Islands": {
        alpha2Code: Alpha2Code.FO,
        alpha3Code: Alpha3Code.FRO,
        currencies: [
            CurrencyCode.DKK,
            CurrencyCode.NONE
            ]
    },
    "Fiji": {
        alpha2Code: Alpha2Code.FJ,
        alpha3Code: Alpha3Code.FJI,
        currencies: [
            CurrencyCode.FJD
            ]
    },
    "Finland": {
        alpha2Code: Alpha2Code.FI,
        alpha3Code: Alpha3Code.FIN,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "France": {
        alpha2Code: Alpha2Code.FR,
        alpha3Code: Alpha3Code.FRA,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "French Guiana": {
        alpha2Code: Alpha2Code.GF,
        alpha3Code: Alpha3Code.GUF,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "French Polynesia": {
        alpha2Code: Alpha2Code.PF,
        alpha3Code: Alpha3Code.PYF,
        currencies: [
            CurrencyCode.XPF
            ]
    },
    "French Southern Territories": {
        alpha2Code: Alpha2Code.TF,
        alpha3Code: Alpha3Code.ATF,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Gabon": {
        alpha2Code: Alpha2Code.GA,
        alpha3Code: Alpha3Code.GAB,
        currencies: [
            CurrencyCode.XAF
            ]
    },
    "Gambia": {
        alpha2Code: Alpha2Code.GM,
        alpha3Code: Alpha3Code.GMB,
        currencies: [
            CurrencyCode.GMD
            ]
    },
    "Georgia": {
        alpha2Code: Alpha2Code.GE,
        alpha3Code: Alpha3Code.GEO,
        currencies: [
            CurrencyCode.GEL
            ]
    },
    "Germany": {
        alpha2Code: Alpha2Code.DE,
        alpha3Code: Alpha3Code.DEU,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Ghana": {
        alpha2Code: Alpha2Code.GH,
        alpha3Code: Alpha3Code.GHA,
        currencies: [
            CurrencyCode.GHS
            ]
    },
    "Gibraltar": {
        alpha2Code: Alpha2Code.GI,
        alpha3Code: Alpha3Code.GIB,
        currencies: [
            CurrencyCode.GIP
            ]
    },
    "Greece": {
        alpha2Code: Alpha2Code.GR,
        alpha3Code: Alpha3Code.GRC,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Greenland": {
        alpha2Code: Alpha2Code.GL,
        alpha3Code: Alpha3Code.GRL,
        currencies: [
            CurrencyCode.DKK
            ]
    },
    "Grenada": {
        alpha2Code: Alpha2Code.GD,
        alpha3Code: Alpha3Code.GRD,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Guadeloupe": {
        alpha2Code: Alpha2Code.GP,
        alpha3Code: Alpha3Code.GLP,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Guam": {
        alpha2Code: Alpha2Code.GU,
        alpha3Code: Alpha3Code.GUM,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Guatemala": {
        alpha2Code: Alpha2Code.GT,
        alpha3Code: Alpha3Code.GTM,
        currencies: [
            CurrencyCode.GTQ
            ]
    },
    "Guernsey": {
        alpha2Code: Alpha2Code.GG,
        alpha3Code: Alpha3Code.GGY,
        currencies: [
            CurrencyCode.GBP,
            CurrencyCode.NONE
            ]
    },
    "Guinea": {
        alpha2Code: Alpha2Code.GN,
        alpha3Code: Alpha3Code.GIN,
        currencies: [
            CurrencyCode.GNF
            ]
    },
    "Guinea-Bissau": {
        alpha2Code: Alpha2Code.GW,
        alpha3Code: Alpha3Code.GNB,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Guyana": {
        alpha2Code: Alpha2Code.GY,
        alpha3Code: Alpha3Code.GUY,
        currencies: [
            CurrencyCode.GYD
            ]
    },
    "Haiti": {
        alpha2Code: Alpha2Code.HT,
        alpha3Code: Alpha3Code.HTI,
        currencies: [
            CurrencyCode.HTG
            ]
    },
    "Heard Island and McDonald Islands": {
        alpha2Code: Alpha2Code.HM,
        alpha3Code: Alpha3Code.HMD,
        currencies: [
            CurrencyCode.AUD
            ]
    },
    "Holy See": {
        alpha2Code: Alpha2Code.VA,
        alpha3Code: Alpha3Code.VAT,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Honduras": {
        alpha2Code: Alpha2Code.HN,
        alpha3Code: Alpha3Code.HND,
        currencies: [
            CurrencyCode.HNL
            ]
    },
    "Hong Kong": {
        alpha2Code: Alpha2Code.HK,
        alpha3Code: Alpha3Code.HKG,
        currencies: [
            CurrencyCode.HKD
            ]
    },
    "Hungary": {
        alpha2Code: Alpha2Code.HU,
        alpha3Code: Alpha3Code.HUN,
        currencies: [
            CurrencyCode.HUF
            ]
    },
    "Iceland": {
        alpha2Code: Alpha2Code.IS,
        alpha3Code: Alpha3Code.ISL,
        currencies: [
            CurrencyCode.ISK
            ]
    },
    "India": {
        alpha2Code: Alpha2Code.IN,
        alpha3Code: Alpha3Code.IND,
        currencies: [
            CurrencyCode.INR
            ]
    },
    "Indonesia": {
        alpha2Code: Alpha2Code.ID,
        alpha3Code: Alpha3Code.IDN,
        currencies: [
            CurrencyCode.IDR
            ]
    },
    "Côte d'Ivoire": {
        alpha2Code: Alpha2Code.CI,
        alpha3Code: Alpha3Code.CIV,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Iran (Islamic Republic of)": {
        alpha2Code: Alpha2Code.IR,
        alpha3Code: Alpha3Code.IRN,
        currencies: [
            CurrencyCode.IRR
            ]
    },
    "Iraq": {
        alpha2Code: Alpha2Code.IQ,
        alpha3Code: Alpha3Code.IRQ,
        currencies: [
            CurrencyCode.IQD
            ]
    },
    "Ireland": {
        alpha2Code: Alpha2Code.IE,
        alpha3Code: Alpha3Code.IRL,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Isle of Man": {
        alpha2Code: Alpha2Code.IM,
        alpha3Code: Alpha3Code.IMN,
        currencies: [
            CurrencyCode.GBP,
            CurrencyCode.IMP
            ]
    },
    "Israel": {
        alpha2Code: Alpha2Code.IL,
        alpha3Code: Alpha3Code.ISR,
        currencies: [
            CurrencyCode.ILS
            ]
    },
    "Italy": {
        alpha2Code: Alpha2Code.IT,
        alpha3Code: Alpha3Code.ITA,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Jamaica": {
        alpha2Code: Alpha2Code.JM,
        alpha3Code: Alpha3Code.JAM,
        currencies: [
            CurrencyCode.JMD
            ]
    },
    "Japan": {
        alpha2Code: Alpha2Code.JP,
        alpha3Code: Alpha3Code.JPN,
        currencies: [
            CurrencyCode.JPY
            ]
    },
    "Jersey": {
        alpha2Code: Alpha2Code.JE,
        alpha3Code: Alpha3Code.JEY,
        currencies: [
            CurrencyCode.GBP,
            CurrencyCode.JEP
            ]
    },
    "Jordan": {
        alpha2Code: Alpha2Code.JO,
        alpha3Code: Alpha3Code.JOR,
        currencies: [
            CurrencyCode.JOD
            ]
    },
    "Kazakhstan": {
        alpha2Code: Alpha2Code.KZ,
        alpha3Code: Alpha3Code.KAZ,
        currencies: [
            CurrencyCode.KZT
            ]
    },
    "Kenya": {
        alpha2Code: Alpha2Code.KE,
        alpha3Code: Alpha3Code.KEN,
        currencies: [
            CurrencyCode.KES
            ]
    },
    "Kiribati": {
        alpha2Code: Alpha2Code.KI,
        alpha3Code: Alpha3Code.KIR,
        currencies: [
            CurrencyCode.AUD,
            CurrencyCode.NONE
            ]
    },
    "Kuwait": {
        alpha2Code: Alpha2Code.KW,
        alpha3Code: Alpha3Code.KWT,
        currencies: [
            CurrencyCode.KWD
            ]
    },
    "Kyrgyzstan": {
        alpha2Code: Alpha2Code.KG,
        alpha3Code: Alpha3Code.KGZ,
        currencies: [
            CurrencyCode.KGS
            ]
    },
    "Lao People's Democratic Republic": {
        alpha2Code: Alpha2Code.LA,
        alpha3Code: Alpha3Code.LAO,
        currencies: [
            CurrencyCode.LAK
            ]
    },
    "Latvia": {
        alpha2Code: Alpha2Code.LV,
        alpha3Code: Alpha3Code.LVA,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Lebanon": {
        alpha2Code: Alpha2Code.LB,
        alpha3Code: Alpha3Code.LBN,
        currencies: [
            CurrencyCode.LBP
            ]
    },
    "Lesotho": {
        alpha2Code: Alpha2Code.LS,
        alpha3Code: Alpha3Code.LSO,
        currencies: [
            CurrencyCode.LSL,
            CurrencyCode.ZAR
            ]
    },
    "Liberia": {
        alpha2Code: Alpha2Code.LR,
        alpha3Code: Alpha3Code.LBR,
        currencies: [
            CurrencyCode.LRD
            ]
    },
    "Libya": {
        alpha2Code: Alpha2Code.LY,
        alpha3Code: Alpha3Code.LBY,
        currencies: [
            CurrencyCode.LYD
            ]
    },
    "Liechtenstein": {
        alpha2Code: Alpha2Code.LI,
        alpha3Code: Alpha3Code.LIE,
        currencies: [
            CurrencyCode.CHF
            ]
    },
    "Lithuania": {
        alpha2Code: Alpha2Code.LT,
        alpha3Code: Alpha3Code.LTU,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Luxembourg": {
        alpha2Code: Alpha2Code.LU,
        alpha3Code: Alpha3Code.LUX,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Macao": {
        alpha2Code: Alpha2Code.MO,
        alpha3Code: Alpha3Code.MAC,
        currencies: [
            CurrencyCode.MOP
            ]
    },
    "Macedonia (the former Yugoslav Republic of)": {
        alpha2Code: Alpha2Code.MK,
        alpha3Code: Alpha3Code.MKD,
        currencies: [
            CurrencyCode.MKD
            ]
    },
    "Madagascar": {
        alpha2Code: Alpha2Code.MG,
        alpha3Code: Alpha3Code.MDG,
        currencies: [
            CurrencyCode.MGA
            ]
    },
    "Malawi": {
        alpha2Code: Alpha2Code.MW,
        alpha3Code: Alpha3Code.MWI,
        currencies: [
            CurrencyCode.MWK
            ]
    },
    "Malaysia": {
        alpha2Code: Alpha2Code.MY,
        alpha3Code: Alpha3Code.MYS,
        currencies: [
            CurrencyCode.MYR
            ]
    },
    "Maldives": {
        alpha2Code: Alpha2Code.MV,
        alpha3Code: Alpha3Code.MDV,
        currencies: [
            CurrencyCode.MVR
            ]
    },
    "Mali": {
        alpha2Code: Alpha2Code.ML,
        alpha3Code: Alpha3Code.MLI,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Malta": {
        alpha2Code: Alpha2Code.MT,
        alpha3Code: Alpha3Code.MLT,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Marshall Islands": {
        alpha2Code: Alpha2Code.MH,
        alpha3Code: Alpha3Code.MHL,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Martinique": {
        alpha2Code: Alpha2Code.MQ,
        alpha3Code: Alpha3Code.MTQ,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Mauritania": {
        alpha2Code: Alpha2Code.MR,
        alpha3Code: Alpha3Code.MRT,
        currencies: [
            CurrencyCode.MRO
            ]
    },
    "Mauritius": {
        alpha2Code: Alpha2Code.MU,
        alpha3Code: Alpha3Code.MUS,
        currencies: [
            CurrencyCode.MUR
            ]
    },
    "Mayotte": {
        alpha2Code: Alpha2Code.YT,
        alpha3Code: Alpha3Code.MYT,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Mexico": {
        alpha2Code: Alpha2Code.MX,
        alpha3Code: Alpha3Code.MEX,
        currencies: [
            CurrencyCode.MXN
            ]
    },
    "Micronesia (Federated States of)": {
        alpha2Code: Alpha2Code.FM,
        alpha3Code: Alpha3Code.FSM,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Moldova (Republic of)": {
        alpha2Code: Alpha2Code.MD,
        alpha3Code: Alpha3Code.MDA,
        currencies: [
            CurrencyCode.MDL
            ]
    },
    "Monaco": {
        alpha2Code: Alpha2Code.MC,
        alpha3Code: Alpha3Code.MCO,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Mongolia": {
        alpha2Code: Alpha2Code.MN,
        alpha3Code: Alpha3Code.MNG,
        currencies: [
            CurrencyCode.MNT
            ]
    },
    "Montenegro": {
        alpha2Code: Alpha2Code.ME,
        alpha3Code: Alpha3Code.MNE,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Montserrat": {
        alpha2Code: Alpha2Code.MS,
        alpha3Code: Alpha3Code.MSR,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Morocco": {
        alpha2Code: Alpha2Code.MA,
        alpha3Code: Alpha3Code.MAR,
        currencies: [
            CurrencyCode.MAD
            ]
    },
    "Mozambique": {
        alpha2Code: Alpha2Code.MZ,
        alpha3Code: Alpha3Code.MOZ,
        currencies: [
            CurrencyCode.MZN
            ]
    },
    "Myanmar": {
        alpha2Code: Alpha2Code.MM,
        alpha3Code: Alpha3Code.MMR,
        currencies: [
            CurrencyCode.MMK
            ]
    },
    "Namibia": {
        alpha2Code: Alpha2Code.NA,
        alpha3Code: Alpha3Code.NAM,
        currencies: [
            CurrencyCode.NAD,
            CurrencyCode.ZAR
            ]
    },
    "Nauru": {
        alpha2Code: Alpha2Code.NR,
        alpha3Code: Alpha3Code.NRU,
        currencies: [
            CurrencyCode.AUD,
            CurrencyCode.NONE
            ]
    },
    "Nepal": {
        alpha2Code: Alpha2Code.NP,
        alpha3Code: Alpha3Code.NPL,
        currencies: [
            CurrencyCode.NPR
            ]
    },
    "Netherlands": {
        alpha2Code: Alpha2Code.NL,
        alpha3Code: Alpha3Code.NLD,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "New Caledonia": {
        alpha2Code: Alpha2Code.NC,
        alpha3Code: Alpha3Code.NCL,
        currencies: [
            CurrencyCode.XPF
            ]
    },
    "New Zealand": {
        alpha2Code: Alpha2Code.NZ,
        alpha3Code: Alpha3Code.NZL,
        currencies: [
            CurrencyCode.NZD
            ]
    },
    "Nicaragua": {
        alpha2Code: Alpha2Code.NI,
        alpha3Code: Alpha3Code.NIC,
        currencies: [
            CurrencyCode.NIO
            ]
    },
    "Niger": {
        alpha2Code: Alpha2Code.NE,
        alpha3Code: Alpha3Code.NER,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Nigeria": {
        alpha2Code: Alpha2Code.NG,
        alpha3Code: Alpha3Code.NGA,
        currencies: [
            CurrencyCode.NGN
            ]
    },
    "Niue": {
        alpha2Code: Alpha2Code.NU,
        alpha3Code: Alpha3Code.NIU,
        currencies: [
            CurrencyCode.NZD,
            CurrencyCode.NONE
            ]
    },
    "Norfolk Island": {
        alpha2Code: Alpha2Code.NF,
        alpha3Code: Alpha3Code.NFK,
        currencies: [
            CurrencyCode.AUD
            ]
    },
    "Korea (Democratic People's Republic of)": {
        alpha2Code: Alpha2Code.KP,
        alpha3Code: Alpha3Code.PRK,
        currencies: [
            CurrencyCode.KPW
            ]
    },
    "Northern Mariana Islands": {
        alpha2Code: Alpha2Code.MP,
        alpha3Code: Alpha3Code.MNP,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Norway": {
        alpha2Code: Alpha2Code.NO,
        alpha3Code: Alpha3Code.NOR,
        currencies: [
            CurrencyCode.NOK
            ]
    },
    "Oman": {
        alpha2Code: Alpha2Code.OM,
        alpha3Code: Alpha3Code.OMN,
        currencies: [
            CurrencyCode.OMR
            ]
    },
    "Pakistan": {
        alpha2Code: Alpha2Code.PK,
        alpha3Code: Alpha3Code.PAK,
        currencies: [
            CurrencyCode.PKR
            ]
    },
    "Palau": {
        alpha2Code: Alpha2Code.PW,
        alpha3Code: Alpha3Code.PLW,
        currencies: [
            CurrencyCode.NONE,
            CurrencyCode.USD
            ]
    },
    "Palestine, State of": {
        alpha2Code: Alpha2Code.PS,
        alpha3Code: Alpha3Code.PSE,
        currencies: [
            CurrencyCode.ILS
            ]
    },
    "Panama": {
        alpha2Code: Alpha2Code.PA,
        alpha3Code: Alpha3Code.PAN,
        currencies: [
            CurrencyCode.PAB,
            CurrencyCode.USD
            ]
    },
    "Papua New Guinea": {
        alpha2Code: Alpha2Code.PG,
        alpha3Code: Alpha3Code.PNG,
        currencies: [
            CurrencyCode.PGK
            ]
    },
    "Paraguay": {
        alpha2Code: Alpha2Code.PY,
        alpha3Code: Alpha3Code.PRY,
        currencies: [
            CurrencyCode.PYG
            ]
    },
    "Peru": {
        alpha2Code: Alpha2Code.PE,
        alpha3Code: Alpha3Code.PER,
        currencies: [
            CurrencyCode.PEN
            ]
    },
    "Philippines": {
        alpha2Code: Alpha2Code.PH,
        alpha3Code: Alpha3Code.PHL,
        currencies: [
            CurrencyCode.PHP
            ]
    },
    "Pitcairn": {
        alpha2Code: Alpha2Code.PN,
        alpha3Code: Alpha3Code.PCN,
        currencies: [
            CurrencyCode.NZD
            ]
    },
    "Poland": {
        alpha2Code: Alpha2Code.PL,
        alpha3Code: Alpha3Code.POL,
        currencies: [
            CurrencyCode.PLN
            ]
    },
    "Portugal": {
        alpha2Code: Alpha2Code.PT,
        alpha3Code: Alpha3Code.PRT,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Puerto Rico": {
        alpha2Code: Alpha2Code.PR,
        alpha3Code: Alpha3Code.PRI,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Qatar": {
        alpha2Code: Alpha2Code.QA,
        alpha3Code: Alpha3Code.QAT,
        currencies: [
            CurrencyCode.QAR
            ]
    },
    "Republic of Kosovo": {
        alpha2Code: Alpha2Code.XK,
        alpha3Code: Alpha3Code.KOS,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Réunion": {
        alpha2Code: Alpha2Code.RE,
        alpha3Code: Alpha3Code.REU,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Romania": {
        alpha2Code: Alpha2Code.RO,
        alpha3Code: Alpha3Code.ROU,
        currencies: [
            CurrencyCode.RON
            ]
    },
    "Russian Federation": {
        alpha2Code: Alpha2Code.RU,
        alpha3Code: Alpha3Code.RUS,
        currencies: [
            CurrencyCode.RUB
            ]
    },
    "Rwanda": {
        alpha2Code: Alpha2Code.RW,
        alpha3Code: Alpha3Code.RWA,
        currencies: [
            CurrencyCode.RWF
            ]
    },
    "Saint Barthélemy": {
        alpha2Code: Alpha2Code.BL,
        alpha3Code: Alpha3Code.BLM,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Saint Helena, Ascension and Tristan da Cunha": {
        alpha2Code: Alpha2Code.SH,
        alpha3Code: Alpha3Code.SHN,
        currencies: [
            CurrencyCode.SHP
            ]
    },
    "Saint Kitts and Nevis": {
        alpha2Code: Alpha2Code.KN,
        alpha3Code: Alpha3Code.KNA,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Saint Lucia": {
        alpha2Code: Alpha2Code.LC,
        alpha3Code: Alpha3Code.LCA,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Saint Martin (French part)": {
        alpha2Code: Alpha2Code.MF,
        alpha3Code: Alpha3Code.MAF,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Saint Pierre and Miquelon": {
        alpha2Code: Alpha2Code.PM,
        alpha3Code: Alpha3Code.SPM,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Saint Vincent and the Grenadines": {
        alpha2Code: Alpha2Code.VC,
        alpha3Code: Alpha3Code.VCT,
        currencies: [
            CurrencyCode.XCD
            ]
    },
    "Samoa": {
        alpha2Code: Alpha2Code.WS,
        alpha3Code: Alpha3Code.WSM,
        currencies: [
            CurrencyCode.WST
            ]
    },
    "San Marino": {
        alpha2Code: Alpha2Code.SM,
        alpha3Code: Alpha3Code.SMR,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Sao Tome and Principe": {
        alpha2Code: Alpha2Code.ST,
        alpha3Code: Alpha3Code.STP,
        currencies: [
            CurrencyCode.STD
            ]
    },
    "Saudi Arabia": {
        alpha2Code: Alpha2Code.SA,
        alpha3Code: Alpha3Code.SAU,
        currencies: [
            CurrencyCode.SAR
            ]
    },
    "Senegal": {
        alpha2Code: Alpha2Code.SN,
        alpha3Code: Alpha3Code.SEN,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Serbia": {
        alpha2Code: Alpha2Code.RS,
        alpha3Code: Alpha3Code.SRB,
        currencies: [
            CurrencyCode.RSD
            ]
    },
    "Seychelles": {
        alpha2Code: Alpha2Code.SC,
        alpha3Code: Alpha3Code.SYC,
        currencies: [
            CurrencyCode.SCR
            ]
    },
    "Sierra Leone": {
        alpha2Code: Alpha2Code.SL,
        alpha3Code: Alpha3Code.SLE,
        currencies: [
            CurrencyCode.SLL
            ]
    },
    "Singapore": {
        alpha2Code: Alpha2Code.SG,
        alpha3Code: Alpha3Code.SGP,
        currencies: [
            CurrencyCode.BND,
            CurrencyCode.SGD
            ]
    },
    "Sint Maarten (Dutch part)": {
        alpha2Code: Alpha2Code.SX,
        alpha3Code: Alpha3Code.SXM,
        currencies: [
            CurrencyCode.ANG
            ]
    },
    "Slovakia": {
        alpha2Code: Alpha2Code.SK,
        alpha3Code: Alpha3Code.SVK,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Slovenia": {
        alpha2Code: Alpha2Code.SI,
        alpha3Code: Alpha3Code.SVN,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Solomon Islands": {
        alpha2Code: Alpha2Code.SB,
        alpha3Code: Alpha3Code.SLB,
        currencies: [
            CurrencyCode.SBD
            ]
    },
    "Somalia": {
        alpha2Code: Alpha2Code.SO,
        alpha3Code: Alpha3Code.SOM,
        currencies: [
            CurrencyCode.SOS
            ]
    },
    "South Africa": {
        alpha2Code: Alpha2Code.ZA,
        alpha3Code: Alpha3Code.ZAF,
        currencies: [
            CurrencyCode.ZAR
            ]
    },
    "South Georgia and the South Sandwich Islands": {
        alpha2Code: Alpha2Code.GS,
        alpha3Code: Alpha3Code.SGS,
        currencies: [
            CurrencyCode.GBP
            ]
    },
    "Korea (Republic of)": {
        alpha2Code: Alpha2Code.KR,
        alpha3Code: Alpha3Code.KOR,
        currencies: [
            CurrencyCode.KRW
            ]
    },
    "South Sudan": {
        alpha2Code: Alpha2Code.SS,
        alpha3Code: Alpha3Code.SSD,
        currencies: [
            CurrencyCode.SSP
            ]
    },
    "Spain": {
        alpha2Code: Alpha2Code.ES,
        alpha3Code: Alpha3Code.ESP,
        currencies: [
            CurrencyCode.EUR
            ]
    },
    "Sri Lanka": {
        alpha2Code: Alpha2Code.LK,
        alpha3Code: Alpha3Code.LKA,
        currencies: [
            CurrencyCode.LKR
            ]
    },
    "Sudan": {
        alpha2Code: Alpha2Code.SD,
        alpha3Code: Alpha3Code.SDN,
        currencies: [
            CurrencyCode.SDG
            ]
    },
    "Suriname": {
        alpha2Code: Alpha2Code.SR,
        alpha3Code: Alpha3Code.SUR,
        currencies: [
            CurrencyCode.SRD
            ]
    },
    "Svalbard and Jan Mayen": {
        alpha2Code: Alpha2Code.SJ,
        alpha3Code: Alpha3Code.SJM,
        currencies: [
            CurrencyCode.NOK
            ]
    },
    "Swaziland": {
        alpha2Code: Alpha2Code.SZ,
        alpha3Code: Alpha3Code.SWZ,
        currencies: [
            CurrencyCode.SZL
            ]
    },
    "Sweden": {
        alpha2Code: Alpha2Code.SE,
        alpha3Code: Alpha3Code.SWE,
        currencies: [
            CurrencyCode.SEK
            ]
    },
    "Switzerland": {
        alpha2Code: Alpha2Code.CH,
        alpha3Code: Alpha3Code.CHE,
        currencies: [
            CurrencyCode.CHF
            ]
    },
    "Syrian Arab Republic": {
        alpha2Code: Alpha2Code.SY,
        alpha3Code: Alpha3Code.SYR,
        currencies: [
            CurrencyCode.SYP
            ]
    },
    "Taiwan": {
        alpha2Code: Alpha2Code.TW,
        alpha3Code: Alpha3Code.TWN,
        currencies: [
            CurrencyCode.TWD
            ]
    },
    "Tajikistan": {
        alpha2Code: Alpha2Code.TJ,
        alpha3Code: Alpha3Code.TJK,
        currencies: [
            CurrencyCode.TJS
            ]
    },
    "Tanzania, United Republic of": {
        alpha2Code: Alpha2Code.TZ,
        alpha3Code: Alpha3Code.TZA,
        currencies: [
            CurrencyCode.TZS
            ]
    },
    "Thailand": {
        alpha2Code: Alpha2Code.TH,
        alpha3Code: Alpha3Code.THA,
        currencies: [
            CurrencyCode.THB
            ]
    },
    "Timor-Leste": {
        alpha2Code: Alpha2Code.TL,
        alpha3Code: Alpha3Code.TLS,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Togo": {
        alpha2Code: Alpha2Code.TG,
        alpha3Code: Alpha3Code.TGO,
        currencies: [
            CurrencyCode.XOF
            ]
    },
    "Tokelau": {
        alpha2Code: Alpha2Code.TK,
        alpha3Code: Alpha3Code.TKL,
        currencies: [
            CurrencyCode.NZD
            ]
    },
    "Tonga": {
        alpha2Code: Alpha2Code.TO,
        alpha3Code: Alpha3Code.TON,
        currencies: [
            CurrencyCode.TOP
            ]
    },
    "Trinidad and Tobago": {
        alpha2Code: Alpha2Code.TT,
        alpha3Code: Alpha3Code.TTO,
        currencies: [
            CurrencyCode.TTD
            ]
    },
    "Tunisia": {
        alpha2Code: Alpha2Code.TN,
        alpha3Code: Alpha3Code.TUN,
        currencies: [
            CurrencyCode.TND
            ]
    },
    "Turkey": {
        alpha2Code: Alpha2Code.TR,
        alpha3Code: Alpha3Code.TUR,
        currencies: [
            CurrencyCode.TRY
            ]
    },
    "Turkmenistan": {
        alpha2Code: Alpha2Code.TM,
        alpha3Code: Alpha3Code.TKM,
        currencies: [
            CurrencyCode.TMT
            ]
    },
    "Turks and Caicos Islands": {
        alpha2Code: Alpha2Code.TC,
        alpha3Code: Alpha3Code.TCA,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Tuvalu": {
        alpha2Code: Alpha2Code.TV,
        alpha3Code: Alpha3Code.TUV,
        currencies: [
            CurrencyCode.AUD,
            CurrencyCode.TVD
            ]
    },
    "Uganda": {
        alpha2Code: Alpha2Code.UG,
        alpha3Code: Alpha3Code.UGA,
        currencies: [
            CurrencyCode.UGX
            ]
    },
    "Ukraine": {
        alpha2Code: Alpha2Code.UA,
        alpha3Code: Alpha3Code.UKR,
        currencies: [
            CurrencyCode.UAH
            ]
    },
    "United Arab Emirates": {
        alpha2Code: Alpha2Code.AE,
        alpha3Code: Alpha3Code.ARE,
        currencies: [
            CurrencyCode.AED
            ]
    },
    "United Kingdom of Great Britain and Northern Ireland": {
        alpha2Code: Alpha2Code.GB,
        alpha3Code: Alpha3Code.GBR,
        currencies: [
            CurrencyCode.GBP
            ]
    },
    "United States of America": {
        alpha2Code: Alpha2Code.US,
        alpha3Code: Alpha3Code.USA,
        currencies: [
            CurrencyCode.USD
            ]
    },
    "Uruguay": {
        alpha2Code: Alpha2Code.UY,
        alpha3Code: Alpha3Code.URY,
        currencies: [
            CurrencyCode.UYU
            ]
    },
    "Uzbekistan": {
        alpha2Code: Alpha2Code.UZ,
        alpha3Code: Alpha3Code.UZB,
        currencies: [
            CurrencyCode.UZS
            ]
    },
    "Vanuatu": {
        alpha2Code: Alpha2Code.VU,
        alpha3Code: Alpha3Code.VUT,
        currencies: [
            CurrencyCode.VUV
            ]
    },
    "Venezuela (Bolivarian Republic of)": {
        alpha2Code: Alpha2Code.VE,
        alpha3Code: Alpha3Code.VEN,
        currencies: [
            CurrencyCode.VEF
            ]
    },
    "Viet Nam": {
        alpha2Code: Alpha2Code.VN,
        alpha3Code: Alpha3Code.VNM,
        currencies: [
            CurrencyCode.VND
            ]
    },
    "Wallis and Futuna": {
        alpha2Code: Alpha2Code.WF,
        alpha3Code: Alpha3Code.WLF,
        currencies: [
            CurrencyCode.XPF
            ]
    },
    "Western Sahara": {
        alpha2Code: Alpha2Code.EH,
        alpha3Code: Alpha3Code.ESH,
        currencies: [
            CurrencyCode.MAD,
            CurrencyCode.DZD
            ]
    },
    "Yemen": {
        alpha2Code: Alpha2Code.YE,
        alpha3Code: Alpha3Code.YEM,
        currencies: [
            CurrencyCode.YER
            ]
    },
    "Zambia": {
        alpha2Code: Alpha2Code.ZM,
        alpha3Code: Alpha3Code.ZMB,
        currencies: [
            CurrencyCode.ZM
            ]
    },
    "Zimbabwe": {
        alpha2Code: Alpha2Code.ZW,
        alpha3Code: Alpha3Code.ZWE,
        currencies: [
            CurrencyCode.BWP,
            CurrencyCode.GBP,
            CurrencyCode.CNY,
            CurrencyCode.EUR,
            CurrencyCode.INR,
            CurrencyCode.JPY,
            CurrencyCode.ZAR,
            CurrencyCode.USD,
            CurrencyCode.NONE
            ]
    }
};
