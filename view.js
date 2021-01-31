'use strict';

class View {
    constructor(currencyList, visitingCurrency, visitingAmount, homeCurrency, homeAmount, lastUpdated) {
        this.setupCurrencyOptions(currencyList);
        this.visitingCurrency = visitingCurrency;
        this.visitingAmount = visitingAmount;
        this.homeCurrency = homeCurrency;
        this.homeAmount = homeAmount;
        this.lastUpdated = lastUpdated;
    }

    set visitingAmount(num) { document.getElementById('visitingAmount').value = num; }

    set homeAmount(num) { document.getElementById('homeAmount').value = num; }

    get visitingCurrency() { return document.getElementById('visitingCurrency').value; }
    set visitingCurrency(curr) { document.getElementById('visitingCurrency').value = curr; }
    
    get homeCurrency() { return document.getElementById('homeCurrency').value; }
    set homeCurrency(curr) { document.getElementById('homeCurrency').value = curr; }

    set lastUpdated(date) { document.getElementById('lastUpdated').innerHTML = `Currency Rates last updated on ${date}`; }

    setupNumHandlers(handler) {
        for (let i = 0; i < 10; i++) {
            document.getElementById(`${i}Btn`).addEventListener('click', () => { handler(i); });
        }
    }

    setupEqualsHandler(handler) {
        document.getElementById('=Btn').addEventListener('click', handler);
    }

    setupClearHandler(handler) {
        document.getElementById('CBtn').addEventListener('click', handler);
    }

    setupVisitingCurrencyHandler(handler) {
        document.getElementById('visitingCurrency').addEventListener('change', handler);
    }

    setupHomeCurrencyHandler(handler) {
        document.getElementById('homeCurrency').addEventListener('change', handler);
    }

    setupCurrencyOptions(currencyOptions) {
        for (let curr of currencyOptions) {
            let option = document.createElement('option');
            option.text = option.value = curr;

            document.getElementById('homeCurrency').add(option);
            document.getElementById('visitingCurrency').add(option.cloneNode(true));
        }
    }
}
