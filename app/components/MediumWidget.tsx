"use client";
import {useState} from "react";

const LATEST = {
  title: "A Year of Red Architecture: 6 Decisions I'd Make Differently",
  desc: "Lessons from a year of over-engineered systems: bootstrap bottlenecks, middleware chains, real-time by default, and the 3 questions I now ask before committing to any architecture.",
  href: "https://medium.com/@hidirektor",
  readTime: "8 min read",
};

export default function MediumWidget() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 200,
        width: open ? "300px" : "auto",
        transition: "width 0.25s ease",
      }}
    >
      {/* Expanded card */}
      {open && (
        <div
          style={{
            background: "#0a0a0a",
            border: "1px solid #1f1f1f",
            borderRadius: "12px",
            padding: "1.1rem",
            marginBottom: "0.5rem",
            position: "relative",
          }}
        >
          {/* Close × */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            style={{
              position: "absolute",
              top: "0.6rem",
              right: "0.6rem",
              background: "none",
              border: "none",
              color: "#52525b",
              fontSize: "0.85rem",
              cursor: "pointer",
              lineHeight: 1,
              padding: "2px 4px",
            }}
          >
            ✕
          </button>

          {/* Platform label */}
          <p
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00d672",
              marginBottom: "0.5rem",
            }}
          >
            Latest on Medium
          </p>

          {/* Title */}
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#fafafa",
              lineHeight: 1.4,
              marginBottom: "0.45rem",
              paddingRight: "1rem",
            }}
          >
            {LATEST.title}
          </p>

          {/* Desc */}
          <p
            style={{
              fontSize: "0.75rem",
              color: "#71717a",
              lineHeight: 1.55,
              marginBottom: "0.85rem",
            }}
          >
            {LATEST.desc}
          </p>

          {/* Footer row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "0.68rem", color: "#3f3f46" }}>
              {LATEST.readTime}
            </span>
            <a
              href={LATEST.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#00d672",
                textDecoration: "none",
                borderBottom: "1px solid rgba(0,214,114,0.3)",
                paddingBottom: "1px",
                transition: "border-color 0.15s",
              }}
            >
              Read →
            </a>
          </div>
        </div>
      )}

      {/* Toggle pill */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Collapse Medium widget" : "Expand latest Medium article"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#0a0a0a",
          border: "1px solid #1f1f1f",
          borderRadius: "100px",
          padding: "0.45rem 0.9rem",
          cursor: "pointer",
          color: "#fafafa",
          fontSize: "0.75rem",
          fontWeight: 500,
          width: "100%",
          justifyContent: open ? "space-between" : "flex-start",
          transition: "border-color 0.15s, background 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#2f2f2f";
          (e.currentTarget as HTMLButtonElement).style.background = "#111";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#1f1f1f";
          (e.currentTarget as HTMLButtonElement).style.background = "#0a0a0a";
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#00d672",
            flexShrink: 0,
          }}
        />
        <span style={{ color: "#00d672", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Medium
        </span>
        <span
          style={{
            color: "#71717a",
            fontSize: "0.72rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: open ? 0 : 1,
            maxWidth: open ? "0" : "160px",
            opacity: open ? 0 : 1,
            transition: "max-width 0.25s, opacity 0.2s",
          }}
        >
          {LATEST.title}
        </span>
        <span style={{ color: "#52525b", fontSize: "0.7rem", marginLeft: "auto", flexShrink: 0 }}>
          {open ? "↓" : "↑"}
        </span>
      </button>
    </div>
  );
}
