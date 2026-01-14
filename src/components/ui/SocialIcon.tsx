import * as React from "react";

type SocialIconProps = {
   href: string;
   label: string;
   children: React.ReactNode;
};

const SocialIcon = ({
   href,
   label,
   children,
}: SocialIconProps) => {
   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         aria-label={label}
         className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
      >

         {/* Icon */}
         <div
            className="
          relative z-10
          flex items-center justify-center
          transition-transform duration-300
          group-hover:scale-110
        "
         >
            {children}
         </div>

         {/* Tooltip */}
         <span
            className="
          pointer-events-none
          absolute -bottom-9 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100
          transition-transform duration-200
          rounded-md bg-black px-2 py-1
          text-xs text-white whitespace-nowrap
        "
         >
            {label}
         </span>
      </a>
   );
};

export { SocialIcon };
