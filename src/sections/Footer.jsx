import { useEffect, useState } from "react";
import axios from "axios";
import { mySocials } from "../constants";

const Footer = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const fetchUniqueVisitors = async () => {
      try {
        const response = await axios.get(
          "https://counterapi.dev/v2/workspaces/yash-portfolio/unique-visitors-ys10/increment"
        );
        setVisitors(response.data.value);
      } catch (error) {
        console.error("Error fetching unique visitor count:", error);
      }
    };

    fetchUniqueVisitors();
  }, []);

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex gap-4 divide-x divide-neutral-600">
  <a href="/terms.html" className="pr-4 hover:text-white">Terms & Conditions</a>
  <a href="/privacy.html" className="pl-4 hover:text-white">Privacy Policy</a>
</div>

      <div className="flex items-center gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}

        <div className="ml-1 px-2 py-0.5 bg-neutral-800 rounded text-white text-xs">
          {visitors} visitors
        </div>
      </div>

      <p>© 2025 Yash. All rights reserved.</p>
    </section>
  );
};

export default Footer;
