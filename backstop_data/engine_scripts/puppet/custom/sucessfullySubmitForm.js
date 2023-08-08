const fillAllMandatoryFields = require ("./fillAllMandatoryFields");

module.exports = async page => {
  await fillAllMandatoryFields(page)
  await page.click("button[type=\"submit\"]");
}