import maintain from "../src/assets/images/illustration-consistent-schedule.webp";
import write from "../src/assets/images/illustration-ai-content.webp";
import manage from "../src/assets/images/illustration-multiple-platforms.webp";
import schedule from "../src/assets/images/illustration-schedule-posts.webp";
import create from "../src/assets/images/illustration-create-post.webp";
import faster from "../src/assets/images/illustration-audience-growth.webp";
import stars from "../src/assets/images/illustration-five-stars.webp";
import grow from "../src/assets/images/illustration-grow-followers.webp";
function App() {
  return (
    <main>
      <div className="wrapper">
        {/* MAIN div */}
        <div className="bg-purple500 text-White col-start-2 p-8  col-span-2 text-center items-center justify-center row-start-1 row-span-3">
          <h1 className="lg:!text-big !text-medium">
            Social Media <span className="text-yellow500">10x</span> <em>Faster</em> with AI
          </h1>

          <img src={stars} className="w-56" alt="" />
          <p className="text-xl text-White">Over 4,000 5-star reviews</p>
        </div>

        <div className="bg-White text-Black col-start-2 row-start-4 row-span-2 overflow-clip ">
          <img src={manage} className="lg:min-w-[145%]" alt="" />
          <h2 className="lg:!text-normal text-ok lg:w-[90%]">Manage multiple accounts and platforms.</h2>
        </div>

        <div className="bg-yellow500 pb-0 text-Black col-start-3 row-start-4 row-span-2 overflow-hidden">
          <h2 className="lg:!text-[2.5rem] w-[80%] text-ok lg:leading-[0.8] ">Maintain a consistent posting schedule.</h2>
          <img src={maintain} alt="" className="lg:w-full w-[60%]" />
        </div>

        <div className="bg-purple100 text-center text-Black col-start-4 row-span-5 row-start-1 lg:!text-left lg:pr-0 lg:pt-10 lg:overflow-hidden gap-6">
          <h2 className="text-ok lg:w-[90%]">Schedule to social media.</h2>
          <img src={schedule} className="lg:h-[30rem] lg:min-w-max lg:self-start" alt="" />
          <p className="lg:w-[80%] text-small font-medium lg:text-xl">
            Optimize post timings to publish content at the perfect time for your audience.
          </p>
        </div>

        <div className="bg-purple500 text-White col-start-3 items-center col-span-2 lg:flex-row row-start-6 row-span-2 text-center lg:text-left">
          <img src={grow} className="lg:h-full" alt="" />
          <h2 className="text-normal w-[70%] lg:!text-[3.2rem]">Grow followers with non-stop content.</h2>
        </div>

        <div className="bg-White text-Black col-start-2 row-start-6 row-span-2 justify-around">
          <h2 className="!text-xl font-medium">
            <span className="text-big block mb-4">&#62;56%</span> faster audience growth
          </h2>
          <img src={faster} alt="" className="w-[80%]" />
        </div>

        <div className="bg-yellow100 text-Black row-start-1 col-start-1 row-span-4 justify-center">
          <h2 className="lg:w-[80%] text-normal">
            Create and schedule content{" "}
            <span className="text-purple500">
              <em>quicker</em>.
            </span>
          </h2>
          <img src={create} className="lg:w-[70%] w-[50%]" alt="" />
        </div>

        <div className="bg-yellow500 text-Black col-start-1 row-start-5 row-span-3 lg:justify-between overflow-clip">
          <h2 className="lg:w-[70%] !text-normal ">Write your content using AI.</h2>
          <img src={write} className="w-[60%] lg:w-auto " alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
