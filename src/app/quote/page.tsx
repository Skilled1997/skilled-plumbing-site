import { redirect } from "next/navigation";
import { SERVICEM8_BOOKING_URL } from "@/lib/constants";

export default function Page() {
  redirect(SERVICEM8_BOOKING_URL);
}
