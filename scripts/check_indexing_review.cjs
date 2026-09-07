const review = require('../src/content/indexing-review.json');

function checkIndexingReview(pages, decisions = review) {
  const failures = [];
  const seen = new Set();
  for (const decision of decisions) {
    if (seen.has(decision.route)) failures.push(`${decision.route}: duplicate indexing decision`);
    seen.add(decision.route);
    const page = pages.find(page => page.route === decision.route);
    if (!page || page.file !== decision.file) {
      failures.push(`${decision.route}: reviewed route missing or file changed`);
      continue;
    }
    if (typeof decision.indexable !== 'boolean' || page.noindex === decision.indexable) {
      failures.push(`${decision.route}: robots directive conflicts with reviewed indexing decision`);
    }
    if (!decision.reason || !decision.category) failures.push(`${decision.route}: missing review rationale`);
    if (decision.relatedPage && !pages.some(page => page.route === decision.relatedPage)) {
      failures.push(`${decision.route}: related review destination does not exist`);
    }
  }
  return failures;
}
module.exports = { checkIndexingReview };
