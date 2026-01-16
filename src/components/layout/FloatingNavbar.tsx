import { NavLink, useLocation } from "react-router-dom";
import {
   Home,
   FolderDot,
   User,
   Mail,
   Wrench,
   BookOpen,
   ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
   { icon: Home, label: "Home", to: "/" },
   { icon: FolderDot, label: "Projects", to: "/projects" },
   { icon: User, label: "About", to: "/about" },
   { icon: Wrench, label: "Skills", to: "/skills" },
   { icon: BookOpen, label: "Experience", to: "/experience" },
   { icon: ShieldCheck, label: "Certifications", to: "/certifications" },
   { icon: Mail, label: "Contact", to: "/contact" },
];

export default function FloatingNavbar() {
   const location = useLocation();
   const [visible, setVisible] = useState(true);
   const [lastScroll, setLastScroll] = useState(0);

   useEffect(() => {
      const onScroll = () => {
         const current = window.scrollY;
         setVisible(current < lastScroll || current < 50);
         setLastScroll(current);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, [lastScroll]);

   return (
      <AnimatePresence>
         {visible && (
            <motion.nav
               initial={{ opacity: 0, y: -16 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -16 }}
               transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
               <div
                  className="
              flex items-center gap-5
              px-5 py-2
              rounded-md
              backdrop-blur-md
              bg-card/70
              border border-border
              shadow-lg
            "
               >
                  {navItems.map((item) => {
                     const Icon = item.icon;
                     const isActive =
                        location.pathname === item.to ||
                        location.pathname.startsWith(item.to);

                     return (
                        <NavLink key={item.label} to={item.to} className="group relative">
                           <div
                              className={`
                      p-2 rounded-full
                      transition-all duration-normal ease-smooth
                      ${isActive
                                    ? "bg-primary/20 text-primary"
                                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                                 }
                    `}
                           >
                              <Icon className="w-5 h-5" />
                           </div>

                           {/* Tooltip */}
                           <span
                              className="
                      pointer-events-none
                      absolute -bottom-8 left-1/2 -translate-x-1/2
                      scale-0 group-hover:scale-100
                      rounded-md bg-card px-2 py-1
                      text-xs text-muted-foreground
                      border border-border
                      transition-transform duration-fast
                    "
                           >
                              {item.label}
                           </span>
                        </NavLink>
                     );
                  })}
               </div>
            </motion.nav>
         )}
      </AnimatePresence>
   );
}
