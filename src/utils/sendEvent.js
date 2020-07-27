export default function (eventAction, eventCategory, eventLabel) {
  if (typeof window !== `undefined` && window.gtag) {
    console.log(eventAction + ' ' + eventCategory + ' ' + eventLabel);
    window.gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
    });
  }
  if (typeof window !== 'undefined' && window.fbq) {
    const firstCapsAction =
      eventAction[0].toUpperCase() + eventAction.slice(1).toLowerCase();

    window.fbq('trackCustom', firstCapsAction, {
      content_category: eventCategory,
      content_name: eventLabel,
    });
  }
}
