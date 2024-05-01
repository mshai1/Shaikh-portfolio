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
      <p className="text-lg mb-2">If you're looking to connect, collaborate, or just chat about the latest innovations, feel free to drop me a line at <a href="mailto:mohammad2shaikh27@gmail.com">mohammad2shaikh27@gmail.com</a>. Let's spark some ideas and make waves in the world of technology together! </p>
    </div>
    <div className="grid gap-2">
      <h2 className="text-xl font-semibold">EDUCATION</h2>
      <p>Siena College, Loudonville, NY</p>
      <p>Bachelor of Computer in Computer Science</p>
      <p>GPA: 3.69</p>
      <p>Hudson Valley Community College, Troy, NY</p>
      <p>Associate of Computer in Computer Science</p>
      <p>GPA: 3.77</p>
      <h2 className="text-xl font-semibold">RELEVANT SKILLS</h2>
      <p>Familiar with: Swift, Java, HTML/CSS, JavaScript, Relational Database, Assembly, C#, Command Line</p>
      <p>Proficient in: Xcode, Figma, VS code, GitHub, Oracle, O365 & Teams, SCCM, Intune, ServiceNow, Flownia</p>
      <h2 className="text-xl font-semibold">RELEVANT EXPERIENCE</h2>
      <p>Product Owner, Siena College, Latham, NY (Sept. 2023 - Now)</p>
      <ul>
        <li>Ensuring seamless communication among stakeholders, clients, and the development team to align on project goals, while leveraging creativity to introduce innovative solutions and enhance software development.</li>
        <li>Exhibiting effective collaboration within diverse teams, emphasizing understanding and cooperation among members with differing viewpoints.</li>
      </ul>
      {/* Additional experience and honors can be added similarly */}
    </div>
  </div>
);


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProfileInfo />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started bçy editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
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
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
