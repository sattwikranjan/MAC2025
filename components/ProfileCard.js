import React from "react";

const ProfileCard = ({ title, fullName, post, organisation, profileImage }) => {
  return (
    <div className="card w-72 md:w-[285px] flex flex-col items-center text-center">
      <figure className="w-full flex justify-center">
        {profileImage && (
          <img
            src={profileImage}
            alt="Profile"
            className="h-40 w-40 object-cover object-top rounded-full mt-4"
          />
        )}
      </figure>
      <div className="card-body text-black font-semibold w-full flex flex-col items-center">
        <div className="text-2xl font-bold">
          <h1>{fullName}</h1>
        </div>
        <h1>{post}</h1>
        <h1>{organisation}</h1>
      </div>
    </div>
  );
};

export default ProfileCard;
