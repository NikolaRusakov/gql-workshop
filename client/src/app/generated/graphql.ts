export type Maybe<T> = T | null;

export interface CurrentCurrenciesInput {
  base?: CurrencyCode;

  currencyCode?: (Maybe<CurrencyCode>)[];
}

export interface HistoryCurrenciesInput {
  base?: CurrencyCode;

  currencyCode?: (Maybe<CurrencyCode>)[];

  startAt?: Maybe<Date>;

  endAt?: Maybe<Date>;
}

export enum CurrencyCode {
  Nzd = "NZD",
  Bgn = "BGN",
  Ils = "ILS",
  Rub = "RUB",
  Cad = "CAD",
  Usd = "USD",
  Php = "PHP",
  Chf = "CHF",
  Zar = "ZAR",
  Aud = "AUD",
  Jpy = "JPY",
  Try = "TRY",
  Hkd = "HKD",
  Myr = "MYR",
  Thb = "THB",
  Hrk = "HRK",
  Nok = "NOK",
  Idr = "IDR",
  Dkk = "DKK",
  Czk = "CZK",
  Huf = "HUF",
  Gbp = "GBP",
  Mxn = "MXN",
  Krw = "KRW",
  Isk = "ISK",
  Sgd = "SGD",
  Brl = "BRL",
  Pln = "PLN",
  Inr = "INR",
  Ron = "RON",
  Cny = "CNY",
  Sek = "SEK",
  Eur = "EUR"
}

export enum Alpha2Code {
  Af = "AF",
  Ax = "AX",
  Al = "AL",
  Dz = "DZ",
  As = "AS",
  Ad = "AD",
  Ao = "AO",
  Ai = "AI",
  Aq = "AQ",
  Ag = "AG",
  Ar = "AR",
  Am = "AM",
  Aw = "AW",
  Au = "AU",
  At = "AT",
  Az = "AZ",
  Bs = "BS",
  Bh = "BH",
  Bd = "BD",
  Bb = "BB",
  By = "BY",
  Be = "BE",
  Bz = "BZ",
  Bj = "BJ",
  Bm = "BM",
  Bt = "BT",
  Bo = "BO",
  Bq = "BQ",
  Ba = "BA",
  Bw = "BW",
  Bv = "BV",
  Br = "BR",
  Io = "IO",
  Um = "UM",
  Vg = "VG",
  Vi = "VI",
  Bn = "BN",
  Bg = "BG",
  Bf = "BF",
  Bi = "BI",
  Kh = "KH",
  Cm = "CM",
  Ca = "CA",
  Cv = "CV",
  Ky = "KY",
  Cf = "CF",
  Td = "TD",
  Cl = "CL",
  Cn = "CN",
  Cx = "CX",
  Cc = "CC",
  Co = "CO",
  Km = "KM",
  Cg = "CG",
  Cd = "CD",
  Ck = "CK",
  Cr = "CR",
  Hr = "HR",
  Cu = "CU",
  Cw = "CW",
  Cy = "CY",
  Cz = "CZ",
  Dk = "DK",
  Dj = "DJ",
  Dm = "DM",
  Do = "DO",
  Ec = "EC",
  Eg = "EG",
  Sv = "SV",
  Gq = "GQ",
  Er = "ER",
  Ee = "EE",
  Et = "ET",
  Fk = "FK",
  Fo = "FO",
  Fj = "FJ",
  Fi = "FI",
  Fr = "FR",
  Gf = "GF",
  Pf = "PF",
  Tf = "TF",
  Ga = "GA",
  Gm = "GM",
  Ge = "GE",
  De = "DE",
  Gh = "GH",
  Gi = "GI",
  Gr = "GR",
  Gl = "GL",
  Gd = "GD",
  Gp = "GP",
  Gu = "GU",
  Gt = "GT",
  Gg = "GG",
  Gn = "GN",
  Gw = "GW",
  Gy = "GY",
  Ht = "HT",
  Hm = "HM",
  Va = "VA",
  Hn = "HN",
  Hk = "HK",
  Hu = "HU",
  Is = "IS",
  In = "IN",
  Id = "ID",
  Ci = "CI",
  Ir = "IR",
  Iq = "IQ",
  Ie = "IE",
  Im = "IM",
  Il = "IL",
  It = "IT",
  Jm = "JM",
  Jp = "JP",
  Je = "JE",
  Jo = "JO",
  Kz = "KZ",
  Ke = "KE",
  Ki = "KI",
  Kw = "KW",
  Kg = "KG",
  La = "LA",
  Lv = "LV",
  Lb = "LB",
  Ls = "LS",
  Lr = "LR",
  Ly = "LY",
  Li = "LI",
  Lt = "LT",
  Lu = "LU",
  Mo = "MO",
  Mk = "MK",
  Mg = "MG",
  Mw = "MW",
  My = "MY",
  Mv = "MV",
  Ml = "ML",
  Mt = "MT",
  Mh = "MH",
  Mq = "MQ",
  Mr = "MR",
  Mu = "MU",
  Yt = "YT",
  Mx = "MX",
  Fm = "FM",
  Md = "MD",
  Mc = "MC",
  Mn = "MN",
  Me = "ME",
  Ms = "MS",
  Ma = "MA",
  Mz = "MZ",
  Mm = "MM",
  Na = "NA",
  Nr = "NR",
  Np = "NP",
  Nl = "NL",
  Nc = "NC",
  Nz = "NZ",
  Ni = "NI",
  Ne = "NE",
  Ng = "NG",
  Nu = "NU",
  Nf = "NF",
  Kp = "KP",
  Mp = "MP",
  No = "NO",
  Om = "OM",
  Pk = "PK",
  Pw = "PW",
  Ps = "PS",
  Pa = "PA",
  Pg = "PG",
  Py = "PY",
  Pe = "PE",
  Ph = "PH",
  Pn = "PN",
  Pl = "PL",
  Pt = "PT",
  Pr = "PR",
  Qa = "QA",
  Xk = "XK",
  Re = "RE",
  Ro = "RO",
  Ru = "RU",
  Rw = "RW",
  Bl = "BL",
  Sh = "SH",
  Kn = "KN",
  Lc = "LC",
  Mf = "MF",
  Pm = "PM",
  Vc = "VC",
  Ws = "WS",
  Sm = "SM",
  St = "ST",
  Sa = "SA",
  Sn = "SN",
  Rs = "RS",
  Sc = "SC",
  Sl = "SL",
  Sg = "SG",
  Sx = "SX",
  Sk = "SK",
  Si = "SI",
  Sb = "SB",
  So = "SO",
  Za = "ZA",
  Gs = "GS",
  Kr = "KR",
  Ss = "SS",
  Es = "ES",
  Lk = "LK",
  Sd = "SD",
  Sr = "SR",
  Sj = "SJ",
  Sz = "SZ",
  Se = "SE",
  Ch = "CH",
  Sy = "SY",
  Tw = "TW",
  Tj = "TJ",
  Tz = "TZ",
  Th = "TH",
  Tl = "TL",
  Tg = "TG",
  Tk = "TK",
  To = "TO",
  Tt = "TT",
  Tn = "TN",
  Tr = "TR",
  Tm = "TM",
  Tc = "TC",
  Tv = "TV",
  Ug = "UG",
  Ua = "UA",
  Ae = "AE",
  Gb = "GB",
  Us = "US",
  Uy = "UY",
  Uz = "UZ",
  Vu = "VU",
  Ve = "VE",
  Vn = "VN",
  Wf = "WF",
  Eh = "EH",
  Ye = "YE",
  Zm = "ZM",
  Zw = "ZW"
}

