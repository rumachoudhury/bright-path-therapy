// "use client";

// import { useState } from "react";
// import Reveal from "./Reveal";

// export default function IntakeForm() {
//   const [formData, setFormData] = useState({
//     parentName: "",
//     childName: "",
//     email: "",
//     phone: "",
//     concerns: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     alert("Thank you for contacting us. Our team will reach out soon.");
//   };

//   return (
//     <section
//       id="intake-form"
//       className="py-[90px] bg-paper text-ink rounded-[40px] mx-3.5 md:mx-6"
//     >
//       <div className="max-w-[700px] mx-auto px-8">
//         <Reveal>
//           <span className="eyebrow">Get Started</span>

//           <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)] mt-3">
//             New Patient Intake Form
//           </h2>

//           <p className="mt-5 text-ink/70 leading-7">
//             Share some information about your needs and our team will contact
//             you to discuss the next steps.
//           </p>
//         </Reveal>

//         <Reveal className="mt-10">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               name="parentName"
//               placeholder="Parent / Guardian Name"
//               value={formData.parentName}
//               onChange={handleChange}
//               className="w-full rounded-xl px-5 py-4 border border-ink/10 bg-white text-ink"
//               required
//             />

//             <input
//               name="childName"
//               placeholder="Child's Name"
//               value={formData.childName}
//               onChange={handleChange}
//               className="w-full rounded-xl px-5 py-4 border border-ink/10 bg-white text-ink"
//               required
//             />

//             <div className="grid md:grid-cols-2 gap-5">
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full rounded-xl px-5 py-4 border border-ink/10 bg-white text-ink"
//                 required
//               />

//               <input
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full rounded-xl px-5 py-4 border border-ink/10 bg-white text-ink"
//               />
//             </div>

//             <textarea
//               name="concerns"
//               placeholder="Tell us about your concerns or therapy goals"
//               rows="5"
//               value={formData.concerns}
//               onChange={handleChange}
//               className="w-full rounded-xl px-5 py-4 border border-ink/10 bg-white text-ink"
//               required
//             />

//             <button
//               type="submit"
//               className="w-full rounded-full bg-ink text-white py-4 font-semibold hover:opacity-90 transition"
//             >
//               Submit Request
//             </button>
//           </form>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// ============================
"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const initialForm = {
  // Patient / child information
  childName: "",
  childAge: "",
  childDateOfBirth: "",

  // Parent / guardian information
  parentName: "",
  relationship: "",
  email: "",
  phone: "",

  // Address
  address: "",
  city: "",
  state: "",
  zipCode: "",

  // Therapy information
  primaryConcern: "",
  therapyGoals: "",
  previousTherapy: "",
  previousTherapyDetails: "",

  // Scheduling
  preferredDays: "",
  preferredTime: "",
  appointmentType: "In-person",

  // Insurance
  insuranceProvider: "",
  insuranceMemberId: "",

  // Emergency contact
  emergencyName: "",
  emergencyRelationship: "",
  emergencyPhone: "",

  // Additional information
  additionalNotes: "",

  // Consent
  consent: false,
};

