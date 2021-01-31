import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormInput } from "../../hooks/useFormInput";
import { getPicture, uploadPicture } from "../../services/firebase";
import { updateProfileStart } from "../../state/settings/actions";
import { FormInput } from "../FormInput";
import {
  PicturesContainer,
  ProfilePicture,
  UploadPictureContainer,
  ProfileSettingsContainer,
  TextContainer,
  WallpaperPicture,
  SaveButton,
} from "./styled";

export const ProfileSettings = ({ user }) => {
  const dispatch = useDispatch();

  const username = useFormInput(user.username);
  const email = useFormInput(user.email);
  const [picture, setPicture] = useState(user.picture);
  const [wallpaper, setWallpaper] = useState(user.wallpaper);

  const handlePictureChange = ({ target: { files } }) => {
    const type = "user_picture";
    const task = uploadPicture(user.id, files[0], type);
    if (task) {
      task.on(
        "state_changed",
        function progress({ bytesTransferred, totalBytes }) {
          const percentage = (bytesTransferred / totalBytes) * 100;
          console.log(percentage);
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          getPicture(user.id, type)
            .then((url) => setPicture(url))
            .catch(console.log);
        }
      );
    } else {
      console.log("Error uploading picture");
    }
  };

  const handleWallpaperChange = ({ target: { files } }) => {
    const type = "wallpaper";
    const task = uploadPicture(user.id, files[0], type);
    if (task) {
      task.on(
        "state_changed",
        function progress({ bytesTransferred, totalBytes }) {
          const percentage = (bytesTransferred / totalBytes) * 100;
          console.log(percentage);
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          getPicture(user.id, type)
            .then((url) => setWallpaper(url))
            .catch(console.log);
        }
      );
    } else {
      console.log("Error uploading picture");
    }
  };

  const handleSave = () => {
    const body = {
      username: username.inputProps.value,
      email: email.inputProps.value,
      picture,
      wallpaper,
    };
    dispatch(updateProfileStart(body));
  };

  return (
    <ProfileSettingsContainer>
      <PicturesContainer>
        <UploadPictureContainer>
          <ProfilePicture src={picture} alt="" />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handlePictureChange}
          />
        </UploadPictureContainer>
        <UploadPictureContainer>
          <WallpaperPicture src={wallpaper} alt="" />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleWallpaperChange}
          />
        </UploadPictureContainer>
      </PicturesContainer>
      <TextContainer>
        <FormInput
          type="text"
          name="username"
          label="Username"
          {...username.inputProps}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          {...email.inputProps}
        />
      </TextContainer>
      <SaveButton onClick={handleSave}>Save</SaveButton>
    </ProfileSettingsContainer>
  );
};
