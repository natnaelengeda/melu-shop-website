export const dateConvertor = (date: string) => {
  const nowDate = new Date(date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[nowDate.getMonth()]} ${nowDate.getDate()}, ${nowDate.getFullYear()}`;
}