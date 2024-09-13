function App() {
  return (
    <main>
      <section>
        <article className="bg-yellow100 text-Black row-start-1 col-start-1 row-span-4 justify-center">
          <h2 className="w-[80%]">
            Create and schedule content{" "}
            <span className="text-purple500">
              <em>quicker</em>.
            </span>
          </h2>
          <img
            src="../src/assets/images/illustration-create-post.webp"
            className="w-[70%]"
            alt=""
          />
        </article>

        {/* MAIN article */}
        <article className="p-20 bg-purple500 text-White col-start-2 col-span-2 text-center items-center justify-center row-start-1 row-span-3">
          <h1>
            Social Media <span className="text-yellow500">10x</span>{" "}
            <em>Faster</em> with AI
          </h1>

          <img
            src="../src/assets/images/illustration-five-stars.webp"
            className="w-56"
            alt=""
          />
          <p>Over 4,000 5-star reviews</p>
        </article>

        <article className="bg-purple100 text-Black col-start-4 row-span-5 row-start-1 pr-0 pt-10 overflow-hidden gap-12">
          <h2>Schedule to social media.</h2>
          <img
            src="../src/assets/images/illustration-schedule-posts.webp"
            className="max-w-[30rem] self-start"
            alt=""
          />
          <p className="w-[90%] text-2xl font-medium">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </article>

        <article className="bg-yellow500 text-Black col-start-1 row-start-5 row-span-3 justify-around">
          <h2 className="w-[80%]">Write your content using AI.</h2>
          <img src="../src/assets/images/illustration-ai-content.webp" alt="" />
        </article>

        <article className="bg-White text-Black col-start-2 row-start-4 row-span-2 overflow-clip ">
          <img
            src="../src/assets/images/illustration-multiple-platforms.webp"
            className="min-w-[150%]"
            alt=""
          />
          <h2 className="text-normal w-[80%]">
            Manage multiple accounts and platforms.
          </h2>
        </article>

        <article className="bg-yellow500 text-Black col-start-3 row-start-4 row-span-2 overflow-clip">
          <h2 className="text-normal w-[80%]">
            Maintain a consistent posting schedule.
          </h2>
          <img
            src="../src/assets/images/illustration-consistent-schedule.webp"
            alt=""
          />
        </article>

        <article className="bg-White text-Black col-start-2 row-start-6 row-span-2 justify-around">
          <h2 className="text-xl font-medium">
            <span className="text-[4rem] block mb-4">&#62;56%</span> faster
            audience growth
          </h2>
          <img
            src="../src/assets/images/illustration-audience-growth.webp"
            alt=""
            className="w-[80%]"
          />
        </article>

        <article className="bg-purple500 text-White col-start-3 items-center col-span-2 flex-row row-start-6 row-span-2">
          <img
            src="../src/assets/images/illustration-grow-followers.webp"
            className="h-full"
            alt=""
          />
          <h2>Grow followers with non-stop content.</h2>
        </article>
      </section>
    </main>
  );
}

export default App;
