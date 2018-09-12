var cancel

let CancelCancelWarrant = (PageObject) => {
    PageObject
        .setValue('@ID', '1234567891')
        .setValue('@Reason', 'Cause')
        .setValue('@DateCancel', '09/07/2018')
        .click('@Clear')
        .expect.element('@ID').text.to.be.equal('')
}
let cancelWarrant = (PageObject) => {
    PageObject
        .setValue('@ID', '1234567891')
        .setValue('@Reason', 'Cause')
        .setValue('@DateCancel', '09/07/2018')
        .click('@Submit')
        .expect.element('@QueryBody').text.to.be.equal('').before(500)
}

module.exports = {
    beforeEach: browser => {
        cancel = browser.page.cancelPage()
        cancel.navigate()
    },
    'Cancel Existing Warrant': browser => {
        browser
            cancelWarrant(cancel)
            //An existing warrant should be deleted because all the information meets the requirements
    },
    'Cancel Cancel Existing Warrant': browser => {
        browser
            CancelCancelWarrant(cancel)
            //No warrant should be canceled because instead of clicking submit you click cancel
    },
    after: (browser) => {
        browser.end()
    }
}