export interface CurrencyExchangeModel {
    currencyExchange?: CurrencyExchange[];
}

export interface CurrencyExchange {
    base?: string;
    rates?: { [rate in Rate]: number[] };
    date?: Date;
}

export const enum Rate {
    NZD = "NZD",
    BGN = "BGN",
    ILS = "ILS",
    RUB = "RUB",
    CAD = "CAD",
    USD = "USD",
    PHP = "PHP",
    CHF = "CHF",
    ZAR = "ZAR",
    AUD = "AUD",
    JPY = "JPY",
    TRY = "TRY",
    HKD = "HKD",
    MYR = "MYR",
    THB = "THB",
    HRK = "HRK",
    NOK = "NOK",
    IDR = "IDR",
    DKK = "DKK",
    CZK = "CZK",
    HUF = "HUF",
    GBP = "GBP",
    MXN = "MXN",
    KRW = "KRW",
    ISK = "ISK",
    SGD = "SGD",
    BRL = "BRL",
    PLN = "PLN",
    INR = "INR",
    RON = "RON",
    CNY = "CNY",
    SEK = "SEK"
}

