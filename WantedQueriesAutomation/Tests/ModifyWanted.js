var modify
var Header = ['This Changed', 'TooShort', 'Numb3r5W0rk', 'WaaaaaaaaaaaaaayToooooooooooLoooooooonng']

let InvalidModify = (PageObject) => {
    PageObject
        .setValue('@ID', '1234567891')
        .setValue('@Header', Header[3]) //Both Header 1 and 3 should create an error message
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
        .expect.element('@QueryTitle').text.to.be.equal('No results generated due to error.').before(5000)
}

let CancelModifyWarrant = (PageObject) => {
    PageObject
        .setValue('@ID', '1234567891')
        .setValue('@Header', Header[2])
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
        .expect.element('@Header').text.to.be.equal('')
}
let modifyWarrant = (PageObject) => {
    PageObject
        .setValue('@ID', '1234567891')
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

module.exports = {
    beforeEach: browser => {
        modify = browser.page.modifyPage()
        modify.navigate()
        browser.refresh()
    },
    'Edit Existing Warrant': browser => {
        browser
            modifyWarrant(modify)
            //An existing warrant's information should be changed to match the information that was updated
    },
    'Cancel Edit Existing Warrant': browser => {
        browser
            CancelModifyWarrant(modify)
            //There should be no change to the existing warrant, since the cancel button was clicked not the submit button
    },
    'Invalid Edit Existing Warrant': browser => {
        browser
            InvalidModify(modify)
            //No changes should be made since some of the fields are invalid
    },
    // after: (browser) => {
    //     browser.end()
    // }
}
