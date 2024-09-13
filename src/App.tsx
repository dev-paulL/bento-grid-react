function App() {
  return (
    <main>
      <section>
        {/* MAIN article */}
        <article className="lg:p-20 bg-purple500 text-White col-start-2 col-span-2 text-center items-center justify-center row-start-1 row-span-3">
          <h1 className="">
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

        <article className="bg-White text-Black col-start-2 row-start-4 row-span-2 overflow-clip ">
          <img
            src="../src/assets/images/illustration-multiple-platforms.webp"
            className="lg:min-w-[145%]"
            alt=""
          />
          <h2 className="text-ok lg:!text-normal lg:w-[80%]">
            Manage multiple accounts and platforms.
          </h2>
        </article>

        <article className="bg-yellow500 lg:pb-0 text-Black col-start-3 row-start-4 row-span-2 overflow-hidden">
          <h2 className="lg:text-normal lg:w-[80%] text-ok">
            Maintain a consistent posting schedule.
          </h2>
          <img
            src="../src/assets/images/illustration-consistent-schedule.webp"
            alt=""
            className="w-full"
          />
        </article>

        <article className="bg-purple100 text-center text-Black col-start-4 row-span-5 row-start-1 lg:!text-left lg:pr-0 lg:pt-10 lg:overflow-hidden gap-6 lg:gap-12">
          <h2 className="text-ok">Schedule to social media.</h2>
          <img
            src="../src/assets/images/illustration-schedule-posts.webp"
            className="lg:max-w-[30rem] lg:self-start"
            alt=""
          />
          <p className="lg:w-[90%] text-small font-medium lg:text-2xl">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </article>

        <article className="bg-purple500 text-White col-start-3 items-center col-span-2 lg:flex-row row-start-6 row-span-2 text-center lg:text-left">
          <img
            src="../src/assets/images/illustration-grow-followers.webp"
            className="lg:h-full w-[80%]"
            alt=""
          />
          <h2 className="text-normal w-[80%] lg:!text-[3.5rem]">Grow followers with non-stop content.</h2>
        </article>

        <article className="bg-White text-Black col-start-2 row-start-6 row-span-2 justify-around">
          <h2 className="!text-xl font-medium">
            <span className="text-[4rem] block mb-4">&#62;56%</span> faster
            audience growth
          </h2>
          <img
            src="../src/assets/images/illustration-audience-growth.webp"
            alt=""
            className="w-[80%]"
          />
        </article>

        <article className="bg-yellow100 text-Black row-start-1 col-start-1 row-span-4 justify-center">
          <h2 className="lg:w-[80%] text-normal">
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

        <article className="bg-yellow500 text-Black col-start-1 row-start-5 row-span-3 justify-around">
          <h2 className="lg:w-[80%] text-normal">Write your content using AI.</h2>
          <img src="../src/assets/images/illustration-ai-content.webp" alt="" />
        </article>
      </section>
    </main>
    
  );
}

export default App;
