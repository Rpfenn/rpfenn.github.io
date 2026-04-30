import { useState, useEffect } from "react";
import { LANGUAGE_COLORS } from "../constants/languageColors";

const PROJECTS = [
  {
    id: 1,
    name: "Tempo AI - An AI DJ",
    tags: ["web", "ml"],
    icon: "◈",
    languages: ["React", "Python"],
    desc: "An AI-powered DJ that can automatically mix songs, generate seamless transitions, and create custom playlists based on user preferences. Built with a React front-end and a Python back-end leveraging machine learning for our transition model and algorithms.(Senior Project with 4 members)",
    links: [
      {
        label: "Front-end Repo",
        url: "https://github.com/alexpower9/ai-dj-front-end",
      },
      {
        label: "Back-end Repo",
        url: "https://github.com/AnzilottiChristopher/AI-DJ",
      },
    ],
    year: "2025-2026",
  },
  {
    id: 2,
    name: "FanWager",
    tags: ["tool", "game", "api"],
    icon: "◉",
    languages: ["Kotlin", "SQL"],
    desc: "A mobile app that lets sports fans place wagers on their favorite teams, with real odds from various sports APIs. Built with Kotlin for Android, featuring a sleek UI, real-time odds updates, and a fun points system to keep fans engaged throughout the season. (No real money involved, simply for fun)",
    links: [
      { label: "repo", url: "https://github.com/Rpfenn/FanWager" },
    ],
    year: "2025",
  },
  {
    id: 3,
    name: "Work Organizer",
    tags: ["tool"],
    icon: "◎",
    languages: ["Python", "SQL"],
    desc: "An app that allows the user to put in tasks for classes in a calendar with ease. Keeps track of all assignments for each class in a list and a calendar view.",
    links: [{ label: "repo", url: "https://github.com/rpfenn/work-organizer" }],
    year: "2024-2025",
  },
  {
    id: 4,
    name: "Time Dynasties",
    tags: ["game"],
    icon: "◎",
    languages: ["Java"],
    desc: "An RPG game where players travel through different time periods, battling enemies in minigames, and collecting items. (Team project with 4 members)",
    links: [{ label: "repo", url: "https://github.com/ChristianKilduff/devdynasty-game" }],
    year: "2023",
  },
  {
    id: 5,
    name: "Alfred AI",
    tags: ["ml", "tool"],
    icon: "◎",
    languages: ["Python", "React"],
    desc: "(Active development)An AI-powered assistant that helps users manage tasks and automate workflows. Built with a Python back-end and a React front-end, leveraging machine learning for intelligent task recommendations.",
    links: [{ label: "repo", url: "https://github.com/Rpfenn/Alfred" }],
    year: "2026(ongoing)",
  },
  
];

// const TAGS = ["all", "web", "ml", "cli", "api", "tool", "game"];
const TAGS = ["all", "web", "api", "tool", "game"];

const TAG_COLORS = {
  web: { bg: "#0a1628", accent: "#4f9cf9", label: "WEB" },
  ml: { bg: "#140d26", accent: "#a78bfa", label: "ML" },
  cli: { bg: "#0d1f18", accent: "#34d399", label: "CLI" },
  api: { bg: "#1f0d0d", accent: "#f87171", label: "API" },
  tool: { bg: "#1a1208", accent: "#fbbf24", label: "TOOL" },
  game: { bg: "#1a0d1a", accent: "#e879f9", label: "GAME" },
};

function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => {
    setM(true);
  }, []);
  return m;
}

