"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, User, Wrench, Briefcase, FolderGit2, Award, Mail, 
  Copy, CheckCircle2, MessageCircle, Code, Link, FileText
} from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    const openMenu = () => setOpen(true);

    document.addEventListener("keydown", down);
    document.addEventListener("open-command-palette", openMenu);
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("open-command-palette", openMenu);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("jasimafridi1388@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-neutral-800 bg-[#0a0a0a] shadow-2xl flex flex-col"
          >
            <Command className="flex flex-col overflow-hidden bg-transparent text-white" loop>
              
              {/* Developer-style search input header */}
              <div className="flex items-center border-b border-neutral-800 px-4">
                <span className="text-amber-500 font-mono text-lg font-bold mr-3 select-none">
                  &gt;
                </span>
                <Command.Input
                  autoFocus
                  placeholder="Search files, sections, or commands..."
                  className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm font-mono outline-none placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-neutral-800 bg-neutral-900 px-2 py-1 font-mono text-[10px] font-medium text-neutral-500 select-none">
                  ESC
                </kbd>
              </div>

              {/* List items */}
              <Command.List className="max-h-96 overflow-y-auto overflow-x-hidden p-2">
                <Command.Empty className="py-8 text-center text-sm font-mono text-neutral-500">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-mono text-neutral-500">
                  <Item icon={Home} text="Home" onSelect={() => runCommand(() => scrollTo("home"))} />
                  <Item icon={User} text="About" onSelect={() => runCommand(() => scrollTo("about"))} />
                  <Item icon={Wrench} text="Skills" onSelect={() => runCommand(() => scrollTo("skills"))} />
                  <Item icon={Briefcase} text="Experience" onSelect={() => runCommand(() => scrollTo("experience"))} />
                  <Item icon={FolderGit2} text="Projects" onSelect={() => runCommand(() => scrollTo("projects"))} />
                  <Item icon={Award} text="Certifications" onSelect={() => runCommand(() => scrollTo("certifications"))} />
                  <Item icon={Mail} text="Contact" onSelect={() => runCommand(() => scrollTo("contact"))} />
                </Command.Group>

                <Command.Separator className="my-1 h-px bg-neutral-800" />

                <Command.Group heading="Pages" className="px-2 py-1.5 text-xs font-mono text-neutral-500">
                  <Item icon={FileText} text="Dev Log / Blog" onSelect={() => runCommand(() => router.push("/blog"))} />
                  <Item icon={FolderGit2} text="Case Studies" onSelect={() => runCommand(() => router.push("/projects/coal-mining"))} />
                </Command.Group>

                <Command.Separator className="my-1 h-px bg-neutral-800" />

                <Command.Group heading="Links & Actions" className="px-2 py-1.5 text-xs font-mono text-neutral-500">
                  <Item icon={copied ? CheckCircle2 : Copy} text={copied ? "Email copied!" : "Copy Email Address"} onSelect={() => runCommand(copyEmail)} />
                  <Item icon={MessageCircle} text="Message on WhatsApp" onSelect={() => runCommand(() => window.open("https://wa.me/923000949457", "_blank"))} />
                  <Item icon={Code} text="Visit GitHub Profile" onSelect={() => runCommand(() => window.open("https://github.com/mjasim1388", "_blank"))} />
                  <Item icon={Link} text="Visit LinkedIn" onSelect={() => runCommand(() => window.open("https://linkedin.com/in/mjasim1388", "_blank"))} />
                </Command.Group>
              </Command.List>

              {/* Developer-style Footer */}
              <div className="border-t border-neutral-800 p-3 flex items-center justify-between text-[10px] font-mono text-neutral-500 bg-neutral-900/30">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">↑↓</kbd> to navigate</span>
                  <span className="flex items-center gap-1.5"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">↵</kbd> to select</span>
                </div>
                <span className="flex items-center gap-1.5"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">esc</kbd> to close</span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helper component for each item in the list
function Item({ icon: Icon, text, onSelect }: { icon: any, text: string, onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm text-neutral-300 aria-selected:bg-neutral-800/60 aria-selected:text-white transition-colors"
    >
      <Icon className="h-4 w-4 text-neutral-500 aria-selected:text-amber-500 transition-colors" />
      <span className="font-mono">{text}</span>
    </Command.Item>
  );
}