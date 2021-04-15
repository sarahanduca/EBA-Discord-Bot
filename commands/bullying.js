export default function (msg) {
  const arr = [
    "blz 👍 mork faz silêncio ai",
    "calaboca mork",
    "ta mas idai?",
    "calaboca mork plmd tem gente passando mal",
    "qq esse menino ta falando ainda? 🙄",
    "pls stop 🤚",
    "tu não tava no paredawn?",
  ];
  let rand = Math.floor(Math.random() * arr.length);
  msg.reply(arr[rand]);
}
