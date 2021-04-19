const { I } = inject();

const homePage = require("../pages/home");
const common = require("../pages/common");
const resultPage = require("../pages/results");

Given("the non-registered user navigates to the URL: {string}", (url) => {
  common.visit(url);
});

When("the non-registered user accepts the use of cookies", () => {
  homePage.acceptCookies();
});

When("the non-registered user is viewing the Home page", () => {
  homePage.pageShouldContainsTitle(
    "ManoMano: Online DIY, home improvement and gardening products"
  );
});

Then("the non-registered user confirms the Search field is present", () => {
  homePage.searchFieldShouldBePresent();
});

Then("the non-registered user confirms the Search button is present", () => {
  homePage.searchButtonShouldBePresent();
});

Given("the non-registered user allows the use of cookies", () => {
  homePage.acceptCookies();
});

Given("the non-registered user is viewing the Home page", () => {
  homePage.pageShouldContainsTitle(
    "ManoMano: Online DIY, home improvement and gardening products"
  );
});

When(
  "the non-registered user does not enter any text in the Search field",
  () => {
    homePage.clearSearhField();
  }
);

When("the non-registered user clicks on the Search button", () => {
  homePage.clickOnSearchButton();
});

Then(
  "the non-registered user confirms the search functionality is not executed",
  () => {
    homePage.urlShouldbeTheHomePage("https://www.manomano.co.uk/");
  }
);

Given(
  "the non-registered user enters {string} text in the Search field",
  (value) => {
    homePage.enterSearchValue(value);
  }
);

When(
  "the non-registered user clicks on the Cancel option in the Search field",
  () => {
    homePage.clickOnclearOption();
  }
);

Then(
  "the non-registered user confirms the information enter in the Search field is removed",
  () => {
    homePage.searchFieldShouldBeEmpty();
  }
);

When(
  "the non-registered user enters the parameter {string} that not match the existing products in the Search field",
  (value) => {
    homePage.enterSearchValue(value);
  }
);

Then("the non-registered user confirms the Result page is displayed", () => {
  resultPage.urlShouldContains("search");
});

Then(
  "the non-registered user confirms the {string} message is displayed",
  (value) => {
    common.pageContainsText(value);
  }
);

When(
  "the non-registered user enters the parameter {string} in the Search field",
  (value) => {
    homePage.enterSearchValue(value);
  }
);
Then(
  "the non-registered user confirms the {string} text is displayed according to the entered text in the search field",
  (value) => {
    resultPage.productTitleShouldContains(value);
  }
);

Then(
  "the non-registered user confirms the auto suggestion is displayed",
  () => {
    homePage.suggestionPanelIsPresent();
  }
);

Then(
  "the non-registered user confirms the {string} text is displayed in the auto suggestion list is according to the entered text in the search field",
  (value) => {
    homePage.suggestionPanelContains(value);
  }
);
