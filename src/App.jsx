import {
  About,
  Certifications,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
  SocialMedia,
  ProfilePicture,
} from "./components";

function App() {
  return (
    <>
      <ProfilePicture />
      <SocialMedia />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
