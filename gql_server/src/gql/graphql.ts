import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {};
  CurrentCurrenciesInput: CurrentCurrenciesInput;
  CurrencyCode: CurrencyCode;
  CurrentCurrencyRates: CurrentCurrencyRates;
  CurrencyRates: CurrencyRates;
  Float: Scalars["Float"];
  Date: Scalars["Date"];
  HistoryCurrenciesInput: HistoryCurrenciesInput;
  HistoryCurrencyRates: HistoryCurrencyRates;
  HistoryCurrencyRate: HistoryCurrencyRate;
  HistoryCurrency: HistoryCurrency;
  String: Scalars["String"];
  Country: Country;
  Alpha2Code: Alpha2Code;
  Alpha3Code: Alpha3Code;
  CapitalName: CapitalName;
  Region: Region;
  Currency: Currency;
  Language: Language;
  Translations: Translations;
  RegionalBloc: RegionalBloc;
  Acronym: Acronym;
  Name: Name;
  OtherAcronym: OtherAcronym;
  OtherName: OtherName;
  WeatherForecast: WeatherForecast;
  Location: Location;
  Int: Scalars["Int"];
  CurrentObservation: CurrentObservation;
  Wind: Wind;
  Atmosphere: Atmosphere;
  Astronomy: Astronomy;
  Condition: Condition;
  WeatherCode: WeatherCode;
  Forecast: Forecast;
  Boolean: Scalars["Boolean"];
  RestCountriesModel: RestCountriesModel;
  CountryName: CountryName;
};

