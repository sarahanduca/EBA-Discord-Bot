export default function (msg) {
  const embed = new MessageEmbed().setDescription(`BBB? 👀`).setColor(0x1520a6);
  msg.channel.send(embed);
}