export enum Alpha3Code {
  Afg = "AFG",
  Ala = "ALA",
  Alb = "ALB",
  Dza = "DZA",
  Asm = "ASM",
  And = "AND",
  Ago = "AGO",
  Aia = "AIA",
  Ata = "ATA",
  Atg = "ATG",
  Arg = "ARG",
  Arm = "ARM",
  Abw = "ABW",
  Aus = "AUS",
  Aut = "AUT",
  Aze = "AZE",
  Bhs = "BHS",
  Bhr = "BHR",
  Bgd = "BGD",
  Brb = "BRB",
  Blr = "BLR",
  Bel = "BEL",
  Blz = "BLZ",
  Ben = "BEN",
  Bmu = "BMU",
  Btn = "BTN",
  Bol = "BOL",
  Bes = "BES",
  Bih = "BIH",
  Bwa = "BWA",
  Bvt = "BVT",
  Bra = "BRA",
  Iot = "IOT",
  Umi = "UMI",
  Vgb = "VGB",
  Vir = "VIR",
  Brn = "BRN",
  Bgr = "BGR",
  Bfa = "BFA",
  Bdi = "BDI",
  Khm = "KHM",
  Cmr = "CMR",
  Can = "CAN",
  Cpv = "CPV",
  Cym = "CYM",
  Caf = "CAF",
  Tcd = "TCD",
  Chl = "CHL",
  Chn = "CHN",
  Cxr = "CXR",
  Cck = "CCK",
  Col = "COL",
  Com = "COM",
  Cog = "COG",
  Cod = "COD",
  Cok = "COK",
  Cri = "CRI",
  Hrv = "HRV",
  Cub = "CUB",
  Cuw = "CUW",
  Cyp = "CYP",
  Cze = "CZE",
  Dnk = "DNK",
  Dji = "DJI",
  Dma = "DMA",
  Dom = "DOM",
  Ecu = "ECU",
  Egy = "EGY",
  Slv = "SLV",
  Gnq = "GNQ",
  Eri = "ERI",
  Est = "EST",
  Eth = "ETH",
  Flk = "FLK",
  Fro = "FRO",
  Fji = "FJI",
  Fin = "FIN",
  Fra = "FRA",
  Guf = "GUF",
  Pyf = "PYF",
  Atf = "ATF",
  Gab = "GAB",
  Gmb = "GMB",
  Geo = "GEO",
  Deu = "DEU",
  Gha = "GHA",
  Gib = "GIB",
  Grc = "GRC",
  Grl = "GRL",
  Grd = "GRD",
  Glp = "GLP",
  Gum = "GUM",
  Gtm = "GTM",
  Ggy = "GGY",
  Gin = "GIN",
  Gnb = "GNB",
  Guy = "GUY",
  Hti = "HTI",
  Hmd = "HMD",
  Vat = "VAT",
  Hnd = "HND",
  Hkg = "HKG",
  Hun = "HUN",
  Isl = "ISL",
  Ind = "IND",
  Idn = "IDN",
  Civ = "CIV",
  Irn = "IRN",
  Irq = "IRQ",
  Irl = "IRL",
  Imn = "IMN",
  Isr = "ISR",
  Ita = "ITA",
  Jam = "JAM",
  Jpn = "JPN",
  Jey = "JEY",
  Jor = "JOR",
  Kaz = "KAZ",
  Ken = "KEN",
  Kir = "KIR",
  Kwt = "KWT",
  Kgz = "KGZ",
  Lao = "LAO",
  Lva = "LVA",
  Lbn = "LBN",
  Lso = "LSO",
  Lbr = "LBR",
  Lby = "LBY",
  Lie = "LIE",
  Ltu = "LTU",
  Lux = "LUX",
  Mac = "MAC",
  Mkd = "MKD",
  Mdg = "MDG",
  Mwi = "MWI",
  Mys = "MYS",
  Mdv = "MDV",
  Mli = "MLI",
  Mlt = "MLT",
  Mhl = "MHL",
  Mtq = "MTQ",
  Mrt = "MRT",
  Mus = "MUS",
  Myt = "MYT",
  Mex = "MEX",
  Fsm = "FSM",
  Mda = "MDA",
  Mco = "MCO",
  Mng = "MNG",
  Mne = "MNE",
  Msr = "MSR",
  Mar = "MAR",
  Moz = "MOZ",
  Mmr = "MMR",
  Nam = "NAM",
  Nru = "NRU",
  Npl = "NPL",
  Nld = "NLD",
  Ncl = "NCL",
  Nzl = "NZL",
  Nic = "NIC",
  Ner = "NER",
  Nga = "NGA",
  Niu = "NIU",
  Nfk = "NFK",
  Prk = "PRK",
  Mnp = "MNP",
  Nor = "NOR",
  Omn = "OMN",
  Pak = "PAK",
  Plw = "PLW",
  Pse = "PSE",
  Pan = "PAN",
  Png = "PNG",
  Pry = "PRY",
  Per = "PER",
  Phl = "PHL",
  Pcn = "PCN",
  Pol = "POL",
  Prt = "PRT",
  Pri = "PRI",
  Qat = "QAT",
  Kos = "KOS",
  Reu = "REU",
  Rou = "ROU",
  Rus = "RUS",
  Rwa = "RWA",
  Blm = "BLM",
  Shn = "SHN",
  Kna = "KNA",
  Lca = "LCA",
  Maf = "MAF",
  Spm = "SPM",
  Vct = "VCT",
  Wsm = "WSM",
  Smr = "SMR",
  Stp = "STP",
  Sau = "SAU",
  Sen = "SEN",
  Srb = "SRB",
  Syc = "SYC",
  Sle = "SLE",
  Sgp = "SGP",
  Sxm = "SXM",
  Svk = "SVK",
  Svn = "SVN",
  Slb = "SLB",
  Som = "SOM",
  Zaf = "ZAF",
  Sgs = "SGS",
  Kor = "KOR",
  Ssd = "SSD",
  Esp = "ESP",
  Lka = "LKA",
  Sdn = "SDN",
  Sur = "SUR",
  Sjm = "SJM",
  Swz = "SWZ",
  Swe = "SWE",
  Che = "CHE",
  Syr = "SYR",
  Twn = "TWN",
  Tjk = "TJK",
  Tza = "TZA",
  Tha = "THA",
  Tls = "TLS",
  Tgo = "TGO",
  Tkl = "TKL",
  Ton = "TON",
  Tto = "TTO",
  Tun = "TUN",
  Tur = "TUR",
  Tkm = "TKM",
  Tca = "TCA",
  Tuv = "TUV",
  Uga = "UGA",
  Ukr = "UKR",
  Are = "ARE",
  Gbr = "GBR",
  Usa = "USA",
  Ury = "URY",
  Uzb = "UZB",
  Vut = "VUT",
  Ven = "VEN",
  Vnm = "VNM",
  Wlf = "WLF",
  Esh = "ESH",
  Yem = "YEM",
  Zmb = "ZMB",
  Zwe = "ZWE"
}

