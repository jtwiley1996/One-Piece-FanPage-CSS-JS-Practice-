

export default function Home() {
  return (
    <div className="justify-center mt-[1rem] mb-[1rem] min-h-screen flex">
      <div className=" bg-blue-800 bg-opacity-50 border-2 border-white rounded-3xl py-24">
        <h1 className="text-3xl font compressed-text text-center" style={{ fontFamily: "'Rum is gone', sans-serif" }}>
          Welcome to the ultimate One Piece manga discussion forum!
        </h1>
        <img src="/images/SHcrew.png" alt="Straw Hats" className="mx-auto mt-24 transform scale-150" />
        <p className="w-3/4 mx-auto pt-20 text-lg text-center" style={{ fontFamily: "sans-serif" }}>
          Whether you're a Straw Hat pirate in training or a seasoned Grand Line explorer, we urge you to create an account, dive into the conversation, and join the crew. Let's set sail on the Grand Line of theories, epic moments, and endless adventure! 🏴‍☠️🍖
        </p>
      </div>
    </div>
  );
}
