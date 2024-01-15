import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  const springs = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
    config: { duration: "1700" },
  });

  return (
    <section className='max-w-7xl mx-auto'>
      <animated.div className='max-w-5xl pt-52 mx-auto' style={{ ...springs }}>
        <h1 className='text-5xl text-center text-white mb-6'>DALL-E 2.0</h1>
        <h2 className='text-l pb-11 text-gray-400 text-center font font-mono'>
          Powered by OpenAI
        </h2>
      </animated.div>
    </section>
  );
};

export default Home;
