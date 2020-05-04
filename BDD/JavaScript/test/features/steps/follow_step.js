const {
  Given,
  When,
  Then
} = require('cucumber');
const scope = require('../hooks/scope');
const photoPage = require('../../page_objects/photo_page');
const dashboardPage = require('../../page_objects/dashboard_page');

When('the user click the {string} photo on home page', async (photo_order)  => {
  await dashboardPage.clickImage(photo_order);
});

When ('the user hover on icon user at the top left corner', async ()  => {
  // hover on the use icon at the top left corner
  await photoPage.hoverUserModalIcon();
});

When ('the user click the Follow button', async ()  => {
  // Click on the follow button
  await photoPage.clickFollowButton(); 
});

Then ('the user observe button background color turn into white and button text turn into Following', async ()  => {  
  // Verify button background color turned into white
  await photoPage.verifyFollowButtonBackground();
  // Verify button text turn into Following
  await photoPage.verifyFollowButtonText();
});  