export enum CapitalName {
  Kabul = "Kabul",
  Mariehamn = "Mariehamn",
  Tirana = "Tirana",
  Algiers = "Algiers",
  PagoPago = "PagoPago",
  AndorraLaVella = "AndorraLaVella",
  Luanda = "Luanda",
  TheValley = "TheValley",
  SaintJohns = "SaintJohns",
  BuenosAires = "BuenosAires",
  Yerevan = "Yerevan",
  Oranjestad = "Oranjestad",
  Canberra = "Canberra",
  Vienna = "Vienna",
  Baku = "Baku",
  Nassau = "Nassau",
  Manama = "Manama",
  Dhaka = "Dhaka",
  Bridgetown = "Bridgetown",
  Minsk = "Minsk",
  Brussels = "Brussels",
  Belmopan = "Belmopan",
  PortoNovo = "PortoNovo",
  Hamilton = "Hamilton",
  Thimphu = "Thimphu",
  Sucre = "Sucre",
  Kralendijk = "Kralendijk",
  Sarajevo = "Sarajevo",
  Gaborone = "Gaborone",
  Brasilia = "Brasilia",
  DiegoGarcia = "DiegoGarcia",
  RoadTown = "RoadTown",
  CharlotteAmalie = "CharlotteAmalie",
  BandarSeriBegawan = "BandarSeriBegawan",
  Sofia = "Sofia",
  Ouagadougou = "Ouagadougou",
  Bujumbura = "Bujumbura",
  PhnomPenh = "PhnomPenh",
  Yaounde = "Yaounde",
  Ottawa = "Ottawa",
  Praia = "Praia",
  GeorgeTown = "GeorgeTown",
  Bangui = "Bangui",
  NDjamena = "NDjamena",
  Santiago = "Santiago",
  Beijing = "Beijing",
  FlyingFishCove = "FlyingFishCove",
  WestIsland = "WestIsland",
  Bogota = "Bogota",
  Moroni = "Moroni",
  Brazzaville = "Brazzaville",
  Kinshasa = "Kinshasa",
  Avarua = "Avarua",
  SanJose = "SanJose",
  Zagreb = "Zagreb",
  Havana = "Havana",
  Willemstad = "Willemstad",
  Nicosia = "Nicosia",
  Prague = "Prague",
  Copenhagen = "Copenhagen",
  Djibouti = "Djibouti",
  Roseau = "Roseau",
  SantoDomingo = "SantoDomingo",
  Quito = "Quito",
  Cairo = "Cairo",
  SanSalvador = "SanSalvador",
  Malabo = "Malabo",
  Asmara = "Asmara",
  Tallinn = "Tallinn",
  AddisAbaba = "AddisAbaba",
  Stanley = "Stanley",
  Torshavn = "Torshavn",
  Suva = "Suva",
  Helsinki = "Helsinki",
  Paris = "Paris",
  Cayenne = "Cayenne",
  Papeete = "Papeete",
  PortAuxFrancais = "PortAuxFrancais",
  Libreville = "Libreville",
  Banjul = "Banjul",
  Tbilisi = "Tbilisi",
  Berlin = "Berlin",
  Accra = "Accra",
  Gibraltar = "Gibraltar",
  Athens = "Athens",
  Nuuk = "Nuuk",
  StGeorges = "StGeorges",
  BasseTerre = "BasseTerre",
  Hagatna = "Hagatna",
  GuatemalaCity = "GuatemalaCity",
  StPeterPort = "StPeterPort",
  Conakry = "Conakry",
  Bissau = "Bissau",
  Georgetown = "Georgetown",
  PortAuPrince = "PortAuPrince",
  Rome = "Rome",
  Tegucigalpa = "Tegucigalpa",
  CityOfVictoria = "CityOfVictoria",
  Budapest = "Budapest",
  Reykjavik = "Reykjavik",
  NewDelhi = "NewDelhi",
  Jakarta = "Jakarta",
  Yamoussoukro = "Yamoussoukro",
  Tehran = "Tehran",
  Baghdad = "Baghdad",
  Dublin = "Dublin",
  Douglas = "Douglas",
  Jerusalem = "Jerusalem",
  Tokyo = "Tokyo",
  SaintHelier = "SaintHelier",
  Amman = "Amman",
  Astana = "Astana",
  Nairobi = "Nairobi",
  SouthTarawa = "SouthTarawa",
  KuwaitCity = "KuwaitCity",
  Bishkek = "Bishkek",
  Vientiane = "Vientiane",
  Riga = "Riga",
  Beirut = "Beirut",
  Maseru = "Maseru",
  Monrovia = "Monrovia",
  Tripoli = "Tripoli",
  Vaduz = "Vaduz",
  Vilnius = "Vilnius",
  Luxembourg = "Luxembourg",
  Skopje = "Skopje",
  Antananarivo = "Antananarivo",
  Lilongwe = "Lilongwe",
  KualaLumpur = "KualaLumpur",
  Male = "Male",
  Bamako = "Bamako",
  Valletta = "Valletta",
  Majuro = "Majuro",
  FortDeFrance = "FortDeFrance",
  Nouakchott = "Nouakchott",
  PortLouis = "PortLouis",
  Mamoudzou = "Mamoudzou",
  MexicoCity = "MexicoCity",
  Palikir = "Palikir",
  Chisinau = "Chisinau",
  Monaco = "Monaco",
  UlanBator = "UlanBator",
  Podgorica = "Podgorica",
  Plymouth = "Plymouth",
  Rabat = "Rabat",
  Maputo = "Maputo",
  Naypyidaw = "Naypyidaw",
  Windhoek = "Windhoek",
  Yaren = "Yaren",
  Kathmandu = "Kathmandu",
  Amsterdam = "Amsterdam",
  Noumea = "Noumea",
  Wellington = "Wellington",
  Managua = "Managua",
  Niamey = "Niamey",
  Abuja = "Abuja",
  Alofi = "Alofi",
  Kingston = "Kingston",
  Pyongyang = "Pyongyang",
  Saipan = "Saipan",
  Oslo = "Oslo",
  Muscat = "Muscat",
  Islamabad = "Islamabad",
  Ngerulmud = "Ngerulmud",
  Ramallah = "Ramallah",
  PanamaCity = "PanamaCity",
  PortMoresby = "PortMoresby",
  Asuncion = "Asuncion",
  Lima = "Lima",
  Manila = "Manila",
  Adamstown = "Adamstown",
  Warsaw = "Warsaw",
  Lisbon = "Lisbon",
  SanJuan = "SanJuan",
  Doha = "Doha",
  Pristina = "Pristina",
  SaintDenis = "SaintDenis",
  Bucharest = "Bucharest",
  Moscow = "Moscow",
  Kigali = "Kigali",
  Gustavia = "Gustavia",
  Jamestown = "Jamestown",
  Basseterre = "Basseterre",
  Castries = "Castries",
  Marigot = "Marigot",
  SaintPierre = "SaintPierre",
  Kingstown = "Kingstown",
  Apia = "Apia",
  CityOfSanMarino = "CityOfSanMarino",
  SaoTome = "SaoTome",
  Riyadh = "Riyadh",
  Dakar = "Dakar",
  Belgrade = "Belgrade",
  Victoria = "Victoria",
  Freetown = "Freetown",
  Singapore = "Singapore",
  Philipsburg = "Philipsburg",
  Bratislava = "Bratislava",
  Ljubljana = "Ljubljana",
  Honiara = "Honiara",
  Mogadishu = "Mogadishu",
  Pretoria = "Pretoria",
  KingEdwardPoint = "KingEdwardPoint",
  Seoul = "Seoul",
  Juba = "Juba",
  Madrid = "Madrid",
  Colombo = "Colombo",
  Khartoum = "Khartoum",
  Paramaribo = "Paramaribo",
  Longyearbyen = "Longyearbyen",
  Lobamba = "Lobamba",
  Stockholm = "Stockholm",
  Bern = "Bern",
  Damascus = "Damascus",
  Taipei = "Taipei",
  Dushanbe = "Dushanbe",
  Dodoma = "Dodoma",
  Bangkok = "Bangkok",
  Dili = "Dili",
  Lome = "Lome",
  Fakaofo = "Fakaofo",
  Nukualofa = "Nukualofa",
  PortOfSpain = "PortOfSpain",
  Tunis = "Tunis",
  Ankara = "Ankara",
  Ashgabat = "Ashgabat",
  CockburnTown = "CockburnTown",
  Funafuti = "Funafuti",
  Kampala = "Kampala",
  Kiev = "Kiev",
  AbuDhabi = "AbuDhabi",
  London = "London",
  WashingtonDc = "WashingtonDC",
  Montevideo = "Montevideo",
  Tashkent = "Tashkent",
  PortVila = "PortVila",
  Caracas = "Caracas",
  Hanoi = "Hanoi",
  MataUtu = "MataUtu",
  ElAaiun = "ElAaiun",
  Sanaa = "Sanaa",
  Lusaka = "Lusaka",
  Harare = "Harare"
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Empty = "Empty",
  Europe = "Europe",
  Oceania = "Oceania",
  Polar = "Polar"
}

