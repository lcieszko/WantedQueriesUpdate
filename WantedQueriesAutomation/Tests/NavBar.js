var Nav = {}
var tabs = ['@Enter', '@Modify', '@Cancel']

let CheckTabs = (PageObject) => {
    PageObject 
        .click('@Menu')
        .click(tabs[1])
        .click('@Menu')
        .click(tabs[0])
        .click('@Menu')
        .click(tabs[2])
        .expect.element('span[name="widHeader"]').text.to.be.equal('Warrant ID').before(500)
    }

module.exports = {
    beforeEach: browser => {
        Nav = browser.page.Menu()
            Nav.navigate()
    },
    'Check All tabs': browser => {
        browser
            CheckTabs(Nav)
            //This should go through all of the different tabs to make sure the the navigation bar is working
    },
    after: (browser) => {
        browser.end()
    }
}