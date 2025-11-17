import { Phone, Mail } from "lucide-react";
import { astrologerConfig } from "@/config/astrologer";

const TopInfoBar = () => {
  return (
    <div
      className="w-full py-3 px-4"
      style={{
        backgroundColor: "hsl(247 64% 18%)",
        color: "hsl(42 19% 95%)",
      }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Phone */}
        <a
          href={`tel:${astrologerConfig.phone}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone className="h-5 w-5" />
          <span className="text-sm font-medium">{astrologerConfig.phone}</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${astrologerConfig.email}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail className="h-5 w-5" />
          <span className="text-sm font-medium">{astrologerConfig.email}</span>
        </a>
      </div>
    </div>
  );
};

export default TopInfoBar;
