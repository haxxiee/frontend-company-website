export default function Page({ post }: any) {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
      <div className="my-32">
        <h1 className="text-5xl font-bold my-4">Latest news and happenings</h1>
        <p className="text-2xl text-gray-500 font-normal">
          Have a look at what&apos;s been happening at WebApp lately!
        </p>
      </div>
    </div>
  );
}
