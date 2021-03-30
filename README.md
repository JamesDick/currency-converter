## Currency Converter
This is a simple Currency Converter web app, made for an assignment at the University of Strathclyde. 

The purpose of the app is to be used when travelling abroad. The user can quickly and easily specify an amount of money in a given currency, and the app will calculate the amount this would be in the user's home currency (after converting and applying a configurable bank fee).

The currency rates the app uses are based on the [European Central Bank Reference Rates](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml).

## Usage
The app can be used by visiting the site where it's hosted, [here](https://devweb2020.cis.strath.ac.uk/~qsb19184/calculator-asdfghjkl/).

You can configure the app by opening the burger menu on the left to select the your home currency, as well as that of the country you're visiting. We also have some pre-set options for any potential fees you expect your bank would take on the transaction.

Since the app is mainly for travelling and connection may be unreliable, we use a Service Worker in order to cache all the main resources, so the app works offline. 
