const PAGE_URL = {
  DASHBOARD: '',
  LOGIN: '/login',
  USER_COLLECTITON_PAGE_URL: '/{userName}/collections',
  EDIT_PROFILE_URL: '/account',
  PROFILE_URL: '/{userName}',
  VIEW_PHOTO_BY_ID_URL: '/photos/{photoID}',
  PHOTO_INFO_BY_ID_URL: '/photos/{photoID}/info',
  COLLECTION_IMAGE_URL: '/collections/{collectionID}'
};

const LOGIN_PAGE = {
  USERNAME_INPUT_FIELD: ['CSS_SELECTOR', '#user_email'],
  PASSWORD_INOUT_FIELD: ['CSS_SELECTOR', '#user_password'],
  LOGIN_BUTTON_FIELD: ['CSS_SELECTOR', ':nth-child(7) > .btn']
};

const DASHBOARD_PAGE = {
  IMAGE: ['CSS_SELECTOR', 'div:nth-child(1)>div:nth-child(1)>div>figure'],
};

const USER_COLLECTION_PAGE = {
  USER_FULL_NAME: ['XPATH', '(//div[@data-test="users-route"]//div[string-length(text())>0])[1]'],
  LOCATION: ['XPATH', '//a[contains(text(),"{location}")]'],
  NEW_IMAGE_ADDED_IN_COLLECTION: ['XPATH', '//img[@itemprop="thumbnailUrl"]']
};

const EDIT_PROFILE_PAGE = {
  LOCATION_INPUT: ['CSS_SELECTOR', '#user_location'],
  UPDATE_ACCOUNT_BUTTON: ['CSS_SELECTOR', '.btn.btn-default.btn-block-level'],
  USERNAME_INPUT: ['CSS_SELECTOR', '#user_username'],
};

const PROFILE_PAGE = {
  EDIT_PROFILE_BUTTON: ['CSS_SELECTOR', 'a[href="/account"]'],
  USERNAME_FIELD: ['XPATH','//div[@data-test="users-route"]//div[text()][./following-sibling::div//a[@href="/account"][text()="Edit profile"]]'],
};

const PHOTO_PAGE = {
  RELATED_TAGS: ['XPATH', '//p[text()="Related tags"]/following::a[contains(@title, "images")]'],
  DOWNLOADABLE_IMAGE: ['XPATH', '//div[@data-test="photos-route"]//button/div[2]/img'],
  PHOTO_MODAL: ['CSS_SELECTOR', '.ReactModalPortal'],
  MODAL_USER_ICON: ['CSS_SELECTOR','header>div img'],
  FOLLOW_BUTTON: ['CSS_SELECTOR','header>div>span button > span'],
  FOLLOW_BUTTON_BACKGROUND: ['CSS_SELECTOR','header>div>span button'],
  FOLLOW_BUTTON_TEXT: ['XPATH', '//header/div//button//span'],
};

const PHOTO_INFOMATION_MODAL = {
  CAMERA_MAKE_PHOTO_INFO: ['XPATH', '//dt[text() = "Camera Make"]/following-sibling::dd'],
  CAMERA_MODEL_PHOTO_INFO: ['XPATH', '//dt[text() = "Camera Model"]/following-sibling::dd'],
  FOCAL_LENGTH_PHOTO_INFO: ['XPATH', '//dt[text() = "Focal Length"]/following-sibling::dd']
};

module.exports = {
  PAGE_URL,
  LOGIN_PAGE,
  DASHBOARD_PAGE,
  USER_COLLECTION_PAGE,
  EDIT_PROFILE_PAGE,
  PROFILE_PAGE,
  PHOTO_PAGE,
  PHOTO_INFOMATION_MODAL
};
