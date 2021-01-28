'use strict';

class Model {
    constructor(visitingAmount = '', visitingCurrency = 'EUR', homeCurrency = 'GBP') {
        this._visitingCurrency = visitingCurrency
        this._visitingAmount = visitingAmount;
        this._homeCurrency = homeCurrency;
        this._currencyRates = {
            'EUR':1,
            'GBP':0.88603,
            'PLN':4.5471
        };
    }

    set visitingCurrency(visitingCurrency) { this._visitingCurrency = visitingCurrency; }

    get visitingAmount() { return this._visitingAmount; }
    set visitingAmount(visitingAmount) { this._visitingAmount = visitingAmount; }

    set homeCurrency(homeCurrency) { this._homeCurrency = homeCurrency; }

    get homeAmount() {
        return this._visitingAmount / this._currencyRates[this._visitingCurrency] * this._currencyRates[this._homeCurrency];
    }
}
