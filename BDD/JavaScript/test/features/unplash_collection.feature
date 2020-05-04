Feature: unplash page
  As a normal user,
  I want to be able to edit the information in User Edit Profile

  @id-1 @edit-profile @regression
  Scenario Outline: Edit Profile - Verify user fullname
    Given the user navigate to login page
    When the user login as a "<user_name>" of sample users
    And the user navigate to collection page
    Then the user fullname is shown correctly

    Examples:
      | user_name  |
      | Duy Nguyen |


  @id-2 @edit-profile @regression
  Scenario Outline: Edit Profile - Verify location
    Given the user navigate to login page
    And the user login as a "<user_name>" of sample users
    And the user navigate to collection page
    And the user navigate to edit profile page
    When I input "<location>" into Location field
    And I click on update account button
    And the user navigate to collection page
    Then the location "<location>" is updated successfully

    Examples:
      | user_name  | location |
      | Duy Nguyen | ThaiLand |      