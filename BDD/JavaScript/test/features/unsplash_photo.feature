Feature: unplash page
  As a normal user,
  I want to be able to edit the information in User Edit Profile

  @id-5 @collection @smoke @regression
  Scenario Outline: Collection - Create Collection with API
    Given the user create collection with API
    When the user open the photo with ID "<photoID>"
    And the user add a picture to the new collection
    And the user navigate to new collection
    And the user click on image in the collection
    Then the ID in URL is shown correctly

    Examples:
      | photoID     |
      | E6PWA9GvIBU |

  @id-6 @check-image @check-image-downloadable
  Scenario Outline: Check that the image is downloaded and exist in system
    Given the user navigate to login page
    And the user login as a "<user_name>" of sample users
    When the user open the photo with ID "<photoID>"
    And the user downloads image using API
    Then the user notices that the hashcode of image is the same with "<expected_hashcode>"


    Examples:
      | user_name  | photoID     | expected_hashcode                |
      | Duy Nguyen | E6PWA9GvIBU | eb4b270c3ea8fb27c9593f2a1878fc13 |



