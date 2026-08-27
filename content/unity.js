// ---------------------------------------------------------------------------
// Unity track — level data. Full Orientation arc: every piece of the
// class/method boilerplate gets its own honest, explained level — nothing
// dismissed as "don't worry about it." Levels 1-5 check raw code text
// directly (the interpreter doesn't validate class declarations, only
// Start()/Update() bodies) — same technique as HTML's comment-level checker.
// ---------------------------------------------------------------------------

GreenLightContent.register("unity", [
  {
    id: "unity-00a",
    tag: "UNITY ORIENTATION 01",
    title: `"A Container For Your Code"`,
    brief: () =>
      `Every script needs a named container to hold all its code — in C#, that container is called a class. The word class itself is missing from the line below. Add it, right before the script's name.`,
    starter: `public PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 5,
    language: "csharp",
    hints: [
      `The container keyword goes between "public" and the script's name, "PlayerScript".`,
      `The word is class.`,
      `Fixed line: public class PlayerScript : MonoBehaviour {`,
    ],
    check(result, studio, code) {
      if (!/public\s+class\s+PlayerScript/.test(code)) {
        return { pass: false, msg: `Missing the class keyword — should read "public class PlayerScript".` };
      }
      return { pass: true };
    },
  },
  {
    id: "unity-00b",
    tag: "UNITY ORIENTATION 02",
    title: `"Letting Unity Actually See It"`,
    brief: () =>
      `public means other code — including Unity itself — is allowed to see and use this class. Without it, Unity wouldn't be able to find this script to attach it to anything in your game. It's missing below. Add it, right before class.`,
    starter: `class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 5,
    language: "csharp",
    hints: [
      `public goes at the very start of the line, before the word class.`,
      `Fixed line: public class PlayerScript : MonoBehaviour {`,
    ],
    check(result, studio, code) {
      if (!/public\s+class\s+PlayerScript/.test(code)) {
        return { pass: false, msg: `Missing public — should read "public class PlayerScript".` };
      }
      return { pass: true };
    },
  },
  {
    id: "unity-00c",
    tag: "UNITY ORIENTATION 03",
    title: `"Inheriting Superpowers"`,
    brief: () =>
      `: MonoBehaviour tells C# "this class IS a special kind of Unity script" — that connection is exactly what grants it Start(), Update(), and every other Unity-specific power. Without it, this would just be a plain, ordinary class with no connection to the game engine at all. It's missing below. Add it after the class's name.`,
    starter: `public class PlayerScript {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 6,
    language: "csharp",
    hints: [
      `Right after "PlayerScript", add a colon followed by the special base class name.`,
      `Pattern: PlayerScript : MonoBehaviour`,
      `Fixed line: public class PlayerScript : MonoBehaviour {`,
    ],
    check(result, studio, code) {
      if (!/PlayerScript\s*:\s*MonoBehaviour/.test(code)) {
        return { pass: false, msg: `Missing ": MonoBehaviour" after PlayerScript.` };
      }
      return { pass: true };
    },
  },
  {
    id: "unity-00d",
    tag: "UNITY ORIENTATION 04",
    title: `"Nothing Handed Back"`,
    brief: () =>
      `Some methods calculate something and hand you back a result — like a calculator giving you an answer. Others just DO something and hand nothing back. void marks a method as the second kind. Start() is missing it below. Add it.`,
    starter: `public class PlayerScript : MonoBehaviour {\n    Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 5,
    language: "csharp",
    hints: [
      `void goes directly before the method's name.`,
      `Fixed line: void Start() {`,
    ],
    check(result, studio, code) {
      if (!/void\s+Start\s*\(/.test(code)) {
        return { pass: false, msg: `Missing void before Start().` };
      }
      return { pass: true };
    },
  },
  {
    id: "unity-00e",
    tag: "UNITY ORIENTATION 05",
    title: `"Where Inputs Would Go"`,
    brief: () =>
      `The parentheses after a method's name are where you'd list any inputs it needs to do its job — Start() and Update() don't need any, but the parentheses still have to be there to mark "this is a method." They're missing from Start below. Add them.`,
    starter: `public class PlayerScript : MonoBehaviour {\n    void Start {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 5,
    language: "csharp",
    hints: [
      `Right after "Start", add an empty pair of parentheses.`,
      `Fixed line: void Start() {`,
    ],
    check(result, studio, code) {
      if (!/void\s+Start\s*\(\s*\)/.test(code)) {
        return { pass: false, msg: `Missing () after Start.` };
      }
      return { pass: true };
    },
  },
  {
    id: "unity-00f",
    tag: "UNITY ORIENTATION 06",
    title: `"Grouped Together"`,
    brief: () =>
      `Curly braces { } mark where a method's actual instructions live. In real C#, every executable line must be inside some method's braces — code sitting outside one doesn't just get skipped, it's actually invalid and stops the whole script from compiling. Below, a line is sitting outside Start()'s braces. Move it inside so the script is valid.`,
    starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n    Debug.Log("Misplaced");\n\n    void Update() {\n\n    }\n}\n`,
    reward: 6,
    language: "csharp",
    hints: [
      `That Debug.Log line sits between Start()'s closing } and Update() — not inside either one's braces.`,
      `Cut it and paste it between Start()'s opening { and its closing }.`,
      `Fixed shape: void Start() {\n    Debug.Log("Misplaced");\n}`,
    ],
    check(result) {
      if (!result.log.includes("Misplaced")) {
        return { pass: false, msg: `Console doesn't show "Misplaced" yet — is it actually inside Start()'s braces now?` };
      }
      return { pass: true };
    },
  },
  {
    id: "unity-00g",
    tag: "UNITY ORIENTATION 07",
    title: `"One Instruction, Then the Next"`,
    brief: () =>
      `Code runs one instruction after another, top to bottom. Each instruction ends with a semicolon — the same job a period does at the end of a sentence. One's missing below. Find it.`,
    starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n        Debug.Log("Ready")\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 5,
    language: "csharp",
    hints: [
      `Look at the line inside Start() and compare it to a normal sentence — something's missing at the end.`,
      `Every instruction needs a ; right after it.`,
      `Fixed line: Debug.Log("Ready");`,
    ],
    check(result) {
      if (!result.log.includes("Ready")) return { pass: false, msg: `Console doesn't show "Ready" yet.` };
      return { pass: true };
    },
  },
  {
    id: "unity-00h",
    tag: "UNITY ORIENTATION 08",
    title: `"Give It Instructions"`,
    brief: () =>
      `Debug.Log is a ready-made action Unity gives you — you "call" it by writing its name followed by parentheses containing what you want it to do. Print the message "System online" to the console.`,
    starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 6,
    language: "csharp",
    hints: [
      `Same shape as the last level — Debug.Log(...) with your message inside the parentheses, in quotes.`,
      `Pattern: Debug.Log("your message here");`,
      `Full pattern: Debug.Log("System online");`,
    ],
    check(result) {
      if (!result.log.includes("System online")) return { pass: false, msg: `Console doesn't show "System online" yet.` };
      return { pass: true };
    },
  },
  {
    id: "unity-00i",
    tag: "UNITY ORIENTATION 09",
    title: `"Remember a Value"`,
    brief: () =>
      `Sometimes you want to store a value so you can reuse it later instead of retyping it — that's a variable. Don't worry about the word "float" yet, it just means "this holds a number" for now. Declare one named score set to 0, then print it.`,
    starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 7,
    language: "csharp",
    hints: [
      `A variable declaration has three parts: a type label, a name, and a starting value.`,
      `Pattern: float score = 0;`,
      `Full pattern: float score = 0;\nDebug.Log(score);`,
    ],
    check(result) {
      if (result.env.score !== 0) return { pass: false, msg: `Expected a variable "score" set to 0 — found: ${result.env.score}` };
      if (!result.log.includes(0)) return { pass: false, msg: `score needs to actually be printed.` };
      return { pass: true };
    },
  },
  {
    id: "unity-00j",
    tag: "UNITY ORIENTATION 10",
    title: `"Change It Later"`,
    brief: () =>
      `A variable isn't locked forever — you can change its value after declaring it. Below, lives starts at 3. Simulate the player losing a life: set lives to 2, then print it.`,
    starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n        float lives = 3;\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
    reward: 7,
    language: "csharp",
    hints: [
      `Once a variable exists, you can reassign it later using just = — no "float" needed the second time, that's only for the first declaration.`,
      `Pattern: lives = 2;`,
      `Full pattern: lives = 2;\nDebug.Log(lives);`,
    ],
    check(result) {
      if (result.env.lives !== 2) return { pass: false, msg: `Expected lives to equal 2 — found: ${result.env.lives}` };
      if (!result.log.includes(2)) return { pass: false, msg: `lives needs to actually be printed.` };
      return { pass: true };
    },
  },
  {
  id: "unity-01a",
  tag: "UNITY BASICS 01",
  title: `"Add Two Things"`,
  brief: () =>
    `Variables aren't just for storage — you can combine them. Declare gold as 10, gems as 5, then declare a third variable total that's gold plus gems, and print total.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 8,
  language: "csharp",
  hints: [
    `Three declarations — the third one's starting value is an expression using the first two, not a plain number.`,
    `Pattern: float total = gold + gems;`,
    `Full pattern: float gold = 10;\nfloat gems = 5;\nfloat total = gold + gems;\nDebug.Log(total);`,
  ],
  check(result) {
    if (result.env.total !== 15) return { pass: false, msg: `Expected total to equal 15 — found: ${result.env.total}` };
    if (!result.log.includes(15)) return { pass: false, msg: `total needs to be printed.` };
    return { pass: true };
  },
},
{
  id: "unity-01b",
  tag: "UNITY BASICS 02",
  title: `"Take Away"`,
  brief: () =>
    `Same idea, opposite direction. Declare health as 100, damage as 35, then declare remaining as health minus damage, and print it.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 8,
  language: "csharp",
  hints: [
    `Same shape as last level, different symbol.`,
    `Pattern: float remaining = health - damage;`,
    `Full pattern: float health = 100;\nfloat damage = 35;\nfloat remaining = health - damage;\nDebug.Log(remaining);`,
  ],
  check(result) {
    if (result.env.remaining !== 65) return { pass: false, msg: `Expected remaining to equal 65 — found: ${result.env.remaining}` };
    if (!result.log.includes(65)) return { pass: false, msg: `remaining needs to be printed.` };
    return { pass: true };
  },
},
{
  id: "unity-01c",
  tag: "UNITY BASICS 03",
  title: `"Multiply"`,
  brief: () =>
    `Repeated addition, done fast — multiplication. Declare baseDamage as 8, multiplier as 3, then declare totalDamage as baseDamage times multiplier, and print it.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 8,
  language: "csharp",
  hints: [
    `Multiplication uses * instead of + or -.`,
    `Pattern: float totalDamage = baseDamage * multiplier;`,
    `Full pattern: float baseDamage = 8;\nfloat multiplier = 3;\nfloat totalDamage = baseDamage * multiplier;\nDebug.Log(totalDamage);`,
  ],
  check(result) {
    if (result.env.totalDamage !== 24) return { pass: false, msg: `Expected totalDamage to equal 24 — found: ${result.env.totalDamage}` };
    if (!result.log.includes(24)) return { pass: false, msg: `totalDamage needs to be printed.` };
    return { pass: true };
  },
},
{
  id: "unity-01d",
  tag: "UNITY BASICS 04",
  title: `"Split It Up"`,
  brief: () =>
    `The opposite of multiplying — division. Declare totalXP as 100, playerCount as 4, then declare xpEach as totalXP divided by playerCount, and print it.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 8,
  language: "csharp",
  hints: [
    `Division uses /.`,
    `Pattern: float xpEach = totalXP / playerCount;`,
    `Full pattern: float totalXP = 100;\nfloat playerCount = 4;\nfloat xpEach = totalXP / playerCount;\nDebug.Log(xpEach);`,
  ],
  check(result) {
    if (result.env.xpEach !== 25) return { pass: false, msg: `Expected xpEach to equal 25 — found: ${result.env.xpEach}` };
    if (!result.log.includes(25)) return { pass: false, msg: `xpEach needs to be printed.` };
    return { pass: true };
  },
},
{
  id: "unity-01e",
  tag: "UNITY BASICS 05",
  title: `"Make a Choice"`,
  brief: () =>
    `Scripts need to react differently depending on the situation. Declare health as 20, then print "Critical!" only if health is less than 25.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 9,
  language: "csharp",
  hints: [
    `An if statement runs its block only when the condition inside the parentheses is true.`,
    `Pattern: if (health < 25) { ... }`,
    `Full pattern: float health = 20;\nif (health < 25) {\n  Debug.Log("Critical!");\n}`,
  ],
  check(result) {
    if (!result.log.includes("Critical!")) {
      return { pass: false, msg: `Console doesn't show "Critical!" — check your condition and health value.` };
    }
    return { pass: true };
  },
},
{
  id: "unity-01f",
  tag: "UNITY BASICS 06",
  title: `"Or Else"`,
  brief: () =>
    `An if on its own only handles the "yes" case — the "otherwise" case gets silently skipped. Declare health as 80, print "Critical!" if health is less than 25, otherwise print "OK".`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 9,
  language: "csharp",
  hints: [
    `Add an else block right after the if's closing brace, for the "otherwise" case.`,
    `Pattern: if (...) { ... } else { ... }`,
    `Full pattern: float health = 80;\nif (health < 25) {\n  Debug.Log("Critical!");\n} else {\n  Debug.Log("OK");\n}`,
  ],
  check(result) {
    if (!result.log.includes("OK")) {
      return { pass: false, msg: `Console doesn't show "OK" — with health at 80, the else branch should run.` };
    }
    return { pass: true };
  },
},
{
  id: "unity-01g",
  tag: "UNITY BASICS 07",
  title: `"Do It Again, and Again"`,
  brief: () =>
    `Sometimes you need to repeat an action a fixed number of times — reloading ammo, spawning enemies. Print the numbers 1 through 5 to the console using a loop, not five separate Debug.Log lines.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 10,
  language: "csharp",
  hints: [
    `A for loop has three parts, separated by semicolons: a starting counter, a condition to keep going, and how the counter changes each pass.`,
    `Pattern: for (int i = 1; i <= 5; i++) { ... }`,
    `Full pattern: for (int i = 1; i <= 5; i++) {\n  Debug.Log(i);\n}`,
  ],
  check(result) {
    for (let n = 1; n <= 5; n++) {
      if (!result.log.includes(n)) return { pass: false, msg: `Console is missing ${n} — did the loop run all 5 times?` };
    }
    return { pass: true };
  },
},
{
  id: "unity-01h",
  tag: "UNITY BASICS 08",
  title: `"Counting Backwards"`,
  brief: () =>
    `Loops don't have to count up. Print the numbers 5 down to 1, in that order, using a loop.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 9,
  language: "csharp",
  hints: [
    `Start the counter at 5 instead of 1, keep going while it's still 1 or more, and count DOWN each pass instead of up.`,
    `Use -- instead of ++ for the counting-down part.`,
    `Full pattern: for (int i = 5; i >= 1; i--) {\n  Debug.Log(i);\n}`,
  ],
  check(result) {
    const idx5 = result.log.indexOf(5);
    const idx1 = result.log.indexOf(1);
    if (idx5 === -1 || idx1 === -1) return { pass: false, msg: `Console should show every number from 5 down to 1.` };
    if (idx5 > idx1) return { pass: false, msg: `Numbers printed in the wrong order — 5 should come out before 1, not after.` };
    return { pass: true };
  },
},
{
  id: "unity-01i",
  tag: "UNITY BASICS 09",
  title: `"Repeat Until Ready"`,
  brief: () =>
    `for loops are great when you know exactly how many times to repeat. Sometimes you don't — you just want to keep going until some condition becomes false. Starting with charge at 0, keep adding 20 to it and printing it, until charge reaches 100 or more.`,
  starter: `public class PlayerScript : MonoBehaviour {\n    void Start() {\n        float charge = 0;\n\n    }\n\n    void Update() {\n\n    }\n}\n`,
  reward: 10,
  language: "csharp",
  hints: [
    `A while loop only needs a condition — no separate counter setup or increment built into its syntax like for has.`,
    `Pattern: while (charge < 100) { ... }`,
    `Full pattern: while (charge < 100) {\n  charge += 20;\n  Debug.Log(charge);\n}`,
  ],
  check(result) {
    if (result.env.charge < 100) return { pass: false, msg: `charge ended at ${result.env.charge} — it should reach at least 100.` };
    if (!result.log.includes(20)) return { pass: false, msg: `Doesn't look like charge was printed along the way.` };
    return { pass: true };
  },
},
]);