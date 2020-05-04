Feature: unplash page
  As a normal user,
  I want to be able to edit the information in User Edit Profile

  @id-3 @photo-info @regression
  Scenario Outline: Verify info of camera model and focal length
    Given the user navigate to login page
    And the user login as a "<user_name>" of sample users
    When the user open the photo with ID "<photoID>"
    And the user open info modal of current photo
    Then the data in photo info is shown correctly

    Examples:
      | user_name  | photoID     |
      | Duy Nguyen | E6PWA9GvIBU |

  @id-4 @photo-info @regression
  Scenario Outline: Verify all tags are listed in Photo Page
    Given the user navigate to login page
    And the user login as a "<user_name>" of sample users
    When the user open the photo with ID "<photoID>"
    Then All related tags in photo page is shown correctly

    Examples:
      | user_name  | photoID     |
      | Duy Nguyen | E6PWA9GvIBU |
