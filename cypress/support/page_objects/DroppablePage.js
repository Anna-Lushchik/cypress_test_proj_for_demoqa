import ElementPracticePage from './ElementPracticePage';
import LeftMenuNavigationBar from './components/LeftMenuNavigationBar';

class DroppablePage extends ElementPracticePage {
    leftMenu = new LeftMenuNavigationBar();

    get dragMeElement() { return cy.get('#draggable') }
    get dropHereElement() { return cy.get('#droppable') }

    dragAndDrop() {
        cy.get('#draggable').drag('#droppable', { source: { x: 100, y: 100 }, target: { position: 'bottomRight' }, force: true});
    }
}

export default DroppablePage;