export default function({ app, $gtm, store }) {
  $gtm.init('GTM-XXXXXXX');
  if (process.client) {
    $gtm.push({
      event: 'pageview'
    });
  }
}
