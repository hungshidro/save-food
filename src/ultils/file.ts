import RNFetchBlob from 'react-native-blob-util';
import {isIOS} from 'configs';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {getFileTypeFromUrl} from './helper';
// import Share from 'react-native-share';

export const downloadFileFromUrl = (
  url?: string,
  fileName: string = '',
  fileType?: string,
) => {
  if (!url) {
    return;
  }
  let dirs = RNFetchBlob.fs.dirs;
  const type = fileType ?? getFileTypeFromUrl(url);
  let path = `${
    isIOS ? dirs.DocumentDir : dirs.LegacyDownloadDir
  }/${fileName}.${type}`;
  console.log('saved path', path, url, fileName);
  RNFetchBlob.config({
    path: path,
    addAndroidDownloads: {
      notification: true,
      title: fileName,
      useDownloadManager: true,
      path: path,
    },
    fileCache: true,
    overwrite: true,
    IOSBackgroundTask: true,
  })
    .fetch('GET', url)
    .then(async res => {
      console.log('The file saved to ', res.path(), res);
      if (isIOS) {
        const base64 = await res.base64();
        RNFetchBlob.fs
          .writeFile(res.path(), base64, 'base64')
          .then(() => {
            RNFetchBlob.ios.openDocument(res.data);
          })
          .catch(error => {
            console.log('error', error?.message);
          });
      } else {
      }
    })
    .catch(error => {
      console.log('error', error);
    });
};

export const requestPhotoLibraryPermission = async () => {
  if (isIOS) {
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
    console.log('Photo library permission', result);
    return result;
  }
  return RESULTS.GRANTED;
};
