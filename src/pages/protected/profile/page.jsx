import { useUserContext } from "../../../context/UserContextProvider";

const ProfilePage = () => {
  const { currentUser } = useUserContext();
  return (
    <div>
      <h1>User Profile</h1>
      <h2>email:{currentUser?.email}</h2>
    </div>
  );
};

export default ProfilePage;
