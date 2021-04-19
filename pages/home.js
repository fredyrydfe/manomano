const { I } = inject();

module.exports = {
  cookieModal: "CybotCookiebotDialog",
  allowAndCloseButton: "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
  searchField: "#searchbar",
  searchButton: "#submit-form",
  clearOption: "#searchbar-basic-clear",
  suggestionBlockResult: "#query-suggestions-block",

  acceptCookies() {
    if (I.grabNumberOfVisibleElements(this.allowAndCloseButton) == 0) {
      // element not found, use an action or logging
    } else {
      I.click(this.allowAndCloseButton);
    }
  },

  pageShouldContainsTitle(value) {
    I.seeInTitle(value);
  },

  urlShouldbeTheHomePage(value) {
    I.seeCurrentUrlEquals(value);
  },

  searchFieldShouldBePresent() {
    I.click(this.searchField);
    I.seeElement(this.searchField);
  },

  searchButtonShouldBePresent() {
    I.seeElement(this.searchButton);
  },

  clearSearhField() {
    I.click(this.searchField);
    I.clearField(this.searchField);
  },

  clickOnSearchButton() {
    I.click(this.searchButton);
    I.wait(3);
  },

  enterSearchValue(value) {
    I.fillField(this.searchField, value);
  },

  clickOnclearOption() {
    I.click(this.clearOption);
  },

  searchFieldShouldBeEmpty() {
    I.seeAttributesOnElements(this.searchField, { value: "" });
  },

  suggestionPanelIsPresent() {
    I.seeElement(this.suggestionBlockResult);
  },

  suggestionPanelContains(value) {
    I.wait(3);
    I.see(value, this.suggestionBlockResult);
  },
};
