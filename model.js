'use strict';

class Model {
    constructor() {
        this._visitingAmount = '';
        this._visitingCurrency = localStorage.visitingCurrency || 'EUR';
        this._homeCurrency = localStorage.homeCurrency || 'GBP';
        if (localStorage.rates == null) {
            this._currencyRates = JSON.parse('{"time":"2021-01-28","rates":{"USD":"1.2136","JPY":"127.05","BGN":"1.9558","CZK":"26.020","DKK":"7.4370","GBP":"0.88383","HUF":"358.39","PLN":"4.5304","RON":"4.8750","SEK":"10.1110","CHF":"1.0798","ISK":"156.10","NOK":"10.3430","HRK":"7.5658","RUB":"91.8979","TRY":"8.8772","AUD":"1.5819","BRL":"6.6568","CAD":"1.5520","CNY":"7.8047","HKD":"9.4093","IDR":"16994.16","ILS":"3.9814","INR":"88.4320","KRW":"1354.98","MXN":"24.5417","MYR":"4.9060","NZD":"1.6863","PHP":"58.333","SGD":"1.6121","THB":"36.287","ZAR":"18.3058","EUR":1}}');
        } else {
            this._currencyRates = JSON.parse(localStorage.rates);
        }
        this.updateCurrencyRates();
    }

    get visitingCurrency() { return this._visitingCurrency; }
    set visitingCurrency(visitingCurrency) { 
        this._visitingCurrency = visitingCurrency; 
        localStorage.visitingCurrency = visitingCurrency; 
    }

    get visitingAmount() { return this._visitingAmount; }
    set visitingAmount(visitingAmount) { this._visitingAmount = visitingAmount; }

    get homeCurrency() { return this._homeCurrency; }
    set homeCurrency(homeCurrency) { 
        this._homeCurrency = homeCurrency; 
        localStorage.homeCurrency = homeCurrency;
    }

    get homeAmount() {
        if(this._visitingAmount == '') {
            return '';
        }
        return this._visitingAmount / (this._currencyRates['rates'][this._visitingCurrency]) * (this._currencyRates['rates'][this._homeCurrency]);
    }

    get currencyList() { return Object.keys(this._currencyRates['rates']); }

    get infoDate() { return this._currencyRates['time']; }

    updateCurrencyRates() {
        if (new Date().toISOString().slice(0, 10) == this._currencyRates['time']) {
            console.log('Already updated rates today, using local storage instead.')
            return;
        }

        fetch('https://devweb2020.cis.strath.ac.uk/~aes02112/ecbxml.php')
        .then(response => response.text())
        .then(data => new DOMParser().parseFromString(data,'text/xml'))
        .then(xml => Array.from(xml.getElementsByTagName('Cube')).forEach(elem => {
            let time = elem.getAttribute('time'), 
                curr = elem.getAttribute('currency'), 
                rate = elem.getAttribute('rate');
            if (time) {
                this._currencyRates['time'] = time;
            }
            if (curr && rate) {
                this._currencyRates['rates'][curr] = rate;
            }}))
        .then(_ => this._currencyRates['rates']['EUR'] = 1)
        .then(_ => localStorage.rates = JSON.stringify(this._currencyRates))
        .catch(error => console.log('Error:' + error));
    };
}
