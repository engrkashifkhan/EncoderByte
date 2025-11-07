import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar
        navLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "How We Work", href: "/how-we-work" },
          { label: "Services", dropdown: true },
          { label: "Projects", href: "/projects" },
          { label: "Career", href: "/career" },
          { label: "Blog", href: "/blog" },
        ]}
        services={[
          { title: "Web Development", desc: "We create responsive, modern websites that deliver exceptional user experiences and drive business growth." },
          { title: "UI/UX Design", desc: "Crafting intuitive and beautiful interfaces that enhance user engagement and satisfaction." },
          { title: "App Development", desc: "Building powerful mobile applications for iOS and Android platforms with cutting-edge features." },
          { title: "AI Solutions", desc: "Implementing artificial intelligence solutions to automate processes and provide intelligent insights." },
        ]}
      />
    </>
  );
}