export enum Acronym {
  Al = "Al",
  Asean = "Asean",
  Au = "Au",
  Cais = "Cais",
  Caricom = "Caricom",
  Cefta = "Cefta",
  Eeu = "Eeu",
  Efta = "Efta",
  Eu = "Eu",
  Nafta = "Nafta",
  Pa = "Pa",
  Saarc = "Saarc",
  Usan = "Usan"
}

export enum Name {
  AfricanUnion = "AfricanUnion",
  ArabLeague = "ArabLeague",
  AssociationOfSoutheastAsianNations = "AssociationOfSoutheastAsianNations",
  CaribbeanCommunity = "CaribbeanCommunity",
  CentralAmericanIntegrationSystem = "CentralAmericanIntegrationSystem",
  CentralEuropeanFreeTradeAgreement = "CentralEuropeanFreeTradeAgreement",
  EurasianEconomicUnion = "EurasianEconomicUnion",
  EuropeanFreeTradeAssociation = "EuropeanFreeTradeAssociation",
  EuropeanUnion = "EuropeanUnion",
  NorthAmericanFreeTradeAgreement = "NorthAmericanFreeTradeAgreement",
  PacificAlliance = "PacificAlliance",
  SouthAsianAssociationForRegionalCooperation = "SouthAsianAssociationForRegionalCooperation",
  UnionOfSouthAmericanNations = "UnionOfSouthAmericanNations"
}

