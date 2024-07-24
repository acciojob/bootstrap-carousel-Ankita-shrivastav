//your code here
it('Check if third-slide has active class',()=>{
	cy.get('.third-slide',{timeout:
		10000}).should('have.class','active');
});