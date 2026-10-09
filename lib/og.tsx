import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Colores de app/globals.css convertidos a hex (ImageResponse no entiende OKLCH).
const BG = "#0e1218";
const GOLD = "#d6b265";
const INK = "#07090f";
const SOFT = "#a0a5ae";
const FG = "#eceef3";

async function font(weight: 400 | 700): Promise<ArrayBuffer> {
  const file = path.join(
    process.cwd(),
    "node_modules/@fontsource/bricolage-grotesque/files",
    `bricolage-grotesque-latin-${weight}-normal.woff`,
  );
  const buf = await readFile(file);
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

type OgProps = { title: string; subtitle: string; tag?: string };

export async function renderOg({ title, subtitle, tag }: OgProps) {
  const [bold, regular] = await Promise.all([font(700), font(400)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          color: FG,
          padding: "64px 72px",
          fontFamily: "Bricolage",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 15,
              background: GOLD,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: INK,
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ display: "flex", fontSize: 38, gap: 10 }}>
            <span style={{ fontWeight: 700 }}>López</span>
            <span style={{ fontWeight: 400, color: SOFT }}>Tech</span>
          </div>
          {tag ? (
            <div
              style={{
                marginLeft: 20,
                display: "flex",
                padding: "8px 18px",
                borderRadius: 8,
                border: `2px solid ${SOFT}`,
                color: FG,
                fontSize: 26,
              }}
            >
              {tag}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 40 ? 84 : 104,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 36, color: SOFT, maxWidth: 940 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", height: 10, width: 220, background: GOLD }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Bricolage", data: bold, weight: 700, style: "normal" },
        { name: "Bricolage", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