export enum OtherAcronym {
  Eaeu = "Eaeu",
  Sica = "Sica",
  Unasul = "Unasul",
  Unasur = "Unasur",
  Uzan = "Uzan"
}

export enum OtherName {
  AccordDeLibreEchangeNordAmericain = "AccordDeLibreEchangeNordAmericain",
  AlianzaDelPacifico = "AlianzaDelPacifico",
  CaribischeGemeenschap = "CaribischeGemeenschap",
  CommunauteCaribeenne = "CommunauteCaribeenne",
  ComunidadDelCaribe = "ComunidadDelCaribe",
  JamiAtAdDuwalAlArabiyah = "JamiAtAdDuwalAlArabiyah",
  LeagueOfArabStates = "LeagueOfArabStates",
  SistemaDeLaIntegracionCentroamericana = "SistemaDeLaIntegracionCentroamericana",
  SouthAmericanUnion = "SouthAmericanUnion",
  TratadoDeLibreComercioDeAmericaDelNorte = "TratadoDeLibreComercioDeAmericaDelNorte",
  UmojaWaAfrika = "UmojaWaAfrika",
  UnieVanZuidAmerikaanseNaties = "UnieVanZuidAmerikaanseNaties",
  UnionAfricaine = "UnionAfricaine",
  UniaoAfricana = "UniaoAfricana",
  UniaoDeNacoesSulAmericanas = "UniaoDeNacoesSulAmericanas",
  UnionAfricana = "UnionAfricana",
  UnionDeNacionesSuramericanas = "UnionDeNacionesSuramericanas"
}

