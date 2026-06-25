export const CONTACT_STEPS = [
  { id: 1, label: "Contact Info" },
  { id: 2, label: "Your Group" },
  { id: 3, label: "Additional Info" },
] as const;

export const PROGRAM_LOCATION_OPTIONS = [
  {
    value: "you_to_us",
    label: "At a KidsWow location",
  },
  {
    value: "we_to_you",
    label: "At your location",
    hint: "(space must be suitable)",
  },
  {
    value: "remote_only",
    label: "Online / remote only",
  },
] as const;

export const GROUP_TYPE_OPTIONS = [
  { value: "homeschool", label: "Homeschool Group" },
  { value: "friends_families", label: "Group of friends/families" },
  { value: "school", label: "School/Class" },
  { value: "church", label: "Church" },
  { value: "other", label: "Other" },
] as const;

export const AGE_GROUP_OPTIONS = [
  { value: "under_7", label: "Under 7" },
  { value: "7_10", label: "7–10" },
  { value: "11_14", label: "11–14" },
  { value: "15_plus", label: "Ages 15+" },
  { value: "other_mixed", label: "Other/Mixed Ages" },
] as const;

export const PROGRAM_LENGTH_OPTIONS = [
  { value: "single_workshop", label: "Single Workshop (1–3 hrs)" },
  { value: "multi_day", label: "Multi-day Experience (1–3 days)" },
  { value: "ongoing", label: "Ongoing (weekly/semester long)" },
  {
    value: "not_sure",
    label: "Not Sure – Open to Recommendation",
  },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under_500", label: "Under $500" },
  { value: "500_1000", label: "$500–$1000" },
  { value: "1000_2500", label: "$1000–$2500" },
  { value: "need_quote", label: "Not Sure – I Need a Quote" },
] as const;

export const DECISION_MAKER_OPTIONS = [
  { value: "me", label: "That's me!" },
  { value: "check_with_other", label: "I need to check with another" },
  { value: "someone_else", label: "Someone else makes the decision" },
] as const;

export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  programLocation: string;
  groupType: string;
  groupTypeOther: string;
  numKids: string;
  organizationName: string;
  ageGroup: string;
  ageGroupOther: string;
  winForKids: string;
  programLength: string;
  timingPreferences: string;
  budget: string;
  decisionMaker: string;
  readyForDeposit: string;
  howDidYouHear: string;
};

export const INITIAL_CONTACT_FORM: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  cityState: "",
  programLocation: "",
  groupType: "",
  groupTypeOther: "",
  numKids: "",
  organizationName: "",
  ageGroup: "",
  ageGroupOther: "",
  winForKids: "",
  programLength: "",
  timingPreferences: "",
  budget: "",
  decisionMaker: "",
  readyForDeposit: "",
  howDidYouHear: "",
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

/** Max character counts — enforced on client inputs and server validation. */
export const CONTACT_FIELD_LIMITS = {
  fullName: 100,
  email: 254,
  phone: 30,
  cityState: 100,
  groupTypeOther: 150,
  numKids: 10,
  organizationName: 150,
  ageGroupOther: 100,
  winForKids: 2000,
  timingPreferences: 2000,
  readyForDeposit: 500,
  howDidYouHear: 2000,
} as const;

/** Minimum length for free-text answers (anti-spam). */
export const CONTACT_FIELD_MIN_LENGTHS = {
  winForKids: 15,
  howDidYouHear: 10,
  readyForDeposit: 2,
} as const;

export function clampContactField<K extends keyof typeof CONTACT_FIELD_LIMITS>(
  key: K,
  value: string,
): string {
  return value.slice(0, CONTACT_FIELD_LIMITS[key]);
}

export function clampContactForm(data: ContactFormData): ContactFormData {
  return {
    ...data,
    fullName: clampContactField("fullName", data.fullName),
    email: clampContactField("email", data.email),
    phone: clampContactField("phone", data.phone),
    cityState: clampContactField("cityState", data.cityState),
    groupTypeOther: clampContactField("groupTypeOther", data.groupTypeOther),
    numKids: clampContactField("numKids", data.numKids),
    organizationName: clampContactField("organizationName", data.organizationName),
    ageGroupOther: clampContactField("ageGroupOther", data.ageGroupOther),
    winForKids: clampContactField("winForKids", data.winForKids),
    timingPreferences: clampContactField("timingPreferences", data.timingPreferences),
    readyForDeposit: clampContactField("readyForDeposit", data.readyForDeposit),
    howDidYouHear: clampContactField("howDidYouHear", data.howDidYouHear),
  };
}

