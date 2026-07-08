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

const hearAboutUsOptions = [
  { value: "friend", label: "A Friend" },
  { value: "social", label: "Social Media" },
  { value: "search", label: "Search Engine" },
  { value: "dream", label: "A Dream" },
  { value: "therapist", label: "My Therapist" },
  { value: "voices", label: "The Voices" },
  { value: "manifested", label: "I Manifested It" },
  { value: "no-idea", label: "Genuinely No Idea" },
];

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "purple", label: "Purple" },
  { value: "orange", label: "Orange" },
  { value: "brown", label: "Brown" },
  { value: "black", label: "Black" },
  { value: "pink", label: "Pink" },
  { value: "cyan", label: "Cyan" },
  { value: "#FFFFFF", label: "#FFFFFF" },
];

export default function Onboarding() {
  const { advance } = useJourney();
  const [progressBar, setProgressBar] = React.useState(0);
  const [tier, setTier] = React.useState(1);
  const [checkbox, setCheckbox] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  const [formData, setFormData] = React.useState(formDataInitial);

  const tierProgress = { 1: 10, 2: 80, 3: 30 };

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

    if (tier3Complete) {
      setTier(4);
    }
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
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${tierProgress[tier]}%` }}
        ></div>
      </div>
      <form id="onboarding-form">
        <section className="tier1-form">
          <h2>Let's get you set up!</h2>
          <p>This will only take a moment.</p>
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

            <div className="hearAboutUs-container">
              <label>How did you hear about us?</label>
              <div className="hearAboutUs-options">
                {hearAboutUsOptions.map((option) => (
                  <label key={option.value} className="hearAboutUs-option">
                    <input
                      type="checkbox"
                      checked={formData.hearAboutUs.includes(option.value)}
                      onChange={() =>
                        handleChange(
                          "hearAboutUs",
                          formData.hearAboutUs.includes(option.value)
                            ? formData.hearAboutUs.filter(
                                (value) => value !== option.value,
                              )
                            : [...formData.hearAboutUs, option.value],
                        )
                      }
                    />
                    {option.label}
                  </label>
                ))}
              </div>
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
              <div className="color-options">
                {colorOptions.map((option) => (
                  <label key={option.value} className="color-option">
                    <input
                      type="checkbox"
                      checked={formData.color === option.value}
                      onChange={() => handleChange("color", option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="stress-container">
              <label>Stress Level</label>
              <div className="stress-scale">
                <span>1</span>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={formData.stressLevel}
                  onChange={(e) => handleChange("stressLevel", e.target.value)}
                />
                <span>10</span>
              </div>
            </div>
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
              if (checkbox && tier === 4) {
                advance();
              } else {
                setSubmitError(true);
              }
            }}
          >
            Submit
          </button>
          <button type="button" className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </section>
      </form>
    </main>
  );
}
