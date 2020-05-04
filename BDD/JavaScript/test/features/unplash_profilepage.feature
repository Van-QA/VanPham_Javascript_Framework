Feature: unplash profile page
  As a normal user,
  I want to be able to Update the username URL in the Profile page

  @id-12 @edit-profile @regression
  Scenario Outline: Update the username URL in the Profile page
    Given the user navigate to login page
    When the user login as a "<user_name>" of sample users
    And the user navigate to edit profile page
    And I input "<new_username>" into Username field
    And I click on update account button
    And I go to https://unsplash.com/ @"<new_username>"
    Then I observe that it will take me to the Profile page
    And My full name is displayed as "<your_fullname>"

    Examples:
      | user_name  | your_fullname | new_username |
      | Duy Nguyen | Duy Nguyen    | duynguyennt |

 