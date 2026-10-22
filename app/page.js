"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Typed from "typed.js";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    let typedInstance = null;

    if (el.current) {
      typedInstance = new Typed(el.current, {
        strings: [
          "Microsoft Student Ambassador",
          "GIS Developer",
          "Full Stack Developer",
          "Poet",
          "AI & ML Enthusiast",
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
            B.Tech CSE (AI &amp; ML) student and Microsoft Student Ambassador with hands-on experience as a GIS Developer and Full Stack Developer. Skilled in Cesium.js, JavaScript, React.js, Node.js, MongoDB, and Python, with projects in 3D Web GIS, computer vision (YOLOv8), and creative writing. I lead developer communities, host technical events, and build impactful digital products.
          </p>

          <div className="hero-focus">
            <span className="focus-label">Current focus</span>
            <strong>Hosting community events, building GIS-driven applications, and creating meaningful work across tech and storytelling.</strong>
            <p>Comfortable switching between spatial data design, full-stack development, public speaking, and poetry.</p>
          </div>

          <div className="hero-badges">
            <span>Microsoft Student Ambassador</span>
            <span>GIS Developer</span>
            <span>Full Stack Developer</span>
          </div>

          <div className="hero-stats">
            <div>
              <strong>9+</strong>
              <span>Technical events hosted</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Dev Days highlight event</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Month internship experience</span>
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
            <a href="https://www.linkedin.com/in/fullstackdeveloperaaradhya/" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/Aaradhya0408" aria-label="GitHub"><i className="bx bxl-github"></i></a>
            <a href="mailto:aaradhyagarg04@gmail.com" aria-label="Email"><i className="bx bx-envelope"></i></a>
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
              <strong>Developer, host, poet, and lifelong learner</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Microsoft Student Ambassador</span>
          <span>GIS</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Cesium.js</span>
          <span>Poetry</span>
          <span>AI &amp; ML</span>
          <span>Microsoft Student Ambassador</span>
          <span>GIS</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Poetry</span>
        </div>
      </div>

      <section className="about" id="about">
        <div className="about-img">
          <div className="img-box">
            <Image src="/aaradhya.jpg" alt="Aaradhya Garg" width={500} height={500} />
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">01 - About</span>
          <h2 className="heading">The <span>person</span> behind the projects</h2>
          <h3>Microsoft Student Ambassador &amp; Full Stack Developer</h3>
          <p>
            I&apos;m a B.Tech CSE (AI &amp; ML) student with a strong focus on full-stack development and geospatial technology. As a Microsoft Student Ambassador, I have helped organize and lead technical events, mentor students, and build a learning-first developer community.
          </p>
          <p>
            I began as a GIS Developer &amp; Full Stack Developer Intern at Geocyber Systems LLC and have gained hands-on experience delivering 3D web mapping applications, spatial visualization interfaces, and frontend solutions for real-world use cases.
          </p>
          <p>
            Beyond tech, I write poems and have shared my work in projects like <strong>Amar Ujala</strong> and <strong>Mere Lafaz</strong>, reflecting my love for expression, creativity, and storytelling.
          </p>

          <div className="about-callout">
            <span>What I bring</span>
            <p>A mix of technical execution, community leadership, public speaking, and creative thinking across web, GIS, and AI spaces.</p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h4>9+</h4>
              <p>Events Hosted</p>
            </div>
            <div className="stat-item">
              <h4>3D</h4>
              <p>GIS Projects</p>
            </div>
          </div>

          <a href="#" className="btn-box">Read More</a>
        </div>
      </section>

      <section className="showcase" id="showcase">
        <span className="section-tag">02 - Showcase</span>
        <h2 className="heading">Events, roles &amp; <span>recognition</span></h2>

        <div className="showcase-section">
          <h3 className="sub-heading"><i className="bx bx-calendar-event"></i> Key Events</h3>
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="card-content">
                <h4>Dev Days</h4>
                <p>Hosted on 26 September 2026 with an enthusiastic audience, covering AI, developer learning, and community-driven innovation.</p>
                <span className="badge">Host / Organizer</span>
              </div>
            </div>
            <div className="showcase-card">
              <div className="card-content">
                <h4>Dev2Hack</h4>
                <p>Spoke as a featured speaker, sharing insights on building in public, embracing AI, and navigating developer growth.</p>
                <span className="badge">Speaker</span>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-section">
          <h3 className="sub-heading"><i className="bx bx-certification"></i> Roles</h3>
          <div className="showcase-grid">
            <div className="cert-card">
              <i className="bx bxs-award"></i>
              <div>
                <h4>Microsoft Student Ambassador</h4>
                <p>Microsoft Student Ambassador Program | Ongoing</p>
              </div>
            </div>
            <div className="cert-card">
              <i className="bx bxs-award"></i>
              <div>
                <h4>GIS Developer &amp; Full Stack Developer Intern</h4>
                <p>GeoCyber Systems LLC | Aug 2026 – Present</p>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-section">
          <h3 className="sub-heading"><i className="bx bx-trophy"></i> Highlights</h3>
          <div className="showcase-grid">
            <div className="award-box">
              <i className="bx bx-trophy award-icon"></i>
              <h4>Dev Days</h4>
              <p>Led event planning, coordination, and execution for a high-impact tech community gathering.</p>
            </div>
            <div className="award-box">
              <i className="bx bxs-medal award-icon"></i>
              <h4>Dev2Hack Speaker</h4>
              <p>Shared ideas around AI, learning, and developer empowerment with an audience of learners and builders.</p>
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
              <i className="bx bxs-quote-left quote-icon"></i>
              <p>
                Guided and supported throughout the planning and execution of the Dev Days event -
                from logistics to strategy and community impact.
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
              <i className="bx bxs-quote-left quote-icon"></i>
              <p>
                Part of the expert panel at Dev2Hack, sharing ideas on AI, skills, and future-focused developer journeys.
              </p>
              <div className="user-info">
                <div className="avatar avatar-2">SG</div>
                <div className="user-details">
                  <h4>Shashwat Gupta</h4>
                  <span>Panelist, IIT Roorkee Alumnus</span>
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
                  <i className="bx bxs-calendar"></i> Project
                </div>
                <h3>Mathura–Vrindavan Pilgrimage Circuit</h3>
                <p>
                  Built a 3D GIS visualization of the pilgrimage circuit with interactive spatial layers using Cesium.js and JavaScript.
                </p>
              </div>
            </div>

            <div className="experience-box">
              <div className="experience-content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> Project
                </div>
                <h3>Real-World Object Detection</h3>
                <p>
                  Implemented object detection using YOLOv8 and Python for real-world visual recognition tasks.
                </p>
              </div>
            </div>

            <div className="experience-box">
              <div className="experience-content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> Project
                </div>
                <h3>Checkmate AI Chess</h3>
                <p>
                  Developed a web-based interactive chess game with an automated AI opponent for real-time single-player gameplay.
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
            { label: "Full-Stack Web Development", icon: "bx bx-rocket" },
            { label: "3D Web GIS & Spatial Visualization", icon: "bx bx-map" },
            { label: "Event Hosting & Community Building", icon: "bx bx-group" },
            { label: "Public Speaking on AI & Copilot", icon: "bx bx-cog" },
            { label: "Python & Computer Vision", icon: "bx bx-camera" },
            { label: "Poetry & Creative Writing", icon: "bx bx-pen" },
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
              <h3 className="title"><i className="bx bx-code-alt"></i> Languages</h3>
              <p>Python, C++, JavaScript, HTML/CSS</p>
            </div>
            <div className="skill-group">
              <h3 className="title"><i className="bx bx-server"></i> Web &amp; Database</h3>
              <p>React.js, Node.js, Express.js, MongoDB, REST APIs</p>
            </div>
          </div>
          <div className="skills-column">
            <div className="skill-group">
              <h3 className="title"><i className="bx bx-map"></i> Geospatial</h3>
              <p>Cesium.js, 3D Web Mapping, Spatial Data Integration</p>
            </div>
            <div className="skill-group">
              <h3 className="title"><i className="bx bx-cloud"></i> Tools</h3>
              <p>Git, GitHub, VS Code, GitHub Copilot</p>
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
            <p>Open to web development opportunities, collaborations, and innovative GIS or AI tech projects.</p>

            <div className="contact-details">
              <div className="detail-item">
                <i className="bx bxs-envelope"></i>
                <span>aaradhyagarg04@gmail.com</span>
              </div>
              <div className="detail-item">
                <i className="bx bxs-map"></i>
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/fullstackdeveloperaaradhya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/Aaradhya0408" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bx bxl-github"></i>
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

