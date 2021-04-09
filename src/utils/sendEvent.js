export default function (eventAction, eventCategory, eventLabel) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventAction,
      action: eventAction,
      category: eventCategory,
      label: eventLabel,
    });
  }
}
