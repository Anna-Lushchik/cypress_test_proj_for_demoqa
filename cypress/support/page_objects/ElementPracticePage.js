import LeftMenuNavigationBar from './components/LeftMenuNavigationBar';

class ElementPracticePage {
    leftMenu = new LeftMenuNavigationBar();

    get resultText() { return cy.get('#result') }
}

export default ElementPracticePage;