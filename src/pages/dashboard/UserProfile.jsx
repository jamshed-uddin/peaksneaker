import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="mt-3  flex border-b-2 pb-2 justify-center w-full">
      <div className=" flex flex-col items-center ">
        <div className="avatar placeholder  ">
          <div className="bg-neutral text-neutral-content rounded-full w-24">
            {user?.photoURL ? (
              <img
                className="w-full object-cover"
                src={user?.photoURL}
                alt="Profile photo"
              />
            ) : (
              <span className="text-xl">
                {user?.displayName
                  ? user?.displayName.at(0).toUpperCase()
                  : "Image"}
              </span>
            )}
          </div>
        </div>
        <div className="text-center">
          <h1
            className="
        text-xl font-semibold"
          >
            {user?.displayName || "Users name"}
          </h1>
          <h4 className="font-light">
            {user?.email || "User email: Not available"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
