// Server component that injects a JSON-LD structured-data block.
// Usage: <JsonLd data={serviceJsonLd({ ... })} />
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
