

module.exports = (pageObject) => { 
    pageObject
        .setValue('@Header', '12345678')
        .setValue('@MKE', 'AB')
        .setValue('@ORI', 'OAI12345')
        .setValue('@Name', 'Steve')
        .click('@Sex')
        .click('@Sex2')
        .click('@Race')
        .click('@Race2')
        .setValue('@Height', '6078')
        .setValue('@Weight', '135888')
        .setValue('@Hair', 'milk')
        .setValue('@Offense', '')
        .setValue('@DateOfWarrant', '07/25/17')
        .setValue('@DriversLicense', '1234589')
        .setValue('@DLState', 'UK')
        .setValue('@DLDate', '07/25/21')
        .setValue('@LicencePlate', 'Helo')
        .setValue('@LicenseState', 'UK')
        .setValue('@LicenceDate', '09/21/22')
        .click('@Submit')
        .expect.element('@ErrorMsg').to.be.present.before(500)

}