export default function (eventAction, eventCategory, eventLabel) {
  console.log(eventAction, eventCategory, window && window.dataLayer);
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventAction,
      action: eventAction,
      category: eventCategory,
      label: eventLabel,
    });
  }
}
