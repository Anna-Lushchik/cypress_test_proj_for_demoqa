import LeftMenuNavigationBar from './components/LeftMenuNavigationBar';
import ElementPracticePage from './ElementPracticePage';

class HomePage {
    leftMenu = new LeftMenuNavigationBar()
    get elementsIcon() { return cy.get('h5:contains("Elements")') }
    get interactionsIcon() { return cy.get('h5:contains("Interactions")') }

    open() {
        cy.visit('/');
    }

    openElementsPage() {
        this.elementsIcon.click();
        return new ElementPracticePage;
    }

    openInteractionsPage() {
        this.interactionsIcon.click();
        return new ElementPracticePage;
    }
}

export default HomePage;