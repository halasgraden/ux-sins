/*
    id: "",
    scene: 2, 
    name: "Name", 
    shortDescription: "This is a short description", 
    longDescription: "This is a long description",
    category: "Category (enum?)", 
    fix: "The fix",
    userThought: "Ex. why did this button not pop out to me?", 
    principle: "Principle name",
    reference: "reference"
*/

const sins = [
    //LANDING
{
    id: "bad-contrast-text",
    scene: 1, 
    name: "Squint and Miss", 
    shortDescription: "Text with bad contrast causes users to put in more effort to understand its meaning than they should have to.", 
    longDescription: "Text contrast isn't just a visual preference; it's a measurable, enforceable accessibility standard. WCAG 2.1 requires a minimum contrast ratio of 4.5:1 between text and its background, a threshold set because anything lower creates genuine reading difficulty for users with low vision, color blindness, or even just a bright screen in sunlight. When designers ignore this, they're quietly excluding a portion of their users entirely.",
    category: "Accessibility", 
    fix: "Ensure text has a contrast ratio of at least 4.5:1 (with few exceptions) against its background.",
    userThought: "What does that say? I have to squint my eyes to see that!", 
    principle: "WCAG Contrast Standard",
    reference: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
},
{
    id: "poor-hierarchy",
    scene: 1, 
    name: "Choose What's Important", 
    shortDescription: "When everything competes for attention equally, the user's eye has nowhere to land.", 
    longDescription: "Creating emphasis involves size, spacing, weight, and layout. Without proper use of these elements, your visual hierarchy is unclear and elements that should be emphasized get lost in the page.",
    category: "Category (enum?)", 
    fix: "Utilize size, spacing, weight, and layout to make your element stand out.",
    userThought: "What am I supposed to be looking at? Everything looks the same.", 
    principle: "Visual Hierarchy",
    reference: "https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/"
},
{
    id: "too-many-ctas",
    scene: 1, 
    name: "Choice Overload", 
    shortDescription: "Users become confused as the amount of complexity of choices increase.", 
    longDescription: "Hick's Law states that decision time increases logarithmically with the number of available choices, meaning every option you add compounds how long it takes a user to act. On a landing page, every call to action is a competing demand, and when there are too many, the brain stalls in choice paralysis not because the user is indecisive, but because the interface made choosing feel costly. The cruel irony is that adding more CTAs to capture more users often results in fewer clicks total.",
    category: "Cognitive Load", 
    fix: "Stick to one or two clear CTAs to influence the user's next action.",
    userThought: "There are too many choices. Which one to choose...", 
    principle: "Hick's Law",
    reference: "https://lawsofux.com/hicks-law/"
},
{
    id: "obscure-copy",
    scene: 1,
    name: "Lack of Intent",
    shortDescription: "This is a personal project. It will probably not change your life. When a site can't explain what it does in plain language or it over-promises, users leave before they ever become customers.",
    longDescription: "Users arrive at a landing page with a simple question: what is this and why should I care? When the answer is buried in vague, jargon-heavy language or motivational non-statements, users cannot complete that mental transaction and move on without engaging further.",
    category: "Expectations",
    fix: "Make your messaging match your brand and any promotional content, and explain your site in concise, specific terms a first-time visitor can understand immediately.",
    userThought: "What does this platform do? What am I supposed to do? This wasn't like the ads...",
    principle: "Clarity of Communication",
    reference: "Krug, S. (2000). Don't Make Me Think. New Riders Publishing."
},
{
    id: "double-popup",
    scene: 1, 
    name: "Surprise Frustration", 
    shortDescription: "Multiple popups simultaneously hijacks the user's attention and signals that the site values its own agenda over the user's.",
    longDescription: "Popups work when they are timely, singular, and relevant. When two fire back-to-back, the user is forced to make an immediate decision before they have even oriented themselves to the page. This pattern treats attention as something to be seized rather than earned, and the resulting frustration is one of the fastest ways to drive a user off the site.",
    category: "Autonomy", 
    fix: "Don't overdo it. Have one popup max, and avoid overtaking the entire screen.",
    userThought: "I haven't even read anything yet. Why are is it yelling at me?", 
    principle: "Respect for User Attention",
    reference: "Nielsen, J. (2000). Stop the Pop-Ups. Nielsen Norman Group. https://www.nngroup.com/articles/stop-the-pop-ups/"
},
{
    id: "slow-load",
    scene: 1, 
    name: "The Waiting Game", 
    shortDescription: "Every millisecond past 400ms is a millisecond the user spends reconsidering whether they actually need your product.", 
    longDescription: "The Doherty Threshold establishes that both user and system must respond to each other within 400ms to maintain engagement and a feeling of flow. Beyond that threshold, users disengage. They stop feeling like they are operating a tool and start feeling like they are waiting for one.",
    category: "Feedback", 
    fix: "Optimize load times to stay under 400ms where possible. If a wait is unavoidable, use honest progress indicators.",
    userThought: "Is it broken? Should I refresh?", 
    principle: "Doherty Threshold",
    reference: "https://lawsofux.com/doherty-threshold/"
},

//ONBOARDING

{
    id: "deceiving-form",
    scene: 2, 
    name: "Form That Never Ends", 
    shortDescription: "Revealing new fields as the user progresses exploits and traps them mid-commitment.", 
    longDescription: "By hiding the form's true length and expanding progressively as the user fills it out, it exploits the effort already invested to keep them going. The user isn't choosing to continue because the form is reasonable. They're continuing because stopping feels worse than finishing.",
    category: "Expectations", 
    fix: "Ensure expectations are set at the very beginning.",
    userThought: "How much more do I have to go? I'm getting bored of this.", 
    principle: "Zeigarnik Effect",
    reference: "https://lawsofux.com/zeigarnik-effect/"
},
{
    id: "reversed-buttons",
    scene: 2, 
    name: "Primary? Secondary? Who Knows.", 
    shortDescription: "Swapping button hierarchy tricks users into clicking the wrong action by exploiting their visual instincts.", 
    longDescription: "Users have spent years learning that filled, high-contrast buttons mean primary action and ghost or muted buttons mean secondary. This convention is so deeply ingrained that most users click based on visual weight alone without reading the label.",
    category: "Expectations", 
    fix: "Ensure the primary CTA has clear contrast from the rest of the options.",
    userThought: "This one looks important so I'll click it.", 
    principle: "Jakob's Law",
    reference: "https://lawsofux.com/jakobs-law/"
},
{
    id: "broken-checkbox",
    scene: 2, 
    name: "Check...?", 
    shortDescription: "A checkbox that doesn't change when clicked and looks nothing like a checkbox leaves users with no idea what state they're in.", 
    longDescription: "A square checkbox with a checkmark fill on selection is one of the most universally understood uses in UI design. Breaking both the shape and the feedback simultaneously removes every signal the user relies on. The wrong shape creates confusion before they click, and the missing fill state creates confusion after.",
    category: "Feedback", 
    fix: "Use standard square checkboxes with a clear, high-contrast fill state on selection. However, never rely on shape alone to communicate state change.",
    userThought: "Did I click that? Can I select multiple?", 
    principle: "Affordance and Feedback",
    reference: "https://www.uiuxatlas.com/lessons/foundations/affordances-signifiers-and-feedback/"
},
{
    id: "weird-scale-progress",
    scene: 2, 
    name: "Are We There Yet?", 
    shortDescription: "A progress bar that moves erratically any trust the user had in the process.", 
    longDescription: "Progress indicators exist for one reason: to give users an honest, calibrated sense of how far they have come and how far they have left to go. The moment a progress bar moves backwards, that contract is broken. Jumping to completion at the end compounds the violation.",
    category: "Feedback", 
    fix: "Progress indicators should always move forward and reflect actual task completion honestly. If the scope of a task changes, communicate that change explicitly rather than silently revising the bar.",
    userThought: "Did I do something wrong?", 
    principle: "Visibility of System Status",
    reference: "https://www.nngroup.com/articles/visibility-system-status/"
},
{
    id: "destructive-action",
    scene: 2, 
    name: "Oops. It's Gone.", 
    shortDescription: "Placing a destructive action next to a primary one at identical visual weight is a trap disguised as a choice.", 
    longDescription: "Error prevention is one of the most fundamental principles in interface design. Destructive actions — ones that delete, reset, or permanently remove user input — should be visually distinct, physically separated, and require confirmation before executing. When a button that wipes an entire form sits at the same size, color, and weight as the button that submits it, the user's muscle memory and visual scanning become liabilities rather than assets.",
    category: "Feedback", 
    fix: "Separate destructive actions from primary ones physically and visually. Introduce a confirmation step to ensure the user cannot accidentally trigger an irreversible action.",
    userThought: "I just spent eight minutes filling that out and I hit the wrong button. Now it's all gone.", 
    principle: "Error Prevention",
    reference: "https://www.nngroup.com/articles/ten-usability-heuristics/"
},
{
    id: "placeholder-labels",
    scene: 2, 
    name: "What Was This Field?", 
    shortDescription: "Placeholder text that vanishes on click leaves users with no idea what they were supposed to type.", 
    longDescription: "Persistent labels above inputs exist because users need to know what a field is asking for before, during, and after they type. Placeholder text creates the illusion of a label while functioning as nothing of the sort. It disappears the instant the user engages with the field, which is exactly when they need the guidance most. On a long form with many fields, this forces users to click in and out repeatedly just to remember what each field is for.",
    category: "Feedback", 
    fix: "Always use persistent labels above inputs that remain visible during and after entry. Show input requirements before submission, not after failure.",
    userThought: "I have to delete what I typed just to see what it's asking for. And now I have to retype it. Again.", 
    principle: "Visibility of System Status",
    reference: "https://www.nngroup.com/articles/ten-usability-heuristics/"
},

// PRODUCT

{
  id: "vague-product-description",
  scene: 3,
  name: "What Does This Even Do?",
  shortDescription: "A product that can't explain itself in plain language loses users before they even start.",
  longDescription: "Users arrive at a product with one question: what is this and why should I care? When the answer is buried in abstract language like 'collaborative workspace for modern teams,' the user has no actionable understanding of what the product does or whether it solves their problem.",
  category: "Expectations",
  fix: "Lead with a specific, concrete description of what the product does and who it is for.",
  userThought: "What does it actually do? What am I supposed to click?",
  principle: "Clarity of Communication",
  reference: "Krug, S. (2000). Don't Make Me Think. New Riders Publishing."
},
{
  id: "aggressive-empty-state",
  scene: 3,
  name: "Nothing Here Yet.",
  shortDescription: "An empty state with no guidance, no action, and no empathy is a dead end dressed up as a feature.",
  longDescription: "Empty states are one of the most underutilized design opportunities in any product. Done well, they orient the user, explain what belongs here, and provide a clear next action. Done poorly, they simply confirm that nothing exists, offer no path forward, and leave the user staring at a void wondering what they did wrong.",
  category: "Feedback",
  fix: "Every empty state should explain why it is empty, what the user can do to fill it, and ideally provide a direct action to get started. Treat it as an onboarding moment, not a loading failure.",
  userThought: "So what do I do? Is there a tutorial? A guide?",
  principle: "Visibility of System Status",
  reference: "https://www.nngroup.com/articles/ten-usability-heuristics/"
},
{
  id: "coming-soon-nav",
  scene: 3,
  name: "Coming Soon...?",
  shortDescription: "Shipping a nav full of broken links isn't a roadmap preview. It's a promise you can't keep.",
  longDescription: "Hick's Law tells us that more choices mean more cognitive load and longer decision times. A sidebar with twelve navigation items compounds this by implying the product has twelve distinct areas of functionality. The user has absorbed the cognitive cost of processing all those options.",
  category: "cognitive load",
  fix: "Only surface navigation items for features that actually exist. If a feature is in development, keep it off the nav entirely rather than advertising its absence.",
  userThought: "Coming soon. Coming soon. Coming soon. Coming soon. Oh. They all say that.",
  principle: "Hick's Law",
  reference: "https://lawsofux.com/hicks-law/"
},
{
  id: "vague-error",
  scene: 3,
  name: "ERR_PROJECT_NULL",
  shortDescription: "An error message that tells the user nothing useful is worse than no error message at all.",
  longDescription: "Good error messages do three things: explain what went wrong, explain why it went wrong, and tell the user what to do next. A message like 'Something went wrong. Please try again. (ERR_PROJECT_NULL)' does none of these. The error code sounds technical and specific while communicating nothing actionable. The user has no idea whether to retry, refresh, contact support, or simply give up.",
  category: "feedback",
  fix: "Write error messages in plain language that explain the specific problem and provide a concrete next step. Error codes are for logs, not users.",
  userThought: "ERR_PROJECT_NULL. What does that mean? Should I try again?",
  principle: "Error Prevention",
  reference: "https://www.nngroup.com/articles/ten-usability-heuristics/"
},

// CANCEL

{
  id: "absurd-ultimatum",
  scene: 4,
  name: "Are You Sure?",
  shortDescription: "Guilt-tripping users with fabricated loss statistics is manipulation dressed up as helpfulness.",
  longDescription: "Presenting users with a list of everything they stand to lose upon cancellation is a dark pattern that weaponizes loss aversion (the psychological tendency to feel losses more acutely than equivalent gains). When those losses are fabricated, inflated, or completely meaningless, the pattern crosses from persuasion into manipulation. The user is being emotionally coerced into staying by data that was never real to begin with.",
  category: "manipulation",
  fix: "Let users cancel without theatrics. If you want to retain them, offer genuine value.",
  userThought: "I have been a member for 4 minutes. Why does this feel so bad.",
  principle: "Loss Aversion",
  reference: "https://www.nngroup.com/articles/prospect-theory/"
},
{
  id: "fitts-button",
  scene: 4,
  name: "Catch Me If You Can",
  shortDescription: "A button that runs from your cursor and shrinks as you approach it is a direct violation of Fitts's Law.",
  longDescription: "Fitts's Law states that the time required to acquire a target is a function of the distance to the target and its size. Smaller targets that are farther away take exponentially longer to click. Designing a cancel button that actively increases its distance and decreases its size as the cursor approaches is just annoying lol.",
  category: "accessibility",
  fix: "Buttons for valid user actions should be large enough to click comfortably, stationary, and positioned consistently. A cancel option should never be harder to reach than the alternative.",
  userThought: "Did it just move? It got smaller. It moved again...",
  principle: "Fitts's Law",
  reference: "https://lawsofux.com/fittss-law/"
},
{
  id: "confirmshaming",
  scene: 4,
  name: "So You're Giving Up?",
  shortDescription: "Labeling the cancel confirmation as personal failure is emotional manipulation.",
  longDescription: "Confirmshaming uses asymmetric button language to make the user feel shame, guilt, or inadequacy for choosing to cancel. Rather than presenting a neutral choice between two options, it frames one option as personal failure and the other as the obviously correct choice for anyone with self-respect. The user is not being given a decision; they are being judged for having made one.",
  category: "manipulation",
  fix: "Confirmation dialogs should use neutral, parallel language that respects the user's decision. 'Cancel subscription' and 'Keep subscription' are correct.",
  userThought: "I haven't given up on anything. I just don't want this product anymore.",
  principle: "Emotional Design and Ethical Persuasion",
  reference: "https://www.deceptive.design/types/confirmshaming"
},
{
  id: "fake-countdown",
  scene: 4,
  name: "Hurry!!!",
  shortDescription: "A countdown timer without clear guidelines often creates anxiety without honesty.",
  longDescription: "Urgency is a legitimate persuasion tool when it reflects a real constraint. A timer that counts down to nothing in particular is not urgency, but rather anxiety. The user responds to the visual of a countdown regardless of whether the stakes are real, and designers who exploit this response without backing it with genuine consequence are trading long-term trust for short-term pressure.",
  category: "manipulation",
  fix: "Only use countdown timers when a genuine time constraint exists. If an offer expires, it should actually expire.",
  userThought: "I just need a second to think!",
  principle: "Scarcity and Urgency",
  reference: "https://www.deceptive.design"
}


]

export default sins