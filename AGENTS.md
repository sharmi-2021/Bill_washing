<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the invoice editor in a self-contained HTML document served from public and embedded by the TanStack home route, so the requested standalone download and live application use exactly the same implementation.
- Keep all invoice state in memory and perform calculations in the browser; this document-generation tool does not require accounts or remote storage.
- Embed the invoice logo as a data URL in the standalone HTML and reuse it in saved-invoice previews so downloads and printed invoices retain the same image without network access.
