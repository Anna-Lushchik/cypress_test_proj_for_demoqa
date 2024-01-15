import HomePage from '../../support/page_objects/HomePage';
import CheckBoxPage from '../../support/page_objects/CheckBoxPage';
import DroppablePage from '../../support/page_objects/DroppablePage';
import ToolTipsPage from '../../support/page_objects/ToolTipsPage';
import '@4tw/cypress-drag-drop'

describe('demoqa', () => {
  beforeEach(() => {
    new HomePage().open();
  })

  it('check-boxes', () => {
    let elementPracticePage = new HomePage().openElementsPage();
    let checkBoxPage = elementPracticePage.leftMenu.clickItem("Check Box", CheckBoxPage);
    checkBoxPage.checkBox.click()

    checkBoxPage.resultText.should('contain', 'You have selected');
    checkBoxPage.checkedCheckBox.should('be.checked');
  });

  it('drag and drop', () => {
    let elementPracticePage = new HomePage().openInteractionsPage();
    let droppablePage = elementPracticePage.leftMenu.clickItem("Droppable", DroppablePage);

    droppablePage.dragAndDrop();
    droppablePage.dropHereElement.should('contain', 'Dropped!');
  });

  it('hover over', () => {
    let elementPracticePage = new HomePage().openElementsPage();
    elementPracticePage.leftMenu.clickLeftMenuElement("Widgets");
    let toolTipsPage = elementPracticePage.leftMenu.clickItem("Tool Tips", ToolTipsPage);

    toolTipsPage.hoverMeButton.trigger('mouseover');
    toolTipsPage.hoverOverText.should('contain', 'You hovered over the Button');

    toolTipsPage.hoverMeTextField.trigger('mouseover');
    toolTipsPage.hoverOverText.should('contain', 'You hovered over the text field');
  });
})