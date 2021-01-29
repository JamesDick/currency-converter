'use strict';

const model = new Model();
const view = new View();

view.visitingCurrency = model.visitingCurrency;
view.visitingAmount = model.visitingAmount;
view.homeCurrency = model.homeCurrency;
view.homeAmount = model.homeAmount;

view.setupNumHandlers((i) => {
    model.visitingAmount += i;
    view.visitingAmount = model.visitingAmount;
});

view.setupEqualsHandler(() => {
    view.homeAmount = Math.round(model.homeAmount);
});

view.setupClearHandler(() => {
    model.visitingAmount = '';
    view.clear();
});

view.setupVisitingCurrencyHandler(() => {
    model.visitingCurrency = view.visitingCurrency;
});

view.setupHomeCurrencyHandler(() => {
    model.homeCurrency = view.homeCurrency;
});
