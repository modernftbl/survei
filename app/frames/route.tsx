/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";
 
export const GET = frames(async () => {
  return {
    image: (
      <div
        tw="relative flex items-center justify-center w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-8.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <div tw="text-white text-6xl font-bold pt-3">Real or Ai?</div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ pathname: "/result", query: { foo: "Real" } }}
      >
        Real
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/result", query: { foo: "Ai" } }}
      >
        Ai
      </Button>,
    ],
    imageOptions: {
      aspectRatio: "1:1",
    },
  };
});












