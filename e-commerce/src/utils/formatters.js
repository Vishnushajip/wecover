export function formatINR(amount) {
  if (typeof amount !== 'number') return '₹0';
  return '₹' + amount.toLocaleString('en-IN');
}

export function getEstimatedDeliveryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

