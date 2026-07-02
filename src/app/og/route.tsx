import { ImageResponse } from "next/og";

export const runtime = "edge";

// Kept inline so this edge route doesn't pull in the heavy resume module.
const SITE_NAME = "Melih SARAÇ";
const SITE_ROLE = "Backend Developer";
const SITE_DOMAIN = "melihsarac.com";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.slice(0, 120) || SITE_NAME;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, opacity: 0.7 }}>
          {SITE_NAME}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 30, opacity: 0.7 }}>
          {`${SITE_ROLE} · ${SITE_DOMAIN}`}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
