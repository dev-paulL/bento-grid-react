function App() {
  return (
    <main>
      <section>
        <div className="bg-yellow100 text-Black row-start-1 col-start-1 row-span-5">
          <h2>
            Create and schedule content{" "}
            <span className="text-purple500">
              <em>quicker</em>.
            </span>
          </h2>
          <img src="../src/assets/images/illustration-create-post.webp" alt="" />
        </div>

        {/* MAIN DIV */}
        <div className="p-20 bg-purple500 text-White col-start-2 col-span-2 text-center row-start-1 row-span-4">
          <h1>
            Social Media <span className="text-yellow500">10x</span> <em>Faster</em> with AI
          </h1>

          <img src="../src/assets/images/illustration-five-stars.webp" alt="" />
          <p>Over 4,000 5-star reviews</p>
        </div>

        <div className="bg-purple100 text-Black col-start-4 row-span-6 row-start-1">
          <h2>Schedule to social media.</h2>
          <img src="../src/assets/images/illustration-schedule-posts.webp" alt="" />
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>

        <div className="bg-yellow500 text-Black col-start-1 row-start-6 row-span-2">
          <h2>Write your content using AI.</h2>
          <img src="../src/assets/images/illustration-ai-content.webp" alt="" />
        </div>

        <div className="bg-White text-Black col-start-2 row-start-5 row-span-2 ">
          <img src="../src/assets/images/illustration-multiple-platforms.webp" alt="" />
          <h2 className="text-normal">Manage multiple accounts and platforms.</h2>
        </div>

        <div className="bg-yellow500 text-Black col-start-3 row-start-5 row-span-2">
          <h2>Maintain a consistent posting schedule.</h2>
          <img src="../src/assets/images/illustration-consistent-schedule.webp" alt="" />
        </div>

        <div className="bg-White text-Black col-start-2 row-start-7">
          <h2 className="text-small font-normal">
            <span className="text-big font-medium">&#62;56%</span> <br /> faster audience growth
          </h2>
          <img src="../src/assets/images/illustration-audience-growth.webp" alt="" />
        </div>

        <div className="bg-purple500 text-White col-start-3 col-span-2 flex-row row-start-7">
          <img src="../src/assets/images/illustration-grow-followers.webp" alt="" />
          <h2>Grow followers with non-stop content.</h2>
        </div>
      </section>
    </main>
  );
}

export default App;
