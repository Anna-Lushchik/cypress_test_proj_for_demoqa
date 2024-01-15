import ElementPracticePage from './ElementPracticePage';
import LeftMenuNavigationBar from './components/LeftMenuNavigationBar';

class ToolTipsPage extends ElementPracticePage {
    leftMenu = new LeftMenuNavigationBar();

    get hoverMeButton() { return cy.get('#toolTipButton') }
    get hoverMeTextField() { return cy.get('#toolTipTextField') }
    get hoverOverText() { return cy.get('.tooltip-inner') }
}

export default ToolTipsPage;