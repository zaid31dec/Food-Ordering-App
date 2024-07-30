export const CurrencyFormatter = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'INR',
    minimumFractionDigits: 2,
    currencyDisplay:"symbol",
    
});