function Noise() {
  return (
    <svg
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.035,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

function Grid() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

function CardGlow({ color }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: 16,
        background: `radial-gradient(ellipse at 50% 0%, ${color}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const projectTags =
    project.tags && project.tags.length > 0
      ? project.tags
      : project.tag
        ? [project.tag]
        : [];
  const primaryTag = projectTags[0] || "web";
  const tc = TAG_COLORS[primaryTag] || TAG_COLORS.web;
  const projectLanguages =
    project.languages && project.languages.length > 0
      ? project.languages
      : project.lang
        ? [project.lang]
        : [];
  const delay = `${index * 80}ms`;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "22px 24px",
        borderRadius: 16,
        border: `1px solid ${hovered ? tc.accent + "55" : "rgba(255,255,255,0.07)"}`,
        background: hovered ? tc.bg : "rgba(255,255,255,0.02)",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        animationName: "fadeUp",
        animationDuration: "0.5s",
        animationTimingFunction: "cubic-bezier(0.23,1,0.32,1)",
        animationFillMode: "both",
        animationDelay: delay,
        overflow: "hidden",
      }}
    >
      {hovered && <CardGlow color={tc.accent} />}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 22,
            color: hovered ? tc.accent : "rgba(255,255,255,0.3)",
            transition: "color 0.3s",
            lineHeight: 1,
          }}
        >
          {project.icon}
        </span>
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {projectTags.map((tag) => {
            const tagColor = TAG_COLORS[tag] || TAG_COLORS.web;
            return (
              <span
                key={tag}
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: hovered
                    ? tagColor.accent + "22"
                    : "rgba(255,255,255,0.06)",
                  color: hovered ? tagColor.accent : "rgba(255,255,255,0.35)",
                  border: `1px solid ${hovered ? tagColor.accent + "44" : "rgba(255,255,255,0.08)"}`,
                  transition: "all 0.3s",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {tagColor.label}
              </span>
            );
          })}
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
            marginBottom: 6,
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.02em",
            transition: "color 0.3s",
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.6,
          }}
        >
          {project.desc}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: 14,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          {projectLanguages.map((lang) => (
            <span
              key={lang}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "2px 8px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: LANGUAGE_COLORS[lang] || "#9ca3af",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'DM Mono',monospace",
                }}
              >
                {lang}
              </span>
            </span>
          ))}
        </div>
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            fontFamily: "'DM Mono',monospace",
          }}
        >
          {project.year}
        </span>
      </div>

      {project.links?.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: hovered ? tc.accent : "rgba(255,255,255,0.45)",
                border: `1px solid ${hovered ? tc.accent + "44" : "rgba(255,255,255,0.12)"}`,
                borderRadius: 999,
                padding: "5px 10px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function FilterPill({ tag, active, onClick }) {
  const tc = TAG_COLORS[tag];
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.1em",
        padding: "6px 14px",
        borderRadius: 999,
        border: `1px solid ${active ? (tag === "all" ? "rgba(255,255,255,0.5)" : tc.accent + "88") : "rgba(255,255,255,0.1)"}`,
        background: active
          ? tag === "all"
            ? "rgba(255,255,255,0.1)"
            : tc.accent + "18"
          : "transparent",
        color: active
          ? tag === "all"
            ? "#fff"
            : tc.accent
          : "rgba(255,255,255,0.35)",
        transition: "all 0.2s",
        textTransform: "uppercase",
      }}
    >
      {tag}
    </button>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const mounted = useMounted();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => {
          const projectTags =
            p.tags && p.tags.length > 0 ? p.tags : p.tag ? [p.tag] : [];
          return projectTags.includes(filter);
        });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#fff",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: rgba(167,139,250,0.3); }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes scanline {
          0%   { transform:translateY(-100%); }
          100% { transform:translateY(100vh); }
        }
        .scanline {
          position:fixed; left:0; width:100%; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent);
          animation:scanline 6s linear infinite; pointer-events:none; z-index:1;
        }
      `}</style>

      <Noise />
      <Grid />
      <div className="scanline" />

      {/* Ambient orbs */}
      <div
        style={{
          position: "fixed",
          top: "-20vh",
          left: "-10vw",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-20vh",
          right: "-10vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(167,139,250,0.08) 0%,transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "0 clamp(20px,4vw,48px) 80px",
        }}
      >
        {/* Header */}
        <header
          style={{
            minHeight: "clamp(420px, 70vh, 680px)",
            paddingTop: "clamp(28px, 6vh, 56px)",
            paddingBottom: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            transform: `translateY(${scrollY * 0.15}px)`,
            animationName: "fadeUp",
            animationDuration: "0.7s",
            animationFillMode: "both",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 8px #4ade80",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 11,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              available for work
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "clamp(42px,7vw,80px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: 20,
              background:
                "linear-gradient(135deg,#fff 30%,rgba(255,255,255,0.4))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ryan
            <br />
            Fennelly
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              maxWidth: 460,
              marginBottom: 28,
            }}
          >
            Full-stack developer building tools for humans. Passionate about
            clean code, fast systems, and software that actually matters.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              {
                label: "github.com/rpfenn",
                href: "https://github.com/rpfenn",
              },
              //{ label: "rpfenn.dev", href: "https://rpfenn.dev" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  padding: "6px 14px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)",
            marginBottom: 10,
          }}
        />

        {/* Filter row */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 36,
            animationName: "fadeUp",
            animationDuration: "0.5s",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          {TAGS.map((t) => (
            <FilterPill
              key={t}
              tag={t}
              active={filter === t}
              onClick={() => setFilter(t)}
            />
          ))}
        </div>

        {/* Count */}
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.1em",
            marginBottom: 20,
          }}
        >
          {visible.length} PROJECT{visible.length !== 1 ? "S" : ""}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
            gap: 14,
          }}
        >
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 72,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 11,
              color: "rgba(255,255,255,0.15)",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} YOUR NAME
          </span>
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 11,
              color: "rgba(255,255,255,0.15)",
              letterSpacing: "0.08em",
            }}
          >
            BUILT WITH REACT
          </span>
        </div>
      </div>
    </div>
  );
}
