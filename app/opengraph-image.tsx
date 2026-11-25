import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Gympanzie: 12-Week Lean Body Program for busy professionals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e3b2c",
          color: "#fff",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 800, color: "#f6d31b" }}>Gympanzie</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.02 }}>
            Get lean in 12 weeks.
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.02, color: "#f6d31b" }}>
            No strict diets.
          </div>
        </div>
        <div style={{ fontSize: 32, opacity: 0.85 }}>
          The 12-Week Lean Body Program for busy professionals · gympanzie.com
        </div>
      </div>
    ),
    size,
  );
}
