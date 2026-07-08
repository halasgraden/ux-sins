import { useJourney } from "../../context/JourneyProvider.jsx";
import React from "react";

const formDataInitial = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  company: "",
  role: "",
  teamSize: "",
  hearAboutUs: [],
  biggestFear: "",
  hotTake: "",
  color: "",
  stressLevel: "5",
};

export default function Onboarding() {
  const { advance } = useJourney();
  const [progressBar, setProgressBar] = React.useState(0);
  const [tier, setTier] = React.useState(1);
  const [checkbox, setCheckbox] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  const [formData, setFormData] = React.useState(formDataInitial);

  function handleChange(fieldName, value) {
    const updatedFormData = { ...formData, [fieldName]: value };
    setFormData(updatedFormData);

    const tier1Fields = ["username", "email", "password", "confirmPassword"];
    const tier1Complete = tier1Fields.every((key) => updatedFormData[key]);

    if (tier1Complete) {
      setTier(2);
    }

    const tier2Fields = ["company", "role", "teamSize", "hearAboutUs"];
    const tier2Complete = tier2Fields.every((key) =>
      Array.isArray(updatedFormData[key])
        ? updatedFormData[key].length > 0
        : updatedFormData[key],
    );

    if (tier2Complete) {
      setTier(3);
    }

    const tier3Fields = ["biggestFear", "hotTake", "color", "stressLevel"];
    const tier3Complete = tier3Fields.every((key) => updatedFormData[key]);
  }

  function handleClear() {
    setFormData(formDataInitial);
    setTier(1);
    setCheckbox(false);
    setSubmitError(false);
  }

  function toggleCheckbox() {
    setCheckbox((toggle) => !toggle);
  }

  return (
    <main>
      <button onClick={advance}>Advance</button>
      <form id="onboarding-form">
        <section className="tier1-form">
          <input
            type="text"
            value={formData.username}
            placeholder="Username"
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <input
            type="text"
            value={formData.email}
            placeholder="Email"
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="password"
            value={formData.password}
            placeholder="Password"
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <input
            type="password"
            value={formData.confirmPassword}
            placeholder="Confirm password"
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
          />
        </section>
        {tier >= 2 && (
          <section className="tier2-form">
            <input
              type="text"
              value={formData.company}
              placeholder="Company"
              onChange={(e) => handleChange("company", e.target.value)}
            />
            <div className="role-container">
              <label>What is your role?</label>
              <select
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
              >
                <option value="">Select your role</option>
                <option value="manager">Manager</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
                <option value="engineer">Engineer</option>
                <option value="analyst">Analyst</option>
                <option value="consultant">Consultant</option>
                <option value="director">Director</option>
                <option value="vp">VP of ...Something?</option>
                <option value="coordinator">Coordinator</option>
                <option value="specialist">Specialist</option>
                <option value="thought-leader">Thought Leader</option>
                <option value="visionary">Visionary</option>
                <option value="guru">Guru</option>
                <option value="rockstar">Underwater Basket Weaver</option>
                <option value="pivot-enthusiast">Pivot Enthusiast</option>
                <option value="disruptor">Disruptor</option>
                <option value="synergist">Synergist</option>
                <option value="other">Other</option>
                <option value="prefer-not">Prefer Not to Say</option>
                <option value="unsure">Still Figuring That Out</option>
              </select>
            </div>

            <div className="teamSize-container">
              <label>How big is your team?</label>
              <select
                value={formData.teamSize}
                onChange={(e) => handleChange("teamSize", e.target.value)}
              >
                <option value="">Select team size</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="20">20</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="complicated">It's Complicated</option>
                <option value="define-team">Define "Team"</option>
                <option value="too-many">Too Many</option>
                <option value="not-enough">Not Enough</option>
              </select>
            </div>
            <div className="hearAboutUs-container">
              <label>How did you hear about us?</label>
              <select
                multiple
                value={formData.hearAboutUs}
                onChange={(e) =>
                  handleChange(
                    "hearAboutUs",
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value,
                    ),
                  )
                }
              >
                <option value="friend">A Friend</option>
                <option value="social">Social Media</option>
                <option value="search">Search Engine</option>
                <option value="dream">A Dream</option>
                <option value="therapist">My Therapist</option>
                <option value="voices">The Voices</option>
                <option value="manifested">I Manifested It</option>
                <option value="no-idea">Genuinely No Idea</option>
              </select>
            </div>
          </section>
        )}
        {tier >= 3 && (
          <section className="tier3-form">
            <input
              type="text"
              value={formData.biggestFear}
              placeholder="Biggest Fear?"
              onChange={(e) => handleChange("biggestFear", e.target.value)}
            />
            <input
              type="text"
              value={formData.hotTake}
              placeholder="Hot Take?"
              onChange={(e) => handleChange("hotTake", e.target.value)}
            />

            <div className="color-container">
              <label>What's your favorite color?</label>
              <select
                value={formData.color}
                onChange={(e) => handleChange("color", e.target.value)}
              >
                <option value="">Pick a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="cyan">Cyan</option>
                <option value="#FFFFFF">#FFFFFF</option>
              </select>
            </div>

            <input
              type="range"
              min={1}
              max={10}
              value={formData.stressLevel}
              onChange={(e) => handleChange("stressLevel", e.target.value)}
            />
          </section>
        )}
        <section className="end-of-form">
          <div className="terms">
            <button
              type="button"
              className="checkbox"
              onClick={toggleCheckbox}
            ></button>
            <p>
              By clicking 'Submit', you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>

          {submitError && (
            <p className="error-message">
              Unable to process your request. Please try again. (ERR_FORM_422)
            </p>
          )}
          <button
            className="submit-button"
            onClick={(e) => {
              e.preventDefault();
              if (checkbox) {
                advance();
              } else {
                setSubmitError(true);
              }
            }}
          >
            Submit
          </button>
          <button className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </section>
      </form>
    </main>
  );
}
