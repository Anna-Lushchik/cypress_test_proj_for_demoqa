import ElementPracticePage from '../ElementPracticePage';

class LeftMenuNavigationBar {
    clickItem(item, classType) {
        cy.get(`span:contains("${item}")`).click();
        return new classType;
    }

    clickLeftMenuElement(element) {
        cy.xpath(`//div[contains(text(), "${element}")]`).click();
        return new ElementPracticePage;
    }
}

export default LeftMenuNavigationBar;