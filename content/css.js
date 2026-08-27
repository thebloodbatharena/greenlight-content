// ---------------------------------------------------------------------------
// CSS track — level data. Basics phase, Batch 1: Selectors & Color.
// Same philosophy as HTML: one new idea per level, briefs pose a problem
// not an instruction, hints escalate nudge -> pieces -> full pattern.
// ---------------------------------------------------------------------------

GreenLightContent.register("css", [
  {
    id: "css-01",
    tag: "CSS BASICS 01",
    title: `"Paint One Thing"`,
    brief: () =>
      `HTML says what something IS. CSS says what it LOOKS like. The simplest way to style one single element is to write the style directly on it. Make the text below red.`,
    starter: `<body>\n  <p>Change my color.</p>\n</body>\n`,
    reward: 6,
    hints: [
      `Every HTML tag can carry a style attribute, containing CSS rules directly.`,
      `Inside style, the property is color, and the value is a color name or code.`,
      `Pattern: <p style="color: red;">Change my color.</p>`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "The <p> disappeared." };
      const color = p.style.color;
      if (!color || !(color.includes("red") || color === "rgb(255, 0, 0)")) {
        return { pass: false, msg: `The paragraph isn't red yet. Current color: "${color || "(none)"}".` };
      }
      return { pass: true };
    },
  },
  {
    id: "css-02",
    tag: "CSS BASICS 02",
    title: `"Style Everywhere at Once"`,
    brief: () =>
      `Writing style="..." on every single tag gets old fast, and if you have 10 paragraphs, you'd have to repeat yourself 10 times. There's a way to write CSS once, in one place, that applies to every matching tag on the page. Make every paragraph blue, using a <style> block instead of inline style attributes.`,
    starter: `<head>\n\n</head>\n<body>\n  <p>One.</p>\n  <p>Two.</p>\n</body>\n`,
    reward: 8,
    hints: [
      `A <style> block goes in the <head>, and holds real CSS rules, not inline attributes.`,
      `Inside it, target the tag by name directly: p { ... }`,
      `Pattern: <style>\n  p { color: blue; }\n</style>`,
    ],
    check(doc) {
      const ps = doc.querySelectorAll("p");
      if (ps.length < 2) return { pass: false, msg: "Both paragraphs need to still be there." };
      const allBlue = Array.from(ps).every((p) => {
        const c = getComputedStyle(p).color;
        return c === "rgb(0, 0, 255)";
      });
      if (!allBlue) return { pass: false, msg: "Not every paragraph is blue yet — use a <style> block with a p { } rule, not inline styles." };
      return { pass: true };
    },
  },
  {
    id: "css-03",
    tag: "CSS BASICS 03",
    title: `"Pick One, Not All"`,
    brief: () =>
      `Targeting a tag name styles EVERY tag of that kind — sometimes you want just one specific element instead. Give the second paragraph below a label, then target only that label to make it green — the first paragraph should stay its default color.`,
    starter: `<head>\n  <style>\n\n  </style>\n</head>\n<body>\n  <p>Stay normal.</p>\n  <p>Turn green.</p>\n</body>\n`,
    reward: 8,
    hints: [
      `You already know class="..." from HTML — CSS can target a class using a dot before its name.`,
      `Add class="highlight" to the second <p>, then in CSS write .highlight { ... }`,
      `Pattern: HTML: <p class="highlight">Turn green.</p> — CSS: .highlight { color: green; }`,
    ],
    check(doc) {
      const ps = doc.querySelectorAll("p");
      if (ps.length < 2) return { pass: false, msg: "Both paragraphs need to still be there." };
      const second = ps[1];
      const secondColor = getComputedStyle(second).color;
      if (secondColor !== "rgb(0, 128, 0)") {
        return { pass: false, msg: "The second paragraph isn't green yet." };
      }
      const first = ps[0];
      const firstColor = getComputedStyle(first).color;
      if (firstColor === "rgb(0, 128, 0)") {
        return { pass: false, msg: "Both paragraphs turned green — only the second one should, using a class, not the p tag itself." };
      }
      return { pass: true };
    },
  },
  {
    id: "css-04",
    tag: "CSS BASICS 04",
    title: `"One of a Kind"`,
    brief: () =>
      `class is for labeling a group of elements that share styling. Sometimes you need to target exactly one specific, unique element — like a page's single header. There's a different attribute and selector symbol for that. Give the paragraph below the unique label "banner", then target it with CSS to make it orange.`,
    starter: `<head>\n  <style>\n\n  </style>\n</head>\n<body>\n  <p>Make me orange.</p>\n</body>\n`,
    reward: 7,
    hints: [
      `The attribute is id (meant to be used once per page, unlike class). The CSS selector for it uses # instead of a dot.`,
      `Add id="banner" to the <p>, then in CSS write #banner { ... }`,
      `Pattern: HTML: <p id="banner">Make me orange.</p> — CSS: #banner { color: orange; }`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "The <p> disappeared." };
      if (p.id !== "banner") return { pass: false, msg: `Missing id="banner" on the paragraph.` };
      const color = getComputedStyle(p).color;
      if (color !== "rgb(255, 165, 0)") return { pass: false, msg: "Not orange yet." };
      return { pass: true };
    },
  },
  {
    id: "css-05",
    tag: "CSS BASICS 05",
    title: `"Beyond Named Colors"`,
    brief: () =>
      `"red", "blue", "orange" only cover a handful of colors. Real design needs exact, precise colors — that's what hex codes are for, a 6-digit code representing exact amounts of red, green, and blue. Make the paragraph's background (not text) a specific hex pink: #ff4fd8.`,
    starter: `<head>\n  <style>\n    p { }\n  </style>\n</head>\n<body>\n  <p>Give me a background.</p>\n</body>\n`,
    reward: 7,
    hints: [
      `Different property this time — not color (text), but the one for an element's background.`,
      `The property is background-color, and hex codes start with a #.`,
      `Pattern: p { background-color: #ff4fd8; }`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      const bg = getComputedStyle(p).backgroundColor;
      if (bg !== "rgb(255, 79, 216)") {
        return { pass: false, msg: `Background isn't the right pink yet. Current: "${bg}".` };
      }
      return { pass: true };
    },
  },
  {
    id: "css-06",
    tag: "CSS BASICS 06",
    title: `"Bigger Words"`,
    brief: () =>
      `Text size matters for hierarchy and readability. Make the heading below noticeably larger — at least 40 pixels tall.`,
    starter: `<head>\n  <style>\n\n  </style>\n</head>\n<body>\n  <h1>Resize me.</h1>\n</body>\n`,
    reward: 6,
    hints: [
      `The property controls text size directly, measured in units like pixels (px).`,
      `The property is font-size.`,
      `Pattern: h1 { font-size: 48px; }`,
    ],
    check(doc) {
      const h1 = doc.querySelector("h1");
      const size = parseFloat(getComputedStyle(h1).fontSize);
      if (!(size >= 40)) return { pass: false, msg: `Font size is only ${size}px — needs to be at least 40px.` };
      return { pass: true };
    },
  },
  {
    id: "css-07",
    tag: "CSS BASICS 07",
    title: `"Make It Bold Without a Tag"`,
    brief: () =>
      `You already know <strong> makes text bold semantically. But sometimes you just want the visual weight without implying "this is important" — pure styling, no semantic meaning. Make the paragraph below bold using CSS only, no <strong> tag.`,
    starter: `<head>\n  <style>\n\n  </style>\n</head>\n<body>\n  <p>Make me bold, CSS-only.</p>\n</body>\n`,
    reward: 6,
    hints: [
      `The property controls text weight/thickness.`,
      `The property is font-weight, and "bold" is a valid value.`,
      `Pattern: p { font-weight: bold; }`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      const weight = getComputedStyle(p).fontWeight;
      if (!(weight === "bold" || parseInt(weight) >= 700)) {
        return { pass: false, msg: `Not bold yet. Current font-weight: "${weight}".` };
      }
      if (p.querySelector("strong") || p.tagName === "STRONG") {
        return { pass: false, msg: "Use CSS font-weight, not a <strong> tag, for this one." };
      }
      return { pass: true };
    },
  },
  {
    id: "css-p1",
    type: "playground",
    tag: "PLAYGROUND",
    title: `"Style Your Own Banner"`,
    brief: () =>
      `No fixed spec — style the heading below however you like using color, background-color, font-size, and font-weight (any combination). We're only checking that you've actually changed at least 2 of those properties from their defaults.`,
    starter: `<head>\n  <style>\n    h1 {\n      /* go wild */\n    }\n  </style>\n</head>\n<body>\n  <h1>Style Me</h1>\n</body>\n`,
    reward: 12,
    hints: [
      `Try combining a couple properties from this arc — color, background-color, font-size, font-weight — there's no single right answer.`,
    ],
    check(doc) {
      const h1 = doc.querySelector("h1");
      const s = getComputedStyle(h1);
      let changedCount = 0;
      if (s.color !== "rgb(0, 0, 0)") changedCount++;
      if (s.backgroundColor !== "rgba(0, 0, 0, 0)" && s.backgroundColor !== "transparent") changedCount++;
      if (parseFloat(s.fontSize) !== 32) changedCount++; // browser default h1 size is ~32px
      if (s.fontWeight === "bold" || parseInt(s.fontWeight) >= 700) changedCount++;
      if (changedCount < 2) {
        return { pass: false, msg: `Only ${changedCount} propert${changedCount === 1 ? "y" : "ies"} changed so far — mix in at least 2.` };
      }
      return { pass: true };
    },
  },
]);