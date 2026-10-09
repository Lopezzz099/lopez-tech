import Image from "next/image";
import type { Shot } from "@/lib/projects";
import { cx } from "@/lib/ui";

type FrameProps = {
  shot: Shot;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Texto decorativo de la barra del navegador. */
  address?: string;
};

/** Ventana de navegador con una captura de escritorio. */
export function BrowserFrame({
  shot,
  sizes,
  priority,
  className,
  address,
}: FrameProps) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-lg border-2 border-night-700 bg-night-800",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-night-700 bg-night-800 px-3 py-2"
      >
        <span className="size-2.5 rounded-full bg-fg/25" />
        <span className="size-2.5 rounded-full bg-fg/25" />
        <span className="size-2.5 rounded-full bg-fg/25" />
        {address ? (
          <span className="ml-3 truncate font-mono text-[0.72rem] text-fg-mute">
            {address}
          </span>
        ) : null}
      </div>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Teléfono con una captura de celular. */
export function PhoneFrame({
  shot,
  sizes,
  priority,
  className,
}: Omit<FrameProps, "address">) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-[1.5rem] border-[5px] border-night-700 bg-night-700",
        className,
      )}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full rounded-[1.05rem]"
      />
    </div>
  );
}
