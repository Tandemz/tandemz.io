export default function(eventAction, eventCategory, eventLabel) {
  console.log(eventAction + ' ' + eventCategory + ' ' + eventLabel);
  if (typeof window !== `undefined`) {
    window.gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
    });
  }
}
