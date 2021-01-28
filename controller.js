'use strict';

const model = new Model();
const view = new View();

view.init();

view.setupNumHandlers((i) => {
    model.visitingAmount += i;
    view.updateVisitingAmount(model.visitingAmount);
});

view.setupEqualsHandler(() => {
    view.updateHomeAmount(Math.ceil(model.homeAmount));
});

view.setupClearHandler(() => {
    model.visitingAmount = '';
    view.clear();
});

view.setupVisitingCurrencyHandler(() => {
    model.visitingCurrency = view.getVisitingCurrency();
});

view.setupHomeCurrencyHandler(() => {
    model.homeCurrency = view.getHomeCurrency();
});
