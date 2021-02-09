'use strict';

(function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log('Attempting to register service worker...');
        navigator.serviceWorker
            .register('serviceWorker.js')
            .then(success => console.log('Service worker registered successfully.'), 
                  failure => console.log('Service worker failed to register.'));
    } else {
        console.log('Browser does not support service worker.');
    }
})();

(function init() {
    const model = new Model();
    const view = new View(
        model.currencyList, 
        model.visitingCurrency, 
        model.visitingAmount, 
        model.homeCurrency, 
        model.homeAmount, 
        model.lastUpdated,
        model.bankFee
    );

    view.setupNumHandlers((i) => {
        view.visitingAmount = model.visitingAmount += i;
    });

    view.setupEqualsHandler(() => {
        view.homeAmount = Math.round(model.homeAmount);
    });

    view.setupClearHandler(() => {
        view.visitingAmount = view.homeAmount = model.visitingAmount = '';
    });

    view.setupVisitingCurrencyHandler(() => {
        model.visitingCurrency = view.visitingCurrency;
    });

    view.setupHomeCurrencyHandler(() => {
        model.homeCurrency = view.homeCurrency;
    });

    view.setupBankFeeHandler(() => {
        model.bankFee = view.bankFee;
    });
})();
