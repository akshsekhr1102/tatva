// This is a Server Component
import { notFound } from "next/navigation";
import { evento } from "@/exports/export";
import type { Event } from "@/lib/types";
import EventPageClient from "./event-client-page";
// Expanded dummy data
const events: Event[] = evento;

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params promise to get the slug
  const { slug } = await params;

  // Find the event data
  const event = events.find((e) => e.slug === slug);

  // Handle 404 if event not found
  if (!event) return notFound();

  // Pass the event data to the client component
  return <EventPageClient event={event} />;
}
