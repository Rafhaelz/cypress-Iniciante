describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
  cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
   
   
   cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia formulário', () => {
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Fonseca')
    cy.get('#email').type('lucasteste@gmail.com')
    cy.get('#phone').type('99999999')
    cy.get('select').select('blog')
    cy.get('#product').should('have.value', 'blog')
    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
    /*cy.get('input[type="radio"][value="feedback"]').check();
    cy.get('input[type="radio"][value="feedback"]').should('be.checked');*/
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Fonseca')
    cy.get('#email').type('lucastestecom')
    cy.get('#phone').type('99999999')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>  {
    cy.get('#phone').type('abcXYZ!@#').should('have.value', '')
    }
  )

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('Lucas').should('have.value', 'Lucas').clear().should('have.value', '')
    cy.get('#lastName').type('Fonseca').should('have.value', 'Fonseca').clear().should('have.value', '')
    cy.get('#email').type('lucasteste@gmailcom').should('have.value', 'lucasteste@gmailcom').clear().should('have.value', '')
    cy.get('#phone').type('99999999').should('have.value', '99999999').clear().should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche os campos obrigatórios e envia formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Fonseca')
    cy.get('#email').type('lucasteste@gmail.com')
    cy.get('#phone').type('99999999')
    cy.get('#open-text-area').type(longText, { delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

   it('marca ambos checkboxes, depois desmarca o último', () => {


    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Fonseca')
    cy.get('#email').type('lucasteste@gmail.com')
    cy.get('#phone').type('99999999')
    cy.get('input[type="checkbox"][value="email"]').check()
    cy.get('input[type="checkbox"][value="email"]').should('be.checked')
    cy.get('input[type="checkbox"][value="phone"]').check()
    cy.get('input[type="checkbox"]').last().should('be.checked');
    cy.get('input[type="checkbox"]').last().uncheck();
    cy.get('input[type="checkbox"]').last().should('not.be.checked');
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

    it('Input de um arquivo', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('Seleciona um arquivo simulando drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
      .should(input => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(input => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })



  it('marca ambos checkboxes, depois desmarca o último', () => {


    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Fonseca')
    cy.get('#email').type('lucasteste@gmail.com')
    cy.get('input[type="checkbox"][value="phone"]').check()
    cy.get('input[type="checkbox"]').last().should('be.checked');
    cy.get('input[type="checkbox"]').last().uncheck();
    cy.get('input[type="checkbox"]').should('not.be.checked');
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')

  })



})
