import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }

  return surpriseMePrompts[randomIndex];
}

export async function downloadImage(_id, image) {
  FileSaver.saveAs(image, `download-${_id}.jpg`);
}
