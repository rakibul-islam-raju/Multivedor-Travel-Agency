import Slider from "@/app/(client)/(home)/_components/Slider";
import CTA from "@/components/CTA";
import { initialParams } from "@/config";
import { eventApi } from "@/lib/features/events/eventApi";
import { store } from "@/lib/store";
import { Suspense } from "react";
import Section from "../_components/Section";
import EventList from "./_components/EventList";
import EventListSkeleton from "./_components/EventListSkeleton";
import SearchForm from "./_components/SearchForm";
import ViewAllBtn from "./_components/ViewAllBtn";

export default async function Home() {
	const { data: initialEventsData } = await store.dispatch(
		eventApi.endpoints.getEvents.initiate(initialParams)
	);

	return (
		<>
			<section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-12 my-12">
				<div className="col-span-1 xl:col-span-2 text-center">
					<h6 className="text-lg font-semibold text-muted-foreground mb-2 uppercase tracking-widest">
						Choose the best destinaton
					</h6>
					<h2 className="text-3xl md:text-4xl mb-12 text-primary font-semibold">
						Plan Your Next Trip Now
					</h2>

					<SearchForm />
				</div>
				<div className="col-span-1">
					<Slider />
				</div>
			</section>

			<Section title="Featured Events" action={<ViewAllBtn />}>
				<Suspense fallback={<EventListSkeleton />}>
					<EventList initialEventsData={initialEventsData} />
				</Suspense>
			</Section>

			{/* <Section title="Ending Soon" action={<ViewAllBtn />}>
				<div className="grid grild-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{events?.results?.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			</Section> */}

			{/* <Section title="Limited Availability" action={<ViewAllBtn />}>
				<div className="grid grild-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{events?.results?.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			</Section> */}

			<CTA
				title="Discover Your Dream Destination"
				description="Join us on an unforgettable journey and make your travel dreams come true"
				buttonText="Explore More"
			/>
		</>
	);
}
