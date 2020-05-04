const END_POINTS = {
  COLLECTION: {
    CREATE_COLLECTION_ENDPOINT: '/collections',
    DELETE_COLLECTION_ENDPOINT: '/collections/{collectionID}',
    ADD_NEW_IMAGE_TO_THE_COLLECTION: '/collections/{collectionID}/add'

  },
  PHOTO: {
    PHOTO_INFO_BY_ID_ENDPOINT: '/photos/{photoID}',
    DOWNLOAD_FILE_URL_BY_ID: '/photos/{photoID}/download?force=true'
  }
};

module.exports = { END_POINTS };
