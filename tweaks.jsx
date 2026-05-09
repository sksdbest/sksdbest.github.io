// Tweaks panel for the goodhacker terminal redesign.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "phosphor",
  "scanline": false,
  "density": "comfy",
  "boldHeadings": false
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  phosphor: { c: 0.18, h: 145 },
  amber:    { c: 0.16, h: 78  },
  cyan:     { c: 0.14, h: 220 },
  magenta:  { c: 0.18, h: 340 },
};

function applyTweaks(t) {
  const root = document.documentElement;
  const a = ACCENT_MAP[t.accent] || ACCENT_MAP.phosphor;
  root.style.setProperty("--accent",    `oklch(0.84 ${a.c} ${a.h})`);
  root.style.setProperty("--accent-d",  `oklch(0.55 ${a.c} ${a.h})`);
  root.style.setProperty("--accent-bg", `oklch(0.84 ${a.c} ${a.h} / 0.08)`);

  document.body.dataset.scanline = t.scanline ? "on" : "off";
  document.body.dataset.density  = t.density === "compact" ? "compact" : "comfortable";

  document.querySelectorAll("h1, h2, h4, .svc h4").forEach(el => {
    el.style.fontWeight = t.boldHeadings ? "700" : "500";
  });
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent">
        <TweakRadio
          label="hue"
          value={t.accent}
          options={["phosphor", "amber", "cyan", "magenta"]}
          onChange={v => setTweak("accent", v)}
        />
      </TweakSection>

      <TweakSection label="Density">
        <TweakRadio
          label="rows"
          value={t.density}
          options={["comfy", "compact"]}
          onChange={v => setTweak("density", v)}
        />
      </TweakSection>

      <TweakSection label="CRT effects">
        <TweakToggle
          label="scanlines"
          value={t.scanline}
          onChange={v => setTweak("scanline", v)}
        />
        <TweakToggle
          label="bold headings"
          value={t.boldHeadings}
          onChange={v => setTweak("boldHeadings", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const tweaksMount = document.getElementById("tweaks-root");
if (tweaksMount) {
  ReactDOM.createRoot(tweaksMount).render(<TweaksApp />);
}
