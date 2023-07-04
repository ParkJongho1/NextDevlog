export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