function labelFor(
  options: readonly { value: string; label: string; hint?: string }[],
  value: string,
) {
  const option = options.find((item) => item.value === value);
  if (!option) return value;
  return option.hint ? `${option.label} ${option.hint}` : option.label;
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!data.cityState.trim()) {
    errors.cityState = "Please enter your city and state.";
  }
  if (!data.programLocation) {
    errors.programLocation =
      "Please select where you would like the program to take place.";
  }

  if (!data.groupType) {
    errors.groupType = "Please select what kind of group you are.";
  } else if (data.groupType === "other" && !data.groupTypeOther.trim()) {
    errors.groupTypeOther = "Please tell us about your group.";
  }
  if (!data.numKids.trim()) {
    errors.numKids = "Please enter the number of kids participating.";
  }
  if (!data.ageGroup) {
    errors.ageGroup = "Please select an age group.";
  } else if (data.ageGroup === "other_mixed" && !data.ageGroupOther.trim()) {
    errors.ageGroupOther = "Please tell us the ages in your group.";
  }
  if (!data.winForKids.trim()) {
    errors.winForKids = "Please share what would make this a win for your kids.";
  } else if (
    data.winForKids.trim().length < CONTACT_FIELD_MIN_LENGTHS.winForKids
  ) {
    errors.winForKids = "Please share a bit more detail (at least a sentence or two).";
  }

  if (!data.programLength) {
    errors.programLength = "Please select a program length.";
  }
  if (!data.budget) errors.budget = "Please select a budget range.";
  if (!data.decisionMaker) {
    errors.decisionMaker = "Please tell us who makes the final decision.";
  }
  if (!data.readyForDeposit.trim()) {
    errors.readyForDeposit = "Please let us know if you are ready for a deposit.";
  } else if (
    data.readyForDeposit.trim().length < CONTACT_FIELD_MIN_LENGTHS.readyForDeposit
  ) {
    errors.readyForDeposit = "Please enter a short answer.";
  }
  if (!data.howDidYouHear.trim()) {
    errors.howDidYouHear = "Please tell us how you heard about us.";
  } else if (
    data.howDidYouHear.trim().length < CONTACT_FIELD_MIN_LENGTHS.howDidYouHear
  ) {
    errors.howDidYouHear = "Please share a bit more detail.";
  }

  return errors;
}

export function formatContactSubmission(data: ContactFormData) {
  return {
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    cityState: data.cityState.trim(),
    programLocation: labelFor(PROGRAM_LOCATION_OPTIONS, data.programLocation),
    groupType:
      data.groupType === "other"
        ? `Other: ${data.groupTypeOther.trim()}`
        : labelFor(GROUP_TYPE_OPTIONS, data.groupType),
    numKids: data.numKids.trim(),
    organizationName: data.organizationName.trim() || "—",
    ageGroup:
      data.ageGroup === "other_mixed"
        ? `Other/Mixed: ${data.ageGroupOther.trim()}`
        : labelFor(AGE_GROUP_OPTIONS, data.ageGroup),
    winForKids: data.winForKids.trim(),
    programLength: labelFor(PROGRAM_LENGTH_OPTIONS, data.programLength),
    timingPreferences: data.timingPreferences.trim() || "—",
    budget: labelFor(BUDGET_OPTIONS, data.budget),
    decisionMaker: labelFor(DECISION_MAKER_OPTIONS, data.decisionMaker),
    readyForDeposit: data.readyForDeposit.trim(),
    howDidYouHear: data.howDidYouHear.trim(),
  };
}

export function buildContactEmailHtml(data: ReturnType<typeof formatContactSubmission>) {
  const rows = Object.entries(data)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e8e4dc;font-weight:600;color:#3D5F7C;text-transform:capitalize;vertical-align:top;width:180px;">${key.replace(/([A-Z])/g, " $1")}</td><td style="padding:8px 12px;border-bottom:1px solid #e8e4dc;color:#2D2D2D;">${escapeHtml(String(value)).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;color:#2D2D2D;">
      <h1 style="color:#3D5F7C;font-size:22px;margin-bottom:8px;">New KidsWow Program Inquiry</h1>
      <p style="color:#5DA9C6;margin-top:0;">Submitted from kidswow.com/contact</p>
      <table style="width:100%;border-collapse:collapse;margin-top:24px;background:#FAF7F2;border-radius:12px;overflow:hidden;">${rows}</table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
