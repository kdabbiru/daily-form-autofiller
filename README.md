# Google Form AutoFiller (For Intellipaat Feedback)

Because I'm too lazy to fill the same form every single day — and if you're using this, you're probably just as lazy as me. Life’s too short to waste time on boring stuff — let automation handle the grind. 😎💤
---

## ⚙️ What It Does

- Fills in all the answers automatically
- Works only on the specific Google Form used by my batch
- Saves time every day — no more manual filling

---

## 🚀 How to Install

1. Download or clone this folder
2. Open Chrome and go to: `chrome://extensions`
3. Turn on **Developer Mode** (top right)
4. Click **Load Unpacked**
5. Select this folder

---

## ✅ How to Use

1. Open the feedback form:
2. Click the extension icon in your browser
3. The form gets filled automatically

---

## ✏️ Customize Answers

To change the answers, open `content.js` and edit the values like this:

```js
emailTextbox.value = "your@email.com";
trainerNameTextbox.value = "Trainer Name";
feedbackTextarea.value = "Any comments...";