export default function IntakeForm() {
  const [formData, setFormData] = useState(initialForm);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Remove old messages when user starts editing again
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    // Basic frontend validation
    if (!formData.consent) {
      setError("Please confirm that you agree to be contacted.");
      setLoading(false);
      return;
    }

    try {
      // IMPORTANT:
      // Your backend should have:
      // POST http://localhost:5000/api/intake
      const response = await fetch("http://localhost:5000/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit the intake form.");
      }

      setSuccess(
        "Thank you! Your intake request has been submitted. Our team will contact you soon.",
      );

      // Clear the form after successful submission
      setFormData(initialForm);
    } catch (err) {
      console.error("Intake form error:", err);

      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="intake-form"
      className="
        py-20
        bg-paper
        text-ink
        rounded-[40px]
        mx-3.5
        md:mx-6
        dark:bg-slate-900
        dark:text-white
      "
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <span className="eyebrow">Get Started</span>

          <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)] mt-3">
            New Patient Intake Form
          </h2>

          <p className="mt-5 text-ink/70 dark:text-white/70 leading-7">
            Please provide the information below so our team can learn more
            about your needs and contact you about the next steps.
          </p>
        </Reveal>

        {/* Success message */}
        {success && (
          <div
            className="
              mt-8
              rounded-xl
              border
              border-green-200
              bg-green-50
              text-green-800
              p-4
              dark:bg-green-950
              dark:border-green-800
              dark:text-green-200
            "
          >
            {success}
          </div>
        )}

        {/* Error message */}
        {error && (
          <div
            className="
              mt-8
              rounded-xl
              border
              border-red-200
              bg-red-50
              text-red-800
              p-4
              dark:bg-red-950
              dark:border-red-800
              dark:text-red-200
            "
          >
            {error}
          </div>
        )}

        <Reveal className="mt-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* =========================================
                SECTION 1 — CHILD INFORMATION
            ========================================== */}

            <div>
              <h3 className="text-xl font-semibold mb-5">Child Information</h3>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="childName"
                  placeholder="Child's Full Name"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="input"
                />

                <input
                  name="childAge"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Child's Age"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <input
                name="childDateOfBirth"
                type="date"
                value={formData.childDateOfBirth}
                onChange={handleChange}
                className="input mt-5"
              />
            </div>

            {/* =========================================
                SECTION 2 — PARENT / GUARDIAN
            ========================================== */}

            <div>
              <h3 className="text-xl font-semibold mb-5">
                Parent / Guardian Information
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="parentName"
                  placeholder="Parent / Guardian Name"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="input"
                />

                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  required
                  className="input"
                >
                  <option value="">Relationship to Child</option>
                  <option value="Parent">Parent</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
            </div>

            {/* =========================================
                SECTION 3 — ADDRESS
            ========================================== */}

            <div>
              <h3 className="text-xl font-semibold mb-5">Address</h3>

              <input
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleChange}
                className="input"
              />

              <div className="grid sm:grid-cols-3 gap-5 mt-5">
                <input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            {/* =========================================
                SECTION 4 — THERAPY INFORMATION
            ========================================== */}

            <div>
              <h3 className="text-xl font-semibold mb-5">
                Therapy Information
              </h3>

              <textarea
                name="primaryConcern"
                placeholder="What would you like support with?"
                rows="4"
                value={formData.primaryConcern}
                onChange={handleChange}
                required
                className="input"
              />

              <textarea
                name="therapyGoals"
                placeholder="What are your therapy goals?"
                rows="4"
                value={formData.therapyGoals}
                onChange={handleChange}
                className="input mt-5"
              />

              <select
                name="previousTherapy"
                value={formData.previousTherapy}
                onChange={handleChange}
                className="input mt-5"
              >
                <option value="">Has the child received therapy before?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              {formData.previousTherapy === "Yes" && (
                <textarea
                  name="previousTherapyDetails"
                  placeholder="Please briefly describe previous therapy experience."
                  rows="4"
                  value={formData.previousTherapyDetails}
                  onChange={handleChange}
                  className="input mt-5"
                />
              )}
            </div>

            {/* =========================================
                SECTION 5 — APPOINTMENT PREFERENCES
            ========================================== */}

            <div>
              <h3 className="text-xl font-semibold mb-5">
                Appointment Preferences
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <select
                  name="preferredDays"
                  value={formData.preferredDays}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Preferred Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                </select>

                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Preferred Time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <select
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
                className="input mt-5"
              >
                <option value="In-person">In-person</option>
                <option value="Telehealth">Telehealth</option>
                <option value="Either">Either</option>
              </select>
            </div>

            {/* =========================================
                SECTION 6 — INSURANCE
            ========================================== */}

            <div>
              <h3 className="text-xl font-semibold mb-5">
                Insurance Information
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="insuranceProvider"
                  placeholder="Insurance Provider"
                  value={formData.insuranceProvider}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  name="insuranceMemberId"
                  placeholder="Member ID"
                  value={formData.insuranceMemberId}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <p className="text-sm text-ink/60 dark:text-white/60 mt-3">
                Only collect insurance information if your organization has
                appropriate safeguards for storing and protecting it.
              </p>
            </div>

            {/* =========================================
                SECTION 7 — EMERGENCY CONTACT
            ========================================== */}

            <div>
              <h3 className="text-xl font-semibold mb-5">Emergency Contact</h3>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="emergencyName"
                  placeholder="Emergency Contact Name"
                  value={formData.emergencyName}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  name="emergencyRelationship"
                  placeholder="Relationship"
                  value={formData.emergencyRelationship}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <input
                name="emergencyPhone"
                type="tel"
                placeholder="Emergency Contact Phone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className="input mt-5"
              />
            </div>

            {/* =========================================
                SECTION 8 — ADDITIONAL INFORMATION
           ======================================= */}

            <div>
              <h3 className="text-xl font-semibold mb-5">
                Additional Information
              </h3>

              <textarea
                name="additionalNotes"
                placeholder="Is there anything else you would like our team to know?"
                rows="5"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="input"
              />
            </div>

            {/* =========================================
                SECTION 9 — CONSENT
            ========================================== */}

            <div
              className="
                rounded-xl
                border
                border-ink/10
                p-5
                dark:border-white/10
              "
            >
              <label className="flex gap-3 items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />

                <span className="text-sm leading-6">
                  I confirm that the information provided is accurate to the
                  best of my knowledge and I agree to be contacted by Bright
                  Path regarding this intake request.
                </span>
              </label>
            </div>

            {/* =========================================
                SUBMIT
            ========================================== */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-full
                bg-ink
                text-white
                py-4
                font-semibold
                hover:opacity-90
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Submitting..." : "Submit Intake Request"}
            </button>

            <p className="text-xs text-center text-ink/50 dark:text-white/50">
              Please do not include urgent or emergency information in this
              form. If you are experiencing an emergency, contact the
              appropriate emergency service.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
