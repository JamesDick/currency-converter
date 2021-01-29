'use strict';

class View {
    setupNumHandlers(handler) {
        for(let i = 0; i < 10; i++) {
            document.getElementById(`${i}Btn`).addEventListener('click', () => { handler(`${i}`); });
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

    set visitingAmount(num) { document.getElementById('visitingAmount').value = num; }

    set homeAmount(num) { document.getElementById('homeAmount').value = num; }

    get visitingCurrency() { return document.getElementById('visitingCurrency').value; }
    set visitingCurrency(curr) { document.getElementById('visitingCurrency').value = curr; }

    get homeCurrency() { return document.getElementById('homeCurrency').value; }
    set homeCurrency(curr) { document.getElementById('homeCurrency').value = curr; }

    clear() {
        document.getElementById('visitingAmount').value = '';
        document.getElementById('homeAmount').value = '';
    }
}
