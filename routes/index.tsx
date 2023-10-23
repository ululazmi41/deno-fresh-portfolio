import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx"; // TODO: remove

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <div
        class="px-4 py-2 flex justify-between fixed"
        style={{
          "width": "100vw",
          "background": "#1e40af",
          "top": "0",
          "z-index": "1",
        }}
      >
        <span class="font-bold" style={{ "color": "white" }}>UA.</span>
        <ul class="flex gap-4">
          <li>
            <a class="link-white" href="#education">Education</a>
          </li>
          <li>
            <a class="link-white" href="#experiences">Experiences</a>
          </li>
          <li>
            <a class="link-white" href="#projects">Projects</a>
          </li>
          <li>
            <a class="link-white" href="#certificates">Certificates</a>
          </li>
          <li>
            <a class="link-white" href="#contact">Contact</a>
          </li>
        </ul>
        <div></div>
      </div>
      <div class="flex justify-center mt-16 mb-8">
        <img src="/profile.jpg" class="rounded-full w-32" />
        <div style={{ "max-width": "500px" }}>
          <div>
            <p class="text-xl">
              <span class="font-bold">Ulul Azmi</span> |{" "}
              <span class="font-bold" style={{ "color": "#1F7487" }}>
                Software Engineer
              </span>
            </p>
            <p class="italic text-md opacity-[0.6]">
              Fresh Graduate from Politeknik Negeri Bengkalis
            </p>
          </div>
          <p>
            Hello, I'm{" "}
            <span class="font-bold">Ulul Azmi</span>. I'm passionate in{" "}
            <span class="font-bold" style={{ "color": "#1F7487" }}>
              software engineering
            </span>. Adaptive in Mobile, Web, and Back-End Development.
          </p>
        </div>
      </div>
      {/* Outer */}
      <div class="grid mx-auto" style={{ "max-width": "50%" }}>
        {/* Education */}
        <div>
          <p id="education" class="font-bold text-xl my-4">Education</p>
          {/* Polbeng */}
          <div class="flex my-4 gap-4">
            <img src="polbeng.png" width="108px" />
            <div class="flex flex-col justify-between">
              <div>
                <p class="font-bold text-md">Politeknik Negeri Bengkalis</p>
                <p class="italic opacity-[0.6]">2019 - 2023</p>
              </div>
              <div>
                <p>Majoring in Software Engineering</p>
                <p>
                  Skills: Mobile App, Web App, Software Development Life Cyle
                </p>
              </div>
            </div>
          </div>
          {/* Dicoding Academy */}
          <div class="flex my-4 gap-4">
            <img src="dicoding.jpg" width="108px" class="rounded-full" />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Dicoding Academy</span> |{" "}
                  <span class="font-bold link-blue">
                    <a href="#">see certificates</a>
                  </span>
                </p>
                <p class="italic opacity-[0.6]">Learning Platform</p>
              </div>
              <div>
                <p>
                  Learning Path completed:{" "}
                  <span class="font-bold link-blue">
                    <a href="#">Multi-Platform App</a>
                  </span>{" "}
                  and{" "}
                  <span class="font-bold link-blue">
                    <a href="#">Front-End Web</a>
                  </span>
                </p>
                <p>Skills: Mobile App, Web App, and Back-End Development</p>
              </div>
            </div>
          </div>
          {/* Lintasarta Cloudeka Digischool */}
          <div class="flex my-4 gap-4 items-center">
            <img
              src="lintasarta.png"
              style={{ "width": "108px", "height": "au" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md font-bold">Lintasarta Cloudeka Digischool</p>
                <p class="italic opacity-[0.6]">Sep 2022 - Mar 2023</p>
              </div>
              <div>
                <p>
                  Learning Path:{" "}
                  <span class="font-bold">Full-Stack Developer</span>
                </p>
                <p>Skills: Web and Back-End Development</p>
              </div>
            </div>
          </div>
          {/* SIB Kampus Merdeka */}
          <div class="flex my-4 gap-4">
            <img src="kampus-merdeka.png" width="108px" />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md font-bold">SIB Kampus Merdeka</p>
                <p class="italic opacity-[0.6]">Feb 2022 - Aug 2022</p>
              </div>
              <div>
                <p>
                  Learning Path:{" "}
                  <span class="font-bold">Multi-Platfrom and Back-End</span>
                </p>
                <p>Skills: Mobile App and Back-End Development</p>
              </div>
            </div>
          </div>
          {/* Baparegraf Developer Day 2023 */}
          <div class="flex my-4 gap-4">
            <img src="bdd.jpg" width="108px" />
            <div class="flex flex-col justify-center">
              <p class="text-md font-bold">Baparekraf Developer Day 2023</p>
              <p class="italic opacity-[0.6]">May 2023</p>
              <p>Skills: Kotlin</p>
            </div>
          </div>
          {/* Baparegraf Developer Day 2022 */}
          <div class="flex my-4 gap-4">
            <img src="bdd.jpg" width="108px" />
            <div class="flex flex-col justify-center">
              <p class="text-md font-bold">Baparekraf Developer Day 2022</p>
              <p class="italic opacity-[0.6]">Apr 2022</p>
              <p>Skills: Front-End Web App</p>
            </div>
          </div>
          {/* Digitalent Scholarship */}
          <div class="flex my-4 gap-4">
            <img src="digitalent-scholarship.png" width="108px" />
            <div class="flex flex-col justify-center">
              <p class="text-md font-bold">Digitalent Scholarship</p>
              <p class="italic opacity-[0.6]">Jul 2021 - Oct 2021</p>
              <p>Skills: Junior Web Development</p>
            </div>
          </div>
        </div>
        {/* Experiences */}
        <div>
          <p id="experiences" class="font-bold text-xl my-4">Experiences</p>
          {/* PT. Lintasarta Duri */}
          <div class="flex my-4 gap-4 items-center">
            <img
              src="lintasarta.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md font-bold">PT. Lintasarta Duri</p>
                <p class="italic opacity-[0.6]">
                  Feb 2023 - Jul 2023 | <span class="font-bold">Intern</span>
                </p>
              </div>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Tech stack</span>: Flutter, Node.js
                </p>
                <p>
                  <span class="font-bold">Project</span>: Vehicle Condition
                  Assessment (Android App)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div>
          <p id="projects" class="text-xl my-4">
            <span class="font-bold">Projects</span> |{" "}
            <span class="font-bold" style={{ "color": "#267EAF" }}>
              <a class="link-blue" href="#">see all</a>
            </span>
          </p>
          {/* Aplikasi Belajar Matematika | Android */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="teaching.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Aplikasi Belajar Matematika</span> |
                  {" "}
                  <span class="font-bold">Android</span>
                </p>
                <p class="italic opacity-[0.6]">Feb 2023 - Aug 2023</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Thesis Project</span> on{" "}
                <span class="font-bold">Politeknik Negeri Bengkalis</span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Dart, Typescript
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: Flutter, Next.js,
                  Firebase
                </p>
              </div>
            </div>
          </div>
          {/* Vehicle Condition Assessment | Android and Server */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="lintasarta.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Vehicle Condition Assessment</span> |
                  {" "}
                  <span class="font-bold">Android and Server</span>
                </p>
                <p class="italic opacity-[0.6]">Feb 2023 - Jul 2023</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Android App Project</span> from{" "}
                <span class="font-bold">PT. Lintasarta Duri</span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Dart, Typescript,
                  Javascript
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: Flutter, Node.js,
                  SQLite, Server API, JSON
                </p>
              </div>
            </div>
          </div>
          {/* BeTraveled | Android */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="be_traveled.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">BeTraveled</span> |{" "}
                  <span class="font-bold">Android</span>
                </p>
                <p class="italic opacity-[0.6]">May 2022 - Jun 2022</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Capstone Project</span> on{" "}
                <span class="font-bold">SIB Kampus Merdeka with Dicoding</span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Dart
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: Flutter, Firebase,
                  SQLite, JSON
                </p>
              </div>
            </div>
          </div>
          {/* Ditonton | Android */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="dicoding.jpg"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Ditonton</span> |{" "}
                  <span class="font-bold">Android</span>
                </p>
                <p class="italic opacity-[0.6]">Apr 2022</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Submission</span> on{" "}
                <span class="font-bold">Menjadi Flutter Developer Expert</span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Dart
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: Flutter, SQLite,
                  Firebase, JSON, CI CD, CodeMagic
                </p>
              </div>
            </div>
          </div>
          {/* Resto | Web */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="spoon.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Resto</span> |{" "}
                  <span class="font-bold">Web</span>
                </p>
                <p class="italic opacity-[0.6]">Mar 2023</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Submission</span> on{" "}
                <span class="font-bold">
                  Menjadi Front-End Web Developer Expert
                </span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Dart, Typescript,
                  Javascript
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: Flutter, Node.js,
                  SQLite, Server API, JSON
                </p>
              </div>
            </div>
          </div>
          {/* Catatanku | Web */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="note.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Catatanku</span> |{" "}
                  <span class="font-bold">Web</span>
                </p>
                <p class="italic opacity-[0.6]">Oct 2023</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Submission</span> on{" "}
                <span class="font-bold">
                  Belajar Membuat Aplikasi Web dengan React
                </span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Javascript
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: React.js, Node.js
                </p>
              </div>
            </div>
          </div>
          {/* Bookshelf | Server */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="dicoding.jpg"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Bookshelf</span> |{" "}
                  <span class="font-bold">Server</span>
                </p>
                <p class="italic opacity-[0.6]">Apr 2022</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Submission</span> on{" "}
                <span class="font-bold">
                  Belajar Membuat Aplikasi Back-End untuk Pemula
                </span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Javascript
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: Node.js
                </p>
              </div>
            </div>
          </div>
          {/* Toko Laptop | Android */}
          <div class="flex my-8 gap-4 items-center">
            <img
              src="laptop.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">Toko Laptop</span> |{" "}
                  <span class="font-bold">Android</span>
                </p>
                <p class="italic opacity-[0.6]">Dec 2021</p>
              </div>
              <p class="mt-2">
                <span class="font-bold">Submission</span> on{" "}
                <span class="font-bold">
                  Belajar Membuat Aplikasi Android untuk Pemula
                </span>
              </p>
              <div class="mt-2">
                <p>
                  <span class="font-bold">Language</span>: Kotlin, XML
                </p>
                <p>
                  <span class="font-bold">Tech Stack</span>: Android Studio
                </p>
              </div>
            </div>
          </div>
          <div class="w-full text-center">
            <a href="#" class="link-blue font-bold">See all projects</a>
          </div>
        </div>
        {/* Certificates Highlight */}
        <div>
          <p id="certificates" class="text-xl my-4">
            <span class="font-bold">Certificates Highlight</span> |{" "}
            <span class="font-bold" style={{ "color": "#267EAF" }}>
              <a class="link-blue" href="#">see all</a>
            </span>
          </p>
          {/* Multi-Platform and Back End */}
          <div class="flex my-4 gap-4">
            <img
              src="kampus-merdeka.png"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-center">
              <p class="text-md font-bold">Multi-Platform and Back End</p>
              <p>SIB Kampus Medeka with Dicoding</p>
            </div>
          </div>
          {/* Menjadi Flutter Developer Expert */}
          <div class="flex my-4 gap-4">
            <img
              src="dicoding.jpg"
              class="rounded-full"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">
                    Menjadi Flutter Developer Expert
                  </span>
                </p>
                <p class="italic opacity-[0.6]">Apr 2022 - Apr 2025</p>
              </div>
              <div>
                <p>Dicoding Academy</p>
                <a
                  class="link-blue-white"
                  style={{ "display": "block", "width": "max-content" }}
                  href="#"
                >
                  <p>see certificate</p>
                </a>
              </div>
            </div>
          </div>
          {/* Menjadi Front-End Web Developer Expert */}
          <div class="flex my-4 gap-4">
            <img
              src="dicoding.jpg"
              class="rounded-full"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">
                    Menjadi Front-End Web Developer Expert
                  </span>
                </p>
                <p class="italic opacity-[0.6]">Mar 2023 - Mar 2026</p>
              </div>
              <div>
                <p>Dicoding Academy</p>
                <a
                  class="link-blue-white"
                  style={{ "display": "block", "width": "max-content" }}
                  href="#"
                >
                  <p>see certificate</p>
                </a>
              </div>
            </div>
          </div>
          {/* Belajar Membuat Aplikasi Android untuk Pemula */}
          <div class="flex my-4 gap-4">
            <img
              src="dicoding.jpg"
              class="rounded-full"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">
                    Belajar Membuat Aplikasi Android untuk Pemula
                  </span>
                </p>
                <p class="italic opacity-[0.6]">Dec 2021 - Dec 2024</p>
              </div>
              <div>
                <p>Dicoding Academy</p>
                <a
                  class="link-blue-white"
                  style={{ "display": "block", "width": "max-content" }}
                  href="#"
                >
                  <p>see certificate</p>
                </a>
              </div>
            </div>
          </div>
          {/* Belajar Membuat Aplikasi Web dengan React */}
          <div class="flex my-4 gap-4">
            <img
              src="dicoding.jpg"
              class="rounded-full"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">
                    Belajar Membuat Aplikasi Web dengan React
                  </span>
                </p>
                <p class="italic opacity-[0.6]">Oct 2023 - Oct 2026</p>
              </div>
              <div>
                <p>Dicoding Academy</p>
                <a
                  class="link-blue-white"
                  style={{ "display": "block", "width": "max-content" }}
                  href="#"
                >
                  <p>see certificate</p>
                </a>
              </div>
            </div>
          </div>
          {/* BelBelajar Membuat Aplikasi Back-End untuk Pemula */}
          <div class="flex my-4 gap-4">
            <img
              src="dicoding.jpg"
              class="rounded-full"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">
                    BelBelajar Membuat Aplikasi Back-End untuk Pemula
                  </span>
                </p>
                <p class="italic opacity-[0.6]">Apr 2022 - Apr 2025</p>
              </div>
              <div>
                <p>Dicoding Academy</p>
                <a
                  class="link-blue-white"
                  style={{ "display": "block", "width": "max-content" }}
                  href="#"
                >
                  <p>see certificate</p>
                </a>
              </div>
            </div>
          </div>
          {/* Memulai Pemrograman Dengan Python */}
          <div class="flex my-4 gap-4" style={{ "opacity": "60%" }}>
            <img
              src="dicoding.jpg"
              class="rounded-full"
              style={{ "width": "108px" }}
            />
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-md">
                  <span class="font-bold">
                    Memulai Pemrograman Dengan Python
                  </span>
                </p>
                <p class="italic opacity-[0.6]">Oct 2020 - Oct 2023</p>
              </div>
              <div>
                <p>Dicoding Academy</p>
                <a
                  class="link-blue-white"
                  style={{ "display": "block", "width": "max-content" }}
                  href="#"
                >
                  <p>see certificate</p>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full text-center">
            <a href="#" class="link-blue font-bold">See all certificates</a>
          </div>
        </div>
        <div>
          <p id="contact" class="text-xl mt-4 font-bold">Contact</p>
          <p class="text-md mb-4 italic opacity-[0.6]">
            feel free to contact me
          </p>
          <div>
            <p>
              <span
                class="font-bold"
                style={{ "width": "80px", "display": "inline-block" }}
              >
                Gmail
              </span>{" "}
              : <a href="mailto:ulazmi41@gmail.com">ulazmi41@gmail.com</a>
            </p>
            <p>
              <span
                class="font-bold"
                style={{ "width": "80px", "display": "inline-block" }}
              >
                GitHub
              </span>{" "}
              : <a href="https://www.github.com/ululazmi41">ululazmi41</a>
            </p>
            <p>
              <span
                class="font-bold"
                style={{ "width": "80px", "display": "inline-block" }}
              >
                LinkedIn
              </span>{" "}
              : <a href="https://www.linkedin.com/in/ulul-azmi-03a809215/">Ulul Azmi</a>
            </p>
            <p>
              <span
                class="font-bold"
                style={{ "width": "80px", "display": "inline-block" }}
              >
                X/Twitter
              </span>{" "}
              : <a href="https://twitter.com/ululazmi41">@ululazmi41</a>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8"></div>
    </>
  );
}
