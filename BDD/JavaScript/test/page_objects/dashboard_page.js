const scope = require('../features/hooks/scope');
const constants = require('./constants');
const page = require('./base_page');

const navigateDashboardPage = async () => {
  const url = scope.host + constants.PAGE_URL.DASHBOARD;
  await page.navigateToURL(url); 
};

const clickImage = async (image_order) => {
  // click the first image
  if(image_order == "first")
  {
    image_order = 1; //column 1 row 1
    await page.clickElement(constants.DASHBOARD_PAGE.IMAGE, false);
  }
  //handle other image order here
};
module.exports = { navigateDashboardPage, clickImage};
