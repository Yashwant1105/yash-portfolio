import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { mySocials } from "../constants";

const supabaseUrl = "https://wvkygizejnwbsxlkggsj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2a3lnaXplam53YnN4bGtnZ3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMDgwOTUsImV4cCI6MjA3MjU4NDA5NX0.ukvOXNRfLupAqFgZLOQIS2gOylsTdp1x2i3nnCiUjkE";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Footer = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        // Check if user already counted
        const alreadyVisited = localStorage.getItem("visited");
        
        // Fetch current count
        let { data, error } = await supabase
          .from("visitors")
          .select("id, count")
          .limit(1)
          .single();
        if (error) throw error;

        let newCount = data.count;

        // Only increment if not visited
        if (!alreadyVisited) {
          newCount += 1;
          const { error: updateError } = await supabase
            .from("visitors")
            .update({ count: newCount })
            .eq("id", data.id);
          if (updateError) throw updateError;

          // Mark as visited
          localStorage.setItem("visited", "true");
        }

        setVisitors(newCount);
      } catch (err) {
        console.error("Error updating visitor count:", err);
      }
    };

    incrementVisitor();
  }, []);

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex gap-4 divide-x divide-neutral-600">
        <a href="/terms.html" className="pr-4 hover:text-white">
          Terms & Conditions
        </a>
        <a href="/privacy.html" className="pl-4 hover:text-white">
          Privacy Policy
        </a>
      </div>

      <div className="flex items-center gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
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
