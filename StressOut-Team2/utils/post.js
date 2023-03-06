import { storage, db } from "./firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

import { collection, addDoc, Timestamp } from "firebase/firestore";

const uploadPhotoAsync = async (currentUser, image) => {
  const uri = image.substring(image.lastIndexOf("/") + 1);
  const fileName = uri.substring(0, uri.indexOf("."));
  const fileExt = uri.substring(uri.indexOf(".") + 1);

  const path = `photos/${currentUser.uid}/${fileName}${Date.now()}.${fileExt}`;

  return new Promise(async (res, rej) => {
    const response = await fetch(image);
    const file = await response.blob();

    let uploadTask = uploadBytesResumable(ref(storage, uri), file, {
      contentType: `image/${fileExt}`,
    });

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        rej(error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadUrl) => {
            res(downloadUrl);
          }
        );
      }
    );
  });
};


export const addPost = async ({
  description,
  localImageUri,
  currentUser,
  userDbInfo,
}) => {
  const uploadedImageUrl = await uploadPhotoAsync(currentUser, localImageUri);

  return new Promise(async (res, rej) => {
    await addDoc(collection(db, "posts"), {
      userName: userDbInfo.userName,
      userImg: userDbInfo.profileImage,
      post: description,
      userId: currentUser.uid,
      postTime: Timestamp.fromDate(new Date()),
      postImg: uploadedImageUrl,
      liked: true,
      likes: 0,
      comments: 0,
    })
      .then((ref) => {
        res(ref);
      })
      .catch((error) => {
        rej(error);
      });
  });
};
