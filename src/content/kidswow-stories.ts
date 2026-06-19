/**
 * KidsWow Stories — add a new entry to `stories` to show another slide in the carousel.
 */
export const KIDSWOW_STORIES_INTRO = {
  quote:
    "No one can know a child's future, yet there are hints from early ages if we learn to see their potential.",
  attribution: "— Warren Okerman, founder of KidsWow",
} as const;

export type KidsWowStory = {
  id: string;
  /** Short label for the slide (optional context, not the child's name) */
  label: string;
  text: string;
};

export const KIDSWOW_STORIES: KidsWowStory[] = [
  {
    id: "graphic-design-anime",
    label: "Unlocking creativity in STEM",
    text: "One KidsWow STEM participant had been given a very simple program that could draw lines using dots. When I came back around to check on her progress, she had used the simple dots program to draw the image of a famous anime character. The character was recognizable. I got contagiously excited. That was an important moment. A few years later, she decided that she was going to pursue a career in graphic design.",
  },
  {
    id: "guitar-composer",
    label: "Seeing the potential early",
    text: 'I was invited to a high school event where a friend\'s son was going to play a guitar solo after six months of practice. His skill level was not impressive, but his passion and confidence caught my attention. I told his mom afterward, "You know your son has real talent in music, don\'t you?" She admitted that she had never thought about it until I mentioned it. That event triggered a new life trajectory. He eventually studied music in Boston at a famous college and became a composer.',
  },
  {
    id: "engineering-path",
    label: "From restless learner to engineer",
    text: 'One KidsWow learner had so much energy he would practically bounce off the walls. As he grew older, he started to focus better. He would do more than he was required to do and I saw him excel in our after-school STEM program. I told his parents, "Your son has real potential in engineering." They found a school that would give their son a clear path into the engineering world. He has now graduated in that field.',
  },
];
