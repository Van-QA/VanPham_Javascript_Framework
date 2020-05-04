const {
  Given,
  When
} = require('cucumber');
const editProfilePage = require('../../page_objects/edit_profile_page');

Given('the user navigate to edit profile page', async () => {
  await editProfilePage.navigateToEditProfilePage();
});

When('I input {string} into Location field', async (location) => {
  await editProfilePage.editLocation(location);
});

When('I click on update account button', async () => {
  await editProfilePage.clickUpdateAccountButton();
});

When('I input {string} into Username field', async (username) => {
  await editProfilePage.editUsername(username);
});

