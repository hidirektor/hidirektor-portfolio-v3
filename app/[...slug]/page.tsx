import {redirect} from "next/navigation";

export default function FallbackToLanding() {
  redirect("/");
}

