import { NavLink, useLocation } from "react-router-dom";
import {
   Home,
   Folder,
   User,
   Mail,
   LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
   { icon: Home, label: "Home", to: "/" },
   { icon: Folder, label: "Projects", to: "/projects" },
   { icon: User, label: "About", to: "/about" },
   { icon: Mail, label: "Contact", to: "/contact" },
   { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
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
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3 }}
               className=" "
            >
               <div
                  className="
              flex items-center gap-6
              px-3 py-2
              rounded-full
              backdrop-blur-md
            shadow-xl"
               >
                  {navItems.map((item) => {
                     const Icon = item.icon;
                     const isActive =
                        location.pathname === item.to ||
                        location.pathname.startsWith(item.to);

                     return (
                        <NavLink
                           key={item.label}
                           to={item.to}
                           className="group relative"
                        >
                           <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className={`
                      p-2 rounded-full
                      transition-colors
                      ${isActive
                                    ? "bg-primary/20 text-primary"
                                    : "text-muted-foreground hover:text-primary hover:bg-white/10"
                                 }
                    `}
                           >
                              <Icon className="w-5 h-5" />
                           </motion.div>

                           {/* Tooltip */}
                           <span
                              className="
                      pointer-events-none
                      absolute -bottom-9 left-1/2 -translate-x-1/2
                      scale-0 group-hover:scale-100
                      rounded-md bg-black px-2 py-1
                      text-xs text-white
                      transition-transform
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
