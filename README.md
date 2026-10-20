# SKServices Starter

Mobile-first Next.js + TypeScript starter for the creator/brand collaboration product.

## Deploy with Render
- Create a **Web Service** connected to this GitHub repository.
- Runtime: Node
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Node 20+ recommended.

## Current status — important
This is an interactive **frontend prototype**, not a production app yet. Campaign creation and application clicks only update browser state for the current session. Sample creators and metrics are illustrative. Authentication, database persistence, real messaging, AI APIs, social integrations, payment processing, notification delivery, and secure admin authorization are not implemented yet.

Never commit real API keys, passwords, or `.env` files. Add secrets only through Render environment settings. Future services should be added as independent modules with server-side permissions, validation, database migrations, tests, and logs.
