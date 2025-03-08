import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full grid-cols-1 grid-rows-2 content-between">
      <div className="row-span-1 text-center">
        <h1>Challenges </h1>
      </div>
      <div className="row-span-1 px-2 mt-24 h-auto w-full mx-auto md:w-1/2 flex justify-between items-center flex-wrap space-x-2 space-y-2">
        <Link href={"/challenge1"}>
          <button className="button ">Challenge 1</button>
        </Link>

        <Link href={"/challenge2"}>
          <button className="button ">Challenge 2</button>
        </Link>
        <Link href={"/challenge3"}>
          <button className="button ">Challenge 3</button>
        </Link>
      </div>
    </div>
  );
}