export enum WeatherCode {
  Tornado = "tornado"
}

export enum CountryName {
  Afghanistan = "Afghanistan",
  AlandIslands = "AlandIslands",
  Albania = "Albania",
  Algeria = "Algeria",
  AmericanSamoa = "AmericanSamoa",
  Andorra = "Andorra",
  Angola = "Angola",
  Anguilla = "Anguilla",
  Antarctica = "Antarctica",
  AntiguaAndBarbuda = "AntiguaAndBarbuda",
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
  Bolivia = "Bolivia",
  BonaireSintEustatiusAndSaba = "BonaireSintEustatiusAndSaba",
  BosniaAndHerzegovina = "BosniaAndHerzegovina",
  Botswana = "Botswana",
  BouvetIsland = "BouvetIsland",
  Brazil = "Brazil",
  BritishIndianOceanTerritory = "BritishIndianOceanTerritory",
  UnitedStatesMinorOutlyingIslands = "UnitedStatesMinorOutlyingIslands",
  VirginIslands = "VirginIslands",
  VirginIslandsUs = "VirginIslandsUS",
  BruneiDarussalam = "BruneiDarussalam",
  Bulgaria = "Bulgaria",
  BurkinaFaso = "BurkinaFaso",
  Burundi = "Burundi",
  Cambodia = "Cambodia",
  Cameroon = "Cameroon",
  Canada = "Canada",
  CaboVerde = "CaboVerde",
  CaymanIslands = "CaymanIslands",
  CentralAfricanRepublic = "CentralAfricanRepublic",
  Chad = "Chad",
  Chile = "Chile",
  China = "China",
  ChristmasIsland = "ChristmasIsland",
  CocosIslands = "CocosIslands",
  Colombia = "Colombia",
  Comoros = "Comoros",
  Congo = "Congo",
  CongoRep = "CongoRep",
  CookIslands = "CookIslands",
  CostaRica = "CostaRica",
  Croatia = "Croatia",
  Cuba = "Cuba",
  Curacao = "Curacao",
  Cyprus = "Cyprus",
  CzechRepublic = "CzechRepublic",
  Denmark = "Denmark",
  Djibouti = "Djibouti",
  Dominica = "Dominica",
  DominicanRepublic = "DominicanRepublic",
  Ecuador = "Ecuador",
  Egypt = "Egypt",
  ElSalvador = "ElSalvador",
  EquatorialGuinea = "EquatorialGuinea",
  Eritrea = "Eritrea",
  Estonia = "Estonia",
  Ethiopia = "Ethiopia",
  FalklandIslands = "FalklandIslands",
  FaroeIslands = "FaroeIslands",
  Fiji = "Fiji",
  Finland = "Finland",
  France = "France",
  FrenchGuiana = "FrenchGuiana",
  FrenchPolynesia = "FrenchPolynesia",
  FrenchSouthernTerritories = "FrenchSouthernTerritories",
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
  GuineaBissau = "GuineaBissau",
  Guyana = "Guyana",
  Haiti = "Haiti",
  HeardIslandAndMcDonaldIslands = "HeardIslandAndMcDonaldIslands",
  HolySee = "HolySee",
  Honduras = "Honduras",
  HongKong = "HongKong",
  Hungary = "Hungary",
  Iceland = "Iceland",
  India = "India",
  Indonesia = "Indonesia",
  CoteDIvoire = "CoteDIvoire",
  Iran = "Iran",
  Iraq = "Iraq",
  Ireland = "Ireland",
  IsleOfMan = "IsleOfMan",
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
  LaoPeoplesDemocraticRepublic = "LaoPeoplesDemocraticRepublic",
  Latvia = "Latvia",
  Lebanon = "Lebanon",
  Lesotho = "Lesotho",
  Liberia = "Liberia",
  Libya = "Libya",
  Liechtenstein = "Liechtenstein",
  Lithuania = "Lithuania",
  Luxembourg = "Luxembourg",
  Macao = "Macao",
  Macedonia = "Macedonia",
  Madagascar = "Madagascar",
  Malawi = "Malawi",
  Malaysia = "Malaysia",
  Maldives = "Maldives",
  Mali = "Mali",
  Malta = "Malta",
  MarshallIslands = "MarshallIslands",
  Martinique = "Martinique",
  Mauritania = "Mauritania",
  Mauritius = "Mauritius",
  Mayotte = "Mayotte",
  Mexico = "Mexico",
  Micronesia = "Micronesia",
  Moldova = "Moldova",
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
  NewCaledonia = "NewCaledonia",
  NewZealand = "NewZealand",
  Nicaragua = "Nicaragua",
  Niger = "Niger",
  Nigeria = "Nigeria",
  Niue = "Niue",
  NorfolkIsland = "NorfolkIsland",
  Korea = "Korea",
  NorthernMarianaIslands = "NorthernMarianaIslands",
  Norway = "Norway",
  Oman = "Oman",
  Pakistan = "Pakistan",
  Palau = "Palau",
  PalestineStateOf = "PalestineStateOf",
  Panama = "Panama",
  PapuaNewGuinea = "PapuaNewGuinea",
  Paraguay = "Paraguay",
  Peru = "Peru",
  Philippines = "Philippines",
  Pitcairn = "Pitcairn",
  Poland = "Poland",
  Portugal = "Portugal",
  PuertoRico = "PuertoRico",
  Qatar = "Qatar",
  RepublicOfKosovo = "RepublicOfKosovo",
  Reunion = "Reunion",
  Romania = "Romania",
  RussianFederation = "RussianFederation",
  Rwanda = "Rwanda",
  SaintBarthelemy = "SaintBarthelemy",
  SaintHelenaAscensionAndTristanDaCunha = "SaintHelenaAscensionAndTristanDaCunha",
  SaintKittsAndNevis = "SaintKittsAndNevis",
  SaintLucia = "SaintLucia",
  SaintMartin = "SaintMartin",
  SaintPierreAndMiquelon = "SaintPierreAndMiquelon",
  SaintVincentAndTheGrenadines = "SaintVincentAndTheGrenadines",
  Samoa = "Samoa",
  SanMarino = "SanMarino",
  SaoTomeAndPrincipe = "SaoTomeAndPrincipe",
  SaudiArabia = "SaudiArabia",
  Senegal = "Senegal",
  Serbia = "Serbia",
  Seychelles = "Seychelles",
  SierraLeone = "SierraLeone",
  Singapore = "Singapore",
  SintMaarten = "SintMaarten",
  Slovakia = "Slovakia",
  Slovenia = "Slovenia",
  SolomonIslands = "SolomonIslands",
  Somalia = "Somalia",
  SouthAfrica = "SouthAfrica",
  SouthGeorgiaAndTheSouthSandwichIslands = "SouthGeorgiaAndTheSouthSandwichIslands",
  KoreaRep = "KoreaRep",
  SouthSudan = "SouthSudan",
  Spain = "Spain",
  SriLanka = "SriLanka",
  Sudan = "Sudan",
  Suriname = "Suriname",
  SvalbardAndJanMayen = "SvalbardAndJanMayen",
  Swaziland = "Swaziland",
  Sweden = "Sweden",
  Switzerland = "Switzerland",
  SyrianArabRepublic = "SyrianArabRepublic",
  Taiwan = "Taiwan",
  Tajikistan = "Tajikistan",
  TanzaniaUnitedRepublicOf = "TanzaniaUnitedRepublicOf",
  Thailand = "Thailand",
  TimorLeste = "TimorLeste",
  Togo = "Togo",
  Tokelau = "Tokelau",
  Tonga = "Tonga",
  TrinidadAndTobago = "TrinidadAndTobago",
  Tunisia = "Tunisia",
  Turkey = "Turkey",
  Turkmenistan = "Turkmenistan",
  TurksAndCaicosIslands = "TurksAndCaicosIslands",
  Tuvalu = "Tuvalu",
  Uganda = "Uganda",
  Ukraine = "Ukraine",
  UnitedArabEmirates = "UnitedArabEmirates",
  UnitedKingdomOfGreatBritainAndNorthernIreland = "UnitedKingdomOfGreatBritainAndNorthernIreland",
  UnitedStatesOfAmerica = "UnitedStatesOfAmerica",
  Uruguay = "Uruguay",
  Uzbekistan = "Uzbekistan",
  Vanuatu = "Vanuatu",
  Venezuela = "Venezuela",
  VietNam = "VietNam",
  WallisAndFutuna = "WallisAndFutuna",
  WesternSahara = "WesternSahara",
  Yemen = "Yemen",
  Zambia = "Zambia",
  Zimbabwe = "Zimbabwe"
}

