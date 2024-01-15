import ElementPracticePage from './ElementPracticePage';
import LeftMenuNavigationBar from './components/LeftMenuNavigationBar';

class CheckBoxPage extends ElementPracticePage {
    leftMenu = new LeftMenuNavigationBar();

    get checkBox() { return cy.get('.rct-checkbox > .rct-icon') }
    get checkedCheckBox() { return cy.get('input[type="checkbox"]') }
}

export default CheckBoxPage;