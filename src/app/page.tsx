import Image from "next/image";


// ProfileInfo component
const ProfileInfo = () => (
  <div className="flex flex-col items-center justify-between p-8 mb-8">
    <div className="flex flex-col items-center mb-8">
      <div className="rounded-full overflow-hidden border border-gray-300 w-80 h-80 mb-4">
        <Image
          src="/Profile_Image.jpg"// Replace with the path to your image
          alt="Profile Picture"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <h1 className="text-3xl font-semibold mb-2">Mohammad S. Shaikh</h1>
      <p className="text-lg mb-2">Hey there! I'm Mohammad Shaikh, a fresh computer science graduate ready to dive headfirst into the exciting world of technology. Throughout my studies, I've become pretty handy with coding and understanding how computers tick. I'm always curious and love finding creative solutions to challenges. My friends and professors know me as someone who's dedicated and loves working with others. Now, I'm pumped to take what I've learned and make a positive impact in the tech universe. Let's do this!</p>
      <p className="text-lg mb-2">If you're looking to connect, collaborate, or just chat about the latest innovations, feel free to drop me a line at <a href="mailto:mohammad2shaikh27@gmail.com" style={{ textDecoration: 'underline' }}>mohammad2shaikh27@gmail.com</a>. Let's spark some ideas and make waves in the world of technology together! </p>
    </div>
      <div className="grid gap-2">
      <h2 className="text-xl font-semibold">PROJECTS</h2>
      <p>As someone deeply passionate about problem-solving through technology, I've embarked on various projects that highlight my skills and creativity. These projects serve as testaments to my ability to conceptualize, develop, and deliver software solutions that address real-world challenges. Check out some of my projects:</p>
    <ul>
      <li>
        <a href="https://github.com/mshai1/coffeehub" style={{ textDecoration: 'underline' }}>CoffeeHub</a> - CoffeeHub, a React-based web app, replicates the coffee-making process. Using Bootstrap, it offers Home, OfferedCoffee, and MakeCoffee pages for browsing, brewing, and earning. Stock replenishes after use, making it ideal for mastering React and Bootstrap.
      </li>
      <br />
      <li>
        <a href="https://github.com/mshai1/Todo" style={{ textDecoration: 'underline' }}>Todo</a> - An uncomplicated Java-based Todo List application designed to enable users in task management via either a terminal or graphical user interface (GUI).
      </li>
      {/* Add more projects similarly */}
    </ul>
      </div>
  </div>
);


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <ProfileInfo />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">

        </div>
      </div>



      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/mohammadsshaikh/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Explore my professional profile on LinkedIn for insights into my skills and experience.
          </p>
        </a>

        <a
          href="https://github.com/mshai1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Github{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Visit my GitHub profile to explore my coding projects and contributions.
          </p>
        </a>

        <a
          href="/Resume.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Resume{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Click on the link below to download a copy of my resume
          </p>
        </a>
      </div>
    </main>
  );
}
