/**
 * KidsWow Stories — add a new entry to `stories` to show another slide in the carousel.
 */
export const KIDSWOW_STORIES_INTRO = {
  quote:
    "No one can know a child's future, yet there are hints from early ages if we learn to see their potential.",
  attribution: "— Warren Okerman, founder and owner of KidsWow",
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
    text: "One junior high school girl was in our STEM beta program learning the simple coding rules of java script. Java script is often used for graphics and artwork on various websites. She had been given a very simple program that could draw lines uisng dots. She was just supposed to copy the program and modify it slightly.There were several students in the class, so I was not watching how she created her project. When I came back around to check on her progress, she had used the simple dots program to draw the image of a famous anime character. The character was recognizable. I got contagiously excited. She had done something beyond what I thought possible. That was an important moment. A few years later, she decided that she was going to pursue a career in graphic design.",
  },
  {
    id: "guitar-composer",
    label: "Seeing the potential early",
    text: "One young man was in high school and started learning to play the guitar six months earlier. We were friends with the parents and as a result were invited to a high school event where he was going to play a guitar solo. I went out of friendship and genuine interest. He only had six months of experience playing the guitar, so his skill level was not impressive. It was his passion and confidence that caught my attention. I told his mom afterward, \"You know your son has real talent in music, don't you?\" She admitted that she had never thought about it until I mentioned it. That event triggered a new life trajectory. He eventually studied music in Boston at a famous college and became a composer.",
  },
  {
    id: "engineering-path",
    label: "From restless learner to engineer",
    text: "Another young man was a long-term student of mine. He was only four years old when he first came to learn English as a second language through our KidsWow English program. He had so much energy he would practically bounce off the walls. His progress was slow because it was difficult to help him focus, but he continued steadily. In 5th or 6th grade he started our STEM beta program. I began to notice he had settled down more and would actually do more than I asked him to. That was key. As he excelled in our after-school STEM class, I saw his real talent. I told his parents, \"Your son has real potential in engineering.\" His dad was amazed and his mom cried! They took me seriously and found an engineering high school and college that would give their son a clear path into the engineering world. He has now graduated in that field.",
  },
];
