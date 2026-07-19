"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { Strong } from "gsap";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    let typedInstance = null;

    if (el.current) {
      typedInstance = new Typed(el.current, {
        strings: [
          "Web Developer",
          "Aspiring Software Developer",
          "Associate Student Ambassador @ Microsoft",
          "MERN Stack Developer",
          "GATE DA Aspirant",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });
    }

    return () => {
      if (typedInstance) typedInstance.destroy();
    };
  }, []);

  return (
    <main>

      <section className="home" id="home">
        <div className="home-content">
          <p className="eyebrow">Portfolio / 2026</p>
          <h3 className="greeting">Hello, it&apos;s me -</h3>
          <h1 className="name">Aaradhya Garg</h1>
          <h3 className="subtitle">
            And I&apos;m a <span ref={el} className="text"></span>
          </h3>
          <p className="description">
            Web developer and aspiring software developer with hands-on experience across the MERN stack and C++. Associate Student Ambassador at Microsoft, I love building products, hosting tech events, and preparing for GATE DA alongside it all - and yes, I play chess too.
          </p>

          <div className="hero-focus">
            <span className="focus-label">Current focus</span>
            <strong>Building full-stack projects, hosting Microsoft tech events, and prepping for GATE DA.</strong>
            <p>Comfortable switching between writing code, hosting a room full of developers, and solving DSA problems.</p>
          </div>

          <div className="hero-badges">
            <span>MERN Stack</span>
            <span>C++ &amp; DSA</span>
            <span>Student Ambassador @ Microsoft</span>
          </div>

          <div className="hero-stats">
            <div>
              <strong>3+</strong>
              <span>Projects built</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Major tech events hosted</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Speaker session (AI &amp; Copilot Summit)</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="https://main-lime-mrfqmken.edgeone.dev/Aaradhya04082004.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              View Resume
            </a>
            <a href="#contact" className="ghost-btn">
              Let&apos;s Talk
            </a>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/fullstackdeveloperaaradhya/" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/Aaradhya0408" aria-label="GitHub"><i className='bx bxl-github'></i></a>
            <a href="mailto:aaradhyagarg04@gmail.com" aria-label="Email"><i className='bx bx-envelope'></i></a>
          </div>
        </div>

        <div className="home-img-container">
          <div className="portrait-card">
            <Image
              src="/aaradhya.jpg"
              alt="Aaradhya Garg"
              className="profile-img"
              width={500}
              height={500}
              priority
            />
            <div className="portrait-caption">
              <strong>Developer, host, and lifelong learner</strong>
             
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>MERN Stack</span>
          <span>C++ &amp; DSA</span>
          <span>GATE DA Prep</span>
          <span>Event Hosting</span>
          <span>Public Speaking</span>
          <span>Chess</span>
          <span>MERN Stack</span>
          <span>C++ &amp; DSA</span>
          <span>GATE DA Prep</span>
          <span>Event Hosting</span>
          <span>Public Speaking</span>
          <span>Chess</span>
        </div>
      </div>

      <section className="about" id="about">
        <div className="about-img">
          <div className="img-box">
            <Image
              src="/aaradhya.jpg"
              alt="Aaradhya Garg"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">01 - About</span>
          <h2 className="heading">The <span>person</span> behind the projects</h2>
          <h3>Web Developer &amp; Aspiring Software Developer</h3>
          <p>
            I&apos;m a web developer working across the MERN stack and C++, with a growing interest in building
            products that actually get used. As an Associate Student Ambassador at Microsoft, I&apos;ve helped
            organize and host tech events that bring developers, speakers, and communities together.
          </p>
          <p>
            Alongside development work, I&apos;m preparing for GATE DA - so a lot of my time also goes into DSA,
            OS, DBMS, and CN fundamentals. When I&apos;m not coding or organizing events, I&apos;m usually playing chess.
          </p>

          <div className="about-callout">
            <span>What I bring</span>
            <p>A mix of hands-on development, community building, and the discipline of consistent DSA/GATE prep.</p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h4>3+</h4>
              <p>Projects Built</p>
            </div>
            <div className="stat-item">
              <h4>2</h4>
              <p>Events Hosted/Spoken At</p>
            </div>
          </div>

          <a href="#" className="btn-box">Read More</a>
        </div>
      </section>

      <section className="showcase" id="showcase">
        <span className="section-tag">02 - Showcase</span>
        <h2 className="heading">Events, roles &amp; <span>recognition</span></h2>

        <div className="showcase-section">
          <h3 className="sub-heading"><i className='bx bx-calendar-event'></i> Key Events</h3>
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="card-content">
                <h4>GitHub Copilot Dev Days [IGNITE]</h4>
                <p>Hosted at the Microsoft Office, Gurugram - months of planning came together with a panel covering Voice AI, Cyber Resilience 2026, and top AI tools to master.</p>
                <span className="badge">Host / Organizer</span>
              </div>
            </div>
            <div className="showcase-card">
              <div className="card-content">
                <h4>AI and Copilot Summit, Gurugram</h4>
                <p>Invited speaker - delivered a session on &quot;Explore AI and Copilot: Empowering the Next Generation of Developers.&quot;</p>
                <span className="badge">Speaker</span>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-section">
          <h3 className="sub-heading"><i className='bx bx-certification'></i> Roles</h3>
          <div className="showcase-grid">
            <div className="cert-card">
              <i className='bx bxs-award'></i>
              <div>
                <h4>Associate Student Ambassador</h4>
                <p>Microsoft | Ongoing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-section">
          <h3 className="sub-heading"><i className='bx bx-trophy'></i> Highlights</h3>
          <div className="showcase-grid">
            <div className="award-box">
              <i className='bx bx-trophy award-icon'></i>
              <h4>GitHub Copilot Dev Days - IGNITE</h4>
              <p>Led the end-to-end hosting of a Microsoft event, from logistics to securing an expert speaker panel.</p>
            </div>
            <div className="award-box">
              <i className='bx bxs-medal award-icon'></i>
              <h4>AI &amp; Copilot Summit Speaker</h4>
              <p>Presented on AI and Copilot to a room of developers and students in Gurugram.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <span className="section-tag">03 - Recognition</span>
        <h2 className="heading">People I&apos;ve <span>worked with</span></h2>
        <div className="testimonials-container">
          <div className="testimonial-box">
            <div className="testimonial-content">
              <i className='bx bxs-quote-left quote-icon'></i>
              <p>
                Guided and supported throughout the planning and execution of the GitHub Copilot Dev Days event -
                from logistics to high-level strategy.
              </p>
              <div className="user-info">
                <div className="avatar avatar-1">RP</div>
                <div className="user-details">
                  <h4>Ramit Paul</h4>
                  <span>Mentor &amp; Event Guide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="testimonial-content">
              <i className='bx bxs-quote-left quote-icon'></i>
              <p>
                Part of the expert panel at GitHub Copilot Dev Days [IGNITE], sharing insights on
                Voice AI opportunities and challenges in India.
              </p>
              <div className="user-info">
                <div className="avatar avatar-2">SG</div>
                <div className="user-details">
                  <h4>Shashwat Gupta</h4>
                  <span>Panelist, IIT Roorkee Alumnus (ex-Microsoft/Yahoo)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <span className="section-tag">04 - Projects</span>
        <h2 className="heading">Things I&apos;ve <span>built</span></h2>
        <div className="experience-container">
          <div className="experience-column">
            <div className="experience-box">
              <div className="experience-content">
                <div className="year">
                  <i className='bx bxs-calendar'></i> Project
                </div>
                <h3>Checkmate</h3>
                <p>
                  A chess-focused build combining game logic with clean interaction design - built while
                  balancing a genuine love for the game with hands-on coding practice.
                </p>
              </div>
            </div>

            <div className="experience-box">
              <div className="experience-content">
                <div className="year">
                  <i className='bx bxs-calendar'></i> Project
                </div>
                <h3>Wanderlust</h3>
                <p>
                  A full-stack MERN application built to explore real-world CRUD, authentication, and
                  deployment workflows end to end.
                </p>
              </div>
            </div>

            <div className="experience-box">
              <div className="experience-content">
                <div className="year">
                  <i className='bx bxs-calendar'></i> Project
                </div>
                <h3>Smart Interviewer</h3>
                <p>
                  A tool built to help developers practice and prepare for interviews - combining
                  problem-solving practice with a structured, guided experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise" id="expertise">
        <span className="section-tag">05 - How I help</span>
        <h2 className="heading">Things I&apos;m known to do <span>well</span></h2>
        <div className="expertise-container">
          {[
            { label: "Full-Stack Web Development (MERN)", icon: "bx bx-rocket" },
            { label: "C++ &amp; Data Structures / Algorithms", icon: "bx bx-git-branch" },
            { label: "Event Hosting &amp; Community Building", icon: "bx bx-group" },
            { label: "Public Speaking on AI &amp; Copilot", icon: "bx bx-cog" },
            { label: "GATE DA Preparation", icon: "bx bx-trending-up" },
            { label: "Chess &amp; Strategic Thinking", icon: "bx bx-layer" },
          ].map(({ label, icon }, index) => (
            <div key={index} className="expertise-box">
              <i className={icon}></i>
              <h3>{label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="skills" id="skills">
        <span className="section-tag">06 - Toolkit</span>
        <h2 className="heading">The <span>tools</span> on my desk</h2>
        <div className="skills-row">
          <div className="skills-column">
            <div className="skill-group">
              <h3 className="title"><i className='bx bx-code-alt'></i> Languages</h3>
              <p>C++, JavaScript, HTML/CSS</p>
            </div>
            <div className="skill-group">
              <h3 className="title"><i className='bx bx-server'></i> MERN Stack</h3>
              <p>MongoDB, Express.js, React, Node.js</p>
            </div>
          </div>
          <div className="skills-column">
            <div className="skill-group">
              <h3 className="title"><i className='bx bx-task'></i> GATE DA Prep</h3>
              <p>DSA, Operating Systems, DBMS, Computer Networks</p>
            </div>
            <div className="skill-group">
              <h3 className="title"><i className='bx bx-cloud'></i> Tools</h3>
              <p>Git, GitHub, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <span className="section-tag">07 - Say hello</span>
        <h2 className="heading">Got a project? Let&apos;s <span>talk</span></h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let&apos;s Connect</h3>
            <p>Open to web development opportunities, collaborations, and interesting tech events.</p>

            <div className="contact-details">
              <div className="detail-item">
                <i className='bx bxs-envelope'></i>
                <span>aaradhyagarg04@gmail.com</span>
              </div>
              <div className="detail-item">
                <i className='bx bxs-map'></i>
                <span>Ghaziabad, India</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/fullstackdeveloperaaradhya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href="https://github.com/Aaradhya0408" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className='bx bxl-github'></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className='bx bxl-twitter'></i>
              </a>
            </div>
          </div>

          {isMounted ? (
            <form action="#">
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea cols="30" rows="10" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-box">Send Message</button>
            </form>
          ) : (
            <div style={{ color: "var(--terracotta)", fontStyle: "italic", fontSize: "0.9rem" }}>
              Loading contact form...
            </div>
          )}
        </div>
      </section>

    </main>
  );
}