// ---------------------------------------------------------------------------
// Web track — level data.
// PHASE A: "The Basics" — every concept taught once, atomically, isolated.
// One new idea per level, strictly. Tag label: "BASICS NN".
// PHASE B: "Studio Contracts" — real builds combining what Basics taught.
// Tag label: "WEB CONTRACT NN". (Phase B gets rebuilt in a later batch.)
//
// This file currently contains Basics Batch 1: Text & Tags (12 levels).
// ---------------------------------------------------------------------------

GreenLightContent.register("web", [
  {
    id: "basic-01",
    tag: "BASICS 01",
    title: `"What's a Tag"`,
    brief: () =>
      `Everything on a webpage is wrapped in <em>tags</em> — a pair of instructions in angle brackets that tell the browser what something is. A paragraph looks like this: &lt;p&gt;some text&lt;/p&gt;. Try it — make the page say "I'm learning HTML" using exactly that pattern.`,
    starter: `<body>\n\n</body>\n`,
    reward: 4,
    hints: [
      `A tag has an opening half <p> and the content goes right after it.`,
      `Pattern: <p>I'm learning HTML</p> — type it exactly, this one's just about the shape.`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "No <p> tag found yet. Every tag starts with a < and a name, like <p>." };
      if (p.textContent.trim().toLowerCase() !== "i'm learning html") {
        return { pass: false, msg: `Found a <p>, but it says "${p.textContent.trim() || "(empty)"}" instead of "I'm learning HTML".` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-02",
    tag: "BASICS 02",
    title: `"Both Halves"`,
    brief: () =>
      `Most tags come in pairs — an opening half like &lt;p&gt; and a closing half like &lt;/p&gt;, marked with a slash. The paragraph below is missing its closing half. Fix it.`,
    starter: `<body>\n  <p>This sentence never ends\n</body>\n`,
    reward: 4,
    hints: [
      `Closing tags look like opening tags but with a / right after the <.`,
      `You're missing </p> — it goes right after the sentence, before </body>.`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "Still no properly closed <p> — the browser can't tell where your paragraph ends." };
      if (!p.textContent.includes("never ends")) {
        return { pass: false, msg: "The text changed — put it back and just add the missing closing tag." };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-03",
    tag: "BASICS 03",
    title: `"Extra Instructions"`,
    brief: () =>
      `Sometimes a tag needs extra information, not just wrapped text. That extra info goes inside the opening tag as name="value" — this is called an <em>attribute</em>. Give the paragraph below an id attribute set to "note".`,
    starter: `<body>\n  <p>Hello there</p>\n</body>\n`,
    reward: 4,
    hints: [
      `Attributes live inside the opening tag, before the closing >, like <p SOMETHING>.`,
      `The pattern is name="value" — here the name is id, the value should be "note".`,
      `Full pattern: <p id="note">Hello there</p>`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "The <p> disappeared — keep it, just add an attribute." };
      if (p.getAttribute("id") !== "note") {
        return { pass: false, msg: `No id="note" found. Attributes go inside the opening tag: <p id="note">.` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-04",
    tag: "BASICS 04",
    title: `"The Big One"`,
    brief: () =>
      `Pages need a main heading — the single most important line on the page. Make one that says "Welcome".`,
    starter: `<body>\n\n</body>\n`,
    reward: 5,
    hints: [
      `This is the biggest, most important heading tag — there's exactly one you'd use for a page's main title.`,
      `The tag is <h1>.`,
      `Pattern: <h1>Welcome</h1>`,
    ],
    check(doc) {
      const h1 = doc.querySelector("h1");
      if (!h1) return { pass: false, msg: "No <h1> found." };
      if (h1.textContent.trim().toLowerCase() !== "welcome") {
        return { pass: false, msg: `Found <h1>, but it says "${h1.textContent.trim() || "(empty)"}" instead of "Welcome".` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-05",
    tag: "BASICS 05",
    title: `"Smaller Shouts"`,
    brief: () =>
      `<h1> isn't the only heading — there's a whole ranked family, h1 through h6, each one smaller/less important than the last. Add an <h2> that says "Section".`,
    starter: `<body>\n  <h1>Welcome</h1>\n\n</body>\n`,
    reward: 5,
    hints: [
      `The next size down from <h1> is exactly what it sounds like.`,
      `The tag is <h2>.`,
      `Pattern: <h2>Section</h2>`,
    ],
    check(doc) {
      const h2 = doc.querySelector("h2");
      if (!h2) return { pass: false, msg: "No <h2> found." };
      if (h2.textContent.trim().toLowerCase() !== "section") {
        return { pass: false, msg: `Found <h2>, but it says "${h2.textContent.trim() || "(empty)"}" instead of "Section".` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-06",
    tag: "BASICS 06",
    title: `"Ordinary Text"`,
    brief: () =>
      `Not everything is a heading — most of a page is just regular sentences. Add one that says "This is a paragraph."`,
    starter: `<body>\n  <h1>Welcome</h1>\n\n</body>\n`,
    reward: 5,
    hints: [
      `The tag for a normal block of body text.`,
      `The tag is <p>, short for "paragraph."`,
      `Pattern: <p>This is a paragraph.</p>`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "No <p> found." };
      if (p.textContent.trim().toLowerCase() !== "this is a paragraph.") {
        return { pass: false, msg: `Found <p>, but it says "${p.textContent.trim() || "(empty)"}" instead of "This is a paragraph."` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-07",
    tag: "BASICS 07",
    title: `"Make It Matter"`,
    brief: () =>
      `Sometimes a word needs weight — visually bold, and semantically marked as important (not just styled that way). Make the word "important" inside the paragraph below carry that weight.`,
    starter: `<body>\n  <p>This word is important to notice.</p>\n</body>\n`,
    reward: 6,
    hints: [
      `There's a tag specifically for "this matters," which browsers render bold by default.`,
      `The tag is <strong>.`,
      `Pattern: <p>This word is <strong>important</strong> to notice.</p>`,
    ],
    check(doc) {
      const strong = doc.querySelector("strong");
      if (!strong) return { pass: false, msg: "No <strong> found." };
      if (strong.textContent.trim().toLowerCase() !== "important") {
        return { pass: false, msg: `Found <strong>, but it wraps "${strong.textContent.trim() || "(empty)"}" instead of "important".` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-08",
    tag: "BASICS 08",
    title: `"A Different Tone"`,
    brief: () =>
      `Similar idea, different job — sometimes a word needs stress or a shift in tone, not "importance." Browsers render it italic by default. Wrap the word "really" below with it.`,
    starter: `<body>\n  <p>I really mean this.</p>\n</body>\n`,
    reward: 6,
    hints: [
      `This tag means "emphasis" — a change in tone when read aloud, not bold importance.`,
      `The tag is <em>.`,
      `Pattern: <p>I <em>really</em> mean this.</p>`,
    ],
    check(doc) {
      const em = doc.querySelector("em");
      if (!em) return { pass: false, msg: "No <em> found." };
      if (em.textContent.trim().toLowerCase() !== "really") {
        return { pass: false, msg: `Found <em>, but it wraps "${em.textContent.trim() || "(empty)"}" instead of "really".` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-09",
    tag: "BASICS 09",
    title: `"Start a New Line"`,
    brief: () =>
      `Sometimes you need a line break inside a block of text, without starting a whole new paragraph. Put one between "Line one" and "Line two" below.`,
    starter: `<body>\n  <p>Line one Line two</p>\n</body>\n`,
    reward: 5,
    hints: [
      `This tag has no closing pair and no content — it just marks "break here."`,
      `The tag is <br>.`,
      `Pattern: <p>Line one<br>Line two</p>`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "The <p> disappeared." };
      const br = p.querySelector("br");
      if (!br) return { pass: false, msg: "No <br> found inside the paragraph." };
      return { pass: true };
    },
  },
  {
    id: "basic-10",
    tag: "BASICS 10",
    title: `"Draw a Line"`,
    brief: () =>
      `Sometimes you want a visible divider between two sections — a plain horizontal line across the page. Add one between the two paragraphs below.`,
    starter: `<body>\n  <p>Section one.</p>\n  <p>Section two.</p>\n</body>\n`,
    reward: 5,
    hints: [
      `Like <br>, this tag has no closing pair — it just draws a line.`,
      `The tag is <hr>.`,
      `Pattern: <p>Section one.</p><hr><p>Section two.</p>`,
    ],
    check(doc) {
      const hr = doc.querySelector("hr");
      const ps = doc.querySelectorAll("p");
      if (!hr) return { pass: false, msg: "No <hr> found." };
      if (ps.length < 2) return { pass: false, msg: "Both paragraphs need to still be there — just add the line between them." };
      return { pass: true };
    },
  },
  {
    id: "basic-11",
    tag: "BASICS 11",
    title: `"Leave a Note"`,
    brief: () =>
      `Sometimes you want to leave a note in your code that the browser ignores completely — invisible to visitors, visible to you. Add one anywhere saying "this is a note".`,
    starter: `<body>\n  <p>Real content.</p>\n</body>\n`,
    reward: 4,
    hints: [
      `Comments use a special bracket pattern, not a normal tag name.`,
      `The pattern is <!-- your note here -->.`,
      `Full pattern: <!-- this is a note -->`,
    ],
    check(doc, studio, rawCode) {
      // Comments are stripped from the DOM entirely, so this is the one
      // checker in the game that reads the raw source text instead of doc.
      if (!rawCode || !rawCode.includes("<!--") || !rawCode.toLowerCase().includes("this is a note")) {
        return { pass: false, msg: `No comment found containing "this is a note". Pattern: <!-- this is a note -->` };
      }
      return { pass: true };
    },
  },
  {
    id: "basic-12",
    tag: "BASICS 12",
    title: `"Typing the Untypeable"`,
    brief: () =>
      `The < symbol is reserved for tags — you can't just type it as regular text, the browser will think you're starting a new tag. There's a special code for typing it literally. Make the paragraph below display exactly: 5 < 10`,
    starter: `<body>\n  <p></p>\n</body>\n`,
    reward: 6,
    hints: [
      `Special text codes called "entities" start with & and end with ;`,
      `The entity for < is &lt;`,
      `Pattern: <p>5 &lt; 10</p>`,
    ],
    check(doc) {
      const p = doc.querySelector("p");
      if (!p) return { pass: false, msg: "The <p> disappeared." };
      if (p.textContent.trim() !== "5 < 10") {
        return { pass: false, msg: `Paragraph shows "${p.textContent.trim() || "(empty)"}" instead of "5 < 10".` };
      }
      return { pass: true };
    },
  },
  {
  id: "basic-13",
  tag: "BASICS 13",
  title: `"A Container for Items"`,
  brief: () =>
    `Some content isn't a sentence or a heading — it's a list. Lists need a wrapper to hold their items. Make one with a single item inside it that says "First item".`,
  starter: `<body>\n\n</body>\n`,
  reward: 5,
  hints: [
    `You need two different tags working together: one that wraps the whole list, one that wraps the item itself.`,
    `The wrapper is <ul> ("unordered list"), the item is <li> ("list item").`,
    `Pattern: <ul>\n  <li>First item</li>\n</ul>`,
  ],
  check(doc) {
    const ul = doc.querySelector("ul");
    if (!ul) return { pass: false, msg: "No <ul> found." };
    const li = ul.querySelector("li");
    if (!li) return { pass: false, msg: "Found <ul>, but no <li> inside it." };
    if (li.textContent.trim().toLowerCase() !== "first item") {
      return { pass: false, msg: `Found the item, but it says "${li.textContent.trim() || "(empty)"}" instead of "First item".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-14",
  tag: "BASICS 14",
  title: `"More Than One"`,
  brief: () =>
    `A list with one item isn't really a list. Add two more items below "First item": "Second item" and "Third item".`,
  starter: `<body>\n  <ul>\n    <li>First item</li>\n  </ul>\n</body>\n`,
  reward: 5,
  hints: [
    `Same tag as before, just repeated — a <ul> can hold as many <li> as you want.`,
    `Add another <li> for each new item, right after the first one.`,
    `Pattern:\n<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>`,
  ],
  check(doc) {
    const items = doc.querySelectorAll("ul li");
    if (items.length < 3) return { pass: false, msg: `Only found ${items.length} item(s) — need 3.` };
    const texts = Array.from(items).map((li) => li.textContent.trim().toLowerCase());
    if (!texts.includes("first item") || !texts.includes("second item") || !texts.includes("third item")) {
      return { pass: false, msg: `Found 3 items, but they should say "First item", "Second item", and "Third item".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-15",
  tag: "BASICS 15",
  title: `"When Order Matters"`,
  brief: () =>
    `<ul> is for when the order doesn't matter — a shopping list, a set of tags. But sometimes order is the whole point, like steps in instructions. There's a different wrapper tag for that. Make a numbered list with "Step one" and "Step two".`,
  starter: `<body>\n\n</body>\n`,
  reward: 6,
  hints: [
    `Same <li> items as before, but a different wrapper tag that means "this order matters."`,
    `The tag is <ol> ("ordered list").`,
    `Pattern: <ol>\n  <li>Step one</li>\n  <li>Step two</li>\n</ol>`,
  ],
  check(doc) {
    const ol = doc.querySelector("ol");
    if (!ol) return { pass: false, msg: "No <ol> found." };
    const items = ol.querySelectorAll("li");
    if (items.length < 2) return { pass: false, msg: `Found <ol>, but only ${items.length} item(s) — need 2.` };
    const texts = Array.from(items).map((li) => li.textContent.trim().toLowerCase());
    if (!texts.includes("step one") || !texts.includes("step two")) {
      return { pass: false, msg: `Items should say "Step one" and "Step two".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-16",
  tag: "BASICS 16",
  title: `"A List Inside a List"`,
  brief: () =>
    `Sometimes one item in a list has its own sub-items — like a topic with bullet points underneath it. Inside the "Main topic" item below, add a nested list containing one item: "Sub-point".`,
  starter: `<body>\n  <ul>\n    <li>Main topic</li>\n  </ul>\n</body>\n`,
  reward: 8,
  hints: [
    `A <li> can contain more than just text — it can contain a whole other <ul> inside it.`,
    `Put a full <ul><li>...</li></ul> block inside the existing <li>, after the "Main topic" text.`,
    `Pattern:\n<li>\n  Main topic\n  <ul>\n    <li>Sub-point</li>\n  </ul>\n</li>`,
  ],
  check(doc) {
    const topLi = Array.from(doc.querySelectorAll("body > ul > li")).find((li) =>
      li.textContent.trim().toLowerCase().startsWith("main topic")
    );
    if (!topLi) return { pass: false, msg: `Couldn't find the "Main topic" item — did it get changed or removed?` };
    const nestedLi = topLi.querySelector("ul li");
    if (!nestedLi) return { pass: false, msg: "No nested <ul><li> found inside the Main topic item." };
    if (nestedLi.textContent.trim().toLowerCase() !== "sub-point") {
      return { pass: false, msg: `Found a nested item, but it says "${nestedLi.textContent.trim() || "(empty)"}" instead of "Sub-point".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-17",
  tag: "BASICS 17",
  title: `"Point Somewhere"`,
  brief: () =>
    `Text on its own can't take you anywhere else. Make the word "here" into a link — the destination doesn't matter yet, just make it a real clickable link.`,
  starter: `<body>\n  <p>Click here to continue.</p>\n</body>\n`,
  reward: 6,
  hints: [
    `You need a tag that wraps clickable text, plus an attribute for where it goes.`,
    `The tag is <a>, the destination attribute is href.`,
    `Pattern: <p>Click <a href="https://example.com">here</a> to continue.</p>`,
  ],
  check(doc) {
    const a = doc.querySelector("a[href]");
    if (!a) return { pass: false, msg: "No <a> with an href found." };
    if (a.textContent.trim().toLowerCase() !== "here") {
      return { pass: false, msg: `Found a link, but it wraps "${a.textContent.trim() || "(empty)"}" instead of "here".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-18",
  tag: "BASICS 18",
  title: `"Don't Lose Them"`,
  brief: () =>
    `By default, clicking a link takes you away from the current page entirely. Sometimes you want it to open in a brand new tab instead, so the original page stays open. Add that behavior to the link below.`,
  starter: `<body>\n  <a href="https://example.com">Visit site</a>\n</body>\n`,
  reward: 6,
  hints: [
    `This is another attribute on the <a> tag, alongside href.`,
    `The attribute is target, set to the value "_blank".`,
    `Pattern: <a href="https://example.com" target="_blank">Visit site</a>`,
  ],
  check(doc) {
    const a = doc.querySelector("a[href]");
    if (!a) return { pass: false, msg: "The <a> disappeared — keep it, just add an attribute." };
    if (a.getAttribute("target") !== "_blank") {
      return { pass: false, msg: `No target="_blank" found on the link.` };
    }
    return { pass: true };
  },
},
{
  id: "basic-19",
  tag: "BASICS 19",
  title: `"Reserve a Spot"`,
  brief: () =>
    `Words only go so far — put a picture on the page. It doesn't need to actually load (any text works as the location for now); we're just reserving the spot where an image would go.`,
  starter: `<body>\n\n</body>\n`,
  reward: 6,
  hints: [
    `This tag is a little different — it doesn't wrap anything, so it has no separate closing tag.`,
    `The tag is <img>, and it needs a src attribute pointing at the image location.`,
    `Pattern: <img src="logo.png">`,
  ],
  check(doc) {
    const img = doc.querySelector("img");
    if (!img) return { pass: false, msg: "No <img> found." };
    if (!img.getAttribute("src")) return { pass: false, msg: "Found <img>, but it has no src attribute yet." };
    return { pass: true };
  },
},
{
  id: "basic-20",
  tag: "BASICS 20",
  title: `"For Everyone"`,
  brief: () =>
    `Not everyone can see images — someone using a screen reader needs a written description instead. Give the image below one more attribute: a text description of what it shows.`,
  starter: `<body>\n  <img src="logo.png">\n</body>\n`,
  reward: 6,
  hints: [
    `Same idea as src — another attribute, this time for the written description.`,
    `The attribute name is alt.`,
    `Pattern: <img src="logo.png" alt="Studio logo">`,
  ],
  check(doc) {
    const img = doc.querySelector("img");
    if (!img || !img.getAttribute("src")) return { pass: false, msg: "The <img src=...> from before is gone — keep it, just add to it." };
    if (!img.getAttribute("alt") || img.getAttribute("alt").trim().length === 0) {
      return { pass: false, msg: "Missing the alt attribute — it's how screen readers describe the image." };
    }
    return { pass: true };
  },
},
{
  id: "basic-21",
  tag: "BASICS 21",
  title: `"Moving Pictures"`,
  brief: () =>
    `Images are static — sometimes you need video instead. Add one pointing anywhere, and make sure it actually shows play/pause/volume controls to the visitor, not just a silent frozen frame.`,
  starter: `<body>\n\n</body>\n`,
  reward: 7,
  hints: [
    `Similar shape to <img> — a src attribute for the file — but a different tag, and one extra attribute for the visible controls.`,
    `The tag is <video>, and the extra attribute is controls (it doesn't need a value, just being present turns it on).`,
    `Pattern: <video src="clip.mp4" controls></video>`,
  ],
  check(doc) {
    const video = doc.querySelector("video");
    if (!video) return { pass: false, msg: "No <video> found." };
    if (!video.getAttribute("src")) return { pass: false, msg: "Found <video>, but no src attribute." };
    if (!video.hasAttribute("controls")) return { pass: false, msg: "Found <video src=...>, but it's missing the controls attribute — visitors need play/pause." };
    return { pass: true };
  },
},
{
  id: "basic-22",
  tag: "BASICS 22",
  title: `"Group Things Together"`,
  brief: () =>
    `Sometimes you need to treat several elements as one unit — group them so you can move, style, or hide them all together later. There's a generic container tag for exactly that. Wrap the two paragraphs below in one.`,
  starter: `<body>\n  <p>First thing.</p>\n  <p>Second thing.</p>\n</body>\n`,
  reward: 6,
  hints: [
    `This tag doesn't mean anything by itself — it's just a box to group content in.`,
    `The tag is <div>.`,
    `Pattern: <div>\n  <p>First thing.</p>\n  <p>Second thing.</p>\n</div>`,
  ],
  check(doc) {
    const div = doc.querySelector("div");
    if (!div) return { pass: false, msg: "No <div> found." };
    const ps = div.querySelectorAll("p");
    if (ps.length < 2) return { pass: false, msg: "Found the <div>, but both paragraphs need to be inside it." };
    return { pass: true };
  },
},
{
  id: "basic-23",
  tag: "BASICS 23",
  title: `"Give It a Name Tag"`,
  brief: () =>
    `A box is more useful if you can identify it later — by CSS, or by other code. Give the div below a label so it can be picked out specifically. The label should be "highlight".`,
  starter: `<body>\n  <div>\n    <p>Special content.</p>\n  </div>\n</body>\n`,
  reward: 6,
  hints: [
    `You already know this pattern from earlier attributes — a name="value" pair inside the opening tag.`,
    `The attribute is class.`,
    `Pattern: <div class="highlight">`,
  ],
  check(doc) {
    const div = doc.querySelector("div.highlight");
    if (!div) return { pass: false, msg: `No <div class="highlight"> found.` };
    return { pass: true };
  },
},
{
  id: "basic-24",
  tag: "BASICS 24",
  title: `"A Smaller Box"`,
  brief: () =>
    `<div> is a block — it takes up its own line. Sometimes you need to wrap just a few words in the middle of a sentence, without breaking the flow. There's an inline version for that. Wrap the word "amazing" below with it.`,
  starter: `<body>\n  <p>This game is amazing.</p>\n</body>\n`,
  reward: 6,
  hints: [
    `Same idea as <div> — a generic container with no meaning of its own — but inline, sits inside a line of text instead of breaking it.`,
    `The tag is <span>.`,
    `Pattern: <p>This game is <span>amazing</span>.</p>`,
  ],
  check(doc) {
    const span = doc.querySelector("span");
    if (!span) return { pass: false, msg: "No <span> found." };
    if (span.textContent.trim().toLowerCase() !== "amazing") {
      return { pass: false, msg: `Found <span>, but it wraps "${span.textContent.trim() || "(empty)"}" instead of "amazing".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-25",
  tag: "BASICS 25",
  title: `"Name the Top"`,
  brief: () =>
    `<div> works, but it doesn't tell anyone — including screen readers and search engines — what a section actually is. There's a specific tag that means "this is the page's top banner area." Wrap the heading below in it.`,
  starter: `<body>\n  <h1>My Studio</h1>\n</body>\n`,
  reward: 7,
  hints: [
    `This is a "semantic" tag — its name describes its job, unlike a generic <div>.`,
    `The tag is <header>.`,
    `Pattern: <header>\n  <h1>My Studio</h1>\n</header>`,
  ],
  check(doc) {
    const header = doc.querySelector("header");
    if (!header) return { pass: false, msg: "No <header> found." };
    if (!header.querySelector("h1")) return { pass: false, msg: "Found <header>, but your <h1> needs to be inside it." };
    return { pass: true };
  },
},
{
  id: "basic-26",
  tag: "BASICS 26",
  title: `"Where the Links Live"`,
  brief: () =>
    `A group of navigation links deserves its own semantic wrapper, distinct from a random list — it tells the browser (and assistive tech) "this is how you get around the site." Wrap the list below in it.`,
  starter: `<body>\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About</a></li>\n  </ul>\n</body>\n`,
  reward: 7,
  hints: [
    `Another semantic tag, this one specifically for navigation menus.`,
    `The tag is <nav>.`,
    `Pattern: <nav>\n  <ul>...</ul>\n</nav>`,
  ],
  check(doc) {
    const nav = doc.querySelector("nav");
    if (!nav) return { pass: false, msg: "No <nav> found." };
    if (!nav.querySelector("ul")) return { pass: false, msg: "Found <nav>, but the list needs to be inside it." };
    return { pass: true };
  },
},
{
  id: "basic-27",
  tag: "BASICS 27",
  title: `"The Actual Point"`,
  brief: () =>
    `A page has headers, navs, footers — but only one part is the actual unique content of that specific page. There's a tag reserved for exactly that, and a page should only ever have one. Wrap the paragraph below in it.`,
  starter: `<body>\n  <p>Welcome to my studio's page.</p>\n</body>\n`,
  reward: 7,
  hints: [
    `This tag marks the primary content area — the part that's actually different page to page.`,
    `The tag is <main>.`,
    `Pattern: <main>\n  <p>Welcome to my studio's page.</p>\n</main>`,
  ],
  check(doc) {
    const main = doc.querySelector("main");
    if (!main) return { pass: false, msg: "No <main> found." };
    if (!main.querySelector("p")) return { pass: false, msg: "Found <main>, but your paragraph needs to be inside it." };
    return { pass: true };
  },
},
{
  id: "basic-28",
  tag: "BASICS 28",
  title: `"The Bottom Banner"`,
  brief: () =>
    `Just like the top of a page has a semantic wrapper, the bottom does too — copyright lines, credits, that kind of thing. Wrap the paragraph below in it.`,
  starter: `<body>\n  <p>© 2026 My Studio</p>\n</body>\n`,
  reward: 6,
  hints: [
    `The mirror-image tag to <header>, for the bottom of the page.`,
    `The tag is <footer>.`,
    `Pattern: <footer>\n  <p>© 2026 My Studio</p>\n</footer>`,
  ],
  check(doc) {
    const footer = doc.querySelector("footer");
    if (!footer) return { pass: false, msg: "No <footer> found." };
    if (!footer.querySelector("p")) return { pass: false, msg: "Found <footer>, but your paragraph needs to be inside it." };
    return { pass: true };
  },
},
{
  id: "basic-29",
  tag: "BASICS 29",
  title: `"A Self-Contained Piece"`,
  brief: () =>
    `Some content could stand entirely on its own — a blog post, a single game review — and would still make sense if copied somewhere else by itself. There's a semantic tag for that kind of standalone content, different from a generic grouping <div>. Wrap the review below in it.`,
  starter: `<body>\n  <h2>Game Review</h2>\n  <p>This game is genuinely great.</p>\n</body>\n`,
  reward: 8,
  hints: [
    `This tag means "self-contained, independently distributable content" — think of a single blog post or article.`,
    `The tag is <article>.`,
    `Pattern: <article>\n  <h2>Game Review</h2>\n  <p>This game is genuinely great.</p>\n</article>`,
  ],
  check(doc) {
    const article = doc.querySelector("article");
    if (!article) return { pass: false, msg: "No <article> found." };
    if (!article.querySelector("h2") || !article.querySelector("p")) {
      return { pass: false, msg: "Found <article>, but both the heading and paragraph need to be inside it." };
    }
    return { pass: true };
  },
},
{
  id: "basic-30",
  tag: "BASICS 30",
  title: `"Rows and Columns"`,
  brief: () =>
    `Paragraphs and lists can't really show grid-shaped data — think a spreadsheet, or a schedule. There's a whole family of tags for that: one wraps the table, one wraps each row, one wraps each cell. Build a table with one row containing two cells: "Monday" and "Tuesday".`,
  starter: `<body>\n\n</body>\n`,
  reward: 8,
  hints: [
    `Three tags nest inside each other: the table itself, a row inside it, and cells inside the row.`,
    `The tags are <table>, <tr> ("table row"), and <td> ("table data").`,
    `Pattern: <table>\n  <tr>\n    <td>Monday</td>\n    <td>Tuesday</td>\n  </tr>\n</table>`,
  ],
  check(doc) {
    const table = doc.querySelector("table");
    if (!table) return { pass: false, msg: "No <table> found." };
    const tr = table.querySelector("tr");
    if (!tr) return { pass: false, msg: "Found <table>, but no <tr> row inside it." };
    const cells = tr.querySelectorAll("td");
    if (cells.length < 2) return { pass: false, msg: `Found a row, but only ${cells.length} <td> cell(s) — need 2.` };
    const texts = Array.from(cells).map((td) => td.textContent.trim().toLowerCase());
    if (!texts.includes("monday") || !texts.includes("tuesday")) {
      return { pass: false, msg: `Cells should say "Monday" and "Tuesday".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-31",
  tag: "BASICS 31",
  title: `"Label the Columns"`,
  brief: () =>
    `A table of data without labels is confusing — you need a way to mark certain cells as column headers, distinct from the regular data cells. Add a header row above your existing data, labeling the columns "Day" — same word for both, since we're just marking that these are header cells.`,
  starter: `<body>\n  <table>\n    <tr>\n      <td>Monday</td>\n      <td>Tuesday</td>\n    </tr>\n  </table>\n</body>\n`,
  reward: 7,
  hints: [
    `Same idea as <td>, but for header cells specifically — still goes inside a <tr>.`,
    `The tag is <th> ("table header").`,
    `Pattern: add a new row before the existing one: <tr>\n  <th>Day</th>\n  <th>Day</th>\n</tr>`,
  ],
  check(doc) {
    const ths = doc.querySelectorAll("table th");
    if (ths.length < 2) return { pass: false, msg: `Found ${ths.length} <th> cell(s) — need at least 2.` };
    const dataRow = doc.querySelector("table tr td");
    if (!dataRow) return { pass: false, msg: "Your original data row (Monday/Tuesday) disappeared — keep it, just add a header row." };
    return { pass: true };
  },
},
{
  id: "basic-32",
  tag: "BASICS 32",
  title: `"A Place to Collect Answers"`,
  brief: () =>
    `Everything so far has been one-way — the page talks, the visitor reads. A form is how a visitor talks back. It needs a wrapper tag to hold whatever inputs go inside it. Add an empty one.`,
  starter: `<body>\n\n</body>\n`,
  reward: 6,
  hints: [
    `This tag doesn't do much visually by itself — it's the container that groups inputs together as one submission.`,
    `The tag is <form>.`,
    `Pattern: <form>\n\n</form>`,
  ],
  check(doc) {
    const form = doc.querySelector("form");
    if (!form) return { pass: false, msg: "No <form> found." };
    return { pass: true };
  },
},
{
  id: "basic-33",
  tag: "BASICS 33",
  title: `"Type Something In"`,
  brief: () =>
    `A form needs actual fields to fill in. Add a text input inside the form, and — importantly — a label so the visitor knows what it's for. The label text should say "Name".`,
  starter: `<body>\n  <form>\n\n  </form>\n</body>\n`,
  reward: 7,
  hints: [
    `You need two tags: <input> for the actual typing box, and <label> for the visible text describing it.`,
    `input needs a type="text" attribute; label just wraps its text.`,
    `Pattern: <label>Name</label>\n<input type="text">`,
  ],
  check(doc) {
    const form = doc.querySelector("form");
    if (!form) return { pass: false, msg: "The <form> disappeared — keep it, just add to it." };
    const input = form.querySelector('input[type="text"]');
    if (!input) return { pass: false, msg: `No <input type="text"> found inside the form.` };
    const label = form.querySelector("label");
    if (!label || label.textContent.trim().toLowerCase() !== "name") {
      return { pass: false, msg: `Missing a <label> that says "Name".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-34",
  tag: "BASICS 34",
  title: `"The Right Kind of Box"`,
  brief: () =>
    `Not every field is plain text — an email address is a specific kind of data, and the input type attribute can say so. This changes things like mobile keyboard layout and basic validation. Add an email input, with a label that says "Email".`,
  starter: `<body>\n  <form>\n    <label>Name</label>\n    <input type="text">\n\n  </form>\n</body>\n`,
  reward: 7,
  hints: [
    `Same <input> tag as before, just a different value for the type attribute.`,
    `The value is "email".`,
    `Pattern: <label>Email</label>\n<input type="email">`,
  ],
  check(doc) {
    const email = doc.querySelector('input[type="email"]');
    if (!email) return { pass: false, msg: `No <input type="email"> found.` };
    const labels = Array.from(doc.querySelectorAll("label")).map((l) => l.textContent.trim().toLowerCase());
    if (!labels.includes("email")) return { pass: false, msg: `Missing a <label> that says "Email".` };
    return { pass: true };
  },
},
{
  id: "basic-35",
  tag: "BASICS 35",
  title: `"More Than One Line"`,
  brief: () =>
    `A regular text input is one line — fine for a name, useless for an actual message. There's a different tag entirely for multi-line text, not just an input variant. Add one with a label that says "Message".`,
  starter: `<body>\n  <form>\n    <label>Name</label>\n    <input type="text">\n    <label>Email</label>\n    <input type="email">\n\n  </form>\n</body>\n`,
  reward: 7,
  hints: [
    `Unlike <input>, this tag wraps content — it comes in an opening/closing pair, even though it usually starts empty.`,
    `The tag is <textarea>.`,
    `Pattern: <label>Message</label>\n<textarea></textarea>`,
  ],
  check(doc) {
    const textarea = doc.querySelector("textarea");
    if (!textarea) return { pass: false, msg: "No <textarea> found." };
    const labels = Array.from(doc.querySelectorAll("label")).map((l) => l.textContent.trim().toLowerCase());
    if (!labels.includes("message")) return { pass: false, msg: `Missing a <label> that says "Message".` };
    return { pass: true };
  },
},
{
  id: "basic-36",
  tag: "BASICS 36",
  title: `"Pick One"`,
  brief: () =>
    `Sometimes you want the visitor choosing from a fixed list instead of typing freely — a dropdown menu. Add one with at least 2 options: "Small" and "Large".`,
  starter: `<body>\n  <form>\n\n  </form>\n</body>\n`,
  reward: 7,
  hints: [
    `Two tags work together: one wraps the whole dropdown, one wraps each choice inside it.`,
    `The wrapper is <select>, each choice is <option>.`,
    `Pattern: <select>\n  <option>Small</option>\n  <option>Large</option>\n</select>`,
  ],
  check(doc) {
    const select = doc.querySelector("form select");
    if (!select) return { pass: false, msg: "No <select> found inside the form." };
    const options = select.querySelectorAll("option");
    if (options.length < 2) return { pass: false, msg: `Found <select>, but only ${options.length} <option>(s) — need 2.` };
    const texts = Array.from(options).map((o) => o.textContent.trim().toLowerCase());
    if (!texts.includes("small") || !texts.includes("large")) {
      return { pass: false, msg: `Options should say "Small" and "Large".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-37",
  tag: "BASICS 37",
  title: `"Make It Go"`,
  brief: () =>
    `A form with no way to submit it just sits there forever. Add a clickable button inside the form that says "Send".`,
  starter: `<body>\n  <form>\n    <label>Name</label>\n    <input type="text">\n\n  </form>\n</body>\n`,
  reward: 6,
  hints: [
    `There's a dedicated tag for a clickable button, separate from a link.`,
    `The tag is <button>.`,
    `Pattern: <button>Send</button>`,
  ],
  check(doc) {
    const button = doc.querySelector("form button");
    if (!button) return { pass: false, msg: "No <button> found inside the form." };
    if (button.textContent.trim().toLowerCase() !== "send") {
      return { pass: false, msg: `Found <button>, but it says "${button.textContent.trim() || "(empty)"}" instead of "Send".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-38",
  tag: "BASICS 38",
  title: `"Yes or No"`,
  brief: () =>
    `Sometimes you just need a simple on/off choice — agreeing to terms, opting into something. There's a specific input type for that, different from a text box entirely. Add one, with a label that says "Subscribe".`,
  starter: `<body>\n  <form>\n\n  </form>\n</body>\n`,
  reward: 7,
  hints: [
    `Same <input> tag family as before, another value for the type attribute — this one renders as a small tickable box.`,
    `The value is "checkbox".`,
    `Pattern: <label>Subscribe</label>\n<input type="checkbox">`,
  ],
  check(doc) {
    const checkbox = doc.querySelector('form input[type="checkbox"]');
    if (!checkbox) return { pass: false, msg: `No <input type="checkbox"> found inside the form.` };
    const labels = Array.from(doc.querySelectorAll("label")).map((l) => l.textContent.trim().toLowerCase());
    if (!labels.includes("subscribe")) return { pass: false, msg: `Missing a <label> that says "Subscribe".` };
    return { pass: true };
  },
},
{
  id: "basic-39",
  tag: "BASICS 39",
  title: `"The Real Skeleton"`,
  brief: () =>
    `This whole time, your code has secretly been wrapped in a full page structure behind the scenes. Now build it for real: a document needs a doctype declaration up top, then everything nested inside <html>, with a <head> and a <body>. Put a <p> saying "Hello" inside the body.`,
  starter: `<p>Hello</p>\n`,
  reward: 8,
  hints: [
    `The doctype isn't a normal tag — it's a special declaration, always the very first line: <!DOCTYPE html>`,
    `Everything else nests inside <html>, which contains a <head> (empty for now) and a <body> (your actual content).`,
    `Pattern:\n<!DOCTYPE html>\n<html>\n<head></head>\n<body>\n  <p>Hello</p>\n</body>\n</html>`,
  ],
  check(doc) {
    const html = doc.querySelector("html");
    if (!html) return { pass: false, msg: "No <html> element found — everything needs to be nested inside it." };
    if (!doc.querySelector("head")) return { pass: false, msg: "No <head> found inside <html>." };
    const body = doc.querySelector("body");
    if (!body) return { pass: false, msg: "No <body> found inside <html>." };
    const p = body.querySelector("p");
    if (!p || p.textContent.trim().toLowerCase() !== "hello") {
      return { pass: false, msg: `<body> needs a <p> saying "Hello".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-40",
  tag: "BASICS 40",
  title: `"Name the Tab"`,
  brief: () =>
    `Look at the top of a real browser tab — it shows text, not the page's content. That text lives in the <head>, not the <body>. Make the tab say "My Studio".`,
  starter: `<!DOCTYPE html>\n<html>\n<head>\n\n</head>\n<body>\n  <p>Hello</p>\n</body>\n</html>\n`,
  reward: 6,
  hints: [
    `This tag lives specifically inside <head>, not <body>.`,
    `The tag is <title>.`,
    `Pattern: <head>\n  <title>My Studio</title>\n</head>`,
  ],
  check(doc) {
    const title = doc.querySelector("head title");
    if (!title) return { pass: false, msg: "No <title> found inside <head>." };
    if (title.textContent.trim().toLowerCase() !== "my studio") {
      return { pass: false, msg: `Found <title>, but it says "${title.textContent.trim() || "(empty)"}" instead of "My Studio".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-41",
  tag: "BASICS 41",
  title: `"Say What Alphabet"`,
  brief: () =>
    `Text on computers is stored as numbers under the hood, and there needs to be an agreement on which numbering system to use — otherwise special characters and symbols can come out garbled. There's a standard, safe choice nearly every site uses. Add it to your <head>.`,
  starter: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Studio</title>\n</head>\n<body>\n  <p>Hello</p>\n</body>\n</html>\n`,
  reward: 6,
  hints: [
    `This is a <meta> tag — a self-closing tag used for page metadata, not visible content.`,
    `It needs a charset attribute set to "UTF-8".`,
    `Pattern: <meta charset="UTF-8">`,
  ],
  check(doc) {
    const meta = doc.querySelector('head meta[charset]');
    if (!meta) return { pass: false, msg: "No <meta charset=...> found inside <head>." };
    if (meta.getAttribute("charset").toUpperCase() !== "UTF-8") {
      return { pass: false, msg: `Found the meta tag, but charset should be "UTF-8".` };
    }
    return { pass: true };
  },
},
{
  id: "basic-42",
  tag: "BASICS 42",
  title: `"Fit the Screen"`,
  brief: () =>
    `Without telling it otherwise, a phone browser assumes your page was built for a wide desktop screen and shrinks everything down to fit — tiny, unreadable text. Another <meta> tag fixes this, telling mobile browsers to actually use the device's real width.`,
  starter: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Studio</title>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <p>Hello</p>\n</body>\n</html>\n`,
  reward: 7,
  hints: [
    `Another <meta> tag, this time using a name attribute instead of charset.`,
    `Pattern: name="viewport" content="width=device-width, initial-scale=1"`,
    `Full pattern: <meta name="viewport" content="width=device-width, initial-scale=1">`,
  ],
  check(doc) {
    const meta = doc.querySelector('head meta[name="viewport"]');
    if (!meta) return { pass: false, msg: `No <meta name="viewport"> found inside <head>.` };
    const content = meta.getAttribute("content") || "";
    if (!content.includes("width=device-width")) {
      return { pass: false, msg: `Found the viewport meta tag, but its content is missing width=device-width.` };
    }
    return { pass: true };
  },
},
{
  id: "basic-43",
  tag: "BASICS 43 — BOSS",
  title: `"Ship the Skeleton"`,
  brief: () =>
    `Last one in this arc — build a real, complete document from scratch: doctype, html, a full head (title "My Studio", UTF-8 charset, viewport meta), and a body with an <h1> saying "Welcome". Everything you've learned in this whole document-setup arc, combined.`,
  starter: `<p>placeholder</p>\n`,
  reward: 20,
  hints: [
    `This combines all 4 previous levels — doctype, title, charset, viewport, plus a real body.`,
    `Build it top to bottom: doctype first, then <html>, then a complete <head>, then <body>.`,
    `Full skeleton:\n<!DOCTYPE html>\n<html>\n<head>\n  <title>My Studio</title>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>`,
  ],
  check(doc) {
    const title = doc.querySelector("head title");
    if (!title || title.textContent.trim().toLowerCase() !== "my studio") {
      return { pass: false, msg: `<title> missing or doesn't say "My Studio".` };
    }
    const charset = doc.querySelector("head meta[charset]");
    if (!charset || charset.getAttribute("charset").toUpperCase() !== "UTF-8") {
      return { pass: false, msg: "Missing or incorrect charset meta tag." };
    }
    const viewport = doc.querySelector('head meta[name="viewport"]');
    if (!viewport || !(viewport.getAttribute("content") || "").includes("width=device-width")) {
      return { pass: false, msg: "Missing or incorrect viewport meta tag." };
    }
    const h1 = doc.querySelector("body h1");
    if (!h1 || h1.textContent.trim().toLowerCase() !== "welcome") {
      return { pass: false, msg: `<h1> missing or doesn't say "Welcome".` };
    }
    return { pass: true };
  },
},
{
  id: "contract-01",
  tag: "WEB CONTRACT 01",
  title: `"The Landing Page"`,
  brief: (studio) =>
    `First real deliverable. A visitor lands here and should immediately know three things: whose site this is, how to get around, and what the actual content is. Build a proper structure: a <header> containing an <h1> with "${studio}", a <nav> with at least 2 links, and a <main> containing a paragraph and an image with a real alt description.`,
  starter: `<body>\n\n</body>\n`,
  reward: 20,
  hints: [
    `This combines header/h1, nav/links, and main/p/img — all things you've already built individually. Add one piece at a time.`,
    `Structure: <header> wraps your <h1>. A separate <nav> wraps at least 2 <a href> links. A separate <main> wraps a <p> and an <img src alt>.`,
    `Full skeleton: <header><h1>${"${studio}"}</h1></header><nav><a href="#">Home</a><a href="#">About</a></nav><main><p>...</p><img src="pic.png" alt="..."></main>`,
  ],
  check(doc, studio) {
    const header = doc.querySelector("header");
    if (!header) return { pass: false, msg: "Missing <header>." };
    const h1 = header.querySelector("h1");
    if (!h1 || h1.textContent.trim().toLowerCase() !== studio.trim().toLowerCase()) {
      return { pass: false, msg: `<header> needs an <h1> saying "${studio}".` };
    }
    const nav = doc.querySelector("nav");
    if (!nav) return { pass: false, msg: "Missing <nav>." };
    const navLinks = nav.querySelectorAll("a[href]");
    if (navLinks.length < 2) return { pass: false, msg: `<nav> needs at least 2 links — found ${navLinks.length}.` };
    const main = doc.querySelector("main");
    if (!main) return { pass: false, msg: "Missing <main>." };
    if (!main.querySelector("p")) return { pass: false, msg: "<main> needs a <p>." };
    const img = main.querySelector("img");
    if (!img || !img.getAttribute("alt") || img.getAttribute("alt").trim().length === 0) {
      return { pass: false, msg: "<main> needs an <img> with a real alt description." };
    }
    return { pass: true };
  },
},
{
  id: "contract-02",
  tag: "WEB CONTRACT 02",
  title: `"Our Games"`,
  brief: () =>
    `Visitors want to see what you've actually made. Build a self-contained section: an <article> with an <h2> titled "Our Games" and a list of at least 3 games you've made.`,
  starter: `<body>\n\n</body>\n`,
  reward: 18,
  hints: [
    `<article> for standalone content, <h2> as its title, <ul>/<li> for the list — three things you already know, combined.`,
    `Structure: <article><h2>Our Games</h2><ul><li>...</li><li>...</li><li>...</li></ul></article>`,
    `Full pattern: <article><h2>Our Games</h2><ul><li>Neon Runner</li><li>Pixel Quest</li><li>Void Drift</li></ul></article>`,
  ],
  check(doc) {
    const article = doc.querySelector("article");
    if (!article) return { pass: false, msg: "Missing <article>." };
    const h2 = article.querySelector("h2");
    if (!h2 || h2.textContent.trim().toLowerCase() !== "our games") {
      return { pass: false, msg: `<article> needs an <h2> saying "Our Games".` };
    }
    const items = article.querySelectorAll("ul li");
    if (items.length < 3) return { pass: false, msg: `Need at least 3 <li> games listed — found ${items.length}.` };
    return { pass: true };
  },
},
{
  id: "contract-03",
  tag: "WEB CONTRACT 03",
  title: `"Contact Us"`,
  brief: () =>
    `Someone wants to reach out. Build a real contact form: labeled inputs for Name (text) and Email (email), a Message textarea, and a Send button — everything working together as one form.`,
  starter: `<body>\n\n</body>\n`,
  reward: 20,
  hints: [
    `This is every form piece you've learned, combined into one real <form>: two labeled inputs, a textarea, a button.`,
    `Structure: <form><label>Name</label><input type="text"><label>Email</label><input type="email"><label>Message</label><textarea></textarea><button>Send</button></form>`,
    `Every piece must be inside the same <form> — that's what makes it "one" contact form instead of scattered fields.`,
  ],
  check(doc) {
    const form = doc.querySelector("form");
    if (!form) return { pass: false, msg: "Missing <form>." };
    if (!form.querySelector('input[type="text"]')) return { pass: false, msg: "Form needs a text input for Name." };
    if (!form.querySelector('input[type="email"]')) return { pass: false, msg: "Form needs an email input." };
    if (!form.querySelector("textarea")) return { pass: false, msg: "Form needs a <textarea> for the message." };
    const button = form.querySelector("button");
    if (!button || button.textContent.trim().toLowerCase() !== "send") {
      return { pass: false, msg: `Form needs a <button> that says "Send".` };
    }
    const labels = Array.from(form.querySelectorAll("label")).map((l) => l.textContent.trim().toLowerCase());
    if (!labels.includes("name") || !labels.includes("email")) {
      return { pass: false, msg: `Missing labels — need one saying "Name" and one saying "Email".` };
    }
    return { pass: true };
  },
},
{
  id: "contract-04",
  tag: "WEB CONTRACT 04",
  title: `"The Stat Sheet"`,
  brief: () =>
    `Some information is genuinely tabular — release info for your games, say. Build a table with a header row (columns: "Game" and "Genre") and at least 2 rows of real data underneath.`,
  starter: `<body>\n\n</body>\n`,
  reward: 16,
  hints: [
    `<th> for the header row, <td> for the data rows — same table family as before, just with real content this time.`,
    `Structure: <table><tr><th>Game</th><th>Genre</th></tr><tr><td>...</td><td>...</td></tr><tr><td>...</td><td>...</td></tr></table>`,
    `Full pattern: <table><tr><th>Game</th><th>Genre</th></tr><tr><td>Neon Runner</td><td>Arcade</td></tr><tr><td>Void Drift</td><td>Racing</td></tr></table>`,
  ],
  check(doc) {
    const table = doc.querySelector("table");
    if (!table) return { pass: false, msg: "Missing <table>." };
    const headers = table.querySelectorAll("th");
    if (headers.length < 2) return { pass: false, msg: `Need at least 2 <th> header cells — found ${headers.length}.` };
    const headerTexts = Array.from(headers).map((th) => th.textContent.trim().toLowerCase());
    if (!headerTexts.includes("game") || !headerTexts.includes("genre")) {
      return { pass: false, msg: `Headers should say "Game" and "Genre".` };
    }
    const dataRows = Array.from(table.querySelectorAll("tr")).filter((tr) => tr.querySelector("td"));
    if (dataRows.length < 2) return { pass: false, msg: `Need at least 2 data rows — found ${dataRows.length}.` };
    return { pass: true };
  },
},
{
  id: "contract-p1",
  type: "playground",
  tag: "PLAYGROUND",
  title: `"Design Your Footer"`,
  brief: () =>
    `No fixed spec — build a real <footer> for your site however makes sense to you. Combine whatever you think belongs there: copyright text, links, whatever. We're only checking that it's a real, non-empty footer.`,
  starter: `<body>\n  <!-- go wild -->\n\n</body>\n`,
  reward: 14,
  hints: [
    `Footers commonly hold copyright lines, quick links, or contact info — but there's no single right answer here.`,
  ],
  check(doc) {
    const footer = doc.querySelector("footer");
    if (!footer) return { pass: false, msg: "Needs a real <footer> element." };
    if (footer.textContent.trim().length < 10) {
      return { pass: false, msg: "Pretty bare — add some real content inside the footer." };
    }
    return { pass: true };
  },
},
{
  id: "contract-05",
  tag: "WEB CONTRACT 05 — BOSS",
  title: `"Ship the Full Site"`,
  brief: (studio) =>
    `Final contract for this arc. Everything from the last 4 contracts, combined into one real page: a <header> with your <h1> ("${studio}"), a <nav> with 2+ links, a <main> with an <article> containing an "Our Games" list of 3+ games, and a <footer>. Nothing new — just everything shipped together.`,
  starter: `<body>\n\n</body>\n`,
  reward: 40,
  hints: [
    `This is contracts 1, 2, and your footer playground, assembled into one page in the right nesting order.`,
    `Order matters for readability, not for the checker — but a real site goes header, then nav, then main (with your article inside it), then footer.`,
    `Build it one section at a time — add the header first, check the console, then nav, then main/article, then footer.`,
  ],
  check(doc, studio) {
    const header = doc.querySelector("header");
    const h1 = header?.querySelector("h1");
    if (!h1 || h1.textContent.trim().toLowerCase() !== studio.trim().toLowerCase()) {
      return { pass: false, msg: `<header><h1> missing or doesn't say "${studio}".` };
    }
    const nav = doc.querySelector("nav");
    if (!nav || nav.querySelectorAll("a[href]").length < 2) {
      return { pass: false, msg: "<nav> missing or needs 2+ links." };
    }
    const main = doc.querySelector("main");
    const article = main?.querySelector("article");
    if (!article) return { pass: false, msg: "<main> needs an <article> inside it." };
    const h2 = article.querySelector("h2");
    if (!h2 || h2.textContent.trim().toLowerCase() !== "our games") {
      return { pass: false, msg: `<article> needs an <h2> saying "Our Games".` };
    }
    if (article.querySelectorAll("ul li").length < 3) {
      return { pass: false, msg: "Need at least 3 games listed." };
    }
    const footer = doc.querySelector("footer");
    if (!footer || footer.textContent.trim().length < 5) {
      return { pass: false, msg: "Missing a real <footer>." };
    }
    return { pass: true };
  },
},
]);