var wanted = {}
var testData = require('../test-assets/testData')
var Header = ['ThisShouldWork', 'Numb3r5W0rk']

let InVaildWarrant = (PageObject) => {
    testData()
    }
let addWarrant = (PageObject) => {
        PageObject
            .setValue('@Header', Header[0])
            .setValue('@MKE', 'ABC')
            .setValue('@ORI', 'OAI123456')
            .setValue('@Name', 'Steven')
            .click('@Sex')
            .click('@Sex2')
            .click('@Race')
            .click('@Race2')
            .setValue('@Height', '607')
            .setValue('@Weight', '135')
            .setValue('@Hair', 'Brown')
            .setValue('@Offense', 'Larson')
            .setValue('@DateOfWarrant', '07/25/2017')
            .setValue('@DriversLicense', '123456789')
            .setValue('@DLState', 'TX')
            .setValue('@DLDate', '07/25/2021')
            .setValue('@LicencePlate', 'Hello')
            .setValue('@LicenseState', 'TX')
            .setValue('@LicenceDate', '09/21/2022')
            .click('@Submit')
            .expect.element('@QueryBody').to.be.present.before(500)
    }
let CanceladdWarrant = (PageObject) => {
        PageObject
            .setValue('@Header', Header[1])
            .setValue('@MKE', 'ABC')
            .setValue('@ORI', 'OAI123456')
            .setValue('@Name', 'Steven')
            .click('@Sex')
            .click('@Sex2')
            .click('@Race')
            .click('@Race2')
            .setValue('@Height', '607')
            .setValue('@Weight', '135')
            .setValue('@Hair', 'Brown')
            .setValue('@Offense', 'Larson')
            .setValue('@DateOfWarrant', '07/25/2017')
            .setValue('@DriversLicense', '123456789')
            .setValue('@DLState', 'TX')
            .setValue('@DLDate', '07/25/2021')
            .setValue('@LicencePlate', 'Hello')
            .setValue('@LicenseState', 'TX')
            .setValue('@LicenceDate', '09/21/2022')
            .click('@Clear')
            .expect.element('@QueryTitle').text.to.be.equal('Submit query for validation.').before(500)
    }

module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedPage()
            wanted.navigate()
            browser.refresh()
    },

    'Input Valid Info': browser => {
        browser
            addWarrant(wanted)
            //A warrant should be created since valid information was inputted
    },
    'Input Invalid Info': browser => {
        browser
            InVaildWarrant(wanted)
            //A warrant shouldn't be created because the information doesn't meet the requirements
    },
    'Cancel add Warrant': browser => {
        browser
            CanceladdWarrant(wanted)
            //No warrant should have been added because instead of clicking submit, it clicks cancel
    },
    after: (browser) => {
        browser.end()
    }
}