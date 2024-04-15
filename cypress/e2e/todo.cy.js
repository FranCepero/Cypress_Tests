describe('template spec', () => {
    it('Crear tarea', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
        cy.get('[data-testid="todo-item-label"]').contains("Tarea 1")

    })

    it('Marcar tarea como completada', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('.completed > .view > [data-testid="todo-item-toggle"]').first().check()

    })  
    
    it('Desmarcar tarea completada', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Tarea 3 {enter}")
        cy.get('[data-testid="todo-item-toggle"]').first().check()
        cy.get('[data-testid="todo-item-toggle"]').first().uncheck()

    })
    
    it('Editar tarea', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Tarea 4 {enter}")
        cy.get('[data-testid="todo-item-label"]').dblclick()
        cy.focused().clear().type("Tarea Nueva {enter}")
        cy.get('[data-testid="todo-item-label"]').contains("Tarea Nueva")

    })
    
    it('Borrar tarea', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type("Tarea 5 {enter}")
        cy.get("button.destroy").click({force:true})


    })

    it('Filtrar tareas', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 3 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 4 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 5 {enter}")
            cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
            cy.get(':nth-child(4) > .view > [data-testid="todo-item-toggle"]').click()
            cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
            cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should("be.visible")
            cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should("be.visible")
            cy.get(':nth-child(2) > a').click()
            cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should("be.visible")
            cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should("be.visible")
            cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').should("be.visible")
            cy.get(':nth-child(1) > a').click()


            
    
        }) 

     
    })
