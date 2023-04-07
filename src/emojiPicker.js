import { setCurrentEmoji } from "./currentSelectedEmoji.js";

let lang = getLangCode();

export const openEmojiPicker = function () {
  sideToolSet.classList.add("shown");
};

export const closeEmojiPicker = function () {
  sideToolSet.classList.remove("shown");
};

function getLangCode() {
  const lang = document.querySelector("html").getAttribute("lang");
  return lang;
}

const lastUsedLocal = localStorage.getItem("lastUsedLocal");
if (lastUsedLocal !== lang) {
  indexedDB.deleteDatabase("PicMo-en");
}

localStorage.setItem("lastUsedLocal", lang);

// Development:
// './zh-cn/data.json'

// Production:
// /emoji/emojiartgenerator/${lang}/data.json

async function getEmojiData() {
  const emojiDataResponse = await fetch(`/emoji/emojiartgenerator/${lang}/data.json`);
  const emojiData = await emojiDataResponse.json();
  return emojiData;
}

// Development:
// './zh-cn/messages.json'

// Production:
// /emoji/emojiartgenerator/${lang}/messages.json

async function getMessages() {
  const messagesResponse = await fetch(`/emoji/emojiartgenerator/${lang}/messages.json`);
  const messages = await messagesResponse.json();
  return messages;
}

let picker;

export const currentSelection = document.querySelector("#current-selection span");
const body = document.querySelector("body");

// The picker must have a root element to insert itself into
const sideToolSet = document.querySelector("#side-tool-set");
sideToolSet.addEventListener("click", setCurrentEmoji);

const loading = document.querySelector("#current-selection .loading");

currentSelection.addEventListener("click", () => {
  if (!picker) {
    loading.classList.remove("hide");

    import("./picmo.js").then(async ({ createPicker }) => {
      // Create the picker
      const emojiData = await getEmojiData();

      const messages = await getMessages();

      picker = createPicker({
        rootElement: sideToolSet,
        emojiData,
        messages,
        i18n: lang,
      });
      loading.classList.add("hide");
      // The picker emits an event when an emoji is selected. Do with it as you will!
      picker.addEventListener("emoji:select", (event) => {
        setCurrentEmoji(event.emoji);
      });

      body.addEventListener("click", (e) => {
        if (
          e.target.closest("#side-tool-set") === sideToolSet ||
          e.target.closest("#current-selection span") === currentSelection
        ) {
          return;
        }
        closeEmojiPicker();
      });
    });
  }

  openEmojiPicker();
});
