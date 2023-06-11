class SelectablePage {
    static get url(){
        return "https://demoqa.com/selectable";
    }
    
    static visit(){
        cy.visit(this.url);
    }

    static get gridBtn(){
        return cy.get("#demo-tab-grid");
    }

    static get clickTwo(){
        return cy.contains('li.list-group-item', 'Two');
    }

    static get clickFour(){
        return cy.contains('li.list-group-item', 'Four');
    }

    static get clickSix(){
        return cy.contains('li.list-group-item', 'Six');
    }

    static get clickEight(){
        return cy.contains('li.list-group-item', 'Eight');
    }

    static get getHighlighted(){
        return cy.get('li.list-group-item.active');
    }
}

export default SelectablePage;
