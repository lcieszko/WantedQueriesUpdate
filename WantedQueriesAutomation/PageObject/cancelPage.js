module.exports = {
    url: 'http://localhost:3000/#/cancel',
    elements: {
        ID: 'input[name="widInput"]',
        Reason: 'input[name="resInput"]',
        DateCancel: 'input[name="datInput"]',
        Submit: 'button#saveBtn.button',
        Clear: 'button#clearBtn.button',
        ErrorMsg: 'li[class="errorMessage"]',
        QueryBody: 'span[name="queryBody"]',
    }
}