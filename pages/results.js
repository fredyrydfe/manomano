const { I } = inject();

module.exports = {

  urlShouldContains(value) {
    I.seeInCurrentUrl(value);
  },

  productTitleShouldContains(value) {
    I.see(value)
  },
};
