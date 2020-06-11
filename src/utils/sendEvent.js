export default function (eventAction, eventCategory, eventLabel) {
  if (typeof window !== `undefined` && window.gtag) {
    console.log(eventAction + ' ' + eventCategory + ' ' + eventLabel);
    window.gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
    });
  }
}
