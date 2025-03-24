import { notFound } from "next/navigation";
import { getTournamentData } from "@/lib/tournament-data";
import TournamentClient from "./tournament-client";

export default async function TournamentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Correctly use params.slug directly without awaiting params
  const tournament = getTournamentData(slug);

  // Handle 404 if tournament not found
  if (!tournament) return notFound();

  // Pass the tournament data to the client component
  return <TournamentClient tournament={tournament} />;
}
