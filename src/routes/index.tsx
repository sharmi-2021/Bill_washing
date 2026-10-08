import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Service Invoice | QuickWash Appliance Service Centre" },
      { name: "description", content: "Generate QuickWash Appliance Service Centre service and repair invoices with editable spare parts, automatic totals, and print or PDF export." },
      { property: "og:title", content: "QuickWash Appliance Service Centre — Service Invoices" },
      { property: "og:description", content: "Create a professional service invoice, calculate repair charges, and print or save as PDF." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe src="/invoice.html" title="QuickWash Appliance Service Centre invoice generator" className="block h-dvh w-full border-0 bg-background" />;
}
