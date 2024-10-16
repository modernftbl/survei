/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;

  return {
    // image: <div tw="flex">Your Answer is: {foo}</div>, // foo: bar
    image: (
      <div
        tw="relative flex flex-col items-center justify-center w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div tw="flex text-white text-6xl">Your Answer is: {foo}</div>
        <div tw="flex text-white pt-4">
          You've already voted! Thanks for participating.
        </div>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
  };
});
