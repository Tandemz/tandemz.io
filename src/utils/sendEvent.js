export default function(eventAction, eventCategory, event_label) {
  if (typeof window !== `undefined`) {
    window.gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: event_label,
    });
  }
}
