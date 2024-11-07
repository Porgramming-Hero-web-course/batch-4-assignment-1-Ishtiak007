{
  // problem-6
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  // Profile interface
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  // Function ---->updateProfile()
  function updateProfile(
    userProfile: Profile,
    updateUserProfile: Partial<Profile>
  ): Profile {
    return { ...userProfile, ...updateUserProfile };
  }

  // Sample Input
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  // Updating the profile with new age. We can update any form name/age/email. After updateing the updated object will be the output
  console.log(updateProfile(myProfile, { age: 26 }));
}