export type Date = any;

// ====================================================
// Documents
// ====================================================

export namespace Slovak {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    slovak: Maybe<Slovak[]>;
  };

  export type Slovak = {
    __typename?: "Country";

    name: Maybe<string>;

    topLevelDomain: Maybe<(Maybe<string>)[]>;

    alpha2Code: Maybe<Alpha2Code>;

    alpha3Code: Maybe<Alpha3Code>;

    capital: Maybe<CapitalName>;

    region: Maybe<Region>;

    subregion: Maybe<string>;

    currencies: Maybe<(Maybe<Currencies>)[]>;
  };

  export type Currencies = {
    __typename?: "Currency";

    code: Maybe<CurrencyCode>;

    name: Maybe<string>;

    symbol: Maybe<string>;
  };
}

export namespace JeVedro {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    jeVedro: Maybe<JeVedro>;
  };

  export type JeVedro = {
    __typename?: "WeatherForecast";

    current_observation: Maybe<CurrentObservation>;

    forecasts: Maybe<(Maybe<Forecasts>)[]>;

    location: Maybe<Location>;
  };

  export type CurrentObservation = {
    __typename?: "CurrentObservation";

    condition: Maybe<Condition>;

    wind: Maybe<Wind>;
  };

  export type Condition = {
    __typename?: "Condition";

    text: Maybe<string>;

    temperature: Maybe<number>;
  };

  export type Wind = {
    __typename?: "Wind";

    chill: Maybe<number>;

    direction: Maybe<number>;

    speed: Maybe<number>;
  };

  export type Forecasts = {
    __typename?: "Forecast";

    day: Maybe<string>;

    text: Maybe<string>;
  };

  export type Location = {
    __typename?: "Location";

    city: Maybe<string>;

    woeid: Maybe<number>;

    region: Maybe<string>;

    country: Maybe<string>;

    lat: Maybe<number>;

    long: Maybe<number>;
  };
}

