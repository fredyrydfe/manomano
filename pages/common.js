const { I } = inject();

module.exports = {

  visit(url) {
    I.amOnPage(url);
    I.waitUrlEquals(url);
  },

  pageContainsText(value) {
    I.see(value);
  },

}
