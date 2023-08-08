module.exports = async page => {
  await page.type("#first-name","Pamela");
  await page.type("#last-name","Silva");
  await page.type("#email","pamelasilva@email.com");
  await page.click("#agree");
}