/**
 * START: Follow the instructions below.
 */

// Add a type annotation to this variable that describes the object it contains.

const countryPopulation: {code: string, population: number} = {
    code: "NZ",
    population: 5_135_300,
};

// Define a `Country` interface that describes the object in this variable.
// Add the `Country` type as a type annotation for this variable.

interface CountryData{
    name: "India",
    code: "IN",
    population: 1_352_642_280,
}

const CountryData: CountryData = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

// Define a `Currency` type alias that describes the object in this variable.
// Add the `Currency` type as a type annotation for this variable.

type CurrencyData = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
}

const currencyData: CurrencyData = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

// ----

export {};
