import Image from "next/image";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};

export default async function ListOfPosts() {
  const [posts, users, dog] = await Promise.all([
    getPostsData(),
    getUsersData(),
    getDogData(),
  ]);
  console.log(users);
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={dog.message}
          alt="Picture of a dog"
          width={500}
          height={500}
        />
      </div>
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        );
      })}
      <div>
        {users.map((user: any) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}