export namespace JakDrahy {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    jakDrahy: JakDrahy;
  };

  export type JakDrahy = {
    __typename?: "CurrentCurrencyRates";

    base: Maybe<CurrencyCode>;

    rates: Maybe<(Maybe<Rates>)[]>;

    date: Maybe<Date>;
  };

  export type Rates = {
    __typename?: "CurrencyRates";

    currency: Maybe<CurrencyCode>;

    ratio: Maybe<number>;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class SlovakGQL extends Apollo.Query<Slovak.Query, Slovak.Variables> {
  document: any = gql`
    query Slovak {
      slovak: getCountryByFullName(name: "Slova") {
        name
        topLevelDomain
        alpha2Code
        alpha3Code
        capital
        region
        subregion
        currencies {
          code
          name
          symbol
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class JeVedroGQL extends Apollo.Query<JeVedro.Query, JeVedro.Variables> {
  document: any = gql`
    query JeVedro {
      jeVedro: getWeatherForecastByCountry(country: SK, city: Bratislava) {
        current_observation {
          condition {
            text
            temperature
          }
          wind {
            chill
            direction
            speed
          }
        }
        forecasts {
          day
          text
        }
        location {
          city
          woeid
          region
          country
          lat
          long
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class JakDrahyGQL extends Apollo.Query<
  JakDrahy.Query,
  JakDrahy.Variables
> {
  document: any = gql`
    query JakDrahy {
      jakDrahy: currentCurrencies(
        currentCurrenciesInput: { currencyCode: [USD, CZK] }
      ) {
        base
        rates {
          currency
          ratio
        }
        date
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
