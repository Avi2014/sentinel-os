import {
  Container,
  Page,
  PageHeader,
  PageSection,
} from "@components/common";

export function HomePage() {
  return (
    <Container>
      <Page>
        <PageHeader
          title="Dashboard"
          description="Welcome to SentinelOS."
        />

        <PageSection title="Overview">
          <div className="rounded-xl border border-[var(--border)] p-6">
            Dashboard widgets will be added in the next milestone.
          </div>
        </PageSection>
      </Page>
    </Container>
  );
}