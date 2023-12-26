// Function to format a date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Function to format currency
function formatCurrency(amount, currency) {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(amount);
}

// Function to format names
function formatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}

// Export the functions
export { formatDate, formatCurrency, formatName };
