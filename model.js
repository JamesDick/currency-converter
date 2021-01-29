'use strict';

class Model {
    constructor(visitingAmount = '', visitingCurrency = 'EUR', homeCurrency = 'GBP') {
        this._visitingCurrency = visitingCurrency;
        this._visitingAmount = visitingAmount;
        this._homeCurrency = homeCurrency;
        this._currencyRates = {
            'EUR':1,
            'GBP':0.88603,
            'PLN':4.5471
        };
    }

    get visitingCurrency() { return this._visitingCurrency; }
    set visitingCurrency(visitingCurrency) { this._visitingCurrency = visitingCurrency; }

    get visitingAmount() { return this._visitingAmount; }
    set visitingAmount(visitingAmount) { this._visitingAmount = visitingAmount; }

    get homeCurrency() { return this._homeCurrency; }
    set homeCurrency(homeCurrency) { this._homeCurrency = homeCurrency; }

    get homeAmount() {
        if(this._visitingAmount == '') {
            return '';
        }
        return this._visitingAmount / this._currencyRates[this._visitingCurrency] * this._currencyRates[this._homeCurrency];
    }
}
