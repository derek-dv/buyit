import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../actions/profile-actions";
import "../styles/Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { id, isAdmin } = useSelector((state) => state.login);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);

  return (
    <div className="profile">
      {profile.loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="profile__left">
            <div className="profile__shortInfo">
              <img
                src={profile.profile.profile_img}
                alt={profile.profile.first_name}
                className="profile__img"
              />
              <button className="profile__button">Update image</button>
              <p className="profile__text">{`${profile.profile.first_name} ${profile.profile.last_name}`}</p>
              {isAdmin ? (
                <p className="profile__text">Administrator</p>
              ) : (
                <p className="profile__text">Regular Account</p>
              )}
            </div>
          </div>

          <div className="profile__right">
            <div className="center">
              <div className="profile__routes">
                <Link to="/" className="profile__route profile__route--active">
                  Detail
                </Link>
                <Link to="/" className="profile__route">
                  Activity
                </Link>
                <Link to="/" className="profile__route">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Profile;
