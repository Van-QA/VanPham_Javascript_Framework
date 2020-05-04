Feature: unplash follow
  As a normal user,
  I want to be able to follow a photographer 

  @id-11 @following @regression
  Scenario Outline: Follow - Follow a photographer successfully
    Given the user navigate to login page
    When the user login as a "<user_name>" of sample users
    And the user click the "<photo_order>" photo on home page
    When the user hover on icon user at the top left corner
    And the user click the Follow button
    Then the user observe button background color turn into white and button text turn into Following

    Examples:
      | user_name  | photo_order |
      | Duy Nguyen | first       |

 