import SelectablePage from "../pageObjects/Selectable.Page";

describe("MD1 scenarios", () => {
    context("Grid", () => {
        beforeEach(() => {
            SelectablePage.visit();
        });

        it("Click and Valid", () => {
            SelectablePage.gridBtn.click();
            SelectablePage.clickTwo.click();
            SelectablePage.clickFour.click();
            SelectablePage.clickSix.click();
            SelectablePage.clickEight.click();
            SelectablePage.getHighlighted.should("contain", "Two")
            .and("contain", "Four")
            .and("contain", "Six")
            .and("contain", "Eight")
            .and("not.contain", "One")
            .and("not.contain", "Three")
            .and("not.contain", "Five")
            .and("not.contain", "Seven")
            .and("not.contain", "Nine");
        });
    });
});