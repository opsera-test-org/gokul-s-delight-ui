import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code2, Layers, Zap, Github, Linkedin, Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const skills = [
  { icon: Code2, title: "Full-Stack Dev", desc: "React, Node.js, TypeScript — building end-to-end experiences." },
  { icon: Layers, title: "System Design", desc: "Scalable architectures that grow with your product." },
  { icon: Zap, title: "Performance", desc: "Optimized for speed, accessibility, and user delight." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-xl font-display font-bold text-gradient">Gokul</span>
          <div className="flex items-center gap-5">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-sm font-medium tracking-widest uppercase text-primary"
          >
            Welcome to my space
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-7xl font-display font-bold leading-tight tracking-tight"
          >
            Hey, I'm{" "}
            <span className="text-gradient">Gokul</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Builder, thinker, and creator crafting digital experiences
            that are fast, beautiful, and meaningful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-shadow"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28">
        <div className="container max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-3xl sm:text-4xl font-display font-bold"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mt-6 text-muted-foreground leading-relaxed text-lg"
          >
            I'm a passionate developer who loves turning ideas into real products. 
            With a keen eye for design and a deep love for clean code, I build 
            applications that users enjoy and teams can maintain. Every project 
            is an opportunity to learn something new and push boundaries.
          </motion.p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 bg-secondary/30">
        <div className="container">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center text-3xl sm:text-4xl font-display font-bold mb-16"
          >
            What I <span className="text-gradient">Do</span>
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:glow-shadow"
              >
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28">
        <div className="container max-w-2xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-3xl sm:text-4xl font-display font-bold"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mt-4 text-muted-foreground text-lg"
          >
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mt-10 flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="rounded-full border border-border p-4 text-muted-foreground transition-all hover:text-primary hover:border-primary/40 hover:glow-shadow"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gokul. Built with ✦ Lovable.
        </div>
      </footer>
    </div>
  );
};

export default Index;
