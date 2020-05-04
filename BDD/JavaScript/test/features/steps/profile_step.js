const {
  Given,
  When, 
  Then
} = require('cucumber');
const profilePage = require('../../page_objects/profile_page');

Given('the user navigate to profile page', async () => {
  await profilePage.navigateToProfilePage();
});

When('I go to https:\/\/unsplash.com\/ @{string}', function (new_username){
 profilePage.navigateToProfilePageByUsername(new_username);
});

Then('I observe that it will take me to the Profile page', function () {
  profilePage.verifyNavigation();
});

Then('My full name is displayed as {string}', function (fullname) {
  // Write code here that turns the phrase above into concrete actions
  profilePage.verifyUsername(fullname);
});


 