export type AstronomyResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Astronomy"]
> = {
  sunrise: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sunset: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type AtmosphereResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Atmosphere"]
> = {
  humidity: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  visibility: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  pressure: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  rising: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type ConditionResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Condition"]
> = {
  text: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  code: Resolver<Maybe<ResolversTypes["WeatherCode"]>, ParentType, ContextType>;
  temperature: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export type CountryResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Country"]
> = {
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  topLevelDomain: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  alpha2Code: Resolver<
    Maybe<ResolversTypes["Alpha2Code"]>,
    ParentType,
    ContextType
  >;
  alpha3Code: Resolver<
    Maybe<ResolversTypes["Alpha3Code"]>,
    ParentType,
    ContextType
  >;
  callingCodes: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  capital: Resolver<
    Maybe<ResolversTypes["CapitalName"]>,
    ParentType,
    ContextType
  >;
  altSpellings: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  region: Resolver<Maybe<ResolversTypes["Region"]>, ParentType, ContextType>;
  subregion: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  population: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  latlng: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Float"]>>>,
    ParentType,
    ContextType
  >;
  demonym: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  area: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  gini: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  timezones: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  borders: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  nativeName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  numericCode: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  currencies: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Currency"]>>>,
    ParentType,
    ContextType
  >;
  languages: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Language"]>>>,
    ParentType,
    ContextType
  >;
  translations: Resolver<
    Maybe<ResolversTypes["Translations"]>,
    ParentType,
    ContextType
  >;
  flag: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  regionalBlocs: Resolver<
    Maybe<Array<Maybe<ResolversTypes["RegionalBloc"]>>>,
    ParentType,
    ContextType
  >;
  cioc: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type CurrencyResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Currency"]
> = {
  code: Resolver<
    Maybe<ResolversTypes["CurrencyCode"]>,
    ParentType,
    ContextType
  >;
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  symbol: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type CurrencyRatesResolvers<
  ContextType = any,
  ParentType = ResolversTypes["CurrencyRates"]
> = {
  currency: Resolver<
    Maybe<ResolversTypes["CurrencyCode"]>,
    ParentType,
    ContextType
  >;
  ratio: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  date: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
};

export type CurrentCurrencyRatesResolvers<
  ContextType = any,
  ParentType = ResolversTypes["CurrentCurrencyRates"]
> = {
  base: Resolver<
    Maybe<ResolversTypes["CurrencyCode"]>,
    ParentType,
    ContextType
  >;
  rates: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CurrencyRates"]>>>,
    ParentType,
    ContextType
  >;
  date: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
};

export type CurrentObservationResolvers<
  ContextType = any,
  ParentType = ResolversTypes["CurrentObservation"]
> = {
  wind: Resolver<Maybe<ResolversTypes["Wind"]>, ParentType, ContextType>;
  atmosphere: Resolver<
    Maybe<ResolversTypes["Atmosphere"]>,
    ParentType,
    ContextType
  >;
  astronomy: Resolver<
    Maybe<ResolversTypes["Astronomy"]>,
    ParentType,
    ContextType
  >;
  condition: Resolver<
    Maybe<ResolversTypes["Condition"]>,
    ParentType,
    ContextType
  >;
  pubDate: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type ForecastResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Forecast"]
> = {
  day: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  date: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  low: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  high: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  text: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  code: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export type HistoryCurrencyResolvers<
  ContextType = any,
  ParentType = ResolversTypes["HistoryCurrency"]
> = {
  currency: Resolver<
    Maybe<ResolversTypes["CurrencyCode"]>,
    ParentType,
    ContextType
  >;
  ratio: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type HistoryCurrencyRateResolvers<
  ContextType = any,
  ParentType = ResolversTypes["HistoryCurrencyRate"]
> = {
  rate: Resolver<
    Maybe<Array<Maybe<ResolversTypes["HistoryCurrency"]>>>,
    ParentType,
    ContextType
  >;
  date: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
};

export type HistoryCurrencyRatesResolvers<
  ContextType = any,
  ParentType = ResolversTypes["HistoryCurrencyRates"]
> = {
  base: Resolver<
    Maybe<ResolversTypes["CurrencyCode"]>,
    ParentType,
    ContextType
  >;
  rates: Resolver<
    Maybe<Array<Maybe<ResolversTypes["HistoryCurrencyRate"]>>>,
    ParentType,
    ContextType
  >;
  startAt: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  endAt: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
};

export type LanguageResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Language"]
> = {
  iso6391: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  iso6392: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nativeName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type LocationResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Location"]
> = {
  woeid: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  region: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  country: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  long: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  timezone_id: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Query"]
> = {
  currentCurrencies: Resolver<
    ResolversTypes["CurrentCurrencyRates"],
    ParentType,
    ContextType,
    QueryCurrentCurrenciesArgs
  >;
  historyCurrencies: Resolver<
    ResolversTypes["HistoryCurrencyRates"],
    ParentType,
    ContextType,
    QueryHistoryCurrenciesArgs
  >;
  getCountryByFullName: Resolver<
    Maybe<Array<ResolversTypes["Country"]>>,
    ParentType,
    ContextType,
    QueryGetCountryByFullNameArgs
  >;
  getWeatherForecastByCountry: Resolver<
    Maybe<ResolversTypes["WeatherForecast"]>,
    ParentType,
    ContextType,
    QueryGetWeatherForecastByCountryArgs
  >;
};

export type RegionalBlocResolvers<
  ContextType = any,
  ParentType = ResolversTypes["RegionalBloc"]
> = {
  acronym: Resolver<Maybe<ResolversTypes["Acronym"]>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes["Name"]>, ParentType, ContextType>;
  otherAcronyms: Resolver<
    Maybe<Array<Maybe<ResolversTypes["OtherAcronym"]>>>,
    ParentType,
    ContextType
  >;
  otherNames: Resolver<
    Maybe<Array<Maybe<ResolversTypes["OtherName"]>>>,
    ParentType,
    ContextType
  >;
};

export type RestCountriesModelResolvers<
  ContextType = any,
  ParentType = ResolversTypes["RestCountriesModel"]
> = {
  countries: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Country"]>>>,
    ParentType,
    ContextType
  >;
};

export type TranslationsResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Translations"]
> = {
  de: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  es: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  fr: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  ja: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  it: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  br: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pt: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nl: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  hr: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  fa: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type WeatherForecastResolvers<
  ContextType = any,
  ParentType = ResolversTypes["WeatherForecast"]
> = {
  location: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  current_observation: Resolver<
    Maybe<ResolversTypes["CurrentObservation"]>,
    ParentType,
    ContextType
  >;
  forecasts: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Forecast"]>>>,
    ParentType,
    ContextType
  >;
};

export type WindResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Wind"]
> = {
  chill: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  direction: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  speed: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Astronomy: AstronomyResolvers<ContextType>;
  Atmosphere: AtmosphereResolvers<ContextType>;
  Condition: ConditionResolvers<ContextType>;
  Country: CountryResolvers<ContextType>;
  Currency: CurrencyResolvers<ContextType>;
  CurrencyRates: CurrencyRatesResolvers<ContextType>;
  CurrentCurrencyRates: CurrentCurrencyRatesResolvers<ContextType>;
  CurrentObservation: CurrentObservationResolvers<ContextType>;
  Date: GraphQLScalarType;
  Forecast: ForecastResolvers<ContextType>;
  HistoryCurrency: HistoryCurrencyResolvers<ContextType>;
  HistoryCurrencyRate: HistoryCurrencyRateResolvers<ContextType>;
  HistoryCurrencyRates: HistoryCurrencyRatesResolvers<ContextType>;
  Language: LanguageResolvers<ContextType>;
  Location: LocationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  RegionalBloc: RegionalBlocResolvers<ContextType>;
  RestCountriesModel: RestCountriesModelResolvers<ContextType>;
  Translations: TranslationsResolvers<ContextType>;
  WeatherForecast: WeatherForecastResolvers<ContextType>;
  Wind: WindResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
import { CountryName } from "../../types/rest-countries.model";
import { Capital as CapitalName } from "../../types/rest-countries.model";
import { WeatherCode } from "../../types/weather-forecast.model";
export type Maybe<T> = T | null | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

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

export type Astronomy = {
  sunrise: Maybe<Scalars["String"]>;
  sunset: Maybe<Scalars["String"]>;
};

export type Atmosphere = {
  humidity: Maybe<Scalars["Float"]>;
  visibility: Maybe<Scalars["Float"]>;
  pressure: Maybe<Scalars["Float"]>;
  rising: Maybe<Scalars["Float"]>;
};

export type Condition = {
  text: Maybe<Scalars["String"]>;
  code: Maybe<WeatherCode>;
  temperature: Maybe<Scalars["Int"]>;
};

export type Country = {
  name: Maybe<Scalars["String"]>;
  topLevelDomain: Maybe<Array<Maybe<Scalars["String"]>>>;
  alpha2Code: Maybe<Alpha2Code>;
  alpha3Code: Maybe<Alpha3Code>;
  callingCodes: Maybe<Array<Maybe<Scalars["String"]>>>;
  capital: Maybe<CapitalName>;
  altSpellings: Maybe<Array<Maybe<Scalars["String"]>>>;
  region: Maybe<Region>;
  subregion: Maybe<Scalars["String"]>;
  population: Maybe<Scalars["Float"]>;
  latlng: Maybe<Array<Maybe<Scalars["Float"]>>>;
  demonym: Maybe<Scalars["String"]>;
  area: Maybe<Scalars["Float"]>;
  gini: Maybe<Scalars["Float"]>;
  timezones: Maybe<Array<Maybe<Scalars["String"]>>>;
  borders: Maybe<Array<Maybe<Scalars["String"]>>>;
  nativeName: Maybe<Scalars["String"]>;
  numericCode: Maybe<Scalars["String"]>;
  currencies: Maybe<Array<Maybe<Currency>>>;
  languages: Maybe<Array<Maybe<Language>>>;
  translations: Maybe<Translations>;
  flag: Maybe<Scalars["String"]>;
  regionalBlocs: Maybe<Array<Maybe<RegionalBloc>>>;
  cioc: Maybe<Scalars["String"]>;
};

export type Currency = {
  code: Maybe<CurrencyCode>;
  name: Maybe<Scalars["String"]>;
  symbol: Maybe<Scalars["String"]>;
};

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

export type CurrencyRates = {
  currency: Maybe<CurrencyCode>;
  ratio: Maybe<Scalars["Float"]>;
  date: Maybe<Scalars["Date"]>;
};

export type CurrentCurrenciesInput = {
  base: Maybe<CurrencyCode>;
  currencyCode: Maybe<Array<Maybe<CurrencyCode>>>;
};

export type CurrentCurrencyRates = {
  base: Maybe<CurrencyCode>;
  rates: Maybe<Array<Maybe<CurrencyRates>>>;
  date: Maybe<Scalars["Date"]>;
};

export type CurrentObservation = {
  wind: Maybe<Wind>;
  atmosphere: Maybe<Atmosphere>;
  astronomy: Maybe<Astronomy>;
  condition: Maybe<Condition>;
  pubDate: Maybe<Scalars["Int"]>;
};

export type Forecast = {
  day: Maybe<Scalars["String"]>;
  date: Maybe<Scalars["Date"]>;
  low: Maybe<Scalars["Int"]>;
  high: Maybe<Scalars["Int"]>;
  text: Maybe<Scalars["String"]>;
  code: Maybe<Scalars["Int"]>;
};

export type HistoryCurrenciesInput = {
  base: Maybe<CurrencyCode>;
  currencyCode: Maybe<Array<Maybe<CurrencyCode>>>;
  startAt: Maybe<Scalars["Date"]>;
  endAt: Maybe<Scalars["Date"]>;
};

export type HistoryCurrency = {
  /** Not Depracated */
  currency: Maybe<CurrencyCode>;
  /** @deprecated Not Depracated */
  ratio: Maybe<Scalars["Float"]>;
};

export type HistoryCurrencyRate = {
  rate: Maybe<Array<Maybe<HistoryCurrency>>>;
  date: Maybe<Scalars["Date"]>;
};

export type HistoryCurrencyRates = {
  base: Maybe<CurrencyCode>;
  rates: Maybe<Array<Maybe<HistoryCurrencyRate>>>;
  startAt: Maybe<Scalars["Date"]>;
  endAt: Maybe<Scalars["Date"]>;
};

export type Language = {
  iso6391: Maybe<Scalars["String"]>;
  iso6392: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  nativeName: Maybe<Scalars["String"]>;
};

export type Location = {
  woeid: Maybe<Scalars["Int"]>;
  city: Maybe<Scalars["String"]>;
  region: Maybe<Scalars["String"]>;
  country: Maybe<Scalars["String"]>;
  lat: Maybe<Scalars["Float"]>;
  long: Maybe<Scalars["Float"]>;
  timezone_id: Maybe<Scalars["String"]>;
};

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

export type Query = {
  currentCurrencies: CurrentCurrencyRates;
  historyCurrencies: HistoryCurrencyRates;
  getCountryByFullName: Maybe<Array<Country>>;
  getWeatherForecastByCountry: Maybe<WeatherForecast>;
};

export type QueryCurrentCurrenciesArgs = {
  currentCurrenciesInput: CurrentCurrenciesInput;
};

export type QueryHistoryCurrenciesArgs = {
  historyCurrenciesInput: HistoryCurrenciesInput;
};

export type QueryGetCountryByFullNameArgs = {
  name: Scalars["String"];
};

export type QueryGetWeatherForecastByCountryArgs = {
  country: Alpha2Code;
  city: Maybe<CapitalName>;
};

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Empty = "Empty",
  Europe = "Europe",
  Oceania = "Oceania",
  Polar = "Polar"
}

export type RegionalBloc = {
  acronym: Maybe<Acronym>;
  name: Maybe<Name>;
  otherAcronyms: Maybe<Array<Maybe<OtherAcronym>>>;
  otherNames: Maybe<Array<Maybe<OtherName>>>;
};

export type RestCountriesModel = {
  countries: Maybe<Array<Maybe<Country>>>;
};

export type Translations = {
  de: Maybe<Scalars["String"]>;
  es: Maybe<Scalars["String"]>;
  fr: Maybe<Scalars["String"]>;
  ja: Maybe<Scalars["String"]>;
  it: Maybe<Scalars["String"]>;
  br: Maybe<Scalars["String"]>;
  pt: Maybe<Scalars["String"]>;
  nl: Maybe<Scalars["String"]>;
  hr: Maybe<Scalars["String"]>;
  fa: Maybe<Scalars["String"]>;
};

export type WeatherForecast = {
  location: Maybe<Location>;
  current_observation: Maybe<CurrentObservation>;
  forecasts: Maybe<Array<Maybe<Forecast>>>;
};

export type Wind = {
  chill: Maybe<Scalars["Int"]>;
  direction: Maybe<Scalars["Int"]>;
  speed: Maybe<Scalars["Float"]>;
};
