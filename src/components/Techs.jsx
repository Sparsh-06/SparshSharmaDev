import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-190 items-center overflow-hidden">
        <h1 className="text-2xl text-white after:content-['👉'] ml-2 z-0">
          Tech Stacks
        </h1>
        <div className="z-2000">
          <motion.div style={{ x }} className="flex">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[250px] w-[250px] overflow-hidden bg-slate-400 mx-1.5"
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center  duration-300  hover:scale-210 hover:text-white">
        <p className=" p-8 text-xl font-black uppercase">{card.title}</p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "",
    title: "HTML",
    id: 1,
  },
  {
    url: "",
    title: "CSS",
    id: 2,
  },
  {
    url: "",
    title: "Javascript",
    id: 3,
  },
  {
    url: "",
    title: "ReactJs",
    id: 4,
  },
  {
    url: "",
    title: "NextJs",
    id: 5,
  },
  {
    url: "",
    title: "NodeJs",
    id: 6,
  },
  {
    url: "",
    title: "ExpressJs",
    id: 7,
  },
  {
    url: "",
    title: "MongoDB",
    id: 8,
  },
  {
    url: "",
    title: "MYSQL",
    id: 9,
  },
  {
    url: "",
    title: "Python",
    id: 10,
  },
  {
    url: "",
    title: "Blender",
    id: 11,
  },
  {
    url: "",
    title: "Axios",
    id: 12,
  },
];
