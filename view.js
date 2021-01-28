'use strict';

class View {
    init() {
        document.getElementById('visitingAmount').value = '';
        document.getElementById('visitingCurrency').value = 'EUR';
        document.getElementById('homeAmount').value = '';
        document.getElementById('homeCurrency').value = 'GBP';
    }

    setupNumHandlers(handler) {
        for(let i = 0; i < 10; i++) {
            document.getElementById(`${i}Btn`).addEventListener('click', () => { handler(`${i}`); });
        }
    }

    updateVisitingAmount(num) {
        document.getElementById('visitingAmount').value = num;
    }

    setupEqualsHandler(handler) {
        document.getElementById('=Btn').addEventListener('click', handler);
    }

    updateHomeAmount(num) {
        document.getElementById('homeAmount').value = num;
    }

    setupClearHandler(handler) {
        document.getElementById('CBtn').addEventListener('click', handler);
    }

    clear() {
        document.getElementById('visitingAmount').value = '';
        document.getElementById('homeAmount').value = '';
    }

    setupVisitingCurrencyHandler(handler) {
        document.getElementById('visitingCurrency').addEventListener('change', handler);
    }

    getVisitingCurrency() {
        return document.getElementById('visitingCurrency').value;
    }

    setupHomeCurrencyHandler(handler) {
        document.getElementById('homeCurrency').addEventListener('change', handler);
    }

    getHomeCurrency() {
        return document.getElementById('homeCurrency').value;
    }
}
